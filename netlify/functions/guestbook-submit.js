const crypto = require('node:crypto');

const OWNER = 'ohhelloana';
const REPO = 'ohhelloana.blog';
const BASE_BRANCH = 'main';
const DATA_FILE_PATH = 'src/_data/guestbook.json';
const GITHUB_API = 'https://api.github.com';
const MIN_SUBMIT_SECONDS = 3;
const SITE_URL = 'https://ohhelloana.blog';
const AKISMET_API = 'https://rest.akismet.com/1.1/comment-check';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = new URLSearchParams(event.body || '');
  const name = (params.get('name') || '').trim();
  const url = (params.get('url') || '').trim();
  const email = (params.get('email') || '').trim();
  const message = (params.get('message') || '').trim();
  const honeypot = (params.get('website') || '').trim();
  const formLoadedAt = Number(params.get('formLoadedAt'));

  if (honeypot) {
    return redirect('ok');
  }

  if (!Number.isFinite(formLoadedAt) || formLoadedAt <= 0) {
    return redirect('ok');
  }

  const elapsedSeconds = (Date.now() - formLoadedAt) / 1000;
  if (elapsedSeconds < MIN_SUBMIT_SECONDS) {
    return redirect('ok');
  }

  if (!name || !email || !message) {
    return redirect('error');
  }

  const isSpam = await checkAkismetSpam({
    name,
    email,
    url,
    message,
    ip: clientIp(event),
    userAgent: event.headers['user-agent'] || '',
    referrer: event.headers['referer'] || event.headers['referrer'] || '',
  });

  if (isSpam) {
    return redirect('ok');
  }

  try {
    await openGuestbookPR({ name, url, message });
  } catch (err) {
    console.error('Guestbook PR creation failed:', err);
    return redirect('error');
  }


  try {
    await notifyPrivately({ name, url, email, message });
  } catch (err) {
    console.error('Guestbook notification relay failed:', err);
  }

  return redirect('ok');
};

function redirect(status) {
  return {
    statusCode: 303,
    headers: { Location: `/guestbook/?submitted=${status}` },
  };
}

function clientIp(event) {
  const forwardedFor = event.headers['x-forwarded-for'] || '';
  return event.headers['x-nf-client-connection-ip'] || forwardedFor.split(',')[0].trim();
}

async function checkAkismetSpam({ name, email, url, message, ip, userAgent, referrer }) {
  const apiKey = process.env.AKISMET_API_KEY;
  if (!apiKey) {
    console.warn('AKISMET_API_KEY not set; skipping spam check');
    return false;
  }

  const body = new URLSearchParams({
    api_key: apiKey,
    blog: SITE_URL,
    user_ip: ip || '',
    user_agent: userAgent || '',
    referrer: referrer || '',
    permalink: `${SITE_URL}/guestbook/`,
    comment_type: 'guestbook',
    comment_author: name,
    comment_author_email: email,
    comment_author_url: url || '',
    comment_content: message,
  });

  try {
    const res = await fetch(AKISMET_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });

    const debugHelp = res.headers.get('x-akismet-debug-help');
    const result = (await res.text()).trim();

    if (result !== 'true' && result !== 'false') {
      console.error('Akismet comment-check returned an unexpected response:', result, debugHelp);
      return false;
    }

    return result === 'true';
  } catch (err) {
    console.error('Akismet comment-check request failed:', err);
    return false;
  }
}

async function githubRequest(path, options = {}) {
  const res = await fetch(`${GITHUB_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API ${path} failed: ${res.status} ${text}`);
  }

  return res.json();
}

async function openGuestbookPR({ name, url, message }) {
  const baseRef = await githubRequest(`/repos/${OWNER}/${REPO}/git/ref/heads/${BASE_BRANCH}`);
  const baseSha = baseRef.object.sha;

  const branchName = `guestbook-entry/${Date.now()}`;
  await githubRequest(`/repos/${OWNER}/${REPO}/git/refs`, {
    method: 'POST',
    body: JSON.stringify({ ref: `refs/heads/${branchName}`, sha: baseSha }),
  });

  const currentFile = await githubRequest(
    `/repos/${OWNER}/${REPO}/contents/${DATA_FILE_PATH}?ref=${BASE_BRANCH}`
  );
  const currentEntries = JSON.parse(Buffer.from(currentFile.content, 'base64').toString('utf8'));

  const newEntry = {
    id: crypto.randomUUID(),
    name,
    url: url || null,
    message,
    date: new Date().toISOString(),
  };

  const updatedContent = Buffer.from(
    JSON.stringify([...currentEntries, newEntry], null, 2) + '\n',
    'utf8'
  ).toString('base64');

  await githubRequest(`/repos/${OWNER}/${REPO}/contents/${DATA_FILE_PATH}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: `Guestbook entry from ${name}`,
      content: updatedContent,
      sha: currentFile.sha,
      branch: branchName,
    }),
  });

  await githubRequest(`/repos/${OWNER}/${REPO}/pulls`, {
    method: 'POST',
    body: JSON.stringify({
      title: `Guestbook entry from ${name}`,
      head: branchName,
      base: BASE_BRANCH,
      body: [
        'New guestbook submission awaiting review.',
        '',
        `**Name:** ${name}`,
        `**URL:** ${url || '_none given_'}`,
        '**Message:**',
        '',
        `> ${message.replace(/\n/g, '\n> ')}`,
        '',
        '_Merge to publish. Close to reject._',
      ].join('\n'),
    }),
  });
}

async function notifyPrivately({ name, url, email, message }) {
  const siteUrl = process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (!siteUrl) {
    throw new Error('Site URL not available to relay Netlify Forms submission');
  }

  const body = new URLSearchParams({
    'form-name': 'guestbook-full',
    name,
    url,
    email,
    message,
  });

  const res = await fetch(siteUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!res.ok) {
    throw new Error(`Netlify Forms relay failed: ${res.status}`);
  }
}

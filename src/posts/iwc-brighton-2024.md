---	
layout: layouts/post.njk	
title: Reflections from IndieWebCamp Brighton
date: 2024-03-19
tags:	
  - post		
  - tech
  - IndieWeb
description: Thoughts on the sessions I attended at IndieWebCamp Brighton.
hasMood: false	
---	

The other weekend, I attended [IndieWebCamp Brighton](https://indieweb.org/2024/Brighton) and had a wonderful time! I've been working from home for four years, and most of my friends have left London, so events like this excite me to see internet buddies! [Like Jeremy said](https://adactio.com/notes/20962), I, too, feel like it was my RSS feed coming to life!

[Notes from the event were masterfully collected in IndieWeb's wiki](https://indieweb.org/2024/Brighton/Schedule#Saturday), but here are my write-up and thoughts on the sessions I attended. It was incredibly hard to pick which sessions to attend, as all the topics were interesting. 

## Day one - Unconference

### Energy Efficiency
I started to follow this topic a few years ago when the carbon calculator came out. It impacted how I added certain things to my website, which also positively impacted its performance. In 2022, at FFConf, I saw a talk by Natalia about a greener web that mentioned how streams are a source of pollution. Frankly, it had never occurred to me and has been bothering me a lot. It was [one of the decisions that led me to delete my Spotify account](https://ohhelloana.blog/goodbye-spotify/) and made me think about what other waste I was making. 

As captured in the notes, one of my comments was about how many automated processes are running in the background of running our personal websites. I could generate the HTML pages of my website locally and manually upload the files to my hosting. Instead, I have it on GitHub, which gets my commits and then triggers a build on Netlify and, later, a deployment. For all this cool tech to work, there are servers, energy consumption, data stored, etc. 

On the other hand, I promote the idea that your personal website should be a place where you experiment and learn. In the grand scheme of things, my personal website does not impact the environment, the same way that deleting my Spotify account hasn't improved the world, but it makes part of me give up taking space on the web.

I've wondered in the past if I could create some videos or even stream, but [not only do I have privacy concerns](https://ohhelloana.blog/overthinking-online-participation/), but I also know I would feel guilty if I didn't feel as sustainable as I could be. 

I really enjoyed the session, but I have a hang-up on feeling like I am doing too much digital waste instead of rightfully blaming the billionaires and their stupid private jets. 

### Site death
I love how I just carried on choosing slightly less happy themes. I loved that this topic was suggested, especially since I recently dealt with my dad's digital life. 

My mind was in two places during this session: how would I build a dead man's switch on my personal website, and what do I even want to happen if I suddenly die.

I still don't have an answer. My tech content will undoubtedly be useless, and my personal notes will only prove that I existed and had thoughts and opinions. 

Do I want a banner at the top explaining that I died? Maybe I should renew my domains for ten more years? Should I print my personal posts? I am still trying to figure out what I want. 

I keep thinking about the 80L plastic box at my mum's house with my dad's belongings that we picked that we wanted to keep. I wonder what he would have picked.

It also made me realise that because of digital cameras, only a few photos of me were printed from the age of 11 or 12 until my wedding. If I suddenly died, I don't think anyone would know about my teenage years. I wondered what my daughter would like to have from me. It is a digital dark age. Before worrying about my website, I should worry about my backups and create physical copies. See? More waste. 

### Hosting

I attended this session because I was keen to help if anyone had questions. I am trying to remember where I said this before, but deciding where to host your website in 2024 is awful. The search results are full of ads. Someone who wants their personal website to exist will struggle with this. No wonder websites like Squarespace have an extensive consumer base since they solve build and hosting. But their pricing is ridiculous.

I made a note that I would like to create a blog post where I try out and list free hosting services for anyone to host their HTML pages. Hopefully, this would help someone. 

### NFC

I really enjoyed this session with [Terrence](https://shkspr.mobi/blog/)! I've seen people sharing cool experiments like having your oyster card on your nails, but I never thought about how it works. I suggested having an NFC tag on my cat and pointing to her website. 
As soon as I got home, I planned to put the NFC sticker on her AirTag case. And I did it! Except her AirTag is also an NFC, so they clashed when I scanned it with my phone. I will get back to this—there must be a way of having a tiny one glued to her collar at a distance from the Airtag.

But the question was: how would you apply this to the IndieWeb? We thought of the dead man's switch! Maybe an API/smart URL on the other side of the NFC tag that, when run, would update the website so that it knows I am still alive? Maybe an NFC tag that opens a URL that tells your website to deploy a type of webmention (like a check-in). That would be fun!

I noticed that my library books have NFC tags! I can't stop seeing them everywhere I go now!

### Personal Website Pain Points
[Maggie](https://maggieappleton.com/) initially suggested this topic, and I suggested another topic loosely titled "tech debt" on your personal website. I proposed merging the topics into one session to make it easier to organise the unconference, and it worked out well. 

Maggie was curious to know people's pain points on their websites because they are working on building a digital garden tool (which sounds incredible).

I shared how I have so many regrets about decisions I made on this website: URLs, asset locations, organisation, very old code that still hasn't been refactored, etc. 

It was amusing to realise that the way I organise my blog posts' URLs, which I regret, is how many people wanted to do on their websites.

I've recently made better mental efforts to avoid allowing tech debt to paralyse me and make me feel like my blog codebase has to be perfect.

## Day two - Hands-on
My day started by sitting down with [Paul](https://paulrobertlloyd.com/) and trying out [IndieKit](https://getindiekit.com/). I've been dreaming of creating my micropub endpoint, but lack of time and confidence has stalled me. [We got it working](https://ohhelloana.blog/testing-indiekit/)! It turns out that having sat down together to try to run it allowed us to spot some bugs and gave Paul a different perspective on how another person could use their tool. I loved it! Now, I need to work on my plug-in to ensure the templates are created for my specific needs. After that, I will be unstoppable!

This took a chunk of the morning, so I needed an achievable task after it. I decided to add a [privacy page](https://ohhelloana.blog/privacy-policy/) to my blog. A while back, through my analytics, I saw someone having thoughts and opinions on my analytics usage and the way it was worded made it sound like I used trackers of the invasive kind. It was time to add a page that clarified my analytics usage. 

The day was wrapped up with impressive demos from everyone. 

Thank you so much, [Paul](https://paulrobertlloyd.com/) and [Mark](https://qubyte.codes/), for organising it! I had a fantastic time and hope it will become a frequent event.

More people wrote about their day, and you should check it out!

* [IndieWebCamp Brighton 2024 by Mark](https://qubyte.codes/blog/indiewebcamp-brighton-2024)
* [Indie webbing by Jeremy](https://adactio.com/journal/20968)
* [What I created at IndieWebCamp by Tantek](https://tantek.com/2024/072/t1/created-at-indiewebcamp-brighton)
* [Plugging into the IndieWeb by Jon](https://roobottom.com/articles/plugging-into-the-indieweb/)
* [IndieWebCamp Brighton 2024 by Murray](https://theadhocracy.co.uk/wrote/indiewebcamp-brighton-2024)






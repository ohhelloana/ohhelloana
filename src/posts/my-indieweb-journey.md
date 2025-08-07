---	
layout: layouts/post.njk	
title: "My IndieWeb Journey: Building, Sharing, and Owning Your Online Presence."
date: 2025-08-07
tags:	
  - post		
  - personal
  - tech
  - IndieWeb
description: "Transcription of my talk for the OpenUK meet-up. Sharing my journey from being a creative teenager building websites in the early 2000s to becoming involved with IndieWeb through the London Homebrew Website Club."
---	

<aside role="note" class="article__top-update">
  <p>Last year I spoke at <a href="https://openuk.uk/event-calendar/digitalmeetup4/">Open UK</a> about my IndieWeb journey. I've posted the slides on <a href="https://noti.st/anarodrigues/AwmjTY/slides">Notist</a> but I finally sat down to pick up the transcription and tidy it up on my blog. The base of this post was a transcript of my presentation but some editing is now present for added clarity and correction of grammatical mistakes. </p>
</aside>

![A group photo of the IndieWebCamp Brighton attendees.](/assets/posts/openuktalk/intro.avif)

My first personal website was built 20 years ago. And no, you cannot find it archived anywhere! But currently, my home on the web is my blog at OhHelloAna.blog.

I participate in the [IndieWeb](https://indieweb.org/) community. And in case you're wondering about my qualifications: having a personal website already grants me enough qualifications to call myself someone who lives in the IndieWeb spirit. That’s right! By having your own personal website, you are as IndieWeb as it gets, whether or not you actively participate in the community. Having a personal website is all you have to do.

It's really great to be speaking alongside [Calum](https://calumryan.com/) about the IndieWeb. Calum and I met because Calum used to run the [London chapter of the Homebrew Website Club](https://hwclondon.co.uk/). The Homebrew Website Club is a regular meetup for people passionate about creating, improving, or designing their own websites. Sometime in either 2017 or 2018, I attended one of those meetups, and I'm so glad I did because I wouldn't be here today if I hadn’t.

![A group photo of the Homebrew Website Club including Ana and Calum.](/assets/posts/openuktalk/hwcldn.avif)

Calum and I have since retired from organising, but I noticed that [Mark](https://marksuth.dev/) and [James](https://jamesg.blog/), the current organisers, are here on this call. It’s great that we’re all here together.

Before that, I first learned about the IndieWeb community from a [talk by Jeremy Keith called The Building Blocks of the IndieWeb](https://adactio.com/links/13151 ) in 2017, at View Source Mozilla. It spoke to me on a deep level because I had always been someone keen on learning and sharing in public especially about code during my teenage years. But I had stopped once I started working professionally as a developer.

Somehow, the following year, I found myself on the same stage, sharing my frustration about how I wished our tech community would blog more. I also shared my fears that made me blog and share less.

![Ana on the stage of View Source Mozilla.](/assets/posts/openuktalk/2018-talk.avif)

## What does it mean to have an online presence today?

For most people, being online means having an account on a website owned by a corporation or by someone with too much money. That means no transparency, no ownership, and no privacy. There are limitations:

* Platforms restrict what you can share (e.g., “link in bio”).
* You are exposed to potential harassment with little control over settings.
* You have no say in how these platforms operate.

And now more than ever, people are being more vocal about these limitations and consequences of them. For the past few years, you may have seen people, especially those in tech, sharing their nostalgia for the early 2000s internet which is all lovely and fun.

I recently came across a project called [salvaged.nu](https://salvaged.nu/), which recovers, repairs, and re-uploads Photoshop resources from lost personal blogs from the mid-2000s. They describe their mission as saving resources from the “commercial capitalist hellscape” that the web has become, hoping to inspire creativity again.

![Screenshot of the Salvaged project.](/assets/posts/openuktalk/salvaged-nu.avif)

> With the web becoming more of a commercial, capitalist hellscape everyday, we wanted to save what resources we could in order to encourage this creativity to blossom again. We aim to inspire people to experiment making digital collage again, whether it be for their own artistic creations or their personal blog, and pay homage to the creative teenagers that made these resources over 15 years ago.

I'm sharing this project in particular because it spoke to me on a deep level. I was one of those teenagers more than 15 years ago. I would spend all my time after school in forums learning how to code, copying snippets people shared, downloading brushes, creating brushes, scanning paper or leaves I found to create textures for Photoshop.

I would even install every random software I could find (dangerous, I know) to create whatever I wanted. I was obsessed with creating and sharing, and seeing people use what I made was like a dopamine rush driving me forward.

I spent the rest of my time writing tutorials, learning, and sharing openly on my little personal blogs and forums I was a moderator in. And it truly felt like we were all in this together. We would download phpBB forums, sign up to run fan sites, and take ownership of those fan sites. We would change MySQL databases to become admins of those websites. It was a bit wild, but it was so satisfying and rewarding.

![Slide with various community names spread about.](/assets/posts/openuktalk/slide.avif)

I took this photo from a slide by Lu Wilson, who runs [todepond](https://www.todepond.com/), which captures this sentiment. The slide mentions several communities you may be familiar with: the small web, the humane web, Gemini, Gopher, the sustainable web, the personal web, the indie web, the cozy web, and others.

In the end of the day, there's one theme in common with these. All these communities share the same goal: creating little spaces that capture the joy of having your own web presence, free from capitalism, surveillance, pressure to perform, advertising, gatekeeping, and tech complexity. Instead, it’s about a human touch.

## A case for the IndieWeb
I’m going to share with you how the IndieWeb community in particular has helped me, despite being a tech-y person myself.

> The IndieWeb is a people-focused alternative to the “corporate web”. We are a community of independent and personal websites based on the principles of: owning your domain and using it as your primary online identity, publishing on your own site first (optionally elsewhere), and owning your content.

In other words, quoting myself (very lame I know):

> To help create an alternative to the corporate web, members of the IndieWeb community have built tools that anyone can use on their personal website that helps create the interaction and community building between personal websites.

### What does “people-focused” alternative to the “corporate web” mean?

The IndieWeb community believes that you should own your content and an option for that is to have your content and interactions first posted on your personal website and then shared on other platforms. Things like your articles, statuses, images, likes, comments etc would forever be in your ownership, with a permanent link and you can keep a record of it forever in case any platform/social media is deleted or you’re banned.

[Banned! Yes! It can happen](https://www.matuzo.at/blog/2025/breaking-up-with-my-x). Many times we find ourselves thinking "oh what if this thing gets deleted" or what if it's ownership changes and they suddenly create their own rules and you're suddenly banned? All your content is lost forever. If you care about that, then this is a great way to frame it: put it on your own website first.

It can look something like this: 
![A snapshot of POSSE and IndieWeb posts. The flow begins on a personal website which has a post called "my new article", syndicated to social media where interactions on the social media post are backfeed to the original blog post. The original blog post can also receive and show interactions from other blogs via Webmentions.](/assets/posts/openuktalk/3-autonomy-online-indieweb.avif)
 
What a lot of people in the IndieWeb community are quite keen of is the idea of publishing on your own blog. As depicted in the diagram, you would have "my new article" on your blog which you can share on some social media. Then, people can reply to the social media post which then backfeeds a copy of that reply back to your own website. People can also reply to your post using webmentions on their personal website. A reply that they would own. This is possible via protocols and apis that are documented in the IndieWeb wiki. This is what the community tries to advocate for: publish, owning it, share it and use whatever you want. But allow yourself to always be in
control what interactions and content you own. 

> The IndieWeb community is about creating or improving your personal website while also helping others to build theirs, either by documenting or creating tools.

Emphasis on the helping others.

That's my main drive and my main passion about this community. Again, lame I know, but the quote above is from me because it is my experience. But it does seem quite fitting for everyone who cares about open tech. 

Community members have put a lot of effort to share their experiences on the IndieWeb wiki. And we know it isn’t perfect! 

![A screenshot of my profile in the IndieWeb wiki.](/assets/posts/openuktalk/profile.avif)

This is [my profile in the IndieWeb wiki](https://indieweb.org/User:Ohhelloana.blog), which is quite a shy one. My contributions pale in comparison to other members but that’s okay. You do what you can.

There's no pressure. You do what you can. We know that it is overwhelming for anyone who isn’t familiar with tech jargon to [start](https://indieweb.org/Getting_Started) - but the community tries in their free time to bridge that gap by suggesting services like Wordpress or Micro.blog that supports the IndieWeb features I mentioned before.

People in the community share how they built something on their own website all the time. They go through the
wiki and they try to create happy paths for people to land and get the information they need. We really do try to constantly improve the wiki and we have a lot of discussions in our chats to make our community as tech jargon free as possible.

And you don't have to be a coder or developer to do this. People contribute to articles without necessarily writing code and that's really important. I wonder all the time whether people are very stuck into the idea that they can only contribute if they create an open source project or something very technical. That's not true. The majority of us likes to document decisions we make on our websites simply for fun. There will be wiki pages where people share why they choose to have a [privacy policy page on their personal website](https://indieweb.org/disclosure#IndieWeb_Examples). Then people in the community voluntarily share their own examples on their personal blogs which serves as an inspiration for everybody. They may share
technical details of how they've done to it, if they want to, but the goal is for everybody is able to contribute. 

A quick example is the [guestbook page wiki entry](https://indieweb.org/guestbook). It has a general description and anybody can edit, contribute, and add themselves as an example. The wiki isn't behind a login or a paywall. It's free for everybody.

> We like to document in the open, share examples and help out others.

[Marty](https://martymcgui.re/2024/08/29/141602/) puts it into better words: “Talk with us - That’s why the IndieWeb chat exists. It’s a place where real actual people, who are working to use the web in ways that suit them, are ready to help in whatever ways we can. We love to share what is (and is not) working for us, what we’re trying, and so on. More importantly, we want to help you find ways of using the web that work for you.”

## Take it easy

When I first started to participate in the community and attend their meet-ups and camps, I created this unnecessary pressure on myself to do and use all the protocols and apis suggested in order to create a full “social” experience from my website to corporate silos.

I need to underline that it really is unnecessary pressure. It was all in my head. The more I try to do those things, the more I failed and no progress at all was made. It can be limitations on time or my own tech abilities but in the end I had such tunnel vision that I would end up feeling overwhelmed, sad and behind. Because I created this fake deadline in my head in those IndieWeb camps, I wasn't
progressing with anything I truly enjoyed doing on my personal website. Things like fun designs, experiments with textures, experiments with css or just writing.

### You don’t have to over-engineer

I’ve been saying since 2018 that “my goal is to create my own micropub endpoint” and I end up only focusing on that and doing nothing else - to little success to this date. And I believe this is what stops a few people from fully embracing the fact that they too are keen on the community. Like myself in the past, there’s a lot of people who may fear that you’re only a real IndieWeb person if you build it all. As lame as it is, I’m going to once again quote myself:

> I am not less than the other people in the IndieWeb community for not having a fancy, automated, cool setup on my personal website. Nobody has ever made me feel that way. It doesn’t matter if all you have is a simple page with your name and email.

If there is one place where you can do whatever you want and how you want is your personal website. I’m lucky to have found a community that supports this.

And it is true: a while back [I wrote about the IndieWeb for Smashing Magazine](https://www.smashingmagazine.com/2020/08/autonomy-online-indieweb/) and went a bit into more detail on a few tech bits but the reality is I don’t even implement the stuff I mentioned! I’m still as Indie Web as it gets!

There is no right or wrong way truly just what works for you.

## Just get a personal website

If you find yourself thinking “I have no content to put on a personal website” hear me out: That’s not true and it shouldn’t be the point.
The goal of a personal website is to be reachable. Your content might just be your name and your contact information. And that’s fine. [You don’t have to be a content creator to have a website](https://ohhelloana.blog/just-get-a-website/).

But if you want to share and learn in the open, it does open doors.

Being invited to be here today, being invited to write about the IndieWeb community, having my blog posts shared far and wide is all due to me embracing sharing my experiences on my blog. You can also create your own digital blog, bookmarks rounds up, week notes, tutorials. Content that is findable and make you reachable without paywalls or sign-up accounts.

Recently, Paul Robert Lloyd shared a presentation that is a [beginner’s guide to the IndieWeb](https://paulrobertlloyd.com/2024/201/s1/peckham_digital/) and made it all available on his website - truly living the IndieWeb spirit! And I really recommend it as it goes a bit into more technical detail and shares some ideas in detail.

And as for my current blog - it is a constant work in progress with ambition and lot of bugs.

We would love to see any of you pop by [our chat and say hi](https://indieweb.org/discuss) - but it’s okay if you don’t feel like it. I know I am biased. Join whatever community or safe place that feels better for you - all we can wish for is that you find some time to embrace creating your personal website.

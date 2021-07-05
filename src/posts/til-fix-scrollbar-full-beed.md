---
layout: post
title: "TIL: Fixing horizontal scrolls due to full bleed blocks without overflow: hidden"
date: 2021-07-05
description: "Today I learned: Fixing the horizontal scrollbar resulting from a full bleed utility without overflow: hidden."
hasMood: true
mood: Anxious
doing: technically, at work
thinking: "I feel like I'm going to get yelled at from posting this."
listening: nothing
tags: 
  - TIL
  - post
---

<p>A while back I worked on a project with an existing seven year old codebase and it was my task to refresh the design of it without a rebuild. This meant that I found a few constraints and one of them was allowing full bleed components (like a newsletter banner) which didn’t exist before.</p>

<p>Luckily, Andy Bell shared <a href="https://piccalil.li/tutorial/creating-a-full-bleed-css-utility/">how to create a full bleed CSS utility</a> which was what I ended up using. Towards the end of the article, in the section <a href="https://piccalil.li/tutorial/creating-a-full-bleed-css-utility/#heading-how-the-%22full-bleed%22-utility-works">how the “full-bleed” utility works</a>, Andy points out that using that CSS method might allow the possibility of having horizontal scrollbars and suggests using <code>“overflow-x: hidden”</code> in the <code>body</code> tag to fix it.</p>

<p>Since this all worked fine and as expected, I overlooked the reason why having to hide the overflow was necessary. Tepy Thai explains <a href="https://tepy.dev/til/why-100vw-causes-horizontal-scroll">why 100vw causes horizontal scrollbar</a>:</p>

<blockquote cite="https://tepy.dev/til/why-100vw-causes-horizontal-scroll">
  <p>When you set an element's width to 100vw, the element's width now will be the whole view width of the browser and the important part is 100vw does not include the vertical scrollbar's width into its calculation at all. Therefore, when there is a vertical scrollbar, the total width will be the sum of the element's width and the vertical scrollbar's width, which causes the overflow on the x-axis and thus the horizontal scrollbar.</p>
  <footer>Tepy Thai, <cite>Why 100vw causes horizontal scrollbar</cite></footer>
</blockquote>

<p>And then last week I was presented with a problem. Another developer in this project messaged me and asked if we could delete the <code>overflow-x: hidden</code> from the <code>body</code>. They were trying to build a feature that uses <code>position: sticky</code> and as it turns out, there is a <a href="https://github.com/w3c/csswg-drafts/issues/865">ticket reporting that position sticky inside overflow hidden doesn’t work</a>.</p>

<p>A solution could be to do a refactor and create a <a href="https://www.joshwcomeau.com/css/full-bleed/">full-bleed layout using CSS grid</a> like Joshua Comeau suggests. Due to a variety of constraints (time, budget, codebase etc) a refactor wasn’t possible.</p>

<p>After making the overflow visible, I needed to fix the horizontal scrollbar and that led me to an article from Jonnie Hallman called “<a href="https://destroytoday.com/blog/100vw-and-the-horizontal-overflow-you-probably-didnt-know-about">100vw and the horizontal overflow you probably didn’t know about</a>”. My solution was based on the one presented in that article.</p>

<p>I’m not feeling 100% confident over my solution - but it works!</p>

## Solution (I think)

### Javascript

``` js
{% raw %}
//remove small horizontal scrollbar when a block is full bleed
var scrollbarWidth = window.innerWidth - document.body.clientWidth;
var halfScrollbarWidth = scrollbarWidth / 2;
document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`);
document.body.style.setProperty('--halfScrollbarWidth', `${halfScrollbarWidth}px`);
{% endraw %}
```
<p>My javascript steps were similar to the ones in <a href="https://destroytoday.com/blog/100vw-and-the-horizontal-overflow-you-probably-didnt-know-about">Jonnie Hallman’s article</a> except that when I needed to set the <code>margin-left</code> I needed to take into account the possible existence of the scrollbar. After some poking, it looked like half of the width of the scrollbar would fix that.</p>

### CSS

``` css
{% raw %}
  --viewportWidth: calc(100vw - var(--scrollbarWidth));
  /* finalHalfScrollbar: value must be negative */
  --finalHalfScrollbar: calc(var(--halfScrollbarWidth) * -1);

  width: 100%;
  width: calc(100vw - 15px);
  width: var(--viewportWidth);
  margin-left: 0;
  margin-left: calc(50% - 50vw - var(--finalHalfScrollbar, -7px));
{% endraw %}
```

<p>As a fallback - which I am not very confident about - in case javascript is disabled, is giving the scrollbar a width of 15px and then I used half of it as an integer (the 15px was the most common value from the browsers I tested). I also tried to cover the scenario where CSS custom properties and vw properties weren't supported, so in this case it would be contained within the width of the parent. It seems to work and I suppose that the worst case scenario is a horizontal scrollbar in the end.</p>

<p>There's a good chance there's a better solution for this but I did learn something regardless and do enjoy when CSS makes me scratch my head!</p>


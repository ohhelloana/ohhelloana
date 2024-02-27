---
layout: post
title: "TIL: How to fix it when an element blinks when using intersection observer."
date: 2024-02-27
description: "Today I learned: How to fix it when an element blinks when using intersection observer."
hasMood: true
mood: Sad
doing: Trying out a new co-working space
thinking: Hasn't been a good year so far
listening: White noise
tags: 
  - TIL
  - post
---

<p>I recently built a page where a positioned sticky element would appear when another element wasn't visible anymore. For this, I used the intersection observer.</p>

<p>Later on, it was noticed that on an iPhone using Safari, it was as if this sticky item would start blinking, appearing and disappearing at certain scroll positions.</p>

<p>
I had no idea why, but eventually, I found a <a href="https://github.com/thebuilder/react-intersection-observer/issues/308#issuecomment-645537678">comment buried on a GitHub thread</a> that fixed my issue. I replaced <code>position: sticky</code> with <code>position: fixed</code>, and it got fixed! Why? I don't know. But now I know, I guess.
</p>

<p>The project I was working on wasn't using React or any other JavaScript framework. Still, sometimes, the framework used is a red herring. It's best not to dismiss search results based on their title and just have a look.</p>





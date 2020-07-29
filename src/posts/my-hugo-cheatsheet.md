---
layout: layouts/post.njk
title: My Hugo cheat sheet
date: 2020-07-29
tags:
  - post
  - code
  - hugo
description: 
hasMood: true
mood: Sleepy 😴
doing: Drinking tea
thinking: Nothing
listening: Nothing
---

I'm a big fan of static site generators and since last year I've been using [Hugo](https://gohugo.io) for a lot for simple and small marketing/product websites for clients. However, I don't know `Go` and I struggle a bit to remember all the logic that work in the templates so... I do a lot of searching and copy pasting. I started to collect the code/logic that I use most often in websites of this kind. Basically, this page will become for me what CSS Tricks's "A complete guide to Flexbox" is for everyone! 

Some of these are in the documentation of Hugo but I personally find it easier to find things with examples. In fact, almost everything I needed, I found via the community chat from Hugo. 

Also, some of these things will likely seem very obvious to people who are very used to using Hugo. I am also 100% certain that there are better ways to do certain things. In my opinion, it doesn't really matter as long as the output does what we need. But I had to start somewhere, so this is the blog post I wish I had found when I first started.

PS.: there may be typos in the titles and description of the examples. Funny how these things only turn up after an article is published online! 😁

## The if/else

``` html
{% raw %}
{{ if }}
  // something
{{ else }}
  //something
{{ end }}
{% endraw %}
```

## How to check if a value is equal to something
``` html
{% raw %}
{{ if eq value_1 value_2 }}
{% endraw %}
```

## How to check if a value is lower than something
``` html
{% raw %}
{{ if lt value_1 value_2 }}
{% endraw %}
```

## How to check if a value is greater than something
``` html
{% raw %}
{{ if gt value_1 value_2 }}
{% endraw %}
```

## How to combine two checks
This example checks if a value is lower than 5 and greater than 1.
``` html
{% raw %}
{{ if and (lt $currentIndex 5) (gt $currentIndex 1) }}
{% endraw %}
```

## How to add a class based on what page you're on
I wanted to add a specific class to a page called "Privacy policy". This page was created inside my `content` folder and I named its folder `privacy-policy` and inside it I created an `_index.md`. The frontmatter of the `.md` file has a title. Something like: `title: Privacy Policy`.

I want a specific class to be added when I visit this particular page. 

``` html
{% raw %}
<main class="{{ if eq .Name `Privacy Policy` }}privacy{{ end }}" id="main">
  My content
</main>
{% endraw %}
```

## How to update aria-current in a menu
This particular example assumes we're iterating on a menu set in the config.
``` html
{% raw %}
<nav aria-label="Main menu">
  <ul>
    {{ $currentPage := . }}
    {{ range .Site.Menus.main }}
    <li>
        <a aria-current="{{if or ($currentPage.IsMenuCurrent `main` .) ($currentPage.HasMenuCurrent `main` .)}}true{{else}}false{{end}}" href="{{ .URL }}" title="{{ .Title }}">{{ .Name }}</a>
    </li>
    {{ end }}
  </ul>
</nav>
{% endraw %}
```

## How to only render something if there is at least one page in a section.
This example assumes we have a section called "latest" that has some posts inside it. 
``` html
{% raw %}
{{ $news := where .Site.RegularPages "Section" "latest" }} 
{{ $postCount := len $news }}
{{ if gt $postCount 0 }}
	<section>
		{{.Title}}
	</section>
{{end}}
{% endraw %}
```

## How to only show the latest three posts of a section

This example assumes we have a section called "latest" that has some posts inside it. 

``` html
{% raw %}
{{ $news := where .Site.RegularPages "Section" "latest" }} 
<ul>
  {{ range first 3 $news }}
    <li>{{.Title}}</li>
  {{ end }}
</ul>
{% endraw %}
```

## How to create a collection of posts that have a certain param and value

This example wants to collect all the posts inside a section that have a specific param defined in the frontmatter.
For this example, let's assume that we're looking for all the posts inside a section called "latest" that have `type: summary`.

``` html
{% raw %}
{{ $services := where .Site.RegularPages "Section" "latest" }} 
{{ $finalList := where $services "Params.type" "summary" }}
{% endraw %}
```

## How to create a collection of posts that match a certain value
This example creates a variable called `test` that iterates over the pages inside a section called `case-studies` that have the value of `draft` as false.
``` html
{% raw %}
{{$test := where (where .Site.RegularPages "Section" "case-studies") ".Params.draft" false }}
{% endraw %}
```

## How to range and order by the value of a param

This example assumes that a page has `order` in the frontmatter and a number. 

``` html
{% raw %}
{{ $services := where .Site.RegularPages "Section" "latest" }}
{{ range $services.ByParam "order" }}
  // your content
{{ end }}
{% endraw %}
```

## How to replace a character with something else

I had a specific situation where I had to replace "_" that could come up in a couple of words with a blank space.

``` html
{% raw %}
{{ replace $tag "_" " "}}
{% endraw %}
```

## How to get the content of an _index.md inside a partial

Imagine you have a partial (like a banner) and could like to bring the content of the index file of a section to it (in this case, for example an "about" page).

``` html
{% raw %}
{{ with .Site.GetPage "/about" }}
  {{ .Content }}
{{ end }}
{% endraw %}
```

## How to get Pages that have a value that resolves into false 

This example collects all the pages inside a section that have the value "false" for draft.

``` html
{% raw %}
  where .Pages ".Params.draft" false
{% endraw %}
```

## How to show a list and add commas

This example attempts to re-create something like the following:

"Animals that are very chill: capybaras, tortoise, dogs."

``` html
{% raw %}
  <div>
    <p>Animals that are very chill:

      {{ $list := (where .Site.Pages "Section" "animals") }}
      {{ $len := (len $list) }}

      {{ range where .Site.Pages "Section" "animals" }}  
        {{ range $index, $element := .Pages }}
        
        {{ $currentIndex := (add $index 1)}}

        {{ $currentLength := (sub $len 1 )}}
          {{.Title}}{{ if eq $currentIndex $currentLength }}. {{else}}, {{end}}
        {{ end }}
      {{ end }}
    </p>
  </div>
{% endraw %}
```

## Iterate inside a section and combine options
Assuming you're adding this to the `list.html` of a section, this example shows how to get all the pages of a section that have the param draft as `false` and putting them in reverse chronological order.
``` html
{% raw %}
{{ range ((where .Pages ".Params.draft" false).ByParam "order").Reverse  }}
{% endraw %}
```

I think this is it. I will update it if I remember anything else.

Big thanks to [Bryan Robinson](https://bryanlrobinson.com/) who helped me out sort out why my syntax highlight wasn't working via the JAMStack slack channel. 
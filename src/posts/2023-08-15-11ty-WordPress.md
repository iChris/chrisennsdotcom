---
layout: layouts/post.njk
title: Exporting Eleventy Blog Posts to WordPress Issues
date: 2023-08-15T05:56:16.896Z
---

Summary: I'm trying to export my Eleventy posts to a format that can be imported into WordPress and keep getting an error when I try to build it.

### What I Want to Do

*TL;DR* Get my Eleventy content (blog posts) into whatever format to be able to import them into WordPress, ideally with the title, date posted, and text content intact. Images are secondary at this point.

I've been using [Eleventy](https://www.11ty.dev/) as the CMS for my blog for a few years now. But I'm not really a developer, I just [have a lot of friends who are developers](https://www.lemonproductions.ca/portfolio/). And so I'm in way over my head whenever it's anything beyond publishing a new post or updating a page. I think a move back to [WordPress](https://wordpress.org/) land in one form or another might help me be able to try random things with my blog like importing and displaying [my micro.blog](https://microblog.chrisenns.com/). Which might help [me release my dependance on Twitter](https://twitter.com/iChris/status/1686431681367117824?s=20). But probably not. I just really hate "X".

### How I'm Trying to Do It

I'm using [Andy Bell's explainer](https://andy-bell.co.uk/importing-eleventy-content-into-wordpress/) on adding a `wp.njk` file inside my Eleventy install that is supposed to generate a `wp.xml` file out the other side. You can [see my current implementation of it on GitHub](https://github.com/iChris/chrisennsdotcom/blob/master/src/wp.njk) or [here if it's not able to build with it in my repo](https://gist.github.com/iChris/5fbadb85cec73285eb80cada39f900e7).

The only change I made was where Andy is using `{% for item in collections.items %}`, I thought I should change that to `{% for item in collections.posts %}` since that's where my blog's posts are in `/posts/`. But I could be wrong there?

Side note: I started using Eleventy based off Andy's excellent [starter kit for Eleventy - Hylia](https://hylia.website/). No shade to Andy or his code. I know the error exists between the keyboard and chair on this one.

### The Error(s) I Get

When I build it on Netlify, [this is what the content of the `wp.xml` file](https://gist.github.com/iChris/86974bf7622af0ea0f5bc6a50d8d7fb8) looks like.

And I get [this error message in my Netlify console](https://gist.github.com/iChris/eec8862c2dec39c4e76f5c3a83ff1c8e).


The error from Netlify seems to have a lot more issues than just me trying to add a wp.xml file—but the errors don't show up if I commit without that `wp.njk` file included.

### Help

Any suggestions on how to get my Eleventy content into a WordPress usable format? If you don't already know how to reach me, feel free to find me on [Twitter](https://twitter.com/ichris) or [submit a suggestion on GitHub](https://github.com/iChris/chrisennsdotcom/).

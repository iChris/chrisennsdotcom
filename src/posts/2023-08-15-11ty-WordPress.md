---
layout: layouts/post.njk
title: Exporting Eleventy Blog Posts to WordPress Issues
date: 2023-08-15T05:56:16.896Z
tags:
  - Eleventy
  - WordPress
---

Summary: I'm trying to export my Eleventy posts to a format that can be imported into WordPress and keep getting an error when I try to build it.

### What I Want to Do

*TL;DR* Get my Eleventy content (blog posts) into whatever format to be able to import them into WordPress, ideally with the title, date posted, and text content intact. Images are secondary at this point.

I've been using [Eleventy](https://www.11ty.dev/) as the CMS for my blog for a few years now. But I'm not really a developer, I just [have a lot of friends who are developers](https://www.lemonproductions.ca/portfolio/). And so I'm in way over my head whenever it's anything beyond publishing a new post or updating a page. I think a move back to [WordPress](https://wordpress.org/) land in one form or another might help me be able to try random things with my blog like importing and displaying [my micro.blog](https://microblog.chrisenns.com/). Which might help [me release my dependance on Twitter](https://twitter.com/iChris/status/1686431681367117824?s=20). But probably not. I just really hate "X".

### How I'm Trying to Do It

I'm using [Andy Bell's explainer](https://andy-bell.co.uk/importing-eleventy-content-into-wordpress/) on adding a `wp.njk` file inside my Eleventy install that is supposed to generate a `wp.xml` file out the other side. You can [see my current implementation of it on GitHub](https://github.com/iChris/chrisennsdotcom/blob/master/src/wp.njk) or here:

```
---
permalink: 'wp.xml'
---
<?xml version="1.0" encoding="UTF-8" ?>

<rss version="2.0"
xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
xmlns:content="http://purl.org/rss/1.0/modules/content/"
xmlns:wfw="http://wellformedweb.org/CommentAPI/"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:wp="http://wordpress.org/export/1.2/"
>

<channel>
  <title>Faraway, So Close</title>
  <link>https://chrisenns.com</link>
  <description>Faraway, So Close is the blog of Chris Enns.</description>
  <pubDate>Sun, 13 Aug 2023 10:27:40 +0000</pubDate>
  <language>en-GB</language>
  <wp:wxr_version>1.2</wp:wxr_version>
  <wp:base_site_url>https://chrisenns.com</wp:base_site_url>
  <wp:base_blog_url>https://chrisenns.com</wp:base_blog_url>
  <wp:category>
    <wp:term_id>1</wp:term_id>
    <wp:category_nicename><![CDATA[uncategorized]]></wp:category_nicename>
    <wp:category_parent><![CDATA[]]></wp:category_parent>
    <wp:cat_name><![CDATA[Uncategorized]]></wp:cat_name>
  </wp:category>
  <wp:term>
    <wp:term_id>1</wp:term_id>
    <wp:term_taxonomy><![CDATA[category]]></wp:term_taxonomy>
    <wp:term_slug><![CDATA[uncategorized]]></wp:term_slug>
    <wp:term_parent><![CDATA[]]></wp:term_parent>
    <wp:term_name><![CDATA[Uncategorized]]></wp:term_name>
  </wp:term>
  <generator>https://wordpress.org/?v=5.8.1</generator>
  {% for item in collections.posts %}
  <item>
    <title><![CDATA[{{ item.date }}]]></title>
    <link>https://chrisenns.com/{{ item.fileSlug }}/</link>
    <pubDate>{{ item.data.title }}</pubDate>
    <dc:creator><![CDATA[test]]></dc:creator>
    <description></description>
    <content:encoded><![CDATA[{{ item.templateContent | safe }}]]></content:encoded>
    <excerpt:encoded><![CDATA[]]></excerpt:encoded>
    <wp:post_id>{{ loop.index + 5 }}</wp:post_id>
    <wp:post_date><![CDATA[{{ item.data.title | w3DateFilter }}]]></wp:post_date>
    <wp:comment_status><![CDATA[closed]]></wp:comment_status>
    <wp:ping_status><![CDATA[closed]]></wp:ping_status>
    <wp:post_name><![CDATA[{{ item.fileSlug }}d]]></wp:post_name>
    <wp:status><![CDATA[publish]]></wp:status>
    <wp:post_parent>0</wp:post_parent>
    <wp:menu_order>0</wp:menu_order>
    <wp:post_type><![CDATA[post]]></wp:post_type>
    <wp:post_password><![CDATA[]]></wp:post_password>
    <wp:is_sticky>0</wp:is_sticky>
    <category domain="category" nicename="uncategorized"><![CDATA[Uncategorized]]></category>
  </item>
  {% endfor %}
  </channel>
</rss>
```



The only change I made was where Andy is using `{% for item in collections.items %}`, I thought I should change that to `{% for item in collections.posts %}` since that's where my blog's posts are in `/posts/`. But I could be wrong there?

Side note: I started using Eleventy based off Andy's excellent [starter kit for Eleventy - Hylia](https://hylia.website/). No shade to Andy or his code. I know the error exists between the keyboard and chair on this one.

### The Error(s) I Get

When I build it on Netlify, this is what the content of the `wp.xml` file looks like:

```
This XML file does not appear to have any style information associated with it. The document tree is shown below.
<rss xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:wp="http://wordpress.org/export/1.2/" version="2.0">
<channel>
<title>Faraway, So Close</title>
<link>https://chrisenns.com</link>
<description>Faraway, So Close is the blog of Chris Enns.</description>
<pubDate>Wed, 31 Dec 2023 10:27:40 +0000</pubDate>
<language>en-GB</language>
<wp:wxr_version>1.2</wp:wxr_version>
<wp:base_site_url>https://chrisenns.com</wp:base_site_url>
<wp:base_blog_url>https://chrisenns.com</wp:base_blog_url>
<wp:category>
<wp:term_id>1</wp:term_id>
<wp:category_nicename>
<![CDATA[ uncategorized ]]>
</wp:category_nicename>
<wp:category_parent>
<![CDATA[ ]]>
</wp:category_parent>
<wp:cat_name>
<![CDATA[ Uncategorized ]]>
</wp:cat_name>
</wp:category>
<wp:term>
<wp:term_id>1</wp:term_id>
<wp:term_taxonomy>
<![CDATA[ category ]]>
</wp:term_taxonomy>
<wp:term_slug>
<![CDATA[ uncategorized ]]>
</wp:term_slug>
<wp:term_parent>
<![CDATA[ ]]>
</wp:term_parent>
<wp:term_name>
<![CDATA[ Uncategorized ]]>
</wp:term_name>
</wp:term>
<generator>https://wordpress.org/?v=5.8.1</generator>
</channel>
</rss>
```

and I get this error message in my Netlify console:

```
10:39:17 AM: Waiting for other deploys from your team to complete. Check the queue: https://app.netlify.com/teams/ichris/builds
10:39:45 AM: Build ready to start
10:40:15 AM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
10:39:46 AM: build-image version: 20e1f1f500e4cbad9ea8a99bd40807bef3093551 (focal)
10:39:46 AM: buildbot version: 00a030bf3c001e3c0d5d2d5931d77655af9653ed
10:39:46 AM: Fetching cached dependencies
10:39:46 AM: Starting to download cache of 305.4MB
10:39:48 AM: Finished downloading cache in 1.566s
10:39:48 AM: Starting to extract cache
10:39:50 AM: Finished extracting cache in 2.254s
10:39:50 AM: Finished fetching cache in 3.871s
10:39:50 AM: Starting to prepare the repo for build
10:39:50 AM: Preparing Git Reference refs/heads/master
10:39:52 AM: Starting to install dependencies
10:39:52 AM: Python version set to 3.8
10:39:52 AM: Attempting Ruby version 2.6.2, read from environment
10:39:52 AM: Started restoring cached Ruby version
10:39:52 AM: Finished restoring cached Ruby version
10:39:53 AM: Using Ruby version 2.6.2
10:39:53 AM: Started restoring cached go cache
10:39:53 AM: Finished restoring cached go cache
10:39:53 AM: Installing Go version 1.12 (requested 1.12)
10:39:57 AM: go version go1.12 linux/amd64
10:39:58 AM: Using PHP version 8.0
10:39:58 AM: Started restoring cached Node.js version
10:40:00 AM: Finished restoring cached Node.js version
10:40:00 AM: Attempting Node.js version '16' from .nvmrc
10:40:00 AM: v16.20.2 is already installed.
10:40:01 AM: Now using node v16.20.2 (npm v8.19.4)
10:40:01 AM: Enabling Node.js Corepack
10:40:01 AM: Started restoring cached build plugins
10:40:01 AM: Finished restoring cached build plugins
10:40:01 AM: Started restoring cached corepack dependencies
10:40:01 AM: Finished restoring cached corepack dependencies
10:40:01 AM: No npm workspaces detected
10:40:01 AM: Started restoring cached node modules
10:40:01 AM: Finished restoring cached node modules
10:40:01 AM: Installing npm packages using npm version 8.19.4
10:40:04 AM: up to date, audited 701 packages in 3s
10:40:04 AM: 18 packages are looking for funding
10:40:04 AM:   run `npm fund` for details
10:40:04 AM: 15 vulnerabilities (11 moderate, 2 high, 2 critical)
10:40:04 AM: To address issues that do not require attention, run:
10:40:04 AM:   npm audit fix
10:40:04 AM: To address all issues possible (including breaking changes), run:
10:40:04 AM:   npm audit fix --force
10:40:04 AM: Some issues need review, and may require choosing
10:40:04 AM: a different dependency.
10:40:04 AM: Run `npm audit` for details.
10:40:04 AM: npm packages installed
10:40:04 AM: Install dependencies script success
10:40:04 AM: Starting build script
10:40:05 AM: Detected 1 framework(s)
10:40:05 AM: eleventy at version 0.12.1
10:40:05 AM: Section completed: initializing
10:40:07 AM: ​
10:40:07 AM: Netlify Build                                                 
10:40:07 AM: ────────────────────────────────────────────────────────────────
10:40:07 AM: ​
10:40:07 AM: ❯ Version
10:40:07 AM:   @netlify/build 29.19.0
10:40:07 AM: ​
10:40:07 AM: ❯ Flags
10:40:07 AM:   baseRelDir: true
10:40:07 AM:   buildId: 64d907353c560e000862d3ab
10:40:07 AM:   deployId: 64d907353c560e000862d3ad
10:40:07 AM: ​
10:40:07 AM: ❯ Current directory
10:40:07 AM:   /opt/build/repo
10:40:07 AM: ​
10:40:07 AM: ❯ Config file
10:40:07 AM:   /opt/build/repo/netlify.toml
10:40:07 AM: ​
10:40:07 AM: ❯ Context
10:40:07 AM:   production
10:40:07 AM: ​
10:40:07 AM: build.command from netlify.toml                               
10:40:07 AM: ────────────────────────────────────────────────────────────────
10:40:07 AM: ​
10:40:07 AM: $ npm run production
10:40:07 AM: > hylia@0.7.0 production
10:40:07 AM: > npm run sass:process && npm run cms:precompile && npm run cms:bundle && npx eleventy
10:40:07 AM: > hylia@0.7.0 sass:process
10:40:07 AM: > npm run sass:tokens && sass src/scss/global.scss src/_includes/assets/css/global.css --style=compressed
10:40:07 AM: > hylia@0.7.0 sass:tokens
10:40:07 AM: > npx json-to-scss src/_data/tokens.json src/scss/_tokens.scss
10:40:08 AM: json-to-scss v1.5.0
10:40:08 AM: ⚙️ /opt/build/repo/src/_data/tokens.json:
10:40:08 AM: ⏳ /opt/build/repo/src/_data/tokens.json: content converted.
10:40:08 AM: ⌛ /opt/build/repo/src/_data/tokens.json: content converted. File created!
10:40:08 AM:    👍 /opt/build/repo/src/scss/_tokens.scss
10:40:09 AM: > hylia@0.7.0 cms:precompile
10:40:09 AM: > make-dir dist/admin && nunjucks-precompile src/_includes > dist/admin/templates.js -i \.(njk|css|svg)$
10:40:09 AM: > hylia@0.7.0 cms:bundle
10:40:09 AM: > rollup --config
10:40:09 AM: 
10:40:09 AM: src/admin/util → dist/admin/util.js...
10:40:10 AM: created dist/admin/util.js in 685ms
10:40:12 AM: (node:3952) [DEP0128] DeprecationWarning: Invalid 'main' field in '/opt/build/repo/node_modules/emitter-mixin/package.json' of 'y'. Please either fix that or report it to the module author
10:40:12 AM: (Use `node --trace-deprecation ...` to show where the warning was created)
10:40:14 AM: Problem writing Eleventy templates: (more in DEBUG output)
10:40:14 AM: > Having trouble rendering njk template ./src/wp.njk
10:40:14 AM: `TemplateContentRenderError` was thrown
10:40:14 AM: > (./src/wp.njk)
10:40:14 AM:   RangeError: Invalid time value
10:40:14 AM: `Template render error` was thrown:
10:40:14 AM:     Template render error: (./src/wp.njk)
10:40:14 AM:       RangeError: Invalid time value
10:40:14 AM:         at Object._prettifyError (/opt/build/repo/node_modules/nunjucks/src/lib.js:32:11)
10:40:14 AM:         at /opt/build/repo/node_modules/nunjucks/src/environment.js:464:19
10:40:14 AM:         at Template.root [as rootRenderFunc] (eval at _compile (/opt/build/repo/node_modules/nunjucks/src/environment.js:527:18), <anonymous>:51:3)
10:40:14 AM:         at Template.render (/opt/build/repo/node_modules/nunjucks/src/environment.js:454:10)
10:40:14 AM:         at /opt/build/repo/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:236:14
10:40:14 AM:         at new Promise (<anonymous>)
10:40:14 AM:         at /opt/build/repo/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:235:14
10:40:14 AM:         at Template.render (/opt/build/repo/node_modules/@11ty/eleventy/src/TemplateContent.js:199:28)
10:40:14 AM:         at processTicksAndRejections (node:internal/process/task_queues:96:5)
10:40:14 AM:         at async Template._getContent (/opt/build/repo/node_modules/@11ty/eleventy/src/Template.js:547:12)
10:40:14 AM: Copied 68 files / Wrote 0 files in 2.28 seconds (v0.12.1)
10:40:14 AM: ​
10:40:14 AM: build.command failed                                        
10:40:14 AM: ────────────────────────────────────────────────────────────────
10:40:14 AM: ​
10:40:14 AM:   Error message
10:40:14 AM:   Command failed with exit code 1: npm run production (https://ntl.fyi/exit-code-1)
10:40:14 AM: ​
10:40:14 AM:   Error location
10:40:14 AM:   In build.command from netlify.toml:
10:40:14 AM:   npm run production
10:40:14 AM: ​
10:40:14 AM:   Resolved config
10:40:14 AM:   build:
10:40:14 AM:     command: npm run production
10:40:14 AM:     commandOrigin: config
10:40:14 AM:     environment:
10:40:14 AM:       - NODE_VERSION
10:40:14 AM:     publish: /opt/build/repo/dist
10:40:14 AM:     publishOrigin: config
10:40:15 AM: Caching artifacts
10:40:15 AM: Started saving node modules
10:40:15 AM: Finished saving node modules
10:40:15 AM: Started saving build plugins
10:40:15 AM: Finished saving build plugins
10:40:15 AM: Started saving corepack cache
10:40:15 AM: Finished saving corepack cache
10:40:15 AM: Started saving pip cache
10:40:15 AM: Finished saving pip cache
10:40:15 AM: Started saving emacs cask dependencies
10:40:15 AM: Finished saving emacs cask dependencies
10:40:15 AM: Started saving maven dependencies
10:40:15 AM: Finished saving maven dependencies
10:40:15 AM: Started saving boot dependencies
10:40:15 AM: Finished saving boot dependencies
10:40:15 AM: Started saving rust rustup cache
10:40:15 AM: Finished saving rust rustup cache
10:40:15 AM: Started saving go dependencies
10:40:15 AM: Finished saving go dependencies
10:40:15 AM: Build failed due to a user error: Build script returned non-zero exit code: 2
10:40:15 AM: Failing build: Failed to build site
10:40:15 AM: Finished processing build request in 28.99s
8:48:47 AM: [ERROR] Deploy logs are currently unavailable. We are working on resolving the issue.
```

The error from Netlify seems to have a lot more issues than just me trying to add a wp.xml file—but the errors don't show up if I commit without that `wp.njk` file included. 

### Help

Any suggestions on how to get my Eleventy content into a WordPress usable format? If you don't already know how to reach me, feel free to find me on [Twitter](https://twitter.com/ichris) or [submit a suggestion on GitHub](https://github.com/iChris/chrisennsdotcom/).
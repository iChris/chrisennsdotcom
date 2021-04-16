---
title: RSS Favourites
date: 2021-04-16
permalink: /favorites/
metaDesc: The items I've starred on Feedbin show up here.
socialImage: 
---

<h2>Hello World.</h2>

<ul>
  {% for item in collections.feedbinStars %}
  <li>
    <article>
      <h2><a href="{{ item.link }}" rel="noopener">{{ item.title }}</a></h2>
      <p>{{ item.meta.host }}</p>
    </article>
  </li>
  {% endfor %}
</ul>
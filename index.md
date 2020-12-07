---
title: Home
layout: landing_page
---

## About Vittorio Iocolano (aka SirPryderi)

I've been a full-time software engineer since I took an Applied
Computing degree in 2019 at the University of Stirling, Scotland.

I am proficient in web development, but my curiosity leads me towards learning
and experimenting with different technologies and programming languages,
giving me a all-round knowledge in everything that is related to code.

In my free time, I enjoy making free and open source applications of different
nature, including simulation, tooling and thought-provoking games.

Programming aside, I love photography, hiking, cycling, video games, and space
exploration <span class="hide-sm">(have you noticed the rocket?)</span>.

## Projects

Check out all the projects I'm working on my GitHub [github.com/SirPryderi](https://github.com/SirPryderi/){:target="\_blank"}.

{% assign projects = site.projects | sort: 'priority' | reverse %}
{% for project in projects %}

### {{ project.name }} [⭢]({{project.url}})

{{ project.content }}
{% endfor %}

## Games

Check out all the games I've made at [sirpryderi.itch.io](https://sirpryderi.itch.io/){:target="\_blank"}.

{% assign games = site.games | sort: 'priority' | reverse %}
{% for game in games %}

### {{ game.name }} [⭢]({{game.url}})

{{ game.content }}
{% endfor %}

## Photography

I am also very passionate about photography, both from the technical and
artistic point of view. I am always looking around to find the perfect subject
for my pictures, be it a flower, a building, or a person. Follow
[@SirPryderi](https://www.instagram.com/sirpryderi/){:target="\_blank"}
on Instagram to see my best shots!

<div class="clearfix" id="instagram-feed"></div>

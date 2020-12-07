---
title: Games
layout: default
permalink: games/
---

{% assign games = site.games | sort: 'priority' | reverse %}
{% for game in games %}

### [{{ game.name }} <i class="fa fa-long-arrow-alt-right"></i>]({{game.url}}){:.no-style}

{{ game.content }}
{% endfor %}

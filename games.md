---
title: Games
layout: default
permalink: games/
---

{% assign games = site.games | sort: 'priority' | reverse %}
{% for game in games %}

### {{ game.name }} [⭢]({{game.url}})

{{ game.content }}
{% endfor %}

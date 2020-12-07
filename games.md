---
title: Games
layout: default
---

{% assign games = site.games | sort: 'priority' | reverse %}
{% for game in games %}

### {{ game.name }} [⭢]({{game.url}})

{{ game.content }}
{% endfor %}

---
title: Projects
layout: default
---

{% assign projects = site.projects | sort: 'priority' | reverse %}
{% for project in projects %}

### {{ project.name }} [⭢]({{project.url}})

{{ project.content }}
{% endfor %}

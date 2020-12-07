---
title: Projects
layout: default
permalink: projects/
---

{% assign projects = site.projects | sort: 'priority' | reverse %}
{% for project in projects %}

### [{{ project.name }} <i class="fa fa-long-arrow-alt-right"></i>]({{project.url}}){:.no-style}

{{ project.content }}
{% endfor %}

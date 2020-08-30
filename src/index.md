---
title: "Welkom op Stageboekje"
layout: "default"
name: Inleiding & inhoudsopgave
tags: base
---

Alles over m'n stage bij [Enrise](https://enrise.com/) kan je hier binnenkort vinden.

## Inleiding
In dit stageboekje vind je alles wat ik heb gedaan tijdens mijn stage. Allereerst heb ik een [stageplan](/stageplan) geschreven waar ik specifieker in ga op het bedrijf waar ik stage loop en hoe ik mijn leerdoelen ga behalen.

## Inhoudsopgave
{% for page in collections.base %}
  1. [{{ page.data.name }}]({{ page.url }})
{% endfor %}

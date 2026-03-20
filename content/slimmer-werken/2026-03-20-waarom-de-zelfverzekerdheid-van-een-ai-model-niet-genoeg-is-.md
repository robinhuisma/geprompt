---
title: "Waarom de zelfverzekerdheid van een AI-model niet genoeg is voor betrouwbare antwoorden"
date: 2026-03-20T07:12:37.101Z
tags: ["ai-betrouwbaarheid", "risicomanagement", "llm", "besluitvorming"]
categorieen: ["slimmer-werken"]
summary: "Onderzoekers ontwikkelden een betere methode om onbetrouwbare AI-antwoorden te spotten door meerdere modellen te vergelijken, in plaats van alleen op zelfvertrouwen te vertrouwen."
cover:
  image: "https://images.pexels.com/photos/6928880/pexels-photo-6928880.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  alt: "Overhead view of a desk with tax form, pen, keyboard, and contactless card."
  caption: "Foto: Polina Tankilevitch via Pexels"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/better-method-identifying-overconfident-large-language-models-0319"
---

Grote taalmodellen (LLM's) kunnen overtuigende maar onjuiste antwoorden geven. Om de betrouwbaarheid van zo'n antwoord te meten, is het niet genoeg om alleen te kijken naar hoe zelfverzekerd het model zelf is. Onderzoekers van het MIT hebben een nieuwe methode ontwikkeld die dit probleem aanpakt door de antwoorden van meerdere vergelijkbare modellen met elkaar te vergelijken.

## Het probleem van zelfvertrouwen
Een veelgebruikte manier om de betrouwbaarheid van een AI-antwoord te checken, is door dezelfde vraag meerdere keren aan hetzelfde model te stellen. Als het model steeds hetzelfde antwoord geeft, lijkt het zelfverzekerd. Het probleem is dat een model ook heel zelfverzekerd kan zijn terwijl het antwoord fout is. Deze 'overconfidence' kan misleidend zijn, vooral in situaties met hoge risico's, zoals bij medische of financiële adviezen. Het meten van zelfvertrouwen alleen is dus geen goede indicator voor de feitelijke juistheid.

## Een betere maatstaf: vergelijken met andere modellen
De MIT-onderzoekers introduceerden een methode die een ander soort onzekerheid meet. In plaats van alleen te kijken naar de interne consistentie van één model, vergelijken ze het antwoord van het doelmodel met de antwoorden van een groep vergelijkbare taalmodellen. De mate waarin deze modellen het met elkaar oneens zijn – de 'cross-model disagreement' – blijkt een betrouwbaardere indicator te zijn voor onzekere of onjuiste voorspellingen. Deze methode vangt situaties waarin één model vol vertrouwen een fout antwoord geeft, maar andere modellen een ander, mogelijk correcter, antwoord suggereren.

## Een combinatie die werkt
De onderzoekers combineerden deze nieuwe aanpak van modelvergelijking met de traditionele meting van zelfconsistentie. Samen vormen ze een totale onzekerheidsmetriek. Deze gecombineerde aanpak werd getest op tien realistische taken, zoals vraag-antwoord en wiskundig redeneren. Volgens de onderzoekers presteerde deze totale onzekerheidsmetriek consistent beter dan andere methoden in het identificeren van onbetrouwbare voorspellingen. Kimia Hamidieh, de hoofdauteur van het onderzoek, benadrukt dat een schatting van onzekerheid die alleen op de uitkomsten van één model is gebaseerd, niet per se betrouwbaar is.

## Hoe kun je dit vandaag toepassen?
De praktische toepassing hangt af van jouw situatie. Via geprompt.nl/stel-je-vraag kun je een vraag stellen die we uitwerken tot een artikel op maat.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [MIT News](https://news.mit.edu/2026/better-method-identifying-overconfident-large-language-models-0319)

---
title: "Waarom je AI-tool soms vol overtuiging liegt, en hoe je dat herkent"
date: 2026-03-19T15:08:08.323Z
tags: ["ai-betrouwbaarheid", "risicomanagement", "llm", "model-evaluatie"]
categorieen: ["slimmer-werken"]
summary: "Onderzoekers hebben een betere manier gevonden om te zien of een AI-model echt zeker is van zijn antwoord, of gewoon overtuigend liegt."
cover:
  image: "https://images.pexels.com/photos/7947640/pexels-photo-7947640.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  alt: "Close-up of eyeglasses on a desk with paper and blurred background, emphasizing minimalism."
  caption: "Foto: RDNE Stock project via Pexels"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/better-method-identifying-overconfident-large-language-models-0319"
---

Je vraagt iets aan een AI-tool en krijgt een antwoord dat vol zelfvertrouwen wordt gepresenteerd. Het klinkt logisch en goed onderbouwd. Maar wat als het gewoon fout is? Dit probleem, waarbij grote taalmodellen (LLM's) overtuigend onjuiste antwoorden geven, is een fundamenteel risico voor ondernemers die deze tools inzetten voor belangrijke beslissingen. Onderzoekers van het MIT hebben nu een nieuwe methode ontwikkeld om dit soort 'overconfidence' beter te identificeren.

## Het verschil tussen zelfvertrouwen en betrouwbaarheid
Veelgebruikte methodes om de betrouwbaarheid van een AI-antwoord te checken, meten vooral het zelfvertrouwen van het model. Een populaire aanpak is om dezelfde vraag meerdere keren te stellen en te kijken of het model steeds hetzelfde antwoord geeft. Dit meet consistentie, maar niet noodzakelijkerwijs waarheid. Een model kan heel consistent en vol vertrouwen een fout antwoord blijven herhalen. In hoog-risico situaties, zoals bij medische of financiële adviezen, kan dit desastreuze gevolgen hebben. De kern van het probleem is dat de interne zekerheid van een model niet hetzelfde is als de externe betrouwbaarheid van zijn output.

## Een nieuwe maatstaf door modellen te vergelijken
De MIT-onderzoekers pakten dit aan door een ander type onzekerheid te meten. In plaats van alleen te kijken naar één model, vergeleken ze het antwoord van het doelmodel met de antwoorden van een groep vergelijkbare taalmodellen. De gedachte is simpel: als verschillende, onafhankelijke modellen het met elkaar oneens zijn over een antwoord, is er waarschijnlijk meer reden tot twijfel dan wanneer één model heel consistent een fout antwoord geeft. Deze 'cross-model disagreement' bleek een betrouwbaardere indicator te zijn voor onzekere of onbetrouwbare voorspellingen.

## Een combinatie die beter presteert
Het team combineerde deze nieuwe aanpak, het meten van meningsverschillen tussen modellen, met de bestaande methode van zelfconsistentie. Het resultaat is een totale onzekerheidsmetriek die beide aspecten meeneemt. Toen ze deze nieuwe maatstaf testten op tien realistische taken – zoals vraag-antwoord en wiskundig redeneren – bleek deze consequent beter te presteren dan andere methodes. Het was beter in het identificeren van onbetrouwbare voorspellingen. Volgens de onderzoekers is het cruciaal om verder te kijken dan de uitkomst van één enkel model voor een betrouwbare schatting van onzekerheid.

## Hoe kun je dit vandaag toepassen?
De praktische toepassing hangt af van jouw situatie. Via geprompt.nl/stel-je-vraag kun je een vraag stellen die we uitwerken tot een artikel op maat.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [MIT News](https://news.mit.edu/2026/better-method-identifying-overconfident-large-language-models-0319)

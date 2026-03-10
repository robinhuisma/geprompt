---
title: "Herstel oude bedrijfsfoto's gratis met AI-tools zoals Qwen Image Edit"
date: 2026-03-10T11:38:02.256Z
tags: ["creatief", "foto", "ai-modellen", "archief"]
categorieen: ["creatief"]
summary: "Je kunt oude, beschadigde foto's uit je bedrijfsarchief professioneel herstellen en zelfs inkleuren met gratis AI-modellen die je zelf installeert."
cover:
  image: "/images/covers/2026-03-10-ai-powered-photo-restoration-using-qwen-image-edit.webp"
  alt: "Ai Powered Photo Restoration using QWEN Image Edit"
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Je hebt vast een doos of een digitale map met oude foto's: van je eerste winkelpand, een teamuitje van jaren geleden, of productfoto's die nu vol vlekken en krassen zitten. Die beelden zijn waardevol voor je verhaal, maar vaak niet meer bruikbaar. Met nieuwe, gratis AI-modellen zoals Qwen Image Edit en Qwen Image Edit 2509 kun je die foto's nu zelf professioneel herstellen. Het bronartikel van Weird Wonderful AI, dat een praktische handleiding biedt, laat zien hoe je deze modellen installeert en gebruikt om vlekken, stof, ruis, krassen en scheuren te verwijderen, en om gaten in de foto op te vullen. Je kunt de foto's ook laten inkleuren, of juist het zwart-wit karakter behouden.

## Wat je nodig hebt om te beginnen

Deze modellen draai je lokaal op je eigen computer, binnen de gratis software ComfyUI. Dat betekent dat je geen abonnement of clouddienst nodig hebt. Volgens het bronartikel heb je wel een redelijk krachtige computer nodig, specifiek een GPU met voldoende VRAM. Er zijn twee versies van het model: een lichtere FP8-versie (20.4 GB) voor computers met minder VRAM, en een volledige bf16-versie (40.9 GB). Daarnaast download je een apart VAE-bestand en een tekstencoder. Het artikel geeft een duidelijk overzicht van waar je deze bestanden moet plaatsen in de mappenstructuur van ComfyUI. Het is een technischere installatie dan een simpele app, maar het voordeel is volledige controle en geen maandelijkse kosten.

## De kracht van het juiste commando

Het herstellen zelf gebeurt met een tekstuele opdracht, een 'prompt'. Het bronartikel deelt een uitgebreide prompt die in de meeste gevallen goed werkt: *"restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph, reversal film photography, remove stains and crease marks, repair gaps and fold or bends."* De kunst is om specifiek te zijn. Wil je de foto liever in zwart-wit houden, dan begin je de prompt met die instructie en laat je de termen 'colorize' of 'colourising' weg. Het model begrijpt deze natuurlijke taal en past de bewerkingen dienovereenkomstig toe.

## Het workflow-proces in ComfyUI

Nadat de modellen zijn geïnstalleerd, gebruik je binnen ComfyUI een specifieke workflow. Het artikel meldt dat een standaard workflow, 'Flux Kontext Dev (Group)', beschikbaar is als je ComfyUI up-to-date hebt. Deze workflow biedt de nodige nodes om je beschadigde foto in te laden, de herstel-prompt in te voeren en het resultaat te genereren. Het proces duurt, afhankelijk van je hardware en de grootte van de afbeelding, enkele seconden tot een paar minuten. Het voordeel van werken in ComfyUI is dat je het proces kunt aanpassen en herhalen met verschillende prompts om tot het beste resultaat te komen.

## Hoe kun je dit vandaag toepassen?

Een mogelijke eerste stap is het verkennen of je computer geschikt is voor het lokaal draaien van AI-modellen, door te kijken naar de specificaties van je GPU en beschikbare opslagruimte. Vervolgens zou je kunnen overwegen om ComfyUI te installeren, een veelgebruikte en gratis interface voor dit soort modellen, en de specifieke modellen en bestanden te downloaden die in het bronartikel worden genoemd. Als de technische installatie een drempel vormt, kun je via geprompt.nl/stel-je-vraag een vraag stellen die we uitwerken tot een artikel op maat.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

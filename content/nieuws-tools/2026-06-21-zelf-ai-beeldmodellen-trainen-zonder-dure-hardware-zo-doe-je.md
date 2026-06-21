---
title: "Zelf AI-beeldmodellen trainen zonder dure hardware: zo doe je dat"
date: 2026-06-21T06:06:17.318Z
tags: ["ai-beeldmodellen", "lora-training", "cloud-gpu", "ostris-toolkit"]
categorieen: ["nieuws-tools"]
summary: "Train AI-beeldmodellen voor 0,89 euro per uur via cloud-GPU’s en de gratis Ostris Toolkit."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het is nu mogelijk om zelf AI-beeldmodellen te trainen zonder een dure videokaart in huis te halen. Met cloud-GPU’s zoals RunPod en de gratis Ostris AI Toolkit kun je voor minder dan een euro per uur een eigen LoRA-model trainen, geschikt voor bijvoorbeeld productfoto’s, merkstijlen of gepersonaliseerde visuals.

## Wat er aan de hand is

De Ostris AI Toolkit, een gratis open-source tool, is onlangs bijgewerkt en ondersteunt nu het trainen van Z-Image Turbo LoRA’s. LoRA’s zijn kleine, aanpasbare AI-modellen die je kunt gebruiken om een bestaand beeldgeneratiemodel (zoals Flux) een specifieke stijl of onderwerp te laten leren. De tool is beschikbaar als Docker-image, wat betekent dat je hem niet lokaal hoeft te installeren, maar direct kunt draaien op een cloudplatform.

Een populaire keuze voor de hardware is RunPod, een clouddienst waar je per uur een GPU huurt. Volgens de auteur van de tutorial kost een RTX 5090 daar 0,89 dollar per uur, wat aanzienlijk goedkoper is dan het aanschaffen van een eigen krachtige videokaart. De training van een LoRA duurt met deze instelling ongeveer 1 uur en 10 minuten.

## Wat dit betekent

Voor ondernemers die AI-beeldgeneratie willen inzetten voor bijvoorbeeld productvisualisatie, marketingmateriaal of merkconsistentie, wordt de drempel om zelf een model te trainen een stuk lager. Waar je eerder een eigen GPU van duizenden euro’s nodig had of afhankelijk was van dure abonnementen, kun je nu met een paar euro aan cloudkrediet experimenteren.

Dit opent mogelijkheden voor kleine bedrijven die geen budget hebben voor maatwerk-AI, maar wel behoefte hebben aan unieke, herkenbare beelden die niet door duizenden andere gebruikers worden gegenereerd. Denk aan een webshop die productfoto’s in een eigen stijl wil, of een merk dat consistentie wil in social media-visuals.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto’s wilt genereren in een eigen stijl.** Je kunt een LoRA trainen op bijvoorbeeld tien tot twintig foto’s van je producten in een specifieke setting. Daarna kun je met één prompt nieuwe productafbeeldingen genereren die dezelfde look hebben, zonder dat je elke keer een fotograaf hoeft in te huren. Een mogelijkheid is om te beginnen met een kleine dataset van je best verkochte artikelen en te testen of de stijl consistent genoeg is.

**Als je een marketingteam aanstuurt en snel visuele content wilt produceren voor campagnes.** Door een LoRA te trainen op bestaand campagnemateriaal, kun je in minuten nieuwe varianten maken voor verschillende kanalen. Overweeg om de training te draaien op een rustig moment, zoals ’s nachts, zodat je de volgende ochtend de resultaten kunt testen. De Ostris Toolkit slaat standaard meerdere versies op, zodat je kunt kiezen welke stap het beste resultaat geeft.

**Als je een creatief bureau bent en klanten wilt verrassen met unieke visuals.** Je zou voor elke klant een aparte LoRA kunnen trainen op hun merkbeeld, zodat je snel en consistent materiaal kunt leveren. De kosten per training zijn laag genoeg om dit als standaard dienst aan te bieden. Een optie is om een proefrun te doen met een eigen project om de workflow te leren, voordat je het aan klanten voorstelt.

**Als je geen krachtige computer hebt maar toch AI-modellen wilt trainen.** De combinatie van RunPod en de Ostris Toolkit maakt het mogelijk om alles via de cloud te doen. Je hebt alleen een browser nodig. De auteur van de tutorial raadt aan om in RunPod te zoeken naar de template ‘ostris’ en die te gebruiken. Zodra de pod draait, kun je via de webinterface van de toolkit je dataset uploaden en de training starten.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

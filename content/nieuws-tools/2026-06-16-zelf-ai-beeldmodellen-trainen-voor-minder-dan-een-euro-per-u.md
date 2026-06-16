---
title: "Zelf AI-beeldmodellen trainen voor minder dan een euro per uur"
date: 2026-06-16T14:06:02.747Z
tags: ["ai-beeldmodellen", "ostris toolkit", "cloud gpu", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-beeldmodel met de Ostris Toolkit op een goedkope cloud GPU voor €0,89 per uur."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel is nu bereikbaar voor ondernemers met een beperkt budget, dankzij de combinatie van de Ostris AI Toolkit en goedkope cloud GPU’s. Voor ongeveer 89 dollarcent per uur kun je een model trainen op een RTX 5090 via RunPod, zonder dat je dure hardware in huis hoeft te hebben.

## Wat er aan de hand is

De Ostris AI Toolkit, een open-source tool voor het trainen van AI-beeldmodellen, is recentelijk geüpdatet en ondersteunt nu onder andere Z-Image Turbo. De ontwikkelaar heeft de toolkit als een Docker-image beschikbaar gemaakt, die direct als template op het cloudplatform RunPod te gebruiken is. Een gebruiker van de toolkit trainde een LoRA (een type aanpasbaar model) op een RTX 5090 GPU voor slechts 0,89 dollar per uur. De training duurde ongeveer 1 uur en 10 minuten, waarna er acht verschillende versies van het model beschikbaar waren om te downloaden en te gebruiken in ComfyUI. Dit maakt het trainen van eigen AI-beeldmodellen toegankelijk voor wie geen dure grafische kaart in huis heeft.

## Wat dit betekent

Voor ondernemers die AI-beelden willen inzetten voor marketing, productvisualisatie of contentcreatie, opent dit de deur naar maatwerk zonder grote investeringen. Waar je eerder een eigen krachtige GPU nodig had (zoals een RTX 4080 of 4090, die al snel duizenden euro's kost), kun je nu per uur afrekenen. De totale kosten voor een trainingstraject komen daarmee uit op ongeveer 1 tot 2 euro, inclusief de tijd om de dataset voor te bereiden. Dit is vooral relevant voor kleine bedrijven die geen IT-afdeling hebben, maar wel behoefte hebben aan consistente, op maat gemaakte visuals — denk aan productafbeeldingen in een specifieke stijl of gepersonaliseerde marketingbeelden.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto's in een consistente stijl wilt.** Je kunt een dataset maken van je bestaande productfoto's (bijvoorbeeld 20 tot 50 afbeeldingen) en die gebruiken om een LoRA te trainen. Het getrainde model kan dan in ComfyUI worden gebruikt om nieuwe productafbeeldingen te genereren die dezelfde stijl en belichting hebben. Een optie is om te beginnen met een kleine dataset en de training op RunPod te starten voor minder dan een euro. Na een uur heb je meerdere versies van het model om te testen.

**Als je een team aanstuurt en snel visuele content voor social media nodig hebt.** Je zou een LoRA kunnen trainen op basis van je merkstijl of een specifieke esthetiek die je vaker gebruikt. Het model kan dan door je team worden gebruikt om snel nieuwe beelden te genereren zonder dat elke keer een ontwerper aan de slag moet. Overweeg om de training 's nachts te laten draaien op een cloud GPU, zodat je de volgende ochtend de resultaten kunt bekijken.

**Als je in de creatieve sector werkt en unieke stijlen wilt ontwikkelen.** De Ostris Toolkit biedt de mogelijkheid om met verschillende instellingen te experimenteren, zoals de 'Low VRAM'-optie uitschakelen en 'Cached Text Embedding' aanzetten. Je zou kunnen beginnen met een standaardconfiguratie en daarna de instellingen aanpassen om te zien hoe dat de kwaliteit van de gegenereerde beelden beïnvloedt. De praktische toepassing hangt af van jouw specifieke stijlwensen, maar de lage kosten maken het mogelijk om meerdere trainingen te doen en te vergelijken.

**Als je een klein budget hebt en geen dure hardware wilt kopen.** De combinatie van RunPod (vanaf 0,89 dollar per uur) en de Ostris Toolkit als Docker-template is een directe manier om te starten zonder investering in hardware. Je kunt de toolkit vinden door in RunPod te zoeken op 'ostris' in de templates. Een mogelijkheid is om eerst een gratis account aan te maken op RunPod, de template te laden en een kleine dataset te uploaden om het proces te testen voordat je een volledige training start.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

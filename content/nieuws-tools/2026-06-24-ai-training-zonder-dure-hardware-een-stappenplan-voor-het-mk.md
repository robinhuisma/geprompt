---
title: "AI-training zonder dure hardware: een stappenplan voor het MKB"
date: 2026-06-24T06:05:33.660Z
tags: ["ai-training", "kostenbesparing", "mkb", "praktisch"]
categorieen: ["nieuws-tools"]
summary: "Train een AI-model voor minder dan een euro per uur, zonder eigen dure videokaart."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

AI-training wordt toegankelijk voor kleine bedrijven zonder dure hardware. Met een clouddienst als RunPod en een gratis toolkit van Ostris train je een AI-model voor minder dan een euro per uur, zonder dat je een eigen krachtige videokaart nodig hebt.

## Wat er aan de hand is
De AI-toolkit van Ostris, een opensource-project, is uitgebreid met ondersteuning voor Z-Image Turbo, een model dat snelle beeldgeneratie mogelijk maakt. De ontwikkelaar heeft de hele applicatie als Docker-image uitgebracht, die direct beschikbaar is als template op RunPod. RunPod is een clouddienst waar je per uur betaalt voor rekenkracht. Een RTX 5090-videokaart kost daar $0,89 per uur. Volgens de auteur van de tutorial op Weird Wonderful AI is dat ‘belachelijk goedkoop’ vergeleken met het zelf aanschaffen van een dure videokaart. De training van een LoRA (een klein, getraind model dat je aan een bestaand AI-model toevoegt) duurde op die cloud-hardware ongeveer 1 uur en 10 minuten.

## Wat dit betekent
Voor ondernemers en professionals die AI willen inzetten voor bijvoorbeeld productfotografie, marketingbeelden of ontwerpwerk, vervalt de drempel van een investering van duizenden euro’s in een krachtige videokaart. Waar je voorheen een RTX 4090 of beter nodig had (kosten: €2000 of meer), kun je nu voor een paar euro per trainingssessie in de cloud werken. Dit opent de deur voor kleine bedrijven die geen IT-afdeling hebben, maar wel eigen AI-modellen willen trainen op hun eigen beeldmateriaal. De tutorial richt zich specifiek op Z-Image Turbo, maar de aanpak werkt voor meerdere modellen.

## Hoe je dit kunt toepassen
**Als je een webshop runt en eigen productfoto’s wilt genereren in een consistente stijl.** Je kunt een LoRA trainen op een set van 20 tot 50 eigen productfoto’s. Het resultaat is een model dat jouw producten in nieuwe situaties kan plaatsen, zonder dat je elke keer een fotoshoot hoeft te boeken. De kosten: minder dan een euro voor de training, plus de tijd om de foto’s voor te bereiden. Een optie is om te beginnen met een kleine dataset van 10 afbeeldingen om het proces te testen.

**Als je een team aanstuurt en medewerkers wilt laten experimenteren met AI zonder dure aankopen.** Je zou een bedrijfsaccount op RunPod kunnen aanmaken en per project een trainingssessie starten. Omdat je per uur betaalt, kun je meerdere mensen laten testen zonder dat er een vaste investering nodig is. Overweeg om een standaard Docker-omgeving in te richten, zodat iedereen met dezelfde instellingen werkt.

**Als je in de creatieve sector werkt en snel verschillende visuele stijlen wilt uitproberen.** De toolkit laat je meerdere versies van een LoRA opslaan tijdens de training, bijvoorbeeld elke 300 stappen. Zo kun je achteraf de beste variant kiezen. Een mogelijkheid is om voor een campagne drie of vier varianten te trainen met verschillende parameters, en die te vergelijken. De totale kosten blijven onder de vijf euro per experiment.

**Als je geen technische achtergrond hebt, maar wel AI wilt inzetten.** De tutorial beschrijft een stappenplan: zoek in RunPod naar de template ‘ostris’, start de omgeving, upload afbeeldingen, voeg bijschriften toe en start de training. De standaardinstellingen werken voor de meeste gebruikers. Een praktische tip: zet de optie ‘Low VRAM’ uit als je cloud-hardware met meer dan 24 GB geheugen gebruikt, en schakel ‘Cached Text Embedding’ in voor snellere training.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

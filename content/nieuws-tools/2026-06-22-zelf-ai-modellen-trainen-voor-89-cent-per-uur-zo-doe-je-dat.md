---
title: "Zelf AI-modellen trainen voor 89 cent per uur: zo doe je dat"
date: 2026-06-22T22:06:01.867Z
tags: ["ai training", "cloud gpu", "lora", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-model zonder dure hardware, voor minder dan een euro per uur via de cloud."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Je kunt nu zelf een AI-model trainen voor minder dan een euro per uur, zonder dat je een dure videokaart in huis hoeft te halen. Met de AI Toolkit van Ostris en een cloud-GPU van RunPod voor 89 cent per uur train je in ongeveer een uur een eigen LoRA-model, geschikt voor beeldgeneratie met Z-Image Turbo.

## Wat er aan de hand is

De AI Toolkit van Ostris is een opensource-tool waarmee je zelf AI-modellen kunt trainen, zoals LoRA's voor Flux en Z-Image Turbo. De ontwikkelaar heeft de hele applicatie als Docker-image uitgebracht, die direct beschikbaar is als template op het cloudplatform RunPod. Door een RTX5090-GPU in de cloud te huren voor 89 dollarcent per uur, kun je een LoRA-training voltooien in ongeveer 1 uur en 10 minuten. Dit is aanzienlijk goedkoper dan het aanschaffen van een eigen high-end GPU, die al snel duizenden euro's kost. De auteur van de tutorial gebruikt zelf een RTX4080 lokaal, maar kiest bewust voor de cloud om geheugenproblemen te voorkomen.

## Wat dit betekent

Voor ondernemers en professionals betekent dit dat de drempel om eigen AI-modellen te trainen drastisch is verlaagd. Waar je eerder een investering van duizenden euro's in hardware nodig had, kun je nu voor een paar euro per trainingssessie aan de slag. Dit opent mogelijkheden voor kleine bedrijven die bijvoorbeeld eigen stijlen willen trainen voor productafbeeldingen, marketingmateriaal of visuele content, zonder dat ze een AI-specialist in dienst hoeven te nemen. Het enige wat je nodig hebt is een set afbeeldingen, een cloudaccount en een uurtje rekentijd. De tool is ontworpen om toegankelijk te zijn: de meeste instellingen staan al goed, en je hoeft alleen een paar aanpassingen te doen voor optimale prestaties.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto's in een eigen stijl wilt genereren.** Je kunt een LoRA trainen op foto's van je producten in een specifieke setting, zoals een minimalistische studio-opname of een natuurlijke buitenomgeving. Verzamel 20 tot 50 afbeeldingen, upload ze in de toolkit, en train een model dat jouw producten in die stijl kan genereren. Dit bespaart tijd en kosten voor fotoshoots.

**Als je een marketingbureau hebt en consistent beeldmateriaal voor meerdere klanten wilt maken.** Je kunt per klant een aparte LoRA trainen, zodat alle gegenereerde beelden dezelfde look & feel hebben. De training kost per klant ongeveer een uur en minder dan een euro. Daarna kun je met ComfyUI of een andere interface eindeloos variaties maken zonder dat je elke keer handmatig hoeft te bewerken.

**Als je een creatief professional bent en experimenteert met AI-kunst.** De toolkit ondersteunt meerdere modellen, waaronder Z-Image Turbo en Flux. Je kunt verschillende versies van je LoRA opslaan (de tutorial bewaart 8 tussenversies) en testen welke sterkte het beste werkt. De auteur adviseert een LoRA-sterkte tussen 0.8 en 0.95 voor de beste resultaten. Dit geeft je de flexibiliteit om te finetunen zonder opnieuw te trainen.

**Als je een klein team hebt en geen dure hardware wilt aanschaffen.** De cloud-GPU kost 89 cent per uur, en je betaalt alleen voor de tijd dat je hem gebruikt. Je kunt de training starten, een uur later terugkomen en de resultaten downloaden. Geen gedoe met installatie, stroomkosten of koeling. De toolkit is via een Docker-template direct beschikbaar op RunPod, dus je hoeft geen technische infrastructuur op te zetten.

Bron: Weird Wonderful AI

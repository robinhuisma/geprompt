---
title: "Zelf een AI-beeldmodel trainen voor €0,80 per uur: zo doe je dat"
date: 2026-05-30T18:04:13.252Z
tags: ["ai-beeldmodel", "lora-training", "runpod", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Train een AI-beeldmodel voor minder dan een euro per uur via RunPod en Docker, zonder dure hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel kost je minder dan een euro per uur, als je gebruikmaakt van een externe GPU via RunPod en de Ostris AI Toolkit in Docker. Je hebt geen dure videokaart in je eigen computer nodig.

## Wat er aan de hand is
De Ostris AI Toolkit, een open-source tool voor het trainen van AI-beeldmodellen, is nu beschikbaar als Docker-image en als template op RunPod. Dat betekent dat je zonder technische installatie een trainingsomgeving kunt opzetten op een krachtige RTX 5090 GPU in de cloud, voor $0,89 per uur (ongeveer €0,80). De maker van de toolkit, Ostris, heeft de hele applicatie als Docker-image uitgebracht, waardoor je hem met een paar klikken kunt starten. Dit maakt het trainen van zogenaamde LoRA’s (Low-Rank Adaptations) voor modellen zoals Z-Image Turbo toegankelijk voor iedereen met een basiskennis van AI-tools.

## Wat dit betekent
Voor ondernemers die AI-beelden willen gebruiken voor productvisualisaties, marketingmateriaal of gepersonaliseerde content, vervalt de drempel van dure hardware. Een RTX 5090 in de cloud kost minder dan een kop koffie per uur, terwijl een eigen RTX 4080 vaak vastloopt op geheugenproblemen. De training van een LoRA duurt met deze setup ongeveer 1 uur en 10 minuten voor 3000 stappen. Je krijgt meerdere versies van het model, die je direct kunt testen in ComfyUI. Dit opent de deur voor kleine bedrijven die voorheen afhankelijk waren van dure AI-diensten of externe specialisten.

## Hoe je dit kunt toepassen
**Als je een webshop runt en productfoto’s in verschillende stijlen wilt genereren.** Je zou een LoRA kunnen trainen op 10 tot 20 foto’s van je producten. Zet de training op via RunPod, download de checkpoint-bestanden en plaats ze in de `models\loras` map van ComfyUI. Vervolgens kun je met een prompt als ‘foto van [product] in een minimalistische woonkamer’ unieke productafbeeldingen genereren, zonder dat je een fotograaf hoeft in te huren.

**Als je een marketingbureau bent en gepersonaliseerde beelden voor klanten maakt.** Overweeg om per klant een aparte LoRA te trainen op basis van hun merkstijl of productlijnen. De kosten per training zijn laag, dus je kunt experimenteren met verschillende stijlen. Gebruik de LoRA-sterkte tussen 0,8 en 0,95 voor de beste balans tussen herkenbaarheid en variatie.

**Als je een contentmaker bent die consistentie wil in AI-gegenereerde illustraties.** Train een LoRA op je eigen tekeningen of een specifieke stijl. Je kunt de training starten met de standaardinstellingen in de toolkit, maar pas de ‘Save Max Step Saves’ aan naar 8, zodat je meerdere versies krijgt om te testen. Zet ‘Low VRAM’ uit en ‘Cached Text Embedding’ aan voor betere prestaties op de RTX 5090.

**Als je een productontwikkelaar bent en snel conceptvisualisaties nodig hebt.** Gebruik de toolkit om een LoRA te trainen op schetsen of 3D-renders van je ontwerp. De training duurt ongeveer een uur, waarna je in ComfyUI tientallen varianten kunt genereren. Dit versnelt het iteratieve ontwerpproces aanzienlijk.

**Als je een consultant bent die AI-beeldmodellen wil demonstreren aan klanten.** Je zou een demo-LoRA kunnen trainen op een paar voorbeeldafbeeldingen en deze live kunnen draaien in ComfyUI. De lage kosten per training maken het mogelijk om meerdere demo’s te maken zonder budgetoverschrijding.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

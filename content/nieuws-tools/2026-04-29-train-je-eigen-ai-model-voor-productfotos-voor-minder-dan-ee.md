---
title: "Train je eigen AI-model voor productfoto’s voor minder dan een euro per uur"
date: 2026-04-29T10:04:33.888Z
tags: ["ai-training", "productfotografie", "cloud-gpu", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Met een cloud-GPU van 89 cent per uur train je zelf een AI-model voor unieke marketingbeelden."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-model voor productfoto’s of marketingbeelden is nu toegankelijk voor kleine bedrijven, zonder dure hardware. Met een cloud-GPU van 89 dollarcent per uur en de gratis AI Toolkit van Ostris kun je in ongeveer een uur een eigen model trainen dat past bij jouw merk of productlijn.

## Wat er aan de hand is
De AI Toolkit van ontwikkelaar Ostris is uitgebreid met ondersteuning voor Z-Image Turbo, een model dat snelle en efficiënte beeldgeneratie mogelijk maakt. De toolkit is beschikbaar als Docker-image en draait direct op cloudplatforms zoals RunPod. Op dat platform huur je een RTX5090 GPU voor 0,89 dollar per uur, wat volgens de maker van de toolkit aanzienlijk goedkoper is dan een eigen krachtige videokaart kopen. Het trainen van een model duurt met deze instelling ongeveer 1 uur en 10 minuten, waarna je meerdere versies van het getrainde model kunt downloaden en gebruiken in tools zoals ComfyUI.

## Wat dit betekent
Voor ondernemers die regelmatig productfoto’s, marketingbeelden of social media-content maken, opent dit de deur naar maatwerk zonder dure abonnementen of externe ontwerpers. Waar je eerder afhankelijk was van generieke AI-beeldmodellen of dure studio-opnames, kun je nu een model trainen dat specifiek jouw producten, stijl of doelgroep herkent en reproduceert. De kosten zijn laag: minder dan een euro per trainingssessie, plus eenmalige voorbereidingstijd voor het uploaden en bijschrijven van je eigen beeldmateriaal. Dit maakt het haalbaar voor eenmanszaken en kleine teams die niet beschikken over een dure werkstation-pc.

## Hoe je dit kunt toepassen
**Als je een webshop runt met eigen productfoto’s** kun je overwegen om een model te trainen op basis van 20 tot 50 bestaande productfoto’s. Het model leert dan de specifieke stijl, belichting en achtergrond van jouw merk. Een mogelijkheid is om daarna nieuwe producten in dezelfde stijl te genereren zonder dat je opnieuw hoeft te fotograferen. Je zou kunnen beginnen met het uploaden van je beste productfoto’s naar de dataset in de AI Toolkit en deze voorzien van korte beschrijvingen.

**Als je een team aanstuurt dat regelmatig social media-content maakt** kun je het getrainde model gebruiken om snel variaties te maken van bestaande campagnes. Een optie is om het model te trainen op een reeks eerdere posts, zodat nieuwe content consistent blijft qua kleurstelling en compositie. Overweeg om de trainingssessie in te plannen op een rustig moment, bijvoorbeeld ’s nachts, zodat de cloud-GPU niet in de weg zit van ander werk.

**Als je in de creatieve sector werkt en maatwerk levert aan klanten** kun je voor elke klant een apart model trainen. De kosten per model zijn laag genoeg om dit rendabel te maken. Een mogelijkheid is om het model na training op te slaan en te hergebruiken voor vervolgopdrachten. Je zou kunnen experimenteren met de LoRA-sterkte tussen 0,8 en 0,95, zoals de maker van de toolkit adviseert, om de balans tussen herkenbaarheid en variatie te vinden.

**Als je geen ervaring hebt met AI-training** is het goed om te weten dat de toolkit grotendeels standaardinstellingen gebruikt. De enige aanpassingen die de maker noemt zijn: uitschakelen van Low VRAM, Quantization Transformer op None zetten, Save Max Step saves op 8, en Cached Text Embedding aanzetten. Een praktische eerste stap is om een RunPod-account aan te maken, de Ostris-template te zoeken, en te beginnen met een kleine dataset van 10 tot 15 afbeeldingen om het proces te leren kennen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

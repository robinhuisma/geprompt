---
title: "AI-model trainen voor een paar euro: zo doe je dat zonder dure hardware"
date: 2026-05-13T18:06:24.153Z
tags: ["ai-tools", "lora-training", "cloud-gpu", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-model voor minder dan een euro per uur via een cloud-GPU, zonder dure videokaart."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-model is voor ondernemers met een klein budget ineens bereikbaar. Door gebruik te maken van een cloud-GPU, zoals een RTX5090 op RunPod, kun je voor minder dan een euro per uur een LoRA-model trainen, zonder dat je zelf een dure videokaart hoeft te kopen.

## Wat er aan de hand is
De AI Toolkit van Ostris, een open-source toolset voor het trainen van AI-modellen, is nu beschikbaar als een Docker-image. Dat betekent dat je de volledige applicatie kunt draaien op een clouddienst als RunPod, zonder dat je zelf software hoeft te installeren of configureren. De tool ondersteunt onder andere het trainen van Z-Image Turbo LoRA’s, een type model dat snel afbeeldingen kan genereren. Volgens een tutorial van Weird Wonderful AI kost een RTX5090 op RunPod slechts $0,89 per uur, waarmee een trainingstraject van ongeveer 1 uur en 10 minuten mogelijk is. Dit is een aanzienlijk lagere drempel dan het aanschaffen van een lokale RTX4090 of RTX5090, die al snel duizenden euro’s kost.

## Wat dit betekent
Voor ondernemers en professionals in het MKB opent dit de deur naar het zelf trainen van AI-modellen zonder grote investeringen. Waar je eerder een dure videokaart nodig had of afhankelijk was van dure clouddiensten, kun je nu voor een paar euro per training een model maken dat is afgestemd op jouw specifieke producten, stijlen of merk. Dit is vooral relevant voor webshops, grafisch ontwerpers, marketeers en contentmakers die unieke visuele content willen genereren. De trainingstijd van iets meer dan een uur betekent dat je dit kunt doen in een lunchpauze of tijdens een avondsessie, zonder dat je dagen hoeft te wachten.

## Hoe je dit kunt toepassen
**Als je een webshop runt met unieke producten**, kun je overwegen om een LoRA te trainen op basis van foto’s van je producten. Je zou bijvoorbeeld een model kunnen maken dat je producten in verschillende omgevingen of stijlen plaatst, zonder dat je elke keer een fotoshoot hoeft te doen. Een optie is om 10 tot 20 afbeeldingen van je producten te uploaden, deze te voorzien van bijschriften en de training te starten op RunPod. Na een uur heb je een model dat je kunt gebruiken in tools zoals ComfyUI om nieuwe varianten te genereren.

**Als je een team aanstuurt dat visuele content maakt**, kun je de AI Toolkit inzetten om consistentie in stijl te waarborgen. Je zou bijvoorbeeld een LoRA kunnen trainen op de huisstijl van je bedrijf, zoals logo’s, kleuren en typografie. Een mogelijkheid is om een dataset te maken van 15 tot 20 afbeeldingen die jouw merkidentiteit weergeven, deze te trainen en het resulterende model te delen met je ontwerpers. Zo kunnen zij snel nieuwe beelden genereren die passen bij de bestaande stijl.

**Als je in de creatieve sector werkt en snel concepten wilt testen**, biedt deze methode een betaalbare manier om te experimenteren. Je zou kunnen starten met een kleine dataset van 5 tot 10 afbeeldingen om te zien of de resultaten bruikbaar zijn. Overweeg om de training uit te voeren met de standaardinstellingen, maar pas de optie ‘Save Max Step saves’ aan naar 8, zodat je meerdere versies krijgt om te vergelijken. Dit helpt je om de beste LoRA-sterkte te vinden, die volgens de tutorial tussen 0,8 en 0,95 ligt.

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

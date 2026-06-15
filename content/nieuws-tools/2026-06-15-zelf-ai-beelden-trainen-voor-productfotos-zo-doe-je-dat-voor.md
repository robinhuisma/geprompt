---
title: "Zelf AI-beelden trainen voor productfoto’s: zo doe je dat voor minder dan een euro per uur"
date: 2026-06-15T10:07:22.538Z
tags: ["ai-beelden", "lora-training", "productfotografie"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-model voor productfoto’s of marketingmateriaal met een goedkope GPU in de cloud."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel voor productfoto’s of marketingmateriaal is nu bereikbaar voor kleine ondernemers, zonder dure hardware. Met een cloud-GPU van minder dan een euro per uur en de gratis AI Toolkit van Ostris kun je in ongeveer een uur een eigen LoRA-model trainen dat jouw producten of stijl herkent en genereert.

## Wat er aan de hand is

De AI Toolkit van Ostris is een gratis, open-source toolset waarmee je zelf AI-beeldmodellen kunt trainen. De tool draait als Docker-container op cloudplatforms zoals RunPod. Door een RTX5090 GPU te huren voor $0,89 per uur (ongeveer 82 eurocent) kun je een zogeheten LoRA-model trainen op basis van je eigen afbeeldingen. In het voorbeeld uit de bron werd een model getraind voor ‘Z-Image Turbo’, een variant van het Flux-model, in 1 uur en 10 minuten. De tool slaat meerdere versies van het model op, zodat je kunt testen welke het beste werkt. Dit is een forse verlaging van de drempel: waar je voorheen een eigen dure GPU of dure clouddiensten nodig had, kun je nu voor een paar euro per trainingssessie aan de slag.

## Wat dit betekent

Voor ondernemers die regelmatig productfoto’s, marketingbeelden of social media-content maken, opent dit de deur naar maatwerk zonder dure fotografen of uren nabewerking. In plaats van elke keer een nieuwe fotoshoot te plannen, kun je een AI-model trainen dat jouw producten herkent en in verschillende contexten plaatst. Denk aan een meubelzaak die haar stoelen in verschillende interieurs wil tonen, of een kledingmerk dat dezelfde jas in meerdere kleuren en omgevingen wil laten zien. De lage kosten per training (minder dan een euro per uur) maken het haalbaar voor kleine budgetten. Het nadeel is dat je nog wel enige technische basiskennis nodig hebt: je moet kunnen werken met cloudplatforms, Docker en ComfyUI, een populaire AI-beeldbewerkingsinterface.

## Hoe je dit kunt toepassen

**Als je een webshop runt met eigen producten.** Je zou kunnen beginnen met het verzamelen van 10 tot 20 goede foto’s van je product vanuit verschillende hoeken. Upload deze naar de AI Toolkit, voorzie ze van korte beschrijvingen (captioning) en start de training. Na een uur heb je een LoRA-model dat jouw product herkent. Vervolgens kun je in ComfyUI prompts gebruiken zoals ‘onze houten stoel in een moderne woonkamer met veel daglicht’ om nieuwe productfoto’s te genereren zonder dat je opnieuw hoeft te fotograferen.

**Als je marketingmateriaal maakt voor social media.** Een mogelijkheid is om een model te trainen op je bestaande merkstijl: logo’s, kleuren, typische composities. Daarmee kun je snel variaties maken voor campagnes. Stel dat je een reeks Instagramposts nodig hebt voor een nieuwe collectie: je traint een model op drie productfoto’s en genereert vervolgens twintig varianten in verschillende settings. Je bespaart tijd en houdt consistentie in je visuele stijl.

**Als je een klein team aanstuurt zonder AI-expert.** Overweeg om eenmalig een uurtje te investeren in het opzetten van de tool op RunPod. De handleiding in de bron is stapsgewijs: zoek in RunPod naar de template ‘ostris’, start een pod met een RTX5090, laad de toolkit, maak een dataset aan en upload je beelden. De standaardinstellingen werken grotendeels, met een paar aanpassingen: zet Low VRAM uit, Quantization Transformer op None, en schakel Cached Text Embedding in. Na de training download je de checkpoint-bestanden en plaats je ze in de ComfyUI map ‘models\loras’. Vanaf dat punt kun je de verschillende versies testen met een LoRA-sterkte tussen 0,8 en 0,95.

**Als je twijfelt of dit voor jou werkt.** Begin met een kleine test: train een model op drie foto’s van één product. De kosten zijn minder dan een euro, en je ziet binnen een uur of de resultaten bruikbaar zijn. Als je tevreden bent, kun je de dataset uitbreiden naar meer producten of stijlen. De praktische toepassing hangt af van jouw situatie, maar de drempel is laag genoeg om het gewoon te proberen.

Bron: Weird Wonderful AI

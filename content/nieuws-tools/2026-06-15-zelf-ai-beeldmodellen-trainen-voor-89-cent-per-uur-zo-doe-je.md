---
title: "Zelf AI-beeldmodellen trainen voor 89 cent per uur: zo doe je dat"
date: 2026-06-15T02:05:35.356Z
tags: ["ai-beeldmodellen", "lora-training", "runpod", "ostris-toolkit"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-beeldmodel met Ostris Toolkit op RunPod voor minder dan een euro per uur."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel is nu bereikbaar voor kleine ondernemers. Met de Ostris AI Toolkit op een gehuurde RTX5090 via RunPod train je een LoRA-model voor 89 cent per uur, zonder dat je een dure eigen videokaart nodig hebt. De training duurt ongeveer een uur en tien minuten.

## Wat er aan de hand is

De Ostris AI Toolkit is een opensource-applicatie waarmee je zelf AI-beeldmodellen kunt trainen. De maker heeft de hele app als Docker-image beschikbaar gesteld, die direct als template op RunPod draait. RunPod is een clouddienst waar je per uur een krachtige GPU huurt. Een RTX5090 kost daar 89 dollarcent per uur. De auteur van het artikel trainde een LoRA voor Z-Image Turbo, een variant van het Flux-model, in ongeveer 70 minuten. Het resultaat was een set checkpoints die direct in ComfyUI te gebruiken zijn.

Dit is relevant omdat het trainen van AI-modellen normaal gesproken een dure GPU vereist, zoals een RTX4080 of beter, die al snel duizenden euro's kost. Door een cloud-GPU te huren, betaal je alleen voor de rekentijd die je daadwerkelijk gebruikt.

## Wat dit betekent

Voor ondernemers die AI-beeldmodellen willen inzetten voor productvisualisaties, marketingmateriaal of gepersonaliseerde content, wordt de drempel een stuk lager. Je hebt geen dure hardware meer nodig. Een training van een uur kost minder dan een kop koffie per dag. Het enige wat je nodig hebt is een set afbeeldingen (bijvoorbeeld van je producten), een RunPod-account en de Ostris Toolkit.

Dit opent mogelijkheden voor bijvoorbeeld webshops die unieke productfoto's willen genereren, of voor marketeers die consistente visuele stijlen willen trainen zonder een designer in te huren. De technologie is nog wel technisch: je moet kunnen werken met Docker, RunPod en ComfyUI. Maar de stappen zijn helder en de kosten zijn laag.

## Hoe je dit kunt toepassen

**Als je een webshop runt met unieke producten.** Je zou een LoRA kunnen trainen op basis van 20 tot 50 productfoto's. Gebruik de Ostris Toolkit om deze te uploaden en te voorzien van bijschriften. Na een uur training heb je een model dat nieuwe productafbeeldingen kan genereren in dezelfde stijl. Dit bespaart tijd en geld voor fotoshoots.

**Als je een marketingteam aanstuurt dat visuele content maakt.** Overweeg om per campagne een aparte LoRA te trainen. Je kunt bijvoorbeeld een model trainen op bestaande campagnematerialen en daarmee snel variaties genereren voor social media, nieuwsbrieven of advertenties. De kosten per training zijn laag genoeg om dit experimenteel te doen.

**Als je in de creatieve sector werkt en klanten unieke stijlen wilt bieden.** Je zou een LoRA kunnen trainen op een specifieke illustratiestijl of productlijn. De getrainde checkpoints kun je downloaden en in ComfyUI gebruiken. Door meerdere versies op te slaan (de auteur bewaarde 8 tussenversies), kun je testen welke sterkte het beste werkt. De auteur gebruikte een LoRA-sterkte tussen 0,8 en 0,95.

**Als je technisch bent en AI wilt integreren in je bedrijfsprocessen.** De Ostris Toolkit draait als Docker-container op RunPod. Je kunt dit automatiseren door scripts te schrijven die nieuwe datasets uploaden en trainingen starten. Dit maakt het mogelijk om periodiek modellen te hertrainen met nieuwe productfoto's of seizoenscollecties.

De praktische toepassing hangt af van jouw situatie, maar de basisstappen zijn: maak een RunPod-account aan, start een RTX5090-instance met het Ostris-template, upload je afbeeldingen, stel de training in (zet Low VRAM uit, Quantization Transformer op None, sla 8 versies op, zet Cached Text Embedding aan), en start de job. Na ongeveer een uur download je de checkpoints en plaats je ze in de models\loras map van ComfyUI.

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

---
title: "AI-modellen trainen voor minder dan een euro per uur: zo doe je dat"
date: 2026-06-15T18:05:36.112Z
tags: ["ai-training", "runpod", "lora", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-model in een uur voor €0,89 per uur via RunPod, zonder dure hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-model kost je minder dan een euro per uur als je gebruikmaakt van clouddiensten zoals RunPod. Met een RTX5090 in de cloud kun je in ongeveer 1 uur en 10 minuten een Z-Image Turbo LoRA trainen, voor slechts $0,89 per uur. Dat is aanzienlijk goedkoper dan investeren in een krachtige lokale videokaart.

## Wat er aan de hand is

De AI-toolkit van Ostris, een populaire opensource-software voor het trainen van AI-modellen, is nu beschikbaar als Docker-image op het cloudplatform RunPod. Gebruikers kunnen via RunPod eenvoudig een virtuele machine met een RTX5090 videokaart huren voor $0,89 per uur. De toolkit bevat alle functionaliteit om datasets te maken, afbeeldingen te voorzien van bijschriften en een LoRA-model te trainen. LoRA’s zijn kleine, aanpasbare AI-modellen die je kunt gebruiken om stijlen, personages of objecten te genereren in tools zoals ComfyUI. De auteur van het artikel trainde een model voor zijn ‘Desi Babes’-collectie (oorspronkelijk voor Flux) op Z-Image Turbo, een variant van het Stable Diffusion-model dat sneller en efficiënter is. Het volledige trainingsproces duurde iets meer dan een uur, waarbij acht verschillende versies van het model werden opgeslagen.

## Wat dit betekent

Voor ondernemers en professionals die AI willen inzetten voor maatwerk, opent dit de deur naar betaalbare modeltraining. Waar je eerder een dure videokaart (zoals een RTX4080 of RTX5090) lokaal moest aanschaffen voor duizenden euro’s, kun je nu per uur betalen. Dat is vooral interessant voor kleine bedrijven die af en toe een model willen trainen voor specifieke toepassingen, zoals productvisualisaties, gepersonaliseerde marketingafbeeldingen of unieke stijlen voor social media. De drempel om te experimenteren wordt hiermee veel lager: je betaalt alleen voor de rekentijd die je daadwerkelijk gebruikt. Bovendien voorkom je problemen met onvoldoende videogeheugen, waar lokale gebruikers met een RTX4080 vaak tegenaan lopen.

## Hoe je dit kunt toepassen

**Als je een webshop runt en unieke productafbeeldingen wilt genereren.** Je kunt een LoRA trainen op basis van foto’s van je producten. Upload bijvoorbeeld 20 tot 30 afbeeldingen van je producten in verschillende hoeken en omgevingen. Gebruik de toolkit om ze te voorzien van bijschriften en start de training op RunPod. Binnen een uur heb je een model dat nieuwe varianten kan genereren, zoals je product in een andere kleur of in een andere setting. De kosten blijven onder de twee euro per training.

**Als je een creatief bureau bent en merkspecifieke stijlen wilt ontwikkelen.** Train een LoRA op basis van bestaand beeldmateriaal van een merk, zoals logo’s, kleurenpaletten en typische composities. Het model kan dan consistent nieuwe content genereren die past bij de huisstijl. Omdat je per uur betaalt, kun je meerdere varianten testen zonder grote investeringen. Overweeg om de training ’s nachts te laten draaien, zodat je overdag met de resultaten aan de slag kunt.

**Als je een team aanstuurt dat AI-content produceert.** Je kunt een gedeelde RunPod-account gebruiken waar teamleden toegang toe hebben. Door de toolkit als Docker-image beschikbaar te maken, kunnen meerdere mensen tegelijkertijd experimenteren met verschillende datasets. De lage kosten per uur maken het mogelijk om wekelijks nieuwe modellen te trainen voor uiteenlopende projecten, van social media posts tot presentaties.

**Als je een freelancer bent en je portfolio wilt uitbreiden met AI-gegenereerd werk.** Gebruik de toolkit om een LoRA te trainen op je eigen stijl of op een specifiek thema. Je kunt de resultaten direct in ComfyUI testen door de checkpoints in de map `models\loras` te plaatsen. De auteur adviseert om de LoRA-sterkte tussen 0,8 en 0,95 in te stellen voor de beste resultaten. Zo kun je snel verschillende versies vergelijken en de beste kiezen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

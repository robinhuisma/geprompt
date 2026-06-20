---
title: "AI-beeldmodel finetunen voor 89 cent per uur: zo doe je dat"
date: 2026-06-20T14:07:20.298Z
tags: ["ai-beeldgeneratie", "finetunen", "kostenbesparing", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Finetune zelf een AI-beeldmodel voor minder dan een euro per uur, zonder dure hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het finetunen van een AI-beeldmodel kost je minder dan een euro per uur als je gebruikmaakt van een cloud-GPU via RunPod. Voor 89 cent per uur huur je een RTX 5090, waarmee je in ongeveer een uur een eigen LoRA traint. Dat is een fractie van de kosten van een eigen dure videokaart.

## Wat er aan de hand is

De AI Toolkit van Ostris is een open-source toolset waarmee je AI-beeldmodellen kunt finetunen. Normaal gesproken heb je daar een krachtige eigen videokaart voor nodig, zoals een RTX 4080 of 4090, die duizenden euro’s kost. Maar Ostris heeft de toolkit als Docker-image uitgebracht, die direct beschikbaar is als template op RunPod. Door een cloud-GPU te huren in plaats van lokaal te draaien, bespaar je fors op hardwarekosten. Volgens de maker van de tutorial draaide hij zijn training op een RTX 5090 in RunPod voor 89 cent per uur, terwijl zijn eigen RTX 4080 thuis vastliep op geheugenproblemen. De training was binnen 1 uur en 10 minuten klaar.

## Wat dit betekent

Voor ondernemers en professionals die AI-beeldmodellen willen inzetten voor bijvoorbeeld productfoto’s, marketingmateriaal of gepersonaliseerde content, opent dit de deur naar maatwerk zonder grote investeringen. Waar je eerder een eigen workstation van enkele duizenden euro’s nodig had, kun je nu voor een paar euro per training een model finetunen. Dit is vooral interessant voor kleine bedrijven die niet structureel een dure GPU nodig hebben, maar af en toe een model willen trainen. De drempel om zelf te finetunen wordt hiermee aanzienlijk lager.

## Hoe je dit kunt toepassen

**Als je een webshop runt en unieke productfoto’s wilt genereren.** Je kunt een LoRA trainen op basis van je eigen productafbeeldingen. Upload bijvoorbeeld 20 tot 50 foto’s van je producten, voorzie ze van bijschriften, en start de training op RunPod. Binnen een uur heb je een model dat jouw producten in verschillende settings kan genereren. Een optie is om dit te combineren met een tool als ComfyUI om de resultaten te testen. Overweeg om de training ’s avonds te starten, zodat je de volgende ochtend de checkpoints kunt downloaden.

**Als je een team aanstuurt en meerdere modellen wilt trainen.** Omdat de kosten per training laag zijn, kun je experimenteren met verschillende datasets en instellingen zonder dat het budget uit de hand loopt. Je zou bijvoorbeeld per productcategorie een aparte LoRA kunnen trainen. Een mogelijkheid is om een vaste medewerker of stagiair te laten inloggen op RunPod, de training te starten en de resultaten te laten evalueren. De tool slaat standaard meerdere versies op, zodat je kunt vergelijken welke stapgrootte het beste werkt.

**Als je in de creatieve sector werkt en stijlen wilt finetunen.** Stel dat je een specifieke illustratiestijl of fotostijl wilt toepassen op je content. Je kunt een dataset maken van voorbeeldafbeeldingen in die stijl, deze captions geven, en de LoRA trainen. De tutorial geeft aan dat een LoRA-sterkte van 0,8 tot 0,95 goede resultaten gaf. Een optie is om te beginnen met de standaardinstellingen en alleen de low VRAM-modus uit te schakelen als je een GPU met meer dan 24 GB VRAM gebruikt. De praktische toepassing hangt af van jouw situatie, maar de drempel is nu laag genoeg om het gewoon te proberen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

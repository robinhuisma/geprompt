---
title: "Zelf een AI-beeldmodel trainen voor €0,89 per uur: zo doe je dat"
date: 2026-06-23T10:05:15.822Z
tags: ["ai-beeldmodel", "lora training", "kostenbesparing", "hardware"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-beeldmodel voor minder dan een euro per uur, zonder dure hardware in huis."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel (LoRA) hoeft geen dure investering te zijn. Voor €0,89 per uur huur je een krachtige RTX5090-rekenkracht in de cloud, waarmee je binnen 70 minuten een getraind model hebt. Dit maakt het voor ondernemers haalbaar om zonder dure hardware zelf AI-beelden te genereren die passen bij hun producten, merk of doelgroep.

## Wat er aan de hand is

De AI-toolkit van ontwikkelaar Ostris maakt het trainen van zogeheten LoRA-modellen (Low-Rank Adaptation) toegankelijk voor een breder publiek. LoRA’s zijn compacte aanpassingen van bestaande AI-beeldmodellen, waarmee je het model leert specifieke stijlen, objecten of personen te genereren. De nieuwste versie van de toolkit ondersteunt het Z-Image Turbo-model, een snel en efficiënt beeldmodel.

De auteur van de tutorial gebruikte de clouddienst RunPod om een RTX5090-GPU te huren voor $0,89 per uur (ongeveer €0,82). Dit is aanzienlijk goedkoper dan het aanschaffen van een eigen high-end videokaart, zoals een RTX4080, die al snel meer dan duizend euro kost. Bovendien vermijdt je hiermee geheugenproblemen die optreden bij het lokaal trainen op een minder krachtige GPU. De toolkit is beschikbaar als een Docker-image, wat betekent dat je hem direct kunt starten in de cloud zonder ingewikkelde installatie.

## Wat dit betekent

Voor ondernemers betekent dit dat de drempel om AI-beeldmodellen te trainen drastisch is verlaagd. Waar je eerder een dure workstation nodig had of afhankelijk was van dure abonnementen op AI-diensten, kun je nu voor een paar euro per trainingssessie zelf modellen maken. Dit opent mogelijkheden voor maatwerk in marketing, productvisualisatie en contentcreatie.

De impact is het grootst voor kleine bedrijven die geen budget hebben voor dure AI-licenties of externe ontwerpers. Denk aan een webshop die productfoto’s wil genereren in een specifieke stijl, een interieurontwerper die sfeerbeelden wil maken, of een kledingmerk dat modellen in eigen collecties wil tonen. De kosten per training zijn laag, en je kunt meerdere versies van je model opslaan om te testen welke het beste werkt.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto’s in een consistente stijl wilt genereren**, kun je een LoRA trainen op basis van 10 tot 20 foto’s van je producten. Upload deze naar de toolkit, voorzie ze van bijschriften (captions) en start de training. Binnen een uur heb je een model dat je kunt gebruiken om nieuwe productafbeeldingen te maken in dezelfde stijl. Je zou kunnen overwegen om meerdere versies van het model op te slaan, bijvoorbeeld na 1000, 2000 en 3000 stappen, om te zien welke het beste resultaat geeft.

**Als je een marketingbureau runt en snel visuele concepten wilt maken voor campagnes**, kun je een LoRA trainen op basis van moodboards of referentiebeelden. De toolkit stelt je in staat om de trainingsinstellingen aan te passen, zoals het uitschakelen van de ‘Low VRAM’-modus als je voldoende geheugen hebt. Een optie is om de ‘Cached Text Embedding’ in te schakelen om de training te versnellen. De getrainde checkpoints kun je vervolgens downloaden en gebruiken in ComfyUI, een populaire interface voor AI-beeldgeneratie.

**Als je een creatief bureau bent dat unieke stijlen wil ontwikkelen voor klanten**, kun je experimenteren met de LoRA-sterkte (tussen 0,8 en 0,95) om de invloed van het model te doseren. De auteur van de tutorial beveelt aan om acht verschillende versies van het model op te slaan, zodat je kunt testen welke het beste past bij jouw toepassing. Je zou kunnen overwegen om de training eerst op een kleinere dataset te testen om de instellingen te optimaliseren voordat je een volledige training start.

**Als je een ondernemer bent zonder technische achtergrond**, kun je de toolkit gebruiken via de cloud zonder dat je iets hoeft te installeren. Zoek in RunPod naar de template ‘ostris’, start een pod met een RTX5090, en volg de stappen in de interface. De meeste instellingen zijn standaard goed. Een praktische tip is om de ‘Save Max Step saves’ op 8 te zetten, zodat je meerdere versies hebt om uit te kiezen. De praktische toepassing hangt af van jouw situatie, maar de drempel is laag genoeg om het gewoon te proberen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

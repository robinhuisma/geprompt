---
title: "AI-model trainen voor €0,80 per uur: zo doe je dat zonder dure hardware"
date: 2026-06-18T06:05:41.427Z
tags: ["ai-training", "beeldgeneratie", "lora", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Train zelf AI-beeldmodellen voor een prikkie per uur, zonder dure videokaart."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel kost nog geen euro per uur aan rekenkracht, als je gebruikmaakt van een clouddienst als RunPod. De AI Toolkit van Ostris draait op een RTX5090 in de cloud voor $0,89 per uur en levert binnen 70 minuten een getraind model op.

## Wat er aan de hand is

Ostris, een ontwikkelaar in de AI-gemeenschap, heeft zijn AI Toolkit als Docker-image beschikbaar gemaakt op RunPod. Dit is een cloudplatform waar je per uur rekenkracht huurt. De toolkit maakt het mogelijk om een zogenoemde LoRA (Low-Rank Adaptation) te trainen voor Z-Image Turbo, een model voor beeldgeneratie. Gebruikers uploaden eigen afbeeldingen, voorzien ze van bijschriften en starten de training. Met een RTX5090 in de cloud duurt het proces ongeveer een uur en tien minuten. De auteur van het artikel gebruikte de toolkit eerder voor Flux-modellen, maar test nu de nieuwste versie voor Z-Image Turbo.

Deze ontwikkeling is onderdeel van een bredere trend: AI-tools worden toegankelijker voor kleinere gebruikers. Waar het trainen van modellen voorheen alleen weggelegd was voor bedrijven met dure hardware, kunnen ondernemers nu voor een paar euro per sessie eigen modellen maken.

## Wat dit betekent

Voor ondernemers die beeldgeneratie willen inzetten, bijvoorbeeld voor productafbeeldingen, marketingmateriaal of gepersonaliseerde content, opent dit de deur naar maatwerk zonder grote investeringen. Een eigen RTX4090 of RTX5090 kost al snel duizenden euro’s, maar via de cloud betaal je alleen voor de uren dat je traint. De auteur geeft aan dat hij zijn eigen RTX4080 niet meer gebruikt voor training vanwege geheugenproblemen; de cloud is goedkoper en betrouwbaarder.

Het betekent ook dat je geen technische diepgraver hoeft te zijn. De toolkit werkt met een grafische interface via de browser, en de standaardinstellingen zijn vaak al voldoende. De auteur past alleen een paar instellingen aan: lager VRAM-gebruik uitschakelen, quantisatie op None zetten, en maximaal 8 tussenversies opslaan. De rest blijft standaard.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productafbeeldingen wilt personaliseren.** Je zou een LoRA kunnen trainen op basis van foto’s van je producten. Het model leert dan de specifieke stijl, kleuren en details. Vervolgens genereer je nieuwe afbeeldingen in verschillende contexten, zoals een product op tafel of in een winkelstraat. De training kost ongeveer een uur en een euro, en de resultaten kun je direct in ComfyUI testen.

**Als je een marketingbureau bent en unieke visuals voor campagnes maakt.** Overweeg om een LoRA te trainen op basis van eerdere campagnes of merkrichtlijnen. Het model kan dan consistent beeldmateriaal genereren dat past bij jullie huisstijl. Je kunt meerdere versies bewaren (de auteur bewaart er 8) en de beste kiezen. De LoRA-sterkte van 0,8 tot 0,95 geeft goede resultaten, volgens de auteur.

**Als je een contentmaker bent en sociale media-afbeeldingen wilt automatiseren.** Je zou een dataset kunnen maken van 20 tot 50 afbeeldingen die passen bij jouw thema, bijvoorbeeld minimalistische landschappen of retro-illustraties. De toolkit captioneert de afbeeldingen automatisch, maar je kunt ook handmatig bijschriften toevoegen. Na de training genereer je in een paar seconden nieuwe varianten voor posts, zonder dat je elke keer een ontwerper hoeft in te schakelen.

**Als je een klein team hebt zonder eigen AI-hardware.** De praktische toepassing hangt af van jouw situatie, maar de drempel is laag: je hebt alleen een RunPod-account nodig, een paar euro tegoed, en een set afbeeldingen. De Docker-image staat klaar als template in RunPod, dus je hoeft niets te installeren. De auteur raadt aan om de toolkit te starten, een dataset aan te maken, de afbeeldingen te uploaden, en het job te starten. Na een uur download je de checkpoint-bestanden en plaats je ze in de LoRA-map van ComfyUI.

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

---
title: "Zelf AI-modellen finetunen voor productfoto’s: cloud-GPU voor 89 cent per uur"
date: 2026-05-29T18:03:20.795Z
tags: ["ai finetunen", "cloud gpu", "productfotografie", "marketing"]
categorieen: ["nieuws-tools"]
summary: "Finetune AI-modellen voor marketingbeelden zonder dure hardware, voor minder dan een euro per uur."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Je kunt nu zelf AI-modellen finetunen voor het genereren van productfoto’s of marketingbeelden, zonder dat je een dure videokaart in huis hoeft te hebben. Met een cloud-GPU van RunPod, zoals een RTX5090 voor 89 dollarcent per uur, draai je een complete training in ongeveer een uur.

## Wat er aan de hand is

De AI Toolkit van Ostris, een open-source tool voor het trainen van AI-modellen, is uitgebreid met ondersteuning voor Z-Image Turbo. Dit is een model dat snelle beeldgeneratie mogelijk maakt. De toolkit is beschikbaar als Docker-image en staat als template op RunPod, een cloudplatform voor GPU-rekenkracht. Een gebruiker van Weird Wonderful AI testte de combinatie en trainde in 1 uur en 10 minuten een LoRA (Low-Rank Adaptation) voor Z-Image Turbo op een RTX5090, die op moment van schrijven 0,89 dollar per uur kost. De training leverde meerdere checkpoints op die direct in ComfyUI te gebruiken zijn.

Dit is relevant omdat het de drempel verlaagt voor ondernemers die AI-modellen willen aanpassen aan hun eigen beeldmateriaal. Waar je voorheen een dure workstation nodig had met minimaal 24GB VRAM, kun je nu per uur afrekenen en alleen betalen voor de rekentijd die je daadwerkelijk gebruikt.

## Wat dit betekent

Voor MKB-ondernemers betekent dit dat je AI-beeldgeneratie kunt personaliseren zonder een investering van duizenden euro’s in hardware. Denk aan het trainen van een model dat jouw producten herkent en in verschillende settings kan plaatsen, of het maken van consistente marketingbeelden in een vaste stijl. De kosten zijn voorspelbaar: een training van een uur kost minder dan een euro. Je hebt geen technische diepgang nodig om te starten, want de toolkit draait met standaardinstellingen die voor de meeste gebruikers werken.

Deze ontwikkeling past in een bredere trend waarin AI-tools toegankelijker worden voor kleine bedrijven. Waar finetunen vroeger voorbehouden was aan techbedrijven met eigen GPU-clusters, kunnen nu ook eenmanszaken en kleine teams experimenteren met maatwerk-AI.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto’s wilt genereren in verschillende achtergronden.** Je zou kunnen beginnen met het verzamelen van 20 tot 30 foto’s van je product vanuit verschillende hoeken. Upload deze naar de AI Toolkit op RunPod, laat ze automatisch van bijschriften voorzien, en start een training. Binnen een uur heb je een LoRA die jouw product in elke gewenste setting kan plaatsen, van een woonkamer tot een strand. Een optie is om meerdere versies te bewaren, zoals de tool standaard doet, zodat je kunt testen welke checkpoint het beste werkt voor jouw doeleinden.

**Als je een marketingteam aanstuurt en consistente visuele stijl wilt voor campagnes.** Overweeg om een LoRA te trainen op bestaande campagnematerialen, zoals eerdere advertenties of social media posts. De toolkit slaat standaard acht tussenversies op, waardoor je kunt kiezen welke het dichtst bij jouw gewenste stijl komt. Je zou de training kunnen draaien met een LoRA-sterkte tussen 0,8 en 0,95, zoals de bron aangeeft, om de balans te vinden tussen herkenbaarheid en variatie.

**Als je in de creatieve sector werkt en snel concepten wilt visualiseren voor klanten.** Een mogelijkheid is om een LoRA te trainen op eerdere ontwerpen of moodboards. Omdat de training op een cloud-GPU draait, kun je dit doen zonder dat je eigen computer vastloopt. De bron vermeldt dat je met meer dan 24GB VRAM de standaardinstellingen kunt aanhouden, wat betekent dat je geen ingewikkelde optimalisaties hoeft uit te voeren. Je zou de resulterende checkpoints kunnen downloaden en direct in ComfyUI kunnen testen.

**Als je een kleine onderneming hebt en geen technische achtergrond.** De praktische toepassing hangt af van jouw situatie, maar de drempel is laag: je hebt alleen een RunPod-account nodig, zoekt naar de Ostris-template, uploadt je afbeeldingen en start de training. De bron geeft aan dat de standaardinstellingen grotendeels werken, met als aanpassingen het uitschakelen van Low VRAM, het instellen van Quantization Transformer op None, en het inschakelen van Cached Text Embedding. Dit zijn technische termen, maar de toolkit begeleidt je erdoorheen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

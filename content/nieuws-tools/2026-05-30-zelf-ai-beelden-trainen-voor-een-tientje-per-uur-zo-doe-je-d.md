---
title: "Zelf AI-beelden trainen voor een tientje per uur: zo doe je dat"
date: 2026-05-30T02:02:13.590Z
tags: ["ai-beelden", "lora training", "ostris toolkit", "runpod"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-beeldmodel voor minder dan een euro per uur met de Ostris Toolkit en RunPod."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Je kunt voor minder dan een euro per uur je eigen AI-beeldmodel trainen, zonder dat je een dure videokaart in huis hoeft te hebben. Met de Ostris AI Toolkit en een clouddienst als RunPod draai je een complete trainingsomgeving op een RTX5090 voor 89 dollarcent per uur.

## Wat er aan de hand is

De Ostris AI Toolkit is een open-source toolset waarmee je zelf AI-beeldmodellen kunt trainen, zoals LoRA’s voor Z-Image Turbo. De maker, Ostris, heeft de hele applicatie als een Docker-image beschikbaar gesteld. Die image staat als template op RunPod, een cloudplatform voor GPU-rekenkracht. Door een RTX5090 in de cloud te huren voor 0,89 dollar per uur, kun je een complete trainingssessie draaien zonder dat je eigen computer overbelast raakt. Volgens de maker is een trainingstraject van 3000 stappen met 8 tussenversies in ongeveer 1 uur en 10 minuten klaar.

## Wat dit betekent

Voor ondernemers die AI-beelden willen inzetten voor bijvoorbeeld productvisualisaties, marketingmateriaal of contentcreatie, opent dit de deur naar maatwerk zonder grote investeringen. Een eigen RTX4090 of RTX5090 kost al snel duizenden euro’s. Met RunPod betaal je alleen voor de uren dat je traint. Een training van anderhalf uur kost dan ongeveer 1,34 dollar. Dat is minder dan een kop koffie. De Ostris Toolkit maakt het proces bovendien toegankelijk: je hebt geen diepgaande technische kennis nodig om een dataset te uploaden, afbeeldingen te voorzien van bijschriften en een trainingsjob te starten. Wel moet je de basis van ComfyUI kennen om de getrainde LoRA’s te kunnen gebruiken.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto’s wilt genereren in verschillende stijlen.** Je kunt een LoRA trainen op basis van 10 tot 20 foto’s van je product. Gebruik de Ostris Toolkit om die foto’s te uploaden en te voorzien van beschrijvingen. Na de training van ongeveer een uur heb je een model dat nieuwe afbeeldingen van je product kan genereren in elke gewenste setting. Een mogelijkheid is om de LoRA in ComfyUI te laden met een sterkte tussen 0,8 en 0,95, zoals de maker aanbeveelt.

**Als je een team aanstuurt en AI-beelden wilt inzetten voor social media.** Je kunt een LoRA trainen op bestaande beelden van je merk of stijl. De Ostris Toolkit draait op RunPod, dus je teamleden hoeven geen speciale hardware te hebben. Iedereen met een browser kan de trainingsomgeving starten. Overweeg om een standaard dataset aan te leggen met merkbeelden en die telkens opnieuw te gebruiken voor nieuwe campagnes.

**Als je in de creatieve sector werkt en unieke visuele stijlen wilt ontwikkelen.** Je kunt een LoRA trainen op een collectie van bijvoorbeeld 20 afbeeldingen die jouw gewenste stijl definiëren. De Ostris Toolkit biedt de optie om meerdere tussenversies op te slaan, zodat je kunt testen welke stapgrootte het beste werkt. Een optie is om de instelling ‘Save Max Step saves to Keep’ op 8 te zetten, zoals in de handleiding, zodat je meerdere varianten kunt vergelijken.

**Als je een klein budget hebt en geen dure GPU wilt kopen.** De combinatie van de Ostris Toolkit en RunPod maakt het mogelijk om voor minder dan 1,50 dollar per training een professioneel resultaat te krijgen. Je zou kunnen beginnen met een testtraining van 1000 stappen om te zien of de kwaliteit voldoet, voordat je een volledige training van 3000 stappen start.

Bron: Weird Wonderful AI

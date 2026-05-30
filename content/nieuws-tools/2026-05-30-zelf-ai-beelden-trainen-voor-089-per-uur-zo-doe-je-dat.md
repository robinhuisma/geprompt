---
title: "Zelf AI-beelden trainen voor €0,89 per uur: zo doe je dat"
date: 2026-05-30T14:12:57.237Z
tags: ["ai-beeldgeneratie", "lora-training", "kostenbesparing", "ostris-toolkit"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-beeldmodel zonder dure GPU voor minder dan een euro per uur."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het antwoord: Je kunt nu zelf AI-beeldmodellen trainen voor minder dan een euro per uur, zonder dat je een dure videokaart in huis hoeft te hebben. Met de Ostris AI Toolkit op een gehuurde RTX5090 via RunPod kost het trainen van een LoRA-model ongeveer 70 minuten en €0,89 per uur.

## Wat er aan de hand is

De Ostris AI Toolkit is een open-source toolset waarmee je eigen AI-beeldmodellen kunt trainen, zoals LoRA's voor modellen als Flux en Z-Image Turbo. Normaal gesproken heb je daar een krachtige GPU voor nodig, zoals een RTX4080 of RTX4090, die al snel duizenden euro's kost. Maar de maker van de toolkit heeft de hele applicatie als Docker-image beschikbaar gesteld, die draait op RunPod, een clouddienst voor GPU-rekenkracht. Daar huur je een RTX5090 voor $0,89 per uur. Ter vergelijking: een eigen RTX4090 kost ongeveer €2000 en verbruikt stroom. Met RunPod betaal je alleen voor de rekentijd die je gebruikt.

De training zelf duurt met een RTX5090 ongeveer 1 uur en 10 minuten voor een dataset van 3000 stappen. De toolkit slaat meerdere versies van het model op, zodat je kunt testen welke het beste werkt. De maker gebruikte een LoRA-sterkte van 0,8 tot 0,95 voor de beste resultaten.

## Wat dit betekent

Voor ondernemers die AI-beelden willen gebruiken voor productfoto's, marketingmateriaal of visuele content, opent dit de deur naar maatwerk zonder grote investering. Waar je eerder een dure GPU moest kopen of een specialist moest inhuren, kun je nu zelf aan de slag voor een paar euro per trainingssessie. Dit is vooral relevant voor kleine bedrijven die regelmatig unieke beelden nodig hebben, zoals webshops, grafisch ontwerpers en contentmakers. De drempel om te experimenteren met eigen AI-modellen wordt hiermee aanzienlijk lager.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto's in een consistente stijl wilt genereren.** Je kunt een LoRA trainen op foto's van je producten in verschillende settings. Huur een RTX5090 op RunPod voor €0,89 per uur, upload 20-30 productfoto's, voorzie ze van bijschriften en start de training. Binnen anderhalf uur heb je een model dat nieuwe productfoto's kan genereren in dezelfde stijl. Je zou kunnen overwegen om dit maandelijks te doen voor nieuwe collecties.

**Als je een grafisch ontwerper bent en unieke visuele stijlen wilt ontwikkelen voor klanten.** Verzamel een set referentiebeelden van de gewenste stijl, train een LoRA en gebruik die in ComfyUI om nieuwe ontwerpen te genereren. De kosten per training zijn laag genoeg om meerdere stijlen uit te proberen. Een optie is om per project een aparte LoRA te trainen en die op te slaan voor hergebruik.

**Als je een contentmaker bent en regelmatig afbeeldingen nodig hebt voor social media.** Train een LoRA op je bestaande content om een herkenbare visuele identiteit te creëren. Je kunt de training starten voordat je gaat slapen en de volgende ochtend de resultaten downloaden. Overweeg om de checkpoint-bestanden te bewaren, zodat je later kunt terugkeren naar een eerdere versie als de nieuwe stijl niet bevalt.

**Als je een klein marketingbureau bent en snel visuele concepten wilt testen.** Gebruik de Ostris Toolkit om in een paar uur tijd meerdere LoRA's te trainen voor verschillende campagnes. De lage kosten per training maken het mogelijk om te experimenteren zonder budgetdruk. Je zou kunnen beginnen met één testtraining om het proces te leren, voordat je grotere datasets gaat gebruiken.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

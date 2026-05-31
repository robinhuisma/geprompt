---
title: "Zelf AI-beelden trainen voor €0,89 per uur: zo doe je dat"
date: 2026-05-31T06:01:50.400Z
tags: ["ai-beeldtraining", "ostris toolkit", "runpod", "lora"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-beeldmodel zonder dure hardware voor minder dan een euro per uur."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Je kunt nu zelf AI-beelden trainen voor een fractie van de kosten van dure hardware. Met de Ostris AI Toolkit op RunPod huur je een krachtige RTX5090 voor €0,89 per uur, waarmee je in ongeveer een uur een eigen LoRA-model traint.

## Wat er aan de hand is

De Ostris AI Toolkit is een complete applicatie die als Docker-image beschikbaar is. Dit betekent dat je hem niet lokaal hoeft te installeren, maar direct kunt draaien op een clouddienst als RunPod. De toolkit ondersteunt nu Z-Image Turbo, een nieuw model voor het genereren van afbeeldingen. Door een LoRA (Low-Rank Adaptation) te trainen, kun je het model aanpassen aan jouw specifieke stijl of onderwerp. De auteur van het artikel gebruikte de toolkit om een dataset van eigen beelden te trainen, met een doorlooptijd van slechts 1 uur en 10 minuten op een gehuurde RTX5090.

## Wat dit betekent

Voor ondernemers die AI-beelden willen inzetten voor marketing, productvisualisatie of contentcreatie, opent dit de deur naar maatwerk zonder grote investeringen. Normaal gesproken heb je voor het trainen van AI-modellen een krachtige videokaart nodig, zoals een RTX4080 of RTX5090, die al snel duizenden euro’s kost. Met de combinatie van Ostris Toolkit en RunPod betaal je alleen voor de rekentijd die je gebruikt. Een training van een uur kost minder dan een kop koffie. Dit maakt het haalbaar voor kleine bedrijven, freelancers en marketeers om eigen beeldmodellen te ontwikkelen, bijvoorbeeld voor consistente productfoto’s of herkenbare merkstijlen.

## Hoe je dit kunt toepassen

**Als je een webshop runt en consistente productfoto’s wilt maken.** Je kunt een LoRA trainen op basis van 10 tot 20 foto’s van je producten. Het model leert de specifieke kleuren, vormen en texturen. Daarna genereer je nieuwe afbeeldingen in verschillende settings, zonder dat je elke keer een fotoshoot hoeft te doen. Overweeg om te beginnen met een kleine dataset van je bestverkochte producten en test de resultaten met een LoRA-sterkte tussen 0.8 en 0.95, zoals de auteur aanbeveelt.

**Als je een team aanstuurt dat visuele content maakt voor social media.** Je zou de toolkit kunnen gebruiken om een merk-LoRA te trainen die de huisstijl van je bedrijf vastlegt. Denk aan specifieke kleurenpaletten, lettertypen of grafische elementen. Het voordeel is dat je niet afhankelijk bent van één ontwerper: het model kan consistentie garanderen, zelfs als meerdere mensen content maken. Een optie is om een aparte dataset te maken met voorbeelden van eerdere campagnes en die te gebruiken als trainingsmateriaal.

**Als je in de creatieve sector werkt en snel concepten wilt visualiseren.** Stel dat je een interieurontwerper bent of een modeontwerper. Je kunt een LoRA trainen op je eigen ontwerpen of schetsen. Het model leert jouw stijl en kan vervolgens variaties genereren voor moodboards of presentaties aan klanten. De lage kosten per training maken het mogelijk om meerdere versies te testen zonder budgetzorgen. Overweeg om de instelling ‘Save Max Step saves’ op 8 te zetten, zoals in het voorbeeld, zodat je verschillende tussenversies kunt vergelijken.

**Als je een klein marketingbureau bent dat maatwerk wil bieden aan klanten.** Je zou per klant een aparte LoRA kunnen trainen, gebaseerd op hun bestaande beeldmateriaal. De trainingstijd van ongeveer een uur is kort genoeg om dit in een dagdeel te doen. De resultaten kun je direct in ComfyUI testen door de checkpoints in de map models\loras te plaatsen. Een mogelijkheid is om klanten een proefversie aan te bieden met een beperkt aantal stappen, zodat ze de kwaliteit kunnen beoordelen voordat je de volledige training uitvoert.

Bron: Weird Wonderful AI

---
title: "AI-modellen trainen voor €0,89 per uur: wat dat betekent voor jouw bedrijf"
date: 2026-06-18T02:04:44.271Z
tags: ["ai-training", "lora", "kostenbesparing"]
categorieen: ["nieuws-tools"]
summary: "Train AI-modellen zonder dure hardware voor minder dan een euro per uur via RunPod."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van eigen AI-modellen wordt betaalbaar voor kleine bedrijven. Met een dienst als RunPod kun je voor €0,89 per uur een krachtige RTX5090 gebruiken om een LoRA-model te trainen, zonder dat je zelf dure hardware hoeft aan te schaffen. Dit opent de deur naar maatwerk-AI voor ondernemers die eerder werden afgeschrikt door de kosten.

## Wat er aan de hand is

De AI-toolkit van Ostris maakt het mogelijk om met een paar klikken een LoRA-model te trainen op basis van Z-Image Turbo. LoRA staat voor Low-Rank Adaptation, een techniek waarmee je een bestaand AI-model kunt finetunen op jouw eigen data. Denk aan het trainen van een model dat jouw producten, logo of specifieke stijl herkent en kan genereren.

Wat dit bijzonder maakt, is de combinatie met RunPod. Deze clouddienst verhuurt rekenkracht per uur, zonder dat je een abonnement hoeft af te sluiten. Voor €0,89 per uur huur je een RTX5090, een van de krachtigste consumenten-GPU's. Ter vergelijking: een eigen RTX4080 kost al snel €1.000 of meer, en heeft vaak te weinig geheugen voor dit soort taken. Volgens de tutorial van Weird Wonderful AI duurt een volledige training op de RTX5090 ongeveer 1 uur en 10 minuten. De totale kosten: ongeveer €1,04.

De toolkit is beschikbaar als Docker-image en staat als template in RunPod. Je hoeft alleen 'ostris' in te typen in de zoekbalk van RunPod om hem te vinden. Daarna upload je afbeeldingen, voeg je bijschriften toe en start je de training.

## Wat dit betekent

Voor ondernemers betekent dit dat de drempel om AI-modellen te trainen drastisch is verlaagd. Waar je eerder een investering van duizenden euro's in hardware moest doen, of een maandelijkse cloudrekening van honderden euro's, kun je nu voor een paar euro per training aan de slag.

Dit is vooral relevant voor bedrijven die visuele content maken: webshops, marketingbureaus, ontwerpstudio's, maar ook voor bedrijven die productcatalogi beheren of gepersonaliseerde afbeeldingen willen genereren. Denk aan een model dat jouw producten in verschillende settings kan plaatsen, of een model dat consistent jouw merkstijl aanhoudt.

Het betekent ook dat je niet langer afhankelijk bent van dure externe bureaus voor maatwerk-AI. Je kunt zelf experimenteren, testen en optimaliseren, zonder dat elke mislukte training je honderden euro's kost.

## Hoe je dit kunt toepassen

**Als je een webshop runt met honderden producten**, kun je overwegen om een LoRA-model te trainen op je productfoto's. Het model leert de specifieke vormen, kleuren en texturen van jouw assortiment. Vervolgens kun je met een prompt nieuwe afbeeldingen genereren waarin je producten in verschillende omgevingen staan, zonder dat je elke keer een fotoshoot hoeft te plannen. Een mogelijkheid is om te beginnen met een kleine set van 20 tot 30 afbeeldingen om te testen of de resultaten voldoen.

**Als je een marketingbureau bent dat consistentie in beeldtaal belangrijk vindt**, kun je een LoRA trainen op de visuele stijl van een klant. Denk aan een specifiek kleurenpalet, een bepaalde compositie of een terugkerend element zoals een logo of maskot. Je zou kunnen experimenteren met verschillende trainingsstappen, zoals de tutorial aangeeft met 8 versies, om te zien welke variant de beste balans geeft tussen herkenning en creativiteit.

**Als je in de mode- of interieurbranche werkt**, kun je een model trainen op jouw collectie. Het voordeel is dat je met één training een model krijgt dat jouw producten in allerlei contexten kan plaatsen: een stoel in een woonkamer, een jurk op een catwalk, of een lamp in een kantoor. Overweeg om de LoRA-sterkte tussen 0,8 en 0,95 te houden, zoals de tutorial aanbeveelt, om te voorkomen dat het model te veel afwijkt van de originele stijl.

**Als je een klein team hebt zonder technische AI-expert**, kun je beginnen met de ingebouwde templates in RunPod. Zoek naar 'ostris' in de templates, start een pod met de RTX5090, en volg de stappen in de toolkit. De standaardinstellingen werken vaak al goed, maar je kunt overwegen om de 'Low VRAM'-optie uit te zetten en de 'Cached Text Embedding' aan te zetten voor betere prestaties. De totale tijd is ongeveer een uur, dus je kunt dit doen tijdens een lunchpauze of aan het einde van de dag.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

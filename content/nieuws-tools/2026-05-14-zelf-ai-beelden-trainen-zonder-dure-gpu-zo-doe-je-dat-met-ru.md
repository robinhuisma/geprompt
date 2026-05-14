---
title: "Zelf AI-beelden trainen zonder dure GPU: zo doe je dat met RunPod"
date: 2026-05-14T10:06:03.659Z
tags: ["ai-beelden", "training", "runpod", "ostris"]
categorieen: ["nieuws-tools"]
summary: "Train een eigen AI-beeldmodel voor €0,89 per uur op een RTX5090 via RunPod, zonder lokale hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het antwoord: Je kunt nu zelf een AI-beeldmodel trainen voor €0,89 per uur, zonder dat je een dure videokaart in je eigen computer nodig hebt. Met de Ostris AI Toolkit op RunPod draai je een complete training op een RTX5090 in de cloud, inclusief het uploaden van je eigen afbeeldingen en het genereren van de uiteindelijke LoRA-bestanden.

## Wat er aan de hand is
De Ostris AI Toolkit is een complete applicatie waarmee je AI-beeldmodellen kunt trainen, zoals LoRA’s voor Z-Image Turbo. De maker heeft de toolkit verpakt als een Docker-image die direct beschikbaar is als template op RunPod, een clouddienst voor GPU-gebruik. Door een RTX5090 te huren voor $0,89 per uur (ongeveer €0,82) kun je een training voltooien in ongeveer 1 uur en 10 minuten. Dit is aanzienlijk goedkoper dan het aanschaffen van een eigen RTX5090, die duizenden euro’s kost, en het voorkomt dat je lokale hardware overbelast raakt. De auteur van de tutorial gebruikte eerder een RTX4080 lokaal, maar kampte met geheugenproblemen (Out of Memory). De cloudoplossing lost dat op.

## Wat dit betekent
Voor ondernemers die AI-beelden willen inzetten voor marketing, productvisualisatie of contentcreatie, opent dit de deur naar professionele modeltraining zonder forse investeringen. Waar je eerder een dure GPU moest kopen of een abonnement op een dure clouddienst moest afsluiten, kun je nu voor minder dan een euro per uur een eigen model trainen. Dit is vooral relevant voor kleine bedrijven die regelmatig unieke beelden nodig hebben, zoals webshops met eigen productlijnen of bureaus die visuele content op maat maken. De drempel om te experimenteren wordt lager: je kunt een training draaien, de resultaten testen en stoppen zonder langetermijnverplichtingen.

## Hoe je dit kunt toepassen
**Als je een webshop runt met eigen producten** kun je een LoRA trainen op basis van foto’s van je producten. Je uploadt bijvoorbeeld 20 tot 50 afbeeldingen van je meubelcollectie, voorziet ze van bijschriften (captions) en start de training. Binnen een uur heb je een model dat nieuwe varianten van je producten kan genereren, zoals een stoel in een andere kleur of setting. Dit bespaart tijd en kosten voor fotografie.

**Als je een marketingbureau bent dat visuele content maakt** kun je met de toolkit snel een stijlmodel trainen voor een specifieke campagne. Stel dat je een serie beelden nodig hebt in een herkenbare huisstijl. Je traint een LoRA op bestaande campagnematerialen en genereert vervolgens nieuwe beelden die consistent zijn met die stijl. De mogelijkheid om meerdere versies op te slaan (de tutorial bewaart 8 tussenversies) geeft je de flexibiliteit om de beste checkpoint te kiezen.

**Als je een contentcreator bent die regelmatig AI-beelden gebruikt** kun je de training plannen op momenten dat je computer niet nodig is. Je start een RunPod-sessie, laat de toolkit draaien terwijl je andere taken doet, en downloadt de resultaten. De kosten van €0,89 per uur zijn lager dan wat je betaalt voor een kop koffie, en je hebt geen last van lokale geheugenproblemen. Een optie is om de training ’s nachts te draaien en de volgende ochtend de checkpoints te testen in ComfyUI.

**Als je een team aanstuurt dat AI-tools gebruikt** kun je overwegen om een gedeelde RunPod-account in te richten. Medewerkers kunnen dan zelf trainingen starten zonder dat ze dure hardware nodig hebben. De Ostris Toolkit is via de template eenvoudig te vinden en te starten, waardoor de leercurve klein blijft. Je zou kunnen afspreken dat elk teamlid zijn eigen dataset voorbereidt en de training op vaste tijden inplant om kosten te spreiden.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

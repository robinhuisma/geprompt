---
title: "Eigen AI-beeldmodel trainen voor €0,80 per uur: zo doe je dat"
date: 2026-06-17T18:04:56.505Z
tags: ["ai-beeldmodellen", "lora-training", "cloud-computing", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Train een eigen AI-beeldmodel in de cloud voor minder dan een euro per uur, zonder dure hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel kost je vanaf ongeveer 89 dollarcent per uur, zonder dat je een dure videokaart in huis hoeft te halen. Door gebruik te maken van cloud-diensten zoals RunPod kun je met een paar klikken een krachtige RTX 5090 huren en binnen een uur je eigen LoRA-model trainen. Dit maakt AI-beeldgeneratie op maat bereikbaar voor ondernemers die geen duizenden euro’s willen investeren in hardware.

## Wat er aan de hand is

De AI-toolkit van ontwikkelaar Ostris is beschikbaar als een kant-en-klare Docker-container die je direct kunt draaien op cloudplatforms zoals RunPod. In een recente tutorial laat een gebruiker zien hoe je met deze toolkit een zogenaamde LoRA (Low-Rank Adaptation) traint voor het Z-Image Turbo model. Het bijzondere is de lage drempel: een RTX 5090 in de cloud kost slechts 0,89 dollar per uur, waardoor je voor minder dan een euro per uur een compleet model kunt trainen. De auteur geeft aan dat hij zijn eigen RTX 4080 thuis niet meer gebruikt voor dit werk vanwege geheugenproblemen. De training duurde in dit voorbeeld ongeveer 1 uur en 10 minuten, met 3000 stappen en 8 verschillende versies van het model als resultaat.

## Wat dit betekent

Voor ondernemers die AI-beelden willen inzetten voor productfoto’s, marketingmateriaal of visuele content, opent dit de deur naar maatwerk zonder grote investeringen. Waar je voorheen een videokaart van 2000 euro of meer nodig had, kun je nu voor een paar euro per trainingssessie een eigen model maken. Dit is vooral relevant voor kleine bedrijven die niet de capaciteit hebben om een eigen serverpark te beheren, maar wel behoefte hebben aan consistente, herkenbare beelden. Denk aan een webshop die producten in een eigen stijl wil laten zien, of een consultancy die unieke visuals voor presentaties wil genereren. De drempel om te experimenteren wordt hiermee aanzienlijk lager.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto’s wilt standaardiseren.** Je kunt een LoRA trainen op basis van 20 tot 50 bestaande productfoto’s. Het model leert dan de specifieke stijl, belichting en achtergrond van jouw producten. Vervolgens genereer je nieuwe productafbeeldingen in dezelfde stijl, zonder dat je elke keer een fotograaf hoeft in te huren. Overweeg om te starten met een kleine set afbeeldingen en de training op RunPod te draaien voor een paar euro. Je zou de resultaten kunnen testen in ComfyUI, een gratis tool voor AI-beeldgeneratie.

**Als je een marketingteam aanstuurt en snel visuele content nodig hebt.** Stel dat je een serie social media posts wilt maken met een consistente look-and-feel. Door een LoRA te trainen op eerdere campagnes of merkrichtlijnen, kun je in een uur tientallen varianten genereren die allemaal dezelfde stijl hebben. Een mogelijkheid is om de training in te plannen als een vast onderdeel van je contentproductie, bijvoorbeeld een keer per maand. De kosten blijven beperkt tot een paar dollar per sessie, wat het een stuk voordeliger maakt dan het inhuren van een grafisch ontwerper voor elke post.

**Als je in de creatieve sector werkt en experimenteert met AI.** Architecten, interieurontwerpers of modeontwerpers kunnen een LoRA trainen op hun eigen ontwerpen of moodboards. Het model leert dan de specifieke vormen, kleuren en texturen die jij gebruikt. Je zou kunnen overwegen om meerdere versies van het model te bewaren, zoals de tutorial aangeeft met 8 tussenversies, zodat je kunt kiezen welke het beste past bij een bepaald project. De cloud-aanpak bespaart je de hoofdpijn van lokale hardwareproblemen.

**Als je een klein bureau bent zonder IT-afdeling.** Het opzetten van een eigen AI-infrastructuur klinkt ingewikkeld, maar met de Docker-container van Ostris en een RunPod-account is het binnen een half uur geregeld. Je hoeft geen command-line-expert te zijn; de toolkit heeft een webinterface. Een praktische eerste stap is om een account aan te maken op RunPod, de template ‘ostris’ te zoeken en de pod te starten. Daarna upload je je afbeeldingen, voeg je bijschriften toe en start je de training. De tutorial raadt aan om hulp te zoeken bij het bijschrijven van afbeeldingen via bestaande ComfyUI-workflows, wat je online kunt vinden.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

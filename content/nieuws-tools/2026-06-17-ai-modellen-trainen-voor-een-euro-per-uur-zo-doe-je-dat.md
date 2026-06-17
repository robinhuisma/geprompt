---
title: "AI-modellen trainen voor een euro per uur: zo doe je dat"
date: 2026-06-17T06:05:12.948Z
tags: ["ai training", "cloud computing", "lora", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Train professionele AI-modellen zonder dure GPU, voor minder dan een euro per uur via clouddiensten."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Een eigen AI-model trainen is niet langer voorbehouden aan techbedrijven met dure hardware. Met clouddiensten zoals RunPod kun je voor minder dan een euro per uur een professionele AI-training draaien, zonder dat je een krachtige videokaart in huis hoeft te hebben.

## Wat er aan de hand is

De AI-toolkit van Ostris, een open-source toolset voor het trainen van AI-modellen, is nu beschikbaar als een kant-en-klare Docker-container op het cloudplatform RunPod. Dat betekent dat je geen lokale GPU meer nodig hebt om zelf AI-modellen te trainen. Een voorbeeld: het trainen van een zogenaamde LoRA (een klein, aanpasbaar AI-model) op een RTX5090 GPU in de cloud kost slechts $0,89 per uur. De training duurde in een testcase ongeveer 1 uur en 10 minuten, wat neerkomt op een totale kostprijs van ongeveer een euro. De maker van de toolkit benadrukt dat dit een fractie is van wat het kost om lokaal te trainen, waar een RTX4080 vaak vastloopt op geheugenproblemen.

## Wat dit betekent

Voor ondernemers en professionals betekent dit dat de drempel om eigen AI-modellen te trainen drastisch is verlaagd. Waar je voorheen een investering van duizenden euro’s in een krachtige GPU moest doen, of afhankelijk was van dure abonnementen op AI-platforms, kun je nu voor een paar euro per trainingssessie aan de slag. Dit opent de deur voor kleine bedrijven die bijvoorbeeld eigen productafbeeldingen willen genereren in een consistente stijl, of die een AI willen trainen op hun eigen data zonder dat die data het bedrijf verlaat. De technologie is vooral relevant voor sectoren als e-commerce, marketing, productontwerp en grafische vormgeving, waar visuele content centraal staat.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productafbeeldingen in een consistente stijl wilt genereren**, dan kun je met deze methode een LoRA trainen op basis van je eigen productfoto's. Je uploadt een set van 10 tot 20 afbeeldingen naar de toolkit, voorziet ze van bijschriften (captions), en start de training. Binnen een uur heb je een model dat nieuwe productafbeeldingen kan genereren in exact dezelfde stijl en setting. Een mogelijkheid is om dit te combineren met een gratis tool zoals ComfyUI om de resultaten te testen en te verfijnen.

**Als je een team aanstuurt dat visuele content maakt voor social media**, overweeg dan om een gedeelde cloud-omgeving in te richten. Je kunt één RunPod-account gebruiken waar teamleden om de beurt trainingen draaien. Omdat de kosten per uur zo laag zijn, kun je experimenteren met verschillende stijlen en datasets zonder dat het budget oploopt. Een optie is om een standaardset instellingen te documenteren, zoals het uitschakelen van 'Low VRAM' en het inschakelen van 'Cached Text Embedding', zodat iedereen dezelfde kwaliteit krijgt.

**Als je in de creatieve sector werkt en unieke visuele stijlen wilt ontwikkelen voor klanten**, dan biedt deze aanpak een manier om snel te prototypen. Je zou voor elke klant een aparte LoRA kunnen trainen op basis van hun merkrichtlijnen en bestaand beeldmateriaal. De trainingstijd van ongeveer een uur betekent dat je binnen een dag meerdere stijlen kunt testen. Een suggestie is om de training zo in te stellen dat er 8 tussenversies worden opgeslagen, zodat je de beste stap kunt selecteren voor het eindresultaat.

**Als je een kleine ondernemer bent zonder technische achtergrond**, begin dan met de eenvoudigste route: zoek in de RunPod-templates op 'ostris', start een instantie met een RTX5090, en volg de standaardinstellingen. De toolkit heeft een duidelijke interface met tabs voor datasets en jobs. Je hoeft alleen je afbeeldingen te uploaden, een beschrijving toe te voegen, en op start te klikken. Het resultaat download je direct naar je computer en je kunt het meteen gebruiken in programma's zoals ComfyUI.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

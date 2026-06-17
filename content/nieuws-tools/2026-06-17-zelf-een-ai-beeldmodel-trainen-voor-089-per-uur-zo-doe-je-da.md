---
title: "Zelf een AI-beeldmodel trainen voor €0,89 per uur: zo doe je dat"
date: 2026-06-17T02:05:38.359Z
tags: ["ai-training", "beeldgeneratie", "cloud-gpu", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Train een eigen AI-beeldmodel met een cloud-GPU van €0,89 per uur, zonder dure hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het antwoord: Je kunt nu zelf een AI-beeldmodel trainen voor €0,89 per uur, zonder dat je dure hardware in huis hoeft te halen. Met de AI Toolkit van Ostris en een cloud-GPU op RunPod train je in iets meer dan een uur een eigen LoRA-model voor Z-Image Turbo.

## Wat er aan de hand is

De AI Toolkit van Ostris is een open-source toolset waarmee je AI-beeldmodellen kunt trainen. Normaal gesproken heb je daar een krachtige videokaart voor nodig, zoals een RTX 4080 of 4090, die al snel duizenden euro’s kost. Maar Ostris heeft de toolkit ook als Docker-image uitgebracht, die direct beschikbaar is als template op het cloudplatform RunPod. Daar huur je een RTX 5090 GPU voor $0,89 per uur. Volgens de maker van de tutorial, Weird Wonderful AI, is dat ‘belachelijk goedkoop’ vergeleken met lokaal trainen, waarbij je geheugenproblemen kunt krijgen. De training duurde met deze setup ongeveer 1 uur en 10 minuten voor 3000 stappen. Het resultaat: acht verschillende versies van het model die je direct kunt gebruiken in ComfyUI.

## Wat dit betekent

Voor ondernemers en professionals die AI-beeldgeneratie willen inzetten, opent dit de deur naar maatwerk zonder grote investeringen. Denk aan het trainen van een model dat jouw producten, logo’s of specifieke stijl herkent en reproduceert. Waar je eerder een eigen server of een dure videokaart nodig had, kun je nu per uur betalen. De drempel om te experimenteren wordt daarmee veel lager. Het is ook een signaal dat AI-training steeds meer een ‘pay-as-you-go’ dienst wordt, vergelijkbaar met cloudopslag of rekenkracht. Voor kleine bedrijven die geen IT-afdeling hebben, is dit een kans om zelf aan de slag te gaan.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productafbeeldingen wilt genereren in een consistente stijl.** Je zou een LoRA-model kunnen trainen op foto’s van je producten. Met de cloud-GPU van €0,89 per uur kun je in een middag een model maken dat jouw producten in verschillende achtergronden of settings plaatst. Overweeg om een dataset van 20 tot 50 productfoto’s te maken, deze te voorzien van bijschriften en de training te starten. Het kost je minder dan een kop koffie per trainingssessie.

**Als je een marketingteam aanstuurt en unieke visuele content wilt maken.** Een mogelijkheid is om een model te trainen op jullie merkstijl: kleuren, typografie, compositie. Zo kun je snel variaties genereren voor social media, nieuwsbrieven of advertenties, zonder dat elke afbeelding handmatig bewerkt hoeft te worden. Het model onthoudt de stijl, jij bepaalt de inhoud.

**Als je in de creatieve sector werkt en experimentele beelden wilt maken.** Je zou kunnen spelen met het trainen van een model op een specifieke kunststijl of thema. De lage kosten maken het mogelijk om meerdere versies te proberen en de beste te selecteren. De tutorial raadt aan om acht verschillende checkpoint-versies op te slaan, zodat je kunt testen welke stapgrootte het beste werkt voor jouw doel.

**Als je een klein bureau bent dat AI wil inzetten zonder IT-kennis.** Het mooie is dat je geen lokale software hoeft te installeren. Je start een virtuele machine in de cloud, laadt de toolkit, uploadt je afbeeldingen en start de training. De handleiding is stap voor stap: zoek op RunPod naar de template ‘ostris’, start de pod, open de toolkit, maak een dataset aan, upload en beschrijf je afbeeldingen, en start een nieuwe job met de aanbevolen instellingen. Het enige wat je nodig hebt, is een creditcard en een uurtje geduld.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

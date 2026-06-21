---
title: "Train je eigen AI-beeldmodel voor €0,89 per uur: zo doe je dat"
date: 2026-06-21T02:05:25.385Z
tags: ["ai-beeldmodellen", "lora-training", "cloud-gpu", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Met Ostris AI Toolkit en cloud-GPU’s train je in een uur een eigen beeldmodel voor een fractie van de kosten."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het antwoord: Met de Ostris AI Toolkit en een cloud-GPU van RunPod kun je voor €0,89 per uur een eigen AI-beeldmodel trainen, zonder dat je een dure videokaart in huis hoeft te hebben. Binnen ongeveer een uur heb je een getraind LoRA-model dat je direct kunt gebruiken in tools zoals ComfyUI.

Wat er aan de hand is
AI-trainer Ostris heeft zijn AI Toolkit uitgebracht als een Docker-image, die beschikbaar is als template op cloud-platform RunPod. Dit betekent dat je geen lokale GPU meer nodig hebt om eigen beeldmodellen te trainen. De auteur van het artikel gebruikte een RTX5090 in de cloud voor $0,89 per uur en had het model in 1 uur en 10 minuten getraind. Het alternatief – een lokale RTX4080 – leidde tot geheugenproblemen (Out of Memory). De toolkit ondersteunt nu ook Z-Image Turbo, een nieuw type model dat sneller en efficiënter is dan eerdere varianten.

Wat dit betekent
Voor ondernemers die AI-beeldmodellen willen inzetten voor productfoto’s, marketingmateriaal of gepersonaliseerde visuals, wordt de drempel een stuk lager. Je hoeft geen duizenden euro’s te investeren in een krachtige lokale GPU. Met een uurtarief van minder dan een euro kun je experimenteren en testen. De keuze tussen lokaal en cloud hangt af van je hardware: als je een GPU met minder dan 24GB VRAM hebt, kun je beter de cloud gebruiken. De instellingen in de toolkit zijn grotendeels standaard, met een paar aanpassingen voor betere prestaties.

Hoe je dit kunt toepassen
**Als je een webshop runt en gepersonaliseerde productfoto’s wilt maken.** Je kunt een LoRA-model trainen op basis van je eigen producten. Verzamel 20 tot 30 foto’s van je product vanuit verschillende hoeken, upload ze naar de toolkit, en laat het model leren hoe jouw product eruitziet. Daarna kun je met prompts nieuwe achtergronden, belichtingen of composities genereren. Dit bespaart tijd en geld voor een fotograaf.

**Als je een marketingteam aanstuurt en snel visuele content nodig hebt.** Overweeg om een model te trainen op je merkstijl, zoals kleuren, logo’s en typische composities. Je kunt dan in minuten nieuwe afbeeldingen genereren die consistent zijn met je huisstijl. De cloud-optie is ideaal omdat je niet afhankelijk bent van één werkstation; je team kan tegelijkertijd verschillende modellen testen.

**Als je in de creatieve sector werkt en variaties op een thema wilt maken.** Denk aan het genereren van meerdere versies van een illustratie of ontwerp. Door een LoRA te trainen op een specifieke stijl of onderwerp, kun je snel een reeks afbeeldingen produceren zonder dat je elke keer handmatig hoeft te tekenen. De instelling ‘Save Max Step saves to 8’ geeft je meerdere checkpoint-versies om uit te kiezen.

**Als je een klein budget hebt en wilt beginnen met AI-training.** De cloud-oplossing is laagdrempelig: je hebt alleen een account op RunPod nodig, zoekt naar de Ostris-template, en start een pod. De kosten zijn per minuut, dus je kunt stoppen zodra de training klaar is. Een optie is om eerst een kleinere dataset te gebruiken om te testen of het werkt, voordat je een volledige training start.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

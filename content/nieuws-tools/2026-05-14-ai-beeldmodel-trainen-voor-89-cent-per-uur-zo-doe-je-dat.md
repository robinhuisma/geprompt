---
title: "AI-beeldmodel trainen voor 89 cent per uur: zo doe je dat"
date: 2026-05-14T06:06:40.904Z
tags: ["ai-toolkit", "beeldmodellen", "cloud-training", "kostenbesparing"]
categorieen: ["nieuws-tools"]
summary: "Train je eigen AI-beeldmodel in de cloud voor minder dan een euro per uur, zonder dure hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Je kunt een eigen AI-beeldmodel trainen voor minder dan een euro per uur, zonder dat je een dure videokaart in huis hoeft te halen. Door gebruik te maken van cloud-diensten zoals RunPod huur je een krachtige GPU voor 89 dollarcent per uur en draai je het volledige trainingsproces in ongeveer een uur.

## Wat er aan de hand is

De AI Toolkit van Ostris maakt het mogelijk om zelf een zogeheten LoRA (Low-Rank Adaptation) te trainen voor beeldmodellen. Normaal gesproken heb je daar een krachtige videokaart voor nodig, zoals een RTX 4080 of 4090, die al snel duizend euro of meer kost. Ostris heeft zijn toolkit als Docker-image beschikbaar gemaakt, en die staat als template klaar in de clouddienst RunPod. Je kunt er een RTX 5090 voor 0,89 dollar per uur huren. De auteur van het artikel op Weird Wonderful AI trainde er een model voor zijn eigen dataset in 1 uur en 10 minuten, met 3000 stappen en 8 verschillende versies als resultaat.

## Wat dit betekent

Voor ondernemers en professionals die AI-beeldmodellen willen inzetten, bijvoorbeeld voor productvisualisaties, marketingmateriaal of gepersonaliseerde content, vervalt de drempel van dure hardware. Je hebt geen investering van duizenden euro’s meer nodig om een eigen model te trainen. De kosten per training zijn lager dan een kop koffie per uur, en je betaalt alleen voor de rekentijd die je daadwerkelijk gebruikt. Dit maakt het haalbaar voor kleine bedrijven en zzp’ers om te experimenteren met eigen beeldmodellen zonder groot financieel risico.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto’s wilt genereren in verschillende stijlen.** Je zou een dataset kunnen maken van je eigen producten, bijvoorbeeld 20 tot 50 foto’s, en die uploaden naar de AI Toolkit in de cloud. Na de training van ongeveer een uur heb je een LoRA die je producten in elke gewenste context kan plaatsen: op een witte achtergrond, in een interieur, of in een specifieke kleurstelling. Een optie is om meerdere versies te bewaren, zoals de auteur deed met 8 checkpoints, zodat je kunt testen welke stapgrootte het beste werkt voor jouw producten.

**Als je een team aanstuurt en meerdere ontwerpers laat werken aan visuele content.** Overweeg om een gedeelde cloudomgeving in te richten waar teamleden datasets kunnen uploaden en trainingen kunnen starten zonder dat iedereen een eigen dure GPU nodig heeft. Je kunt de getrainde LoRA’s eenvoudig downloaden en in tools zoals ComfyUI plaatsen, zodat ontwerpers ze direct kunnen gebruiken voor het genereren van beelden. Dit bespaart niet alleen hardwarekosten, maar ook tijd doordat trainingen parallel kunnen draaien.

**Als je in de creatieve sector werkt en snel verschillende stijlen wilt uitproberen voor een campagne.** Een mogelijkheid is om per campagne een aparte LoRA te trainen op basis van een kleine set referentiebeelden. Omdat de kosten per training laag zijn, kun je meerdere varianten maken en de beste selecteren. Je zou bijvoorbeeld kunnen experimenteren met verschillende captions (beschrijvingen) bij je afbeeldingen om te zien welke het beste resultaat geven. De auteur raadt aan om aparte caption-workflows te gebruiken, die je kunt vinden in zijn ComfyUI-repository.

**Als je een klein budget hebt en wilt starten met AI-beeldgeneratie zonder dure aankopen.** Begin met een gratis account bij RunPod en huur een RTX 5090 voor een uurtje. Volg de stappen: zoek in de templates op ‘ostris’, start de pod, maak een dataset aan, upload je afbeeldingen, voeg captions toe, en start de training. De standaardinstellingen werken goed, maar als je meer dan 24GB VRAM hebt, kun je de Low VRAM-optie uitzetten en de Quantization Transformer op None zetten. Na een uur download je de getrainde modellen en kun je ze direct gebruiken.

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

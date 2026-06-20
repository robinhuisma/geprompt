---
title: "AI-beelden trainen voor een tientje per uur: zo doe je dat"
date: 2026-06-20T10:07:14.370Z
tags: ["ai-beelden", "training", "kostenbesparing"]
categorieen: ["nieuws-tools"]
summary: "Train zelf AI-modellen met RunPod en Ostris Toolkit voor minder dan een euro per uur."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het antwoord: Je kunt nu zelf AI-beeldmodellen trainen voor minder dan een euro per uur, zonder dat je een dure videokaart in huis hoeft te hebben. Met de Ostris AI Toolkit op RunPod huur je een RTX 5090 voor 89 cent per uur en train je in ruim een uur een eigen LoRA-model.

## Wat er aan de hand is

De Ostris AI Toolkit is een gratis, open-source tool waarmee je zelf AI-beeldmodellen traint, zoals LoRA’s voor Z-Image Turbo of Flux. Normaal gesproken heb je daar een krachtige videokaart voor nodig, zoals een RTX 4080 of 4090, die al snel duizenden euro’s kost en vaak te weinig VRAM heeft voor grotere modellen. De maker van de toolkit heeft de hele applicatie verpakt in een Docker-container, die als template beschikbaar is op RunPod. RunPod is een clouddienst waar je per uur betaalt voor GPU-rekenkracht. Een RTX 5090 kost daar 89 cent per uur. De auteur van het artikel trainde in 1 uur en 10 minuten een LoRA op 3000 stappen, met 8 tussenversies om uit te kiezen. De resultaten waren goed bij een LoRA-sterkte van 0,8 tot 0,95.

## Wat dit betekent

Voor ondernemers die AI-beelden willen gebruiken voor marketing, productvisualisatie of contentcreatie, opent dit de deur naar maatwerk zonder dure hardware. Waar je eerder een videokaart van 1500 euro of meer nodig had, of een dure cloudabonnement met vaste kosten, betaal je nu per training. Een training kost minder dan een euro. Dat is interessant voor bijvoorbeeld een webshop die productfoto’s wil genereren in een eigen stijl, of een bureau dat consistent beeldmateriaal wil maken voor een campagne. De drempel om te experimenteren wordt veel lager: je kunt voor een paar euro meerdere varianten trainen en de beste kiezen. Ook het delen van modellen wordt eenvoudiger: je downloadt de checkpoint-bestanden en plaatst ze in de models\loras-map van ComfyUI, een populaire AI-beeldtool.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto’s wilt genereren in een eigen stijl.** Je zou een dataset kunnen maken van 20 tot 50 bestaande productfoto’s, deze uploaden in de Ostris Toolkit, en ze voorzien van bijschriften. Met de standaardinstellingen en een RTX 5090 op RunPod train je in ongeveer een uur een LoRA die jouw productstijl leert. Daarna kun je in ComfyUI nieuwe productafbeeldingen genereren met die stijl, bijvoorbeeld voor social media of catalogi. Overweeg om de instelling ‘Save Max Step saves’ op 8 te zetten, zodat je meerdere versies hebt om te testen.

**Als je een marketingbureau bent en consistente beelden wilt voor een campagne.** Je kunt een LoRA trainen op een reeks bestaande campagnebeelden, zodat alle nieuwe gegenereerde beelden dezelfde look krijgen. De Ostris Toolkit werkt met Z-Image Turbo, een snel model dat geschikt is voor real-time toepassingen. Een optie is om de training te starten op RunPod, de checkpoints te downloaden en ze te delen met je team via een gedeelde map in ComfyUI. Zo kan iedereen dezelfde stijl gebruiken zonder dat elke medewerker een dure GPU nodig heeft.

**Als je in de creatieve sector werkt en snel prototypes wilt maken.** Stel dat je een serie illustraties of concepten nodig hebt voor een pitch. Je kunt een kleine dataset van referentiebeelden uploaden, de training starten en binnen een uur de resultaten bekijken. De auteur van het artikel adviseert om de LoRA-sterkte tussen 0,8 en 0,95 te houden voor goede resultaten. Een mogelijkheid is om meerdere trainingen te doen met verschillende datasets, zodat je per onderwerp een aparte LoRA hebt. De totale kosten blijven laag: een paar euro per training.

**Als je een klein team hebt zonder eigen GPU’s.** Je kunt de Ostris Toolkit gebruiken zonder dat iemand een krachtige computer nodig heeft. Alles draait in de cloud. Zoek in RunPod naar de template ‘ostris’, start een pod met een RTX 5090, en je team kan via een browser de toolkit bedienen. De praktische toepassing hangt af van jouw situatie, maar de drempel is laag: je hebt alleen een RunPod-account nodig en een setje afbeeldingen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

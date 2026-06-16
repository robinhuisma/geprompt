---
title: "Oude bedrijfsfoto’s herstellen met AI: zo pak je het aan"
date: 2026-06-16T22:11:26.288Z
tags: ["fotorestauratie", "qwen", "comfyui", "mkb"]
categorieen: ["creatief"]
summary: "Herstel en kleur oude archiefbeelden met Qwen Image Edit, lokaal en zonder dure abonnementen."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Het antwoord: Met Qwen Image Edit kun je oude, beschadigde bedrijfsfoto’s in enkele seconden tot een paar minuten herstellen en inkleuren, zonder dat je een dure clouddienst nodig hebt. Je installeert het model lokaal op je eigen computer via ComfyUI, waarna je met één prompt vlekken, krassen, scheuren en verkleuringen verwijdert en het beeld weer scherp maakt.

## Wat er aan de hand is

De AI-modellen Qwen Image Edit en de nieuwere Qwen Image Edit 2509 zijn krachtige tools voor fotobewerking die je lokaal kunt draaien. Volgens de ontwikkelaars zijn ze bijzonder geschikt voor het restaureren en inkleuren van oude foto’s die de tand des tijds niet hebben doorstaan. De resultaten zijn volgens de bron ‘verbluffend’ en het proces is eenvoudig: je beschrijft in een prompt wat de AI moet doen, zoals vlekken verwijderen, scheuren opvullen en kleur toevoegen. De modellen zijn gratis te downloaden en werken met ComfyUI, een populaire interface voor AI-beeldbewerking. Dit maakt geavanceerde fotorestauratie toegankelijk voor wie geen dure software of cloudabonnementen wil aanschaffen.

## Wat dit betekent

Voor ondernemers met een archief aan oude bedrijfsfoto’s, zoals historische productfoto’s, teamfoto’s of beelden van het pand door de jaren heen, opent dit nieuwe mogelijkheden. Waar je eerder een dure fotograaf of specialist moest inschakelen, kun je nu zelf aan de slag. De enige vereiste is een computer met voldoende rekenkracht: de kleinste versie van het model vraagt 20,4 GB VRAM, de volledige versie 40,9 GB. Dat betekent dat je een krachtige videokaart nodig hebt, maar geen maandelijkse kosten voor clouddiensten. Voor bedrijven die hun visuele geschiedenis willen digitaliseren en verbeteren, is dit een kostenefficiënt alternatief.

## Hoe je dit kunt toepassen

**Als je een familiebedrijf runt met een archief aan oude foto’s.** Denk aan beelden van het eerste pand, oprichters of historische producten. Je kunt deze foto’s restaureren en inkleuren voor gebruik in jubileumboeken, op de website of in presentaties. Installeer ComfyUI en de Qwen-modellen zoals beschreven, en gebruik de prompt uit de bron: ‘restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections’. Het proces duurt enkele seconden tot een paar minuten per foto, afhankelijk van je hardware.

**Als je een marketingafdeling hebt die historisch beeldmateriaal wil inzetten.** Oude zwart-witfoto’s van producten of evenementen kun je laten inkleuren om ze aantrekkelijker te maken voor social media of nieuwsbrieven. Wil je de zwart-witlook behouden, dan pas je de prompt aan door ‘colorize’ weg te laten. Een optie is om een serie foto’s te restaureren en er een ‘toen en nu’-campagne mee te maken, wat vaak goed scoort bij klanten.

**Als je in de vastgoedsector werkt en oude pandfoto’s wilt herstellen.** Oude opnames van gebouwen of interieurs kunnen vlekken, scheuren of krassen vertonen. Met Qwen Image Edit kun je deze beelden herstellen voor gebruik in verkoopbrochures of historische overzichten. Je zou kunnen beginnen met een testfoto om te zien hoe het model presteert met jouw type beeldmateriaal. De installatie vereist dat je de modellen downloadt en in de juiste mappen plaatst, zoals beschreven in de bron: de diffusion model in `ComfyUI/models/diffusion_models/`, de VAE in `models/vae/` en de text encoder in `models/text_encoders/`.

**Als je een museum, archief of culturele instelling beheert.** Grote collecties oude foto’s kun je in batches restaureren, al vraagt dat om een gestroomlijnde workflow. Overweeg om eerst een paar representatieve foto’s te testen met de standaardprompt. De bron vermeldt dat de workflow gebaseerd is op de standaard Flux Kontext Dev-workflow van ComfyUI, die je in de templates vindt. Dit maakt het eenvoudig om te starten zonder dat je zelf een complexe workflow hoeft op te bouwen.

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

---
title: "Oude bedrijfsfoto’s herstellen met AI: een praktisch stappenplan"
date: 2026-06-15T14:10:17.001Z
tags: ["fotorestauratie", "qwen", "ai-gids", "ondernemers"]
categorieen: ["creatief"]
summary: "Herstel en kleur oude foto’s in minuten met Qwen Image Edit, zonder dure software."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Oude bedrijfsfoto’s, klantbeelden of archiefmateriaal herstellen hoeft geen uren werk meer te kosten. Met het opensource-model Qwen Image Edit kun je beschadigde, verkleurde of gescheurde foto’s in enkele seconden tot een paar minuten laten restaureren en eventueel inkleuren. Het enige wat je nodig hebt is een computer met voldoende rekenkracht en een gratis tool als ComfyUI.

## Wat er aan de hand is
De AI-ontwikkelaar Qwen heeft twee versies uitgebracht van zijn beeldbewerkingsmodel: Qwen Image Edit en de nieuwere Qwen Image Edit 2509. Beide modellen zijn specifiek getraind om oude foto’s te herstellen. Ze kunnen vlekken, stof, ruis, krassen en scheuren verwijderen, gaten opvullen en zwart-witfoto’s inkleuren. Volgens de makers werkt het model met een simpele tekstprompt. De resultaten worden door een apart model, Flux Kontext, verder verfijnd tot een hoge kwaliteit. De modellen zijn gratis te downloaden en lokaal te draaien via ComfyUI, een populaire interface voor AI-beeldbewerking. Dit maakt professionele fotorestauratie toegankelijk voor iedereen met een redelijke GPU.

## Wat dit betekent
Voor ondernemers betekent dit dat je oude bedrijfsfoto’s, historische klantbeelden of archiefmateriaal zelf kunt opknappen zonder een dure fotograaf of restauratiespecialist in te huren. Denk aan foto’s van het pand van vroeger, portretten van oprichters, of oude productafbeeldingen die je voor marketing of presentaties wilt gebruiken. Waar restauratie voorheen uren handwerk kostte, kun je nu met een prompt en een paar minuten wachttijd een resultaat krijgen dat vaak niet onderdoet voor professioneel werk. Het model draait lokaal, dus je hoeft geen beelden naar een externe server te sturen – dat is prettig voor privacygevoelig materiaal. De drempel is de technische installatie: je hebt ComfyUI nodig en de juiste modelbestanden, plus een videokaart met minimaal 8 GB VRAM voor de lichtere FP8-versie.

## Hoe je dit kunt toepassen
**Als je een bedrijfsarchief hebt met oude foto’s van het pand of de oprichters.** Je zou kunnen beginnen met het downloaden van ComfyUI en de Qwen Image Edit FP8-model (20,4 GB). Installeer de modellen in de juiste mappen: het diffusiemodel in `ComfyUI/models/diffusion_models`, de VAE in `ComfyUI/models/vae` en de tekstencoder in `ComfyUI/models/text_encoders`. Gebruik vervolgens het Flux Kontext Dev-werkblad dat standaard in ComfyUI zit. Laad een oude foto in, plak de prompt ‘restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph’ en start de verwerking. Binnen een paar minuten heb je een herstelde, ingekleurde versie.

**Als je klantbeelden of historische productfoto’s wilt gebruiken in marketingmateriaal.** Een mogelijkheid is om eerst een paar testfoto’s te proberen met de zwart-witvariant van de prompt. Voeg simpelweg ‘black and white’ toe aan het begin en verwijder ‘colorize’. Zo behoud je de originele uitstraling maar haal je wel krassen en vlekken weg. Dit werkt goed voor vintage producten of oude reclame-uitingen die je in een nieuw jasje wilt steken. Overweeg om de herstelde foto’s te vergelijken met de originelen en handmatig kleine details bij te werken in een programma als GIMP of Photoshop.

**Als je een team aanstuurt dat regelmatig met beeldmateriaal werkt.** Je zou kunnen overwegen om een vaste werkplek in te richten met een computer die de modellen kan draaien. De FP8-versie vraagt 20,4 GB VRAM, wat haalbaar is met een middenklasse GPU zoals een NVIDIA RTX 3060 of hoger. Laat een teamlid de installatie eenmalig doen en maak een korte handleiding met de stappen. Zo kan iedereen in het team snel oude foto’s herstellen zonder technische kennis. De tijdsbesparing is aanzienlijk: waar een handmatige restauratie een uur kost, doet de AI het in enkele minuten.

**Als je in de creatieve sector werkt en oude beelden wilt hergebruiken.** Een optie is om de prompt aan te passen aan specifieke schades. Bijvoorbeeld: als een foto gescheurd is, voeg dan ‘repair gaps and fold or bends’ toe. Als er veel stof of ruis zit, benadruk ‘remove dust spots and noise’. Het model reageert goed op specifieke instructies. Experimenteer met de volgorde van de prompt – de makers adviseren om de belangrijkste actie eerst te zetten. Je kunt ook meerdere versies van dezelfde foto maken met verschillende prompts en de beste kiezen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

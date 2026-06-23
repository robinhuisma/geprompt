---
title: "Oude bedrijfsfoto’s herstellen met AI: een stappenplan voor MKB’ers"
date: 2026-06-23T14:11:40.316Z
tags: ["fotorestauratie", "ai-gereedschap", "qwen", "mkb"]
categorieen: ["creatief"]
summary: "Restaureer en kleur oude foto’s zelf met Qwen Image Edit, zonder dure software of externe specialisten."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Het antwoord: Met Qwen Image Edit kun je als ondernemer zelf oude bedrijfsfoto’s of klantfoto’s restaureren en inkleuren, zonder dat je een fotograaf of dure software nodig hebt. Het proces kost per foto enkele seconden tot een paar minuten, afhankelijk van de staat van de foto en de kracht van je computer.

Wat er aan de hand is
Qwen Image Edit is een AI-model dat speciaal is ontworpen voor beeldbewerking via eenvoudige tekstinstructies. De maker van het model, het Chinese bedrijf Alibaba Cloud, heeft twee versies uitgebracht: de standaard Qwen Image Edit en de nieuwere Qwen Image Edit 2509. Beide modellen kunnen vlekken, scheuren, krassen en verkleuring uit oude foto’s verwijderen, gaten opvullen en zwart-witfoto’s inkleuren. Het model draait lokaal op je eigen computer via ComfyUI, een gratis en open-source tool voor AI-beeldbewerking. Dit betekent dat je geen internetverbinding nodig hebt en dat je data op je eigen systeem blijft, wat privacygevoelig materiaal beschermt.

Wat dit betekent
Voor MKB’ers opent dit de deur naar professionele fotorestauratie zonder externe kosten. Denk aan het herstellen van historische bedrijfsfoto’s, oude klantportretten of archiefbeelden die je in marketingmateriaal wilt gebruiken. Waar je eerder een specialist moest inhuren voor tientallen tot honderden euro’s per foto, kun je dit nu zelf doen met een investering in tijd en een geschikte computer. Het model vereist wel een krachtige videokaart: de lichtere FP8-versie vraagt 20,4 GB VRAM, de volledige versie 40,9 GB. Dat is fors, maar voor wie al een moderne gaming-pc of werkstation heeft, is het haalbaar. De tijdsinvestering per foto is laag: na het opzetten van de software duurt het herstel seconden tot een paar minuten.

Hoe je dit kunt toepassen
**Als je een bedrijf runt met een historisch archief van productfoto’s of bedrijfsbeelden.** Je kunt oude zwart-witfoto’s van je pand, producten of oprichters herstellen en inkleuren voor gebruik op je website, in brochures of op sociale media. Begin met het installeren van ComfyUI op je computer. Download vervolgens de Qwen Image Edit FP8-model (20,4 GB) en de bijbehorende VAE en tekstencoder. Plaats de bestanden in de juiste mappen: `diffusion_models`, `vae` en `text_encoders` onder de `models`-map van ComfyUI. Start ComfyUI opnieuw als het al draaide. Gebruik het standaard Flux Kontext Dev-workflow dat in ComfyUI zit. Laad een oude foto in en typ een prompt zoals: “restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph, reversal film photography, remove stains and crease marks, repair gaps and fold or bends.” Het model zal de foto in enkele seconden tot een paar minuten herstellen.

**Als je een fotostudio of drukkerij hebt en klanten oude foto’s wilt laten restaureren.** Je kunt dit als extra dienst aanbieden zonder dat je een dure specialist hoeft in te huren. Het enige wat je nodig hebt is een computer met voldoende VRAM en de gratis software. Je zou een eenvoudig stappenplan voor klanten kunnen maken: zij sturen een scan van de oude foto, jij voert de prompt in en levert het resultaat binnen een dag. De kosten zijn alleen je tijd en stroomverbruik. Overweeg om een paar testfoto’s te doen om te zien hoe lang het duurt op jouw systeem, zodat je een realistische prijs kunt bepalen.

**Als je in de erfgoedsector werkt, bijvoorbeeld bij een museum of archief.** Je kunt grote aantallen oude foto’s in batch verwerken door meerdere prompts te automatiseren. Hoewel het artikel geen batchverwerking beschrijft, kun je met ComfyUI workflows herhalen en aanpassen. Begin met een paar representatieve foto’s om de prompt te finetunen. Als je de zwart-witlook wilt behouden, pas de prompt aan door “colorize” te verwijderen en “black and white” toe te voegen. Dit bespaart tijd en zorgt voor consistente resultaten. De praktische toepassing hangt af van jouw situatie, maar de drempel is laag: het model is gratis en de software is open-source.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

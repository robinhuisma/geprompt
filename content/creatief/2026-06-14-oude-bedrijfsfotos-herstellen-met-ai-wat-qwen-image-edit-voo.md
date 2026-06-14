---
title: "Oude bedrijfsfoto’s herstellen met AI: wat Qwen Image Edit voor jouw merk kan doen"
date: 2026-06-14T18:11:09.656Z
tags: ["fotorestauratie", "qwen", "ai-tools", "mkb"]
categorieen: ["creatief"]
summary: "Restaureer beschadigde foto’s in seconden met Qwen Image Edit, zonder dure software of kennis."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Het antwoord: Met Qwen Image Edit kun je oude, beschadigde bedrijfsfoto’s in seconden tot een paar minuten herstellen en inkleuren, zonder dat je ervaring met fotobewerking nodig hebt. Dit open-source AI-model draait lokaal op je eigen computer en werkt met een simpele tekstinstructie.

Wat er aan de hand is
Het AI-model Qwen Image Edit, ontwikkeld door Alibaba’s Qwen-team, is een veelzijdige tool voor fotobewerking die via tekstprompts werkt. In een recente demonstratie op Weird Wonderful AI werd getoond hoe het model oude, verweerde foto’s kan restaureren: vlekken, krassen, scheuren en stof verwijderen, gaten opvullen en zwart-witfoto’s inkleuren. Het model is gratis te downloaden en draait lokaal in ComfyUI, een populaire interface voor AI-modellen. De maker van de demonstratie gebruikte een specifieke prompt die in de meeste gevallen werkt, en de resultaten waren volgens hem ‘verbluffend’. Het model is beschikbaar in een lichtere FP8-versie (20,4 GB) voor computers met minder VRAM, en een volledige BF16-versie (40,9 GB).

Wat dit betekent
Voor ondernemers met een MKB-bedrijf opent dit nieuwe mogelijkheden om historisch beeldmateriaal nieuw leven in te blazen. Denk aan oude productfoto’s, archiefbeelden van het bedrijfspand, of klantmateriaal dat beschadigd is geraakt. Waar je voorheen een dure fotograaf of uren in Photoshop nodig had, kun je nu met een paar regels tekst hetzelfde resultaat bereiken. Het model draait lokaal, dus je foto’s verlaten je computer niet – een voordeel voor privacygevoelig materiaal. Wel vereist het een redelijk krachtige GPU: minimaal 20 GB VRAM voor de FP8-versie, of 40 GB voor de volledige versie. Voor wie geen geschikte hardware heeft, zijn er online varianten van Qwen-modellen beschikbaar, maar die zijn niet in de bron genoemd.

Hoe je dit kunt toepassen
**Als je een webshop runt met vintage producten** en je hebt oude catalogusfoto’s die vlekkerig of verkleurd zijn, dan kun je Qwen Image Edit gebruiken om ze te herstellen. Je zou kunnen beginnen met het downloaden van de FP8-versie als je een gemiddelde videokaart hebt. Plaats de modellen in de juiste mappen in ComfyUI, zoals beschreven in de bron: het diffusiemodel in `models/diffusion_models`, de VAE in `models/vae`, en de tekstencoder in `models/text_encoders`. Start ComfyUI opnieuw als het al draaide. Gebruik vervolgens de prompt uit de bron: ‘restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph’. Pas de prompt aan als je de zwart-witlook wilt behouden door ‘colorize’ te verwijderen. Een mogelijkheid is om eerst een test te doen met een paar foto’s om te zien of de resultaten overeenkomen met jouw verwachtingen.

**Als je een team aanstuurt in de vastgoedsector** en je hebt oude archieffoto’s van panden die je wilt gebruiken in marketingmateriaal, dan kun je overwegen om Qwen Image Edit in te zetten voor batchverwerking. De bron geeft aan dat het model binnen seconden tot een paar minuten per foto werkt. Je zou een medewerker kunnen vragen om de installatie te doen en vervolgens een standaardprompt te maken die voor al jullie foto’s werkt. Een optie is om de workflow te baseren op de standaard ‘Flux Kontext Dev’ workflow die in ComfyUI zit, zoals de bron aanraadt. Let op: de bron vermeldt dat de workflow standaard in ComfyUI zit als je de nieuwste versie hebt. Als dat niet het geval is, kun je de workflow uit de bron downloaden.

**Als je in de creatieve sector werkt** en je restaureert foto’s voor klanten, dan kun je Qwen Image Edit gebruiken om tijd te besparen. De bron claimt dat het model ‘super eenvoudig’ lokaal in te stellen is en met simpele prompts werkt. Een mogelijkheid is om de prompt stap voor stap op te bouwen, zoals de maker van de demonstratie deed: begin met een basisinstructie en voeg details toe zoals ‘remove stains and crease marks, repair gaps and fold or bends’. Overweeg om de prompt in een tekstbestand te bewaren, zodat je hem steeds opnieuw kunt gebruiken. De praktische toepassing hangt af van jouw situatie, maar de tijdsbesparing kan aanzienlijk zijn vergeleken met handmatig bewerken in Photoshop.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

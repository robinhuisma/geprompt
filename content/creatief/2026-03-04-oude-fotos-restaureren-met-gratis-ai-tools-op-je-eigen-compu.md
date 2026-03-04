---
title: "Oude foto's restaureren met gratis AI-tools op je eigen computer"
date: 2026-03-04T09:20:01.899Z
tags: ["foto's", "restauratie", "lokale ai", "creatief"]
categorieen: ["creatief"]
summary: "Je kunt beschadigde foto's professioneel opknappen met lokale AI-modellen zoals Qwen Image Edit, zonder abonnementen en met volledige controle over je bestanden."
cover:
  image: "/images/covers/2026-03-04-ai-powered-photo-restoration-using-qwen-image-edit.webp"
  alt: "Ai Powered Photo Restoration using QWEN Image Edit"
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Met AI-modellen die je lokaal op je eigen computer installeert, kun je oude, beschadigde foto's professioneel restaureren en eventueel inkleuren. Dit is een alternatief voor online diensten, waarbij je volledige controle houdt over je bestanden en geen abonnement of upload nodig hebt. Het gaat om modellen zoals Qwen Image Edit en de nieuwere Qwen Image Edit 2509, die je via software als ComfyUI kunt gebruiken. Volgens de bron kun je met een specifieke tekstprompt vlekken, stof, krassen en scheuren laten verwijderen en ontbrekende delen laten aanvullen.

## Wat kun je ermee bereiken?
De toepassing is vooral interessant voor wie met historisch beeldmateriaal werkt. Denk aan een lokale erfgoedvereniging die archieffoto's wil digitaliseren en opknappen voor een tentoonstelling. Een makelaar die oude foto's van een pand wil opfrissen voor een verkoopbrochure. Of een fotograaf die een restauratiedienst wil aanbieden voor persoonlijke familiefoto's. Het proces kan, afhankelijk van je computer, binnen enkele seconden tot minuten een gerestaureerd resultaat opleveren. Een belangrijk detail is dat je ook kunt specificeren of je de zwart-wit look wilt behouden, in plaats van automatische inkleuring.

## Hoe werkt de techniek?
De modellen werken op basis van een instructie, een zogenaamde prompt. De bron deelt een voorbeeldprompt die in de meeste gevallen zou werken: "restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph, reversal film photography, remove stains and crease marks, repair gaps and fold or bends". Je laadt je beschadigde foto in, voert deze prompt in, en het model genereert een nieuwe, schone versie. Het is een kwestie van uitproberen en de prompt aanpassen op basis van het resultaat.

## Wat heb je nodig om te beginnen?
Om dit lokaal te draaien, heb je een redelijk krachtige computer nodig, specifiek een GPU met voldoende videogeheugen (VRAM). Je installeert de gratis software ComfyUI en downloadt vervolgens de benodigde AI-modellen. Er zijn versies beschikbaar voor systemen met minder VRAM (ongeveer 20 GB) en volledige versies (ongeveer 41 GB). Naast het hoofdmodel heb je ook een VAE- en een text encoder-model nodig. Deze bestanden plaats je in de juiste mappen binnen de ComfyUI-installatie. De bron bevat een gedetailleerd overzicht van de benodigde bestanden en hun opslaglocaties.

## Hoe kun je dit vandaag toepassen?
Een mogelijke eerste stap is het verkennen van ComfyUI om te zien of deze workflow bij je past, voordat je grote modellen downloadt. Je zou kunnen beginnen met het testen van de voorbeeldworkflow "Flux Kontext Dev (Group)" die volgens de bron in ComfyUI beschikbaar is na een update. Als je serieus aan de slag wilt, is het verstandig eerst de systeemvereisten, met name de benodigde VRAM, te controleren tegenover je eigen hardware.

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

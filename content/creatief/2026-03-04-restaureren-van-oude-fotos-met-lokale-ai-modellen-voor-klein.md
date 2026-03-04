---
title: "Restaureren van oude foto's met lokale AI-modellen voor kleine bedrijven"
date: 2026-03-04T13:33:54.055Z
tags: ["creatief", "ai-modellen", "foto-restauratie", "lokale ai"]
categorieen: ["creatief"]
summary: "Met gratis AI-modellen zoals Qwen Image Edit kun je oude foto's lokaal op je computer restaureren, zonder abonnementskosten."
cover:
  image: "/images/covers/2026-03-04-ai-powered-photo-restoration-using-qwen-image-edit.webp"
  alt: "Ai Powered Photo Restoration using QWEN Image Edit"
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Met gratis AI-modellen die je op je eigen computer installeert, kun je als klein bedrijf oude foto's professioneel restaureren zonder maandelijkse kosten. Het gaat om modellen zoals Qwen Image Edit, die je lokaal kunt draaien in software zoals ComfyUI. Dit betekent dat je niet afhankelijk bent van een internetverbinding of een abonnementsdienst, en dat je de volledige controle houdt over de originele bestanden. Voor een archief, een klein museum, een fotostudio of een erfgoedvereniging kan dit een kostenefficiënte manier zijn om klantmateriaal of eigen collecties te digitaliseren en op te knappen.

## Hoe werkt lokale foto-restauratie met AI?

De kern van deze aanpak is een zogenaamd 'diffusiemodel' dat speciaal is getraind voor beeldbewerking. In plaats van een nieuwe afbeelding te genereren, past dit model zich aan op een bestaande foto. Je laadt een gescande, oude foto in de software en geeft een tekstuele opdracht, een 'prompt', over wat er moet gebeuren. Een voorbeeld van zo'n prompt is: "restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph". Het model analyseert de afbeelding en probeert de beschadigingen te herstellen en ontbrekende delen in te vullen op basis van de context.

## Wat heb je nodig om te beginnen?

Om dit zelf te proberen, heb je een relatief krachtige computer nodig, met name een grafische kaart (GPU) met voldoende werkgeheugen (VRAM). De benodigde software is gratis. Allereerst installeer je ComfyUI, een grafische interface om met verschillende AI-modellen te werken. Vervolgens download je de specifieke modellen, zoals het Qwen Image Edit model, de bijbehorende VAE en een tekstencoder. Deze bestanden, die samen tientallen gigabytes groot kunnen zijn, plaats je in de juiste mappen binnen de ComfyUI-installatie. Het bronartikel noemt specifiek dat er versies beschikbaar zijn voor GPU's met weinig VRAM (ongeveer 20 GB) en volledige versies (ongeveer 41 GB).

## De praktische workflow voor restauratie

Na de installatie start je ComfyUI op. Binnen de software gebruik je een vooraf ingestelde workflow, zoals de 'Flux Kontext Dev' template die volgens het artikel standaard beschikbaar is na een update. In deze interface sleep je het knooppunt voor het laden van je oude foto naar het werkgebied, verbindt het met het Qwen Image Edit model, en voer je je restauratie-prompt in. De verwerking kan enkele seconden tot minuten duren, afhankelijk van je hardware en de grootte van de afbeelding. Het resultaat is een nieuwe, gerestaureerde versie van je foto die je kunt opslaan.

## Hoe kun je dit vandaag toepassen?

Een mogelijkheid is om eerst te experimenteren met een niet-kritieke oude foto om de kwaliteit van de lokale restauratie te beoordelen. Je zou kunnen beginnen met het installeren van ComfyUI en het downloaden van het kleinere FP8-model om te zien of je hardware het aankan. Voor zwart-wit restauratie kun je in de prompt specifiek vermelden dat je de monochrome look wilt behouden, door termen als 'colorize' weg te laten.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

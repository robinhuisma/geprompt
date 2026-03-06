---
title: "Restaureren van oude bedrijfsfoto's met AI-tools zoals QWEN"
date: 2026-03-06T15:51:26.526Z
tags: ["creatief", "foto's", "ai-modellen", "workflow"]
categorieen: ["creatief"]
summary: "AI-modellen zoals QWEN Image Edit kunnen oude, beschadigde foto's automatisch herstellen en inkleuren, zonder dure software."
cover:
  image: "/images/covers/2026-03-06-ai-powered-photo-restoration-using-qwen-image-edit.webp"
  alt: "Ai Powered Photo Restoration using QWEN Image Edit"
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

AI-modellen die speciaal zijn getraind voor beeldbewerking, zoals QWEN Image Edit, kunnen oude en beschadigde foto's automatisch restaureren. Dit betekent dat je vlekken, stof, krassen en scheuren uit een afbeelding kunt laten verwijderen en deze zelfs kunt laten inkleuren, zonder dat je zelf geavanceerde fotobewerkingssoftware hoeft te beheersen. De techniek werkt door een beschrijving (prompt) te geven van wat je wilt herstellen, waarna het model de bewerking uitvoert. Volgens de bron kan dit binnen enkele seconden tot minuten resultaat opleveren.

## Hoe werkt het proces?

De kern van de aanpak is het gebruik van een specifiek AI-model, zoals QWEN Image Edit of de nieuwere QWEN Image Edit 2509, binnen een programma zoals ComfyUI. Dit is een interface waarmee je verschillende AI-modellen kunt combineren in een visuele workflow. Je laadt een beschadigde foto in, geeft een tekstuele instructie, en het model genereert een gerestaureerde versie. Een voorbeeld van zo'n instructie is: "herstel en kleur deze foto, verwijder de vlekken, stofvlekken, ruis, krassen en strepen uit de afbeelding, vul eventuele gaten, gescheurde of verscheurde delen op, en maak er een hoogwaardige foto van". Als je de zwart-wit look wilt behouden, laat je de verwijzing naar inkleuren uiteraard weg.

## Wat heb je nodig om te beginnen?

Om dit lokaal op je eigen computer te draaien, is een technische setup nodig. Je moet volgens de bron specifieke modelbestanden downloaden, zoals een 'diffusion model' (bijvoorbeeld `qwen_image_edit_fp8_e4m3fn.safetensors` voor een GPU met weinig geheugen), een VAE-model en een tekstencoder. Deze bestanden, die samen tientallen gigabytes groot kunnen zijn, moeten in de juiste mappen van ComfyUI worden geplaatst. Daarna kun je een vooraf gemaakte workflow gebruiken, zoals de 'Flux Kontext Dev' template in ComfyUI, om het restauratieproces te starten.

## Hoe kun je dit vandaag toepassen?

Een mogelijkheid is om te experimenteren met online AI-tools voor foto-restauratie als eerste verkenning, om een gevoel te krijgen voor wat mogelijk is. Voor een lokale, geavanceerde oplossing zoals beschreven in het artikel, zou je kunnen onderzoeken of je computer voldoende rekenkracht (met name VRAM op de GPU) heeft om de grote modellen te draaien. De praktische toepassing hangt af van jouw situatie. Via geprompt.nl/stel-je-vraag kun je een vraag stellen die we uitwerken tot een artikel op maat.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

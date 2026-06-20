---
title: "Zelf AI-beelden trainen voor €0,89 per uur: zo doe je dat zonder dure hardware"
date: 2026-06-20T06:05:45.965Z
tags: ["ai-beelden", "lora training", "ostris toolkit", "runpod"]
categorieen: ["nieuws-tools"]
summary: "Train een AI-model op maat voor je bedrijf met de Ostris Toolkit en een RunPod RTX5090 voor minder dan een euro per uur."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Je kunt nu zelf een AI-beeldmodel trainen voor je bedrijf voor minder dan een euro per uur, zonder dat je een dure videokaart in huis hoeft te hebben. Met de Ostris AI Toolkit op een RunPod RTX5090 (€0,89 per uur) train je in ongeveer 70 minuten een LoRA-model dat jouw producten, stijl of gezichten herkent en genereert.

## Wat er aan de hand is
De Ostris AI Toolkit is een gratis, open-source toolset waarmee je eigen AI-beeldmodellen traint, zoals LoRA’s voor het Z-Image Turbo-model. Normaal gesproken heb je daar een krachtige videokaart voor nodig, zoals een RTX4080 of RTX5090, die al snel duizenden euro’s kost. Maar Ostris heeft de hele toolkit als Docker-image uitgebracht, die direct draait op cloud-diensten zoals RunPod. Daar huur je per uur een RTX5090 voor €0,89. De maker van de tutorial trainde zijn model in 1 uur en 10 minuten, wat neerkomt op ongeveer €1,04 per trainingssessie. De tool slaat automatisch meerdere versies van het model op, zodat je kunt testen welke het beste werkt.

## Wat dit betekent
Voor ondernemers die AI-beelden willen inzetten voor marketing, productvisualisatie of branding, opent dit de deur naar maatwerk zonder grote investeringen. Waar je eerder een dure workstation moest kopen of een specialist moest inhuren, kun je nu zelf een model trainen voor een paar euro. Vooral voor MKB’ers die regelmatig nieuwe producten of campagnes lanceren, is dit interessant: je traint een LoRA op jouw productfoto’s en genereert daarna eindeloos variaties in dezelfde stijl. De drempel wordt verlaagd van duizenden euro’s naar een paar euro per sessie. Wel vereist het enige basiskennis van tools zoals ComfyUI en het werken met datasets.

## Hoe je dit kunt toepassen
**Als je een webshop runt met eigen productfoto’s**, kun je een LoRA trainen op 10 tot 20 foto’s van je product. Gebruik de Ostris Toolkit op RunPod om het model te trainen. Zodra je de checkpoint-bestanden downloadt en in ComfyUI plaatst, kun je nieuwe productafbeeldingen genereren in dezelfde stijl, bijvoorbeeld voor social media of advertenties. Je zou kunnen beginnen met een kleine dataset van je bestverkopende product.

**Als je een team aanstuurt dat visuele content maakt**, kun je de trainingskosten eenvoudig doorberekenen aan projecten. Een sessie van een uur kost minder dan een kop koffie. Overweeg om een standaard dataset op te zetten met jullie merkstijl, logo’s en kleuren, zodat elk teamlid snel nieuwe beelden kan genereren zonder dat de stijl afwijkt. De tool slaat standaard 8 versies op, dus je kunt experimenteren met verschillende LoRA-sterkten (tussen 0,8 en 0,95 werkte goed in de tutorial).

**Als je in de creatieve sector werkt**, bijvoorbeeld als grafisch ontwerper of marketeer, kun je de toolkit inzetten om snel concepten te visualiseren voor klanten. Train een LoRA op bestaande campagnebeelden en genereer daarna variaties voor A/B-testen. Een optie is om de dataset te voorzien van captions (bijschriften) met behulp van een ComfyUI-workflow, zodat het model beter leert wat elk beeld voorstelt. De tutorial raadt aan om hiervoor aparte caption-workflows te gebruiken.

**Als je geen krachtige computer hebt**, is RunPod de oplossing. Je hoeft alleen een account aan te maken, zoekt in de templates op ‘ostris’ en start een pod met een RTX5090. De kosten zijn €0,89 per uur, en je kunt de pod direct stoppen zodra de training klaar is. De praktische toepassing hangt af van jouw situatie, maar voor eenmalige trainingssessies is dit de goedkoopste manier om professionele resultaten te krijgen.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

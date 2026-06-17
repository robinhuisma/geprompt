---
title: "Zelf AI-beeldmodellen trainen: zo doe je dat zonder dure GPU"
date: 2026-06-17T10:05:59.988Z
tags: ["ai-beeldmodellen", "lora-training", "cloud-gpu", "ondernemers"]
categorieen: ["nieuws-tools"]
summary: "Train zelf AI-beeldmodellen in een uur voor minder dan een euro per uur via cloud-GPU’s."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Het trainen van een eigen AI-beeldmodel is voor ondernemers bereikbaar geworden, zonder dat je een dure videokaart van duizenden euro’s hoeft te kopen. Met clouddiensten zoals RunPod huur je een krachtige GPU voor minder dan een euro per uur en kun je in ongeveer een uur een model trainen.

## Wat er aan de hand is

De AI Toolkit van Ostris, een open-source toolset voor het trainen van AI-beeldmodellen, ondersteunt nu het Z-Image Turbo-model. Dit is een variant van het populaire Flux-model, waarmee je eigen stijlen of productafbeeldingen kunt genereren. De tool is beschikbaar als Docker-image, wat betekent dat je hem direct kunt draaien op cloudplatforms zoals RunPod. Volgens een tutorial van Weird Wonderful AI kost een RTX5090-GPU op RunPod $0,89 per uur. De training van een LoRA (een lichtgewicht modelaanpassing) duurde daarmee 1 uur en 10 minuten voor 3000 stappen. De maker gebruikte deze setup om een dataset van ‘Desi Babes’ te trainen, maar het principe werkt voor elke beelddataset.

## Wat dit betekent

Voor ondernemers die AI willen inzetten voor productvisualisatie, marketingmateriaal of gepersonaliseerde afbeeldingen, vervalt de drempel van een dure eigen GPU. Een RTX4090 kost al snel €2000, terwijl je met cloud-GPU’s alleen betaalt voor de rekentijd die je gebruikt. Dit maakt het haalbaar om kleine series eigen modellen te trainen, bijvoorbeeld voor een webshop met unieke productstijlen of een merk dat consistente visuele identiteit wil. De trainingstijd van iets meer dan een uur betekent dat je dit kunt inplannen als een dagelijkse of wekelijkse taak, zonder dat je een server hoeft te beheren.

## Hoe je dit kunt toepassen

**Als je een webshop runt met eigen productfoto’s**, kun je een LoRA trainen op je productcatalogus. Upload een set van 20 tot 50 foto’s van je producten in verschillende hoeken en achtergronden. Laat de tool automatisch bijschriften genereren (captioning) en start de training op een cloud-GPU. Na een uur heb je een model dat nieuwe productafbeeldingen kan genereren in dezelfde stijl, bijvoorbeeld voor social media of advertenties. Je zou kunnen beginnen met een kleine dataset van 10 foto’s om te testen of de resultaten goed genoeg zijn voor jouw doeleinden.

**Als je een team aanstuurt dat visuele content maakt**, kun je de training standaardiseren. Maak een vaste dataset van merkbeelden, logo’s en kleurstalen. Laat een medewerker de training eenmalig opzetten in RunPod en sla de checkpoints op. Daarna kan het team de getrainde LoRA gebruiken in ComfyUI om snel nieuwe varianten te genereren voor campagnes. Overweeg om meerdere versies te bewaren (bijvoorbeeld 8 tussenstappen) zodat je kunt kiezen welke stijl het beste past.

**Als je in de creatieve sector werkt en klanten unieke stijlen wilt bieden**, kun je per project een aparte LoRA trainen. Stel dat een klant een specifieke illustratiestijl wil voor een campagne. Verzamel 30 referentiebeelden, train een LoRA in een uur, en gebruik die om nieuwe beelden in exact die stijl te genereren. Een optie is om de klant een paar varianten te laten zien van de getrainde versies, zodat zij de sterkte van de LoRA (tussen 0,8 en 0,95) kunnen kiezen.

**Als je kosten wilt besparen op GPU-gebruik**, kun je de instellingen aanpassen voor minder krachtige cloud-GPU’s. De tutorial raadt aan om ‘Low VRAM’ uit te schakelen en ‘Quantization Transformer’ op None te zetten als je meer dan 24GB VRAM hebt. Voor kleinere GPU’s kun je deze instellingen juist aanzetten, al duurt de training dan langer. Je zou kunnen experimenteren met een RTX4090 op RunPod (iets duurder) of een A6000 om de balans tussen snelheid en kosten te vinden.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

---
title: "AI-model trainen zonder dure GPU: zo doe je dat voor een tientje"
date: 2026-05-30T10:02:28.200Z
tags: ["ai-training", "cloud", "mkb", "lora"]
categorieen: ["nieuws-tools"]
summary: "Train zelf AI-modellen in de cloud voor minder dan een euro per uur, zonder dure hardware."
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/"
---

Je kunt nu zelf AI-modellen trainen voor minder dan een euro per uur, zonder een dure videokaart in huis te halen. Met de AI Toolkit van Ostris en een clouddienst als RunPod huur je een krachtige RTX5090 GPU voor 89 cent per uur en train je in ruim een uur een eigen LoRA-model.

## Wat er aan de hand is

De AI Toolkit van Ostris is een open-source toolset waarmee je zelf AI-modellen kunt trainen. De ontwikkelaar heeft de hele applicatie als Docker-image uitgebracht, die direct beschikbaar is als template op cloudplatform RunPod. Je zoekt onder Templates op 'ostris', start een pod met een RTX5090 GPU voor 0,89 dollar per uur, en kunt direct aan de slag.

In een praktijkvoorbeeld trainde een gebruiker een LoRA-model op Z-Image Turbo in ongeveer 1 uur en 10 minuten. De tool slaat meerdere versies op tijdens het trainen, zodat je kunt testen welke het beste werkt. In dit geval werden 8 tussenversies en een eindversie bij 3000 stappen opgeslagen.

Deze ontwikkeling maakt AI-training toegankelijk voor ondernemers die geen duizenden euro's willen investeren in een krachtige videokaart. Waar een RTX4080 thuis vaak vastloopt op geheugenproblemen, biedt een cloud-GPU een betaalbaar alternatief.

## Wat dit betekent

Voor MKB-ondernemers betekent dit dat je zonder grote investeringen eigen AI-modellen kunt trainen. Denk aan een webshop die productfoto's wil genereren in een eigen stijl, een architectenbureau dat ontwerpvarianten wil maken, of een marketingbureau dat consistente visuele content wil produceren.

De drempel ligt nu lager dan ooit. Je hebt geen dure hardware nodig, geen technische setup van uren. Je huurt een GPU voor een paar euro, volgt een simpel stappenplan en hebt binnen een uur een werkend model.

Voor bedrijven die regelmatig AI-modellen willen trainen, kan dit een structurele kostenbesparing betekenen. In plaats van een videokaart van 2000 euro aan te schaffen, betaal je per gebruik. En je kunt altijd de nieuwste hardware gebruiken, zonder dat je elke paar jaar hoeft te upgraden.

## Hoe je dit kunt toepassen

**Als je een webshop runt en productfoto's wilt genereren in een eigen stijl.** Je zou kunnen beginnen met het verzamelen van 20 tot 50 bestaande productfoto's. Upload deze naar de AI Toolkit, voeg bijschriften toe met behulp van een captioning-workflow in ComfyUI, en start de training. Binnen een uur heb je een LoRA-model dat jouw productstijl herkent. Een mogelijkheid is om dit model vervolgens te gebruiken om nieuwe productvarianten te visualiseren zonder dat je elke keer een fotograaf hoeft in te huren.

**Als je een marketingbureau bent dat consistente visuele content wil maken voor meerdere klanten.** Overweeg om voor elke klant een apart LoRA-model te trainen. De kosten per model zijn laag: minder dan een euro per trainingssessie. Je zou kunnen experimenteren met verschillende trainingsinstellingen, zoals het uitschakelen van Low VRAM en het aanpassen van het aantal opgeslagen versies. Een optie is om de eindversie te gebruiken voor de uiteindelijke productie, maar ook de tussenversies te testen voor specifieke toepassingen.

**Als je een architect of interieurontwerper bent en ontwerpvarianten wilt genereren.** Je zou kunnen trainen op een set van je eigen ontwerpen of referentiebeelden. De AI Toolkit werkt met standaardinstellingen die voor de meeste gebruikers goed werken. Een mogelijkheid is om de LoRA-sterkte tussen 0,8 en 0,95 in te stellen, zoals in het voorbeeld werd gedaan. Zo behoud je de herkenbaarheid van je eigen stijl terwijl de AI nieuwe variaties genereert.

**Als je een tech-startup hebt die AI-functionaliteit in je product wil bouwen.** Overweeg om de Docker-image van Ostris te gebruiken als basis voor je eigen trainingspijplijn. Je kunt de tool draaien op RunPod of elk ander platform dat Docker ondersteunt. Een optie is om te beginnen met een kleine dataset en de standaardinstellingen te gebruiken, zoals het uitschakelen van Low VRAM en het inschakelen van Cached Text Embedding. Zo leer je het proces zonder risico.

Bron: Weird Wonderful AI (https://weirdwonderfulai.art/tutorial/training-z-image-turbo-lora-with-ostris-ai-toolkit/)

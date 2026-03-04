---
title: "Eén AI-model vervangt je hele toolkit voor professionele beeldbewerking"
date: 2026-03-04T23:14:32.783Z
tags: ["beeldbewerking", "ai-modellen", "efficiëntie", "comfyui"]
categorieen: ["slimmer-werken"]
summary: "Het QWEN Image Edit-model kan inpainting, outpainting en het creëren van consistente personages overnemen, wat tijd en complexiteit bespaart."
cover:
  image: "/images/covers/2026-03-04-qwen-image-edit-can-create-character-consistent-lora-dataset.webp"
  alt: "QWEN Image Edit can create Character Consistent LoRA Dataset"
draft: true
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/comfyui/qwen-image-edit-can-create-character-consistent-lora-dataset/"
---

Een nieuwe AI-model, QWEN Image Edit, belooft de manier waarop je aan beeldbewerking doet te vereenvoudigen door meerdere gespecialiseerde tools te vervangen. Waar je voorheen aparte modellen of technieken nodig had voor het verwijderen van objecten (inpainting), het uitbreiden van een beeld (outpainting) of het sturen van poses (ControlNet), kun je dat nu vragen aan één enkel model. Je geeft het een afbeelding en een tekstuele instructie, zoals "vervang die tas door een koffiebeker" of "zet deze persoon in een kantooromgeving", en het model voert de wijziging door. Het meest opvallende is de belofte van consistente personages. Het kan van één voorbeeldafbeelding van een persoon nieuwe beelden genereren waarbij het gezicht herkenbaar blijft, maar de kleding, expressie, houding of achtergrond verandert. Dit is een waardevolle functie voor het snel aanmaken van een gevarieerde set beelden voor een specifiek persoon, wat nuttig kan zijn voor marketingmateriaal of conceptontwikkeling.

## Hoe het werkt in de praktijk
In tegenstelling tot veel andere modellen, werkt QWEN Image Edit volgens de bron zogenaamd 'in-context'. Dit betekent dat het geen ingewikkelde maskers of vooraf gedefinieerde segmentatie nodig heeft. Je communiceert puur via tekstprompts met het model. De gebruiker in het bronartikel beschrijft dat je eerst moet experimenteren om te begrijpen hoe het model een aangeleverde afbeelding precies interpreteert en verandert. Als je dat doorhebt, kun je een reeks prompts bedenken die dezelfde persoon steeds opnieuw genereren, maar in verschillende settings. Het resultaat is een schone en gevarieerde dataset van die ene persoon, die je volgens de bron vervolgens weer kunt gebruiken om een LoRA (een klein, aanpasbaar AI-model) te trainen voor nog meer consistentie.

## De technische kant en vereisten
Het model is beschikbaar voor gebruik binnen ComfyUI, een populaire interface voor geavanceerde AI-beeldgeneratie. Er zijn volgens het artikel twee versies: een origineel model en een nieuwere '2509' versie. Beide zijn er in een lichtere FP8-variant (ongeveer 20.4 GB) voor computers met minder videogeheugen (VRAM) en een volledige bf16-variant (ongeveer 40.9 GB). Voor die laatste, zwaardere variant is een krachtige grafische kaart nodig. De auteur noemt specifiek toegang tot een RTX 5090 met 32 GB VRAM, die je volgens hem voor minder dan een dollar per uur kunt huren via clouddiensten zoals RunPod. Na installatie in de juiste map en een herstart van ComfyUI, is een standaardwerkflow via het template-menu beschikbaar.

## Hoe kun je dit vandaag toepassen?
Een mogelijkheid is om te onderzoeken of dit model een stap kan zijn in het stroomlijnen van je beeldcreatie. Als je nu verschillende tools gebruikt voor retoucheren, achtergrondvervanging of het maken van varianten van een model, zou je kunnen testen of QWEN Image Edit dit kan consolideren. Je zou kunnen beginnen met de lichtere FP8-versie van het model in ComfyUI om zonder dure hardware te experimenteren met het aanpassen van productfoto's of het creëren van consistente personages voor een campagne.

*Dit artikel is geschreven met behulp van AI en gecontroleerd door de redactie van geprompt.nl. De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/comfyui/qwen-image-edit-can-create-character-consistent-lora-dataset/)

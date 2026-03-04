---
title: "Restaureren van oude foto's met lokale AI-tools voor kleine bedrijven"
date: 2026-03-04T20:28:34.488Z
tags: ["creatief", "foto", "restauratie", "lokale ai"]
categorieen: ["creatief"]
summary: "Je kunt oude, beschadigde foto's kosteneffectief restaureren met lokale AI-tools zoals Qwen Image Edit, zonder dure software of abonnementen."
cover:
  image: "/images/covers/2026-03-04-ai-powered-photo-restoration-using-qwen-image-edit.webp"
  alt: "Ai Powered Photo Restoration using QWEN Image Edit"
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Je kunt oude, beschadigde foto's nu kosteneffectief restaureren met AI-tools die je op je eigen computer kunt draaien. Dit is vooral interessant voor kleine bedrijven zoals fotostudio's, lokale archieven of musea die regelmatig oude klantfoto's, historische beelden of archiefmateriaal tegenkomen. In plaats van dure softwarelicenties of abonnementen op online diensten te nemen, kun je met een lokaal geïnstalleerd model zoals Qwen Image Edit of Qwen Image Edit 2509 zelf aan de slag. Volgens het bronartikel van Weird Wonderful AI, dat is gebaseerd op een praktijktest, kunnen deze modellen vlekken, stof, krassen, vouwen en scheuren in enkele seconden tot minuten herstellen en de foto eventueel ook inkleuren.

## Wat deze lokale AI-tools kunnen
De kern van de aanpak is dat je een specifiek AI-model downloadt en installeert in een gratis programma zoals ComfyUI. Eenmaal opgezet, hoef je geen internetverbinding meer te hebben en zijn er geen gebruikskosten. Het model is getraind om te begrijpen wat een 'normale', onbeschadigde foto is. Je geeft het een opdracht, een zogenaamde prompt, waarin je beschrijft wat er moet gebeuren. Een voorbeeldprompt uit het artikel is: "restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph". Als je de zwart-wit look wilt behouden, laat je de termen 'colorize' of 'colourising' gewoon weg. Het mooie is dat je de prompt kunt aanpassen en verfijnen op basis van de resultaten die je ziet.

## De praktische voorbereiding
Om dit te gebruiken, moet je technisch gezien een paar stappen zetten. Allereerst heb je een computer nodig met een redelijk krachtige grafische kaart (GPU). Het bronartikel noemt specifiek twee versies van het Qwen Image Edit model: een lichtere FP8-versie van ongeveer 20 GB voor computers met minder VRAM-geheugen op de GPU, en een volledige versie van ongeveer 41 GB. Daarnaast download je een bijbehorend VAE-bestand en een tekstencoder. Deze bestanden plaats je in de juiste mappen binnen de ComfyUI-installatie. Het is een eenmalige setup. Het artikel benadrukt dat je ComfyUI up-to-date moet houden en de software opnieuw moet starten na het installeren van de modellen.

## De workflow in de praktijk
Na de installatie kun je in ComfyUI aan de slag met een vooringestelde workflow, zoals de 'Flux Kontext Dev' template die genoemd wordt. Hierin laad je de oude foto in, voer je je geschreven prompt in, en laat je het model zijn werk doen. Het proces is iteratief: je bekijkt het resultaat en kunt je prompt aanpassen voor een beter resultaat. Voor een bedrijf betekent dit dat een medewerker deze tool kan leren gebruiken voor gestandaardiseerde restauratietaken, zoals het verwijderen van vochtvlekken van oude portretfoto's of het herstellen van gescheurde hoeken van historische ansichtkaarten.

## Hoe kun je dit vandaag toepassen?
Een mogelijkheid is om eerst te onderzoeken of je computer, met name de grafische kaart, voldoende kracht en opslagruimte heeft voor de lichtere FP8-versie van het model (ongeveer 20 GB). Je zou vervolgens kunnen experimenteren met het installeren van de gratis software ComfyUI om vertrouwd te raken met de interface, voordat je de grote modelbestanden downloadt. Voor een eerste indruk van de mogelijkheden kun je kijken naar de praktijkvoorbeelden en prompts in het bronartikel om te zien of de kwaliteit voldoet voor jouw type restauratiewerk.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

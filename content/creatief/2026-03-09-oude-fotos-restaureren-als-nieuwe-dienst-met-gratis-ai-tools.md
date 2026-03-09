---
title: "Oude foto's restaureren als nieuwe dienst met gratis AI-tools"
date: 2026-03-09T17:15:58.971Z
tags: ["creatief", "fotografie", "ai-tools", "lokale ai"]
categorieen: ["creatief"]
summary: "Met lokale AI-modellen zoals Qwen Image Edit kun je beschadigde klantfoto's automatisch herstellen en inkleuren, zonder abonnementskosten."
cover:
  image: "/images/covers/2026-03-09-ai-powered-photo-restoration-using-qwen-image-edit.webp"
  alt: "Ai Powered Photo Restoration using QWEN Image Edit"
draft: false
source_name: "Weird Wonderful AI"
source_url: "https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/"
---

Met lokale AI-modellen zoals Qwen Image Edit en Qwen Image Edit 2509 kun je als fotograaf, archiefbeheerder of kleine ondernemer een nieuwe dienst opzetten: het digitaal restaureren van oude, beschadigde foto's. Deze modellen zijn speciaal getraind voor beeldbewerking en kunnen vlekken, stof, krassen en scheuren in oude foto's herstellen en de beelden eventueel inkleuren. Het bijzondere is dat je de software gratis kunt downloaden en op je eigen computer kunt draaien, waardoor je geen maandelijkse abonnementskosten hebt voor een online dienst.

## Hoe de AI-techniek werkt

De modellen werken binnen een gratis programma genaamd ComfyUI, een interface om verschillende AI-modellen aan te sturen. Je downloadt de specifieke modellen – er zijn versies voor computers met minder videogeheugen (VRAM) – en plaatst ze in de juiste mappen. Vervolgens gebruik je een vooraf ingestelde workflow, zoals 'Flux Kontext Dev', om het proces te starten. Het herstellen van een foto gebeurt door een tekstuele opdracht, een 'prompt', te geven waarin je beschrijft wat er moet gebeuren.

## De praktische opdracht voor restauratie

Volgens de bron is een effectieve prompt om een foto te herstellen: "restore and colorize this photo, remove the stains, dust spots, noise, scratches and stripes from the image, fill in any gaps, ripped or torn sections, turning it into a high quality photograph, reversal film photography, remove stains and crease marks, repair gaps and fold or bends". Dit is een uitgebreide instructie die de AI vertelt om het beeld schoon te maken, gaten op te vullen en de kwaliteit te verbeteren. Als je de zwart-wit look wilt behouden, laat je de termen 'colorize' of 'colourising' weg uit de prompt. Het resultaat is volgens de auteur van het bronartikel verbluffend en kan binnen enkele seconden tot minuten gegenereerd worden.

## De voorbereiding en benodigdheden

Om te beginnen heb je ComfyUI nodig, samen met drie soorten bestanden: het hoofdmodel (bijvoorbeeld `qwen_image_edit_fp8_e4m3fn.safetensors`), een VAE-model (`qwen_image_vae.safetensors`) en een tekstencoder-model (zoals `qwen_2.5_vl_7b_fp8_scaled.safetensors`). Deze bestanden, die samen tientallen gigabytes kunnen zijn, plaats je in specifieke submappen binnen de ComfyUI-map op je computer. Het is een technische installatie die enige kennis vereist, maar er zijn duidelijke handleidingen voor. Een belangrijk voordeel is dat je, eenmaal ingesteld, volledige controle hebt en de tool onbeperkt kunt gebruiken.

## Hoe kun je dit vandaag toepassen?

Een mogelijkheid is om te onderzoeken of je computer voldoende krachtig is (met name voldoende VRAM) om een van de kleinere FP8-modellen lokaal te draaien. Je zou dan kunnen beginnen met het downloaden en installeren van ComfyUI om de interface te verkennen. Vervolgens is een logische stap om een paar lage-resolutie testfoto's te gebruiken om het restauratieproces met de aangegeven prompt uit te proberen voordat je het aanbiedt aan klanten.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [Weird Wonderful AI](https://weirdwonderfulai.art/resources/ai-powered-photo-restoration-using-qwen-image-edit/)

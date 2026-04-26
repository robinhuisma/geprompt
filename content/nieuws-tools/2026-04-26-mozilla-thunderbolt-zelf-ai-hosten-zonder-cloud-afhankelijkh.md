---
title: "Mozilla Thunderbolt: zelf AI hosten zonder cloud-afhankelijkheid"
date: 2026-04-26T14:05:11.781Z
tags: ["mozilla", "ai", "self-hosted", "privacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client om eigen AI-infrastructuur te beheren, zonder cloud."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla’s nieuwe Thunderbolt-client stelt je in staat om AI-toepassingen te draaien op je eigen hardware, zonder dat je afhankelijk bent van clouddiensten van derden. Dit betekent dat je controle houdt over je data, kosten kunt beheersen en zelf bepaalt welke AI-modellen je gebruikt.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd: een front-end client voor bedrijven die hun eigen AI-infrastructuur willen hosten. Het is geen eigen AI-model, maar een schil bovenop Haystack, een bestaand open source AI-framework. Thunderbolt fungeert als wat Mozilla een ‘sovereign AI client’ noemt. Het systeem belooft integratie met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, OpenClaw, DeepSeek en OpenCode. Daarnaast kan het koppelen met lokaal opgeslagen bedrijfsdata via open protocollen en een offline SQLite-database gebruiken als lokale ‘bron van waarheid’. Mozilla noemt ook optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor ondernemers in het MKB betekent dit een reëel alternatief voor dure cloud-abonnementen op AI-diensten. Waar je nu vaak per gebruiker of per API-call betaalt aan aanbieders als OpenAI, kun je met Thunderbolt eenmalig investeren in eigen hardware en daarna alleen de operationele kosten dragen. Dit is vooral relevant voor bedrijven die werken met gevoelige data, zoals klantinformatie, medische dossiers of financiële gegevens. Het risico op datalekken via cloudproviders verdwijnt niet helemaal, maar je hebt wel meer controle. Daarnaast geeft het je de vrijheid om te wisselen tussen AI-modellen zonder vast te zitten aan één leverancier.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantgegevens**, kun je overwegen om Thunderbolt in te zetten op een eigen server. Je zou een lokaal AI-model kunnen draaien dat alleen toegang heeft tot jouw SQLite-database met klantdossiers. Zo kun je bijvoorbeeld automatisch samenvattingen genereren van correspondentie, zonder dat data de deur uit gaat. Een mogelijkheid is om te beginnen met een kleine server en het systeem later uit te breiden.

**Als je een webshop beheert en AI wilt gebruiken voor klantenservice**, kun je met Thunderbolt een chatbot hosten die alleen jouw productcatalogus en orderdata kent. Omdat alles lokaal draait, hoef je geen klantgegevens te delen met externe AI-diensten. Je zou kunnen starten met een eenvoudige pipeline die vragen beantwoordt over voorraad en levertijden, en later sentimentanalyse toevoegen.

**Als je een team aanstuurt dat werkt met bedrijfsgevoelige documenten**, zoals juridische stukken of ontwerpen, biedt Thunderbolt de mogelijkheid om een AI-assistent te bouwen die alleen jouw eigen bestanden indexeert. Je zou kunnen experimenteren met een offline database als ‘bron van waarheid’, zodat de AI altijd het laatste document versiebeheer raadpleegt. Overweeg om eerst een pilot te draaien met één afdeling voordat je het uitrolt.

**Als je in de zorg werkt en AI wilt gebruiken voor het analyseren van patiëntgegevens**, is Thunderbolt interessant vanwege de optionele end-to-end encryptie en toegangscontroles. Je zou een lokaal model kunnen inzetten dat alleen geanonimiseerde data verwerkt, zonder dat er ooit data naar een cloudprovider gaat. Een mogelijkheid is om te beginnen met het samenvatten van ontslagbrieven, een taak waar privacy cruciaal is.

**Als je een productiebedrijf bent met eigen data over productieprocessen**, kun je Thunderbolt gebruiken om een AI-pipeline te bouwen die defecten voorspelt op basis van historische productiegegevens. Omdat alles lokaal blijft, hoef je geen concurrentiegevoelige informatie te delen. Je zou kunnen starten met een eenvoudig model dat afwijkingen in sensordata detecteert.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

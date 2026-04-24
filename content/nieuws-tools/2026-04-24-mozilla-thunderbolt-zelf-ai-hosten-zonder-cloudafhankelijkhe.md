---
title: "Mozilla Thunderbolt: zelf AI hosten zonder cloudafhankelijkheid"
date: 2026-04-24T02:04:11.518Z
tags: ["mozilla", "self-hosted ai", "mkb", "databeveiliging"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client waarmee je eigen AI-infrastructuur beheert zonder clouddiensten."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla’s nieuwe Thunderbolt-client stelt bedrijven in staat om AI-toepassingen volledig op eigen infrastructuur te draaien, zonder afhankelijk te zijn van clouddiensten van derden. Dit betekent dat je als ondernemer de controle houdt over je data, terwijl je toch gebruikmaakt van krachtige AI-modellen.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd: een front-end client voor bedrijven die zelf AI willen hosten. Thunderbolt is geen eigen AI-model, maar een schil bovenop het open-source Haystack-framework. Hiermee kunnen gebruikers modulaire AI-pijplijnen bouwen met zelfgekozen componenten. Thunderbolt fungeert als een ‘soevereine AI-client’ die werkt met ACP-compatibele agents en OpenAI-compatibele API’s, waaronder Claude, Codex, DeepSeek en OpenCode. Het systeem kan ook integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt een offline SQLite-database als lokale ‘bron van waarheid’. Mozilla benadrukt dat Thunderbolt optionele end-to-end encryptie en apparaatniveau-toegangscontroles biedt.

## Wat dit betekent

Voor Nederlandse MKB’ers is dit een direct antwoord op groeiende zorgen over datalekken en afhankelijkheid van Amerikaanse cloudproviders. Waar veel AI-tools data naar externe servers sturen, kun je met Thunderbolt alles binnen de eigen muren houden. Dit is vooral relevant voor bedrijven in sectoren met strenge privacyregels, zoals de zorg, financiële dienstverlening of juridische dienstverlening. Het betekent niet dat je zelf een AI-expert moet zijn: Thunderbolt is ontworpen als een gebruiksvriendelijke client die de complexiteit van het onderliggende Haystack-framework verbergt. Wel vraagt het om een investering in eigen hardware of een private cloudomgeving.

## Hoe je dit kunt toepassen

**Als je een adviesbureau runt met gevoelige klantdata.** Je zou Thunderbolt kunnen inzetten om een interne AI-assistent te draaien die documenten samenvat of analyses uitvoert, zonder dat vertrouwelijke informatie ooit je eigen netwerk verlaat. Overweeg om te starten met een kleine testopstelling op een lokale server of een krachtige desktop, waarbij je alleen de modellen gebruikt die je echt nodig hebt.

**Als je een webshop beheert en klantgedrag wilt analyseren.** Een mogelijkheid is om Thunderbolt te koppelen aan je eigen database met aankoopgeschiedenis. De AI kan dan patronen herkennen en aanbevelingen doen, terwijl alle data lokaal blijft. Je zou kunnen beginnen met een eenvoudige pijplijn die alleen de SQLite-database als bron gebruikt, zonder externe API’s.

**Als je een team aanstuurt dat werkt met vertrouwelijke documenten.** Denk aan een juridische of notariële praktijk. Je zou Thunderbolt kunnen gebruiken om een interne zoek- en antwoordtool te bouwen die alleen je eigen archief doorzoekt. Een optie is om te experimenteren met een lokaal model zoals DeepSeek of OpenCode, dat je via de ACP-interface aansluit op Thunderbolt.

**Als je een IT-afdeling hebt die al eigen servers beheert.** Je kunt Thunderbolt naast bestaande infrastructuur plaatsen en het koppelen aan je eigen opslag- en beveiligingsprotocollen. Overweeg om eerst een proof of concept te draaien met een niet-kritische dataset, om te ervaren hoe de client werkt met jouw hardware en netwerkconfiguratie.

**Als je in de zorg werkt en aan AVG-eisen moet voldoen.** Thunderbolt biedt een manier om AI in te zetten voor bijvoorbeeld het samenvatten van patiëntendossiers, zonder dat data naar een cloudprovider gaat. Je zou kunnen starten met een gesloten testomgeving waarin alleen geanonimiseerde data wordt gebruikt, en de end-to-end encryptie inschakelen.

Bron: Arstechnica (https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

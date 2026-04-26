---
title: "Mozilla Thunderbolt: eigen AI-chatbot hosten zonder cloudafhankelijkheid"
date: 2026-04-26T06:03:59.416Z
tags: ["ai", "zelf-hostend", "mozilla", "privacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client waarmee je zelf AI draait op eigen servers, los van OpenAI of Google."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een nieuwe AI-client waarmee je als ondernemer een eigen chatbot kunt draaien op je eigen servers, zonder dat je afhankelijk bent van clouddiensten van OpenAI of Google. Het is een front-end die je koppelt aan zelfgekozen AI-modellen en je eigen data, met volledige controle over waar je informatie blijft.

## Wat er aan de hand is

Mozilla, het bedrijf achter Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is geen eigen AI-model, maar een client die draait op Haystack, een bestaand open source AI-framework. Thunderbolt fungeert als een 'soevereine AI-client' waarmee je zelf kunt bepalen welke AI-modellen je gebruikt. Het systeem werkt met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast kan Thunderbolt integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale 'bron van waarheid'. Mozilla benadrukt dat dit belangrijk is voor bedrijven die zich zorgen maken over het lekken van data naar externe partijen. Optioneel biedt Thunderbolt end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor Nederlandse ondernemers betekent dit een alternatief voor het gebruik van AI-diensten van grote techbedrijven. Waar je nu vaak data naar de cloud van OpenAI, Google of Microsoft stuurt, kun je met Thunderbolt alles op eigen hardware houden. Dit is vooral relevant voor bedrijven die werken met gevoelige klantdata, zoals in de zorg, financiële dienstverlening of juridische sector. Ook voor bedrijven die voldoen aan strenge privacyregels, zoals de AVG, biedt dit een manier om AI in te zetten zonder dat data de eigen infrastructuur verlaat. Het feit dat Thunderbolt open source is en modulair, betekent dat je niet vastzit aan één leverancier en zelf kunt kiezen welke AI-modellen je gebruikt.

## Hoe je dit kunt toepassen

**Als je een adviesbureau runt met vertrouwelijke klantdossiers.** Je zou Thunderbolt kunnen inzetten als interne AI-assistent die samenvattingen maakt van dossiers, zonder dat die data ooit je eigen server verlaat. Overweeg om een lokaal model zoals DeepSeek of OpenCode te draaien, gekoppeld aan een SQLite-database met alleen de relevante documenten. Zo kun je snel antwoorden genereren zonder privacyrisico's.

**Als je een softwarebedrijf hebt dat AI-functionaliteit in je eigen product wil bouwen.** Een mogelijkheid is om Thunderbolt te gebruiken als de AI-laag in je applicatie, waarbij klanten zelf kunnen kiezen welk model ze willen gebruiken. Je zou kunnen beginnen met een proof of concept waarbij je Thunderbolt koppelt aan een lokaal model en test hoe het presteert met jullie eigen data.

**Als je in de zorg werkt en AI wilt gebruiken voor het analyseren van patiëntgegevens.** Thunderbolt biedt de optie om end-to-end encryptie in te schakelen, wat essentieel is voor medische data. Je zou kunnen overwegen om een aparte server in te richten met Thunderbolt, alleen toegankelijk voor geautoriseerde medewerkers, en daar modellen te draaien die zijn getraind op geanonimiseerde data.

**Als je een juridisch kantoor bent dat contracten wil laten doorzoeken.** Je zou Thunderbolt kunnen inzetten als een interne zoekmachine voor juridische documenten. Door de offline SQLite-database als bron van waarheid te gebruiken, kun je snel specifieke clausules of precedenten vinden zonder dat documenten naar een externe cloud gaan. Overweeg om te starten met een kleine set documenten om te testen hoe nauwkeurig de resultaten zijn.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

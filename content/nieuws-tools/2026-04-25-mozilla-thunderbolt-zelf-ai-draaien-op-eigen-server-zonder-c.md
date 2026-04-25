---
title: "Mozilla Thunderbolt: zelf AI draaien op eigen server zonder cloudkosten"
date: 2026-04-25T02:03:45.724Z
tags: ["mozilla", "ai", "self-hosted", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een AI-client voor eigen infrastructuur, zonder maandelijkse cloudkosten."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een nieuwe AI-client waarmee je als ondernemer AI-toepassingen kunt draaien op je eigen hardware, zonder dat je afhankelijk bent van clouddiensten van derden. Dit betekent dat je geen maandelijkse abonnementskosten betaalt en dat je bedrijfsdata niet naar externe servers hoeft te stromen.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is geen eigen AI-model of agentische browser, maar een front-end client voor bedrijven die hun eigen AI-infrastructuur willen beheren. Thunderbolt is gebouwd op Haystack, een bestaand open source AI-framework waarmee je modulaire AI-pijplijnen kunt samenstellen uit zelfgekozen componenten. Mozilla noemt Thunderbolt een ‘sovereign AI client’ die bovenop die infrastructuur werkt. Het systeem kan koppelen met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, OpenClaw, DeepSeek en OpenCode. Daarnaast integreert het met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale ‘bron van waarheid’. Mozilla biedt ook optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor het MKB betekent dit een alternatief voor de maandelijkse cloudkosten van AI-diensten zoals ChatGPT Enterprise of Google Vertex AI. Waar die diensten je data naar hun servers sturen en je per gebruiker of per API-call betaalt, kun je met Thunderbolt alles op eigen hardware draaien. Dat is vooral relevant voor bedrijven die werken met gevoelige klantdata, zoals in de zorg, juridische sector of financiële dienstverlening. Het risico op datalekken via externe providers verdwijnt niet volledig, maar je hebt wel volledige controle over waar je data wordt opgeslagen en verwerkt. De keerzijde is dat je zelf verantwoordelijk bent voor de hardware, het onderhoud en de beveiliging van je AI-infrastructuur.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantgegevens**, kun je Thunderbolt inzetten om een lokale AI-assistent te draaien die jaarrekeningen analyseert zonder dat data naar een cloudprovider gaat. Je zou een pipeline kunnen bouwen die documenten verwerkt via een lokaal model, met de SQLite-database als naslagwerk voor eerdere klantdossiers. Overweeg om te beginnen met een kleine server of een krachtige desktop, en test eerst met een beperkt aantal documenten.

**Als je een webshop hebt met een eigen productdatabase**, kun je Thunderbolt gebruiken om een slimme zoekfunctie of aanbevelingsengine te maken die draait op je eigen server. Het systeem kan via open protocollen je productdata inlezen en een lokaal model gebruiken om klanten relevante artikelen te tonen, zonder dat je afhankelijk bent van een externe API met variabele kosten. Een mogelijkheid is om te starten met een bestaand open source model zoals DeepSeek of OpenCode, dat je via Thunderbolt aanstuurt.

**Als je een klein team aanstuurt dat veel met interne documenten werkt**, kun je Thunderbolt gebruiken om een interne kennisbank te maken. Het systeem kan je bedrijfsdocumenten indexeren in de lokale SQLite-database, waarna medewerkers via een chatinterface vragen kunnen stellen. Omdat alles lokaal blijft, hoef je je geen zorgen te maken over datalekken naar externe partijen. Overweeg om eerst een pilot te draaien met een paar medewerkers en een beperkte set documenten, voordat je het uitrolt naar het hele team.

Bron: Arstechnica (https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

---
title: "Mozilla Thunderbolt: zelf AI draaien zonder Big Tech, ook voor het MKB"
date: 2026-04-23T18:03:34.255Z
tags: ["mozilla", "ai", "self-hosted", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een AI-client waarmee je eigen infrastructuur gebruikt in plaats van clouddiensten."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla’s nieuwe Thunderbolt is een AI-client waarmee je zelf kunt bepalen waar je AI-modellen draaien en waar je data blijft. Het is geen nieuw AI-model, maar een schil die je eigen infrastructuur koppelt aan bestaande AI-diensten, zonder dat je afhankelijk bent van de cloud van Google, Microsoft of OpenAI.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is een front-end client voor bedrijven die AI willen gebruiken zonder hun data naar externe clouddiensten te sturen. Thunderbolt is gebouwd op Haystack, een open source AI-framework waarmee je zelf AI-pijplijnen kunt samenstellen uit door jou gekozen componenten. Mozilla noemt Thunderbolt een ‘sovereign AI client’. Het systeem werkt met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast kan het integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale ‘source of truth’. Mozilla biedt optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor het MKB betekent dit dat AI-toepassingen niet langer exclusief zijn voor bedrijven die een cloudabonnement bij een grote techspeler hebben. Thunderbolt maakt het mogelijk om AI te draaien op eigen hardware, met eigen data, zonder dat die data de eigen omgeving verlaat. Dat is relevant voor bedrijven die werken met gevoelige klantinformatie, medische gegevens of bedrijfsgeheimen. Ook bedrijven die te maken hebben met wetgeving zoals de AVG kunnen hiermee meer controle houden over waar hun data wordt verwerkt. Mozilla richt zich met Thunderbolt niet alleen op grote ondernemingen, maar ook op kleinere organisaties die geen eigen serverkennis in huis hebben. De belofte is dat je geen techneut hoeft te zijn om een self-hosted AI-omgeving op te zetten.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantgegevens**, dan kun je Thunderbolt overwegen om AI in te zetten voor het samenvatten van dossiers of het genereren van rapporten. Omdat de data lokaal blijft, hoef je geen risico te lopen dat gevoelige informatie via een clouddienst uitlekt. Je zou kunnen beginnen met een eenvoudige installatie op een lokale server of een krachtige zakelijke laptop.

**Als je een klein productiebedrijf bent dat AI wil gebruiken voor kwaliteitscontrole**, dan kun je Thunderbolt koppelen aan een lokaal AI-model dat camerabeelden analyseert. Omdat alles op eigen hardware draait, ben je niet afhankelijk van een internetverbinding en blijven de beelden binnen het bedrijf. Een mogelijkheid is om te starten met een bestaand OpenAI-compatibel model en dat via Thunderbolt aan te sluiten op je eigen database met productiegegevens.

**Als je een zzp’er bent in de juridische of financiële sector**, dan kun je Thunderbolt gebruiken om een eigen AI-assistent op te zetten die je helpt met documentanalyse. Omdat de SQLite-database lokaal draait, kun je de AI laten refereren aan je eigen dossiers zonder dat die informatie naar een externe partij gaat. Overweeg om te beginnen met een gratis of goedkoop open source model en dat via Thunderbolt te koppelen aan je eigen bestanden.

**Als je een team aanstuurt dat werkt met gevoelige onderzoeksdata**, dan biedt Thunderbolt de mogelijkheid om AI-toegang te beheren per apparaat. Je kunt instellen wie welke modellen mag gebruiken en welke data de AI mag inzien. Een optie is om eerst een pilot te draaien met één afdeling en de ervaringen te evalueren voordat je het uitrolt.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

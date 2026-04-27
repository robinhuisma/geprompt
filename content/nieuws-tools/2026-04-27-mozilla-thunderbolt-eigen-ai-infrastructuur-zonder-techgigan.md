---
title: "Mozilla Thunderbolt: eigen AI-infrastructuur zonder techgiganten"
date: 2026-04-27T02:04:54.025Z
tags: ["mozilla", "ai", "zelfhosten", "privacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client voor zelfbeheerde AI, zonder afhankelijkheid van clouddiensten."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een front-end client waarmee je eigen AI-modellen kunt draaien op je eigen infrastructuur, zonder dat je afhankelijk bent van clouddiensten van Amerikaanse techreuzen. Dit betekent dat je als ondernemer controle houdt over je data, privacy en de volledige AI-stack, van model tot opslag.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is geen nieuw AI-model, maar een client die draait op Haystack, een open source AI-framework. Thunderbolt fungeert als een ‘soevereine AI-client’ waarmee je zelf kunt bepalen welke AI-modellen en componenten je gebruikt. Het systeem is compatibel met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast kan Thunderbolt integreren met lokaal opgeslagen bedrijfsdata via open protocollen en een offline SQLite-database gebruiken als lokale ‘bron van waarheid’. Mozilla benadrukt dat het systeem optionele end-to-end encryptie en toegangscontroles op apparaatniveau biedt.

## Wat dit betekent

Voor Nederlandse ondernemers in het MKB is dit een direct antwoord op de groeiende zorgen over datalekken en afhankelijkheid van grote techbedrijven. Waar veel AI-toepassingen nu draaien op clouddiensten van Google, Microsoft of OpenAI, geeft Thunderbolt je de mogelijkheid om alles zelf te hosten. Dat is vooral relevant voor sectoren met gevoelige data, zoals de juridische, medische of financiële dienstverlening. Je hoeft geen eigen AI-model te trainen; je kunt bestaande open source modellen gebruiken en die koppelen aan je eigen data, zonder dat die data de deur uit gaat. Dit verlaagt de drempel voor zelfbeheerde AI aanzienlijk, omdat Thunderbolt de complexe infrastructuur verbergt achter een gebruiksvriendelijke client.

## Hoe je dit kunt toepassen

**Als je een adviesbureau runt met vertrouwelijke klantgegevens.** Je zou Thunderbolt kunnen inzetten om een interne AI-assistent te draaien die alleen toegang heeft tot jouw lokale documenten. Omdat alles op eigen servers blijft, hoef je geen contracten met cloudproviders aan te passen en loop je geen risico op datalekken via externe partijen. Overweeg om te beginnen met een kleine testopstelling: installeer Thunderbolt op een lokale server, koppel een open source model zoals DeepSeek, en laat het een samenvatting maken van een interne notitie. Zo ervaar je direct de meerwaarde zonder grote investeringen.

**Als je een productiebedrijf bent met eigen data over processen en kwaliteitscontrole.** Een mogelijkheid is om Thunderbolt te gebruiken als interface voor een AI-systeem dat je eigen productiehandleidingen en storingslogs doorzoekt. Omdat de SQLite-database lokaal draait, kun je deze vullen met jouw specifieke data, zoals onderhoudsschema’s of foutcodes. Je zou kunnen overwegen om een medewerker te vragen een eenvoudige pipeline te bouwen in Haystack, waarbij Thunderbolt de vragen van de werkvloer vertaalt naar antwoorden uit jullie eigen kennisbank.

**Als je een eenmanszaak of zzp’er bent die privacy belangrijk vindt.** Je zou Thunderbolt kunnen draaien op een krachtige laptop of een kleine server thuis. Het voordeel is dat je geen abonnement op een clouddienst nodig hebt en dat je data nooit je apparaat verlaat. Een optie is om te beginnen met een offline model dat je via Thunderbolt kunt bevragen voor taken als het opstellen van offertes of het samenvatten van e-mails. Omdat het systeem modulair is, kun je later eenvoudig extra componenten toevoegen, zoals een vertaalmodel of een code-assistent, zonder dat je van provider hoeft te wisselen.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

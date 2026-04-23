---
title: "Mozilla Thunderbolt: eigen AI-infrastructuur zonder cloudafhankelijkheid"
date: 2026-04-23T10:04:36.062Z
tags: ["mozilla", "thunderbolt", "ai", "zelf-hostend"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client voor zelf-hostende AI zonder cloud, met focus op databeveiliging."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla’s Thunderbolt is een client waarmee je als ondernemer AI kunt draaien op je eigen infrastructuur, zonder dat je afhankelijk bent van clouddiensten van derden. Het combineert een open-source AI-framework met de mogelijkheid om lokaal opgeslagen data te gebruiken, wat vooral interessant is voor bedrijven die gevoelige informatie niet willen delen met externe providers.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is geen eigen AI-model, maar een front-end client die draait op Haystack, een bestaand open-source AI-framework. Thunderbolt fungeert als een ‘soevereine AI-client’ waarmee gebruikers zelf kunnen bepalen welke AI-modellen en data ze gebruiken. Het systeem werkt met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast kan het integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale ‘bron van waarheid’. Mozilla benadrukt dat Thunderbolt optionele end-to-end encryptie en apparaatniveau-toegangscontroles biedt voor extra beveiliging.

## Wat dit betekent

Voor het MKB betekent dit een alternatief voor de grote cloud-AI-aanbieders zoals OpenAI, Google en Microsoft. Waar die diensten vaak data naar hun eigen servers sturen, kun je met Thunderbolt de volledige AI-stack zelf beheren. Dit is cruciaal voor bedrijven die werken met vertrouwelijke klantdata, medische dossiers, financiële gegevens of bedrijfsgeheimen. Je bent niet langer afhankelijk van de uptime, prijswijzigingen of privacyvoorwaarden van een externe partij. De investering zit in de eigen hardware en het beheer, maar dat geeft je volledige controle. Voor sectoren zoals de zorg, juridische dienstverlening, financiële dienstverlening en productiebedrijven met gevoelige processen kan dit een gamechanger zijn.

## Hoe je dit kunt toepassen

**Als je een klein advocatenkantoor runt met vertrouwelijke cliëntdossiers.** Je zou Thunderbolt kunnen inzetten om een AI-assistent te draaien op een lokale server of een krachtige laptop. De AI kan dan documenten samenvatten, contracten doorzoeken of juridische precedenten vinden, zonder dat de data ooit je netwerk verlaat. Overweeg om te beginnen met een bestaande OpenAI-compatibele API zoals Claude of DeepSeek, maar dan via Thunderbolt als tussenlaag die de data lokaal houdt. Je kunt de SQLite-database gebruiken om een eigen ‘bron van waarheid’ op te bouwen met precedenten en standaardclausules.

**Als je een productiebedrijf bent met eigen productieprocessen en kwaliteitsdata.** Je kunt Thunderbolt koppelen aan lokale databases met productiegegevens, zoals sensordata, kwaliteitsrapporten en onderhoudsschema’s. De AI kan dan patronen herkennen in defecten of onderhoudsbehoeften, zonder dat die data naar een cloudprovider gaat. Een mogelijkheid is om een lokaal model te draaien dat alleen toegang heeft tot de eigen data, met apparaatniveau-toegangscontroles zodat alleen geautoriseerde medewerkers het systeem kunnen gebruiken.

**Als je een zorgpraktijk hebt met medische dossiers.** Thunderbolt biedt een manier om AI in te zetten voor het analyseren van patiëntgegevens, het voorstellen van behandelopties of het genereren van rapporten, terwijl de data volledig binnen je eigen infrastructuur blijft. De optionele end-to-end encryptie is hierbij essentieel om te voldoen aan privacyregelgeving zoals de AVG. Je zou kunnen overwegen om te starten met een kleine pilot, bijvoorbeeld een AI die alleen anonieme data gebruikt om te leren, en pas later gevoelige data toe te voegen.

**Als je een e-commerce bedrijf bent met klantdata en aankoopgeschiedenis.** Je kunt Thunderbolt gebruiken om een AI-recommendation engine te draaien die producten aanbeveelt op basis van lokale data, zonder dat klantprofielen naar externe servers worden gestuurd. Dit verkleint het risico op datalekken en geeft je meer controle over hoe de AI leert van het koopgedrag. Overweeg om de SQLite-database te gebruiken als lokale opslag voor klantsegmenten en aankooppatronen.

De praktische toepassing hangt af van jouw situatie, maar de kern is dat Thunderbolt de mogelijkheid biedt om AI in te zetten zonder concessies te doen aan databeveiliging en controle.

Bron: Arstechnica(https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

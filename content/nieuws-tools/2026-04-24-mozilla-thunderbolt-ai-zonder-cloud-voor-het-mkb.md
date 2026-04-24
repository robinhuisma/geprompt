---
title: "Mozilla Thunderbolt: AI zonder cloud voor het MKB"
date: 2026-04-24T06:04:23.238Z
tags: ["mozilla", "ai", "zelf-hostend", "privacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een AI-client voor bedrijven die eigen data lokaal willen houden."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla heeft Thunderbolt gelanceerd, een AI-client waarmee bedrijven zelfgehoste AI kunnen draaien zonder afhankelijk te zijn van clouddiensten van derden. Dit is geen nieuw AI-model, maar een front-end waarmee je eigen AI-infrastructuur kunt aansturen, inclusief lokale dataopslag en encryptie.

## Wat er aan de hand is

Mozilla, het bedrijf achter Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is een zogenoemde ‘sovereign AI client’ die draait op Haystack, een bestaand open source AI-framework. Thunderbolt laat gebruikers eenvoudig verbinding maken met verschillende AI-modellen via ACP-compatibele agents of OpenAI-compatibele API’s, waaronder Claude, Codex, DeepSeek en OpenCode. Het systeem kan integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt een offline SQLite-database als lokale ‘bron van waarheid’ voor het model. Mozilla benadrukt dat Thunderbolt optionele end-to-end encryptie en apparaatniveau-toegangscontroles biedt voor extra beveiliging. Het bedrijf richt zich hiermee op organisaties die zich zorgen maken over het lekken van data naar externe providers.

## Wat dit betekent

Voor Nederlandse MKB-ondernemers betekent dit een concrete optie om AI in te zetten zonder dat bedrijfsgevoelige informatie naar Amerikaanse of andere cloudservers verdwijnt. Waar tools als ChatGPT of Microsoft Copilot data verwerken op externe servers, belooft Thunderbolt volledige controle over de hele AI-stack. Dit is relevant voor bedrijven die werken met vertrouwelijke klantdata, medische dossiers, financiële gegevens of intellectueel eigendom. Het plaatst Mozilla in een andere hoek dan grote techbedrijven: niet als aanbieder van een AI-model, maar als leverancier van de infrastructuur om zelf modellen te beheren. Dit sluit aan bij een bredere trend van ‘self-sovereign AI’ waarbij bedrijven hun eigen data willen beheersen.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met privacygevoelige klantdata.** Je zou Thunderbolt kunnen gebruiken om een AI-assistent te draaien die alleen toegang heeft tot lokaal opgeslagen dossiers. Omdat de data niet naar een cloudprovider gaat, voldoe je mogelijk makkelijker aan AVG-verplichtingen. Een optie is om een lokale server te configureren met een open source model zoals Llama of Mistral, en Thunderbolt als interface te gebruiken voor het opvragen van samenvattingen of het genereren van rapporten.

**Als je een productiebedrijf bent met eigen technische documentatie.** Overweeg om Thunderbolt te koppelen aan een lokale database met handleidingen, specificaties en kwaliteitsrapporten. Medewerkers kunnen dan via een chatinterface vragen stellen over processen zonder dat die vragen via externe servers lopen. Je zou kunnen beginnen met een testopstelling op een enkele machine voordat je het uitrolt naar de hele organisatie.

**Als je een zorgpraktijk hebt die AI wil inzetten voor triage of dossieranalyse.** Thunderbolt biedt de mogelijkheid om een AI-model lokaal te draaien, wat essentieel is voor medische data die niet naar buiten mag. Een mogelijkheid is om het systeem te integreren met een bestaand EPD-systeem via de open protocollen die Thunderbolt ondersteunt. Let wel: je hebt technische kennis nodig om de infrastructuur op te zetten, of je schakelt een IT-partner in.

**Als je een marketingbureau bent dat AI gebruikt voor contentcreatie.** Hoewel cloudgebaseerde tools snel werken, kun je met Thunderbolt experimenteren met een lokale setup voor conceptgeneratie zonder dat je prompts en data naar externe partijen gaan. Je zou kunnen starten met een kleine lokale installatie voor vertrouwelijke campagnestrategieën, terwijl je voor alledaagse taken gewoon ChatGPT blijft gebruiken.

De praktische toepassing hangt af van jouw situatie. Thunderbolt is geen plug-and-play-oplossing; het vereist dat je eigen hardware en een AI-model beheert. Maar voor bedrijven die data-controle prioriteren, biedt het een serieus alternatief.

Bron: Arstechnica (https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

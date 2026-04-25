---
title: "Mozilla Thunderbolt: AI zonder cloudkosten voor het MKB"
date: 2026-04-25T14:04:52.693Z
tags: ["mozilla", "ai-client", "zelf-hostend", "datacontrole"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een AI-client voor zelfbeheerde infrastructuur zonder maandelijkse cloudkosten."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla heeft Thunderbolt gelanceerd, een AI-client waarmee bedrijven zelf AI-modellen kunnen draaien op hun eigen infrastructuur. Dit betekent dat je geen maandelijkse cloudkosten betaalt en volledige controle houdt over je bedrijfsdata.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is geen eigen AI-model, maar een front-end client die werkt met bestaande open source AI-frameworks. Thunderbolt is gebouwd op Haystack, een open source AI-framework waarmee je modulaire AI-pijplijnen kunt samenstellen uit zelfgekozen componenten. Mozilla noemt het een 'sovereign AI client' die draait op jouw eigen infrastructuur. Het systeem kan verbinding maken met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast integreert het met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale 'bron van waarheid'. Mozilla biedt optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor ondernemers betekent dit een alternatief voor cloudgebaseerde AI-diensten zoals ChatGPT Enterprise of Google Vertex AI. Waar die diensten maandelijkse abonnementskosten rekenen en je data naar externe servers sturen, draait Thunderbolt volledig op jouw eigen hardware. Dat is relevant voor bedrijven die werken met gevoelige klantdata, zoals in de zorg, juridische sector of financiële dienstverlening. Het model belooft dat je de volledige stack van AI-diensten onder controle hebt, van de onderliggende infrastructuur tot de gebruikte data. Dit kan een belangrijke overweging zijn voor bedrijven die zich zorgen maken over het lekken van data naar externe providers.

## Hoe je dit kunt toepassen

**Als je een adviesbureau runt met vertrouwelijke klantdossiers.** Je kunt Thunderbolt inzetten om een interne AI-assistent te draaien die alleen toegang heeft tot lokaal opgeslagen documenten. Overweeg om een server in je eigen kantoor te plaatsen met een lokaal AI-model, zodat geen enkele klantvraag of dossier ooit een externe server bereikt. Je zou kunnen beginnen met het installeren van Haystack en Thunderbolt op een bestaande server, en een SQLite-database inrichten als bron van waarheid voor veelgestelde vragen.

**Als je een webshop beheert en AI wilt gebruiken voor klantenservice.** Je kunt Thunderbolt koppelen aan een lokaal draaiend model om productaanbevelingen te doen of vragen over voorraad te beantwoorden, zonder dat klantdata naar een cloudprovider gaat. Een mogelijkheid is om het systeem te integreren met je eigen productdatabase via open protocollen, zodat de AI alleen data gebruikt die jij beheert. Dit kan vooral interessant zijn als je werkt met gepersonaliseerde aanbiedingen die je niet met derden wilt delen.

**Als je een team aanstuurt dat met gevoelige bedrijfsdata werkt.** Je kunt Thunderbolt gebruiken om een interne AI-tool te bouwen die medewerkers helpt bij het analyseren van rapporten of het opstellen van documenten, zonder dat data het bedrijfsnetwerk verlaat. Overweeg om de optionele end-to-end encryptie en apparaatniveau-toegangscontroles in te schakelen, zodat alleen geautoriseerde gebruikers toegang hebben tot de AI-functionaliteit. Je zou kunnen starten met een pilot voor één afdeling, zoals juridische zaken of HR.

**Als je een klein productiebedrijf bent en AI wilt gebruiken voor kwaliteitscontrole.** Je kunt Thunderbolt inzetten om een lokaal model te trainen op beelden van je productielijn, zonder dat die beelden naar een cloudprovider worden gestuurd. Een optie is om de SQLite-database te gebruiken om historische inspectieresultaten op te slaan, zodat het model steeds beter wordt in het herkennen van afwijkingen. Dit geeft je de flexibiliteit om AI in te zetten zonder afhankelijk te zijn van externe diensten.

Bron: Arstechnica(https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

---
title: "Mozilla Thunderbolt: eigen AI-infrastructuur zonder cloudafhankelijkheid"
date: 2026-04-26T10:04:23.460Z
tags: ["mozilla", "ai", "self-hosted", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client om eigen AI te draaien op zelfbeheerde servers."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een nieuwe client waarmee je AI-toepassingen kunt draaien op je eigen infrastructuur, zonder afhankelijk te zijn van clouddiensten van derden. Het is geen los AI-model, maar een front-end die je koppelt aan zelfgekozen componenten.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is een client die draait op het open source AI-framework Haystack. Hiermee kun je zelf modulaire AI-pijplijnen bouwen uit door jou gekozen componenten. Thunderbolt fungeert als een 'soevereine AI-client' die kan worden aangesloten op ACP-compatibele agents of OpenAI-compatibele API's, waaronder Claude, Codex, DeepSeek en OpenCode. Het systeem kan ook integreren met lokaal opgeslagen bedrijfsgegevens via open protocollen en gebruikt een offline SQLite-database als lokale 'bron van waarheid'. Mozilla benadrukt dat dit bedrijven helpt die zich zorgen maken over het lekken van data naar externe providers. Daarnaast biedt Thunderbolt optionele end-to-end encryptie en toegangscontroles op apparaatniveau. Let op: er is nog geen releasedatum of prijs bekendgemaakt.

## Wat dit betekent

Voor ondernemers en professionals in het MKB betekent dit dat er een nieuwe optie is om AI-toepassingen volledig in eigen beheer te draaien. Dit is vooral relevant als je werkt met gevoelige klantdata, bedrijfsgeheimen of andere informatie die je niet aan cloudproviders wilt toevertrouwen. Waar veel AI-oplossingen afhankelijk zijn van externe servers, geeft Thunderbolt je de controle over de hele keten: van het model tot de data. Dit kan een belangrijke overweging zijn voor bedrijven die voldoen aan strenge privacywetgeving of simpelweg geen afhankelijkheid van derden willen. De combinatie met open standaarden betekent ook dat je niet vastzit aan één leverancier.

## Hoe je dit kunt toepassen

**Als je een adviesbureau runt met vertrouwelijke klantdossiers.** Je zou Thunderbolt kunnen inzetten om een AI-assistent te bouwen die alleen toegang heeft tot lokaal opgeslagen documenten. Omdat de data niet naar een cloudprovider gaat, blijf je volledig compliant met privacyregels. Een mogelijkheid is om een lokale SQLite-database te gebruiken als bron van waarheid, zodat de AI altijd het laatste adviesrapport paraat heeft zonder dat informatie het kantoor verlaat.

**Als je een productiebedrijf bent met eigen procesdata.** Overweeg om Thunderbolt te koppelen aan een lokaal draaiend model zoals DeepSeek of Codex. Je kunt dan een AI-pijplijn bouwen die productiegegevens analyseert zonder dat die data naar externe servers gaat. Dit is interessant als je werkt met bedrijfseigen recepturen, ontwerpen of logistieke gegevens die je niet wilt delen.

**Als je een zorginstelling of juridische praktijk hebt.** De optionele end-to-end encryptie en apparaatniveau toegangscontroles maken Thunderbolt geschikt voor sectoren waar databeveiliging cruciaal is. Je zou een AI-client kunnen opzetten die alleen op beveiligde werkstations draait en medische dossiers of juridische stukken verwerkt zonder cloudinteractie. De praktische toepassing hangt af van jouw specifieke compliance-eisen.

**Als je een IT-dienstverlener bent die klanten bedient.** Je kunt Thunderbolt gebruiken om voor elke klant een aparte, geïsoleerde AI-omgeving op te zetten op hun eigen infrastructuur. Dit geeft hen de voordelen van AI zonder dat jij of zij afhankelijk worden van een externe cloudprovider. Een optie is om te starten met een pilot voor een klant die al een eigen server heeft staan.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

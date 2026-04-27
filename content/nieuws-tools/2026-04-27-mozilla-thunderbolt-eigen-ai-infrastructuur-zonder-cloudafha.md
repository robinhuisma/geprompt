---
title: "Mozilla Thunderbolt: eigen AI-infrastructuur zonder cloudafhankelijkheid"
date: 2026-04-27T18:03:41.532Z
tags: ["mozilla", "ai-infrastructuur", "zelfhosten", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client voor zelfbeheerde AI, zonder data naar derden te sturen."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een nieuwe client waarmee je als ondernemer je eigen AI-infrastructuur kunt opzetten en beheren, zonder dat je data naar externe clouddiensten hoeft te sturen. Het is geen los AI-model, maar een front-end die je koppelt aan zelfgekozen, lokaal draaiende AI-componenten. Voor bedrijven die privacy en controle over hun data serieus nemen, biedt dit een concreet alternatief voor de grote cloudspelers.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is geen eigen AI-model, maar een ‘sovereign AI client’ die draait op Haystack, een bestaand open source AI-framework. Met Thunderbolt kun je zelf bepalen welke AI-modellen en tools je gebruikt, en deze lokaal of op eigen servers draaien. Het systeem werkt met ACP-compatibele agents en OpenAI-compatibele API’s, zoals Claude, Codex, DeepSeek en OpenCode. Daarnaast integreert het met lokale bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale ‘bron van waarheid’. Mozilla benadrukt de optionele end-to-end encryptie en apparaatniveau-toegangscontroles. Dit is een direct antwoord op de groeiende zorg over datalekken bij het gebruik van externe AI-diensten.

## Wat dit betekent

Voor het MKB is dit relevant omdat het een manier biedt om AI in te zetten zonder afhankelijk te zijn van cloudproviders zoals OpenAI, Google of Microsoft. Dat betekent meer controle over gevoelige bedrijfsdata, zoals klantinformatie, financiële gegevens of bedrijfsgeheimen. Voor sectoren waar privacy cruciaal is – denk aan advocatuur, accountancy, zorg of HR – kan dit een doorslaggevend voordeel zijn. Het verlaagt ook de drempel voor bedrijven die AI willen inzetten maar huiverig zijn voor vendor lock-in of maandelijkse cloudkosten. Thunderbolt is geen plug-and-play product voor de gemiddelde ondernemer; het vereist technische kennis of een IT-partner om de infrastructuur op te zetten. Maar voor bedrijven die al een server of een sterke lokale computer hebben, is het een serieuze optie.

## Hoe je dit kunt toepassen

**Als je een adviesbureau runt met gevoelige klantdata.** Je kunt Thunderbolt inzetten om een interne AI-assistent te draaien die alleen toegang heeft tot jouw lokale bestanden en databases. Denk aan het automatisch samenvatten van dossiers of het genereren van conceptrapporten, zonder dat die data ooit een server van een derde partij bereikt. Overweeg om een medewerker met technische affiniteit te vragen de installatie te begeleiden, of schakel een externe IT-partner in die ervaring heeft met Haystack.

**Als je een klein productiebedrijf bent en AI wilt gebruiken voor kwaliteitscontrole.** Thunderbolt kan worden gekoppeld aan een lokaal model dat camerabeelden analyseert, terwijl alle data op je eigen netwerk blijft. Je zou kunnen beginnen met een proefopstelling op een krachtige laptop, waarbij je een open source model zoals DeepSeek lokaal draait. De SQLite-database fungeert dan als logboek voor afwijkingen, zonder dat je een cloudabonnement nodig hebt.

**Als je een team aanstuurt dat werkt met vertrouwelijke projectdocumentatie.** Thunderbolt biedt de mogelijkheid om een gedeelde, lokale AI-kennisbank op te zetten. Teamleden kunnen vragen stellen aan de AI over projectinformatie, terwijl de antwoorden alleen binnen jullie eigen netwerk blijven. Een optie is om te starten met een eenvoudige setup: een server met Thunderbolt en een lokaal model, gekoppeld aan een gedeelde netwerkschijf. De apparaatniveau-toegangscontroles zorgen dat alleen geautoriseerde medewerkers toegang hebben.

**Als je in de zorg werkt en AI wilt gebruiken voor het analyseren van patiëntgegevens.** Privacy is hier niet onderhandelbaar. Thunderbolt maakt het mogelijk om een AI-pipeline te draaien die alleen lokale, geanonimiseerde data gebruikt. Je zou kunnen overleggen met je ICT-afdeling of een gespecialiseerde leverancier of Thunderbolt in combinatie met een lokaal model zoals OpenClaw een oplossing biedt voor het herkennen van patronen in behandeldata, zonder dat er data de organisatie verlaat.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

---
title: "Mozilla Thunderbolt: zelf-hostende AI voor het MKB zonder techreuzen"
date: 2026-04-23T22:03:10.924Z
tags: ["mozilla", "thunderbolt", "zelf-hostende ai", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client om eigen AI-infrastructuur te beheren, zonder afhankelijkheid van clouddiensten."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla heeft Thunderbolt gelanceerd, een client waarmee bedrijven hun eigen AI-infrastructuur kunnen beheren zonder afhankelijk te zijn van clouddiensten van techreuzen. Dit betekent dat je als ondernemer meer controle krijgt over je data en minder hoeft te betalen voor externe AI-abonnementen.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is geen eigen AI-model, maar een front-end client die draait op een zelf-gehoste infrastructuur. Thunderbolt is gebouwd op Haystack, een open source AI-framework waarmee je modulaire AI-pijplijnen kunt samenstellen uit zelfgekozen componenten. Mozilla noemt Thunderbolt een 'soevereine AI-client'. Het systeem werkt met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, OpenClaw, DeepSeek en OpenCode. Daarnaast kan het integreren met lokaal opgeslagen bedrijfsdata via open protocollen en een offline SQLite-database gebruiken als lokale 'bron van waarheid'. Mozilla belooft optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor het MKB is dit relevant omdat het de afhankelijkheid van grote techbedrijven zoals OpenAI, Google of Microsoft verkleint. In plaats van data naar externe clouddiensten te sturen, kun je alles lokaal draaien. Dat is niet alleen veiliger, maar geeft ook meer controle over kosten en prestaties. Voor bedrijven die werken met gevoelige klantdata, zoals in de zorg, financiële dienstverlening of juridische sector, kan dit een uitkomst zijn. Je betaalt niet per API-call, maar investeert eenmalig in je eigen infrastructuur. Wel vraagt dit om technische kennis of een IT-partner die de boel kan opzetten en onderhouden.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met meerdere medewerkers** en je werkt met vertrouwelijke financiële gegevens van klanten. Je zou Thunderbolt kunnen inzetten om een lokale AI-assistent te draaien die documenten samenvat, zonder dat data je server verlaat. Overweeg om te beginnen met een kleine testopstelling: installeer Haystack op een eigen server, koppel Thunderbolt als client, en laat de AI alleen toegang krijgen tot een offline SQLite-database met geanonimiseerde voorbeelddata.

**Als je een webshop beheert en klantvragen automatisch wilt afhandelen** zonder dat gesprekken via een externe AI-provider lopen. Een mogelijkheid is om Thunderbolt te verbinden met een lokaal model zoals DeepSeek of OpenClaw, en de client te integreren met je eigen klantenservicesysteem via open protocollen. Je zou kunnen testen met een beperkt aantal veelgestelde vragen, zodat je eerst de betrouwbaarheid en snelheid kunt beoordelen.

**Als je in de zorg werkt en AI wilt gebruiken voor het analyseren van medische dossiers** maar geen data wilt delen met clouddiensten. Thunderbolt biedt dan een manier om alles lokaal te houden. Je zou kunnen overleggen met je IT-afdeling of een externe specialist om een proof-of-concept op te zetten met een offline database en een lokaal model. Let wel: zorg dat de encryptie en toegangscontroles goed zijn ingesteld voordat je met echte patiëntdata gaat werken.

**Als je een team aanstuurt dat veel met interne documenten werkt**, zoals handleidingen, offertes of rapporten. Je zou Thunderbolt kunnen gebruiken om een AI-assistent te maken die deze documenten doorzoekt en samenvat, zonder dat de data naar buiten gaat. Een optie is om te starten met een kleine set documenten in een SQLite-database en te kijken hoe goed de AI presteert met jouw specifieke terminologie.

De praktische toepassing hangt af van jouw situatie. Thunderbolt is nieuw en vereist technische inrichting, maar voor bedrijven die dataveiligheid en onafhankelijkheid belangrijk vinden, is het een serieuze optie om te verkennen.

Bron: Arstechnica (https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

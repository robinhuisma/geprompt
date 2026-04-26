---
title: "Mozilla Thunderbolt: eigen AI-infrastructuur zonder cloudafhankelijkheid"
date: 2026-04-26T02:03:52.424Z
tags: ["mozilla", "ai-infrastructuur", "zelfhosten", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Thunderbelt is een client voor zelfbeheerde AI, ideaal voor MKB dat data wil beschermen."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla heeft Thunderbolt gelanceerd, een client waarmee je als ondernemer je eigen AI-infrastructuur kunt draaien zonder afhankelijk te zijn van clouddiensten van derden. Dit betekent dat je de controle houdt over je data, modellen en kosten, wat vooral relevant is voor bedrijven die privacy en eigenaarschap belangrijk vinden.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is geen eigen AI-model of browserextensie, maar een front-end client die draait op Haystack, een bestaand open source AI-framework. Thunderbolt fungeert als een 'soevereine AI-client' waarmee je zelf samengestelde AI-pijplijnen kunt bouwen uit componenten naar keuze. Het systeem werkt met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast kan het integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale 'bron van waarheid'. Mozilla benadrukt dat Thunderbolt optionele end-to-end encryptie en toegangscontroles op apparaatniveau biedt. Dit is een direct antwoord op de groeiende zorg bij bedrijven over het weglekken van data naar externe cloudproviders.

## Wat dit betekent

Voor MKB-ondernemers betekent Thunderbolt dat je AI-functionaliteit kunt inzetten zonder dat je bedrijfsgevoelige informatie naar servers van OpenAI, Google of Microsoft hoeft te sturen. Dit is vooral relevant voor sectoren zoals de juridische sector, de gezondheidszorg, financiële dienstverlening en productiebedrijven die werken met vertrouwelijke klantgegevens, ontwerpen of bedrijfsprocessen. Waar grote bedrijven al eigen AI-infrastructuur hebben, was dit voor kleinere organisaties vaak te complex of duur. Thunderbolt verlaagt de drempel door een gebruiksvriendelijke client te bieden die je zelf kunt hosten op eigen hardware of een eigen server. De combinatie van open standaarden en lokale dataopslag geeft je de flexibiliteit om te kiezen welke modellen je gebruikt en hoe je data wordt verwerkt. Dit past in een bredere trend van 'sovereign AI', waarbij bedrijven en overheden steeds meer controle willen over hun AI-systemen.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantgegevens**, kun je Thunderbolt overwegen om een AI-assistent te bouwen die alleen op jullie eigen server draait. Je zou bijvoorbeeld een model kunnen inzetten dat helpt bij het opstellen van contracten of het beantwoorden van fiscale vragen, zonder dat die data ooit je netwerk verlaat. Een mogelijke opzet is om een lokale SQLite-database te vullen met geanonimiseerde voorbeeldcasussen en het model via de Haystack-pijplijn te laten refereren aan die data.

**Als je een klein productiebedrijf bent dat werkt met eigen ontwerpen en specificaties**, kun je Thunderbolt gebruiken om een interne AI-kennisbank op te zetten. Je zou de client kunnen koppelen aan een lokaal opgeslagen set technische documenten en handleidingen. Medewerkers kunnen dan via een eenvoudige interface vragen stellen over productieprocessen, zonder dat ontwerpgegevens naar een cloudprovider gaan. De optionele encryptie en toegangscontroles bieden extra zekerheid dat alleen bevoegde personen bij die informatie kunnen.

**Als je een eenpitter of zzp'er bent die AI wil gebruiken voor data-analyse maar geen data wil delen**, kun je Thunderbolt op een eigen server of zelfs een krachtige laptop draaien. Je zou kunnen starten met een klein, lokaal model zoals een van de OpenCode-varianten en dat via de OpenAI-compatibele API aansluiten. De offline SQLite-database fungeert dan als je persoonlijke kennisbank, bijvoorbeeld met klantnotities of marktanalyses. Dit geeft je de voordelen van AI zonder dat je afhankelijk bent van een abonnement op een clouddienst.

**Als je een IT-adviseur bent die meerdere MKB-klanten begeleidt**, kun je Thunderbolt als standaardoplossing voorstellen voor bedrijven die worstelen met dataprivacy. Je zou een proof of concept kunnen opzetten waarbij je een klant helpt om een eigen AI-pijplijn te bouwen met Haystack en Thunderbolt als front-end. De flexibiliteit om verschillende modellen en data-integraties te kiezen, maakt het een schaalbare optie voor uiteenlopende branches.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

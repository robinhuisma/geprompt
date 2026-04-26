---
title: "Mozilla Thunderbolt: eigen AI-infrastructuur zonder cloudafhankelijkheid"
date: 2026-04-26T18:04:38.257Z
tags: ["mozilla", "ai-infrastructuur", "zelf-hostend", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client voor zelfbeheerde AI, ideaal voor MKB dat data wil beschermen."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een nieuwe client waarmee je als ondernemer AI-toepassingen kunt draaien op je eigen infrastructuur, zonder afhankelijk te zijn van externe clouddiensten. Dit betekent dat je de controle houdt over je data en processen, wat vooral belangrijk is als je werkt met gevoelige klant- of bedrijfsinformatie.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is geen eigen AI-model of browser, maar een front-end client die draait op Haystack, een bestaand open source AI-framework. Thunderbolt fungeert als een “soevereine AI-client” waarmee je zelf samengestelde AI-pijplijnen kunt bouwen uit componenten naar keuze. Het systeem kan verbinding maken met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast integreert het met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale “bron van waarheid” voor het model. Mozilla benadrukt dat Thunderbolt optionele end-to-end encryptie en toegangscontroles op apparaatniveau biedt voor extra veiligheid. Dit is een direct antwoord op de groeiende zorgen over datalekken bij het gebruik van cloud-gebaseerde AI-diensten.

## Wat dit betekent

Voor het MKB betekent Thunderbolt dat je AI kunt inzetten zonder je data te delen met externe partijen zoals OpenAI of Google. Dit is cruciaal voor bedrijven die werken met vertrouwelijke klantgegevens, zoals zorginstellingen, advocatenkantoren of financiële dienstverleners. Waar je voorheen afhankelijk was van clouddiensten met onduidelijke databeveiliging, kun je nu een eigen AI-infrastructuur opzetten die volledig onder jouw controle staat. Dit verlaagt de drempel voor bedrijven die AI willen gebruiken maar huiverig zijn voor de privacyrisico’s. Het betekent ook dat je niet gebonden bent aan één leverancier; je kunt zelf kiezen welke AI-modellen en componenten je gebruikt, wat flexibiliteit en toekomstbestendigheid biedt.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met meerdere klanten** die elk hun eigen vertrouwelijke gegevens aanleveren, kun je Thunderbolt gebruiken om een AI-assistent te bouwen die alleen werkt met lokaal opgeslagen data. Je zou bijvoorbeeld een pipeline kunnen opzetten die automatisch jaarrekeningen analyseert en samenvattingen genereert, zonder dat de data ooit je eigen server verlaat. Overweeg om te starten met een kleine testomgeving waarin je een lokaal model draait en de SQLite-database gebruikt als bron voor een specifieke klant.

**Als je een webshop runt** die klantgegevens verwerkt voor gepersonaliseerde aanbevelingen, kun je met Thunderbolt een AI-systeem bouwen dat alleen werkt met je eigen database. Je zou een model kunnen koppelen aan je lokale productcatalogus en klantgeschiedenis, zodat aanbevelingen op maat worden gegenereerd zonder dat gevoelige data naar de cloud gaat. Een mogelijke aanpak is om te beginnen met een eenvoudige pipeline die productbeschrijvingen optimaliseert op basis van lokale verkoopdata.

**Als je een team aanstuurt** dat werkt met bedrijfsgeheimen of intellectueel eigendom, kun je Thunderbolt inzetten voor interne kennismanagement. Je zou een AI-assistent kunnen maken die antwoorden geeft op basis van je eigen documentatie, handleidingen en projectbestanden, allemaal lokaal opgeslagen. Overweeg om een pilot te draaien met een klein team, waarbij je een lokaal model koppelt aan een gedeelde SQLite-database met projectinformatie.

**Als je in de zorg werkt** en te maken hebt met medische dossiers, is Thunderbolt een manier om AI te gebruiken zonder de strenge privacyregels te overtreden. Je zou een systeem kunnen opzetten dat artsen helpt bij het samenvatten van patiëntendossiers, waarbij alle data lokaal blijft en voldoet aan de AVG. Een optie is om te starten met een testomgeving waarin je een model traint op geanonimiseerde data voordat je het inzet voor echte dossiers.

Bron: Arstechnica(https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

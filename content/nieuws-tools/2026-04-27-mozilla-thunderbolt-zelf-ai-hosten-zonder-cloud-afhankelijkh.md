---
title: "Mozilla Thunderbolt: zelf AI hosten zonder cloud-afhankelijkheid"
date: 2026-04-27T10:04:51.675Z
tags: ["mozilla", "ai", "self-hosted", "privacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client om eigen AI-infrastructuur te beheren zonder externe clouddiensten."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla heeft Thunderbolt aangekondigd, een client waarmee bedrijven hun eigen AI-infrastructuur kunnen beheren zonder afhankelijk te zijn van clouddiensten van derden. Het is geen nieuw AI-model, maar een front-end die werkt met bestaande open-source tools, zodat je de controle houdt over je data en processen.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, richt zich met Thunderbolt op de zakelijke AI-markt. Het product is geen eigen AI-model, maar een client die draait op Haystack, een bestaand open-source AI-framework. Hiermee kunnen gebruikers modulaire AI-pijplijnen bouwen uit zelfgekozen componenten. Thunderbolt fungeert als een 'soevereine AI-client' die kan worden aangesloten op elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Het systeem integreert met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt een offline SQLite-database als lokale 'bron van waarheid'. Mozilla benadrukt dat dit bedrijven helpt datalekken naar externe providers te voorkomen. Optioneel biedt Thunderbolt end-to-end-encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor Nederlandse ondernemers en professionals betekent dit een concrete optie om AI-toepassingen te gebruiken zonder gevoelige data naar Amerikaanse of andere buitenlandse clouddiensten te sturen. Dit is vooral relevant voor bedrijven in sectoren met strenge privacyregels, zoals de zorg, financiële dienstverlening en de juridische sector. Waar veel AI-tools afhankelijk zijn van externe API's, geeft Thunderbolt de mogelijkheid om de volledige stack lokaal te beheren. Dat verlaagt het risico op datalekken en vergroot de controle over compliance. Het is een verschuiving van 'AI als dienst' naar 'AI als infrastructuur', wat past bij de groeiende vraag naar digitale soevereiniteit.

## Hoe je dit kunt toepassen

**Als je een klein advocatenkantoor runt met vertrouwelijke cliëntdossiers.** Je zou Thunderbolt kunnen gebruiken om een AI-assistent te draaien die documenten samenvat en contracten controleert, zonder dat de data ooit je eigen server verlaat. Overweeg om een lokale SQLite-database in te richten als bron van waarheid voor eerdere zaken, zodat de AI contextueel relevante antwoorden geeft zonder cloudafhankelijkheid.

**Als je een mkb-bedrijf in de zorg leidt en werkt met patiëntgegevens.** Thunderbolt biedt een manier om AI in te zetten voor het analyseren van medische dossiers of het plannen van afspraken, terwijl je voldoet aan de AVG. Een mogelijkheid is om het systeem te koppelen aan je eigen database via open protocollen, zodat de AI alleen toegang heeft tot geanonimiseerde of gepseudonimiseerde data.

**Als je een productiebedrijf runt met eigen productiegegevens en kwaliteitsrapporten.** Je zou Thunderbolt kunnen inzetten om een AI-pijplijn te bouwen die defecten voorspelt op basis van historische data. Omdat alles lokaal draait, blijven bedrijfsgeheimen en procesinformatie beschermd. Overweeg om te starten met een pilot op een aparte server, waarbij je de AI koppelt aan je ERP-systeem via de ACP-compatibele interface.

**Als je een IT-afdeling hebt die al werkt met open-source tools.** Thunderbolt is gebouwd op Haystack, een framework dat je mogelijk al kent. Je zou de client kunnen integreren in je bestaande infrastructuur en zelf bepalen welke AI-modellen je gebruikt, van lokale open-source modellen tot API's van Claude of DeepSeek. Dit geeft flexibiliteit zonder vendor lock-in.

**Als je een consultancybureau bent dat advies geeft over AI-implementatie.** Thunderbolt is een concreet voorbeeld van hoe je klanten kunt helpen met een soevereine AI-oplossing. Je zou het kunnen presenteren als een alternatief voor cloudgebaseerde AI, met name voor klanten in gereguleerde markten. Overweeg om een demo-omgeving op te zetten waarin je laat zien hoe een lokale SQLite-database als bron van waarheid werkt.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

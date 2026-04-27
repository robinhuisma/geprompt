---
title: "Mozilla Thunderbolt: zelf AI hosten zonder techgiganten"
date: 2026-04-27T14:04:38.750Z
tags: ["mozilla", "zelf-hostende ai", "mkb", "dataprivacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client om eigen AI te draaien op eigen servers, zonder cloudafhankelijkheid."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla’s nieuwe Thunderbolt-client maakt het mogelijk om AI-toepassingen te draaien op je eigen servers, zonder dat je data naar Amerikaanse techreuzen hoeft te sturen. Dit is geen nieuw AI-model, maar een front-end die je zelf installeert en beheert, gebaseerd op het open-source Haystack-framework.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Het is geen eigen AI-model of browserextensie, maar een client voor bedrijven die hun eigen AI-infrastructuur willen hosten. Thunderbolt werkt samen met het open-source Haystack-framework, waarmee je modulaire AI-pijplijnen kunt bouwen uit zelfgekozen componenten. Mozilla noemt het een ‘sovereign AI client’. Het systeem ondersteunt ACP-compatibele agents en OpenAI-compatibele API’s, waaronder Claude, Codex, OpenClaw, DeepSeek en OpenCode. Daarnaast kan het integreren met lokaal opgeslagen bedrijfsdata via open protocollen en een offline SQLite-database gebruiken als lokale ‘bron van waarheid’. Mozilla biedt optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor MKB-ondernemers betekent dit een concrete optie om AI te gebruiken zonder afhankelijk te zijn van clouddiensten van grote Amerikaanse partijen. Dit is relevant voor bedrijven die werken met gevoelige data, zoals klantinformatie, financiële gegevens of bedrijfsgeheimen. Waar je eerder moest kiezen tussen het gemak van cloud-AI en het risico van datalekken, biedt Thunderbolt een tussenweg: je beheert de volledige stack zelf, van model tot dataopslag. Dit sluit aan bij een bredere trend waarin bedrijven meer controle willen over hun AI-infrastructuur, mede door strengere privacywetgeving en geopolitieke spanningen.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantgegevens.** Je zou Thunderbolt kunnen installeren op een eigen server in je kantoor. Het systeem kan dan AI gebruiken om documenten te analyseren of sjablonen te genereren, zonder dat data ooit je netwerk verlaat. Een mogelijkheid is om een lokaal model te koppelen aan je SQLite-database met klantdossiers, zodat de AI alleen toegang heeft tot data die jij beheert.

**Als je een klein productiebedrijf bent dat eigen processen wil optimaliseren.** Overweeg om Thunderbolt te gebruiken als interface voor een AI-agent die productieplanning of voorraadbeheer ondersteunt. Omdat het systeem modulair is, kun je zelf kiezen welk model je gebruikt, bijvoorbeeld DeepSeek voor kostenefficiëntie of Claude voor complexere analyses. Je zou kunnen beginnen met een eenvoudige pijplijn die productiegegevens uit je eigen database haalt en suggesties doet voor efficiëntere routes.

**Als je een zorgpraktijk hebt waar privacy cruciaal is.** Je zou Thunderbolt kunnen inzetten voor het anoniem verwerken van patiëntendossiers, bijvoorbeeld voor het genereren van samenvattingen of het herkennen van patronen. Omdat alle data lokaal blijft en optioneel versleuteld wordt, voldoe je aan strenge privacyregels. Een optie is om te starten met een offline SQLite-database als lokale bron, zodat de AI nooit afhankelijk is van een internetverbinding.

**Als je een freelancer bent die AI gebruikt voor creatief werk.** Je kunt Thunderbolt draaien op een krachtige laptop of een kleine server. Het systeem werkt met OpenAI-compatibele API’s, dus je kunt bestaande tools zoals Codex of OpenCode blijven gebruiken, maar dan zonder dat je data naar een externe cloud gaat. Overweeg om een lokale kopie van je projectbestanden te koppelen, zodat de AI altijd actuele informatie heeft.

Bron: Arstechnica(https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

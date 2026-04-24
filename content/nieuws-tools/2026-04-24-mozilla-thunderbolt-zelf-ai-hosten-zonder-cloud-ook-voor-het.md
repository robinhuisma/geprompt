---
title: "Mozilla Thunderbolt: zelf AI hosten zonder cloud, ook voor het MKB"
date: 2026-04-24T14:04:26.474Z
tags: ["mozilla", "ai", "self-hosted", "privacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client om zelf AI te draaien op eigen infrastructuur, zonder cloudafhankelijkheid."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla heeft Thunderbolt aangekondigd, een client waarmee bedrijven zelf AI kunnen draaien op hun eigen infrastructuur, zonder afhankelijk te zijn van clouddiensten van derden. Dit betekent dat je als ondernemer de controle houdt over je data en kosten, zonder dat je een groot techbedrijf hoeft te betalen voor AI-verwerking.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt gelanceerd. Het is geen eigen AI-model, maar een front-end client die werkt met bestaande open source AI-frameworks. Thunderbolt is gebouwd op Haystack, een open source AI-framework waarmee je zelf modulaire AI-pijplijnen kunt bouwen. De client belooft compatibel te zijn met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, OpenClaw, DeepSeek en OpenCode. Het systeem kan ook integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt een offline SQLite-database als lokale 'bron van waarheid'. Mozilla noemt Thunderbolt een 'sovereign AI client' en biedt optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor Nederlandse MKB'ers betekent dit een concrete optie om AI te gebruiken zonder dat bedrijfsdata naar externe cloudproviders gaat. Dit is relevant voor bedrijven die werken met gevoelige klantgegevens, zoals in de zorg, financiële dienstverlening of juridische sector. Waar je eerder afhankelijk was van de clouddiensten van grote techbedrijven, kun je met Thunderbolt de hele AI-stack zelf beheren. Dit geeft niet alleen meer privacy, maar ook meer controle over de kosten: je betaalt alleen voor de hardware die je zelf inzet, niet per API-call of per gebruiker bij een externe partij. Het is een verschuiving van 'AI as a service' naar 'AI as infrastructure', wat vooral interessant is voor bedrijven die schaalbaarheid en voorspelbare kosten belangrijk vinden.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantdata.** Je zou kunnen overwegen om Thunderbolt te installeren op een eigen server of een dedicated mini-pc in je kantoor. Omdat de client lokaal draait en een offline database gebruikt, blijven alle klantgegevens binnen je eigen netwerk. Een mogelijkheid is om een lokaal AI-model te koppelen dat helpt bij het samenvatten van dossiers of het genereren van standaardbrieven, zonder dat er data naar buiten gaat.

**Als je een webshop hebt met een eigen productdatabase.** Je kunt Thunderbolt inzetten om een AI-chatbot te draaien die klantvragen beantwoordt op basis van je eigen productinformatie. Omdat de client integreert met lokaal opgeslagen data via open protocollen, kun je eenvoudig je productcatalogus koppelen. Overweeg om een goedkope server aan te schaffen en Thunderbolt te combineren met een klein open source model voor een volledig offline klantenservice-oplossing.

**Als je een team aanstuurt dat werkt met bedrijfsgeheimen of intellectueel eigendom.** Je zou Thunderbolt kunnen gebruiken als centrale AI-interface voor je team, waarbij alle prompts en antwoorden lokaal blijven. Omdat Mozilla optionele end-to-end encryptie en toegangscontroles biedt, kun je per medewerker instellen wie toegang heeft tot welke AI-functionaliteit. Een optie is om een aparte server in te richten alleen voor AI-verwerking, zodat je de controle houdt over wie wat mag doen.

**Als je in de zorg werkt en te maken hebt met AVG-gevoelige patiëntgegevens.** Thunderbolt biedt een manier om AI in te zetten voor bijvoorbeeld het structureren van patiëntendossiers of het genereren van samenvattingen, zonder dat data de organisatie verlaat. Omdat de client werkt met een lokale SQLite-database, kun je die koppelen aan je eigen systemen. Een mogelijkheid is om te starten met een pilot op een aparte, beveiligde computer voordat je het uitrolt.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

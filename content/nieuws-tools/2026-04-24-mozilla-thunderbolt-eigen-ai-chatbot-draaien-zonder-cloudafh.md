---
title: "Mozilla Thunderbolt: eigen AI-chatbot draaien zonder cloudafhankelijkheid"
date: 2026-04-24T10:04:56.454Z
tags: ["mozilla", "thunderbolt", "zelfhosten", "ai"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client voor zelfgehoste AI, waarmee MKB’ers eigen chatbots draaien zonder OpenAI of Google."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een nieuwe client waarmee je als ondernemer een eigen AI-chatbot kunt draaien op je eigen infrastructuur, zonder dat je afhankelijk bent van clouddiensten van OpenAI, Google of andere externe partijen. Het is een front-end die werkt met open-source AI-componenten, zodat jij bepaalt waar je data blijft en welke modellen je gebruikt.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is geen eigen AI-model, maar een client die draait op Haystack, een bestaand open-source AI-framework. Thunderbolt fungeert als een ‘soevereine AI-client’ waarmee je zelfgekozen AI-modellen kunt aansluiten, zoals Claude, DeepSeek of lokale open-source modellen. Het systeem werkt met elke ACP-compatibele agent of OpenAI-compatibele API. Daarnaast kan Thunderbolt integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale ‘bron van waarheid’. Mozilla benadrukt dat dit bedrijven controle geeft over de hele AI-stack, wat belangrijk is voor wie zich zorgen maakt over datalekken naar externe aanbieders. Optioneel biedt Thunderbolt end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor MKB-ondernemers betekent dit een alternatief voor de afhankelijkheid van grote techbedrijven. Waar je nu vaak data naar de cloud van OpenAI of Google stuurt om een chatbot te gebruiken, kun je met Thunderbolt alles op eigen servers of een lokale computer draaien. Dit is vooral relevant voor bedrijven die werken met gevoelige klantdata, zoals in de zorg, financiële dienstverlening of juridische sector. De drempel wordt lager omdat Thunderbolt gebruikmaakt van bestaande open-source tools, maar het vereist wel dat je eigen IT-infrastructuur hebt of een hostingpartner die dit voor je beheert. De kosten bestaan uit je eigen hardware of serverhuur, plus eventuele licenties voor de AI-modellen die je kiest.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantgegevens**, kun je overwegen om Thunderbolt in te zetten voor een interne AI-assistent die vragen beantwoordt over belastingaangiftes of jaarrekeningen. Omdat alles lokaal draait, blijven de gegevens van je klanten binnen je eigen netwerk. Je zou kunnen beginnen met een kleine server of een krachtige desktop, waarop je een open-source model zoals DeepSeek installeert en via Thunderbolt een chatinterface maakt.

**Als je een webshop hebt met een eigen productdatabase**, kun je Thunderbolt gebruiken om een chatbot te bouwen die klanten helpt met productvragen, zonder dat je data naar een externe partij stuurt. Het systeem kan via de SQLite-database je productinformatie als bron gebruiken. Een mogelijkheid is om te starten met een testopstelling op een lokale computer, voordat je het uitrolt op een eigen server.

**Als je een team aanstuurt dat werkt met bedrijfsdocumentatie**, kun je Thunderbolt inzetten als een interne kennisbank. Medewerkers kunnen vragen stellen over procedures, handleidingen of beleidsstukken, en het antwoord wordt gegenereerd op basis van lokaal opgeslagen bestanden. Overweeg om eerst een pilot te draaien met een klein aantal documenten om te zien hoe goed de integratie werkt.

**Als je in de zorg werkt en patiëntgegevens verwerkt**, is Thunderbolt een optie om AI-functionaliteit te gebruiken zonder dat data de organisatie verlaat. Je zou kunnen experimenteren met een geïsoleerde omgeving, los van het hoofdsysteem, om te testen of de client voldoet aan de privacy-eisen. De optionele end-to-end encryptie biedt hier een extra laag.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

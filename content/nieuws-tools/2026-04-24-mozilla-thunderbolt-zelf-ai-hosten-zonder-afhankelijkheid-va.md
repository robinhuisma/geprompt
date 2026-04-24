---
title: "Mozilla Thunderbolt: zelf AI hosten zonder afhankelijkheid van big tech"
date: 2026-04-24T18:04:18.202Z
tags: ["mozilla", "thunderbolt", "ai", "self-hosted"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client om eigen AI-infrastructuur te beheren, met focus op privacy en data-controle."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla heeft Thunderbolt gelanceerd, een client waarmee bedrijven hun eigen AI-infrastructuur kunnen beheren zonder afhankelijk te zijn van clouddiensten van grote techbedrijven. Dit is geen nieuw AI-model, maar een front-end die draait op bestaande open-source frameworks, gericht op privacy en kostenbesparing.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd als een 'sovereign AI client'. Het product is geen eigen AI-model, maar een gebruikersinterface die bovenop Haystack draait, een bestaand open-source AI-framework. Hiermee kunnen gebruikers zelf bepalen welke AI-modellen en data ze gebruiken. Thunderbolt is compatibel met ACP-compatibele agenten en OpenAI-compatibele API's, waaronder Claude, Codex, DeepSeek en OpenCode. Het systeem kan ook integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt een offline SQLite-database als lokale 'bron van waarheid'. Mozilla benadrukt dat Thunderbolt optionele end-to-end encryptie en toegangscontroles op apparaatniveau biedt.

## Wat dit betekent

Voor MKB-ondernemers betekent dit een alternatief voor het gebruik van AI-diensten van grote partijen als OpenAI, Google of Microsoft. Waar die diensten vaak data naar hun eigen servers sturen, kunnen bedrijven met Thunderbolt de volledige controle houden over hun data en de gebruikte AI-modellen. Dit is vooral relevant voor sectoren waar privacy en databeveiliging cruciaal zijn, zoals de juridische sector, de zorg of de financiële dienstverlening. Het stelt kleinere bedrijven in staat om zelf AI te hosten zonder dat ze een groot IT-team nodig hebben, omdat Thunderbolt als een gebruiksvriendelijke laag bovenop bestaande infrastructuur werkt.

## Hoe je dit kunt toepassen

**Als je een adviesbureau runt met gevoelige klantdata.** Je kunt Thunderbolt inzetten om AI-assistenten te draaien die alleen toegang hebben tot lokaal opgeslagen documenten. Overweeg om een lokale server met een klein open-source model in te richten, zoals een variant van Llama of Mistral, en Thunderbolt als interface te gebruiken. Zo voorkom je dat vertrouwelijke informatie via een externe cloudprovider wordt verwerkt. Je zou kunnen beginnen met een testopstelling waarbij je een paar veelgestelde vragen uit je kennisdatabase laat beantwoorden door het systeem.

**Als je een webshop runt en klantdata wilt analyseren zonder deze te delen.** Met Thunderbolt kun je een AI-pipeline bouwen die aankooppatronen analyseert op basis van je eigen database, zonder dat data naar buiten gaat. Een mogelijkheid is om het systeem te koppelen aan je SQLite-database met orderhistorie en het model te vragen om trends te identificeren. Je kunt dan bijvoorbeeld segmentaties maken voor marketingcampagnes, terwijl alle data op je eigen server blijft.

**Als je een team aanstuurt dat werkt met vertrouwelijke bedrijfsprocessen.** Denk aan het automatiseren van interne workflows, zoals het samenvatten van vergaderverslagen of het genereren van rapportages. Je zou Thunderbolt kunnen configureren om alleen toegang te geven tot specifieke mappen met documenten, met device-level toegangscontroles. Overweeg om een pilot te draaien met één afdeling, bijvoorbeeld de juridische of HR-afdeling, om te testen hoe het systeem omgaat met gevoelige data.

**Als je in de zorg werkt en aan AVG-compliance moet voldoen.** Thunderbolt biedt de mogelijkheid om AI lokaal te draaien, wat helpt om te voldoen aan strenge privacyregels. Je zou kunnen overwegen om het systeem te gebruiken voor het anonimiseren van patiëntgegevens voordat ze worden geanalyseerd, of voor het genereren van samenvattingen van medische dossiers zonder dat data de organisatie verlaat. Begin met een kleine dataset en test of de encryptie en toegangscontroles werken zoals verwacht.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

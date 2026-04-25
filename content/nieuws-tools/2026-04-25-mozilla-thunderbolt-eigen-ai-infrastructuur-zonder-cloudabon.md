---
title: "Mozilla Thunderbolt: eigen AI-infrastructuur zonder cloudabonnement"
date: 2026-04-25T18:04:20.299Z
tags: ["mozilla", "ai", "zelfhosten", "mkb"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een client voor zelfbeheerde AI, zonder dure cloudabonnementen."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla’s nieuwe Thunderbolt-client stelt bedrijven in staat om AI-toepassingen te draaien op hun eigen infrastructuur, zonder afhankelijk te zijn van clouddiensten van derden. Dit betekent dat je als ondernemer gevoelige bedrijfsdata niet meer hoeft te delen met externe AI-aanbieders, terwijl je wel gebruik kunt maken van krachtige AI-modellen.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is geen eigen AI-model, maar een front-end client die draait op Haystack, een bestaand open source AI-framework. Thunderbolt fungeert als een ‘soevereine AI-client’ waarmee gebruikers zelf kunnen bepalen welke AI-modellen en data ze gebruiken. Het systeem ondersteunt ACP-compatibele agents en OpenAI-compatibele API’s, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast kan Thunderbolt integreren met lokaal opgeslagen bedrijfsdata via open protocollen en gebruikt het een offline SQLite-database als lokale ‘bron van waarheid’. Mozilla benadrukt dat Thunderbolt optionele end-to-end encryptie en toegangscontroles op apparaatniveau biedt. Dit is een verschuiving van de trend waarbij AI-vrijwel altijd via de cloud wordt aangeboden, naar een model waarbij bedrijven de volledige controle houden over hun data en infrastructuur.

## Wat dit betekent

Voor het MKB is dit relevant omdat het de drempel verlaagt om AI veilig en zelfstandig in te zetten. Waar cloud-AI vaak maandelijkse abonnementskosten met zich meebrengt en data naar externe servers stuurt, biedt Thunderbolt een alternatief: je draait alles op je eigen hardware. Dit is vooral belangrijk voor bedrijven die werken met gevoelige klantgegevens, medische dossiers, financiële data of bedrijfsgeheimen. Het betekent ook dat je niet gebonden bent aan één AI-aanbieder; je kunt schakelen tussen verschillende modellen zonder je infrastructuur te hoeven aanpassen. De combinatie van open standaarden en lokale opslag maakt dat je als ondernemer meer grip hebt op je AI-kosten en databeveiliging.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantgegevens.** Je zou Thunderbolt kunnen inzetten om een AI-assistent te draaien die helpt bij het analyseren van jaarrekeningen of het opstellen van belastingaangiftes, zonder dat die data ooit je eigen server verlaat. Overweeg om een lokale SQLite-database in te richten als ‘bron van waarheid’ voor de AI, zodat deze altijd werkt met de meest actuele en veilige informatie.

**Als je een webshop beheert en klantgedrag wilt analyseren.** Een mogelijkheid is om Thunderbolt te koppelen aan een lokaal AI-model dat aankooppatronen voorspelt, zonder dat klantdata naar een cloudprovider gaat. Je zou kunnen beginnen met een kleine testopstelling op een eigen server of een krachtige desktop, en de AI laten draaien op basis van geëxporteerde verkoopdata.

**Als je een team aanstuurt dat werkt met gevoelige ontwerpen of productinformatie.** Je zou Thunderbolt kunnen gebruiken als een interne AI-assistent die documenten samenvat of vragen beantwoordt over bedrijfsprocessen, zonder dat er data naar buiten lekt. Overweeg om toegangscontroles op apparaatniveau in te stellen, zodat alleen geautoriseerde medewerkers de AI kunnen gebruiken.

**Als je in de zorg werkt en medische dossiers wilt analyseren.** Een optie is om Thunderbolt te combineren met een lokaal AI-model dat helpt bij het structureren van patiëntgegevens of het genereren van rapporten, volledig binnen je eigen beveiligde netwerk. De end-to-end encryptie die Mozilla noemt, kan hierbij extra zekerheid bieden.

Bron: [Arstechnica](https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

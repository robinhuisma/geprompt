---
title: "n8n bouwt workflows vanuit een prompt: geen handmatig koppelen meer"
date: 2026-04-30T18:04:30.545Z
tags: ["n8n", "workflow automatisering", "AI", "mcp"]
categorieen: ["slimmer-werken"]
summary: "n8n’s MCP-server maakt workflows op basis van een simpele beschrijving, zonder dat je modules handmatig hoeft te koppelen."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je beschrijft wat je wilt in een AI-chat en krijgt direct een werkende workflow terug, zonder dat je zelf modules hoeft te slepen of API’s hoeft te koppelen. n8n’s MCP-server kan nu niet alleen bestaande workflows uitvoeren, maar ook nieuwe bouwen en bestaande aanpassen, rechtstreeks vanuit een prompt in Claude, ChatGPT of een andere AI-client.

## Wat er aan de hand is

n8n heeft de functionaliteit van zijn MCP-server uitgebreid. Waar je eerder alleen bestaande workflows kon aansturen via een AI-client, kun je nu ook nieuwe workflows laten maken en bestaande laten aanpassen. Je vertelt in gewone taal wat je nodig hebt, de AI bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. De server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis zelf-gehoste Community Edition. Volgens n8n gebruiken ze het zelf al dagelijks. De functionaliteit is de afgelopen weken in publieke preview geweest en nu beschikbaar voor iedereen.

## Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken, verdwijnt de drempel om complexe workflows te bouwen. Je hoeft niet meer te weten welke node welke data verwacht of hoe je een API correct aansluit. Je beschrijft wat je nodig hebt, en de AI regelt de rest. Dat bespaart tijd, voorkomt fouten en maakt automatisering toegankelijk voor mensen zonder technische achtergrond. Het werkt met elke AI-client die het MCP-protocol ondersteunt, zoals Claude, ChatGPT, Cursor of Windsurf. Je leert geen nieuw gereedschap, maar gebruikt wat je al hebt.

## Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijks handmatig bestellingen verwerkt.** Je zou de MCP-server kunnen vragen om een workflow te maken die elke ochtend een overzicht stuurt van nieuwe bestellingen, inclusief klantgegevens en producten. Beschrijf in je AI-client wat je nodig hebt, bijvoorbeeld: ‘Maak een workflow die elke dag om 8 uur een e-mail stuurt met een lijst van nieuwe bestellingen van de afgelopen 24 uur, met klantnaam, product en totaalbedrag.’ De AI bouwt de workflow, jij vult alleen nog je eigen e-mailadres in.

**Als je een team aanstuurt en rapportages automatisch wilt laten genereren.** Overweeg om de MCP-server te vragen een workflow te maken die wekelijks data uit je CRM haalt, een samenvatting maakt en die naar het team mailt. Je kunt in dezelfde chat ook direct aanpassingen vragen, zoals: ‘Voeg een kolom toe met het aantal nieuwe leads per medewerker.’ De AI past de workflow aan zonder dat jij in de nodes hoeft te graven.

**Als je in de zorg werkt en herinneringen voor afspraken wilt automatiseren.** Een mogelijkheid is om een workflow te laten bouwen die een dag voor een afspraak automatisch een herinnering stuurt via e-mail of SMS. Beschrijf in je AI-client wat je nodig hebt, bijvoorbeeld: ‘Maak een workflow die een dag voor een afspraak een herinnering stuurt naar de patiënt, met datum, tijd en locatie.’ De AI zet de stappen voor je klaar.

**Als je een freelance consultant bent en facturen wilt automatiseren.** Je zou de MCP-server kunnen vragen om een workflow die na het afronden van een project automatisch een factuur genereert en mailt. Beschrijf het proces in je AI-client, zoals: ‘Maak een workflow die een factuur maakt op basis van een Google Sheets-regel, en die mailt naar de klant met een betaallink.’ De AI bouwt het, jij controleert alleen of het klopt.

De praktische toepassing hangt af van jouw situatie, maar de kern is simpel: beschrijf wat je nodig hebt, en de AI regelt de rest.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

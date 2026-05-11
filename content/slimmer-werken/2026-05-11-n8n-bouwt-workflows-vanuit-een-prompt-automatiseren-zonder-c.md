---
title: "n8n bouwt workflows vanuit een prompt: automatiseren zonder code"
date: 2026-05-11T14:23:06.248Z
tags: ["automatisering", "n8n", "mcp", "ai-tools"]
categorieen: ["slimmer-werken"]
summary: "Vertel ChatGPT wat je nodig hebt en n8n maakt er direct een werkende workflow van."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord

n8n heeft zijn MCP-server bijgewerkt, zodat je nu niet alleen bestaande workflows kunt uitvoeren, maar ook nieuwe workflows kunt bouwen en bestaande kunt aanpassen door simpelweg in je AI-client te beschrijven wat je nodig hebt. Dit betekent dat je als ondernemer zonder programmeerkennis in enkele minuten een geautomatiseerd proces kunt laten maken, van leadgeneratie tot facturatie, zonder dat je handmatig JSON-bestanden hoeft te bewerken of fouten hoeft te kopiëren.

Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server (Model Context Protocol) een belangrijke update gegeven. Waar de server eerder alleen bestaande workflows kon uitvoeren, kan hij nu ook nieuwe workflows creëren en bestaande aanpassen op basis van een prompt in natuurlijke taal. Dit werkt met elke AI-client die MCP ondersteunt, zoals Claude, ChatGPT, Cursor of Windsurf. Je hoeft geen nieuw gereedschap te leren en je hoeft niet van context te wisselen. De MCP-server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party functie, onderhouden door n8n zelf, dus er is geen externe dienst nodig. De update is de afgelopen weken in publieke preview geweest en wordt nu dagelijks gebruikt door het n8n-team.

Wat dit betekent

Voor ondernemers en professionals in het MKB betekent dit dat automatisering toegankelijker wordt dan ooit. Waar je voorheen handmatig workflows moest slepen, configureren en testen, kun je nu eenvoudig aan je AI-client vertellen wat je nodig hebt. Het systeem bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. Dit bespaart uren aan ontwikkeltijd en maakt automatisering haalbaar voor mensen zonder technische achtergrond. Denk aan het automatisch versturen van offertes, het bijwerken van CRM-gegevens, het genereren van rapporten of het synchroniseren van gegevens tussen apps. De impact is het grootst voor bedrijven die veel repetitieve taken hebben maar geen budget voor een fulltime developer.

Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijks bestellingen verwerkt...** Je zou kunnen overwegen om een workflow te laten bouwen die automatisch een factuur genereert en verstuurt zodra een bestelling binnenkomt. Vertel je AI-client iets als: 'Maak een n8n-workflow die elke keer als er een nieuwe bestelling in Shopify is, een factuur aanmaakt in mijn boekhoudpakket en die per e-mail naar de klant stuurt.' De MCP-server zet dit om in een werkende workflow, die je direct kunt testen en gebruiken.

**Als je een team aanstuurt en wekelijkse rapportages nodig hebt...** Een optie is om een workflow te maken die elke maandagochtend automatisch een overzicht genereert van de belangrijkste KPI's uit je CRM en die per e-mail naar je team stuurt. Je zou kunnen beginnen met een prompt als: 'Maak een workflow die elke maandag om 9 uur een e-mail stuurt met de verkoopcijfers van de afgelopen week uit Salesforce.' De AI-client bouwt de workflow, en jij hoeft alleen nog je e-mailadres in te vullen.

**Als je in de zorg werkt en patiëntgegevens moet bijwerken...** Overweeg om een workflow te laten maken die nieuwe afspraken uit je agenda haalt en automatisch een herinneringsmail stuurt naar patiënten. Een voorbeeldprompt: 'Maak een workflow die elke dag om 8 uur controleert op nieuwe afspraken in Google Calendar en een bevestigingsmail stuurt naar het e-mailadres van de patiënt.' De MCP-server zorgt voor de koppeling en validatie.

**Als je freelance facturen stuurt en betalingen wilt opvolgen...** Je zou een workflow kunnen laten bouwen die automatisch een herinnering stuurt wanneer een factuur over de vervaldatum is. Prompt: 'Maak een workflow die elke dag controleert of er facturen in mijn boekhoudpakket zijn die meer dan 30 dagen openstaan, en die een vriendelijke betalingsherinnering stuurt naar de klant.' De workflow wordt direct gegenereerd en is klaar om te gebruiken.

**Als je een marketingbureau runt en leads wilt opvolgen...** Een mogelijkheid is om een workflow te maken die nieuwe aanmeldingen van je website automatisch toevoegt aan je e-maillijst en een welkomstbericht stuurt. Prompt: 'Maak een workflow die een nieuwe lead uit mijn webformulier haalt, toevoegt aan Mailchimp en een persoonlijke welkomstmail stuurt.' De MCP-server bouwt de workflow en controleert of alles werkt.

Bron: n8n blog (https://blog.n8n.io/n8n-mcp-server/)

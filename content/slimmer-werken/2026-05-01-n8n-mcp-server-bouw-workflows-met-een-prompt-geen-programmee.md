---
title: "n8n MCP-server: bouw workflows met een prompt, geen programmeerkennis nodig"
date: 2026-05-01T06:04:56.693Z
tags: ["n8n", "mcp-server", "workflow-automatisering", "ai-tools"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt in ChatGPT of Claude, en n8n bouwt de workflow automatisch."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord: n8n heeft zijn MCP-server uitgebreid zodat je nu niet alleen bestaande workflows kunt uitvoeren, maar ook nieuwe workflows kunt bouwen en bestaande kunt aanpassen door simpelweg in je AI-client te beschrijven wat je nodig hebt. Geen JSON-bestanden, geen copy-paste van foutmeldingen, geen nieuwe tool om te leren.

## Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft de MCP-server (Model Context Protocol) die al een paar maanden beschikbaar is, uitgebreid met een cruciale functie. Waar je eerder alleen bestaande workflows kon uitvoeren via de MCP-server, kun je nu ook nieuwe workflows vanaf nul laten bouwen en bestaande workflows laten aanpassen. Dit gebeurt rechtstreeks in je n8n-installatie.

Het werkt via AI-clients die het MCP-protocol ondersteunen, zoals Claude Desktop, ChatGPT, Cursor of Windsurf. Je beschrijft wat je nodig hebt, de AI bouwt de workflow, valideert deze, voert hem uit en herstelt zichzelf als er iets fout gaat. De functie is beschikbaar in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party functie, onderhouden door n8n zelf, zonder dat je een aparte dienst naast je n8n-installatie hoeft te draaien.

## Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken voor automatisering, verdwijnt een belangrijke drempel: de tijd die het kost om een workflow te bouwen en te debuggen. Waar je eerder handmatig nodes aan elkaar koppelde, instellingen configureerde en foutmeldingen oploste, kun je nu in een paar minuten een werkende workflow krijgen door een beschrijving te geven.

Het verschil is vergelijkbaar met het verschil tussen zelf een website bouwen in HTML en een website laten genereren door een AI op basis van een beschrijving. De AI begrijpt de structuur van n8n-workflows en kan zelfstandig fouten herstellen. In het voorbeeld dat n8n geeft, bouwde de AI een workflow die dagelijks om 7 uur 's ochtends een e-mail met de weersverwachting stuurt. De enige handmatige aanpassing was het invullen van het e-mailadres.

## Hoe je dit kunt toepassen

**Als je een webshop runt en leads automatisch wilt opvolgen**, kun je de MCP-server gebruiken om een workflow te laten bouwen die nieuwe bestellingen uit je webshop haalt, de klantgegevens in je CRM zet en een gepersonaliseerde bevestigingsmail stuurt. Beschrijf in je AI-client wat je nodig hebt, bijvoorbeeld: 'Maak een workflow die elke keer als er een nieuwe bestelling binnenkomt via Shopify, de klant toevoegt aan HubSpot en een bevestigingsmail stuurt via Gmail.' De AI bouwt de workflow, en je hoeft alleen nog je eigen e-mailadres of API-sleutels in te vullen.

**Als je een team aanstuurt en rapportages automatiseert**, kun je een workflow laten maken die wekelijks data uit je projectmanagementtool haalt, een overzicht genereert en dat naar je team mailt. Een mogelijke prompt: 'Maak een workflow die elke maandagochtend de voltooide taken uit Asana ophaalt, een samenvatting maakt en die mailt naar mijn team via Outlook.' De AI zet de nodes voor je klaar, en je kunt daarna nog aanpassingen vragen zonder opnieuw te beginnen.

**Als je facturen verwerkt en dit handmatig doet**, kun je een workflow laten bouwen die inkomende facturen uit je e-mail haalt, de gegevens uitleest en in je boekhoudpakket zet. Beschrijf in je AI-client wat je nodig hebt, zoals: 'Maak een workflow die elke dag nieuwe e-mails met facturen uit Gmail haalt, de bedragen en factuurnummers extraheert en die in Exact Online zet.' De AI bouwt de basis, en je kunt later aanpassingen vragen, zoals het toevoegen van een goedkeuringsstap.

**Als je een contentkalender beheert en social media plant**, kun je een workflow laten maken die automatisch berichten uit je planning haalt en plaatst op LinkedIn en Twitter. Een prompt als: 'Maak een workflow die elke dag om 9 uur het volgende bericht uit mijn Google Sheet haalt en plaatst op LinkedIn en Twitter' levert binnen een paar minuten een werkende workflow op. De AI regelt de nodes en de scheduling, jij vult alleen nog de accounts in.

De praktische toepassing hangt af van jouw situatie, maar de kern is dat je niet meer zelf hoeft te weten welke nodes je nodig hebt of hoe je ze configureert. Je beschrijft het resultaat, en n8n bouwt het voor je.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

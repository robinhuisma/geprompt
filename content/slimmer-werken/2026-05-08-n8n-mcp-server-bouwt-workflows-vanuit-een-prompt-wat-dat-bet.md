---
title: "n8n MCP-server bouwt workflows vanuit een prompt: wat dat betekent voor je automatisering"
date: 2026-05-08T10:13:54.842Z
tags: ["n8n", "mcp", "workflow automatisering", "AI"]
categorieen: ["slimmer-werken"]
summary: "n8n’s MCP-server kan nu workflows bouwen en updaten via een simpele prompt in ChatGPT of Claude."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord: n8n’s MCP-server kan nu nieuwe workflows bouwen en bestaande aanpassen op basis van een eenvoudige prompt in AI-clients zoals ChatGPT, Claude of Cursor. Dat betekent dat je zonder programmeerkennis complete processen zoals factuurverwerking of leadopvolging kunt laten maken en direct inzetten.

## Wat er aan de hand is
n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server (Model Context Protocol) uitgebreid. Waar de server eerder alleen bestaande workflows kon uitvoeren, kan hij nu ook nieuwe workflows vanaf nul bouwen en bestaande aanpassen. Je geeft een opdracht in je AI-client – bijvoorbeeld ‘stuur me elke ochtend om 7 uur een e-mail met de weersverwachting’ – en de server bouwt de workflow, valideert hem, voert hem uit en herstelt fouten automatisch. De functionaliteit is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis Community Edition. Het is een first-party feature, dus geen externe dienst nodig. Volgens n8n is de server de afgelopen weken in publieke preview geweest en gebruikt het team hem al dagelijks.

## Wat dit betekent
Voor ondernemers en professionals betekent dit dat het bouwen van automatiseringen een stuk toegankelijker wordt. Waar je voorheen handmatig nodes moest slepen en configureren, of JSON-bestanden moest bewerken, kun je nu in natuurlijke taal aangeven wat je nodig hebt. De AI begrijpt de context en bouwt de workflow. Dat bespaart tijd en verlaagt de drempel voor mensen zonder technische achtergrond. Vooral voor MKB-bedrijven die processen willen stroomlijnen maar geen developer in huis hebben, is dit een directe verbetering. De server werkt met elke AI-client die MCP ondersteunt, zoals Claude, ChatGPT, Cursor en Windsurf. Je hoeft geen nieuw gereedschap te leren.

## Hoe je dit kunt toepassen
**Als je een webshop runt en leadopvolging wilt automatiseren.** Je kunt de MCP-server vragen: ‘Maak een workflow die elke nieuwe aanmelding voor mijn nieuwsbrief automatisch een welkomstmail stuurt en de contactgegevens toevoegt aan mijn CRM.’ De server bouwt de workflow in n8n, inclusief de koppeling met je e-mailtool en CRM. Je hoeft alleen nog je eigen inloggegevens in te vullen. Een optie is om te beginnen met een eenvoudig proces en het later uit te breiden met bijvoorbeeld een herinneringsmail na een week.

**Als je een team aanstuurt en terugkerende rapportages wilt genereren.** Overweeg om de server te vragen: ‘Maak een workflow die elke maandagochtend een overzicht stuurt van de openstaande taken in ons projectmanagementtool, met de deadlines van deze week.’ De server zet de stappen uit, koppelt de juiste tools en stuurt het resultaat naar de juiste personen. Je kunt het aanpassen door later in het gesprek extra filters of ontvangers toe te voegen.

**Als je in de financiële administratie werkt en factuurverwerking wilt versnellen.** Een mogelijkheid is om de server te instrueren: ‘Maak een workflow die binnenkomende facturen in mijn e-mail herkent, de gegevens uitleest en opslaat in mijn boekhoudpakket, en een bevestigingsmail terugstuurt naar de afzender.’ De server bouwt de stappen, inclusief de benodigde API-koppelingen. Je kunt daarna controleren of alle velden correct worden overgenomen en eventueel handmatig bijsturen.

**Als je in de zorg werkt en patiëntherinneringen wilt automatiseren.** Je zou kunnen vragen: ‘Maak een workflow die twee dagen voor een afspraak een herinnering stuurt via SMS en e-mail, en de status bijwerkt in het afspraaksysteem.’ De server zet de workflow op, inclusief de logica voor het berekenen van de juiste datum. Het enige wat je hoeft te doen is de contactgegevens en berichtteksten aanpassen.

**Als je een marketingteam leidt en social media planning wilt stroomlijnen.** Overweeg om de server te vragen: ‘Maak een workflow die elke dag om 9 uur een vooraf geschreven post plaatst op LinkedIn en Twitter, en de prestaties bijhoudt in een spreadsheet.’ De server bouwt de workflow met de juiste nodes voor social media-API’s en data-opslag. Je kunt later eenvoudig extra kanalen toevoegen door de prompt aan te passen.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

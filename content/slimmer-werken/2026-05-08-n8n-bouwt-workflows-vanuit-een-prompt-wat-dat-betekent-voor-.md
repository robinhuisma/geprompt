---
title: "n8n bouwt workflows vanuit een prompt: wat dat betekent voor je automatisering"
date: 2026-05-08T14:15:28.414Z
tags: ["n8n", "automatisering", "AI", "workflow"]
categorieen: ["slimmer-werken"]
summary: "n8n's MCP server kan nu workflows maken en aanpassen op basis van een simpele beschrijving, zonder code."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je beschrijft wat je nodig hebt, en n8n bouwt de workflow voor je. Dat is wat de nieuwe MCP-server van n8n mogelijk maakt. Geen code schrijven, geen JSON bestanden slepen, geen heen-en-weer gepraat tussen tools. Je geeft een prompt aan Claude, ChatGPT of een andere AI-client, en die zet jouw wens om in een werkende workflow in n8n.

## Wat er aan de hand is

n8n heeft zijn MCP-server bijgewerkt. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client, kun je nu ook nieuwe workflows maken en bestaande aanpassen. De server is ingebouwd in alle versies van n8n: Cloud, Enterprise en de gratis Community Edition. Het is een first-party functie, onderhouden door n8n zelf, zonder dat je een derde partij hoeft in te schakelen.

Het werkt zo: je vertelt een AI-client zoals Claude Desktop of ChatGPT wat je wilt. Die client stuurt de instructie naar de MCP-server in jouw n8n-installatie. De server bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. In een voorbeeld van n8n zelf gaf iemand de prompt: 'Maak een workflow die elke dag om 7 uur een e-mail stuurt met de weersverwachting voor New York.' Binnen een paar minuten stond de workflow klaar. Het enige wat nog ontbrak was het eigen e-mailadres in de Gmail-node.

Deze update is de afgelopen weken in publieke preview geweest en wordt volgens n8n al dagelijks gebruikt door het eigen team.

## Wat dit betekent

Voor ondernemers die n8n gebruiken voor automatisering, verandert dit de manier waarop je workflows maakt. Je hoeft niet meer elke stap handmatig in te stellen, te testen en te debuggen. Je beschrijft wat je nodig hebt, en de AI-client vertaalt dat naar een werkende workflow.

Dit is vooral relevant als je regelmatig nieuwe automatiseringen bouwt of bestaande aanpast. Denk aan het opzetten van een leadopvolging, het genereren van facturen, het synchroniseren van data tussen systemen of het sturen van gepersonaliseerde e-mails. Waar je eerder een half uur tot een uur kwijt was aan het bouwen en testen van een workflow, kun je nu in een paar minuten een werkende versie hebben.

Het betekent ook dat je minder afhankelijk bent van technische kennis. Je hoeft niet te weten welke nodes je moet gebruiken of hoe je ze configureert. De AI-client doet dat op basis van jouw beschrijving. En als er iets misgaat, probeert de server het zelf te herstellen.

## Hoe je dit kunt toepassen

**Als je een webshop runt en leads automatisch wilt opvolgen.** Je zou aan Claude of ChatGPT kunnen vragen: 'Maak een workflow die elke keer als er een nieuwe bestelling binnenkomt in Shopify, een bedankmail stuurt via Gmail en de klant toevoegt aan een Google Sheet.' De MCP-server bouwt de workflow, je controleert of het klopt en zet hem aan. Binnen een paar minuten staat je leadopvolging klaar.

**Als je een team aanstuurt en rapportages automatisch wilt genereren.** Een mogelijkheid is om te vragen: 'Maak een workflow die elke maandagochtend een overzicht stuurt van de openstaande taken uit Notion, met een samenvatting van de deadlines.' De server maakt de workflow, je vult eventueel nog specifieke parameters in zoals je e-mailadres, en de rest gebeurt automatisch.

**Als je facturatie wilt stroomlijnen.** Overweeg om te vragen: 'Maak een workflow die elke keer als er een nieuwe betaling binnenkomt via Stripe, een factuur genereert in PDF en die per e-mail stuurt naar de klant.' De server bouwt de stappen, je controleert of de factuur klopt, en je workflow draait.

**Als je data tussen systemen wilt synchroniseren.** Je zou kunnen vragen: 'Maak een workflow die nieuwe contacten uit een webformulier toevoegt aan zowel Mailchimp als aan een database in Airtable.' De server zet de verbindingen op, je test of het werkt, en je synchronisatie staat.

**Als je bestaande workflows wilt aanpassen.** Stel dat je een workflow hebt die elke dag een e-mail stuurt, maar je wilt dat die alleen op werkdagen werkt. Je kunt aan de AI-client vragen: 'Pas de workflow "dagelijkse update" aan zodat hij alleen op maandag tot en met vrijdag draait.' De server past de workflow aan zonder dat je handmatig nodes hoeft te verplaatsen.

De praktische toepassing hangt af van jouw situatie, maar de kern is: je beschrijft wat je nodig hebt, en n8n bouwt het voor je. Geen code, geen gedoe.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

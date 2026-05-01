---
title: "n8n MCP-server: bouw workflows met een simpele omschrijving"
date: 2026-05-01T14:07:46.342Z
tags: ["n8n", "workflows", "automatisering", "mcp"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt, en n8n bouwt de werkende workflow voor je."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je kunt nu een werkende workflow in n8n laten bouwen door simpelweg te omschrijven wat je nodig hebt. Geen programmeerkennis, geen gekopieerde JSON-bestanden en geen heen-en-weer gepraat met een AI-assistent. Je zegt wat je wilt, en n8n maakt het.

## Wat er aan de hand is

n8n heeft zijn MCP-server uitgebreid. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client zoals Claude of ChatGPT, kun je nu ook nieuwe workflows laten bouwen en bestaande laten aanpassen. Dit gebeurt rechtstreeks in je eigen n8n-omgeving. De AI-client bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. De functionaliteit is beschikbaar in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een eigen, native functie van n8n, geen externe dienst. Volgens n8n gebruikt het eigen team de MCP-server al dagelijks.

## Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken voor automatisering, verdwijnt een belangrijke drempel. Je hoeft niet meer precies te weten welke nodes je moet gebruiken of hoe je ze aan elkaar koppelt. Je beschrijft in gewone taal wat je wilt, bijvoorbeeld 'stuur me elke ochtend om 7 uur een e-mail met de weersverwachting', en de AI vertaalt dat naar een werkende workflow. Dit maakt automatisering toegankelijk voor mensen die geen technische achtergrond hebben. Het betekent ook dat je sneller kunt experimenteren: een idee voor een workflow test je in minuten, niet in uren. De AI werkt met clients die het MCP-protocol ondersteunen, zoals Claude, ChatGPT, Cursor en Windsurf. Je hoeft geen nieuwe tool te leren.

## Hoe je dit kunt toepassen

**Als je een webshop runt en handmatig bestellingen verwerkt.** Je zou de MCP-server kunnen vragen om een workflow te bouwen die bij elke nieuwe bestelling automatisch een bevestigingsmail stuurt en de voorraad bijwerkt in je administratie. Beschrijf wat je nodig hebt, bijvoorbeeld 'maak een workflow die bij een nieuwe Shopify-bestelling een e-mail stuurt via Gmail en het aantal in een Google Sheet aanpast'. De AI bouwt het voor je.

**Als je een team aanstuurt en repetitieve taken wilt automatiseren.** Overweeg om een workflow te laten maken die elke week een overzicht van openstaande taken uit je projectmanagementtool verzamelt en naar je stuurt. Zeg bijvoorbeeld 'maak een workflow die elke maandagochtend alle open taken uit Asana ophaalt en in een overzichtelijke e-mail naar mij stuurt'. De AI zorgt voor de koppelingen.

**Als je in de marketing werkt en content plant.** Een mogelijkheid is om een workflow te bouwen die automatisch social media posts plant op basis van een contentkalender in een spreadsheet. Je zou kunnen vragen 'bouw een workflow die elke dag om 10 uur een post uit mijn Google Sheet haalt en plaatst op LinkedIn'. De AI zet de nodes voor je klaar.

**Als je klantenservice hebt en veel standaardvragen krijgt.** Je zou kunnen experimenteren met een workflow die nieuwe e-mails uit een gedeelde mailbox filtert op basis van trefwoorden en automatisch een antwoord stuurt of doorzet naar de juiste persoon. Beschrijf het proces in een paar zinnen, en de AI bouwt de workflow.

**Als je financiële rapportages maakt.** Overweeg om een workflow te laten maken die maandelijks gegevens uit je boekhoudtool haalt, een samenvatting genereert en die in een vaste map opslaat. Zeg bijvoorbeeld 'maak een workflow die aan het einde van elke maand de omzet uit Moneybird haalt en een PDF-rapport maakt'. De AI regelt de stappen.

De praktische toepassing hangt af van jouw situatie. Het belangrijkste is dat je niet meer hoeft te weten welke technische stappen er nodig zijn. Je beschrijft het resultaat, en n8n zorgt voor de rest.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

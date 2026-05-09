---
title: "n8n laat AI nu complete workflows bouwen: wat dat betekent voor je bedrijfsprocessen"
date: 2026-05-09T06:15:56.907Z
tags: ["n8n", "workflow-automatisering", "AI-tools", "mcp-server"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je wilt en n8n bouwt de workflow. Geen programmeerkennis nodig."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord: n8n heeft zijn MCP-server uitgebreid zodat AI-assistenten zoals Claude en ChatGPT nu niet alleen bestaande workflows kunnen uitvoeren, maar ook nieuwe workflows kunnen bouwen en aanpassen. Je beschrijft wat je wilt, en de AI zet dat om in een werkende workflow in n8n, zonder dat je JSON hoeft te schrijven of handmatig nodes hoeft te koppelen.

## Wat er aan de hand is

n8n, het populaire open-source workflow-automatiseringsplatform, heeft een belangrijke update uitgebracht voor zijn MCP-server. Waar je eerder alleen bestaande workflows kon aansturen via AI, kun je nu volledig nieuwe workflows laten bouwen op basis van een simpele beschrijving. De MCP-server werkt met elke AI-client die het MCP-protocol ondersteunt: Claude, ChatGPT, Cursor, Windsurf en andere. Het is een first-party functie, direct ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. De functie was de afgelopen weken in publieke preview en wordt volgens n8n al dagelijks gebruikt door het eigen team.

## Wat dit betekent

Voor ondernemers zonder programmeerervaring opent dit een nieuwe manier om automatiseringen in te zetten. Waar je voorheen handmatig workflows moest configureren in n8n, of een ontwikkelaar nodig had, kun je nu in gewone taal aangeven wat je nodig hebt. Denk aan: 'stuur me elke ochtend om 7 uur een e-mail met de weersverwachting voor vandaag'. De AI bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. Het grootste verschil met de vorige versie is dat je niet langer een bestaande workflow hoeft te hebben. Je begint met een leeg canvas en een beschrijving. Dit verlaagt de drempel voor kleine bedrijven die wel automatisering willen, maar geen tijd of budget hebben om workflows handmatig in te richten.

## Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijkse rapportages wilt automatiseren.** Je zou kunnen beschrijven: 'Maak een workflow die elke ochtend om 8 uur een overzicht stuurt van de bestellingen van gisteren, met het totaalbedrag en de verzendstatus.' De AI bouwt de workflow, verbindt je winkelplatform met je e-mail en stuurt het rapport. Je hoeft alleen nog te controleren of de juiste gegevens worden opgehaald.

**Als je een team aanstuurt en repetitieve taken wilt uitbesteden aan automatisering.** Een mogelijkheid is om te zeggen: 'Maak een workflow die elke keer als er een nieuw contactformulier binnenkomt in mijn website, een taak aanmaakt in mijn projectmanagementtool en een bevestigingsmail stuurt naar de afzender.' De AI zet dit om in een werkende workflow, inclusief de juiste koppelingen en logica.

**Als je in de zorg werkt en patiëntgegevens wilt verwerken.** Overweeg om te beschrijven: 'Maak een workflow die elke dag om 12 uur een CSV-bestand uit mijn EPD-systeem haalt, de gegevens controleert op dubbele registraties en een overzicht stuurt naar de behandelcoördinator.' De AI bouwt de workflow en valideert of alle stappen kloppen. Je kunt daarna nog aanpassingen vragen in gewone taal, zoals 'gebruik een e-mailtemplate in plaats van een code-node voor de opmaak'.

**Als je een freelance consultant bent en facturen wilt automatiseren.** Je zou kunnen zeggen: 'Maak een workflow die elke keer als ik een project afrond in mijn urenregistratie, een factuur genereert in mijn boekhoudpakket en die per e-mail verstuurt naar de klant.' De AI bouwt de workflow en controleert of alle benodigde gegevens worden meegenomen. Mocht er een fout optreden, dan probeert de AI zichzelf te herstellen.

**Als je een marketingbureau runt en contentplanningen wilt stroomlijnen.** Een optie is om te beschrijven: 'Maak een workflow die elke maandagochtend een overzicht maakt van alle social media posts die die week gepland staan, met de bijbehorende afbeeldingen en links, en dat stuurt naar het team.' De AI bouwt de workflow en koppelt de juiste bronnen aan elkaar.

Bron: n8n Blog (https://blog.n8n.io/n8n-mcp-server/)

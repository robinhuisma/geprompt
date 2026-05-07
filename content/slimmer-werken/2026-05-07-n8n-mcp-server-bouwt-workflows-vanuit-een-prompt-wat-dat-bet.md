---
title: "n8n MCP-server bouwt workflows vanuit een prompt: wat dat betekent voor automatisering"
date: 2026-05-07T22:12:18.123Z
tags: ["n8n", "mcp", "workflow automatisering", "ai"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je wilt en n8n bouwt de workflow, zonder handmatig configureren."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je beschrijft wat je wilt in een AI-chat en n8n bouwt de bijbehorende workflow, inclusief validatie en foutcorrectie. Dat is de kern van de nieuwe MCP-server-update van n8n, waarmee je automatiseringen maakt zonder handmatig nodes, triggers of acties te configureren.

## Wat er aan de hand is

n8n heeft zijn MCP-server uitgebreid. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client, kun je nu ook nieuwe workflows bouwen en bestaande aanpassen. Het werkt met elke AI-client die het MCP-protocol ondersteunt, zoals Claude, ChatGPT, Cursor of Windsurf. Je geeft een beschrijving van wat je wilt, de AI bouwt de workflow, valideert deze, voert hem uit en lost fouten zelf op. De server is beschikbaar in alle edities van n8n: Cloud, Enterprise en de gratis Community Edition. Het is een first-party functie, onderhouden door n8n zelf, zonder dat je een externe dienst naast je instance hoeft te draaien. De update was de afgelopen weken in publieke preview en wordt volgens n8n al dagelijks door het eigen team gebruikt.

## Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken, verandert dit de manier waarop je automatiseringen maakt. Het schrijven van workflows wordt een conversatie in plaats van een configuratieklus. Je hoeft niet meer te weten welke node welke functie heeft of hoe je triggers en acties aan elkaar koppelt. De AI begrijpt wat je bedoelt en zet dat om in een werkende workflow. Dit bespaart tijd, vooral bij terugkerende taken zoals het versturen van dagelijkse rapporten, het synchroniseren van data tussen systemen of het genereren van notificaties. Het verlaagt ook de drempel voor mensen die minder technisch zijn: je kunt automatiseren zonder de interface van n8n te kennen. Voor ervaren gebruikers betekent het dat je sneller kunt prototypen en itereren, omdat je wijzigingen in natuurlijke taal kunt doorgeven in plaats van handmatig nodes te verslepen.

## Hoe je dit kunt toepassen

**Als je dagelijks handmatig data overzet tussen systemen.** Je zou een workflow kunnen laten bouwen die elke ochtend een CSV-bestand uit je CRM haalt, de data opschoont en in een spreadsheet zet. Beschrijf wat je nodig hebt, zoals 'haal elke dag om 8 uur de nieuwe leads uit Salesforce en zet ze in een Google Sheet met kolommen voor naam, e-mail en telefoonnummer'. De AI bouwt de workflow en je hoeft alleen nog je inloggegevens te controleren.

**Als je team werkt met terugkerende rapportages.** Een optie is om een workflow te maken die wekelijks een overzicht stuurt van verkoopcijfers of projectstatussen. Zeg bijvoorbeeld: 'stuur mij elke maandag om 9 uur een e-mail met het aantal nieuwe klanten van de afgelopen week, met een grafiek van de omzet per dag'. De AI zet dit om in een workflow met een schedule-trigger, een database-query en een e-mailnode. Je kunt later in de chat vragen om de opmaak aan te passen of een extra kolom toe te voegen.

**Als je een bestaande workflow wilt aanpassen zonder de editor te openen.** Stel dat je een workflow hebt die dagelijks een e-mail stuurt, maar je wilt de ontvanger wijzigen of een extra bijlage toevoegen. Je kunt in de chat zeggen: 'pas de workflow "dagelijkse update" aan, voeg een PDF-bijlage toe uit de map /rapporten en stuur naar het hele team'. De AI past de nodes aan en test of het werkt. Dit is handig als je snel een wijziging nodig hebt en niet wilt inloggen en zoeken.

**Als je een nieuwe medewerker hebt die automatisering moet leren.** Je zou de MCP-server kunnen gebruiken om workflows te laten uitleggen. Vraag de AI: 'maak een workflow die een nieuwe lead uit een webformulier haalt, een welkomstmail stuurt en een taak aanmaakt in Trello voor opvolging'. De resulterende workflow is direct bruikbaar en laat tegelijk zien hoe nodes samenwerken. De medewerker kan de workflow later aanpassen door in de chat vragen te stellen.

**Als je meerdere AI-clients gebruikt en geen nieuwe tool wilt leren.** Omdat de MCP-server werkt met elke client die het protocol ondersteunt, kun je blijven werken in de tool die je gewend bent. Of je nu Claude, ChatGPT of Cursor gebruikt, je wijst hem naar je n8n-instance en begint met beschrijven. Geen extra installatie of configuratie nodig.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

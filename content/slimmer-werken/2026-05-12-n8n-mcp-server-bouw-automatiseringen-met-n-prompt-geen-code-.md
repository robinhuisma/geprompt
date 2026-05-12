---
title: "n8n MCP-server: bouw automatiseringen met één prompt, geen code nodig"
date: 2026-05-12T02:19:41.077Z
tags: ["n8n", "automatisering", "mcp-server", "prompt"]
categorieen: ["slimmer-werken"]
summary: "Automatiseringen bouwen in n8n door simpelweg te beschrijven wat je nodig hebt."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord is dat je met de nieuwe MCP-server van n8n complete automatiseringen kunt bouwen door simpelweg in je AI-client te beschrijven wat je nodig hebt. Geen handmatig slepen met nodes, geen JSON-bestanden, geen kopiëren en plakken. Je geeft een prompt, en n8n bouwt de workflow, valideert deze, voert hem uit en herstelt zichzelf als er iets misgaat.

## Wat er aan de hand is

n8n heeft zijn MCP-server (Model Context Protocol) uitgebreid. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client, kun je nu ook nieuwe workflows bouwen en bestaande aanpassen. Dit werkt in elke AI-client die het MCP-protocol ondersteunt: Claude, ChatGPT, Cursor, Windsurf en andere. Je hoeft geen nieuw gereedschap te leren en schakelt niet van context.

De MCP-server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis zelf-gehoste Community Edition. Het is een first-party functie, onderhouden door n8n zelf. Er draait geen externe dienst naast je n8n-instance. De functie was de afgelopen weken in publieke preview en wordt inmiddels dagelijks gebruikt door het n8n-team.

## Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken, betekent dit een flinke versnelling in het bouwen van automatiseringen. Waar je eerder handmatig nodes aan elkaar knoopte, fouten opspoorde en configuraties controleerde, kun je nu in natuurlijke taal aangeven wat je nodig hebt. De AI-client vertaalt dat naar een werkende workflow.

Dit is vooral relevant voor taken die je regelmatig herhaalt maar die telkens net iets anders zijn. Denk aan het verwerken van inkomende facturen, het opvolgen van leads, het genereren van rapportages of het synchroniseren van data tussen systemen. Waar je eerder een aparte workflow bouwde voor elke variant, kun je nu snel nieuwe workflows genereren op basis van een prompt.

Het feit dat de MCP-server ook bestaande workflows kan aanpassen, betekent dat je niet steeds opnieuw hoeft te beginnen. Je kunt een bestaande workflow als basis nemen en die in een gesprek met je AI-client aanpassen aan nieuwe eisen.

## Hoe je dit kunt toepassen

**Als je dagelijks facturen verwerkt en deze in je boekhoudsysteem wilt zetten.** Je zou een workflow kunnen laten bouwen die elke ochtend je e-mail scant op nieuwe facturen, de bijlage downloadt, de gegevens extraheert en deze in je boekhoudpakket plaatst. Beschrijf in je prompt welke e-mailaccount je gebruikt, naar welk systeem de data moet en hoe je de facturen wilt labelen. De MCP-server bouwt de workflow, en je controleert alleen of de verbindingen kloppen.

**Als je een team aanstuurt en wekelijks een statusupdate wilt ontvangen.** Overweeg om een workflow te laten maken die elke maandagochtend een overzicht genereert van openstaande taken uit je projectmanagementtool, dit combineert met de laatste notities uit je CRM en je een samenvatting mailt. Je kunt in de prompt aangeven welke tools je gebruikt, hoe uitgebreid het overzicht moet zijn en naar wie de mail gaat. De workflow wordt direct gebouwd en getest.

**Als je een webshop runt en nieuwe bestellingen automatisch wilt verwerken.** Een mogelijkheid is om een workflow te laten bouwen die bij elke nieuwe bestelling de klantgegevens in je CRM bijwerkt, een bevestigingsmail stuurt en een taak aanmaakt in je planningstool voor de verzending. Beschrijf in je prompt de volgorde van acties en de systemen die je gebruikt. De MCP-server zet dit om in een werkende workflow die je direct kunt inzetten.

**Als je in de zorg werkt en patiëntgegevens uit verschillende bronnen wilt samenbrengen.** Je zou een workflow kunnen laten bouwen die dagelijks nieuwe labuitslagen uit een beveiligde omgeving haalt, deze koppelt aan de juiste patiëntdossiers en een samenvatting stuurt naar de behandelend arts. Geef in je prompt aan welke bronnen je gebruikt, hoe de koppeling moet plaatsvinden en wie de melding krijgt. De workflow wordt gegenereerd en gevalideerd.

**Als je een freelance ondernemer bent en je facturatie wilt stroomlijnen.** Overweeg om een workflow te laten maken die aan het einde van elke maand je gewerkte uren uit je tijdsregistratietool haalt, hier facturen van genereert en deze per e-mail verstuurt naar je opdrachtgevers. Beschrijf in je prompt welke tool je gebruikt voor urenregistratie, hoe je facturen eruit moeten zien en naar wie ze gaan. De MCP-server bouwt de workflow in enkele minuten.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

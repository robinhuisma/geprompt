---
title: "n8n bouwt workflows vanuit een prompt: automatiseren zonder slepen"
date: 2026-05-08T06:14:33.042Z
tags: ["n8n", "automatisering", "mcp", "workflow"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt in ChatGPT, en n8n maakt er een werkende automatisering van."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord: n8n heeft een update uitgebracht voor zijn MCP-server waarmee je niet alleen bestaande workflows kunt uitvoeren, maar ook nieuwe workflows kunt laten bouwen en bestaande kunt aanpassen, allemaal door een simpele omschrijving in een AI-client als ChatGPT of Claude. Dit betekent dat je zonder technische kennis of handmatig slepen een werkende automatisering krijgt, van leadopvolging tot factuurverwerking.

## Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server uitgebreid. Waar je eerder alleen bestaande workflows kon aansturen via AI-clients, kun je nu ook nieuwe workflows laten maken en bestaande aanpassen. Het werkt in elke AI-client die het MCP-protocol ondersteunt, zoals Claude, ChatGPT, Cursor of Windsurf. Je beschrijft wat je nodig hebt, de AI bouwt de workflow, valideert hem, voert hem uit en herstelt fouten zelf. Het is beschikbaar in alle edities van n8n: Cloud, Enterprise en de gratis Community Edition. Volgens n8n gebruiken ze het zelf al dagelijks.

## Wat dit betekent

Voor ondernemers en professionals in het MKB betekent dit een flinke drempelverlaging. Automatiseren was tot nu toe vaak een kwestie van handmatig nodes slepen, triggers instellen en foutmeldingen oplossen. Met deze update kun je simpelweg zeggen wat je nodig hebt, en de rest gebeurt vanzelf. Denk aan het versturen van een dagelijkse weersvoorspelling of het aanmaken van een lead in je CRM na een binnenkomende e-mail. Het werkt zonder dat je een nieuwe tool hoeft te leren of heen en weer hoeft te schakelen tussen programma's. Vooral voor kleinere bedrijven zonder speciale IT-afdeling opent dit de deur naar automatisering die eerder te complex of te tijdrovend was.

## Hoe je dit kunt toepassen

**Als je een webshop runt en leads wilt opvolgen.** Stel je voor dat je dagelijks e-mails binnenkrijgt van potentiële klanten via een contactformulier. Je zou een workflow kunnen laten maken die deze e-mails automatisch in je CRM zet, een bedankmail stuurt en een taak aanmaakt voor een medewerker om binnen 24 uur te bellen. Beschrijf aan ChatGPT of Claude: 'Maak een workflow die elke nieuwe e-mail uit mijn Gmail met het label 'lead' verwerkt, een contact aanmaakt in mijn CRM, een bevestigingsmail stuurt en een taak in mijn projectmanagementtool zet.' De AI bouwt de workflow, je controleert of alles klopt, en je bent klaar.

**Als je facturen verwerkt en tijd wilt besparen.** Veel ondernemers krijgen facturen per e-mail die ze handmatig moeten verwerken. Je zou een workflow kunnen laten maken die bijlagen uit e-mails haalt, de gegevens uitleest en in je boekhoudpakket zet. Een mogelijke omschrijving: 'Maak een workflow die elke dag om 9 uur mijn Gmail checkt op facturen, de PDF-bijlage uitleest met een AI-node, en de gegevens in mijn boekhoudsoftware plaatst.' De AI zorgt voor de koppeling, jij hoeft alleen nog te controleren of de gegevens kloppen.

**Als je een team aanstuurt en routinetaken wilt automatiseren.** Denk aan het dagelijks versturen van een overzicht van openstaande taken of het aanmaken van een wekelijkse rapportage. Je zou kunnen zeggen: 'Maak een workflow die elke maandagochtend een e-mail stuurt naar mijn team met een overzicht van alle openstaande taken uit Asana.' De AI bouwt de workflow, inclusief de opmaak en de planning. Je kunt later nog aanpassingen vragen, zoals het toevoegen van een bijlage of het wijzigen van de ontvangers.

**Als je in de zorg werkt en patiëntgegevens wilt bijwerken.** Stel dat je dagelijks nieuwe patiënten registreert via een online formulier. Je zou een workflow kunnen laten maken die deze gegevens automatisch in je EPD zet en een bevestigingsmail stuurt. Beschrijf: 'Maak een workflow die nieuwe inzendingen uit mijn Google Form verwerkt, een contact aanmaakt in mijn EPD en een welkomstmail stuurt.' De AI regelt de rest, jij hoeft alleen nog de specifieke velden te controleren.

**Als je een freelance professional bent en je facturatie wilt stroomlijnen.** Je zou een workflow kunnen laten maken die na het afronden van een project automatisch een factuur genereert en verstuurt. Een omschrijving: 'Maak een workflow die na een nieuwe betaling in Stripe een factuur maakt in mijn boekhoudtool en deze per e-mail verstuurt naar de klant.' De AI bouwt de workflow, inclusief de trigger en de acties, en je kunt hem direct testen.

De praktische toepassing hangt af van jouw situatie, maar de kern is simpel: beschrijf wat je nodig hebt, en n8n bouwt het voor je. Het enige wat je nodig hebt is een n8n-installatie en een AI-client die MCP ondersteunt.

Bron: [n8n Blog](https://blog.n8n.io/n8n-mcp-server/)

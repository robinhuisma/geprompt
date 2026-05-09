---
title: "n8n MCP-server bouwt workflows vanuit een prompt: automatiseren zonder code"
date: 2026-05-09T22:14:03.342Z
tags: ["n8n", "automatisering", "mcp", "ai-tools"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je wilt in ChatGPT of Claude, en n8n bouwt de workflow voor je. Geen programmeerkennis nodig."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord

De nieuwste update van n8n’s MCP-server stelt je in staat om complete workflows te bouwen en aan te passen met alleen een beschrijving in natuurlijke taal, zonder dat je een regel code hoeft te schrijven. Je vertelt een AI-assistent zoals ChatGPT of Claude wat je nodig hebt, en die zet het om in een werkende automatisering in n8n, inclusief validatie en foutcorrectie.

Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server (Model Context Protocol) uitgebreid. Waar je voorheen alleen bestaande workflows kon uitvoeren via AI-assistenten, kun je nu ook nieuwe workflows laten bouwen en bestaande aanpassen. Het werkt met elke AI-client die het MCP-protocol ondersteunt, zoals Claude Desktop, ChatGPT, Cursor en Windsurf. De server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis Community Edition. Het is een first-party functie, dus er is geen externe dienst nodig. De update is al enkele weken in publieke preview en wordt dagelijks gebruikt door het n8n-team zelf.

Wat dit betekent

Voor ondernemers en professionals betekent dit een enorme versnelling in het automatiseren van terugkerende taken. Waar je eerder handmatig workflows moest configureren, kun je nu in een paar minuten een werkende automatisering krijgen door simpelweg te beschrijven wat je nodig hebt. Denk aan het dagelijks versturen van een weersvoorspelling, het genereren van rapporten, of het synchroniseren van data tussen systemen. Het elimineert de drempel van programmeerkennis en het gedoe met JSON-bestanden en foutmeldingen. De AI bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets misgaat. Dit maakt automatisering toegankelijk voor een veel bredere groep gebruikers, niet alleen voor developers.

Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijks ordergegevens moet verwerken.** Je zou een workflow kunnen laten bouwen die elke ochtend automatisch een overzicht van nieuwe bestellingen uit je webshop haalt, de gegevens verrijkt met trackinginformatie van de vervoerder, en een overzicht stuurt naar je e-mail. Beschrijf dit in een paar zinnen aan Claude of ChatGPT, en de workflow wordt voor je aangemaakt. Een optie is om ook een foutafhandeling toe te voegen: als een trackingnummer ontbreekt, stuurt de workflow een melding zodat je handmatig kunt ingrijpen.

**Als je een team aanstuurt en wekelijkse rapportages wilt automatiseren.** Overweeg om een workflow te laten maken die elke maandagochtend data uit je CRM, projectmanagementtool en financiële systeem verzamelt, combineert in een dashboard, en dat per e-mail naar het team stuurt. Je kunt de AI vragen om de workflow zo in te richten dat hij alleen de belangrijkste KPI’s toont, en dat hij zichzelf aanpast als een databron verandert. Het mooie is dat je achteraf eenvoudig aanpassingen kunt vragen, zoals het toevoegen van een extra grafiek of het wijzigen van de verzendlijst.

**Als je in de zorg werkt en patiëntgegevens moet bijwerken.** Een mogelijkheid is om een workflow te bouwen die nieuwe afspraakbevestigingen uit je agenda haalt, de bijbehorende patiëntgegevens uit het EPD ophaalt, en een gestandaardiseerde bevestigingsmail stuurt. Beschrijf het proces in een paar zinnen, en de AI zet het om in een werkende workflow. Je kunt ook vragen om een validatiestap: als een patiënt geen e-mailadres heeft, moet de workflow een notitie aanmaken in plaats van een foutmelding geven.

**Als je freelance facturen stuurt en betalingen wilt volgen.** Je zou een workflow kunnen laten maken die elke keer als je een factuur stuurt via je boekhoudpakket, automatisch een herinnering plant voor de vervaldatum. Als de betaling binnenkomt, kan de workflow de status bijwerken en een bevestiging sturen. Beschrijf dit scenario aan de AI, en het bouwt de workflow inclusief condities voor betalingstermijnen en uitzonderingen voor vaste klanten.

De praktische toepassing hangt af van jouw specifieke situatie, maar de kern is dat je met een simpele beschrijving een complete automatisering kunt laten bouwen, zonder dat je technische kennis nodig hebt. Het enige wat je nodig hebt is een n8n-installatie en een AI-client die MCP ondersteunt.

Bron: n8n Blog

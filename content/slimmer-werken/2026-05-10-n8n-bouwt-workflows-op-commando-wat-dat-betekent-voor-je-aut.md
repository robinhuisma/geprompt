---
title: "n8n bouwt workflows op commando: wat dat betekent voor je automatisering"
date: 2026-05-10T10:18:01.212Z
tags: ["automatisering", "n8n", "AI", "workflows"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt in ChatGPT en n8n maakt er direct een werkende workflow van."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord

n8n heeft een update uitgebracht waarmee je met een simpele prompt in ChatGPT, Claude of je IDE direct een werkende workflow kunt laten bouwen, zonder dat je handmatig nodes hoeft te slepen of JSON hoeft te kopiëren. Dit betekent dat je tijdrovende processen zoals factuurverwerking, leadopvolging of rapportages kunt automatiseren door simpelweg te beschrijven wat je nodig hebt.

Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server uitgebreid. Waar de server eerder alleen bestaande workflows kon uitvoeren, kan hij nu ook nieuwe workflows bouwen en bestaande aanpassen. Dit gebeurt op basis van een prompt die je geeft aan een AI-client zoals Claude, ChatGPT, Cursor of Windsurf. De AI-client communiceert via het MCP-protocol (Model Context Protocol) met je n8n-installatie. Het resultaat: een kant-en-klare workflow die direct draait, inclusief validatie en zelfcorrectie bij fouten. De functie is beschikbaar in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party functie, dus geen externe dienst nodig. n8n gebruikt het zelf al dagelijks.

Wat dit betekent

Voor ondernemers en professionals die regelmatig terugkerende taken automatiseren, verandert dit de manier van werken. Waar je eerder handmatig nodes moest configureren, fouten moest opsporen en workflows moest testen, kun je nu in natuurlijke taal aangeven wat je nodig hebt. De AI bouwt de workflow, valideert hem en past hem aan als iets niet werkt. Dit verlaagt de drempel om automatisering in te zetten, vooral voor mensen zonder technische achtergrond. Het betekent ook dat je sneller kunt itereren: een aanpassing vragen in de chat is sneller dan een workflow handmatig aanpassen. Voor kleine bedrijven met beperkte tijd en middelen kan dit een groot verschil maken.

Hoe je dit kunt toepassen

**Als je dagelijks offertes of facturen verstuurt.** Je zou een workflow kunnen laten bouwen die elke ochtend een overzicht stuurt van openstaande facturen. Beschrijf in Claude of ChatGPT: 'Maak een workflow die elke werkdag om 9 uur een e-mail stuurt met een lijst van facturen die langer dan 30 dagen openstaan, gebruik mijn Gmail-account.' De AI bouwt de workflow, je hoeft alleen nog je e-mailadres in te vullen.

**Als je leads opvolgt vanuit een CRM.** Een mogelijkheid is om een workflow te maken die automatisch een herinnering stuurt wanneer een lead langer dan een week geen reactie heeft gegeven. Prompt: 'Maak een workflow die elke dag controleert of er leads zijn die meer dan 7 dagen geleden voor het laatst zijn gecontacteerd, en stuur een follow-up e-mail met een vriendelijke herinnering.' De AI zet de nodes voor je klaar.

**Als je wekelijkse rapportages maakt voor je team.** Overweeg om een workflow te laten genereren die elke maandagochtend een samenvatting van de vorige week stuurt, met data uit je projectmanagementtool. Prompt: 'Maak een workflow die elke maandag om 8 uur een e-mail stuurt met een overzicht van afgeronde taken van de afgelopen week, gebruik mijn Todoist-account.' De AI bouwt de workflow en je kunt direct zien of het werkt.

**Als je een webshop runt en voorraadbeheer wilt automatiseren.** Je zou een workflow kunnen laten maken die je waarschuwt wanneer een product onder een bepaalde voorraaddrempel komt. Prompt: 'Maak een workflow die elk uur controleert of de voorraad van product X onder de 10 stuks komt, en stuur dan een Slack-bericht naar het team.' De AI zorgt voor de verbindingen en validatie.

**Als je een team aanstuurt en repetitieve taken wilt uitbesteden.** Een optie is om een workflow te laten bouwen die automatisch een welkomstmail stuurt naar nieuwe medewerkers, inclusief een link naar de onboarding-documenten. Prompt: 'Maak een workflow die elke keer dat een nieuw e-mailadres wordt toegevoegd aan een Google Sheet, een welkomstmail stuurt met een bijlage.' De AI bouwt het in een paar minuten.

Bron: n8n Blog (https://blog.n8n.io/n8n-mcp-server/)

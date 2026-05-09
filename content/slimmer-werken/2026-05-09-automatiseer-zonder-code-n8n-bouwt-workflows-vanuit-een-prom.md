---
title: "Automatiseer zonder code: n8n bouwt workflows vanuit een prompt"
date: 2026-05-09T14:17:48.161Z
tags: ["n8n", "automatisering", "ai", "mcp"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je wilt in ChatGPT of Claude, en n8n maakt er direct een werkende workflow van."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord: Je kunt nu in n8n een werkende workflow laten bouwen door simpelweg in je AI-client te beschrijven wat je nodig hebt. Geen programmeerkennis, geen gekopieer van JSON-bestanden, geen heen-en-weer gepuzzel. Je zegt wat je wilt, en n8n maakt het.

## Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server bijgewerkt. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client zoals ChatGPT of Claude, kun je nu ook nieuwe workflows laten maken en bestaande aanpassen. De MCP-server werkt in elke AI-client die het MCP-protocol ondersteunt: Claude, ChatGPT, Cursor, Windsurf en andere. Het is een first-party functie, ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is de afgelopen weken in publieke preview geweest en wordt volgens n8n al dagelijks door het eigen team gebruikt.

## Wat dit betekent

Voor ondernemers en professionals die regelmatig terugkerende handmatige processen automatiseren, verandert dit de manier van werken. Waar je voorheen zelf een workflow moest ontwerpen, nodes aan elkaar moest klikken en instellingen moest controleren, kun je nu een beschrijving geven in natuurlijke taal. Het systeem bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. Dit bespaart tijd, vermindert fouten en maakt automatisering toegankelijk voor mensen zonder technische achtergrond. Het betekent ook dat je niet meer hoeft te schakelen tussen tools: je blijft in je vertrouwde AI-omgeving werken.

## Hoe je dit kunt toepassen

**Als je dagelijks handmatige rapporten maakt.** Stel dat je elke ochtend een weerbericht per mail wilt ontvangen. Je opent Claude of ChatGPT en typt: 'Maak een n8n-workflow die elke dag om 7 uur een e-mail stuurt met de weersverwachting voor vandaag, via mijn Gmail-account.' Binnen een paar minuten staat de workflow klaar. Je hoeft alleen nog je eigen e-mailadres in te vullen. Een mogelijkheid is om dit uit te breiden naar andere terugkerende meldingen, zoals voorraadwaarschuwingen of nieuwe bestellingen.

**Als je een webshop runt en productupdates wilt automatiseren.** Je zou kunnen vragen: 'Maak een workflow die elke maandagochtend een overzicht stuurt van producten die onder de minimumvoorraad zitten, met een link naar de inkooporder in mijn administratiesysteem.' De AI bouwt de workflow, inclusief de benodigde API-koppelingen. Overweeg om dit te combineren met een tweede workflow die automatisch een inkooporder aanmaakt bij een bepaalde drempelwaarde.

**Als je een team aanstuurt en terugkerende taken wilt standaardiseren.** Een optie is om een workflow te laten maken die nieuwe leads uit een CRM-systeem haalt, ze categoriseert op basis van bedrijfsgrootte en sector, en vervolgens een gepersonaliseerde welkomstmail stuurt. Je beschrijft wat je nodig hebt, de AI zet de stappen uit. Je zou kunnen beginnen met een eenvoudige versie en later uitbreiden met extra stappen, zoals het toevoegen van taken in je projectmanagementtool.

**Als je in de zorg werkt en patiëntcommunicatie wilt stroomlijnen.** Stel dat je een workflow nodig hebt die elke dag een herinnering stuurt naar patiënten met een afspraak de volgende dag. Je typt: 'Maak een workflow die elke avond om 20 uur een e-mail stuurt naar patiënten met een afspraak morgen, met de tijd en locatie, via mijn praktijk-e-mail.' De AI bouwt de workflow, inclusief de logica om alleen de juiste patiënten te selecteren. Een mogelijkheid is om dit later uit te breiden met een SMS-optie voor patiënten die geen e-mail gebruiken.

Bron: n8n blog (https://blog.n8n.io/n8n-mcp-server/)

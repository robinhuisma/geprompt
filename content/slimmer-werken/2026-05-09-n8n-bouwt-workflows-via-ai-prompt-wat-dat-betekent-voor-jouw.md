---
title: "n8n bouwt workflows via AI-prompt: wat dat betekent voor jouw automatisering"
date: 2026-05-09T02:13:47.262Z
tags: ["n8n", "workflow automatisering", "AI", "MCP"]
categorieen: ["slimmer-werken"]
summary: "Vertel een AI-tool wat je nodig hebt en n8n maakt er direct een werkende workflow van."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je beschrijft wat je nodig hebt in een AI-tool zoals ChatGPT of Claude, en n8n bouwt er direct een werkende workflow van. Geen handmatig koppelen van nodes, geen foutmeldingen in JSON, geen heen-en-weer gepraat met een ontwikkelaar.

## Wat er aan de hand is

n8n, het populaire workflow-automatiseringsplatform, heeft zijn MCP-server geüpdatet. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client, kun je nu ook nieuwe workflows laten bouwen en bestaande aanpassen. Dit gebeurt rechtstreeks in je eigen n8n-installatie, of je nu de cloudversie, de enterprise-editie of de gratis self-hosted Community Edition gebruikt.

Het werkt via het MCP-protocol (Model Context Protocol), waarmee AI-tools zoals Claude, ChatGPT, Cursor of Windsurf kunnen communiceren met n8n. Je vertelt de AI wat je wilt, die bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets misgaat. Volgens n8n gebruikt het eigen team de functionaliteit al dagelijks.

## Wat dit betekent

Voor ondernemers zonder technische achtergrond opent dit een nieuwe manier om automatisering in te zetten. Waar je eerder een ontwikkelaar nodig had om workflows te bouwen in n8n, of zelf uren moest besteden aan het leren van de interface, kun je nu in natuurlijke taal aangeven wat je nodig hebt. De AI vertaalt dat naar een werkende workflow.

Dit is vooral relevant voor MKB-bedrijven die processen willen automatiseren maar geen dedicated developer in huis hebben. Denk aan terugkerende taken zoals facturatie, leadopvolging, e-mailcampagnes of data-synchronisatie. De drempel om te beginnen wordt lager, en de tijd van idee naar werkende automatisering krimpt van dagen naar minuten.

## Hoe je dit kunt toepassen

**Als je elke ochtend een weersvoorspelling in je mailbox wilt ontvangen.** Je zou tegen Claude of ChatGPT kunnen zeggen: 'Maak een n8n-workflow die elke dag om 7 uur een e-mail stuurt met de weersverwachting voor Amsterdam, via mijn Gmail-account.' De AI bouwt de workflow, je vult alleen je e-mailadres in, en de volgende ochtend ontvang je de verwachting. Dit principe werkt voor elke terugkerende notificatie: nieuwe leads, orderbevestigingen, of voorraadwaarschuwingen.

**Als je een facturatieproces wilt automatiseren.** Een mogelijkheid is om te vragen: 'Maak een workflow die elke maand op de 1e een factuur genereert op basis van een Google Sheets-overzicht met uren, en die per e-mail verstuurt naar de klant.' De AI zet de nodes voor je klaar. Je hoeft alleen nog je eigen gegevens in te vullen. Dit bespaart je elke maand een half uur handmatig werk.

**Als je leads uit een contactformulier wilt opvolgen.** Overweeg om een prompt te geven zoals: 'Maak een workflow die een nieuwe lead uit een webformulier opslaat in een database, een welkomstmail stuurt, en een taak aanmaakt in een projectmanagementtool voor opvolging binnen 24 uur.' De AI bouwt de keten van nodes. Je kunt daarna zelf de timing en inhoud van de mails aanpassen.

**Als je bestaande workflows wilt aanpassen zonder ze opnieuw te bouwen.** Stel dat je een workflow hebt die dagelijks een rapport mailt, maar je wilt het format wijzigen. Je zegt tegen de AI: 'Verander de workflow zodat de e-mail een HTML-template gebruikt in plaats van een code-node, en voeg een bijlage toe met de ruwe data.' De AI past de bestaande workflow aan zonder dat je handmatig nodes hoeft te verslepen.

**Als je meerdere AI-tools gebruikt en geen nieuwe tool wilt leren.** Omdat n8n's MCP-server werkt met elke AI-client die MCP ondersteunt, kun je blijven werken in de tool die je al gebruikt. Of dat nu Claude, ChatGPT of Cursor is. Je hoeft geen aparte interface te leren voor n8n. De AI is je tussenpersoon.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

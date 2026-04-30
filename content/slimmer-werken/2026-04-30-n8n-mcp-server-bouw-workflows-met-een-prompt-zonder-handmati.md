---
title: "n8n MCP Server: bouw workflows met een prompt, zonder handmatig klikken"
date: 2026-04-30T22:04:08.893Z
tags: ["n8n", "mcp", "workflow-automatisering", "ai"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je wilt in ChatGPT of Claude, en n8n bouwt de werkende workflow voor je."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord: n8n heeft zijn MCP-server uitgebreid zodat je nu niet alleen bestaande workflows kunt uitvoeren, maar ook nieuwe workflows kunt bouwen en bestaande kunt aanpassen met een simpele prompt in je AI-client. Geen handmatig knoppen plaatsen, triggers instellen of JSON-bestanden kopiëren. Je beschrijft wat je wilt in ChatGPT, Claude of een andere AI-client die MCP ondersteunt, en n8n bouwt de workflow, valideert hem, voert hem uit en herstelt fouten automatisch.

## Wat er aan de hand is

Volgens een blogbericht van n8n heeft het bedrijf de MCP-server in n8n uitgebreid. Waar je eerder alleen bestaande workflows kon aansturen via een AI-client, kun je nu ook nieuwe workflows laten bouwen en bestaande workflows laten aanpassen. De MCP-server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party functie die door n8n zelf wordt onderhouden, zonder dat je een externe dienst naast je eigen n8n-instantie hoeft te draaien. De functie was de afgelopen weken in publieke preview en wordt volgens n8n intern al dagelijks gebruikt.

Het is belangrijk om het verschil te zien met de MCP Server Trigger node. Die laatste stelt één enkele workflow bloot als MCP-server. De MCP-server waar dit artikel over gaat, laat externe AI-clients verbinden met je hele n8n-instantie.

## Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken voor automatisering, betekent dit dat je een groot deel van het handmatige bouwwerk kunt overslaan. In plaats van zelf uit te zoeken welke nodes je nodig hebt, hoe je ze aan elkaar koppelt en waar de triggers moeten staan, geef je een beschrijving in natuurlijke taal. De AI-client vertaalt dat naar een werkende workflow in n8n. Dat scheelt tijd, vooral bij eenvoudige tot middelmatig complexe workflows. Het maakt n8n ook toegankelijker voor mensen die minder technisch zijn. Je hoeft niet meer precies te weten welke node wat doet. Je beschrijft het resultaat, en de workflow ontstaat vanzelf.

Voor bestaande gebruikers betekent het dat je workflows sneller kunt aanpassen. In plaats van een workflow te openen, te begrijpen wat er gebeurt en handmatig nodes te verplaatsen of te vervangen, kun je in je AI-client zeggen wat er moet veranderen. n8n past de workflow aan, valideert hem en voert hem uit. Als er iets misgaat, probeert het systeem zichzelf te herstellen.

## Hoe je dit kunt toepassen

**Als je een dagelijkse rapportage wilt automatiseren.** Stel dat je elke ochtend een e-mail wilt met de weersverwachting, zoals in het voorbeeld van n8n. Je opent Claude of ChatGPT en typt: 'Maak een n8n-workflow die elke dag om 7 uur een e-mail stuurt met de weersverwachting voor vandaag, via mijn Gmail-account.' De AI-client bouwt de workflow, inclusief de API-call naar een weerdienst en de Gmail-node. Het enige wat je nog handmatig moet doen, is je eigen e-mailadres invullen in de Gmail-node. Daarna draait de workflow volledig automatisch.

**Als je een bestaande workflow wilt aanpassen zonder hem helemaal te hoeven doorgronden.** Stel dat je een workflow hebt die nieuwe leads uit een CRM haalt en in een spreadsheet zet, maar je wilt dat de gegevens nu ook naar een Slack-kanaal worden gestuurd. In plaats van de workflow te openen, uit te zoeken waar je de Slack-node moet plaatsen en de juiste velden te koppelen, zeg je in je AI-client: 'Voeg een Slack-node toe aan de bestaande lead-workflow die een bericht stuurt naar het kanaal #sales-leads met de naam en het e-mailadres van de lead.' n8n past de workflow aan, valideert hem en zet hem klaar voor gebruik.

**Als je een workflow wilt bouwen voor een terugkerende taak, maar niet zeker weet welke nodes je nodig hebt.** Denk aan het dagelijks downloaden van een CSV-bestand van een FTP-server, het verwerken van de data en het opslaan in een database. Je beschrijft het proces in natuurlijke taal: 'Maak een workflow die elke dag om 9 uur een CSV-bestand ophaalt van mijn FTP-server, de data filtert op actieve klanten en die in mijn PostgreSQL-database zet.' De AI-client kiest de juiste nodes, stelt de verbindingen in en geeft je een werkende workflow. Je hoeft alleen nog je inloggegevens in te vullen.

**Als je een workflow wilt laten verbeteren door de AI.** In het voorbeeld van n8n zag je dat de eerste versie van de weer-workflow veel code gebruikte voor de opmaak van de e-mail. De gebruiker vroeg vervolgens om die code te vervangen door standaard n8n-nodes. Dat is een mogelijkheid: je kunt de AI vragen om een workflow te optimaliseren, nodes te vervangen of de structuur te vereenvoudigen. Je zegt gewoon wat je anders wilt, en n8n past het aan.

**Als je meerdere AI-clients gebruikt en geen nieuwe tool wilt leren.** De MCP-server werkt met elke AI-client die het MCP-protocol ondersteunt: Claude, ChatGPT, Cursor, Windsurf. Je kunt dus blijven werken in de tool die je gewend bent. Geen nieuwe interface, geen context-switching. Je opent je AI-client, beschrijft wat je nodig hebt, en de workflow verschijnt in n8n.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

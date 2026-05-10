---
title: "n8n MCP-server bouwt workflows vanuit een prompt: wat dat betekent"
date: 2026-05-10T02:17:35.022Z
tags: ["n8n", "mcp-server", "workflow-automatisering", "ai"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt en n8n bouwt de workflow — zonder code, in enkele minuten."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord: n8n heeft zijn MCP-server uitgebreid zodat je nu niet alleen bestaande workflows kunt uitvoeren, maar ook nieuwe workflows kunt bouwen en bestaande kunt aanpassen door simpelweg te beschrijven wat je nodig hebt. Je geeft een opdracht aan een AI-client zoals Claude of ChatGPT, en die bouwt de workflow direct in jouw n8n-omgeving, valideert hem, voert hem uit en herstelt fouten automatisch.

## Wat er aan de hand is

n8n, het populaire open-source workflow-automatiseringsplatform, heeft een belangrijke update uitgebracht voor zijn MCP-server. De MCP-server (Model Context Protocol) bestond al een paar maanden, maar kon alleen bestaande workflows uitvoeren. Vanaf nu kun je er ook nieuwe workflows mee maken en bestaande aanpassen. Het proces werkt als volgt: je vertelt een AI-client wat je wilt, die bouwt de workflow in n8n, controleert of alles klopt, voert hem uit en lost problemen zelf op. Volgens n8n werkt dit met elke AI-client die MCP ondersteunt: Claude, ChatGPT, Cursor, Windsurf en andere. De server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis Community Edition. Het is een first-party functie, onderhouden door n8n zelf, zonder dat je een externe dienst naast je n8n-installatie hoeft te draaien. De functie was de afgelopen weken in openbare preview en wordt volgens n8n al dagelijks gebruikt door het eigen team.

## Wat dit betekent

Voor Nederlandse ondernemers en professionals die n8n gebruiken voor automatisering, verandert dit de manier waarop je workflows maakt. Waar je eerder handmatig nodes moest slepen, verbindingen moest leggen en instellingen moest configureren, kun je nu in natuurlijke taal beschrijven wat je nodig hebt. De AI-client vertaalt dat naar een werkende workflow. Dit bespaart tijd, vermindert fouten door handmatig copy-pasten van JSON en maakt het eenvoudiger om workflows te onderhouden. Het betekent ook dat je minder technische kennis nodig hebt om complexe automatiseringen op te zetten. Vooral voor MKB-bedrijven zonder dedicated developer kan dit de drempel verlagen om processen te automatiseren. De integratie werkt met AI-clients die je mogelijk al gebruikt, zoals Claude of ChatGPT, dus je hoeft geen nieuw gereedschap te leren.

## Hoe je dit kunt toepassen

**Als je dagelijkse rapportages automatiseert.** Stel dat je elke ochtend een e-mail wilt met de weersverwachting voor vandaag. Je kunt tegen je AI-client zeggen: 'Maak een n8n-workflow die elke dag om 7 uur een e-mail stuurt met de weersverwachting voor Amsterdam, gebruik mijn Gmail-account.' De AI bouwt de workflow, je vult alleen je e-mailadres in, en hij draait. Je zou kunnen beginnen met een eenvoudig voorbeeld zoals dit om te ervaren hoe het werkt.

**Als je bestaande workflows wilt aanpassen zonder ze opnieuw te bouwen.** Heb je een workflow die je eerder handmatig hebt gemaakt, maar wil je de opmaak van een e-mail veranderen of een extra stap toevoegen? Je kunt tegen de AI zeggen: 'Vervang de code-node in mijn workflow door een HTML-template in de Gmail-node.' De AI past de workflow aan, valideert de wijzigingen en zet hem klaar voor gebruik. Dit is handig als je workflows hebt die je niet meer precies weet hoe ze in elkaar zitten.

**Als je een team hebt dat automatiseringen beheert.** Je kunt de MCP-server inzetten als een gedeelde tool. Een collega zonder technische achtergrond kan een workflow beschrijven, de AI bouwt hem, en jij controleert alleen of alles klopt. Een mogelijkheid is om een project aan te maken in n8n en de AI te vragen workflows in dat project te plaatsen, zodat alles overzichtelijk blijft.

**Als je meerdere AI-clients gebruikt.** Omdat de MCP-server werkt met elke client die MCP ondersteunt, kun je dezelfde n8n-omgeving aansturen vanuit Claude, ChatGPT of Cursor. Je hoeft niet te kiezen. Een optie is om te experimenteren met welke AI-client het beste past bij jouw manier van werken.

**Als je snel een prototype wilt maken.** Wil je een nieuwe automatisering testen zonder er veel tijd in te steken? Beschrijf wat je nodig hebt, de AI bouwt een werkende eerste versie, en je kunt direct zien of het concept werkt. Als het niet precies is wat je bedoelde, kun je de AI vragen om aanpassingen te doen.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

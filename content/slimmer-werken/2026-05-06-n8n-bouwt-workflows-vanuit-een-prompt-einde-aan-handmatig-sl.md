---
title: "n8n bouwt workflows vanuit een prompt: einde aan handmatig slepen"
date: 2026-05-06T10:12:27.859Z
tags: ["n8n", "workflow automatisering", "AI integratie", "MCP server"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt in ChatGPT of Claude, en n8n bouwt de workflow automatisch."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Een simpele prompt in ChatGPT of Claude is genoeg om een complete workflow in n8n te laten bouwen. Je hoeft geen nodes meer te slepen, geen JSON te plakken en geen fouten handmatig op te sporen. Het MCP-server van n8n maakt van een beschrijving in natuurlijke taal een werkende automatisering.

## Wat er aan de hand is

n8n heeft zijn MCP-server uitgebreid. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client, kun je nu ook nieuwe workflows laten bouwen en bestaande aanpassen. Het proces werkt zo: je vertelt Claude, ChatGPT of een andere AI-client wat je nodig hebt, de server bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. Volgens n8n is de functionaliteit beschikbaar in alle edities: Cloud, Enterprise en de gratis self-hosted Community Edition. Het bedrijf meldt dat het team de tool zelf al dagelijks gebruikt. De MCP-server werkt met elke AI-client die het MCP-protocol ondersteunt, zoals Claude, ChatGPT, Cursor en Windsurf.

## Wat dit betekent

Voor ondernemers die regelmatig integraties bouwen, betekent dit een forse tijdsbesparing. Waar je normaal handmatig nodes aan elkaar koppelt, instellingen controleert en fouten oplost, kun je nu in een paar minuten een werkende workflow krijgen. Het voorbeeld dat n8n geeft: een prompt voor een dagelijkse weersvoorspelling per e-mail levert binnen enkele minuten een werkende workflow op. Alleen het eigen e-mailadres moest nog worden ingevuld. Dit maakt automatisering toegankelijker voor ondernemers die geen technische achtergrond hebben, maar wel processen willen stroomlijnen. Voor wie al met n8n werkt, bespaart het uren aan integratiewerk per maand.

## Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijks orderbevestigingen verwerkt.** Je zou een workflow kunnen laten bouwen die automatisch een e-mail stuurt met trackinginformatie zodra een bestelling de status 'verzonden' krijgt. Beschrijf in ChatGPT wat je nodig hebt, en de MCP-server zet het voor je in elkaar. Je bespaart tijd omdat je niet zelf de Gmail- en Shopify-nodes hoeft te configureren.

**Als je een team aanstuurt en rapportages automatiseert.** Overweeg om een workflow te laten maken die elke maandagochtend een overzicht van de afgelopen week uit je CRM haalt en naar je team mailt. Je kunt de prompt zo specifiek maken als je wilt, bijvoorbeeld met filters op verkopen of nieuwe leads. De server bouwt de workflow en je kunt hem direct testen.

**Als je in de zorg werkt en herinneringen wilt sturen voor afspraken.** Een mogelijkheid is om een workflow te laten maken die een dag voor een afspraak een herinnering stuurt via e-mail of SMS. Je beschrijft de gewenste actie in natuurlijke taal, en de server regelt de koppeling met je agenda en berichtendienst. Geen handmatige configuratie meer.

**Als je als ZZP'er facturen en betalingen wilt bijhouden.** Je zou een workflow kunnen laten bouwen die bij een nieuwe betaling in je betaalprovider automatisch een factuur genereert en naar de klant stuurt. De prompt kan eenvoudig zijn: 'Stuur een factuur naar de klant zodra een betaling binnenkomt via Stripe.' De server vult de rest in.

Bron: [n8n Blog](https://blog.n8n.io/n8n-mcp-server/)

---
title: "n8n bouwt workflows vanuit tekst: automatiseren zonder code"
date: 2026-05-01T02:05:52.655Z
tags: ["automatisering", "n8n", "ai", "mcp"]
categorieen: ["slimmer-werken"]
summary: "Vertel een AI-assistent wat je wilt en n8n maakt er direct een werkende workflow van."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je kunt nu een werkende automatisering laten bouwen door een AI-assistent, zonder dat je zelf een regel code hoeft te schrijven. n8n, het populaire platform voor workflow-automatisering, heeft zijn MCP-server uitgebreid: die kan niet alleen bestaande workflows uitvoeren, maar ook nieuwe maken en aanpassen op basis van een simpele tekstinstructie.

## Wat er aan de hand is

n8n heeft een zogeheten MCP-server (Model Context Protocol) geïntegreerd in alle edities van het platform: de cloudversie, de enterprise-editie en de gratis zelf-gehoste community-editie. De server was al een paar maanden beschikbaar, maar kon alleen bestaande workflows uitvoeren. Sinds kort kun je er ook nieuwe workflows mee bouwen en bestaande aanpassen. Je geeft een instructie aan een AI-client zoals Claude, ChatGPT, Cursor of Windsurf, en die client stuurt via het MCP-protocol een opdracht naar jouw n8n-installatie. n8n bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. Volgens n8n gebruikt het eigen team de functionaliteit al dagelijks.

## Wat dit betekent

Voor ondernemers en professionals die regelmatig terugkerende taken automatiseren, betekent dit een flinke tijdwinst. Waar je voorheen handmatig nodes aan elkaar moest klikken, instellingen moest controleren en fouten moest oplossen, kun je nu in natuurlijke taal aangeven wat je wilt. De AI-assistent vertaalt dat naar een werkende workflow. Dat bespaart niet alleen tijd, maar verlaagt ook de drempel voor mensen die niet dagelijks met n8n werken. Het systeem werkt in elke AI-client die het MCP-protocol ondersteunt, dus je hoeft geen nieuw gereedschap te leren. n8n onderhoudt de server zelf, er is geen externe dienst nodig naast je eigen installatie.

## Hoe je dit kunt toepassen

**Als je dagelijks handmatig data uit verschillende bronnen verzamelt.** Stel dat je elke ochtend een overzicht wilt van het weer, je agenda en je belangrijkste e-mails. Je kunt tegen Claude of ChatGPT zeggen: 'Maak een workflow die elke werkdag om 8 uur een e-mail stuurt met het weerbericht voor vandaag, mijn eerste drie afspraken en ongelezen berichten van mijn belangrijkste contacten.' n8n bouwt de workflow, je hoeft alleen nog je eigen e-mailadres in te vullen. Een mogelijkheid is om te beginnen met een eenvoudig voorbeeld, zoals de weersverwachting, en daarna stap voor stap uit te breiden.

**Als je een team aanstuurt en collega's wilt laten meedenken over automatiseringen.** Je kunt een AI-client vragen om een workflow te maken en die vervolgens delen met je team. Omdat de workflow in n8n staat, kunnen anderen hem bekijken, aanpassen of uitbreiden zonder dat ze de oorspronkelijke prompt opnieuw hoeven in te voeren. Overweeg om een wekelijkse sessie in te plannen waarin je samen met je team een nieuwe automatisering laat bouwen en direct test. Zo ontdek je snel wat werkt en wat niet.

**Als je bestaande workflows wilt verbeteren maar niet weet waar je moet beginnen.** Je kunt een bestaande workflow openen en tegen de AI zeggen: 'Deze workflow gebruikt veel code voor opmaak. Kun je de opmaak vervangen door standaard n8n-nodes?' De AI past de workflow aan, valideert hem en je kunt direct zien of het beter werkt. Een optie is om eerst een kleine aanpassing te vragen, zoals het wijzigen van een e-mailadres of het toevoegen van een extra stap, om te ervaren hoe het proces werkt.

**Als je een webshop runt en terugkerende processen wilt automatiseren.** Denk aan het versturen van een bedankmail na een bestelling, het bijwerken van voorraadstanden of het aanmaken van facturen. Je kunt een prompt geven als: 'Maak een workflow die na elke nieuwe bestelling in Shopify een factuur aanmaakt in mijn boekhoudpakket en een bedankmail stuurt met de track-and-trace-code.' De AI bouwt de workflow, je controleert of de juiste koppelingen zijn gelegd en je bent klaar. Het systeem herstelt zichzelf bij fouten, dus je hoeft niet steeds handmatig in te grijpen.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

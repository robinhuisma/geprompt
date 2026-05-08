---
title: "n8n MCP-server maakt workflow-automatisering via simpele prompts mogelijk"
date: 2026-05-08T22:11:30.467Z
tags: ["n8n", "automatisering", "mcp", "workflow"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf in je AI-tool wat je nodig hebt en n8n bouwt de workflow automatisch."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord
n8n heeft zijn MCP-server uitgebreid zodat je nu niet alleen bestaande workflows kunt uitvoeren, maar ook nieuwe workflows kunt bouwen en aanpassen via een simpele prompt in je AI-tool. Dit betekent dat je zonder programmeerkennis complete bedrijfsprocessen kunt automatiseren door in gewone taal te beschrijven wat je nodig hebt.

Wat er aan de hand is
n8n, het populaire workflow-automatiseringsplatform, heeft een update uitgebracht voor zijn MCP-server (Model Context Protocol). Waar de server eerder alleen bestaande workflows kon uitvoeren, kan hij nu ook nieuwe workflows vanaf nul bouwen en bestaande workflows aanpassen. Je geeft een opdracht in een AI-client zoals Claude, ChatGPT, Cursor of Windsurf, en n8n bouwt de workflow, valideert deze, voert hem uit en herstelt fouten automatisch. De functionaliteit is beschikbaar in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Volgens n8n wordt de MCP-server intern al dagelijks gebruikt door het eigen team.

Wat dit betekent
Voor ondernemers en professionals die n8n gebruiken, verdwijnt een belangrijke drempel. Waar je voorheen handmatig workflows moest samenstellen uit nodes en verbindingen, kun je nu in natuurlijke taal aangeven wat je wilt. De AI-client vertaalt dat naar een werkende workflow. Dit bespaart tijd, voorkomt fouten door handmatig kopiëren en plakken, en maakt automatisering toegankelijk voor mensen zonder technische achtergrond. Omdat de MCP-server in alle edities van n8n zit, is er geen extra tool of abonnement nodig. Je blijft werken in de AI-client die je al gebruikt, zonder te schakelen tussen verschillende programma's.

Hoe je dit kunt toepassen
**Als je een webshop runt en dagelijks handmatig bestellingen verwerkt.** Je zou in Claude of ChatGPT kunnen typen: 'Maak een workflow die elke ochtend om 8 uur een overzicht stuurt van nieuwe bestellingen van de afgelopen 24 uur, met klantnaam, product en totaalbedrag, naar mijn zakelijke e-mailadres.' n8n bouwt de workflow, inclusief de verbinding met je winkelplatform en e-mail. Je hoeft alleen nog te controleren of het klopt.

**Als je een team aanstuurt en repetitieve taken wilt automatiseren.** Een mogelijkheid is om een prompt te geven zoals: 'Maak een workflow die elke maandag een Slack-bericht stuurt naar het team met een samenvatting van openstaande taken uit onze projectmanagementtool.' De MCP-server zet dit om in een werkende workflow, inclusief de API-verbindingen. Je kunt later in hetzelfde gesprek vragen om aanpassingen, zoals het toevoegen van een deadline-kleurcode.

**Als je in de zorg werkt en gestandaardiseerde rapportages nodig hebt.** Overweeg om een prompt te geven als: 'Maak een workflow die elke vrijdag om 15:00 een gestandaardiseerd rapport genereert uit ons cliëntvolgsysteem en dit als PDF opslaat in een gedeelde map.' De AI-client bouwt de workflow, en je kunt direct testen of de uitvoer klopt. Mocht er een fout optreden, dan probeert n8n deze zelf te herstellen.

**Als je een freelance consultant bent en meerdere klantprocessen beheert.** Je zou kunnen vragen: 'Maak een workflow die elke keer als ik een nieuwe e-mail ontvang van een specifieke klant, automatisch een taak aanmaakt in mijn takenlijst en een bevestigingsmail terugstuurt.' De MCP-server plaatst de workflow in het juiste project, zodat je overzicht houdt. Je kunt later eenvoudig aanpassingen vragen zonder de workflow opnieuw te hoeven bouwen.

Bron: n8n Blog (https://blog.n8n.io/n8n-mcp-server/)

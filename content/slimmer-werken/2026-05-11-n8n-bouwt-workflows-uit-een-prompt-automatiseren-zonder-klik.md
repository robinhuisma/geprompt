---
title: "n8n bouwt workflows uit een prompt: automatiseren zonder klikken"
date: 2026-05-11T10:21:40.486Z
tags: ["n8n", "automatisering", "AI", "MCP"]
categorieen: ["slimmer-werken"]
summary: "Vertel een AI wat je wilt en n8n maakt er een werkende workflow van, zonder handmatig instellen."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Het antwoord

n8n heeft zijn MCP-server bijgewerkt zodat je nu niet alleen bestaande workflows kunt uitvoeren, maar ook nieuwe workflows kunt bouwen en bestaande kunt aanpassen met een simpele prompt in een AI-client zoals Claude of ChatGPT. Dit betekent dat je automatiseringen kunt maken zonder dat je handmatig nodes, triggers of verbindingen hoeft in te stellen.

Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server (Model Context Protocol) uitgebreid. Waar de server eerder alleen bestaande workflows kon uitvoeren, kan hij nu ook nieuwe workflows vanaf nul bouwen en bestaande workflows aanpassen. Je geeft een beschrijving van wat je wilt in een AI-client zoals Claude, ChatGPT, Cursor of Windsurf, en de server bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat. Volgens n8n is de server ingebouwd in alle edities: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party, native functie die door n8n zelf wordt onderhouden en geen externe dienst vereist. De update is de afgelopen weken in publieke preview geweest en wordt volgens n8n al dagelijks door het eigen team gebruikt.

Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken, verandert dit de manier waarop je automatiseringen opzet. In plaats van handmatig nodes te slepen, triggers te configureren en verbindingen te testen, kun je nu in natuurlijke taal beschrijven wat je wilt. De AI-client vertaalt dat naar een werkende workflow. Dit bespaart tijd, vermindert fouten en maakt automatisering toegankelijker voor mensen die niet dagelijks met n8n werken. Het betekent ook dat je sneller kunt itereren: je vraagt om een aanpassing, de server past de workflow aan en test hem direct. Voor kleine bedrijven zonder dedicated automatiseringsspecialist kan dit de drempel verlagen om processen te automatiseren. Voor teams die al n8n gebruiken, versnelt het de ontwikkeling van nieuwe workflows.

Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijkse rapportages wilt automatiseren.** Je zou in Claude of ChatGPT kunnen zeggen: "Maak een n8n-workflow die elke ochtend om 8 uur een e-mail stuurt met de verkoopcijfers van gisteren uit mijn webshop-database." De server bouwt de workflow, inclusief de database-query en de e-mailnode. Je hoeft alleen nog je eigen gegevens in te vullen, zoals je e-mailadres of database-inloggegevens. Een mogelijkheid is om te beginnen met een eenvoudig verzoek en daarna in dezelfde conversie om aanpassingen te vragen, zoals het toevoegen van een bijlage of het wijzigen van het tijdstip.

**Als je een team aanstuurt en notificaties wilt inrichten voor projectmanagement.** Overweeg om te zeggen: "Maak een workflow die een Slack-bericht stuurt naar het kanaal #project-updates wanneer er een nieuwe taak wordt aangemaakt in Asana met prioriteit hoog." De server zet de trigger en de actie voor je klaar. Je zou daarna kunnen vragen om de workflow uit te breiden met een e-mail naar de projectleider als de taak niet binnen 24 uur wordt opgepakt. Het voordeel is dat je niet zelf hoeft uit te zoeken welke nodes je nodig hebt of hoe je de API-verbindingen configureert.

**Als je in de marketing werkt en contentpublicatie wilt stroomlijnen.** Een optie is om te vragen: "Bouw een workflow die elke maandag een nieuw blogbericht uit mijn Google Docs haalt en publiceert op WordPress, met een automatische social media-post op LinkedIn." De server maakt de keten van nodes aan. Mocht er een fout optreden, bijvoorbeeld omdat een API-sleutel ontbreekt, dan probeert de server zichzelf te herstellen. Je kunt daarna in dezelfde chat vragen om de opmaak aan te passen of een extra stap toe te voegen, zoals het genereren van een samenvatting met AI.

**Als je een financieel administratiekantoor hebt en facturatie wilt automatiseren.** Je zou kunnen zeggen: "Maak een workflow die elke keer als er een nieuwe betaling binnenkomt via Stripe, een factuur genereert in mijn boekhoudpakket en een kopie mailt naar de klant." De server bouwt de workflow met de juiste nodes. Een mogelijkheid is om daarna te vragen om een controle-stap toe te voegen die dubbele betalingen detecteert. Omdat de server de workflow valideert, weet je dat de logica klopt voordat je hem in productie neemt.

Bron: n8n blog (https://blog.n8n.io/n8n-mcp-server/)

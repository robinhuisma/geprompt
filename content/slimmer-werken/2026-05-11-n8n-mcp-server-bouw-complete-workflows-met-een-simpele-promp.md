---
title: "n8n MCP Server: bouw complete workflows met een simpele prompt"
date: 2026-05-11T22:13:21.709Z
tags: ["n8n", "mcp", "workflow-automatisering", "ai"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt, n8n bouwt de workflow. Geen code, geen copy-paste, geen fouten."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je beschrijft wat je nodig hebt in ChatGPT of Claude, en n8n bouwt de workflow voor je. Geen code schrijven, geen JSON bestanden bewerken, geen handmatige foutcorrectie. De MCP server van n8n kan nu niet alleen bestaande workflows uitvoeren, maar ook nieuwe workflows maken en bestaande aanpassen op basis van een simpele prompt.

## Wat er aan de hand is

n8n heeft zijn MCP server uitgebreid. Waar je voorheen alleen bestaande workflows kon aansturen via AI-clients zoals Claude of ChatGPT, kun je nu ook nieuwe workflows laten bouwen. Je vertelt de AI wat je nodig hebt, die bouwt de workflow, valideert hem, voert hem uit en lost fouten zelf op. Dit werkt in elke AI-client die MCP ondersteunt: Claude, ChatGPT, Cursor, Windsurf. Geen nieuwe tool om te leren, geen context-switching. De functionaliteit is beschikbaar in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party feature, dus geen externe dienst die je naast je n8n instance moet draaien. n8n gebruikt het zelf al dagelijks.

## Wat dit betekent

Voor ondernemers die n8n gebruiken voor automatisering betekent dit een enorme versnelling. Waar je eerder handmatig workflows moest bouwen, nodes moest slepen en verbindingen moest leggen, kun je nu gewoon beschrijven wat je nodig hebt. Het verschil is vergelijkbaar met het verschil tussen een recept handmatig volgen en iemand die het gerecht voor je kookt. Dit is vooral relevant voor MKB-bedrijven die geen dedicated developer hebben voor automatisering. De drempel om processen te automatiseren wordt aanzienlijk lager. Ook voor bedrijven die wel developers hebben: zij kunnen zich richten op complexere vraagstukken, terwijl de AI de standaard workflows bouwt.

## Hoe je dit kunt toepassen

**Als je dagelijks handmatig offertes maakt.** Je zou een workflow kunnen laten bouwen die elke ochtend een overzicht geeft van openstaande offertes, of die automatisch een offerte genereert op basis van een binnenkomende e-mail. Beschrijf in Claude of ChatGPT wat je nodig hebt, bijvoorbeeld: 'Maak een workflow die elke werkdag om 9 uur een e-mail stuurt met een overzicht van offertes die langer dan 3 dagen openstaan.' n8n bouwt de workflow, je controleert hem en zet hem aan.

**Als je facturatieprocessen wilt stroomlijnen.** Een optie is om een workflow te laten maken die facturen genereert op basis van een Google Sheets bestand, ze per e-mail verstuurt en de status bijwerkt in een CRM. Je beschrijft het proces in natuurlijke taal, de AI bouwt de nodes en verbindingen. Mocht er een fout optreden, dan probeert de AI zichzelf te corrigeren. Je hoeft alleen de laatste check te doen voordat de workflow live gaat.

**Als je een team aanstuurt en rapportages nodig hebt.** Overweeg om een workflow te laten bouwen die wekelijks een managementrapportage samenstelt uit meerdere bronnen: verkoopcijfers uit je CRM, urenregistratie uit je projecttool en financiële data uit je boekhoudpakket. Je vertelt de AI wat je in het rapport wilt zien, en n8n bouwt de workflow die de data ophaalt, combineert en in een e-mail of Google Doc zet.

**Als je klantenserviceprocessen wilt automatiseren.** Een mogelijkheid is om een workflow te laten maken die binnenkomende e-mails categoriseert, een automatisch antwoord stuurt bij veelgestelde vragen en complexe vragen doorzet naar de juiste medewerker. Beschrijf de regels in je prompt, en de AI bouwt de workflow met de juiste condities en acties.

**Als je social media planning wilt automatiseren.** Je zou een workflow kunnen laten bouwen die elke week een overzicht geeft van geplande posts, of die automatisch content uit je blog haalt en op LinkedIn en Twitter plaatst. Beschrijf de frequentie, de bronnen en de kanalen, en n8n bouwt de workflow.

De praktische toepassing hangt af van jouw situatie, maar de kern is: beschrijf wat je nodig hebt in je favoriete AI-client, en n8n bouwt de workflow. Geen code, geen gedoe, geen fouten.

Bron: [n8n Blog](https://blog.n8n.io/n8n-mcp-server/)

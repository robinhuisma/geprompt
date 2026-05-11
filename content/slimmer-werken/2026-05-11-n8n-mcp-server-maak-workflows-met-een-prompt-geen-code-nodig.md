---
title: "n8n MCP-server: maak workflows met een prompt, geen code nodig"
date: 2026-05-11T18:17:37.384Z
tags: ["n8n", "MCP-server", "workflow-automatisering", "AI-tools"]
categorieen: ["slimmer-werken"]
summary: "Beschrijf wat je nodig hebt in ChatGPT of Claude en n8n bouwt de workflow voor je."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je beschrijft in een paar zinnen wat je nodig hebt, en n8n bouwt er een werkende workflow van. Geen code, geen JSON-bestanden, geen heen-en-weer gekopieer. De nieuwe MCP-server van n8n kan nu niet alleen bestaande workflows uitvoeren, maar ook nieuwe maken en bestaande aanpassen, rechtstreeks vanuit je AI-client zoals ChatGPT, Claude of Cursor.

## Wat er aan de hand is

n8n, het populaire open-source automatiseringsplatform, heeft zijn MCP-server (Model Context Protocol) uitgebreid. Waar je eerder alleen bestaande workflows kon aansturen via een AI-client, kun je nu ook nieuwe workflows laten bouwen en bestaande laten aanpassen. Het enige wat je doet is in je favoriete AI-tool beschrijven wat je wilt. De AI bouwt de workflow, valideert hem, voert hem uit en herstelt zichzelf als er iets fout gaat.

Deze functionaliteit zit ingebouwd in alle edities van n8n: de Cloud-versie, de Enterprise-editie en de gratis self-hosted Community Edition. Het is een first-party functie, onderhouden door n8n zelf. Je hoeft geen extra tool te leren en geen derde partij naast je n8n-instance te draaien. De functie was de afgelopen weken in publieke preview en wordt inmiddels dagelijks gebruikt door het n8n-team.

## Wat dit betekent

Voor ondernemers zonder technische achtergrond verdwijnt de drempel om automatiseringen te bouwen. Waar je voorheen handmatig nodes aan elkaar moest klikken, parameters moest invullen en workflows moest testen, kun je nu in natuurlijke taal aangeven wat je nodig hebt. De AI vertaalt dat naar een werkende workflow.

Dit is vooral relevant voor MKB-bedrijven die processen willen automatiseren maar geen developer in huis hebben. Denk aan het versturen van facturen, het opvolgen van leads, het genereren van rapportages of het synchroniseren van data tussen systemen. De tijd die je kwijt bent aan het bouwen van een workflow gaat van uren naar minuten. En omdat de AI zelf fouten herstelt, hoef je niet te weten hoe je een foutmelding oplost.

De MCP-server werkt met elke AI-client die het MCP-protocol ondersteunt: Claude, ChatGPT, Cursor, Windsurf en andere. Je hoeft geen nieuwe tool te leren. Je gebruikt de AI die je al kent.

## Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijks handmatig bestellingen verwerkt.** Je zou in Claude of ChatGPT kunnen zeggen: 'Maak een n8n-workflow die elke ochtend om 8 uur een overzicht stuurt van alle bestellingen van gisteren, met het totaalbedrag en de verzendstatus, naar mijn e-mailadres.' De AI bouwt de workflow, inclusief de koppeling met je webshop-API en je e-mailaccount. Je controleert of het klopt en zet hem aan.

**Als je een team aanstuurt en wekelijks een statusupdate wilt hebben.** Een mogelijkheid is om te vragen: 'Maak een workflow die elke vrijdag om 15:00 een Slack-bericht stuurt naar het teamkanaal met een overzicht van alle openstaande taken uit Asana, gegroepeerd per project.' De AI haalt de data op, formatteert het bericht en stuurt het naar het juiste kanaal. Je hoeft geen Slack-API of Asana-integratie te begrijpen.

**Als je facturen verwerkt en ze handmatig in je boekhoudpakket zet.** Overweeg om te beschrijven: 'Maak een workflow die elke keer als ik een e-mail met bijlage 'factuur' ontvang, de PDF uitleest, de gegevens in Google Sheets zet en een bevestigingsmail terugstuurt.' De AI koppelt de e-mailtrigger, de PDF-parser en de Sheets-node aan elkaar. Mocht er een fout optreden, dan probeert de AI het zelf te herstellen.

**Als je leadopvolging doet en geen tijd hebt om elke nieuwe aanmelding te bellen.** Je zou kunnen vragen: 'Maak een workflow die elke nieuwe aanmelding via mijn website in een Google Sheet zet, een welkomstmail stuurt en een taak aanmaakt in Todoist om binnen 24 uur te bellen.' De AI bouwt de hele keten in één keer. Je hoeft alleen te controleren of de juiste e-mailadressen en projecten zijn ingevuld.

**Als je een rapportageproces hebt dat elke maand terugkomt.** Een optie is om te zeggen: 'Maak een workflow die op de eerste dag van de maand data ophaalt uit mijn verkooptool, een overzicht maakt in Google Slides en die per e-mail deelt met mijn managementteam.' De AI zet de stappen voor je klaar. Je kunt later altijd nog aanpassingen vragen, zoals 'gebruik een template in plaats van een code-node voor de opmaak.'

De praktische toepassing hangt af van jouw situatie. Het mooie is dat je niet perfect hoeft te formuleren. Je kunt gewoon beginnen met een beschrijving en de workflow later verfijnen door extra instructies te geven.

Bron: n8n blog (https://blog.n8n.io/n8n-mcp-server/)

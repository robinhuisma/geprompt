---
title: "n8n bouwt workflows vanuit een prompt: minder handwerk, meer snelheid"
date: 2026-05-01T18:08:33.265Z
tags: ["n8n", "automatisering", "mcp", "workflows"]
categorieen: ["slimmer-werken"]
summary: "n8n’s MCP-server maakt workflows op basis van een simpele prompt, zonder handmatig koppelen."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je kunt nu een werkende workflow in n8n laten bouwen door simpelweg te beschrijven wat je nodig hebt. Geen handmatig koppelen van apps meer, geen JSON-bestanden, geen heen-en-weer gepuzzel. De MCP-server van n8n zet een prompt om in een kant-en-klare workflow, direct in je eigen n8n-omgeving.

## Wat er aan de hand is

n8n heeft zijn MCP-server uitgebreid. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client zoals Claude of ChatGPT, kun je nu ook nieuwe workflows laten maken en bestaande laten aanpassen. Je vertelt wat je wilt, de AI bouwt de workflow, valideert hem, voert hem uit en herstelt fouten als iets niet werkt. Het werkt met elke AI-client die het MCP-protocol ondersteunt: Claude, ChatGPT, Cursor, Windsurf. Je hoeft geen nieuw gereedschap te leren en wisselt niet van context. De server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party functie, onderhouden door n8n zelf, zonder dat je een externe dienst naast je instance hoeft te draaien. De functie was de afgelopen weken in publieke preview en wordt volgens n8n al dagelijks door het eigen team gebruikt.

## Wat dit betekent

Voor ondernemers en professionals die n8n gebruiken, verandert dit de manier waarop je automatiseringen opzet. Het schrijven en testen van workflows was vaak het meest tijdrovende deel: knooppunten slepen, API’s koppelen, foutmeldingen oplossen. Dat handmatige werk vervalt grotendeels. Je kunt nu in een paar minuten een werkende workflow hebben voor taken die anders een half uur of langer kosten. Denk aan het dagelijks versturen van een weerbericht, het bijwerken van een CRM bij een nieuwe order, of het genereren van een rapport uit meerdere bronnen. Voor kleinere bedrijven zonder speciale automatiseerder wordt het toegankelijker om complexere processen te automatiseren. De drempel om te beginnen met automatiseren wordt lager, omdat je geen technische kennis meer nodig hebt om de eerste workflow op te zetten.

## Hoe je dit kunt toepassen

**Als je een webshop runt en dagelijks handmatig bestellingen verwerkt.** Je zou de MCP-server kunnen gebruiken om een workflow te laten bouwen die bij elke nieuwe bestelling automatisch een factuur genereert, de voorraad bijwerkt en een bevestigingsmail stuurt. Beschrijf wat je nodig hebt, bijvoorbeeld: 'Maak een workflow die bij een nieuwe Shopify-order een factuur aanmaakt in mijn boekhoudpakket en de klant een track-and-trace stuurt.' De AI bouwt de workflow, jij controleert of het klopt.

**Als je een team aanstuurt en wekelijks rapporten maakt uit meerdere bronnen.** Een mogelijkheid is om een workflow te laten maken die elke maandagochtend data uit je CRM, je projectmanagementtool en je financiële systeem haalt, combineert in een overzicht en dat per mail naar je team stuurt. Je geeft de prompt, de AI zet de koppelingen in elkaar en je bespaart het handmatig exporteren en plakken.

**Als je in de zorg werkt en herhalende administratieve taken hebt.** Overweeg om een workflow te laten bouwen die elke dag een overzicht van nieuwe afspraken uit je agenda haalt, de bijbehorende patiëntgegevens ophaalt uit je EPD en een voorbereidingsmail stuurt naar de betrokken zorgverlener. Je hoeft alleen te beschrijven wat je wilt, de rest regelt de AI.

**Als je een freelance professional bent en meerdere tools gebruikt voor facturatie en projectmanagement.** Je zou kunnen experimenteren met een workflow die bij het afronden van een project in je taken-app automatisch een factuur aanmaakt in je facturatiesoftware en de klant een betaallink stuurt. De MCP-server bouwt de workflow, jij vult alleen je eigen gegevens in.

**Als je een marketingbureau runt en content moet plannen.** Een optie is om een workflow te laten maken die wekelijks een overzicht van social media prestaties uit verschillende platformen haalt, in een spreadsheet zet en naar je team mailt. Beschrijf wat je nodig hebt, de AI regelt de koppelingen en je kunt direct zien of het werkt.

Bron: n8n blog

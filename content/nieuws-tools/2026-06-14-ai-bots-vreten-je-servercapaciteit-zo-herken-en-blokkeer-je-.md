---
title: "AI-bots vreten je servercapaciteit: zo herken en blokkeer je ze"
date: 2026-06-14T22:06:54.778Z
tags: ["ai-bots", "serverbeheer", "website-optimalisatie", "botverkeer"]
categorieen: ["nieuws-tools"]
summary: "Leer hoe je AI-botverkeer herkent en blokkeert zonder je Google-ranking te schaden."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord is dat AI-bots tot 80 procent van je servercapaciteit kunnen opslokken voor modeltraining, maar dat je dit verkeer kunt blokkeren zonder je positie in Google te verliezen. Het draait om het herkennen van de juiste signalen in je serverlogs en het inzetten van specifieke instellingen.

## Wat er aan de hand is
Uit een analyse van Search Engine Journal blijkt dat AI-bots steeds vaker websites platleggen door enorme hoeveelheden data te scrapen voor het trainen van taalmodellen. Dit verkeer is niet altijd zichtbaar in standaard analytics, maar wel in serverlogs. Het probleem is dat veel website-eigenaren onnodig betalen voor extra servercapaciteit of dure CDN-diensten, terwijl een deel van dat verkeer eenvoudig te weren is. De bots komen van bedrijven zoals OpenAI, Google en Anthropic, en ze gedragen zich anders dan gewone bezoekers of zoekmachines.

## Wat dit betekent
Voor ondernemers met een eigen website of webshop betekent dit dat je mogelijk geld uitgeeft aan infrastructuur die je niet nodig hebt. Elke keer dat een AI-bot een pagina ophaalt, kost dat rekenkracht en bandbreedte. Bij grote aantallen kan dat leiden tot tragere laadtijden voor echte bezoekers, hogere hostingkosten en in het ergste geval een crash. Het risico is dat je onterecht denkt dat je site populairder is dan hij is, terwijl het grootste deel van het verkeer uit geautomatiseerde scrapers bestaat. Vooral kleinere websites zonder dure beveiligingspakketten zijn kwetsbaar.

## Hoe je dit kunt toepassen
**Als je een webshop runt en merkt dat je serverlogs vol staan met onbekende user agents.** Je kunt in je serverlogs zoeken naar user agents die verwijzen naar AI-bedrijven, zoals `GPTBot`, `CCBot`, `Claude-Web` of `Google-Extended`. Voeg deze eenvoudig toe aan je `robots.txt`-bestand met de regel `Disallow: /`. Dit vertelt de bot dat hij niet mag crawlen, zonder dat het je ranking bij Google beïnvloedt. Google heeft namelijk aangegeven dat het blokkeren van AI-bots geen invloed heeft op je positie in de gewone zoekresultaten.

**Als je een blog of nieuwssite beheert en veel onverklaarbaar piekverkeer ziet.** Een mogelijkheid is om een rate limit in te stellen op je webserver, bijvoorbeeld via `.htaccess` of een plugin zoals Wordfence. Hiermee beperk je het aantal verzoeken per seconde van een IP-adres. AI-bots sturen vaak honderden verzoeken per minuut, terwijl een echte bezoeker er hooguit een paar doet. Door een limiet van 10 verzoeken per minuut in te stellen, filter je de meeste bots eruit zonder dat normale gebruikers er last van hebben.

**Als je een leadgeneratie-site hebt en bang bent dat je Google-ranking lijdt onder het blokkeren van bots.** Overweeg om een aparte `robots.txt`-regel te maken voor AI-bots, maar laat de standaard zoekmachines zoals Googlebot en Bingbot gewoon door. Je kunt ook een `.htaccess`-regel toevoegen die alleen verkeer blokkeert met een user agent die `GPTBot` of `Claude` bevat. Dit is veilig omdat Google zelf aangeeft dat het blokkeren van AI-bots geen invloed heeft op je organische vindbaarheid.

**Als je een technische website beheert en zelf wilt zien welke bots langskomen.** Je zou een gratis tool zoals `GoAccess` kunnen installeren om je serverlogs realtime te analyseren. Hiermee zie je direct welke user agents de meeste requests doen. Als je merkt dat een onbekende bot elke dag duizenden pagina's ophaalt, kun je die specifiek blokkeren. Dit werkt ook voor gedeelde hosting zonder root-toegang, zolang je toegang hebt tot de logs.

**Als je een webshop met veel productpagina's hebt en last hebt van trage laadtijden.** Een praktische stap is om een caching-plugin in te schakelen die pagina's statisch maakt. AI-bots kunnen dan nog steeds de gecachte versie ophalen, maar dat kost vrijwel geen servercapaciteit. Combineer dit met een `robots.txt`-blokkade voor de bekendste AI-bots, en je ziet direct een daling in serverbelasting.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

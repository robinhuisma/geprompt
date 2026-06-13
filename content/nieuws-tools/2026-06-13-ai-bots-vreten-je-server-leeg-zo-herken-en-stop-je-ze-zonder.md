---
title: "AI-bots vreten je server leeg: zo herken en stop je ze zonder Google te hinderen"
date: 2026-06-13T02:03:58.441Z
tags: ["ai-bots", "serverbelasting", "website-optimalisatie", "botverkeer"]
categorieen: ["nieuws-tools"]
summary: "80% van AI-botverkeer belast je server. Herken ze en blokkeer ze zonder je Google-ranking te schaden."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord: AI-bots slurpen je servercapaciteit op voor het trainen van modellen, maar je kunt ze blokkeren zonder dat Google je website minder goed vindt. Ongeveer 80 procent van al het AI-verkeer op websites is afkomstig van bots die data verzamelen voor modeltraining, niet voor het indexeren van je pagina’s. Het goede nieuws is dat je dit verkeer kunt herkennen en stoppen, zonder dat je positie in de zoekresultaten eronder lijdt.

## Wat er aan de hand is

Volgens Search Engine Journal wordt een groot deel van het serververkeer op websites veroorzaakt door AI-bots die content scrapen voor het trainen van taalmodellen. Dit gaat om geautomatiseerde systemen van bedrijven zoals OpenAI, Anthropic en andere AI-ontwikkelaars. Deze bots gedragen zich anders dan zoekmachines zoals Googlebot: ze bezoeken pagina’s in hoog tempo, laden grote hoeveelheden data en keren vaak terug. Het gevolg is dat servers overbelast raken, laadtijden toenemen en hostingkosten stijgen. Vooral kleinere websites zonder dedicated infrastructuur merken dit direct in hun portemonnee en prestaties.

## Wat dit betekent

Voor ondernemers met een eigen website betekent dit dat je mogelijk betaalt voor servercapaciteit die wordt gebruikt door derden, zonder dat je er zelf iets aan hebt. Je hostingrekening loopt op, je bezoekers ervaren tragere laadtijden en je kunt zelfs tijdelijk offline gaan als de piek te hoog wordt. Tegelijkertijd wil je niet dat Google je site minder goed indexeert, omdat dat direct je vindbaarheid en omzet raakt. Het onderscheid tussen schadelijke AI-bots en nuttige zoekmachines is daarom cruciaal. Wie dit negeert, laat zijn infrastructuur onbedoeld sponsoren voor de ontwikkeling van AI-modellen van anderen.

## Hoe je dit kunt toepassen

**Als je een webshop runt en merkt dat je server trager wordt.** Controleer je serverlogs op verdachte user-agents zoals `GPTBot`, `Claude-Web` of `CCBot`. Deze bots herken je aan hoge frequentie en ongebruikelijke pagina-aanvragen. Je kunt ze blokkeren via je `robots.txt`-bestand door regels toe te voegen als `User-agent: GPTBot` en `Disallow: /`. Googlebot herken je aan de user-agent `Googlebot` en aan reverse DNS die terugwijst naar google.com. Blokkeer alleen de AI-bots waarvan je zeker weet dat ze niet voor indexering dienen.

**Als je een blog of nieuwssite beheert en veel verkeer ziet van onbekende IP-adressen.** Overweeg om rate limiting in te stellen op je webserver of via een CDN zoals Cloudflare. Hiermee beperk je het aantal verzoeken per seconde van een enkel IP-adres. Stel een drempel in die hoger ligt dan wat een normale bezoeker doet, maar laag genoeg om bots af te remmen. Een optie is om een challenge (zoals een captcha) te tonen bij verdachte patronen. Dit heeft geen effect op Googlebot, dat zich aan de snelheidslimieten houdt.

**Als je een zakelijke dienstverlener bent met een informatieve website.** Je zou kunnen overwegen om een aparte lijst bij te houden van bekende AI-bot user-agents en deze periodiek te updaten. Sites zoals `darkvisitors.com` bieden actuele overzichten. Voeg deze lijst toe aan je `.htaccess`-bestand of serverconfiguratie. Test daarna of je site nog normaal wordt geïndexeerd door Google Search Console. Als je geen daling ziet in geïndexeerde pagina’s, werkt de blokkade zoals bedoeld.

**Als je een leadgeneratie-site runt en afhankelijk bent van organisch verkeer.** Wees voorzichtig met het blokkeren van bots die je niet herkent. Sommige AI-bots worden ook gebruikt door zoekmachines voor speciale functies, zoals het genereren van samenvattingen. Een veilige aanpak is om eerst alleen de meest agressieve bots te blokkeren en het effect te monitoren. Gebruik een tool zoals `GoAccess` of `AWStats` om je verkeer inzichtelijk te maken. Als je ziet dat het AI-verkeer daalt zonder dat je Google-verkeer afneemt, kun je de blokkade uitbreiden.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

---
title: "AI-bots vreten je servercapaciteit: herken en blokkeer ze zonder Google te straffen"
date: 2026-06-14T18:07:18.577Z
tags: ["ai-bots", "serverbeheer", "website-optimalisatie", "botverkeer"]
categorieen: ["nieuws-tools"]
summary: "Tachtig procent van AI-botverkeer belast je server. Zo herken je het en blokkeer je het veilig."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Tachtig procent van al het AI-botverkeer op websites wordt gebruikt om modellen te trainen, niet om jouw content aan bezoekers te tonen. Dat betekent dat je servercapaciteit en bandbreedte worden opgeslokt door bots die jou niks opleveren, terwijl jij ervoor betaalt. Het goede nieuws: je kunt dit verkeer herkennen en blokkeren zonder dat het je positie in Google schaadt.

## Wat er aan de hand is

Uit cijfers die Search Engine Journal aanhaalt, blijkt dat AI-bots verantwoordelijk zijn voor een groot deel van het serververkeer op websites. Deze bots crawlen pagina’s niet om ze te indexeren voor zoekmachines, maar om data te verzamelen voor het trainen van AI-modellen. Denk aan bedrijven als OpenAI, Anthropic en andere partijen die grote taalmodellen voeden met webcontent. Het probleem is dat deze bots vaak agressiever crawlen dan zoekmachines, met hogere frequenties en zonder respect voor standaard snelheidslimieten. Voor website-eigenaren leidt dit tot hogere hostingkosten, tragere laadtijden voor echte bezoekers en onnodige belasting van de infrastructuur.

## Wat dit betekent

Voor ondernemers met een eigen website of webshop is dit direct voelbaar. Je betaalt voor servercapaciteit op basis van verbruik of een vast abonnement. Als AI-bots een aanzienlijk deel van dat verbruik voor hun rekening nemen, betaal je dus voor verkeer dat jou geen waarde biedt. Bovendien kan de extra belasting ervoor zorgen dat je site trager wordt voor echte klanten, wat omzet kost. Het risico is dat je ongemerkt maandelijks tientallen tot honderden euro’s uitgeeft aan infrastructuur die alleen AI-modellen voedt. Tegelijk wil je niet dat Google je site niet meer kan crawlen, want dat kost je vindbaarheid.

## Hoe je dit kunt toepassen

**Als je een webshop runt en merkt dat je serverlogs vol staan met onbekende user agents.** Je kunt in je serverlogs zoeken naar user agents die verwijzen naar AI-bedrijven, zoals ‘GPTBot’, ‘Claude-Web’ of ‘CCBot’. Een eenvoudige manier om deze te blokkeren is door een regel toe te voegen aan je robots.txt-bestand. Zet bijvoorbeeld ‘User-agent: GPTBot’ en ‘Disallow: /’. Dit vertelt de bot dat hij niet welkom is, zonder dat het Googlebot beïnvloedt. Controleer wel of je geen andere bots per ongeluk blokkeert.

**Als je een contentwebsite beheert en merkt dat je server onverwacht pieken vertoont.** Een optie is om in je .htaccess-bestand (bij Apache-servers) of via je firewall regels in te stellen die verkeer van bepaalde IP-ranges of user agents weigeren. Je kunt ook een rate limiter instellen die het aantal requests per seconde per IP beperkt. Dit beschermt je tegen agressieve crawlers zonder dat je Googlebot raakt, want die houdt zich aan de snelheidslimieten die jij instelt.

**Als je geen technische achtergrond hebt maar wel wilt controleren of AI-bots actief zijn.** Je kunt een plugin gebruiken zoals Wordfence (voor WordPress) of een CDN-dienst zoals Cloudflare. Deze tools geven je inzicht in welk verkeer je site bezoekt en bieden vaak een optie om bekende AI-bots te blokkeren met één klik. Overweeg om eerst een week lang logs te analyseren voordat je ingrijpt, zodat je zeker weet dat je geen legitiem verkeer blokkeert.

**Als je twijfelt of blokkades je SEO schaden.** Googlebot is een aparte user agent die je niet moet blokkeren. Door alleen specifieke AI-bots te blokkeren in je robots.txt of via een firewall, blijft Googlebot gewoon toegang houden. Test dit door na het instellen van de blokkade je site in Google Search Console te controleren op crawl-fouten. Als er geen problemen verschijnen, zit je goed.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

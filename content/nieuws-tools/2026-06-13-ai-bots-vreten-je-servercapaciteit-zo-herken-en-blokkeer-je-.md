---
title: "AI-bots vreten je servercapaciteit: zo herken en blokkeer je ze zonder Google te hinderen"
date: 2026-06-13T18:05:26.853Z
tags: ["ai-bots", "serverkosten", "website-optimalisatie", "hosting"]
categorieen: ["nieuws-tools"]
summary: "Tachtig procent van je AI-verkeer kost alleen maar geld. Zo herken je de boosdoeners en bescherm je je site."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Tachtig procent van het AI-verkeer op websites wordt gebruikt om modellen te trainen, niet om jouw content aan bezoekers te tonen. Dat betekent dat een groot deel van je hostingkosten weglekt naar bots die je server belasten zonder dat ze ooit een menselijke bezoeker worden. Het goede nieuws: je kunt deze bots herkennen en blokkeren zonder dat Google je daarvoor afstraft.

## Wat er aan de hand is

Volgens Search Engine Journal wordt ongeveer 80 procent van al het AI-verkeer op websites gebruikt voor het trainen van AI-modellen. Dit zijn geen bezoekers die je content lezen of producten bekijken, maar geautomatiseerde scripts die pagina’s scrapen om data te verzamelen. Het probleem is dat deze bots net zo veel servercapaciteit verbruiken als echte gebruikers, soms zelfs meer. Vooral kleinere websites merken de impact: trage laadtijden, hogere hostingkosten en in het ergste geval een server die crasht. De vraag die website-eigenaren zich stellen is of ze moeten blijven betalen voor verkeer dat geen waarde oplevert.

## Wat dit betekent

Voor ondernemers en professionals die een website beheren, betekent dit dat een deel van je maandelijkse hostingrekening rechtstreeks naar AI-bedrijven gaat. Als je een webshop runt, kan dat betekenen dat je server tijdens piekuren trager wordt voor echte klanten. Als je een blog of kennisplatform beheert, betaal je voor verkeer dat nooit een paginavertoning oplevert. De impact is het grootst bij gedeelde hosting of goedkope VPS-pakketten, waar de resources beperkt zijn. Het is niet alleen een kostenpost, maar ook een beveiligingsrisico: agressieve bots kunnen je site platleggen, net als een DDoS-aanval.

## Hoe je dit kunt toepassen

**Als je een webshop runt en merkt dat je site trager wordt tijdens daluren.** Controleer je serverlogs op herhaalde verzoeken van IP-adressen die niet in Google of Bing voorkomen. Je kunt een eenvoudige tool zoals Cloudflare gebruiken om verkeer te filteren. Stel een regel in die verzoeken van bekende AI-bot-IP-ranges blokkeert, maar laat Googlebot en Bingbot altijd door. Een mogelijke aanpak is om een robots.txt-bestand aan te maken dat specifieke AI-bots uitsluit, al houden niet alle bots zich daaraan. Overweeg om een rate limiter in te stellen die het aantal verzoeken per IP per minuut beperkt.

**Als je een contentwebsite beheert en je hostingkosten stijgen zonder dat je bezoekersaantallen groeien.** Kijk in je analytics of er een piek is in serververzoeken zonder bijbehorende paginaweergaven. Dat is een teken van botverkeer. Je zou kunnen overwegen om een Web Application Firewall (WAF) in te schakelen, zoals die van Sucuri of Wordfence, die specifiek is ontworpen om kwaadaardige bots te herkennen. Een andere optie is om je CDN-provider te vragen of zij botdetectie aanbieden. Begin met het blokkeren van de meest agressieve bots, zoals die van Amazon, Anthropic of Meta, tenzij je expliciet toestemming hebt gegeven voor scraping.

**Als je een leadgeneratie-site hebt en je bang bent dat Google je niet meer indexeert na het blokkeren van bots.** Dat is een terechte zorg, maar Googlebot is te onderscheiden van andere bots. Je kunt in je serverconfiguratie een aparte regel opnemen die alleen Googlebot toestaat, gebaseerd op de officiële IP-ranges die Google publiceert. Een praktische stap is om een tool zoals Botify of Screaming Frog te gebruiken om te controleren of Google nog steeds je site bezoekt nadat je de blokkades hebt ingesteld. Als je twijfelt, begin dan met het blokkeren van alleen de bots die je in je logs herkent als niet-Google, en breid dat langzaam uit.

**Als je een kleine website hebt zonder technische kennis.** Gebruik een plugin of dienst die botbeheer eenvoudig maakt. Voor WordPress is er bijvoorbeeld de plugin 'Block Bad Bots' die een database met bekende AI-bots bijhoudt en automatisch blokkeert. Je kunt ook je hostingprovider bellen en vragen of zij een botfilter aanbieden. Een simpele eerste stap is om in je .htaccess-bestand een regel toe te voegen die verzoeken van lege user agents blokkeert, want veel AI-bots gebruiken geen herkenbare user agent.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

---
title: "AI-bots vreten je servercapaciteit: zo herken en blokkeer je ze"
date: 2026-06-15T18:07:32.608Z
tags: ["ai-bots", "serverkosten", "websitebeveiliging", "seo"]
categorieen: ["nieuws-tools"]
summary: "80% van AI-botverkeer kost je geld. Zo bescherm je je site zonder Google te schaden."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord: AI-bots slurpen tot 80% van je servercapaciteit op zonder dat je er iets aan hebt. Je kunt dit verkeer herkennen in je serverlogs en blokkeren zonder dat je Google-ranking eronder lijdt.

## Wat er aan de hand is
Volgens Search Engine Journal wordt 80% van het AI-botverkeer gebruikt voor het trainen van modellen. Dit betekent dat bezoekers van wie je denkt dat ze klant zijn, in werkelijkheid geautomatiseerde scripts zijn die jouw content en infrastructuur gebruiken om AI-systemen te voeden. Het probleem is niet nieuw, maar de schaal neemt snel toe. Waar vroeger vooral zoekmachines zoals Googlebot je site bezochten, zijn er nu tientallen AI-bots actief die vaak agressiever crawlen en meer bandbreedte verbruiken. Vooral kleinere websites met gedeelde hosting of beperkte servercapaciteit merken dit: laadtijden lopen op, bezoekers haken af, en de hostingrekening stijgt.

## Wat dit betekent
Voor ondernemers met een eigen website betekent dit directe kosten. Als je server continu overbelast raakt door AI-bots, betaal je voor verkeer dat geen waarde oplevert. Geen leads, geen verkopen, geen merkbekendheid. Alleen maar data die jouw concurrenten of AI-bedrijven verder helpt. Daarnaast kan overbelasting leiden tot downtime, wat je omzet kost en je positie in Google kan schaden. Het is dus niet alleen een technisch probleem, maar een bedrijfsrisico. De uitdaging is dat je niet zomaar alle bots kunt blokkeren: Googlebot moet welkom blijven, anders verdwijn je uit de zoekresultaten.

## Hoe je dit kunt toepassen
**Als je een webshop runt en merkt dat je site trager wordt...** Begin met het controleren van je serverlogs. Zoek naar IP-adressen die in korte tijd veel pagina’s opvragen, vaak met een user-agent die verwijst naar AI-bedrijven zoals OpenAI, Anthropic of Common Crawl. Je kunt deze IP’s tijdelijk blokkeren in je .htaccess-bestand of via je hostingdashboard. Een mogelijkheid is om een lijst met bekende AI-bot-IP’s te downloaden van sites zoals Dark Visitors of te werken met een plugin zoals Wordfence als je WordPress gebruikt. Overweeg om een aparte regel te maken voor Googlebot, zodat die altijd doorgelaten wordt.

**Als je een team aanstuurt dat verantwoordelijk is voor websitebeheer...** Stel een protocol op voor het monitoren van botverkeer. Je zou kunnen afspreken dat elke maand de serverlogs worden geanalyseerd op afwijkende patronen. Een optie is om een gratis tool zoals GoAccess of Matomo in te zetten om realtime inzicht te krijgen in wie je site bezoekt. Als je ziet dat een bepaalde bot 10.000 pagina’s per uur ophaalt, is dat een signaal om in te grijpen. Overweeg om een rate limiter in te stellen via je CDN of webserver, zodat bots niet meer dan een bepaald aantal verzoeken per minuut kunnen doen.

**Als je in de zorg of een andere sector werkt met gevoelige content...** Wees extra voorzichtig met het blokkeren van bots. Je wilt niet per ongeluk Googlebot weren, want dat kan je zichtbaarheid voor patiënten of cliënten schaden. Een mogelijkheid is om een robots.txt-bestand te gebruiken waarin je specifieke AI-bots uitsluit, maar Googlebot toestaat. Let op: niet alle bots respecteren robots.txt, dus combineer dit met IP-blokkades voor de meest agressieve crawlers. Overweeg om een aparte staging-omgeving te maken voor AI-training, zodat je productieserver onaangetast blijft.

**Als je een contentmarketeer bent en merkt dat je analytics-cijfers vertekend zijn...** Filter AI-botverkeer uit je statistieken voordat je rapportages maakt. Je kunt in Google Analytics een segment aanmaken dat alleen menselijk verkeer toont, of een tool zoals Cloudflare gebruiken om bots automatisch te herkennen en te weren. Een optie is om een lijst met bekende bot-user-agents te uploaden in je analytics-software. Zo voorkom je dat je beslissingen neemt op basis van vervuilde data.

Bron: Search Engine Journal (https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

---
title: "AI-bots vreten je server leeg: herken ze en bescherm je hostingbudget"
date: 2026-06-12T22:06:06.383Z
tags: ["AI-bots", "hostingkosten", "serverbeheer", "website optimalisatie"]
categorieen: ["nieuws-tools"]
summary: "Tachtig procent van AI-botverkeer kost je geld zonder waarde. Zo herken en blokkeer je ze zonder Google-boete."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord: AI-bots slurpen tot 80 procent van je servercapaciteit op voor modeltraining, zonder dat dit bezoekers of omzet oplevert. Je kunt dit verkeer herkennen en blokkeren zonder dat Google je website daarvoor straft, waardoor je hostingkosten direct dalen.

## Wat er aan de hand is
Uit een analyse van Search Engine Journal blijkt dat 80 procent van het AI-verkeer op websites wordt gebruikt voor het trainen van AI-modellen. Dit verkeer gedraagt zich anders dan normale bezoekers: het laadt pagina’s in hoog tempo, doorloopt geen logische paden en genereert geen klikken of conversies. Voor website-eigenaren betekent dit dat ze betalen voor servercapaciteit die geen enkele zakelijke waarde oplevert. Het probleem groeit naarmate meer AI-bedrijven hun modellen trainen op openbare webdata. De vraag is niet of je iets moet doen, maar hoe je dit aanpakt zonder je positie in Google te schaden.

## Wat dit betekent
Voor ondernemers met een eigen website of webshop betekent dit dat een deel van je hostingkosten weglekt naar partijen die jouw content gebruiken zonder te betalen. Vooral als je een drukbezochte site hebt of veel unieke content publiceert, kan de impact groot zijn. Het gaat niet alleen om extra serverbelasting, maar ook om tragere laadtijden voor echte bezoekers, wat je conversie en SEO kan schaden. De uitdaging is dat je niet alle bots kunt blokkeren: Googlebot moet toegang houden voor indexering. Het onderscheid maken tussen legitieme en schadelijke bots is de sleutel.

## Hoe je dit kunt toepassen
**Als je een WordPress-website beheert**, kun je een plugin zoals Wordfence of Cloudflare’s firewall gebruiken om AI-bots te herkennen op basis van hun user-agent en gedrag. Stel een regel in die verkeer blokkeert van bekende AI-crawlers zoals GPTBot, CCBot of Claude-Web, tenzij ze expliciet zijn toegestaan. Cloudflare biedt een gratis laag die dit eenvoudig maakt via het dashboard onder ‘Security’ en ‘Bot Fight Mode’. Je zou kunnen beginnen met het controleren van je serverlogs op verdachte IP-adressen die in korte tijd veel pagina’s opvragen.

**Als je een webshop runt op Shopify of een ander platform**, controleer dan of je hostingprovider een ingebouwde botbescherming biedt. Veel providers hebben opties om AI-verkeer te filteren zonder dat je technische kennis nodig hebt. Overweeg om een tool zoals Cloudflare’s ‘Bot Management’ in te schakelen, die onderscheid maakt tussen goede bots (Googlebot) en slechte bots (AI-trainers). Dit kan je maandelijkse bandbreedtekosten met tientallen procenten verlagen, afhankelijk van je verkeersvolume.

**Als je een eigen server beheert of een VPS gebruikt**, kun je handmatig een robots.txt-bestand aanpassen om AI-bots te weren. Voeg regels toe zoals ‘User-agent: GPTBot’ en ‘Disallow: /’. Let op: dit is een beleefd verzoek, geen dwang. Sommige AI-bots negeren robots.txt. Daarom is het verstandig om ook op server-niveau regels in te stellen, bijvoorbeeld via .htaccess of nginx-configuratie, die verkeer blokkeren op basis van user-agent of IP-range. Test altijd eerst of je echte bezoekers geen hinder ondervinden.

**Als je geen technische achtergrond hebt**, kun je een hostingprovider kiezen die botbescherming standaard aanbiedt. Vraag bij je huidige provider of ze een ‘bot management’ dienst hebben. Een mogelijkheid is om een gratis tool zoals Cloudflare’s DNS te gebruiken, die je site via hun netwerk leidt en automatisch schadelijk verkeer filtert. Dit kost weinig tijd en levert direct resultaat op in lagere serverbelasting en snellere laadtijden voor je klanten.

Bron: Search Engine Journal (https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

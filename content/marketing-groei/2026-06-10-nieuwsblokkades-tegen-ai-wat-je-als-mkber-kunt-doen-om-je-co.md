---
title: "Nieuwsblokkades tegen AI: wat je als MKB’er kunt doen om je content te beschermen"
date: 2026-06-10T02:05:38.450Z
tags: ["ai-crawlers", "contentbescherming", "robots.txt", "websitebeveiliging"]
categorieen: ["marketing-groei"]
summary: "Nieuwe techniek om AI-scrapers te weren is simpel en gratis, ook voor kleine websites."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/more-news-sites-default-to-blocking-ai-crawlers/578527/"
---

Steeds meer nieuwssites, waaronder Reuters en Time, blokkeren standaard AI-crawlers en werken alleen nog met een goedgekeurde lijst van bots die toegang krijgen. Deze verschuiving maakt duidelijk dat het weren van AI-scrapers niet alleen voor techgiganten is weggelegd, maar ook voor kleinere websites eenvoudig en gratis te realiseren is.

## Wat er aan de hand is

Reuters en Time hebben hun servers zo ingesteld dat ze standaard alle AI-crawlers weigeren. Alleen bots die op een specifieke toelatingslijst (allowlist) staan, mogen nog hun content ophalen. Dit is een omkering van de gebruikelijke praktijk, waarbij websites meestal alle crawlers toestaan en alleen de ongewenste uitsluiten. Volgens Search Engine Journal past deze aanpak in een bredere trend: uitgevers voegen steeds meer drempels toe om AI-scraping tegen te gaan, zonder dat ze daarvoor dure juridische procedures hoeven te voeren. De techniek is simpel: een aanpassing in het robots.txt-bestand, een tekstbestand dat op elke webserver staat, is voldoende.

## Wat dit betekent

Voor MKB-ondernemers die zelf content publiceren, zoals blogs, productbeschrijvingen of handleidingen, is dit een signaal dat je niet machteloos staat tegenover AI-scraping. Waar grote uitgevers vaak juridische teams hebben om licenties af te dwingen, kunnen kleinere websites met een paar regels code hetzelfde effect bereiken. Het betekent dat jouw unieke content, die je tijd en geld kost om te maken, niet zomaar gratis wordt opgehaald door AI-modellen. Dit is vooral relevant voor bedrijven die afhankelijk zijn van originele teksten, zoals webshops met eigen productomschrijvingen of dienstverleners met kennisartikelen. Het beschermen van die content wordt nu een technische kwestie, niet een juridische.

## Hoe je dit kunt toepassen

**Als je een webshop runt met eigen productteksten** die je hebt laten schrijven om beter te scoren in Google, dan kun je overwegen om AI-crawlers te blokkeren. Een mogelijkheid is om in je robots.txt-bestand een regel toe te voegen die alle bekende AI-bots uitsluit, zoals `Disallow: /` voor `GPTBot` en `CCBot`. Je zou kunnen beginnen met een test op een paar productpagina’s om te zien of het je verkeer beïnvloedt. Overweeg om alleen de bots toe te staan die je kent, zoals Googlebot, en de rest te weren.

**Als je een kennisplatform of blog beheert** waar je uitgebreide handleidingen deelt, dan is het risico dat AI-modellen jouw teksten gebruiken voor training groot. Een optie is om een allowlist-aanpak te gebruiken, zoals Reuters en Time doen. Dat betekent dat je in robots.txt alle crawlers blokkeert en alleen specifieke bots toestaat, bijvoorbeeld van Google en Bing. Je zou kunnen beginnen met het aanmaken van een lijst van bots die je vertrouwt en de rest uitsluiten. Dit vergt eenmalig wat technisch werk, maar daarna werkt het automatisch.

**Als je een dienstverlener bent met unieke casestudies of whitepapers** op je site, dan is het verstandig om te controleren of AI-crawlers nu al toegang hebben. Een mogelijkheid is om via je serverlogs te zien welke bots je site bezoeken. Als je onbekende bots ziet, kun je ze blokkeren door een `User-agent: *` regel met `Disallow: /` te plaatsen, gevolgd door `Allow: Googlebot` voor de crawlers die je wel wilt. Overweeg om dit te combineren met een waarschuwing in je algemene voorwaarden dat scraping niet is toegestaan.

**Als je een lokale ondernemer bent met een eenvoudige website** en weinig technische kennis, dan kun je je hostingprovider vragen om een robots.txt-bestand voor je aan te maken. Een optie is om een standaard blokkade te vragen voor alle AI-crawlers, zoals `User-agent: GPTBot Disallow: /`. Je zou kunnen beginnen met een gratis tool zoals de robots.txt-generator van Google om de juiste code te maken. Overweeg om dit jaarlijks te controleren, omdat er steeds nieuwe AI-bots bijkomen.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/more-news-sites-default-to-blocking-ai-crawlers/578527/)

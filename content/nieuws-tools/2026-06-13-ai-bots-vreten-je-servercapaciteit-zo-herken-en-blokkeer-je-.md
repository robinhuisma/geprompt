---
title: "AI-bots vreten je servercapaciteit: zo herken en blokkeer je ze zonder SEO-schade"
date: 2026-06-13T14:05:56.017Z
tags: ["ai-bots", "serveroptimalisatie", "seo", "websitebeheer"]
categorieen: ["nieuws-tools"]
summary: "AI-bots slurpen tot 80% van je servercapaciteit. Zo herken je ze en blokkeer je ze zonder Google te hinderen."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

AI-bots slurpen tot 80% van je servercapaciteit op voor modeltraining, maar je kunt ze blokkeren zonder dat Google je site minder goed vindt. Het probleem is dat deze bots zich vaak voordoen als legitieme bezoekers, waardoor je serverlogs onbetrouwbaar worden en je hostingkosten onnodig stijgen. Het goede nieuws: met een paar gerichte aanpassingen in je .htaccess-bestand of via een CDN kun je de grootste boosdoeners uitschakelen zonder je SEO te schaden.

## Wat er aan de hand is

Volgens Search Engine Journal wordt ongeveer 80% van het AI-verkeer op websites gebruikt voor het trainen van AI-modellen. Dit betekent dat een groot deel van je serverbelasting niet door echte bezoekers komt, maar door geautomatiseerde bots die pagina’s scrapen. Deze bots zijn vaak agressiever dan traditionele crawlers: ze laden pagina’s sneller en dieper, waardoor je server overbelast kan raken. Vooral kleinere websites met gedeelde hosting merken dit direct in tragere laadtijden en hogere kosten. Het probleem is dat veel website-eigenaren niet weten dat dit verkeer niet van echte gebruikers komt, omdat de bots zich voordoen als normale browsers.

## Wat dit betekent

Voor ondernemers met een eigen website betekent dit dat je mogelijk betaalt voor servercapaciteit die wordt gebruikt door AI-bedrijven, niet door je klanten. Als je een webshop runt, kan dit leiden tot tragere laadtijden tijdens piekmomenten, wat direct omzet kost. Voor professionals die afhankelijk zijn van accurate bezoekersstatistieken, zoals marketeers of consultants, wordt het lastiger om te bepalen welke content echt werkt. De bots vervuilen je analytics-data, waardoor beslissingen op basis van verkeer onbetrouwbaar worden. Daarnaast kunnen hostingproviders je kosten verhogen als je serverlimieten overschrijdt door dit onzichtbare verkeer.

## Hoe je dit kunt toepassen

**Als je een webshop runt en merkt dat je site trager wordt tijdens daluren...** Je zou kunnen beginnen met het controleren van je serverlogs op verdachte patronen. Kijk naar IP-adressen die in korte tijd veel pagina’s laden, of naar user agents die niet overeenkomen met bekende browsers zoals Chrome of Safari. Een eenvoudige eerste stap is het blokkeren van bekende AI-bot user agents via je .htaccess-bestand. Zoek online naar een actuele lijst van AI-bot user agents en voeg deze toe. Test daarna of je site nog normaal laadt en of Google Search Console geen fouten meldt.

**Als je een team aanstuurt dat afhankelijk is van accurate website-analytics...** Overweeg om een aparte filter in Google Analytics in te stellen die verkeer van bekende AI-bots uitsluit. Dit kun je doen door een segment te maken op basis van IP-adressen of user agents. Een andere optie is om een CDN zoals Cloudflare te gebruiken, die een ingebouwde bot-managementfunctie heeft. Daarmee kun je AI-bots herkennen en blokkeren zonder dat je zelf technische aanpassingen hoeft te doen. Let wel op: controleer altijd of Googlebot niet wordt geblokkeerd, want dat schaadt je vindbaarheid.

**Als je een informatieve website beheert en merkt dat je serverkosten stijgen zonder extra bezoekers...** Je zou kunnen overwegen om een rate limit in te stellen op je server. Dit beperkt het aantal verzoeken dat een enkel IP-adres per minuut kan doen. Veel hostingproviders bieden dit als standaardoptie in het controlepaneel. Stel een limiet in die hoger ligt dan wat een normale bezoeker nodig heeft, maar laag genoeg om bots af te remmen. Combineer dit met een CAPTCHA op formulieren of bij het laden van grote hoeveelheden data. Test altijd of Googlebot nog steeds onbeperkt toegang heeft, bijvoorbeeld door de Google Search Console te controleren op crawl-fouten.

**Als je een leadgeneratie-site hebt en twijfelt of je verkeer echt is...** Een praktische aanpak is om een eenvoudige JavaScript-check toe te voegen op je belangrijkste pagina’s. De meeste AI-bots voeren JavaScript niet uit, dus als een bezoeker geen JavaScript laadt, kun je die sessie markeren als verdacht. Dit kun je doen met een klein scriptje dat een cookie zet. Als de cookie ontbreekt bij een volgend verzoek, blokkeer je de toegang tot zware pagina’s zoals productcatalogi of blogarchieven. Dit heeft geen invloed op Google, omdat Googlebot JavaScript wel uitvoert. Test dit eerst op een testomgeving voordat je het live zet.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

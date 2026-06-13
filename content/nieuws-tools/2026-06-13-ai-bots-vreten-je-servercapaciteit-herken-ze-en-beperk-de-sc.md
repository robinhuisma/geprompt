---
title: "AI-bots vreten je servercapaciteit: herken ze en beperk de schade"
date: 2026-06-13T06:05:47.474Z
tags: ["AI-bots", "serverbelasting", "website optimalisatie", "botverkeer"]
categorieen: ["nieuws-tools"]
summary: "80% van AI-botverkeer belast servers zonder waarde. Zo herken je ze en bescherm je je site."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord: AI-bots slurpen tot 80% van je servercapaciteit op zonder dat je er iets aan hebt, maar je kunt ze eenvoudig weren zonder je positie in Google te schaden. Het gaat om bots die jouw website-infrastructuur gebruiken voor het trainen van AI-modellen, niet om bezoekers die waarde opleveren.

Wat er aan de hand is

Volgens Search Engine Journal wordt maar liefst 80% van het AI-verkeer op websites gegenereerd door bots die data verzamelen voor het trainen van AI-modellen. Dit verkeer kost servercapaciteit, bandbreedte en soms zelfs geld als je per verzoek betaalt. Het probleem groeit naarmate meer AI-bedrijven schaamteloos het web schrapen. Waar vroeger vooral zoekmachines je site bezochten, is er nu een wildgroei aan bots die geen enkele waarde teruggeven. Ze vertragen je site, verhogen je hostingkosten en kunnen zelfs je analyses verstoren.

Wat dit betekent

Voor ondernemers met een eigen website of webshop betekent dit dat je mogelijk betaalt voor verkeer dat niets oplevert. Als je hostingkosten stijgen of je site trager wordt, kan een deel van de oorzaak bij deze AI-bots liggen. Vooral kleinere sites met beperkte servercapaciteit merken de impact: een plotselinge piek in bezoekersaantallen die nergens op slaat, of een server die vastloopt zonder dat er echte klanten zijn. Het is een sluipende kostenpost die je niet in je dashboard ziet, tenzij je weet waar je moet kijken.

Hoe je dit kunt toepassen

**Als je een webshop runt** en merkt dat je server regelmatig overbelast raakt zonder duidelijke piek in bestellingen, overweeg dan om je serverlogs te controleren op verdachte user agents. Je kunt een eenvoudige regel in je .htaccess-bestand toevoegen die bekende AI-bots blokkeert, zoals GPTBot of CCBot. Een optie is om een lijst van bekende AI-bot-user-agents te verzamelen en deze de toegang te weigeren. Test eerst of je site nog normaal laadt voor echte bezoekers.

**Als je een contentwebsite beheert** en merkt dat je bandbreedte onverklaarbaar hoog is, zou je kunnen overwegen om een robots.txt-bestand aan te maken dat specifieke AI-bots uitsluit. Let op: blokkeer niet alle bots, want Googlebot moet gewoon kunnen crawlen voor je vindbaarheid. Een mogelijkheid is om alleen de bots te blokkeren die je herkent als AI-trainers, zoals Bytespider of Claude-Web. Controleer regelmatig of Google je site nog indexeert.

**Als je een leadgeneratie-site hebt** en je analytics laten vreemde pieken zien van bezoekers die geen seconde op je site blijven, dan is de kans groot dat het AI-bots zijn. Je zou kunnen overwegen om een firewallregel in te stellen die verkeer blokkeert op basis van gedrag, zoals te snelle opeenvolging van requests. Een andere optie is om een CAPTCHA in te zetten op formulieren, maar wees voorzichtig: dat kan ook echte bezoekers afschrikken.

**Als je een SaaS-platform draait** en je API wordt overspoeld door requests die niet van klanten komen, overweeg dan om rate limiting in te stellen. Je kunt per IP-adres een maximum aantal requests per minuut instellen. Een mogelijkheid is om een aparte laag te bouwen die AI-bot-verkeer herkent op basis van patronen, zoals het ontbreken van een browser- of cookie-ondersteuning. Dit vraagt wat technisch inzicht, maar veel hostingpartijen bieden hier standaard tools voor.

De praktische toepassing hangt af van jouw situatie, maar de eerste stap is altijd hetzelfde: controleer je serverlogs of analytics op onverklaarbare pieken en identificeer de user agents. Zodra je weet welke bots je belasten, kun je ze eenvoudig blokkeren zonder je Google-ranking te riskeren.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

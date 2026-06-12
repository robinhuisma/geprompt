---
title: "AI-bots vreten servercapaciteit: herken en blokkeer ze zonder Google-straf"
date: 2026-06-12T14:05:51.589Z
tags: ["ai-bots", "serverbeheer", "website-optimalisatie", "seo"]
categorieen: ["nieuws-tools"]
summary: "Herken AI-botverkeer in je logs en blokkeer het met simpele maatregelen zonder je Google-ranking te schaden."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord

AI-bots slurpen tot 80 procent van je servercapaciteit op zonder dat je er iets aan hebt. Je kunt dit verkeer herkennen in je serverlogs en blokkeren met een paar simpele regels in je .htaccess-bestand of via je CDN, zonder dat je Google-ranking eronder lijdt.

Wat er aan de hand is

Volgens Search Engine Journal wordt 80 procent van al het AI-verkeer op websites gebruikt voor het trainen van AI-modellen. Dat betekent dat een groot deel van je servercapaciteit wordt verbruikt door bots die jouw content scrapen, zonder dat ze ooit een product kopen, een formulier invullen of een pagina converteren. Voor ondernemers die betalen voor hosting op basis van bandbreedte of CPU-gebruik, kan dit direct oplopen in de kosten. Het probleem is dat niet al dit verkeer kwaadaardig is: sommige bots, zoals die van Google, zijn nodig voor je vindbaarheid. Het onderscheid maken is de uitdaging.

Wat dit betekent

Voor mkb-ondernemers met een eigen website of webshop kan AI-botverkeer een sluipende kostenpost zijn. Als je hostingrekening ineens stijgt zonder dat je meer bezoekers of omzet ziet, is de kans groot dat AI-bots de boosdoener zijn. Het risico is dat je onterecht meer betaalt voor infrastructuur die niet bijdraagt aan je bedrijfsdoelen. Tegelijk is het gevaar dat je per ongeluk legitieme bots blokkeert, zoals Googlebot, waardoor je uit de zoekresultaten verdwijnt. De kunst is om selectief te filteren.

Hoe je dit kunt toepassen

**Als je een webshop runt en merkt dat je serverlogs vol staan met verkeer van onbekende IP-adressen**, kun je een eenvoudige filter aanzetten. Controleer in je logs op user agents zoals 'GPTBot', 'Claude-Web' of 'CCBot'. Voeg in je .htaccess-bestand een regel toe die deze user agents blokkeert. Een voorbeeldregel is: 'RewriteCond %{HTTP_USER_AGENT} GPTBot [NC]' gevolgd door 'RewriteRule .* - [F]'. Test dit eerst op een kopie van je site om er zeker van te zijn dat je geen Googlebot blokkeert.

**Als je een CDN gebruikt zoals Cloudflare of Fastly**, kun je een firewallregel aanmaken die verkeer van bekende AI-bot-IP-ranges blokkeert. Veel CDN's bieden een optie om 'bot management' in te schakelen, waarmee je automatisch verdacht verkeer kunt filteren. Je zou kunnen beginnen met het blokkeren van user agents die niet in de officiële lijst van Googlebot staan. Een optie is om een regel te maken die al het verkeer met een user agent die 'bot' of 'crawler' bevat, eerst naar een aparte logboekpagina stuurt.

**Als je een WordPress-site beheert**, kun je een plugin gebruiken zoals 'Wordfence' of 'AI Traffic Blocker' om AI-bots te detecteren en te blokkeren. Deze plugins houden een database bij van bekende bot-IP's en user agents. Overweeg om de plugin in te stellen op 'block on first hit' voor onbekende bots, maar zet een whitelist aan voor Googlebot en Bingbot. Controleer na een week of je serverbelasting is gedaald.

**Als je geen technische achtergrond hebt**, kun je je hostingprovider vragen of zij een bot-filterdienst aanbieden. Veel hostingpartijen hebben standaard tools om AI-botverkeer te herkennen en te blokkeren. Een mogelijkheid is om een ticket aan te maken met de vraag: 'Kunnen jullie AI-botverkeer filteren op mijn account?' Vaak kunnen zij dit op hun infrastructuur regelen zonder dat je zelf code hoeft aan te passen.

**Als je bang bent dat blokkades je Google-ranking schaden**, kun je eerst een test doen met een kleine subset van je pagina's. Blokkeer AI-bots alleen op pagina's die geen organisch verkeer aantrekken, zoals je bedankpagina of je privacyverklaring. Controleer in Google Search Console of er geen fouten verschijnen. Als alles stabiel blijft, kun je de blokkade uitbreiden naar de rest van je site.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

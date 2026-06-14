---
title: "AI-bots vreten je server leeg: zo herken en blokkeer je ze"
date: 2026-06-14T10:06:03.251Z
tags: ["ai-bots", "serverkosten", "websitebeveiliging", "hosting"]
categorieen: ["nieuws-tools"]
summary: "80% van AI-botverkeer kost je geld. Zo bescherm je je site zonder Google te hinderen."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord is dat een groot deel van het verkeer op websites tegenwoordig afkomstig is van AI-bots die servers belasten voor modeltraining, zonder dat dit bezoekers of omzet oplevert. Als ondernemer kun je dit verkeer herkennen en blokkeren met eenvoudige tools, waardoor je hostingkosten dalen en je site snel blijft voor echte bezoekers.

## Wat er aan de hand is

Volgens Search Engine Journal wordt naar schatting 80 procent van het AI-verkeer op websites gebruikt voor het trainen van AI-modellen. Dit betekent dat een groot deel van de servercapaciteit die jij betaalt, wordt verbruikt door geautomatiseerde bots die geen enkele waarde toevoegen aan jouw bedrijf. Deze bots halen pagina’s op, doorlopen formulieren en belasten databases, terwijl ze geen producten kopen, geen contact opnemen of geen content consumeren zoals een mens dat zou doen. Het probleem is niet nieuw, maar de schaal is toegenomen nu AI-bedrijven massaal data verzamelen. Voor website-eigenaren leidt dit tot hogere hostingkosten, tragere laadtijden voor echte bezoekers en een slechtere gebruikerservaring.

## Wat dit betekent

Voor ondernemers met een eigen website, webshop of platform heeft dit directe financiële gevolgen. Je betaalt voor servercapaciteit die wordt opgeslokt door bots. Bij een gemiddelde hostingrekening kan dit betekenen dat je tot 80 procent meer betaalt dan nodig is, zonder dat je daar iets voor terugkrijgt. Daarnaast kan de extra belasting ervoor zorgen dat je site trager wordt, wat leidt tot hogere bouncepercentages en minder conversies. Vooral voor kleinere bedrijven met gedeelde hosting of beperkte bandbreedte is dit een probleem. Het is niet alleen een kwestie van geld, maar ook van concurrentiepositie: een trage site verliest bezoekers aan snellere alternatieven.

## Hoe je dit kunt toepassen

**Als je een webshop runt** en merkt dat je server onverkort pieken vertoont zonder dat er extra bestellingen binnenkomen, kun je overwegen om verkeersanalyse in te schakelen. De meeste hostingproviders bieden logs waarin je ziet welke IP-adressen en user agents je site bezoeken. Kijk naar verdachte patronen: veel verzoeken in korte tijd, herhaalde bezoeken aan dezelfde pagina’s, of user agents die verwijzen naar AI-tools zoals GPTBot of Claude. Een mogelijkheid is om deze specifieke bots te blokkeren via je robots.txt-bestand of via een firewall op je server. Overweeg om een tool zoals Cloudflare in te zetten, die AI-botverkeer automatisch herkent en filtert zonder dat je handmatig lijsten hoeft bij te houden.

**Als je een team aanstuurt** dat verantwoordelijk is voor websitebeheer, kun je een protocol opstellen voor het monitoren van serverlogs. Stel een wekelijkse controle in op ongebruikelijke verkeerspieken en vergelijk deze met conversiedata. Als je ziet dat een piek niet leidt tot meer verkopen of leads, is de kans groot dat het om botverkeer gaat. Een optie is om een waarschuwing in te stellen in je hostingdashboard bij een plotselinge toename van verzoeken. Zo kun je snel ingrijpen voordat de kosten oplopen. Overweeg ook om een rate limiter in te stellen die het aantal verzoeken per IP-adres beperkt, zodat bots niet onbeperkt kunnen blijven laden.

**Als je een contentplatform beheert** met veel artikelen of handleidingen, is het verstandig om te controleren of AI-bots je content gebruiken voor modeltraining zonder dat je daar toestemming voor geeft. Je zou kunnen overwegen om een aparte robots.txt-regel toe te voegen die specifiek AI-crawlers uitsluit, zoals GPTBot, CCBot of Anthropic. Dit is een simpele aanpassing die je direct kunt doorvoeren via je CMS of via een FTP-client. Een andere mogelijkheid is om een plugin te installeren die botverkeer blokkeert, zoals Wordfence voor WordPress. Let wel op: sluit nooit Googlebot uit, want dat kan je vindbaarheid in zoekmachines schaden.

**Als je een leadgeneratiewebsite hebt** die afhankelijk is van formulieren, kun je merken dat AI-bots deze formulieren invullen met nepadressen. Dit vervuilt je database en verspilt tijd van je verkoopteam. Een praktische stap is om een CAPTCHA toe te voegen aan je formulieren, zoals Google reCAPTCHA v3, die onzichtbaar werkt voor echte bezoekers maar bots tegenhoudt. Overweeg ook om een honeypot-veld toe te voegen: een verborgen veld dat alleen bots invullen. Dit is een effectieve, lichte methode die geen extra belasting voor bezoekers oplevert.

Bron: Search Engine Journal (https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

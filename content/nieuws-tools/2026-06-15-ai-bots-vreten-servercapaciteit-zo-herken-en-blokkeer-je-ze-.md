---
title: "AI-bots vreten servercapaciteit: zo herken en blokkeer je ze zonder Google te hinderen"
date: 2026-06-15T14:06:55.854Z
tags: ["ai-bots", "serverkosten", "websitebeheer", "botverkeer"]
categorieen: ["nieuws-tools"]
summary: "Leer hoe je AI-botverkeer herkent en blokkeert zonder je Google-ranking te schaden."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord: AI-bots slurpen tot 80 procent van je servercapaciteit op voor modeltraining, maar je kunt ze blokkeren zonder je vindbaarheid in Google te schaden. Het draait om het herkennen van kwaadaardige bots en het slim instellen van blokkades die alleen de schadelijke verkeersstromen treffen.

## Wat er aan de hand is

Volgens Search Engine Journal wordt 80 procent van het AI-botverkeer gebruikt om modellen te trainen, niet om je website te indexeren of te crawlen voor zoekmachines. Dat betekent dat een groot deel van je serverbelasting geen enkel nut heeft voor jouw bedrijf. Deze bots komen van bedrijven die AI-modellen voeden met data van websites, vaak zonder toestemming. Het probleem is dat ze je server kunnen overbelasten, wat leidt tot tragere laadtijden, hogere hostingkosten en in het ergste geval een crash. Voor ondernemers met een MKB-website kan dit ongemerkt oplopen tot aanzienlijke extra maandlasten.

## Wat dit betekent

Voor jou als website-eigenaar betekent dit dat je mogelijk betaalt voor verkeer dat je niets oplevert. Hostingpakketten rekenen vaak per bezoeker of per verbruikte bandbreedte. Als AI-bots 80 procent van dat verkeer voor hun rekening nemen, betaal je dus voor vier van de vijf bezoekers die geen klant worden. Bovendien kunnen deze bots je server zo zwaar belasten dat echte bezoekers een trage website ervaren, wat direct invloed heeft op conversie en gebruikerservaring. Het is een sluipende kostenpost die je kunt indammen zonder dat je Google in de weg zit.

## Hoe je dit kunt toepassen

**Als je een webshop runt en merkt dat je server vaak traag is zonder duidelijke pieken in echt bezoek...** Je zou kunnen beginnen met het analyseren van je serverlogs. Kijk naar IP-adressen die in korte tijd veel pagina’s opvragen, vaak met ongebruikelijke user-agent strings zoals ‘GPTBot’ of ‘Claude-Web’. Een optie is om deze specifieke user-agents te blokkeren in je robots.txt-bestand. Voeg regels toe zoals ‘User-agent: GPTBot’ en ‘Disallow: /’. Dit voorkomt dat deze bots je site scannen, terwijl Googlebot gewoon zijn werk blijft doen. Controleer wel of je geen essentiële crawlers blokkeert.

**Als je een contentwebsite beheert en merkt dat je bandbreedte onverklaarbaar stijgt...** Overweeg om een Web Application Firewall (WAF) in te schakelen die AI-bots herkent op basis van gedrag. Veel hostingproviders bieden dit standaard aan. Je kunt ook een eenvoudige snelheidslimiet instellen per IP-adres. Stel bijvoorbeeld een maximum van 100 requests per minuut in. Echte bezoekers halen dat zelden, maar AI-bots overschrijden het vaak. Dit beschermt je server zonder dat je handmatig lijsten met IP-adressen hoeft bij te houden.

**Als je een zakelijke dienstverlening hebt en je website vooral dient als visitekaartje...** Een simpele stap is het toevoegen van een CAPTCHA op contactformulieren of belangrijke pagina’s. Dit houdt AI-bots tegen die proberen data te scrapen. Let op: plaats dit niet op je homepage of productpagina’s, want dat kan Google hinderen. Gebruik het alleen op pagina’s waar interactie nodig is, zoals een offerte-aanvraag. Je kunt ook een cookie- of JavaScript-check inbouwen: veel AI-bots ondersteunen geen JavaScript, dus een eenvoudige test kan ze al weren.

**Als je twijfelt of je blokkades Google beïnvloeden...** Test altijd met de Google Search Console. Gebruik de URL-inspectietool om te zien of Google je pagina’s nog kan crawlen. Als je robots.txt aanpast, kun je daar direct controleren of Googlebot wordt geblokkeerd. Een veilige vuistregel is om alleen specifieke user-agents te blokkeren die niet van Google zijn. Google publiceert zijn lijst met officiële user-agents, dus je kunt die eenvoudig uitsluiten van je blokkades.

Bron: Search Engine Journal (https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

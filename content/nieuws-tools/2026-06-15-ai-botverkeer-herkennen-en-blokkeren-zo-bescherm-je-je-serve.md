---
title: "AI-botverkeer herkennen en blokkeren: zo bescherm je je server zonder Google te hinderen"
date: 2026-06-15T06:07:20.406Z
tags: ["ai-bots", "serverbeheer", "website-optimalisatie", "botverkeer"]
categorieen: ["nieuws-tools"]
summary: "80% van AI-botverkeer belast je server. Zo herken en blokkeer je het zonder Google te hinderen."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

Het antwoord is dat AI-bots steeds vaker websites platleggen door servers te overbelasten met verkeer dat bedoeld is voor modeltraining. Volgens Search Engine Journal is 80 procent van het AI-verkeer afkomstig van bots die jouw infrastructuur gebruiken om modellen te trainen, zonder dat jij daar iets aan hebt. Je kunt dit verkeer herkennen in je serverlogs en eenvoudig blokkeren zonder dat Google je site minder goed vindt.

## Wat er aan de hand is

AI-bots zoals die van OpenAI, Anthropic en andere modelbouwers scannen het web op grote schaal om trainingsdata te verzamelen. Dit verkeer is vaak agressiever dan reguliere crawlers: het laadt pagina's sneller, vraagt meer bestanden op en doet dat in korte tijd. Het gevolg is dat servers overbelast raken, laadtijden verslechteren en hostingkosten stijgen. Search Engine Journal meldt dat 80 procent van het AI-verkeer geen waarde oplevert voor de website-eigenaar, maar wel voor de rekening zorgt. Het probleem is niet nieuw, maar neemt toe naarmate meer AI-bedrijven hun modellen updaten en uitbreiden.

## Wat dit betekent

Voor ondernemers met een eigen website of webshop betekent dit dat je mogelijk betaalt voor verkeer dat jou niets oplevert. Hogere serverkosten, tragere laadtijden en zelfs downtime kunnen het gevolg zijn. Vooral kleinere sites zonder dedicated server of CDN merken dit direct. Het is niet alleen een technisch probleem, maar ook een kostenpost. Als je geen maatregelen neemt, subsidieer je indirect de training van AI-modellen van grote techbedrijven. Tegelijk wil je niet per ongeluk Google-bots blokkeren, want dat schaadt je vindbaarheid in de zoekresultaten.

## Hoe je dit kunt toepassen

**Als je een webshop runt op een gedeelde hostingomgeving.** Je kunt in je serverlogs zoeken naar user agents zoals GPTBot, Claude-Web of CCBot. Deze bots hebben vaak een herkenbare naam in de request header. Een optie is om deze user agents te blokkeren via je .htaccess-bestand of via de instellingen van je hostingdashboard. Overweeg om alleen de meest agressieve bots te blokkeren, zoals die van OpenAI en Anthropic, en Googlebot met rust te laten. Je zou kunnen beginnen met het toevoegen van een regel voor GPTBot in je robots.txt, maar houd er rekening mee dat sommige bots die negeren.

**Als je een team aanstuurt dat verantwoordelijk is voor websitebeheer.** Je kunt een eenvoudige monitoringstool zoals GoAccess of Matomo gebruiken om verkeerspatronen te analyseren. Kijk naar pieken in paginabezoeken van IP-adressen die niet afkomstig zijn van bekende zoekmachines. Een mogelijkheid is om een lijst te maken van IP-ranges die bekend staan als AI-botverkeer, bijvoorbeeld via openbare databases zoals de lijst van Dark Visitors of BotBlock. Overweeg om deze IP-ranges te blokkeren op firewally-niveau, maar test eerst of Googlebot er niet tussen zit.

**Als je een contentwebsite beheert met veel pagina's.** Je kunt een rate limiter instellen op je server die het aantal requests per seconde per IP beperkt. Dit voorkomt dat een enkele bot je hele site in een paar minuten uitleest. Een optie is om een plugin zoals Wordfence (voor WordPress) of een module in Nginx of Apache te gebruiken. Je zou kunnen beginnen met een limiet van 10 requests per seconde per IP, en dat aanpassen op basis van je normale verkeer. Overweeg om een aparte logboekanalyse te draaien om te zien welke bots de meeste resources verbruiken.

**Als je geen technische achtergrond hebt.** Je kunt een dienst zoals Cloudflare gebruiken, die een ingebouwde botmanagementfunctie biedt. Cloudflare herkent AI-bots automatisch en kan ze blokkeren zonder dat je zelf configuraties hoeft aan te passen. Een mogelijkheid is om de gratis versie te proberen, die al basale botbescherming biedt. Overweeg om de instellingen zo te zetten dat alleen verdachte bots worden geblokkeerd, niet alle bots, om te voorkomen dat legitieme crawlers zoals Googlebot worden tegengehouden.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

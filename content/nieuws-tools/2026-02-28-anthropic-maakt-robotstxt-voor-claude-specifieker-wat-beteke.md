---
title: "Anthropic maakt robots.txt voor Claude specifieker, wat betekent dat voor jouw website?"
date: 2026-02-28T13:59:05.815Z
tags: ["anthropic", "claude", "robots.txt", "webcrawler"]
categorieen: ["nieuws-tools"]
summary: "Anthropic splitst zijn AI-crawler op in drie aparte bots, waardoor je nu kunt kiezen welke Claude toegang krijgt tot je site voor training, zoeken of gebruikershulp."
cover:
  image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
  alt: "Anthropic maakt robots.txt voor Claude specifieker, wat betekent dat voor jouw website?"
  caption: "Foto via Pexels"
draft: false
---

Anthropic, het bedrijf achter de AI Claude, heeft zijn webcrawler opgesplitst in drie aparte 'bots'. Waar je voorheen één crawler van Claude kon blokkeren of toestaan, kun je nu specifieker kiezen. Dit geeft website-eigenaren meer controle over hoe hun content wordt gebruikt door AI.

De drie nieuwe bots zijn: Claude-Webbot-Training (voor het trainen van de AI-modellen), Claude-Webbot-Search (om Claude te helpen bij het zoeken op internet) en Claude-Webbot-User (die content ophaalt als een gebruiker Claude daarom vraagt). Het belangrijkste verschil met voorheen is dat je nu kunt besluiten om bijvoorbeeld wel training toe te staan, maar het ophalen van content voor live gebruikersvragen te blokkeren, of andersom.

## Wat betekent deze verandering voor jouw website?

Als je niks doet, verandert er waarschijnlijk niets aan de toegang die Claude heeft. De verandering gaat over de *mogelijkheid* tot fijnmaziger beheer via het `robots.txt`-bestand van je website. Dit bestand vertelt zoekmachines en andere crawlers welke delen van je site ze mogen bezoeken.

De impact zit 'm in de keuzes die je nu kunt maken. Stel, je hebt een website met waardevolle, unieke content. Je wilt misschien niet dat die gebruikt wordt om de algemene kennis van Claude te trainen (Claude-Webbot-Training), maar je vindt het prima als bezoekers via Claude naar jouw artikelen worden doorverwezen (Claude-Webbot-Search) of als Claude jouw content kan citeren om hun vragen te beantwoorden (Claude-Webbot-User). Die keuze was er voorheen niet.

## Een afweging tussen zichtbaarheid en controle

Volgens de documentatie van Anthropic zijn er zichtbaarheidsafwegingen. Als je de Claude-Webbot-User blokkeert, kan Claude de content van je site niet ophalen wanneer een gebruiker ernaar vraagt. Dit betekent dat Claude jouw informatie niet kan gebruiken in gesprekken, wat de relevantie van zijn antwoorden over jouw niche kan verminderen. Het blokkeren van de training-bot heeft op de korte termijn geen directe impact op de zichtbaarheid, maar kan op de lange termijn betekenen dat Claude minder goed op de hoogte is van de informatie op jouw site.

## Hoe kun je dit vandaag toepassen?

Als je wilt controleren of Claude jouw site crawlt of om instellingen aan te passen, ga je naar het `robots.txt`-bestand van je website (meestal te vinden op `jouwdomein.nl/robots.txt`). Je kunt specifieke regels toevoegen voor elke bot, bijvoorbeeld `User-agent: Claude-Webbot-Training` gevolgd door `Disallow: /` om die te blokkeren. Raadpleeg de officiële documentatie van Anthropic of je webdeveloper voor de exacte syntax. Het is een technische, maar eenmalige aanpassing die meer regie geeft over hoe AI met jouw content omgaat.

*Dit artikel is geschreven met behulp van AI en gecontroleerd door de redactie van geprompt.nl.*

Bron: Search Engine Journal

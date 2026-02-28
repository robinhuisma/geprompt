---
title: "Anthropic splitst Claude-crawler op: zo bepaal je zelf wat AI van je site leert"
date: 2026-02-28T13:36:21.818Z
tags: ["anthropic", "claude", "robots.txt", "webbeheer"]
categorieen: ["nieuws-tools"]
summary: "Anthropic heeft zijn webcrawler opgesplitst in drie aparte 'bots', waardoor je nu preciezer kunt bepalen of je content wordt gebruikt voor AI-training, zoekindexering of live gebruikersvragen."
cover:
  image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
  alt: "Anthropic splitst Claude-crawler op: zo bepaal je zelf wat AI van je site leert"
  caption: "Foto via Pexels"
draft: false
---

Anthropic, het bedrijf achter de AI-assistent Claude, heeft een technische maar belangrijke wijziging doorgevoerd die website-eigenaren meer controle geeft. Waar voorheen één crawler (de 'ClaudeBot') alle inhoud van het web ophaalde voor verschillende doeleinden, zijn er nu drie gespecialiseerde bots. Dit betekent dat je via het standaard `robots.txt`-bestand op je server veel preciezer kunt aangeven welke bot welk deel van je site mag bezoeken.

De drie bots zijn: 'Claude-Webbot-Training' (voor het trainen van de AI-modellen), 'Claude-Webbot-Indexing' (voor het indexeren van webinhoud voor Claude's interne zoekfunctie) en 'Claude-Webbot' (voor het ophalen van live informatie wanneer een gebruiker Claude om actuele data vraagt). Het cruciale verschil is dat het blokkeren van een bot gevolgen heeft voor de functionaliteit. Als je de training-bot blokkeert, leert Claude niet van je content, maar kan een gebruiker via de live-bot nog steeds een link naar je site delen en de inhoud opvragen. Blokkeer je de live 'Claude-Webbot' volledig, dan kan Claude geen realtime informatie meer van je site halen voor zijn gebruikers.

## Wat betekent dit voor jouw website?

Voor ondernemers en contentmakers komt het neer op een keuze tussen zichtbaarheid en controle. Wil je dat je blogartikelen, productbeschrijvingen of nieuwsupdates worden gebruikt om toekomstige versies van Claude (en mogelijk andere AI's) te trainen? Dan laat je de training-bot toe. Vind je dat niet wenselijk, maar wil je wel dat Claude gebruikers naar je actuele content kan doorverwijzen? Dan blokkeer je alleen de training-bot. Het geeft een mate van controle die voorheen niet bestond in de AI-wereld, waar crawlers vaak alles of niets doen.

Het is een reactie op de groeiende vraag vanuit het web naar transparantie en keuzevrijheid in het AI-tijdperk. Door de crawlers te splitsen, erkent Anthropic dat het gebruik van webinhoud voor modeltraining een ander doel en een andere impact heeft dan het opvragen van een pagina voor een specifieke gebruiker. Het is een stap die andere AI-aanbieders mogelijk zullen volgen.

## Hoe kun je dit vandaag toepassen?

De controle uitoefenen begint bij je `robots.txt`-bestand, dat in de hoofdmap van je website staat (meestal op `jouwdomein.nl/robots.txt`). Je kunt specifieke regels toevoegen voor elke bot. Een eenvoudige regel om de training-bot te blokkeren terwijl de andere bots welkom zijn, ziet er bijvoorbeeld zo uit:
`User-agent: Claude-Webbot-Training
Disallow: /`

Het is verstandig om je huidige `robots.txt` eerst te controleren en eventueel advies in te winnen van je webdeveloper of hostingpartij, zeker als je complexere regels hebt voor andere crawlers zoals die van Google. Dit is het moment om een bewuste keuze te maken over hoe je wilt dat AI met jouw online content omgaat.

*Dit artikel is geschreven met behulp van AI en gecontroleerd door de redactie van geprompt.nl.*

Bron: Search Engine Journal

---
title: "AI leert betere vragen stellen: wat dat betekent voor jouw offerteproces"
date: 2026-06-12T06:12:49.940Z
tags: ["AI", "vragen stellen", "klantenservice", "offertes"]
categorieen: ["slimmer-werken"]
summary: "MIT-onderzoek toont aan dat AI met de juiste strategie slimmere vragen kan stellen, direct toepasbaar in klantenservice en offertes."
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/teaching-ai-agents-ask-better-questions-playing-battleship-0603"
---

Het antwoord is dat AI-systemen met een simpele rekentechniek veel slimmere vragen kunnen leren stellen, zonder dat je een groot model of een MIT-lab nodig hebt. Dat blijkt uit onderzoek van MIT en Harvard, waarbij AI-agenten het bordspel ‘Battleship’ speelden en leerden efficiënter informatie te verzamelen.

## Wat er aan de hand is

Onderzoekers van MIT’s CSAIL en Harvard SEAS hebben AI-modellen getest op hun vermogen om de juiste vragen te stellen in onzekere situaties. Ze gebruikten een aangepaste versie van ‘Battleship’, het klassieke raadspel, om te meten hoe goed taalmodellen informatie kunnen achterhalen. In het spel ‘Collaborative Battleship’ stelt een ‘kapitein’ vragen aan een ‘spotter’ die met ja of nee antwoordt. De onderzoekers verzamelden eerst data van meer dan 40 menselijke spelers en vergeleken die met de prestaties van grote modellen zoals GPT-5 en kleinere modellen zoals Llama 4 Scout.

De resultaten waren opvallend. Zonder training versloegen grote modellen mensen al in minder beurten. Kleinere modellen presteerden slechter: Llama 4 Scout won slechts 8 procent van de potjes. Maar toen de onderzoekers een Monte Carlo-inferentiestrategie toevoegden, een techniek die de kans op een juist antwoord per vraag berekent, steeg de winst van Llama 4 Scout naar 82 procent. Het kleine model versloeg daarmee zelfs GPT-5, terwijl het slechts 1 procent van de rekenkracht gebruikte.

## Wat dit betekent

Dit onderzoek laat zien dat de kwaliteit van AI-vragen niet afhangt van de grootte van het model, maar van de strategie erachter. Voor ondernemers betekent dit dat je niet per se het duurste of grootste AI-model nodig hebt om slimmere vragen te laten stellen. Een klein, lokaal draaiend model met een goede inferentiestrategie kan in veel situaties beter presteren dan een groot cloudmodel.

Voor sectoren waar het stellen van de juiste vragen cruciaal is, zoals klantenservice, medische diagnostiek, juridisch advies of offerteprocessen, opent dit de deur naar efficiëntere AI-toepassingen zonder hoge kosten. Het gaat niet om brute rekenkracht, maar om het slim structureren van vragen.

## Hoe je dit kunt toepassen

**Als je een webshop runt met een chatbot voor klantvragen**, kun je overwegen om de chatbot niet alleen te trainen op antwoorden, maar ook op het stellen van vervolgvragen. In plaats van dat de chatbot meteen een standaardantwoord geeft, zou hij eerst kunnen vragen: ‘Gaat het om een retour, een ruil of een klacht?’ Door de Monte Carlo-aanpak te gebruiken, kan de chatbot de kans inschatten welke vraag het snelst tot een oplossing leidt. Je zou dit kunnen testen met een klein open-source model zoals Llama 4 Scout, dat je lokaal draait, en de gespreksdata analyseren op efficiëntie.

**Als je een team aanstuurt dat offertes maakt**, kun je AI inzetten om de eerste klantvragen te verfijnen. Stel dat een klant een offerte aanvraagt met vage specificaties. Een AI-agent zou niet meteen een prijs moeten berekenen, maar eerst een reeks vragen moeten genereren die de kans op een correcte offerte maximaliseren. Door de inferentiestrategie uit het onderzoek toe te passen, kun je de AI laten bepalen welke vraag het meeste oplevert: ‘Wat is het budget?’ of ‘Wat is de gewenste levertijd?’ Een mogelijkheid is om een klein model te trainen op historische offertedata en het te laten leren welke vragen de meeste informatie opleveren.

**Als je in de zorg werkt met triage-systemen**, kun je AI inzetten om patiënten efficiënter te screenen. In plaats van een lange vragenlijst, zou de AI met elke vraag de kans op een bepaalde aandoening kunnen bijstellen. De Monte Carlo-strategie helpt om de volgende vraag te kiezen die de meeste onzekerheid wegneemt. Overweeg om een klein model lokaal te draaien op een beveiligde server, zodat patiëntgegevens niet naar de cloud gaan. Je kunt beginnen met een pilot op één afdeling en de resultaten vergelijken met de huidige werkwijze.

**Als je een juridisch adviesbureau runt**, kun je AI inzetten om dossiers te analyseren. Bij een nieuwe zaak moet de AI de juiste vragen stellen om relevante jurisprudentie te vinden. Door de inferentiestrategie te gebruiken, kan de AI bepalen of je eerst moet vragen naar de rechtsgebied, de datum van de uitspraak of de partijen. Een optie is om een klein model te trainen op een eigen database van uitspraken en het te laten leren welke vragen de snelste resultaten geven. Dit bespaart tijd en verhoogt de kwaliteit van het vooronderzoek.

Bron: MIT News

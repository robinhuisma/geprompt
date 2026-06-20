---
title: "AI leert betere vragen stellen: wat het Battleship-principe betekent voor jouw klantenservice"
date: 2026-06-20T22:15:07.528Z
tags: ["ai", "klantenservice", "vragen stellen", "mit"]
categorieen: ["slimmer-werken"]
summary: "MIT-onderzoek toont aan dat AI met de juiste strategie slimmere vragen leert stellen, direct toepasbaar in klantgesprekken."
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/teaching-ai-agents-ask-better-questions-playing-battleship-0603"
---

Het antwoord: AI-agents kunnen slimmere vragen leren stellen door een strategie uit het spel ‘Battleship’ toe te passen. Dat betekent dat je AI in jouw bedrijf – bijvoorbeeld in klantenservice of offerteprocessen – kunt trainen om gerichtere vragen te stellen, waardoor je sneller bij de kern van een probleem komt en minder tijd verspilt aan irrelevante informatie.

## Wat er aan de hand is

Onderzoekers van MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL) en Harvard University hebben een nieuwe methode ontwikkeld om AI-modellen beter te laten vragen stellen. Ze gebruikten het klassieke spel ‘Battleship’ als testomgeving. In het spel moeten spelers raden waar de schepen van de tegenstander liggen door slimme vragen te stellen. De onderzoekers vertaalden dit naar een ‘Collaborative Battleship’-variant, waarbij een ‘kapitein’ vragen stelt en een ‘spotter’ antwoord geeft. Ze verzamelden eerst data van meer dan 40 menselijke spelers en vergeleken die met de prestaties van grote taalmodellen zoals GPT-5 en kleinere modellen zoals Llama 4 Scout. De resultaten: zonder training versloegen grote modellen de mens al, maar kleinere modellen presteerden slecht. Door een Monte Carlo-inferentiestrategie toe te voegen – een methode die de kans op verschillende opties berekent – steeg de winrate van Llama 4 Scout van 8 procent naar 82 procent tegen mensen. Het model gebruikte daarbij slechts 1 procent van de rekenkracht van GPT-5.

## Wat dit betekent

Voor ondernemers is dit relevanter dan het klinkt. Het probleem dat de onderzoekers oplosten, is precies het probleem dat jij dagelijks tegenkomt als je AI inzet voor klantcontact: AI stelt vaak oppervlakkige of irrelevante vragen. Of het nu gaat om een chatbot op je website, een AI die offertes voorbereidt of een systeem dat klachten analyseert – de kwaliteit van de vragen bepaalt de kwaliteit van het antwoord. Dit onderzoek laat zien dat je met een slimme strategie, niet per se met een groter of duurder model, de kwaliteit van vragen drastisch kunt verbeteren. Vooral kleinere bedrijven die geen budget hebben voor de duurste AI-modellen kunnen hiervan profiteren: een klein model met de juiste strategie kan beter presteren dan een groot model zonder die strategie.

## Hoe je dit kunt toepassen

**Als je een chatbot gebruikt voor klantenservice.** De meeste chatbots stellen standaardvragen als ‘waar kan ik u mee helpen?’ of ‘wat is uw ordernummer?’ Je zou kunnen overwegen om de chatbot te trainen met een strategie die lijkt op de Monte Carlo-methode: elke vraag die de chatbot stelt, moet de kans vergroten dat het probleem snel wordt opgelost. Een mogelijkheid is om de chatbot te laten werken met een beslisboom die niet lineair is, maar die op basis van elk antwoord de meest waarschijnlijke volgende vraag kiest. Overweeg om je huidige chatbotdata te analyseren: welke vragen leiden tot een snelle oplossing en welke niet? Die inzichten kun je gebruiken om de vraagstrategie te verbeteren.

**Als je AI inzet voor offerteprocessen.** Wanneer een klant een offerte aanvraagt, stelt een AI vaak algemene vragen over budget, hoeveelheid en leverdatum. Je zou de AI kunnen laten werken met een ‘informatiewinst’-principe: elke vraag moet de onzekerheid over de uiteindelijke offerte zo veel mogelijk verkleinen. Een optie is om een klein model te gebruiken dat specifiek is getraind op jouw productcatalogus en klantdata, in plaats van een groot generiek model. De MIT-resultaten laten zien dat een klein model met de juiste strategie beter kan presteren dan een groot model zonder strategie. Overweeg om te experimenteren met een open-source model zoals Llama en het te trainen op jouw eigen data.

**Als je een team aanstuurt dat AI-tools ontwikkelt.** Dit onderzoek geeft je een argument om niet blind te staren op de grootste en duurste AI-modellen. De strategie achter de vragen is minstens zo belangrijk als de grootte van het model. Je zou je ontwikkelaars kunnen vragen om te kijken naar inferentiestrategieën zoals Monte Carlo-simulaties, of eenvoudigere varianten daarvan. Een mogelijkheid is om een A/B-test op te zetten: vergelijk een groot model zonder speciale vraagstrategie met een kleiner model dat wel een strategie gebruikt, en meet de klanttevredenheid of het aantal benodigde interacties.

**Als je in de medische of juridische sector werkt.** Dit zijn precies de hoog-risicosectoren die de onderzoekers noemen. In medische diagnoses of juridische adviezen is de kwaliteit van de vragen cruciaal. Je zou kunnen overwegen om AI-assistenten te trainen met een ‘Battleship’-achtige strategie: elke vraag moet de mogelijke diagnoses of juridische opties systematisch uitsluiten. Overleg met je IT-leverancier of zij inferentiestrategieën kunnen implementeren die de efficiëntie van vragen verbeteren.

Bron: MIT News (https://news.mit.edu/2026/teaching-ai-agents-ask-better-questions-playing-battleship-0603)

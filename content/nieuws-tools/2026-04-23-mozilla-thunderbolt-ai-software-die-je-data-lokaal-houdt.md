---
title: "Mozilla Thunderbolt: AI-software die je data lokaal houdt"
date: 2026-04-23T14:07:41.595Z
tags: ["mozilla", "ai", "zelfhosten", "dataprivacy"]
categorieen: ["nieuws-tools"]
summary: "Mozilla lanceert Thunderbolt, een AI-client voor zelfbeheerde infrastructuur, zonder cloudafhankelijkheid."
draft: false
source_name: "Arstechnica"
source_url: "https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/"
---

Mozilla Thunderbolt is een nieuwe AI-client waarmee je als ondernemer AI-modellen kunt gebruiken zonder dat je bedrijfsdata naar externe clouddiensten hoeft te sturen. Het is een front-end programma dat draait op je eigen infrastructuur, gebaseerd op het open-source Haystack-framework. Dit betekent dat je zelf bepaalt waar je data blijft en welke AI-modellen je gebruikt, zonder dat je een AI-expert hoeft te zijn.

## Wat er aan de hand is

Mozilla, bekend van Firefox en Thunderbird, heeft Thunderbolt aangekondigd. Dit is geen eigen AI-model of een agentische browser, maar een client die je koppelt aan zelfgekozen AI-infrastructuur. Thunderbolt is gebouwd op Haystack, een bestaand open-source AI-framework waarmee je modulaire AI-pijplijnen kunt samenstellen uit componenten die je zelf kiest. Mozilla noemt Thunderbolt een ‘soevereine AI-client’. Het systeem werkt met elke ACP-compatibele agent of OpenAI-compatibele API, waaronder Claude, Codex, DeepSeek en OpenCode. Daarnaast kan het integreren met lokaal opgeslagen bedrijfsdata via open protocollen en een offline SQLite-database gebruiken als lokale ‘bron van waarheid’ voor het AI-model. Mozilla biedt optionele end-to-end encryptie en toegangscontroles op apparaatniveau.

## Wat dit betekent

Voor MKB’ers betekent dit een alternatief voor het gebruik van AI via clouddiensten zoals ChatGPT of Claude, waarbij je data altijd naar externe servers gaat. Met Thunderbolt kun je AI inzetten terwijl je data op je eigen hardware blijft. Dat is relevant voor bedrijven die werken met gevoelige klantinformatie, financiële gegevens of bedrijfsgeheimen. Ook bespaar je op cloudkosten, omdat je niet per API-aanroep betaalt aan een externe partij. Je hebt geen diepgaande AI-kennis nodig: Thunderbolt fungeert als een gebruiksvriendelijke laag bovenop de technische infrastructuur. Het is een verschuiving van ‘AI als dienst’ naar ‘AI als tool die je zelf beheert’.

## Hoe je dit kunt toepassen

**Als je een administratiekantoor runt met vertrouwelijke klantdata.** Je zou Thunderbolt kunnen inzetten om een AI-model te draaien dat automatisch documenten classificeert en samenvat, zonder dat die documenten ooit je eigen server verlaten. Overweeg om een lokale SQLite-database in te richten als bron van waarheid voor het model, zodat het altijd de juiste, actuele informatie gebruikt.

**Als je een webshop beheert en klantgedrag wilt analyseren.** Een mogelijkheid is om Thunderbolt te koppelen aan een lokaal AI-model dat aankooppatronen herkent en voorspellingen doet over voorraadbehoefte. Omdat alle data lokaal blijft, hoef je geen privacyrisico’s te nemen met externe AI-diensten. Je zou kunnen beginnen met een klein model zoals DeepSeek via de OpenAI-compatibele API.

**Als je een team aanstuurt dat werkt met bedrijfsgevoelige documenten.** Je zou Thunderbolt kunnen gebruiken als een interne AI-assistent die vragen beantwoordt over je bedrijfsprocessen, gebaseerd op een lokale database. Overweeg om de optionele end-to-end encryptie in te schakelen en toegangscontroles per apparaat in te stellen, zodat alleen geautoriseerde medewerkers het systeem kunnen gebruiken.

**Als je in de zorg werkt en patiëntgegevens wilt verwerken.** Een optie is om Thunderbolt te combineren met een lokaal model dat medische dossiers analyseert op trends of fouten, zonder dat data de organisatie verlaat. De combinatie van lokale opslag en encryptie maakt dit een veilig alternatief voor cloudgebaseerde AI-toepassingen.

Bron: Arstechnica (https://arstechnica.com/ai/2026/04/mozilla-launches-thunderbolt-ai-client-with-focus-on-self-hosted-infrastructure/)

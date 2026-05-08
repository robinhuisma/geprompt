---
title: "n8n bouwt workflows op basis van een prompt: dit kun je ermee"
date: 2026-05-08T02:13:16.552Z
tags: ["automatisering", "n8n", "AI", "mcp"]
categorieen: ["slimmer-werken"]
summary: "Vertel een AI-tool wat je wilt en n8n maakt er een werkende workflow van, zonder code."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/n8n-mcp-server/"
---

Je beschrijft in een chat wat je nodig hebt, en het werkt. Geen code, geen gekopieerde JSON, geen heen-en-weer gepuzzel. n8n’s MCP-server kan nu workflows bouwen en aanpassen op basis van een simpele prompt, direct in je eigen n8n-omgeving.

## Wat er aan de hand is
n8n, het populaire open-source automatiseringsplatform, heeft een update uitgebracht voor zijn MCP-server. Waar je eerder alleen bestaande workflows kon uitvoeren via een AI-client, kun je nu ook nieuwe workflows laten bouwen en bestaande aanpassen. Je vertelt Claude, ChatGPT of een andere AI-client wat je wilt, en die bouwt de workflow, valideert hem, voert hem uit en herstelt fouten zelf. De MCP-server is ingebouwd in alle edities van n8n: Cloud, Enterprise en de gratis self-hosted Community Edition. Het is een first-party functie, onderhouden door n8n zelf, zonder dat je een aparte dienst naast je instance hoeft te draaien. De functie was de afgelopen weken in publieke preview en wordt inmiddels dagelijks gebruikt door het n8n-team.

## Wat dit betekent
Voor ondernemers en professionals die n8n gebruiken, verandert dit de manier waarop je automatiseringen opzet. Waar je voorheen handmatig nodes moest slepen, verbindingen moest leggen en fouten moest oplossen, kun je nu een gesprek voeren met een AI-client en die het werk laten doen. Het betekent dat je geen technische kennis meer nodig hebt om complexe workflows te maken. Het betekent ook dat je sneller kunt itereren: je vraagt om een aanpassing, en de AI past de workflow aan zonder dat je hem opnieuw hoeft te bouwen. Voor kleine bedrijven zonder developer is dit een grote stap: je kunt nu processen automatiseren die voorheen te complex of te tijdrovend waren.

## Hoe je dit kunt toepassen
**Als je een webshop runt en dagelijks handmatig bestellingen verwerkt.** Je zou in Claude of ChatGPT kunnen zeggen: 'Maak een n8n-workflow die elke ochtend om 8 uur een overzicht stuurt van nieuwe bestellingen van de afgelopen 24 uur, met klantnaam, product en totaalbedrag, via mijn Gmail.' De AI bouwt de workflow, je vult alleen je e-mailadres in, en het werkt. Een optie is om daarna te vragen: 'Voeg een node toe die een bedankmail stuurt bij bestellingen boven de 50 euro.'

**Als je een team aanstuurt en wekelijks een statusupdate moet versturen.** Overweeg om een prompt te geven zoals: 'Maak een workflow die elke maandag om 9 uur een Slack-bericht stuurt naar het team met de openstaande taken uit mijn Google Sheets.' De AI zet de verbindingen op. Mocht het niet werken, dan herstelt de AI de fout zelf. Je kunt later vragen om een extra node die de taken sorteert op prioriteit.

**Als je in de marketing werkt en social media plant.** Je zou kunnen vragen: 'Maak een workflow die elke dag om 10 uur een bericht plaatst op LinkedIn met de tekst uit een Google Doc, en me een e-mail stuurt als het gelukt is.' De AI bouwt het in een paar minuten. Een mogelijkheid is om daarna te vragen: 'Voeg een node toe die het bericht eerst naar mij mailt ter goedkeuring voordat het wordt geplaatst.'

**Als je facturatie wilt automatiseren.** Een optie is om te zeggen: 'Maak een workflow die elke keer als er een nieuwe regel in mijn Google Sheets staat met 'betaald', een factuur genereert in mijn boekhoudpakket en die mailt naar de klant.' De AI regelt de nodes en de verbindingen. Mocht er een fout optreden, dan probeert de AI het opnieuw met een aangepaste workflow.

De praktische toepassing hangt af van jouw situatie, maar de kern is simpel: vertel wat je nodig hebt, en n8n bouwt het voor je. Geen code, geen gedoe.

Bron: [n8n blog](https://blog.n8n.io/n8n-mcp-server/)

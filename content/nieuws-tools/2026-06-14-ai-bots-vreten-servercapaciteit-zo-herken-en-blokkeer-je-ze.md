---
title: "AI-bots vreten servercapaciteit: zo herken en blokkeer je ze"
date: 2026-06-14T06:05:46.861Z
tags: ["ai-bots", "serverbeheer", "website-optimalisatie", "botverkeer"]
categorieen: ["nieuws-tools"]
summary: "80% van AI-botverkeer belast je server. Zo blokkeer je het zonder Google te hinderen."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/"
---

80 procent van het AI-verkeer op websites belast de serverinfrastructuur zonder dat het bezoekers oplevert. Dit verkeer wordt gebruikt om AI-modellen te trainen, niet om jouw producten te bekijken of diensten af te nemen. Het gevolg: hogere hostingkosten, tragere laadtijden en onnodige belasting van je server.

## Wat er aan de hand is

AI-bots van bedrijven zoals OpenAI, Anthropic en Google scannen massaal websites om data te verzamelen voor het trainen van taalmodellen. Dit verkeer is vaak niet te onderscheiden van legitiem bezoek, maar het doel is fundamenteel anders: het voedt AI-systemen, niet jouw bedrijfsdoelen. Volgens Search Engine Journal is inmiddels 80 procent van al het AI-verkeer afkomstig van dit soort trainingsactiviteiten. Voor website-eigenaren betekent dit dat ze betalen voor servercapaciteit die wordt gebruikt door partijen die er geen directe waarde tegenover zetten. Het probleem groeit naarmate meer AI-bedrijven hun modellen blijven trainen op openbare webdata.

## Wat dit betekent

Voor ondernemers met een eigen website of webshop heeft dit directe financiële gevolgen. Je hostingkosten stijgen omdat je server meer verzoeken moet verwerken, terwijl het aantal echte bezoekers gelijk blijft of zelfs daalt. Daarnaast kan de extra belasting leiden tot tragere laadtijden, wat een negatief effect heeft op gebruikerservaring en zoekmachineoptimalisatie. Vooral kleinere websites met gedeelde hosting of beperkte bandbreedte merken dit snel. Het is niet alleen een kwestie van ongemak; het kan je maandelijkse hostingrekening aanzienlijk verhogen zonder dat je er iets voor terugkrijgt.

## Hoe je dit kunt toepassen

**Als je een webshop runt op een gedeelde server**, kun je overwegen om een eenvoudige .htaccess-regel toe te voegen die bekende AI-bot user agents blokkeert. Je zou kunnen beginnen met het blokkeren van bots zoals GPTBot, Claude-Web en CCBot. Een voorbeeldregel in je .htaccess-bestand: `RewriteCond %{HTTP_USER_AGENT} (GPTBot|Claude-Web|CCBot) [NC]` gevolgd door `RewriteRule .* - [F,L]`. Dit voorkomt dat deze bots je server belasten zonder dat het invloed heeft op Googlebot, die een andere user agent gebruikt.

**Als je Cloudflare gebruikt voor je website**, kun je een firewallregel aanmaken die specifiek AI-bots blokkeert. Cloudflare biedt een optie om verkeer te filteren op user agent. Je zou een regel kunnen instellen die alle verzoeken met user agents zoals `GPTBot` of `Claude-Web` weigert. Cloudflare heeft ook een lijst met bekende AI-bots die je eenvoudig kunt importeren. Dit werkt snel en zonder dat je serverkennis nodig hebt.

**Als je een team aanstuurt dat meerdere websites beheert**, overweeg dan om een centraal beleid in te voeren voor het monitoren van serverlogs. Je zou een script kunnen laten draaien dat wekelijks de top 10 van meest actieve user agents rapporteert. Als je ziet dat een onbekende bot veel verzoeken doet, kun je die toevoegen aan een blokkadelijst. Dit helpt om structureel grip te krijgen op onnodig verkeer.

**Als je in de zorg of een andere sector werkt met gevoelige data**, is het extra belangrijk om AI-bots te blokkeren. Deze bots kunnen onbedoeld privacygevoelige informatie verzamelen als die op je site staat. Je zou kunnen overwegen om een robots.txt-bestand aan te maken dat expliciet aangeeft dat bepaalde AI-bots geen toegang hebben. Houd er wel rekening mee dat niet alle bots robots.txt respecteren; een firewallregel is dan een veiligere optie.

**Als je geen technische achtergrond hebt**, kun je een plugin gebruiken als je website op WordPress draait. Plugins zoals Wordfence of AIO Security bieden eenvoudige opties om bekende AI-bots te blokkeren zonder dat je code hoeft te schrijven. Je zou kunnen beginnen met het inschakelen van de bot-blocking functionaliteit in je bestaande beveiligingsplugin. Dit is de snelste manier om direct resultaat te zien.

Bron: Search Engine Journal (https://www.searchenginejournal.com/ai-bots-keep-overloading-servers-should-website-owners-keep-paying/579018/)

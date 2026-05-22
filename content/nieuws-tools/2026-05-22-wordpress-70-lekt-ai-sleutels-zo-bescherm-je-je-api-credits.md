---
title: "WordPress 7.0 lekt AI-sleutels: zo bescherm je je API-credits"
date: 2026-05-22T14:02:23.343Z
tags: ["wordpress", "api-security", "ai-tools", "mkb"]
categorieen: ["nieuws-tools"]
summary: "WordPress 7.0 maakt AI API-sleutels zichtbaar voor hackers. Zo beveilig je ze."
draft: false
source_name: "Search Engine Journal"
source_url: "https://www.searchenginejournal.com/wordpress-7-0-faces-security-concerns-over-ai-api-keys/575679/"
---

Het antwoord: WordPress 7.0 maakt AI API-sleutels zichtbaar in de broncode van je website, waardoor hackers ze kunnen stelen en misbruiken voor eigen rekening. Dit kan leiden tot duizenden euro’s aan onverwachte kosten, omdat criminelen jouw credits inzetten voor hun eigen AI-aanvragen.

## Wat er aan de hand is

Een beveiligingsonderzoeker waarschuwt dat WordPress 7.0 AI API-sleutels blootstelt in de pagina- en plugininstellingen. Volgens de onderzoeker zal er “een absolute stormloop van hackers komen om ze te stelen”. De sleutels geven toegang tot betaalde AI-diensten zoals OpenAI, Claude of Gemini. Omdat de sleutels in de broncode van de website staan, zijn ze eenvoudig te vinden met geautomatiseerde scans. Het probleem is niet dat WordPress onveilig is, maar dat de standaardinstellingen van versie 7.0 geen encryptie of verborgen opslag bieden voor deze gevoelige data. Het lek treft vooral websites die AI-plugins gebruiken voor contentgeneratie, chatbots of vertalingen.

## Wat dit betekent

Voor MKB-ondernemers die AI-tools in hun WordPress-site hebben geïntegreerd, is dit een direct financieel risico. Een gestolen API-sleutel kan binnen een dag duizenden euro’s aan verbruik genereren, omdat hackers de sleutel gebruiken voor bulkverzoeken. De impact is het grootst voor webshops, dienstverleners en contentplatforms die AI inzetten voor klantinteractie of automatisering. Ook bedrijven die meerdere plugins gebruiken, lopen extra risico: elke plugin met een AI-koppeling kan een lek vormen. Het probleem is niet technisch complex op te lossen, maar vereist wel dat je actie onderneemt voordat een hacker jouw sleutel vindt.

## Hoe je dit kunt toepassen

**Als je een WordPress-site beheert met AI-plugins**, overweeg om direct te controleren of jouw API-sleutels zichtbaar zijn in de pagina- of plugininstellingen. Log in op je WordPress-dashboard, ga naar de instellingen van elke AI-plugin en kijk of de sleutel als platte tekst wordt weergegeven. Als dat het geval is, kun je overwegen om een beveiligingsplugin te installeren die API-sleutels versleutelt of verbergt, zoals WP Security Audit Log of Sucuri Security. Een andere optie is om de sleutel niet in de plugin zelf op te slaan, maar via een aparte configuratie in je wp-config.php-bestand, dat niet via de browser toegankelijk is.

**Als je een team aanstuurt dat meerdere WordPress-sites beheert**, zou je een centraal beheerbeleid kunnen opstellen voor API-sleutels. Overweeg om een wachtwoordmanager of een secrets management-tool te gebruiken, zoals Bitwarden of 1Password, om sleutels veilig te delen met ontwikkelaars. Daarnaast kun je bij elke AI-dienst een aparte API-sleutel aanmaken voor elke site, zodat je bij een lek alleen die ene sleutel kunt intrekken zonder de rest te verstoren. Het is ook verstandig om regelmatig de logs van je AI-dienst te controleren op ongebruikelijk verbruik, zodat je een lek snel opmerkt.

**Als je in de zorg, juridische sector of financiële dienstverlening werkt**, waar gegevensbescherming extra belangrijk is, is een voorzichtige aanpak noodzakelijk. Overweeg om geen AI-plugins te gebruiken die API-sleutels in de WordPress-database opslaan, maar kies voor een externe proxy-server die de sleutels beheert. Je zou ook kunnen overwegen om AI-functionaliteit uit te besteden aan een aparte, beveiligde omgeving die niet direct aan je WordPress-site is gekoppeld. Een mogelijkheid is om een eigen API-gateway op te zetten, zoals met Cloudflare Workers of een simpele Node.js-server, die de sleutels afschermt van de front-end.

Bron: [Search Engine Journal](https://www.searchenginejournal.com/wordpress-7-0-faces-security-concerns-over-ai-api-keys/575679/)

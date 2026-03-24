---
title: "OpenAI geeft ontwikkelaars richtlijnen voor veilige AI voor tieners"
date: 2026-03-24T19:02:46.731Z
tags: ["ai-ontwikkeling", "veiligheid", "richtlijnen", "openai"]
categorieen: ["slimmer-werken"]
summary: "OpenAI publiceert richtlijnen waarmee ontwikkelaars hun AI-toepassingen veiliger kunnen maken voor tieners, met praktische prompts voor moderatie."
cover:
  image: "/images/covers/2026-03-24-helping-developers-build-safer-ai-experiences-for-teens.webp"
  alt: "Helping developers build safer AI experiences for teens"
draft: false
source_name: "Openai"
source_url: "https://openai.com/index/teen-safety-policies-gpt-oss-safeguard"
---

OpenAI heeft een set richtlijnen en voorbeeld-prompts gepubliceerd om ontwikkelaars te helpen hun AI-toepassingen veiliger te maken voor tieners. Het gaat om een praktische handleiding die je kunt gebruiken bij het bouwen van systemen met modellen zoals GPT-4 of GPT-4o. De kern is dat je als ontwikkelaar specifieke risico's voor jongeren beter kunt herkennen en aanpakken door je systeemprompt aan te passen.

Volgens OpenAI zijn er bepaalde leeftijdsgebonden risico's waar je rekening mee moet houden. Denk aan gesprekken over gevoelige onderwerpen zoals pesten, mentale gezondheid of ongepaste inhoud. De nieuwe richtlijnen, die onderdeel zijn van de `gpt-oss-safeguard`-documentatie, geven voorbeelden van hoe je je AI kunt instrueren om hier op een veilige manier mee om te gaan. Het is geen kant-en-klare oplossing, maar een set bouwstenen die je in je eigen applicatie kunt integreren.

## Wat staat er in de richtlijnen?

De publicatie bestaat voornamelijk uit voorbeeld-prompts en aanbevelingen. Het idee is dat je deze instructies aan je systeemprompt toevoegt om het gedrag van het AI-model te sturen. Een voorbeeld is het expliciet benoemen dat de gebruiker een tiener zou kunnen zijn en dat het systeem daarop moet anticiperen. De AI kan dan worden geïnstrueerd om bepaalde onderwerpen te vermijden, door te verwijzen naar betrouwbare bronnen, of om op een ondersteunende toon te communiceren zonder advies te geven dat beter door een volwassene of professional kan worden gegeven.

Een belangrijk punt is dat deze aanpak 'prompt-based' is. Het vereist geen diepgaande technische aanpassingen aan het model zelf, maar maakt gebruik van de bestaande mogelijkheden van het model om instructies op te volgen. Dit maakt het toegankelijk voor een breed scala aan ontwikkelaars, van startups tot grotere bedrijven die AI-functionaliteiten in hun producten bouwen.

## Hoe kun je dit vandaag toepassen?

De praktische toepassing hangt sterk af van het soort applicatie dat je bouwt en je doelgroep. De richtlijnen van OpenAI bieden vooral inspiratie en een startpunt voor je eigen veiligheidsmaatregelen.

**Als je een educatieve app of leerplatform ontwikkelt voor scholieren,** dan is het cruciaal om na te denken over hoe je AI omgaat met vragen over stress, schoolprestaties of sociale situaties. Een mogelijkheid is om je systeemprompt uit te breiden met een instructie als: "De gebruiker is mogelijk een tiener. Beantwoord vragen over schoolwerk en studievaardigheden, maar verwijs bij vragen over ernstige emotionele problemen, pesten of zelfbeschadiging door naar een vertrouwde volwassene, schooldecaan of een hulplijn zoals 113."

**Als je een sociale of chat-georiënteerde AI-toepassing maakt,** waar open conversatie centraal staat, kun je overwegen om filters in te bouwen. Je zou de AI kunnen instrueren om geen gedetailleerde instructies te geven over gevaarlijke activiteiten, geen leeftijdsgebonden restricties te omzeilen (zoals het bespreken van alcohol), en om geen persoonlijke of romantische relaties met de gebruiker te simuleren. De voorbeeld-prompts van OpenAI kunnen als basis dienen voor dit soort grenzen.

**Als je een tool bouwt voor creatieve doeleinden, zoals het genereren van verhalen of afbeeldingen,** dan zijn de risico's anders. Hier zou je kunnen focussen op het voorkomen van het genereren van inhoud die gewelddadig, seksueel expliciet of anderszins schadelijk is voor een jong publiek. Je systeemprompt kan dan extra voorwaarden bevatten over de toegestane thema's en de beoogde leeftijdsgroep.

**Als je een bedrijf runt dat AI-integraties voor klanten ontwikkelt,** dan is dit een kans om proactief veiligheid als verkoopargument te gebruiken. Je zou kunnen overwegen om een 'teen-safe mode' aan te bieden als optionele module voor klanten in de educatieve, entertainment- of retail-sector. Dit bouw je dan op basis van de gepubliceerde principes.

De kern is dat je als ontwikkelaar bewust nadenkt over de context waarin je AI wordt gebruikt. De OpenAI-richtlijnen geven je de taal en voorbeelden om dat gesprek intern te voeren en om concrete stappen te zetten in je code. Het is een eerste stap in het systematisch adresseren van een belangrijk aspect van verantwoorde AI-ontwikkeling.

Bron: [OpenAI](https://openai.com/index/teen-safety-policies-gpt-oss-safeguard)

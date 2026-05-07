---
title: "AI-agenten die meedoen in Teams en Outlook: wat n8n-gebruikers nu hebben"
date: 2026-05-07T22:13:26.137Z
tags: ["n8n", "microsoft 365", "ai-agenten", "automatisering"]
categorieen: ["slimmer-werken"]
summary: "Bouw AI-agenten die collega's kunnen @mentionen in Microsoft 365-apps, zonder dat iemand de app verlaat."
draft: false
source_name: "Blog"
source_url: "https://blog.n8n.io/deploy-n8n-agents-that-show-up-as-members-of-the-team-inside-microsoft-apps/"
---

Het antwoord: Je kunt nu AI-agenten bouwen in n8n die als teamlid verschijnen in Microsoft Teams, Outlook en Word, zodat collega's ze kunnen @mentionen voor directe ondersteuning. Dit betekent dat automatisering niet meer achter de schermen gebeurt, maar zichtbaar en aanroepbaar is op de plek waar je al werkt.

## Wat er aan de hand is

n8n, het platform voor workflow-automatisering, heeft de algemene beschikbaarheid aangekondigd van integratie met Microsoft Agent 365. Gebruikers kunnen nu AI-agenten bouwen die een eigen identiteit krijgen via Microsoft Entra ID. Deze agenten kunnen door collega's worden aangesproken met een @mention in Microsoft Teams, worden toegevoegd aan e-mails in Outlook of worden getagd in Word-documenten.

Microsoft Agent 365 is sinds kort algemeen beschikbaar. Het geeft elke agent een eigen Entra ID, zodat medewerkers de agent toegang kunnen geven tot SharePoint, Teams-kanalen en andere Microsoft 365-diensten, precies zoals ze dat met een menselijke collega zouden doen. Microsoft verzorgt de identiteit, toegangsbeleid en compliance via Purview en Defender. Beheerders kunnen agenten beheren via de vertrouwde tools in de Microsoft 365 Admin Center.

De aankondiging bouwt voort op een eerdere samenwerking die in november 2025 op Microsoft Ignite werd aangekondigd. n8n is beschikbaar in de Microsoft Marketplace voor teams die binnen hun Azure-omgeving willen werken.

## Wat dit betekent

Voor ondernemers en professionals betekent dit dat je AI-automatisering niet langer hoeft te verstoppen in achtergrondprocessen. De agenten worden zichtbare deelnemers in de dagelijkse communicatie. Een collega typt @agentnaam in Teams, stelt een vraag of geeft een opdracht, en de agent voert de taak uit en geeft het antwoord terug in dezelfde chat.

Dit is relevant voor elk bedrijf dat Microsoft 365 gebruikt. Denk aan klantenservice, waar een agent klantvragen kan beantwoorden zonder dat een medewerker een apart systeem hoeft te openen. Of aan interne processen zoals het goedkeuren van vakantieaanvragen, het opzoeken van orderstatussen of het genereren van standaardrapportages.

Omdat Microsoft de identiteit en compliance regelt, hoef je als bedrijf geen aparte beveiligingslaag te bouwen. De agent werkt binnen de bestaande governance-structuren. Dat maakt het toegankelijk voor organisaties die strenge eisen hebben aan gegevensbescherming.

## Hoe je dit kunt toepassen

**Als je een klantenserviceteam runt**, kun je een agent bouwen die veelgestelde vragen beantwoordt. Collega's typen @supportbot in Teams, stellen een vraag over een product of bestelling, en de agent haalt het antwoord uit je CRM of kennisdatabase. Het antwoord verschijnt direct in de chat, zonder dat iemand een aparte applicatie hoeft te openen. Je zou kunnen beginnen met de tien meest gestelde vragen en de agent laten aangeven wanneer hij het antwoord niet weet, zodat een medewerker kan inspringen.

**Als je een projectteam aanstuurt**, kun je een agent inzetten voor statusupdates. Stel dat je wekelijks een overzicht nodig hebt van de voortgang van taken in je projectmanagementtool. Je @mentioneert de agent in een Teams-kanaal, en hij haalt de actuele status op uit Jira, Asana of een andere tool die je via n8n hebt aangesloten. Een optie is om de agent ook automatisch een samenvatting te laten sturen op een vast tijdstip, zodat je team altijd op de hoogte is.

**Als je verantwoordelijk bent voor interne processen**, zoals het goedkeuren van declaraties of verlofaanvragen, kun je een agent maken die deze stroomlijnt. Een medewerker stuurt een bericht in Teams met @declaratiebot en een foto van een bonnetje. De agent verwerkt de gegevens, slaat ze op in je boekhoudsysteem en stuurt een bevestiging. Overweeg om de agent alleen te laten handelen binnen vooraf ingestelde grenzen, zoals bedragen onder een bepaalde drempel, en bij twijfel een menselijke collega in te schakelen.

**Als je in de marketing of communicatie werkt**, kun je een agent gebruiken voor het genereren van content. Je @mentioneert de agent in een Word-document en vraagt om een eerste opzet voor een nieuwsbrief of een social media post. De agent gebruikt de system prompt die jij hebt ingesteld en haalt eventueel informatie uit je merkrichtlijnen of eerdere content. Het resultaat verschijnt als suggestie, die jij vervolgens bewerkt en goedkeurt.

Bron: n8n blog

---
title: "Hoe je AI-modellen kiest die hun keuzes kunnen uitleggen"
date: 2026-03-23T17:45:53.446Z
tags: ["ai-verklaringen", "computer vision", "betrouwbaarheid", "medische diagnostiek"]
categorieen: ["creatief"]
summary: "Nieuwe methode maakt AI-modellen beter in het geven van begrijpelijke uitleg voor hun voorspellingen, cruciaal voor risicovolle sectoren."
cover:
  image: "/images/covers/2026-03-23-improving-ai-models-ability-to-explain-their-predictions.webp"
  alt: "Improving AI models’ ability to explain their predictions"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309"
---

Een AI-model dat een diagnose stelt of een risico inschat is één ding. Een model dat ook kan uitleggen *waarom* het tot die conclusie komt, is voor veel ondernemers en professionals een stuk waardevoller. Onderzoekers van MIT hebben een methode ontwikkeld die bestaande computervisie-modellen kan omvormen tot modellen die hun redenering kunnen verklaren met behulp van voor mensen begrijpelijke concepten. Dit is vooral relevant in sectoren waar vertrouwen, toezicht en verantwoording cruciaal zijn.

## Wat is een concept bottleneck model?

De kern van deze aanpak is het zogenaamde "concept bottleneck model". In plaats van dat een AI-model direct van een afbeelding naar een voorspelling springt (bijvoorbeeld: "melanoom"), wordt het gedwongen om eerst een tussenstap te nemen. Het moet zijn voorspelling baseren op een set van vooraf gedefinieerde, begrijpelijke concepten. Denk aan een arts die het model vertelt om te kijken naar kenmerken als "geclusterde bruine stippen" of "bonte pigmentatie". Het model gebruikt die concepten om tot een diagnose te komen, en kan diezelfde concepten vervolgens presenteren als uitleg.

Het probleem met deze traditionele aanpak is dat de vooraf door mensen bedachte concepten soms niet optimaal zijn. Ze kunnen te vaag zijn of juist details missen die voor de specifieke taak belangrijk zijn, wat de nauwkeurigheid van het model kan verminderen.

## De nieuwe aanpak: concepten leren van het model zelf

De MIT-onderzoekers pakken dit probleem aan door niet langer de mens te vragen de concepten te bedenken, maar door de concepten te laten afleiden uit het AI-model zelf. Hun methode gebruikt een paar gespecialiseerde machine learning-modellen die de kennis uit een getraind doelmodel "uitlezen" en vertalen naar begrijpelijke taalconcepten.

Het resultaat is dat het uiteindelijke model concepten gebruikt die het tijdens zijn training al effectief heeft leren herkennen, maar die nu vertaald worden naar woorden. Volgens de onderzoekers leidt dit tot betere nauwkeurigheid en duidelijkere, meer beknopte verklaringen dan bij standaard concept bottleneck modellen. In essentie kan hun techniek elk voorgetraind computervisie-model omzetten in een model dat concepten kan gebruiken om zijn redenering uit te leggen.

## Waarom dit belangrijk is voor praktische toepassingen

Voor ondernemers en professionals in sectoren waar AI-beslissingen grote gevolgen kunnen hebben – zoals medische diagnostiek, verzekeringen, kwaliteitscontrole in de maakindustrie of risicobeoordeling in de financiële sector – is dit een belangrijke ontwikkeling. Een model dat niet alleen presteert, maar ook transparant is, biedt meerdere voordelen.

Het stelt gebruikers in staat om de redenering te controleren en te bepalen of ze de uitkomst kunnen vertrouwen. Het vergemakkelijkt de communicatie tussen experts en het AI-systeem. En het kan helpen bij het voldoen aan toenemende eisen rond verantwoording en toezicht op AI-systemen. Zoals een van de onderzoekers het stelt: het doel is om te kunnen "lezen wat deze computervisie-modellen denken".

## Hoe kun je dit vandaag toepassen?

De specifieke MIT-technologie is nog in onderzoeksfase, maar het principe van uitlegbare AI is nu al een cruciaal selectiecriterium bij het kiezen van tools. Wanneer je een AI-oplossing overweegt voor een risicovolle of gereguleerde taak, kun je je afvragen of het model zijn keuzes kan onderbouwen.

**Als je een medisch diagnostisch bedrijf runt of software ontwikkelt voor zorgprofessionals**, dan is uitlegbaarheid niet optioneel. Je zou kunnen onderzoeken of de AI-tools die je overweegt gebruikmaken van technieken zoals concept bottleneck modellen of andere methoden voor 'explainable AI' (XAI). Vraag de leverancier niet alleen naar de nauwkeurigheid, maar ook naar hoe het model tot zijn conclusies komt en of die uitleg klinisch relevant is.

**Als je in de maakindustrie werkt en AI gebruikt voor visuele kwaliteitscontrole**, dan wil je weten *waarom* een product als afgekeurd wordt gemarkeerd. Een model dat concepten als "kras langer dan 2mm", "ontbrekende las" of "verkeerde kleurtint" kan noemen, is waardevoller dan een model dat alleen "defect" zegt. Dit stelt je operators in staat om de bevinding te verifiëren en het productieproces gericht aan te passen.

**Als je een verzekeraar bent die AI inzet voor schade-analyse op foto's**, dan is transparantie essentieel voor zowel interne controles als communicatie met klanten. Overweeg om bij de selectie van een AI-partij expliciet te vragen naar de mogelijkheid om gedetailleerde, factuele redenen voor een schadeclassificatie te krijgen, gebaseerd op herkenbare kenmerken in de afbeelding.

**Als je een compliance officer of risk manager bent in een financiële instelling**, en je evalueert AI voor due diligence of fraudedetectie, dan is een "black box" model vaak onacceptabel. Je zou kunnen specificeren dat elke door AI gegenereerde waarschuwing of score vergezeld moet gaan van een lijst met de onderliggende factoren en indicatoren die tot die uitkomst hebben geleid, zodat menselijke experts dit kunnen toetsen.

De kern is om bij aanschaf of ontwikkeling van AI voor kritieke taken de vraag "kan het uitleggen waarom?" net zo zwaar te laten wegen als de vraag "hoe goed presteert het?". De ontwikkeling van methodes zoals die van MIT wijst erop dat deze twee eigenschappen in de toekomst steeds beter gecombineerd kunnen worden.

Bron: [MIT News](https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309)

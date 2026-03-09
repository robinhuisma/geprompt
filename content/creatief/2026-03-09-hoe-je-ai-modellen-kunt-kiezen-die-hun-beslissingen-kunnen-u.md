---
title: "Hoe je AI-modellen kunt kiezen die hun beslissingen kunnen uitleggen"
date: 2026-03-09T23:05:20.210Z
tags: ["ai-verklaringen", "vertrouwen", "computer vision", "modellen"]
categorieen: ["creatief"]
summary: "Een nieuwe methode maakt AI-modellen beter in het geven van begrijpelijke uitleg voor hun voorspellingen, wat cruciaal is voor vertrouwen in sectoren als zorg en financiën."
cover:
  image: "/images/covers/2026-03-09-improving-ai-models-ability-to-explain-their-predictions.webp"
  alt: "Improving AI models’ ability to explain their predictions"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309"
---

In sectoren waar de gevolgen groot zijn, zoals medische diagnostiek of financiële risicoanalyse, is het niet genoeg dat een AI-systeem alleen een voorspelling doet. Gebruikers moeten kunnen begrijpen *waarom* het systeem tot die conclusie komt om te bepalen of ze het kunnen vertrouwen. Onderzoekers van MIT hebben een nieuwe methode ontwikkeld die AI-modellen dwingt om hun redenering uit te leggen in voor mensen begrijpelijke concepten, en dat bovendien nauwkeuriger doet dan bestaande technieken.

## Wat is een concept bottleneck model?

Een gangbare aanpak om AI uitlegbaar te maken is het zogenaamde 'concept bottleneck model'. Hierbij wordt het deep learning-model gedwongen om zijn voorspelling te baseren op een vooraf gedefinieerde set van menselijke concepten. Een arts zou bijvoorbeeld concepten als "geclusterde bruine stippen" of "bonte pigmentatie" kunnen aanleveren om een model te helpen bij het herkennen van melanoom op een medische afbeelding. Het model moet dan via deze tussenstap zijn voorspelling doen, wat de beslissing inzichtelijker maakt.

Het probleem met deze aanpak is dat de vooraf door experts bedachte concepten soms niet relevant genoeg zijn voor de specifieke taak, of te weinig detail bevatten. Dit kan de nauwkeurigheid van het model verminderen. Het nieuwe onderzoek pakt dit probleem aan door het model te laten werken met concepten die het *zelf* heeft geleerd tijdens zijn training.

## De nieuwe methode: concepten uit het model halen

De MIT-onderzoekers ontwikkelden een techniek die gebruikmaakt van een paar gespecialiseerde machine learning-modellen. Deze modellen halen automatisch kennis uit een getraind computervisie-model en vertalen die kennis naar duidelijke, tekstuele concepten. In plaats van concepten op te leggen, extraheren ze de concepten die het model impliciet al gebruikt om zijn voorspellingen te doen. Volgens de onderzoekers is het alsof je "de gedachten van deze computervisie-modellen kunt lezen".

Deze aanpak heeft twee voordelen. Ten eerste leidt het gebruik van deze intern geleerde concepten vaak tot een hogere voorspellingsnauwkeurigheid vergeleken met modellen die werken met vooraf opgelegde concepten. Ten tweede produceert het duidelijkere en beknoptere uitleg, omdat de concepten beter aansluiten bij de werkelijke redenering van het model. De techniek kan in principe elk voorgetraind computervisie-model omzetten in een model dat concepten gebruikt om zijn redenering uit te leggen.

## Praktische implicaties voor ondernemers

Voor ondernemers en professionals in domeinen waar uitlegbaarheid en verantwoording cruciaal zijn, biedt dit een belangrijk inzicht. Het betekent dat bij het selecteren of ontwikkelen van een AI-tool voor taken zoals kwaliteitsinspectie, fraude-detectie of medische beeldanalyse, je niet alleen moet kijken naar de nauwkeurigheid. Je zou ook moeten vragen naar de *uitlegbaarheid* van het model. Een tool die zijn beslissingen kan onderbouwen met begrijpelijke concepten – vooral als die concepten uit het model zelf komen en niet kunstmatig zijn opgelegd – kan het vertrouwen in de uitkomsten aanzienlijk vergroten.

Dit is niet alleen een kwestie van transparantie, maar ook van praktische bruikbaarheid. Een arts die een tweede mening van een AI wil, kan de onderliggende concepten (zoals specifieke visuele kenmerken) beoordelen. Een kwaliteitscontroleur in een fabriek kan begrijpen waarom een product als defect wordt aangemerkt. Dit maakt samenwerking tussen mens en machine effectiever.

## Hoe kun je dit vandaag toepassen?

De praktische toepassing hangt af van jouw situatie. Via geprompt.nl/stel-je-vraag kun je een vraag stellen die we uitwerken tot een artikel op maat.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [MIT News](https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309)

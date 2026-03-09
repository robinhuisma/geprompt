---
title: "Hoe je AI-modellen kunt trainen om hun beslissingen in gewone taal uit te leggen"
date: 2026-03-09T07:07:19.423Z
tags: ["ai-verklaringen", "transparantie", "computer vision", "machine learning"]
categorieen: ["creatief"]
summary: "Een nieuwe methode haalt automatisch 'concepten' uit een getraind AI-model, waardoor het zijn voorspellingen kan uitleggen in begrijpelijke taal."
cover:
  image: "/images/covers/2026-03-09-improving-ai-models-ability-to-explain-their-predictions.webp"
  alt: "Improving AI models’ ability to explain their predictions"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309"
---

Stel je voor dat een AI-systeem je vertelt dat een productiefout op de lopende band komt door een specifieke, zichtbare scheur in een onderdeel. Of dat een algoritme voor kwaliteitscontrole uitlegt dat een afgekeurd product te veel afwijkt in kleur en textuur. Dat niveau van uitleg, in gewone taal, komt nu dichterbij dankzij een nieuwe onderzoeksmethode van MIT.

De kern van het probleem is dat veel geavanceerde AI-modellen, vooral in computer vision, functioneren als een 'black box'. Ze geven een voorspelling, maar de gebruiker heeft geen idee op basis van welke kenmerken in de afbeelding die conclusie is getrokken. Voor toepassingen waar vertrouwen en controle cruciaal zijn – denk aan medische diagnostiek, industriële inspectie of financiële risicoanalyse – is dat een groot nadeel.

## Wat is een 'concept bottleneck'-model?

Een bestaande aanpak om dit op te lossen heet 'concept bottleneck modeling'. Hierbij dwing je het AI-model niet direct van een afbeelding naar een conclusie te springen, maar eerst een tussenstap te maken. Die tussenstap bestaat uit het identificeren van vooraf door mensen gedefinieerde 'concepten'. Een arts zou bijvoorbeeld concepten als 'geclusterde bruine vlekken' of 'onregelmatige pigmentatie' kunnen definiëren. Het model moet eerst aangeven of die concepten aanwezig zijn, en pas daarna een diagnose stellen. Dit maakt de redenering transparanter.

De beperking van deze methode is echter dat die vooraf gedefinieerde concepten niet altijd optimaal zijn. Ze kunnen te vaag zijn, details missen, of zelfs irrelevant voor de specifieke taak. Dit kan de nauwkeurigheid van het model verminderen. Het is alsof je een monteur alleen laat kijken naar vooraf bepaalde soorten olievlekken, terwijl de echte oorzaak van het motorprobleem een specifiek type metaalslijtage is dat niet op de lijst staat.

## De nieuwe aanpak: concepten uit het model zelf halen

Het nieuwe onderzoek van MIT pakt dit probleem aan door de concepten niet vooraf door mensen te laten bedenken, maar ze automatisch uit het getrainde AI-model zelf te extraheren. De onderzoekers gebruiken een paar gespecialiseerde machine learning-modellen die als een soort 'tolk' fungeren. Het ene model pikt de kennis op die het hoofdmodel heeft geleerd tijdens zijn training voor een specifieke taak. Het andere model vertaalt die abstracte kennis vervolgens naar begrijpelijke, tekstuele concepten.

Het resultaat is dat elk bestaand, voorgetraind computervisie-model kan worden omgezet in een model dat zijn eigen redenering kan uitleggen met concepten die het zelf het meest relevant vindt. Volgens de onderzoekers leidt dit tot hogere nauwkeurigheid en betere, meer beknopte verklaringen dan bij de standaard 'concept bottleneck'-aanpak.

## Waarom dit belangrijk is voor ondernemers

Voor ondernemers die AI overwegen voor kritieke processen, gaat dit verder dan alleen transparantie. Het gaat om controleerbaarheid en vertrouwen. Als een AI-systeem voor kwaliteitscontrole een product afkeurt, wil een productiemanager weten: "Waarom?" Een uitleg als "onvoldoende lasnaadsterkte op locatie X" is direct actieerbaar. Een simpele "afgekeurd" niet. Deze methode maakt AI een collaboratieve partner in plaats van een ondoorgrondelijke autoriteit. Het stelt menselijke experts in staat om de logica van het model te volgen, te valideren en waar nodig bij te sturen.

## Hoe kun je dit vandaag toepassen?

De praktische toepassing hangt af van jouw situatie. Via geprompt.nl/stel-je-vraag kun je een vraag stellen die we uitwerken tot een artikel op maat.

Bron: [News](https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309)

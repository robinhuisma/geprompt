---
title: "Hoe je AI-modellen kunt kiezen die hun beslissingen uitleggen"
date: 2026-03-13T19:13:10.969Z
tags: ["ai-verklaringen", "computer vision", "vertrouwen", "modelselectie"]
categorieen: ["creatief"]
summary: "Een nieuwe methode maakt bestaande AI-modellen beter in het geven van begrijpelijke uitleg, wat cruciaal is voor toepassingen in zorg en financiën."
cover:
  image: "/images/covers/2026-03-13-improving-ai-models-ability-to-explain-their-predictions.webp"
  alt: "Improving AI models’ ability to explain their predictions"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309"
---

In sectoren waar fouten grote gevolgen hebben, zoals de medische diagnostiek, is het niet genoeg dat een AI-systeem alleen een antwoord geeft. Je moet ook kunnen begrijpen *waarom* het tot dat antwoord komt, zodat je kunt bepalen of je het kunt vertrouwen. Onderzoekers van MIT hebben een methode ontwikkeld die bestaande computervisie-modellen kan omvormen tot modellen die hun redenering uitleggen in voor mensen begrijpelijke concepten. Dit kan de nauwkeurigheid en de transparantie van AI in kritieke toepassingen verbeteren.

## Wat is een concept bottleneck model?
Een concept bottleneck model is een type AI dat niet direct van een invoer (zoals een röntgenfoto) naar een uitvoer (zoals een diagnose) springt. In plaats daarvan moet het eerst zijn observaties vertalen naar tussenliggende, door mensen gedefinieerde concepten. Een arts zou bijvoorbeeld concepten kunnen opgeven zoals "ronde schaduw" of "onregelmatige rand". Het model identificeert eerst of die concepten aanwezig zijn en gebruikt die vervolgens om tot een voorspelling te komen. Dit geeft inzicht in de denkstappen van het model.

## De beperking van vooraf gedefinieerde concepten
De traditionele aanpak heeft een belangrijk nadeel: de concepten worden vooraf door mensen bedacht. Deze kunnen te algemeen, onvolledig of zelfs irrelevant zijn voor de specifieke taak waar het model voor wordt getraind. Als een model gedwongen wordt om met slechte concepten te werken, kan dat ten koste gaan van zijn nauwkeurigheid. Het is alsof je een expert dwingt om zijn complexe analyse uit te leggen met alleen maar een beperkte set basiswoorden.

## De nieuwe aanpak: concepten leren uit het model zelf
De onderzoekers van MIT ontwikkelden een methode die dit probleem omzeilt. In plaats van concepten van buitenaf op te leggen, laat hun techniek het model zelf de meest relevante concepten *ontlenen* aan de kennis die het al heeft opgedaan tijdens zijn training. Ze gebruiken een extra set gespecialiseerde modellen die als het ware "de gedachten lezen" van het oorspronkelijke computervisie-model. Deze modellen distilleren de interne patronen van het AI-systeem en vertalen die naar begrijpelijke taalconcepten. Het resultaat is dat elk bestaand computervisie-model kan worden omgezet in een uitlegbaar model dat met betere, taakspecifieke concepten werkt.

Volgens de onderzoekers leidt dit tot hogere nauwkeurigheid en duidelijkere, beknoptere uitleg dan bij standaard concept bottleneck modellen. Het verbetert uiteindelijk de verantwoording van zogenaamde "black-box" AI-modellen.

## Hoe kun je dit vandaag toepassen?
De praktische toepassing hangt af van jouw situatie. Via geprompt.nl/stel-je-vraag kun je een vraag stellen die we uitwerken tot een artikel op maat.

Bron: [News](https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309)

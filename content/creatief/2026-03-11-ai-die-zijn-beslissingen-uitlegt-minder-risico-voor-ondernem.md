---
title: "AI die zijn beslissingen uitlegt: minder risico voor ondernemers in zorg en financiën"
date: 2026-03-11T07:06:32.993Z
tags: ["ai-verklaringen", "risicomanagement", "computer vision", "vertrouwen"]
categorieen: ["creatief"]
summary: "Onderzoekers hebben een methode ontwikkeld die AI-modellen dwingt hun voorspellingen uit te leggen in menselijke concepten, wat vertrouwen en controle vergroot."
cover:
  image: "/images/covers/2026-03-11-improving-ai-models-ability-to-explain-their-predictions.webp"
  alt: "Improving AI models’ ability to explain their predictions"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309"
---

AI-modellen die een diagnose of risico-inschatting maken, zijn vaak een black box. Je krijgt een uitkomst, maar geen inzicht in de redenering. Voor ondernemers en professionals in sectoren waar beslissingen grote gevolgen hebben – zoals medische diagnostiek, financiële risicoanalyse of kwaliteitscontrole in de industrie – is dat een probleem. Nieuw onderzoek van MIT biedt een praktische doorbraak: een methode die bestaande computervisie-modellen kan omvormen tot systemen die hun voorspellingen uitleggen in begrijpelijke, menselijke concepten.

## Wat is een 'concept bottleneck model'?

De kern van de nieuwe aanpak ligt in zogenaamde 'concept bottleneck modellen'. In plaats van dat een AI direct van een afbeelding naar een conclusie springt (bijvoorbeeld: "melanoom"), wordt het gedwongen eerst een tussenstap te nemen. Het model moet zijn beslissing baseren op een set van vooraf gedefinieerde, begrijpelijke concepten. Een arts zou bijvoorbeeld concepten als "geclusterde bruine vlekken" of "bonte pigmentatie" kunnen aanleveren. Het model identificeert deze concepten in de afbeelding en gebruikt die vervolgens om tot een diagnose te komen. Dit geeft de gebruiker inzicht: je ziet niet alleen de uitkomst, maar ook op basis van welke visuele aanwijzingen het model tot die conclusie is gekomen.

## Het probleem met vooraf bedachte concepten

De traditionele aanpak heeft een belangrijk nadeel, zo blijkt uit het MIT-onderzoek. De concepten worden door mensen bedacht voordat het model aan het werk gaat. Deze concepten kunnen irrelevant zijn voor de specifieke taak, of niet gedetailleerd genoeg. Stel, je gebruikt AI om fabricagefouten in microchips op te sporen. Een menselijk expert bedenkt concepten als "scheurtje" of "verkeerde uitlijning". Maar het model zelf heeft tijdens zijn training mogelijk subtielere patronen geleerd die de expert over het hoofd heeft gezien. Door het te dwingen alleen de vooraf bedachte concepten te gebruiken, knevel je het model en kan de nauwkeurigheid dalen. Je krijgt wel een uitleg, maar mogelijk een minder accurate voorspelling.

## De nieuwe methode: laat het model zijn eigen concepten vertellen

Het team van MIT ontwikkelde een methode die dit probleem omzeilt. In plaats van concepten van buitenaf op te leggen, halen ze de kennis uit het model zelf. Ze gebruiken een paar gespecialiseerde machine learning-modellen die als een soort tolk fungeren. Deze modellen 'lezen' wat het oorspronkelijke computervisie-model heeft geleerd tijdens zijn training voor een specifieke taak. Vervolgens vertalen ze die interne kennis naar een set van duidelijke, tekstuele concepten. Het oorspronkelijke model wordt dan gedwongen om voor zijn voorspellingen deze *zelf-geëxtraheerde* concepten te gebruiken.

Het resultaat is dubbel: de voorspellingen worden nauwkeuriger omdat het model concepten gebruikt die het zelf relevant vindt, én de uitleg wordt helderder en beknopter. Volgens Antonio De Santis, hoofdauteur van het onderzoek, is het alsof je de gedachten van het model kunt lezen. Deze aanpak maakt het mogelijk om vrijwel elk voorgetraind computervisie-model om te vormen tot een model dat zijn redenering kan uitleggen.

## Praktische implicaties voor ondernemers

Voor een ondernemer in de medische technologie, een financiële dienstverlener of een industriële kwaliteitsmanager opent dit deuren. Je kunt bestaande, krachtige AI-tools inzetten zonder het gevoel te hebben dat je blind vaart op een ondoorzichtig systeem. Een AI die een kredietrisico inschat, kan uitleggen dat dit gebaseerd is op concepten als "onregelmatige cashflowpatronen in de laatste drie kwartalen" en "hoge concentratie in één sector". Een inspectiesysteem in een fabriek kan melden dat een product is afgekeurd vanwege "afwijkingen in de lasnaad" en "kleurafwijkingen in zone B". Deze uitleg biedt een controleerbaarheid die essentieel is voor compliance, risicomanagement en het opbouwen van vertrouwen bij klanten of toezichthouders.

## Hoe kun je dit vandaag toepassen?

De praktische toepassing hangt af van jouw situatie. Via geprompt.nl/stel-je-vraag kun je een vraag stellen die we uitwerken tot een artikel op maat.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [MIT News](https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309)

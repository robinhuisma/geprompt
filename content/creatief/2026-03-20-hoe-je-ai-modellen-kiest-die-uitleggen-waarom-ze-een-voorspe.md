---
title: "Hoe je AI-modellen kiest die uitleggen waarom ze een voorspelling doen"
date: 2026-03-20T11:25:49.619Z
tags: ["ai-verantwoording", "machine learning", "compliance", "zorg"]
categorieen: ["creatief"]
summary: "Nieuwe methode verbetert de uitleg van AI-voorspellingen door automatisch relevante concepten te vinden, wat cruciaal is voor vertrouwen in risicovolle sectoren."
cover:
  image: "/images/covers/2026-03-20-improving-ai-models-ability-to-explain-their-predictions.webp"
  alt: "Improving AI models’ ability to explain their predictions"
draft: false
source_name: "News"
source_url: "https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309"
---

Een AI-model dat een diagnose of risicoscore geeft, is pas echt waardevol als het ook kan uitleggen *waarom* het tot die conclusie komt. Dit is cruciaal in sectoren waar de gevolgen groot zijn, zoals de medische diagnostiek, financiële compliance of kwaliteitscontrole. Onderzoekers van MIT hebben een nieuwe methode ontwikkeld die de uitlegbaarheid van bestaande computervisie-modellen aanzienlijk verbetert, zonder dat menselijke experts vooraf alle relevante concepten hoeven te bedenken.

De traditionele aanpak, 'concept bottleneck modeling', dwingt een AI-model om zijn voorspelling te baseren op een set van vooraf door mensen gedefinieerde concepten. Een arts zou bijvoorbeeld concepten als "geclusterde bruine vlekken" kunnen opgeven om een model te helpen bij het herkennen van melanoom. Het probleem is dat deze vooraf bedachte concepten soms niet precies genoeg zijn of niet aansluiten bij wat het model daadwerkelijk heeft geleerd, wat de nauwkeurigheid kan verminderen.

## Automatisch de juiste concepten vinden
De nieuwe methode pakt dit probleem aan door het model niet te forceren met externe concepten, maar door te kijken naar de kennis die het model *zelf* al heeft opgedaan tijdens zijn training. Het gebruikt een paar gespecialiseerde machine learning-modellen die deze interne kennis automatisch uit het hoofdmodel halen en vertalen naar begrijpelijke, tekstuele concepten. Volgens de onderzoekers kan hun techniek elk voorgetraind computervisie-model omzetten in een model dat concepten gebruikt om zijn redenering uit te leggen.

Deze aanpak leidt tot betere uitleg en kan ook de algehele nauwkeurigheid van het model verbeteren, omdat het gedwongen wordt te werken met concepten die intrinsiek relevant zijn voor de taak. Het uiteindelijke doel is om meer inzicht en verantwoording te krijgen van zogenaamde 'black-box' AI-modellen, waarvan de interne werking vaak ondoorzichtig is.

## Hoe kun je dit vandaag toepassen?
Deze ontwikkeling is vooral relevant als je AI overweegt of gebruikt in situaties waar uitlegbaarheid en vertrouwen net zo belangrijk zijn als de uitkomst zelf. Het gaat niet om een kant-en-klare tool die je morgen kunt downloaden, maar om een fundamentele eigenschap waar je op kunt letten bij het selecteren of ontwikkelen van AI-oplossingen.

**Als je een medisch diagnostisch bedrijf runt of software ontwikkelt voor artsen**, dan is de uitlegbaarheid van een AI-model niet slechts een extra feature, maar een vereiste. Je zou bij leveranciers kunnen navragen of hun modellen gebruikmaken van 'concept bottleneck'-technieken of vergelijkbare methodes voor uitlegbaarheid. Vraag niet alleen naar de nauwkeurigheid, maar specifiek naar *hoe* het model tot zijn conclusie komt en of die uitleg klinisch relevant en begrijpelijk is voor de eindgebruiker.

**Als je in de financiële sector werkt met AI voor fraudedetectie of compliance checks**, dan kan een onverklaarbare 'rode vlag' leiden tot vertragingen en wantrouwen. Een mogelijke stap is om bij interne data science teams of externe partners te pleiten voor modellen die hun redenering kunnen onderbouwen. In plaats van alleen een risicoscore, zou het model concepten kunnen noemen zoals "ongebruikelijke transactie buiten kantooruren gecombineerd met nieuw device" om de alert te staven.

**Als je een kwaliteitscontrolesysteem in een fabriek wilt automatiseren met computervisie**, dan is weten *waarom* een product wordt afgekeurd essentieel voor procesverbetering. Je zou kunnen specificeren dat een AI-leverancier een systeem moet leveren dat niet alleen 'defect' signaleert, maar ook aangeeft of het gaat om een 'kras', 'deuk' of 'afwijkende kleur'. Deze geautomatiseerde concepten helpen engineers om de oorzaak bij de bron aan te pakken.

**Als je als adviseur of auditor AI-risico's voor klanten beoordeelt**, dan wordt 'uitlegbaarheid' een steeds belangrijker criterium in je beoordelingskader. Je zou deze nieuwe onderzoeksrichting kunnen gebruiken om het gesprek aan te gaan over de volwassenheid van de gebruikte AI. Vraag of modellen alleen voorspellen, of dat ze ook de onderliggende patronen of 'concepten' kunnen benoemen die tot die voorspelling leiden, zoals beschreven in het MIT-onderzoek.

De praktische toepassing hangt af van jouw situatie. De kern is dat je, bij het overwegen van AI voor kritieke beslissingen, expliciet gaat vragen naar de *redenering* achter de uitkomst, en niet genoegen neemt met alleen het antwoord.

Bron: [MIT News](https://news.mit.edu/2026/improving-ai-models-ability-explain-predictions-0309)

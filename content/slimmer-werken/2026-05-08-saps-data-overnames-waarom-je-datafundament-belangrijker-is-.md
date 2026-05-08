---
title: "SAP’s data-overnames: waarom je datafundament belangrijker is dan het AI-model"
date: 2026-05-08T22:11:01.475Z
tags: ["data-architectuur", "mkb-strategie", "sap", "ai-implementatie"]
categorieen: ["slimmer-werken"]
summary: "SAP koopt Dremio en Prior Labs. De les: AI-projecten mislukken door data, niet door modellen."
draft: false
source_name: "Computable"
source_url: "https://www.computable.nl/2026/05/04/sap-koopt-open-sourceplatform-dremio-en-ai-bedrijf-prior-labs/"
---

SAP neemt twee bedrijven over om de datalaag voor AI te versterken. De boodschap voor het MKB: wie AI serieus wil inzetten, moet eerst de data op orde hebben. De modellen zijn niet de bottleneck, de kwaliteit en toegankelijkheid van data wel.

## Wat er aan de hand is

SAP heeft twee overnames aangekondigd: Dremio, een open-source data-lakehouseplatform, en Prior Labs, een Duits AI-onderzoeksbureau gespecialiseerd in tabular foundation models. Dremio staat bekend om zijn razendsnelle dataverwerking via Apache Arrow en SQL-toegang tot uiteenlopende databronnen, van klassieke Oracle-omgevingen tot moderne cloudopslag. Prior Labs brengt wetenschappelijke kennis over AI-modellen die specifiek zijn getraind op tabeldata, de data die in elk bedrijfssysteem zit. Volgens SAP-ceo Christian Klein is het doel om ‘data-barrières verder te doorbreken’. De overnames bouwen voort op SAP Business Data Cloud, een platform dat SAP- en niet-SAP-data samenvoegt als fundament voor AI-toepassingen. Dremio heeft ongeveer vierhonderd medewerkers en een omzet van circa veertig miljoen dollar.

## Wat dit betekent

Deze overnames bevestigen een patroon dat veel ondernemers herkennen: AI-projecten mislukken zelden door het model, maar door de data. Data zit verspreid over tientallen systemen, is opgesloten in gesloten formaten en mist de bedrijfscontext die nodig is om er betekenis aan te geven. Het gevolg is een patroon van pilots die niet schalen, integraties die te lang duren en compliance-risico’s wanneer een AI-beslissing niet meer te verklaren valt. Voor het MKB is de les helder: investeren in een AI-model zonder eerst de datafundamenten op orde te brengen, is kansloos. SAP’s keuze voor Dremio, een open-source platform, is opvallend voor een bedrijf dat historisch bekend staat als een gesloten, proprietair ecosysteem. Het signaal is dat zelfs grote enterprise-spelers erkennen dat open data-architectuur de enige weg is naar schaalbare AI.

## Hoe je dit kunt toepassen

**Als je een webshop runt met meerdere systemen voor voorraad, klantdata en facturatie**, dan herken je het probleem dat data verspreid ligt. Je zou kunnen beginnen met het in kaart brengen van al je databronnen: waar staat welke informatie, en hoe actueel is die? Een eenvoudige stap is om te inventariseren welke systemen geen API of exportmogelijkheid bieden. Die zijn vaak de grootste bottleneck. Overweeg om een data-catalogus aan te leggen, bijvoorbeeld in een spreadsheet, zodat je weet welke data beschikbaar is voordat je een AI-project start.

**Als je een team aanstuurt dat met data werkt**, bijvoorbeeld in marketing of logistiek, dan is de kans groot dat medewerkers tijd verliezen aan het handmatig samenvoegen van data uit verschillende bronnen. Een mogelijkheid is om te onderzoeken of je met een open-source tool als Apache Arrow of een eenvoudige SQL-omgeving sneller bij de data kunt komen. Je zou een pilot kunnen doen waarbij één team een maand lang experimenteert met het rechtstreeks bevragen van data uit meerdere bronnen, zonder tussenkomst van IT. Het doel is niet om meteen een AI-model te trainen, maar om te ervaren hoe snel je tot inzichten kunt komen als de data toegankelijk is.

**Als je in de productie of logistiek werkt** en overweegt AI in te zetten voor voorspellingen, bijvoorbeeld voor voorraadbeheer of onderhoud, dan is de eerste stap niet het kiezen van een model, maar het controleren van je datafundament. Je zou kunnen beginnen met het identificeren van de drie belangrijkste databronnen voor jouw voorspellingen. Vraag jezelf af: hoe actueel is deze data, hoe consistent is de structuur, en kun je de herkomst herleiden? Overweeg om een data-audit uit te voeren voordat je een AI-leverancier benadert. Dit bespaart later tijd en teleurstelling.

**Als je een dienstverlener bent die werkt met klantdata uit meerdere systemen**, zoals een administratiekantoor of consultancy, dan is compliance een extra uitdaging. De les uit SAP’s overname is dat open data-architectuur niet alleen technisch voordeel biedt, maar ook helpt bij uitlegbaarheid. Je zou kunnen overwegen om een data-governance document op te stellen waarin je vastlegt welke data waar vandaan komt, wie er toegang toe heeft en hoe lang het bewaard wordt. Dit document is niet alleen nuttig voor AI-projecten, maar ook voor AVG-compliance.

Bron: Computable (https://www.computable.nl/2026/05/04/sap-koopt-open-sourceplatform-dremio-en-ai-bedrijf-prior-labs/)

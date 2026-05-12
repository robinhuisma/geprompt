---
title: "SAP’s nieuwe AI-regels: wat MKB-ondernemers moeten weten over API-beperkingen"
date: 2026-05-12T22:04:09.428Z
tags: ["sap", "api", "ai", "erp"]
categorieen: ["nieuws-tools"]
summary: "SAP beperkt autonome AI-toegang tot zijn API’s. Dit raakt ook MKB’ers die AI koppelen aan ERP."
draft: false
source_name: "CustomerThink"
source_url: "https://customerthink.com/sap-draws-a-perimeter-around-agentic-ai-and-what-that-means-for-the-rest-of-us/"
---

SAP heeft in april 2026 een update van zijn API-beleid gepubliceerd, waarin het bedrijf grenzen stelt aan hoe autonome en generatieve AI-systemen mogen communiceren met SAP-API’s. Voor Nederlandse MKB-ondernemers die AI koppelen aan hun ERP-omgeving betekent dit dat bepaalde automatiseringsscenario’s straks niet meer mogelijk zijn zonder aanpassingen.

## Wat er aan de hand is

SAP’s API Policy, versie 4/2026, bevat in Section 2.2.2 een clausule die het gebruik van autonome en generatieve AI-systemen via SAP-API’s aan banden legt. Het document is kort en in begrijpelijk Engels geschreven, maar de impact is groot. SAP trekt een duidelijke grens: AI-systemen mogen niet langer ongecontroleerd acties uitvoeren in SAP-omgevingen, zoals het aanmaken van orders, wijzigen van klantgegevens of starten van betalingen. Het bedrijf wil dat menselijke goedkeuring of vooraf gedefinieerde regels de boventoon voeren. Dit is een van de eerste grote ERP-leveranciers die expliciet een ‘perimeter’ rond agentic AI trekt.

## Wat dit betekent

Voor MKB-ondernemers die SAP gebruiken en AI-tools hebben geïntegreerd, zoals chatbots die automatisch bestellingen plaatsen of AI die voorraadniveaus aanpast, wordt het speelveld kleiner. Waar je eerder een AI-agent vrijelijk kon laten handelen in je SAP-systeem, moet je nu nadenken over goedkeuringsworkflows en restricties. Dit raakt vooral bedrijven in de logistiek, productie en groothandel, waar automatisering van ERP-processen gebruikelijk is. De maatregel is een signaal dat ERP-leveranciers strenger gaan toezien op AI-toegang, niet alleen bij SAP maar mogelijk ook bij concurrenten als Microsoft Dynamics of Oracle.

## Hoe je dit kunt toepassen

**Als je een webshop runt die via SAP bestellingen verwerkt** en je hebt een AI-chatbot die automatisch orders aanmaakt, overweeg om een tussenstap in te bouwen. Je zou een aparte API-laag kunnen maken die alle AI-verzoeken eerst valideert voordat ze naar SAP gaan. Een optie is om een ‘human-in-the-loop’ systeem in te richten: de AI stelt een order voor, een medewerker keurt deze goed, pas dan wordt de SAP-API aangeroepen. Dit voldoet aan de nieuwe regels en voorkomt dat je integratie straks geblokkeerd wordt.

**Als je een team aanstuurt dat AI gebruikt voor voorraadbeheer**, bijvoorbeeld om automatisch inkooporders te genereren, is het verstandig om nu al te inventariseren welke SAP-API’s jullie gebruiken. Maak een lijst van alle endpoints die autonome acties uitvoeren. Vervolgens kun je per endpoint bepalen of er een menselijke controle nodig is of dat je de AI kunt beperken tot read-only toegang. Een mogelijkheid is om een aparte API-gateway te plaatsen die alleen goedgekeurde acties doorlaat.

**Als je in de logistiek werkt** en AI inzet voor het plannen van verzendingen of het wijzigen van leverdata, controleer dan of jouw AI-tool directe schrijftoegang heeft tot SAP. Als dat zo is, kun je overwegen om een tussenapplicatie te bouwen die de AI-verzoeken eerst naar een wachtrij stuurt. Een medewerker kan dan in een dashboard zien wat de AI voorstelt en het goedkeuren. Dit kost wat ontwikkeltijd, maar het voorkomt dat je straks voor verrassingen komt te staan als SAP de toegang daadwerkelijk afsluit.

**Als je een AI-startup bent die integraties met SAP bouwt**, is dit het moment om je product aan te passen. Je zou een compliance-module kunnen toevoegen die automatisch voldoet aan SAP’s nieuwe regels. Een optie is om een audit-log te implementeren die alle AI-acties vastlegt, zodat klanten kunnen aantonen dat ze binnen de perken blijven. Dit kan een concurrentievoordeel worden, omdat andere aanbieders mogelijk nog niet compliant zijn.

Bron: [CustomerThink](https://customerthink.com/sap-draws-a-perimeter-around-agentic-ai-and-what-that-means-for-the-rest-of-us/)

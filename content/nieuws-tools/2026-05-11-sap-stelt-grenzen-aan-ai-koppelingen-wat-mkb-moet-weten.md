---
title: "SAP stelt grenzen aan AI-koppelingen: wat MKB moet weten"
date: 2026-05-11T06:05:57.307Z
tags: ["sap", "api-beleid", "agentic ai", "mkb"]
categorieen: ["nieuws-tools"]
summary: "SAP’s nieuwe API-beleid beperkt autonome AI-toegang. Dit raakt MKB-gebruikers direct."
draft: false
source_name: "CustomerThink"
source_url: "https://customerthink.com/sap-draws-a-perimeter-around-agentic-ai-and-what-that-means-for-the-rest-of-us/"
---

SAP’s nieuwe API-beleid, versie 4/2026, legt beperkingen op aan hoe autonome en generatieve AI-systemen mogen communiceren met SAP-API’s. Dit document, gepubliceerd eind april, is kort en in duidelijke taal geschreven. Voor Nederlandse MKB-bedrijven die SAP gebruiken, betekent dit dat bestaande AI-koppelingen mogelijk niet meer voldoen.

## Wat er aan de hand is

SAP heeft zijn API-beleid bijgewerkt. De belangrijkste wijziging staat in sectie 2.2.2. Die sectie beperkt hoe autonome AI-systemen – ook wel agentic AI genoemd – en generatieve AI mogen interacteren met SAP’s API’s. Het beleid is bedoeld om controle te houden over wie en wat toegang heeft tot SAP-systemen. Volgens CustomerThink is dit een van de meest invloedrijke AI-governancedocumenten van dit jaar, maar het kreeg weinig aandacht. Het document is in het Engels geschreven en bedoeld voor alle SAP-gebruikers, van grootbedrijf tot MKB.

## Wat dit betekent

Voor Nederlandse MKB-bedrijven die SAP inzetten, heeft deze wijziging directe gevolgen. Als je AI-tools gebruikt die zelfstandig acties uitvoeren in SAP – zoals het automatisch aanmaken van orders, het bijwerken van klantgegevens of het genereren van rapporten – dan vallen die onder de nieuwe restricties. Het beleid geldt voor alle SAP-API’s, of je nu on-premise of in de cloud werkt. Dit betekent dat je huidige AI-integraties mogelijk niet langer compliant zijn. Vooral bedrijven die experimenteren met agentic AI, zoals chatbots die zelfstandig SAP-transacties uitvoeren, moeten alert zijn. De impact is het grootst voor sectoren waar SAP centraal staat, zoals logistiek, productie en groothandel.

## Hoe je dit kunt toepassen

**Als je een webshop runt die via SAP bestellingen verwerkt.** Je hebt mogelijk een AI-systeem dat automatisch bestellingen aanmaakt in SAP. Controleer of dat systeem valt onder de definitie van autonome AI. Overweeg om een tussenlaag in te bouwen die menselijke goedkeuring vraagt voordat een AI-actie wordt uitgevoerd. Je zou kunnen kijken naar een workflowtool die eerst een melding stuurt naar een medewerker.

**Als je een team aanstuurt dat AI-tools gebruikt voor rapportage.** Je medewerkers gebruiken mogelijk generatieve AI om SAP-data te bevragen en rapporten te genereren. Het nieuwe beleid kan beperken hoe die AI-systemen toegang krijgen tot SAP-API’s. Een optie is om de AI-tool te vervangen door een oplossing die alleen leesrechten heeft en geen schrijfacties kan uitvoeren. Overweeg om een aparte API-omgeving in te richten voor alleen-lezen verzoeken.

**Als je in de logistiek werkt en AI gebruikt voor voorraadbeheer.** Stel dat je een AI-systeem hebt dat automatisch voorraadniveaus aanpast in SAP. Dit valt waarschijnlijk onder de nieuwe restricties. Je zou kunnen overwegen om het systeem tijdelijk uit te schakelen tot je de compliance hebt gecontroleerd. Een mogelijkheid is om een handmatige controle in te bouwen voordat voorraadwijzigingen worden doorgevoerd.

**Als je een externe AI-consultant hebt ingeschakeld.** Als een externe partij AI-koppelingen met SAP heeft gebouwd, vraag hen dan schriftelijk te bevestigen of hun oplossing voldoet aan de nieuwe API-beleidsregels. Overweeg om een audit uit te voeren van alle AI-koppelingen die je gebruikt. Je zou kunnen beginnen met een lijst van alle systemen die via API’s met SAP communiceren.

**Als je overweegt om agentic AI te implementeren.** Als je nog geen autonome AI gebruikt maar dit wel overweegt, wacht dan tot SAP meer duidelijkheid geeft over hoe compliant implementaties eruitzien. Een optie is om eerst een proof of concept te draaien in een sandbox-omgeving, zonder productiedata. Overweeg om contact op te nemen met SAP-ondersteuning voor specifieke richtlijnen.

Bron: CustomerThink

---
title: "Hoe je een app voor meerdere gebruikers bouwt met Claude Code"
date: 2026-03-08T23:03:17.979Z
tags: ["claude code", "app bouwen", "authenticatie", "database"]
categorieen: ["slimmer-werken"]
summary: "Een masterclass laat zien hoe je met Claude Code een app bouwt die meerdere mensen kunnen gebruiken, compleet met inlog en database."
cover:
  image: "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  alt: "Flat lay of a modern workspace featuring a laptop, coffee cup, and various accessories on a white background."
  caption: "Foto: fauxels via Pexels"
draft: false
source_name: "AI Report"
source_url: "https://www.aireport.email/p/masterclass-laat-je-vrienden-inloggen"
---

Er komt een punt waarop je zelfgebouwde app niet langer alleen voor jou is. Je wilt dat je moeder er iets in zet, je broer het kan zien, en jij het overal kunt raadplegen. Dat betekent dat je app moet kunnen omgaan met meerdere gebruikers, elk met hun eigen inlog en rechten, en dat alle data veilig en synchroon opgeslagen wordt in een gedeelde database. Het klinkt als een enorme technische horde, maar volgens een nieuwe masterclass van Wietse via AI Report kun je dit met Claude Code voor elkaar krijgen.

De masterclass is het vierde deel in een serie en richt zich specifiek op het bouwen van een applicatie die door meerdere mensen samen gebruikt kan worden. In de sessie wordt een complete gezinskalender gebouwd: een webapplicatie, een iPad-app, een iPhone-app en een Android-app. Alle varianten zijn verbonden met dezelfde centrale database en hetzelfde authenticatiesysteem. Als praktisch voorbeeld wordt er zelfs een versie van de 'Weasley-klok' uit Harry Potter gemaakt, waar avatars bewegen om de locatie van gezinsleden aan te geven.

## De technische bouwstenen voor een gedeelde app

De kern van een multi-user app ligt in twee componenten: authenticatie en database-structuur. Authenticatie zorgt ervoor dat iedereen veilig inlogt en alleen de data ziet die voor hem of haar bedoeld is. De database-structuur bepaalt hoe gegevens zoals afspraken, notities of taken worden opgeslagen en aan welke gebruiker ze gekoppeld zijn. In de masterclass worden hiervoor specifieke tools gebruikt die volgens de auteur goed samenwerken met Claude Code.

Om de app online en toegankelijk te maken, worden Cloudflare Workers en Netlify gebruikt, onderwerpen die ook in de vorige masterclass aan bod kwamen. Voor het opslaan van gebruikersgegevens en afspraken wordt Supabase ingezet, een dienst die een database en authenticatie-service combineert. Voor functionaliteiten zoals het versturen van e-mailnotificaties wordt Postmark genoemd.

## Wat je nodig hebt om mee te doen

Volgens het bronartikel zijn er een aantal zaken nodig om de masterclass te kunnen volgen en zelf een dergelijke app te bouwen. Allereerst is een Claude Pro-abonnement vereist, evenals de geïnstalleerde Claude desktop-app. Daarnaast raadt de auteur aan om accounts aan te maken bij Supabase (gratis), Postmark (gratis proefperiode) en Cloudflare (gratis).

Voor het bouwen van de mobiele apps zijn ontwikkelomgevingen nodig: Xcode voor iPhone/iPad-apps op een Mac, en Android Studio voor Android-apps. Een opvallend advies is om een specifieke Chrome-extensie van Claude te activeren, zodat Claude zelf kan rondklikken en testen in de gebouwde interfaces. De auteur benadrukt dat programmeerervaring of technische voorkennis niet nodig zijn.

## Hoe kun je dit vandaag toepassen?

Een mogelijkheid is om de genoemde masterclass-serie te bekijken, te beginnen bij deel één als je helemaal nieuw bent met Claude Code. Je zou kunnen starten met het aanmaken van de gratis accounts bij Supabase en Cloudflare, zoals in het artikel wordt gesuggereerd, om de benodigde infrastructuur klaar te zetten. Als je een concrete app voor een kleine groep wilt bouwen, zoals een gezinskalender of een projectboard voor een vrijwilligersteam, kun je de stappen uit de masterclass als blauwdruk gebruiken.

*De toepassingen in dit artikel zijn suggesties op basis van het bronartikel, geen gevalideerd advies.*

Bron: [AI Report](https://www.aireport.email/p/masterclass-laat-je-vrienden-inloggen-op-jouw-app)

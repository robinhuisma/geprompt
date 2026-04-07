# CLAUDE-CODE: Fix ontbrekende images + verwijder dubbele artikelen

## Stap 1: Detecteer dubbele artikelen

Scan alle markdown bestanden in `content/` (recursief). Twee artikelen zijn "dubbel" als:
- De titels voor >80% overeenkomen (fuzzy match op genormaliseerde woorden), OF
- De slugs (bestandsnaam zonder datum) voor >80% overeenkomen

Per set duplicaten: houd het NIEUWSTE bestand (op basis van datum in bestandsnaam). Verwijder de rest.

Toon eerst de lijst van gevonden duplicaten en vraag Robin om bevestiging voordat je verwijdert.

## Stap 2: Fix artikelen zonder cover image

Zoek alle markdown bestanden waar:
- `cover:` ontbreekt in de front matter, OF
- `image:` onder cover leeg is of ontbreekt

Voor elk artikel zonder image:
1. Lees de `title` uit de front matter
2. Lees de `section` (= de map: nieuws-tools, marketing-groei, slimmer-werken, creatief)
3. Doe een Pexels API call:

```bash
curl -s -H "Authorization: 3UMzJsBbCo8NFedo4v9k0wGwT4QR6KYnBVXzXDbdXI17a2G7Vg5komIk" \
  "https://api.pexels.com/v1/search?query=ZOEKTERM&per_page=1&orientation=landscape"
```

Zoekterm per sectie:
- nieuws-tools: "technology workspace office"
- marketing-groei: "business analytics marketing"
- slimmer-werken: "productive desk workspace"
- creatief: "creative studio design"

4. Pak `photos[0].src.landscape` als image URL
5. Pak `photos[0].alt` als alt tekst
6. Pak `photos[0].photographer` voor caption
7. Voeg toe aan front matter:

```yaml
cover:
  image: "URL"
  alt: "ALT"
  caption: "Foto: PHOTOGRAPHER via Pexels"
```

**Let op:** Pexels rate limit is 200 requests/uur. Wacht 500ms tussen calls.

## Stap 3: Git commit + push

```bash
cd ~/geprompt
git add -A
git commit -m "Fix: ontbrekende cover images + dubbele artikelen verwijderd"
git push
```

## Volgorde
1. Eerst duplicaten verwijderen (anders fix je images voor artikelen die je daarna weggooit)
2. Dan images fixen
3. Dan git commit + push

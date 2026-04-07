# CLAUDE-CODE: Gelezen artikelen dimmen

## Doel
Artikelen die de gebruiker al heeft gelezen worden visueel gedimd (opacity 0.5) op de homepage en lijstpagina's. Zo zie je direct wat nieuw is.

## Bestanden aanmaken/wijzigen

### 1. Maak `layouts/partials/read-tracker.html`

```html
<script>
(function() {
  var KEY = 'geprompt_read';

  // Op artikelpagina: sla URL op als gelezen
  if (document.querySelector('.post-single')) {
    var read = JSON.parse(localStorage.getItem(KEY) || '[]');
    var path = window.location.pathname;
    if (read.indexOf(path) === -1) {
      read.push(path);
      // Max 500 items bewaren
      if (read.length > 500) read = read.slice(-500);
      localStorage.setItem(KEY, JSON.stringify(read));
    }
  }

  // Op lijstpagina's: dim gelezen artikelen
  var read = JSON.parse(localStorage.getItem(KEY) || '[]');
  if (read.length === 0) return;

  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (read.indexOf(href) !== -1) {
      // Zoek de dichtstbijzijnde article/entry container
      var container = link.closest('.post-entry, .first-entry');
      if (container && !container.classList.contains('is-read')) {
        container.classList.add('is-read');
      }
    }
  });
})();
</script>
```

### 2. Voeg toe aan `layouts/partials/extend_footer.html`

Als dit bestand niet bestaat, maak het aan. Als het al bestaat, voeg deze regel toe onderaan:

```html
{{ partial "read-tracker.html" . }}
```

### 3. Voeg toe aan `assets/css/extended/custom.css`

```css
/* Gelezen artikelen dimmen */
.post-entry.is-read,
.first-entry.is-read {
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

.post-entry.is-read:hover,
.first-entry.is-read:hover {
  opacity: 0.85;
}
```

## Test

1. `hugo server -D`
2. Klik op een artikel
3. Ga terug naar homepage
4. Dat artikel moet nu gedimd zijn

## Git

```bash
cd ~/geprompt
git add -A
git commit -m "Feature: gelezen artikelen dimmen (localStorage + CSS opacity)"
git push
```

#!/usr/bin/env node
// Vervang alle cover images in bestaande artikelen
// Round-robin: Pexels → Pixabay → Unsplash → Pexels → ...
// Zoekterm: "artificial intelligence " + eerste tag

const https = require('https');
const fs = require('fs');
const path = require('path');

const pexelsKey = '3UMzJsBbCo8NFedo4v9k0wGwT4QR6KYnBVXzXDbdXI17a2G7Vg5komIk';
const unsplashKey = '8bJNbv4-7j00ywgukgx45RQKtbOCFC0GlxOfRr44aTM';
const pixabayKey = '16902215-64ca76bcb4eba0caaf000847c';

function httpGet(options) {
  return new Promise(function(resolve) {
    var req = https.request(options, function(res) {
      var data = '';
      res.on('data', function(c) { data += c; });
      res.on('end', function() {
        try { resolve(JSON.parse(data)); }
        catch(e) { resolve(null); }
      });
    });
    req.on('error', function() { resolve(null); });
    req.end();
  });
}

async function searchPexels(query, page) {
  var data = await httpGet({
    hostname: 'api.pexels.com',
    path: '/v1/search?query=' + encodeURIComponent(query) + '&per_page=15&orientation=landscape&page=' + (page || 1),
    method: 'GET',
    headers: { 'Authorization': pexelsKey }
  });
  if (!data || !data.photos) return [];
  return data.photos.map(function(p) {
    return { id: 'pexels-' + p.id, url: p.src.large2x, alt: p.alt || '', photographer: p.photographer || '', bron: 'Pexels' };
  });
}

async function searchUnsplash(query, page) {
  var data = await httpGet({
    hostname: 'api.unsplash.com',
    path: '/search/photos?query=' + encodeURIComponent(query) + '&per_page=15&orientation=landscape&page=' + (page || 1),
    method: 'GET',
    headers: { 'Authorization': 'Client-ID ' + unsplashKey }
  });
  if (!data || !data.results) return [];
  return data.results.map(function(p) {
    return { id: 'unsplash-' + p.id, url: p.urls.regular, alt: (p.alt_description || ''), photographer: (p.user ? p.user.name : '') || '', bron: 'Unsplash' };
  });
}

async function searchPixabay(query, page) {
  var data = await httpGet({
    hostname: 'pixabay.com',
    path: '/api/?key=' + pixabayKey + '&q=' + encodeURIComponent(query) + '&per_page=15&page=' + (page || 1) + '&image_type=photo&orientation=horizontal&min_width=1200',
    method: 'GET',
    headers: {}
  });
  if (!data || !data.hits) return [];
  return data.hits.map(function(p) {
    return { id: 'pixabay-' + p.id, url: p.largeImageURL, alt: p.tags || '', photographer: p.user || '', bron: 'Pixabay' };
  });
}

const apiFuncties = [searchPexels, searchPixabay, searchUnsplash];
const apiNamen = ['Pexels', 'Pixabay', 'Unsplash'];
const usedIds = { 0: [], 1: [], 2: [] };

function getAllArticles(dir) {
  var articles = [];
  var sections = fs.readdirSync(dir).filter(function(d) {
    return fs.statSync(path.join(dir, d)).isDirectory() && !d.startsWith('.');
  });
  sections.forEach(function(section) {
    var sectionDir = path.join(dir, section);
    fs.readdirSync(sectionDir).filter(function(f) { return f.endsWith('.md') && f !== '_index.md'; }).forEach(function(f) {
      articles.push(path.join(sectionDir, f));
    });
  });
  return articles;
}

function extractFirstTag(content) {
  var match = content.match(/tags:\s*\[([^\]]+)\]/);
  if (!match) return 'technology';
  var first = match[1].split(',')[0].replace(/"/g, '').trim();
  return first || 'technology';
}

async function run() {
  var contentDir = path.join(__dirname, 'content');
  var articles = getAllArticles(contentDir).sort();

  console.log('Gevonden: ' + articles.length + ' artikelen\n');

  for (var i = 0; i < articles.length; i++) {
    var filePath = articles[i];
    var content = fs.readFileSync(filePath, 'utf8');
    var firstTag = extractFirstTag(content);
    var searchTerm = 'artificial intelligence ' + firstTag;
    var apiIdx = i % 3;
    var randomPage = Math.floor(Math.random() * 3) + 1;

    console.log((i + 1) + '/' + articles.length + ' | ' + apiNamen[apiIdx] + ' | "' + searchTerm + '" | ' + path.basename(filePath));

    // Zoek foto
    var resultaten = await apiFuncties[apiIdx](searchTerm, randomPage);

    // Fallback naar volgende API's
    if (resultaten.length === 0) {
      for (var attempt = 1; attempt < 3; attempt++) {
        var fallbackIdx = (apiIdx + attempt) % 3;
        resultaten = await apiFuncties[fallbackIdx](searchTerm, randomPage);
        if (resultaten.length > 0) {
          apiIdx = fallbackIdx;
          break;
        }
      }
    }

    if (resultaten.length === 0) {
      console.log('   GEEN FOTO GEVONDEN — overgeslagen\n');
      continue;
    }

    // Filter dedup
    var unused = resultaten.filter(function(f) { return usedIds[apiIdx].indexOf(f.id) === -1; });
    if (unused.length === 0) unused = resultaten;
    var pick = unused[Math.floor(Math.random() * unused.length)];
    usedIds[apiIdx].push(pick.id);

    // Vervang cover block in front matter
    var imageUrl = pick.url;
    var imageAlt = (pick.alt || firstTag).replace(/"/g, '\\"');
    var photographer = pick.photographer || '';
    var fotoBron = pick.bron || apiNamen[apiIdx];

    var newCover = 'cover:\n  image: "' + imageUrl + '"\n  alt: "' + imageAlt + '"\n  caption: "Foto: ' + photographer + ' via ' + fotoBron + '"';

    // Verwijder bestaand cover block
    var newContent = content.replace(/cover:\n\s*image:.*\n\s*alt:.*\n\s*caption:.*\n/m, '');

    // Voeg nieuw cover block in voor "draft:"
    newContent = newContent.replace(/^(draft:.*)$/m, newCover + '\n$1');

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('   ✓ ' + fotoBron + ' — ' + photographer + '\n');

    // Wacht 500ms om rate limits te respecteren
    await new Promise(function(r) { setTimeout(r, 500); });
  }

  console.log('\nKlaar. Vergeet niet: git add + commit + push');
}

run().catch(function(e) { console.error('FOUT:', e); });

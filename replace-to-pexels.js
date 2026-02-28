#!/usr/bin/env node
// Vervang alle non-Pexels images terug naar Pexels
const https = require('https');
const fs = require('fs');
const path = require('path');

const pexelsKey = '3UMzJsBbCo8NFedo4v9k0wGwT4QR6KYnBVXzXDbdXI17a2G7Vg5komIk';

function searchPexels(query, page) {
  return new Promise(function(resolve) {
    var req = https.request({
      hostname: 'api.pexels.com',
      path: '/v1/search?query=' + encodeURIComponent(query) + '&per_page=15&orientation=landscape&page=' + (page || 1),
      method: 'GET',
      headers: { 'Authorization': pexelsKey }
    }, function(res) {
      var data = '';
      res.on('data', function(c) { data += c; });
      res.on('end', function() {
        try { resolve(JSON.parse(data)); }
        catch(e) { resolve({ photos: [] }); }
      });
    });
    req.on('error', function() { resolve({ photos: [] }); });
    req.end();
  });
}

var usedIds = [];

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

function needsReplacement(content) {
  return content.indexOf('via Pixabay') !== -1 || content.indexOf('via Unsplash') !== -1;
}

async function run() {
  var contentDir = path.join(__dirname, 'content');
  var articles = getAllArticles(contentDir).sort();
  var replaced = 0;

  console.log('Gevonden: ' + articles.length + ' artikelen\n');

  for (var i = 0; i < articles.length; i++) {
    var filePath = articles[i];
    var content = fs.readFileSync(filePath, 'utf8');

    if (!needsReplacement(content)) {
      console.log((i + 1) + '/' + articles.length + ' | SKIP (al Pexels) | ' + path.basename(filePath));
      continue;
    }

    var firstTag = extractFirstTag(content);
    var searchTerm = 'artificial intelligence ' + firstTag;
    var randomPage = Math.floor(Math.random() * 3) + 1;

    console.log((i + 1) + '/' + articles.length + ' | VERVANG | "' + searchTerm + '" | ' + path.basename(filePath));

    var pexels = await searchPexels(searchTerm, randomPage);
    if (!pexels.photos || pexels.photos.length === 0) {
      pexels = await searchPexels('artificial intelligence technology', 1);
    }

    if (!pexels.photos || pexels.photos.length === 0) {
      console.log('   GEEN FOTO — overgeslagen\n');
      continue;
    }

    var unused = pexels.photos.filter(function(p) { return usedIds.indexOf(p.id) === -1; });
    if (unused.length === 0) unused = pexels.photos;
    var pick = unused[Math.floor(Math.random() * unused.length)];
    usedIds.push(pick.id);

    var imageUrl = pick.src.large2x;
    var imageAlt = (pick.alt || firstTag).replace(/"/g, '\\"');
    var photographer = pick.photographer || '';

    var newCover = 'cover:\n  image: "' + imageUrl + '"\n  alt: "' + imageAlt + '"\n  caption: "Foto: ' + photographer + ' via Pexels"';

    var newContent = content.replace(/cover:\n\s*image:.*\n\s*alt:.*\n\s*caption:.*\n/m, '');
    newContent = newContent.replace(/^(draft:.*)$/m, newCover + '\n$1');

    fs.writeFileSync(filePath, newContent, 'utf8');
    replaced++;
    console.log('   ✓ Pexels — ' + photographer + '\n');

    await new Promise(function(r) { setTimeout(r, 500); });
  }

  console.log('\n' + replaced + ' foto\'s vervangen. git add + commit + push');
}

run().catch(function(e) { console.error('FOUT:', e); });

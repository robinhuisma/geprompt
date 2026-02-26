const https = require('https');
const fs = require('fs');
const path = require('path');

const pexelsKey = '3UMzJsBbCo8NFedo4v9k0wGwT4QR6KYnBVXzXDbdXI17a2G7Vg5komIk';
const contentDir = path.join(process.env.HOME, 'geprompt', 'content');
const secties = ['groei', 'creatie', 'werk', 'geld', 'leven', 'posts', 'tech-trends', 'sales-marketing', 'creativiteit'];
const usedPhotos = [];

const stopwoorden = ['de','het','een','van','in','op','met','voor','door','aan','bij','uit','naar','als','die','dat','is','was','zijn','worden','wordt','heeft','had','kan','kun','zou','hoe','wat','wie','waar','jouw','jij','je','zo','nu','ook','nog','maar','en','of','om','te','er','al','wel','niet','deze','meer','alle','veel','over','onder','alleen','tussen','zonder','binnen','buiten','tegen','tijdens','volgens','langs','rond','sinds','vanuit','tot'];

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function searchPexels(query, page) {
  return new Promise(function(resolve) {
    var req = https.request({
      hostname: 'api.pexels.com',
      path: '/v1/search?query=' + encodeURIComponent(query) + '&per_page=15&orientation=landscape&page=' + page,
      method: 'GET',
      headers: { 'Authorization': pexelsKey }
    }, function(res) {
      var data = '';
      res.on('data', function(chunk) { data += chunk; });
      res.on('end', function() {
        try { resolve(JSON.parse(data)); }
        catch(e) { resolve({ photos: [] }); }
      });
    });
    req.on('error', function() { resolve({ photos: [] }); });
    req.end();
  });
}

function extractTitle(content) {
  var match = content.match(/^title:\s*"(.+?)"/m);
  if (match) return match[1];
  match = content.match(/^title:\s*'(.+?)'/m);
  if (match) return match[1];
  match = content.match(/^title:\s*(.+)$/m);
  if (match) return match[1].replace(/["']/g, '');
  return '';
}

function getSearchTerms(titel) {
  var woorden = titel.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(function(w) { return w.length > 3 && stopwoorden.indexOf(w) === -1; });
  return woorden.slice(0, 3).join(' ') || 'technology business';
}

function replaceCover(content, imageUrl, imageAlt, photographer) {
  var cleaned = content.replace(/cover:\s*\n\s*image:.*\n(\s*alt:.*\n)?(\s*caption:.*\n)?/g, '');
  var newCover = 'cover:\n  image: "' + imageUrl + '"\n  alt: "' + imageAlt.replace(/"/g, '\\"') + '"\n  caption: "Foto: ' + photographer + ' via Pexels"\n';
  if (cleaned.includes('draft:')) {
    cleaned = cleaned.replace(/draft:/, newCover + 'draft:');
  }
  return cleaned;
}

async function processFile(filePath) {
  var content = fs.readFileSync(filePath, 'utf8');
  var titel = extractTitle(content);
  if (!titel) { console.log('  SKIP (geen titel): ' + filePath); return false; }

  var zoekWoorden = getSearchTerms(titel);
  var randomPage = Math.floor(Math.random() * 3) + 1;
  var pexels = await searchPexels(zoekWoorden, randomPage);

  if (!pexels.photos || pexels.photos.length === 0) {
    pexels = await searchPexels('technology business', 1);
  }
  if (!pexels.photos || pexels.photos.length === 0) {
    console.log('  SKIP (geen foto): ' + titel); return false;
  }

  var unused = pexels.photos.filter(function(p) { return usedPhotos.indexOf(p.id) === -1; });
  if (unused.length === 0) unused = pexels.photos;

  var pick = unused[Math.floor(Math.random() * unused.length)];
  usedPhotos.push(pick.id);

  var newContent = replaceCover(content, pick.src.large2x, pick.alt || titel, pick.photographer || 'Onbekend');
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('  OK: ' + titel.substring(0, 60) + ' -> ' + zoekWoorden);
  return true;
}

async function main() {
  var total = 0, updated = 0;
  for (var s = 0; s < secties.length; s++) {
    var sectieDir = path.join(contentDir, secties[s]);
    if (!fs.existsSync(sectieDir)) continue;
    var files = fs.readdirSync(sectieDir).filter(function(f) { return f.endsWith('.md') && f !== '_index.md'; });
    console.log('\n=== ' + secties[s].toUpperCase() + ' (' + files.length + ' artikelen) ===');
    for (var i = 0; i < files.length; i++) {
      total++;
      if (await processFile(path.join(sectieDir, files[i]))) updated++;
      await sleep(400);
    }
  }
  console.log('\nKlaar! ' + updated + '/' + total + ' bijgewerkt. Unieke fotos: ' + usedPhotos.length);
  console.log('Nu: cd ~/geprompt && git add . && git commit -m "Alle artikelen nieuwe foto" && git push');
}
main();

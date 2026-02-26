const https = require('https');
const fs = require('fs');
const path = require('path');

const pexelsKey = '3UMzJsBbCo8NFedo4v9k0wGwT4QR6KYnBVXzXDbdXI17a2G7Vg5komIk';
const contentDir = path.join(process.env.HOME, 'geprompt', 'content');
const secties = ['groei', 'creatie', 'werk', 'geld', 'leven', 'posts', 'tech-trends', 'sales-marketing', 'creativiteit'];
const usedPhotos = [];

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
  return '';
}

// Vertaal Nederlandse titel naar Engelse Pexels zoektermen
function getSearchTerms(titel) {
  var mapping = {
    'boekhouding': 'accounting office', 'factuur': 'invoice desk', 'facturatie': 'invoice laptop',
    'marketing': 'marketing team', 'social media': 'social media phone', 'advertentie': 'advertising screen',
    'crm': 'customer meeting', 'klant': 'customer service', 'verkoop': 'sales handshake',
    'hr': 'job interview office', 'werving': 'recruitment office', 'sollicitatie': 'job interview',
    'automatisering': 'office automation laptop', 'workflow': 'workflow whiteboard', 'productiviteit': 'productive desk',
    'cloud': 'cloud server room', 'software': 'software developer screen', 'data': 'data dashboard screen',
    'ai': 'modern office technology', 'chatbot': 'chat customer service', 'robot': 'robot warehouse',
    'kosten': 'budget calculator', 'besparing': 'savings piggybank', 'financ': 'finance spreadsheet',
    'video': 'video editing screen', 'content': 'content creator laptop', 'design': 'designer workspace',
    'email': 'email inbox laptop', 'planning': 'planning calendar desk', 'team': 'team meeting office',
    'security': 'cybersecurity lock', 'privacy': 'privacy shield laptop', 'subsidie': 'government funding document',
    'ondernemer': 'entrepreneur office', 'mkb': 'small business office', 'startup': 'startup workspace',
    'retail': 'retail shop modern', 'webshop': 'ecommerce laptop', 'e-commerce': 'online shopping',
    'logistiek': 'warehouse logistics', 'voorraad': 'inventory warehouse', 'supply chain': 'supply chain warehouse'
  };

  var lowerTitel = titel.toLowerCase();
  for (var key in mapping) {
    if (lowerTitel.indexOf(key) !== -1) {
      return mapping[key] + ' european';
    }
  }
  return 'modern european office business';
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
  if (!titel) { console.log('  SKIP (geen titel): ' + path.basename(filePath)); return false; }

  var zoekWoorden = getSearchTerms(titel);
  var randomPage = Math.floor(Math.random() * 3) + 1;
  var pexels = await searchPexels(zoekWoorden, randomPage);

  if (!pexels.photos || pexels.photos.length === 0) {
    pexels = await searchPexels('modern european office business', 1);
  }
  if (!pexels.photos || pexels.photos.length === 0) {
    console.log('  SKIP (geen foto): ' + titel.substring(0, 50)); return false;
  }

  var unused = pexels.photos.filter(function(p) { return usedPhotos.indexOf(p.id) === -1; });
  if (unused.length === 0) unused = pexels.photos;

  var pick = unused[Math.floor(Math.random() * unused.length)];
  usedPhotos.push(pick.id);

  var newContent = replaceCover(content, pick.src.large2x, pick.alt || titel, pick.photographer || 'Onbekend');
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('  OK: ' + titel.substring(0, 50) + ' -> ' + zoekWoorden);
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
  console.log('\nKlaar! ' + updated + '/' + total + ' bijgewerkt.');
  console.log('Nu: cd ~/geprompt && git add . && git commit -m "Alle artikelen nieuwe foto" && git push');
}
main();

const https = require('https');
const fs = require('fs');
const path = require('path');

const pexelsKey = '3UMzJsBbCo8NFedo4v9k0wGwT4QR6KYnBVXzXDbdXI17a2G7Vg5komIk';
const deepseekKey = 'sk-fc0e3814252948bba570e254aeb5e5ae';
const contentDir = path.join(process.env.HOME, 'geprompt', 'content');
const secties = ['groei', 'creatie', 'werk', 'geld', 'leven', 'posts', 'tech-trends', 'sales-marketing', 'creativiteit'];
const usedPhotos = [];

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function callDeepSeek(titel, artikel) {
  return new Promise(function(resolve) {
    var body = JSON.stringify({
      model: 'deepseek-chat',
      temperature: 0.3,
      max_tokens: 50,
      messages: [{
        role: 'system',
        content: 'Je krijgt een Nederlandse artikeltitel en tekst. Geef ALLEEN 3-4 Engelse woorden terug waarmee een passende stockfoto gevonden kan worden op Pexels.\n\nWEL:\n- Mensen in zakelijke/professionele setting met tech uitstraling\n- Europese/westerse uitstraling\n- Lichte, moderne omgevingen\n- Diversiteit in mensen\n- Actie: mensen die werken, overleggen, presenteren\n- Smartphones met mensen tonen\n- Aantrekkelijke professionele mensen\n\nNIET:\n- Geen Aziatische settings\n- Geen lege laptops/schermen als hoofdonderwerp\n- Geen stockfoto-glimlachen (overdreven geposeerd)\n- Geen donkere/sombere beelden\n- Geen code/matrix/neon AI-cliches\n- Geen clipart-achtige beelden\n- Geen AI-gegenereerde beelden\n\nGeef ALLEEN de zoekwoorden terug, niets anders. Voorbeeld: professional team modern office'
      }, {
        role: 'user',
        content: 'TITEL: ' + titel + '\nARTIKEL: ' + artikel.substring(0, 500)
      }]
    });

    var req = https.request({
      hostname: 'api.deepseek.com',
      path: '/chat/completions',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + deepseekKey,
        'Content-Type': 'application/json'
      }
    }, function(res) {
      var data = '';
      res.on('data', function(chunk) { data += chunk; });
      res.on('end', function() {
        try {
          var parsed = JSON.parse(data);
          var zoek = parsed.choices[0].message.content.trim();
          resolve(zoek);
        } catch(e) { resolve('professional team modern office'); }
      });
    });
    req.on('error', function() { resolve('professional team modern office'); });
    req.write(body);
    req.end();
  });
}

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

function extractArticle(content) {
  var parts = content.split('---');
  if (parts.length >= 3) return parts.slice(2).join('---').trim();
  return '';
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

  var artikel = extractArticle(content);
  var zoekWoorden = await callDeepSeek(titel, artikel);
  console.log('  DeepSeek: "' + zoekWoorden + '"');

  var randomPage = Math.floor(Math.random() * 3) + 1;
  var pexels = await searchPexels(zoekWoorden, randomPage);

  if (!pexels.photos || pexels.photos.length === 0) {
    pexels = await searchPexels('professional european office people', 1);
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
  console.log('  OK: ' + titel.substring(0, 50));
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
      await sleep(500);
    }
  }
  console.log('\nKlaar! ' + updated + '/' + total + ' bijgewerkt.');
  console.log('Nu: cd ~/geprompt && git add . && git commit -m "Alle artikelen nieuwe foto via DeepSeek" && git push');
}
main();

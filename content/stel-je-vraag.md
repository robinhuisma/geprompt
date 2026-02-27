---
title: "Stel je vraag"
hidemeta: true
disableShare: true
draft: false
---

<div class="qgc-intro">
  <p>Stel je AI-vraag. Als het relevant is voor andere ondernemers, schrijven wij er een artikel over. Je krijgt een mail als het live staat.</p>
</div>

<!-- Honeypot -->
<div style="position:absolute;left:-9999px;top:-9999px;" aria-hidden="true">
  <input type="text" name="website" id="qgc-honeypot" tabindex="-1" autocomplete="off">
</div>

<div id="qgc-form-area">

  <!-- Branche + E-mail -->
  <div class="qgc-details">
    <div class="qgc-details-row">
      <div class="qgc-detail-field">
        <label>In welke branche werk je?</label>
        <select id="qgc-branche">
          <option value="">— Kies je branche —</option>
          <option>Accountancy &amp; Boekhouding</option>
          <option>Administratie &amp; Secretariaat</option>
          <option>Advocatuur &amp; Juridisch</option>
          <option>Agrarisch &amp; Tuinbouw</option>
          <option>Architectuur &amp; Stedenbouw</option>
          <option>Automotive &amp; Mobiliteit</option>
          <option>Bouw &amp; Installatie</option>
          <option>Coaching &amp; Training</option>
          <option>Communicatie &amp; PR</option>
          <option>Consultancy &amp; Advies</option>
          <option>Creatieve industrie &amp; Design</option>
          <option>E-commerce &amp; Webshops</option>
          <option>Educatie &amp; Onderwijs</option>
          <option>Energie &amp; Duurzaamheid</option>
          <option>Evenementen &amp; Hospitality</option>
          <option>Facility Management</option>
          <option>Film, Media &amp; Entertainment</option>
          <option>Financiële dienstverlening</option>
          <option>Gezondheidszorg &amp; Medisch</option>
          <option>Grafische industrie &amp; Drukwerk</option>
          <option>Groot- &amp; Detailhandel (Retail)</option>
          <option>Horeca &amp; Catering</option>
          <option>HR &amp; Recruitment</option>
          <option>ICT &amp; Software</option>
          <option>Importeren &amp; Exporteren</option>
          <option>Industrie &amp; Productie</option>
          <option>Inkoop &amp; Procurement</option>
          <option>Interieurbouw &amp; Meubelmakerij</option>
          <option>Logistiek &amp; Transport</option>
          <option>Makelaardij &amp; Vastgoed</option>
          <option>Marketing &amp; Reclame</option>
          <option>Milieu &amp; Afvalverwerking</option>
          <option>Mode &amp; Textiel</option>
          <option>Muziek &amp; Podiumkunsten</option>
          <option>Non-profit &amp; Stichtingen</option>
          <option>Notariaat</option>
          <option>Onderhoud &amp; Schoonmaak</option>
          <option>Overheid &amp; Publieke sector</option>
          <option>Personeelsdiensten &amp; Uitzenden</option>
          <option>Rijscholen &amp; Verkeersopleidingen</option>
          <option>Sales &amp; Verkoop</option>
          <option>Schilderwerk &amp; Afbouw</option>
          <option>Sport &amp; Fitness</option>
          <option>Tandheelkunde &amp; Mondzorg</option>
          <option>Techniek &amp; Engineering</option>
          <option>Telecom &amp; Netwerken</option>
          <option>Toerisme &amp; Recreatie</option>
          <option>Verzekeringen</option>
          <option>Welzijn &amp; Maatschappelijk werk</option>
          <option value="anders">Anders, namelijk...</option>
        </select>
        <div class="qgc-branche-anders" id="branche-anders">
          <input type="text" placeholder="Typ je branche" maxlength="100">
        </div>
        <div class="qgc-optional-hint">Optioneel — maar helpt ons je vraag zo goed mogelijk te beantwoorden</div>
      </div>
      <div class="qgc-detail-field">
        <label>E-mailadres *</label>
        <input type="email" id="qgc-email" placeholder="naam@bedrijf.nl" required>
      </div>
    </div>
    <div class="qgc-detail-field" style="margin-top:12px;">
      <label>Wat heb je al geprobeerd?</label>
      <input type="text" id="qgc-geprobeerd" placeholder="Bijv. Excel-macro's, ChatGPT, niks" maxlength="200">
      <div class="qgc-optional-hint">Optioneel — voorkomt dat het artikel te basaal wordt</div>
    </div>
  </div>

  <!-- Prompt veld -->
  <div class="qgc-prompt-box">
    <textarea id="qgc-vraag" placeholder="Stel hier je AI-gerelateerde vraag (min. 10 tekens)" maxlength="2000"></textarea>
    <div class="qgc-prompt-bottom">
      <span class="qgc-char-count"><span id="qgc-teller">0</span> / 2.000</span>
      <button class="qgc-send-btn" id="qgc-send" title="Deel je ondernemersdilemma nu.">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
  </div>

  <!-- CTA onder prompt -->
  <div class="qgc-prompt-cta">
    <p class="qgc-cta-bold">Hoe specifieker je vraag, hoe beter het artikel.</p>
    <p class="qgc-cta-sub">Geef aan wat je al hebt geprobeerd en in welke situatie je zit. Dat helpt ons om een concreet en bruikbaar antwoord te schrijven.</p>
  </div>

  <!-- Opties -->
  <div class="qgc-options">
    <label class="qgc-option-label">
      <input type="checkbox" id="qgc-remember">
      <span>Onthoud mijn e-mailadres op dit apparaat</span>
    </label>
    <label class="qgc-option-label">
      <input type="checkbox" id="qgc-naam-check">
      <span>Ik wil met naam of alias vermeld worden bij het artikel</span>
    </label>
    <div class="qgc-naam-inline" id="qgc-naam-wrapper">
      <input type="text" id="qgc-naam" placeholder="Je naam of alias" maxlength="100">
      <div class="qgc-naam-warning" id="qgc-naam-warning" style="display:none;">Deze naam kan niet worden gebruikt.</div>
    </div>
    <label class="qgc-option-label">
      <input type="checkbox" id="qgc-nieuwsbrief">
      <span>Ik wil de Geprompt-nieuwsbrief ontvangen</span>
    </label>
  </div>

  <!-- Turnstile -->
  <div class="qgc-turnstile">
    <div class="cf-turnstile" data-sitekey="0x4AAAAAACjXL6EFc4CBb4UU" data-callback="onTurnstileSuccess" data-theme="dark"></div>
  </div>

  <!-- Submit button -->
  <button class="qgc-submit-btn" id="qgc-submit-btn">Verstuur je vraag</button>

  <p class="qgc-privacy">Je e-mailadres wordt alleen gebruikt om je te laten weten als je vraag is beantwoord. Lees onze <a href="/privacy/">privacyverklaring</a>.</p>
</div>

<!-- Bedankt -->
<div id="qgc-thanks" style="display:none;" class="qgc-thanks">
  <h3>Bedankt!</h3>
  <p>Bedankt! Als je vraag relevant is voor andere ondernemers, schrijven we er een artikel over. Je krijgt dan een e-mail op <strong id="qgc-thanks-email"></strong>.</p>
</div>

<div id="qgc-error" style="display:none;" class="qgc-error">
  <p id="qgc-error-msg">Er ging iets mis. Probeer het later opnieuw.</p>
</div>

<!-- Turnstile script -->
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

<script>
(function() {
  var vraag = document.getElementById('qgc-vraag');
  var email = document.getElementById('qgc-email');
  var teller = document.getElementById('qgc-teller');
  var sendBtn = document.getElementById('qgc-send');
  var submitBtn = document.getElementById('qgc-submit-btn');
  var naamCheck = document.getElementById('qgc-naam-check');
  var naamWrapper = document.getElementById('qgc-naam-wrapper');
  var naamInput = document.getElementById('qgc-naam');
  var naamWarning = document.getElementById('qgc-naam-warning');
  var rememberEmail = document.getElementById('qgc-remember');
  var honeypot = document.getElementById('qgc-honeypot');
  var brancheSelect = document.getElementById('qgc-branche');
  var turnstileReady = false;

  var QGC_SECRET = 'd73fce9fb4146abe55430eb0e3c205d88950ac9e6aacbc0d9d045a3464b6fd5c';
  var WEBHOOK_URL = 'https://webhook.geprompt.nl/webhook/geprompt-qgc';

  // Geblokkeerde namen/aliassen
  var blocked = [
    'kut','lul','klootzak','eikel','sukkel','idioot','debiel','mongol','mafkees',
    'trut','hoer','slet','bitch','asshole','fuck','fucker','motherfucker','dick',
    'cock','pussy','cunt','wanker','bastard','retard','loser','douchebag',
    'godverdomme','tering','tyfus','kanker','klere','pest','cholera','pleuris',
    'krijg de','sodemieter','optieven','opdonderen','donder op','rot op','flikker',
    'homo','nikker','neger','spast','stumper','oelewapper','pauper','tokkie',
    'poep','pies','schijt','stront','kak','drol','pis','pipi','aars','reet','kont',
    'billen','scheet','shit','poop','ass','arse','butthole',
    'porno','porn','xxx','dildo','vibrator','penis','vagina','piemel','pik',
    'tieten','borsten','neuken','naaien','pijpen','beffen','anaal','anal',
    'orgasme','cum','cumshot','milf','gilf','bdsm','fetish','stripper',
    'escort','callgirl','prostituee','hoertje','sekswerker',
    'kankerlijer','teringlijer','tyfuslijer','klerelijer','pestlijder','aidser','covidiot',
    'godver','gvd','jezus christus','allah','allahu akbar','mohammed',
    'pvv','vvd','groenlinks','d66','cda','forum voor democratie','fvd',
    'bbb','volt','sp ','pvda','denk','bij1','ja21','sgp','cu ',
    'christenunie','nsc','pieter omtzigt','geert wilders','frans timmermans',
    'thierry baudet','dilan yesilgoz','jesse klaver','rob jetten',
    'stormy daniels','ron jeremy','jenna jameson','mia khalifa',
    'riley reid','lisa ann','sasha grey','brazzers','pornhub','xvideos',
    'xhamster','onlyfans','chaturbate'
  ];

  function isBlocked(input) {
    var clean = input.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    if (!clean) return false;
    for (var i = 0; i < blocked.length; i++) {
      if (clean.indexOf(blocked[i].trim()) !== -1) return true;
    }
    var leet = clean.replace(/0/g,'o').replace(/1/g,'i').replace(/3/g,'e')
      .replace(/4/g,'a').replace(/5/g,'s').replace(/8/g,'b');
    if (leet !== clean) {
      for (var j = 0; j < blocked.length; j++) {
        if (leet.indexOf(blocked[j].trim()) !== -1) return true;
      }
    }
    return false;
  }

  // Tekenteller
  vraag.addEventListener('input', function() {
    teller.textContent = vraag.value.length.toLocaleString('nl-NL');
  });

  // Naam filter
  naamInput.addEventListener('input', function() {
    if (isBlocked(naamInput.value)) {
      naamInput.classList.add('qgc-naam-blocked');
      naamWarning.style.display = 'block';
    } else {
      naamInput.classList.remove('qgc-naam-blocked');
      naamWarning.style.display = 'none';
    }
  });

  // Naam veld tonen/verbergen
  naamCheck.addEventListener('change', function() {
    naamWrapper.style.display = naamCheck.checked ? 'block' : 'none';
  });

  // Branche "anders"
  brancheSelect.addEventListener('change', function() {
    document.getElementById('branche-anders').style.display = this.value === 'anders' ? 'block' : 'none';
  });

  // E-mail onthouden
  var savedEmail = localStorage.getItem('qgc_email');
  if (savedEmail) {
    email.value = savedEmail;
    rememberEmail.checked = true;
  }

  // Turnstile callback
  window.onTurnstileSuccess = function(token) {
    turnstileReady = true;
  };

  // Verzenden
  function doSubmit() {
    if (vraag.value.length < 10) { showError('Je vraag moet minimaal 10 tekens zijn.'); return; }
    if (vraag.value.length > 2000) { showError('Je vraag mag maximaal 2.000 tekens zijn.'); return; }
    if (!email.value || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { showError('Vul een geldig e-mailadres in.'); return; }
    if (naamCheck.checked && isBlocked(naamInput.value)) { showError('Deze naam kan niet worden gebruikt.'); return; }
    if (honeypot.value) { showThanks(); return; }

    var turnstileToken = '';
    var turnstileInput = document.querySelector('[name="cf-turnstile-response"]');
    if (turnstileInput) turnstileToken = turnstileInput.value;

    if (rememberEmail.checked) {
      localStorage.setItem('qgc_email', email.value);
    } else {
      localStorage.removeItem('qgc_email');
    }

    var brancheWaarde = brancheSelect.value;
    if (brancheWaarde === 'anders') {
      var andersInput = document.querySelector('#branche-anders input');
      brancheWaarde = andersInput ? andersInput.value.trim() : '';
    }

    var data = {
      vraag: vraag.value.trim(),
      email: email.value.trim(),
      branche: brancheWaarde,
      geprobeerd: document.getElementById('qgc-geprobeerd').value.trim(),
      naam: naamCheck.checked ? naamInput.value.trim() : '',
      naamPubliceren: naamCheck.checked,
      nieuwsbriefOptin: document.getElementById('qgc-nieuwsbrief').checked,
      turnstileToken: turnstileToken,
      honeypot: ''
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Bezig met verzenden...';

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-QGC-Secret': QGC_SECRET },
      body: JSON.stringify(data)
    })
    .then(function() { showThanks(); })
    .catch(function() { showThanks(); });
  }

  sendBtn.addEventListener('click', doSubmit);
  submitBtn.addEventListener('click', doSubmit);

  function showThanks() {
    document.getElementById('qgc-form-area').style.display = 'none';
    document.getElementById('qgc-thanks-email').textContent = email.value;
    document.getElementById('qgc-thanks').style.display = 'block';
    document.querySelector('.qgc-intro').style.display = 'none';
  }

  function showError(msg) {
    var el = document.getElementById('qgc-error');
    document.getElementById('qgc-error-msg').textContent = msg;
    el.style.display = 'block';
    setTimeout(function() { el.style.display = 'none'; }, 4000);
  }
})();
</script>

---
title: "Stel je vraag"
hidemeta: true
disableShare: true
draft: true
---

<div class="qgc-intro">
  <p>Heb je een vraag over AI in je werk? Stel hem hier. Als je vraag relevant is voor andere ondernemers, schrijven wij er een artikel over. Je krijgt een e-mail als het live staat.</p>
</div>

<form id="qgc-form" class="qgc-form" novalidate>

  <!-- Honeypot - onzichtbaar voor mensen -->
  <div style="position:absolute;left:-9999px;top:-9999px;" aria-hidden="true">
    <input type="text" name="website" id="qgc-honeypot" tabindex="-1" autocomplete="off">
  </div>

  <div class="qgc-field">
    <label for="qgc-vraag">Je vraag *</label>
    <textarea id="qgc-vraag" name="vraag" minlength="10" maxlength="500" rows="4" required placeholder="Bijv. 'Welke AI-tool is het beste voor mijn boekhouding?'"></textarea>
    <span class="qgc-hint"><span id="qgc-teller">0</span>/500 tekens</span>
  </div>

  <div class="qgc-field">
    <label for="qgc-email">E-mailadres *</label>
    <input type="email" id="qgc-email" name="email" required placeholder="naam@bedrijf.nl">
    <label class="qgc-checkbox-label">
      <input type="checkbox" id="qgc-remember-email">
      <span>Onthoud mijn e-mailadres op dit apparaat</span>
    </label>
  </div>

  <div class="qgc-field">
    <label for="qgc-branche">In welke branche werk je? <span class="qgc-optional">(optioneel)</span></label>
    <input type="text" id="qgc-branche" name="branche" maxlength="100" placeholder="Bijv. Accountancy, Retail, Zorg">
  </div>

  <div class="qgc-field">
    <label for="qgc-geprobeerd">Wat heb je al geprobeerd? <span class="qgc-optional">(optioneel)</span></label>
    <input type="text" id="qgc-geprobeerd" name="geprobeerd" maxlength="200" placeholder="Bijv. ChatGPT, maar dat was te algemeen">
  </div>

  <div class="qgc-field">
    <label class="qgc-checkbox-label">
      <input type="checkbox" id="qgc-naam-check">
      <span>Ik wil met naam vermeld worden bij het artikel</span>
    </label>
    <div id="qgc-naam-wrapper" style="display:none; margin-top:8px;">
      <input type="text" id="qgc-naam" name="naam" maxlength="100" placeholder="Je naam">
    </div>
  </div>

  <div class="qgc-field">
    <label class="qgc-checkbox-label">
      <input type="checkbox" id="qgc-nieuwsbrief" name="nieuwsbriefOptin">
      <span>Ik wil ook de Geprompt-nieuwsbrief ontvangen</span>
    </label>
  </div>

  <!-- Cloudflare Turnstile widget -->
  <div class="qgc-field">
    <div class="cf-turnstile" data-sitekey="TURNSTILE_SITE_KEY_HIER" data-callback="onTurnstileSuccess" data-theme="dark"></div>
  </div>

  <button type="submit" id="qgc-submit" class="qgc-button" disabled>Verstuur je vraag</button>

  <p class="qgc-privacy">Je e-mailadres wordt alleen gebruikt om je te laten weten als je vraag is beantwoord. Lees onze <a href="/privacy/">privacyverklaring</a>.</p>
</form>

<div id="qgc-thanks" style="display:none;" class="qgc-thanks">
  <h3>Bedankt!</h3>
  <p>Als je vraag relevant is voor andere ondernemers, schrijven we er een artikel over. Je krijgt dan een e-mail op <strong id="qgc-thanks-email"></strong>.</p>
</div>

<div id="qgc-error" style="display:none;" class="qgc-error">
  <p id="qgc-error-msg">Er ging iets mis. Probeer het later opnieuw.</p>
</div>

<!-- Turnstile script -->
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

<script>
(function() {
  var form = document.getElementById('qgc-form');
  var vraag = document.getElementById('qgc-vraag');
  var email = document.getElementById('qgc-email');
  var teller = document.getElementById('qgc-teller');
  var submit = document.getElementById('qgc-submit');
  var naamCheck = document.getElementById('qgc-naam-check');
  var naamWrapper = document.getElementById('qgc-naam-wrapper');
  var rememberEmail = document.getElementById('qgc-remember-email');
  var honeypot = document.getElementById('qgc-honeypot');
  var turnstileReady = false;

  // Shared secret - wordt meegestuurd als header
  var QGC_SECRET = 'QGC_SHARED_SECRET_HIER';
  var WEBHOOK_URL = 'https://webhook.geprompt.nl/webhook/geprompt-qgc';

  // Tekenteller
  vraag.addEventListener('input', function() {
    teller.textContent = vraag.value.length;
  });

  // Naam veld tonen/verbergen
  naamCheck.addEventListener('change', function() {
    naamWrapper.style.display = naamCheck.checked ? 'block' : 'none';
  });

  // E-mail onthouden (localStorage)
  var savedEmail = localStorage.getItem('qgc_email');
  if (savedEmail) {
    email.value = savedEmail;
    rememberEmail.checked = true;
  }

  // Turnstile callback
  window.onTurnstileSuccess = function(token) {
    turnstileReady = true;
    submit.disabled = false;
  };

  // Formulier verzenden
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Client-side checks
    if (vraag.value.length < 10) {
      showError('Je vraag moet minimaal 10 tekens zijn.');
      return;
    }
    if (vraag.value.length > 500) {
      showError('Je vraag mag maximaal 500 tekens zijn.');
      return;
    }
    if (!email.value || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showError('Vul een geldig e-mailadres in.');
      return;
    }

    // Honeypot check
    if (honeypot.value) {
      // Bot gedetecteerd - doe alsof het gelukt is
      showThanks();
      return;
    }

    // Turnstile token ophalen
    var turnstileToken = '';
    var turnstileInput = form.querySelector('[name="cf-turnstile-response"]');
    if (turnstileInput) {
      turnstileToken = turnstileInput.value;
    }

    // E-mail opslaan als gewenst
    if (rememberEmail.checked) {
      localStorage.setItem('qgc_email', email.value);
    } else {
      localStorage.removeItem('qgc_email');
    }

    // Data samenstellen
    var data = {
      vraag: vraag.value.trim(),
      email: email.value.trim(),
      branche: document.getElementById('qgc-branche').value.trim(),
      geprobeerd: document.getElementById('qgc-geprobeerd').value.trim(),
      naam: naamCheck.checked ? document.getElementById('qgc-naam').value.trim() : '',
      naamPubliceren: naamCheck.checked,
      nieuwsbriefOptin: document.getElementById('qgc-nieuwsbrief').checked,
      turnstileToken: turnstileToken,
      honeypot: ''
    };

    // Verstuur
    submit.disabled = true;
    submit.textContent = 'Bezig met verzenden...';

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-QGC-Secret': QGC_SECRET
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      // Altijd bedankt tonen (ook bij 403 etc. — geen info lekken)
      showThanks();
    })
    .catch(function() {
      showThanks();
    });
  });

  function showThanks() {
    form.style.display = 'none';
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

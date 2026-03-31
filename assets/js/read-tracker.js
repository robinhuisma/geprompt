(function () {
  var STORAGE_KEY = 'geprompt_read';

  function getRead() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch(e) { return {}; }
  }
  function markRead(url) {
    var read = getRead();
    read[url] = Date.now();
    // Bewaar max 500 URLs
    var keys = Object.keys(read);
    if (keys.length > 500) {
      keys.sort(function(a,b){ return read[a]-read[b]; });
      delete read[keys[0]];
    }
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(read)); } catch(e) {}
  }

  function applyReadState() {
    var read = getRead();
    var cards = document.querySelectorAll('.post-entry');
    cards.forEach(function(card) {
      var link = card.querySelector('a');
      if (!link) return;
      var url = link.href.replace(/\/$/, '').replace(window.location.origin, '');
      if (read[url]) card.classList.add('geprompt-read');
      card.addEventListener('click', function() {
        markRead(url);
        card.classList.add('geprompt-read');
      }, { once: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyReadState);
  } else {
    applyReadState();
  }
})();

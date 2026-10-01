// ============================================================
// tika-app.js
// තික මාතිකා යෙදුම් logic
// tika-matika.html සමඟ භාවිත කිරීමට
// ============================================================

// ============================================================
// APPLICATION STATE
// ============================================================
var currentTikaIndex = 0;
var currentPadaIndex = 0;
var activeTikaTab = 'skandha';
var tikaBookmarks = JSON.parse(localStorage.getItem('tika_bookmarks') || '[]');

// ═══ NEW: අර්ථ විස්තර accordion තත්ත්වය ═══
var arthaVistaraOpenState = {
  nirukthi: true,   // පළමුවැන්න default විවෘත
  abhidheya: false,
  sangraha: false,
  vishesha: false
};

// ============================================================
// VIEW MANAGEMENT
// ============================================================
function showTikaView(viewId) {
  ['tika-view-list', 'tika-view-pada-detail', 'tika-view-bookmarks'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  var target = document.getElementById(viewId);
  if (target) target.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToTikaList() {
  showTikaView('tika-view-list');
  updateBreadcrumbTika('list');
  renderTikaList();
}

// ============================================================
// SCROLL TO TIKA LIST (බැනරය ක්ලික් කළ විට)
// ============================================================
function scrollToTikaList() {
  renderTikaList();
  var listContainer = document.getElementById('tika-list-container');
  if (listContainer) {
    setTimeout(function() {
      listContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

// ============================================================
// TIKA LIST RENDERING
// ============================================================
function renderTikaList() {
  var container = document.getElementById('tika-list-container');
  if (!container) return;
  container.innerHTML = '';

  if (typeof tikaFullData === 'undefined' || tikaFullData.length === 0) {
    container.innerHTML = 
      '<div class="text-center py-12 text-slate-500 text-sm">' +
        '<i class="fa-solid fa-circle-info text-4xl mb-3 opacity-30"></i><br>' +
        'තික මාතිකා දත්ත නොමැත.<br>' +
        '<span class="text-xs">(තික ගොනු load වී නොමැති විය හැක)</span>' +
      '</div>';
    return;
  }

  tikaFullData.forEach(function(tika, index) {
    var card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all';
    card.onclick = function() { openTikaDetail(index); };

    var padasHtml = tika.padas.map(function(p) {
      return '<span class="inline-block bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 text-amber-900 dark:text-saffron-300 text-xs px-2 py-1 rounded-lg mr-1 mb-1">' + p.name + '</span>';
    }).join('');

    card.innerHTML = 
      '<div class="flex items-center gap-2 mb-2">' +
        '<span class="w-8 h-8 rounded-full bg-saffron-500/20 text-saffron-600 font-bold text-sm flex items-center justify-center shrink-0">' + (index + 1) + '</span>' +
        '<h3 class="font-bold text-base text-maroon-900 dark:text-saffron-200">' + tika.title + '</h3>' +
      '</div>' +
      '<div class="flex flex-wrap">' + padasHtml + '</div>';
    container.appendChild(card);
  });
}

// ============================================================
// OPEN TIKA DETAIL
// ============================================================
function openTikaDetail(tikaIndex) {
  currentTikaIndex = tikaIndex;
  var tika = tikaFullData[tikaIndex];
  if (!tika) return;

  showTikaView('tika-view-pada-detail');
  updateBreadcrumbTika('detail');

  document.getElementById('tika-detail-title').innerText = tika.title;
  document.getElementById('tika-detail-subtitle').innerText = 
    'පද ' + tika.padas.length + ' කින් යුක්ත මාතිකා';

  renderTikaPadaTabs(tika.padas);
  selectTikaPada(0);
}

function renderTikaPadaTabs(padas) {
  var container = document.getElementById('tika-pada-tabs-container');
  if (!container) return;
  container.innerHTML = '';

  if (!padas || padas.length === 0) {
    container.innerHTML = '<div class="text-slate-500 text-xs">පද නොමැත.</div>';
    document.getElementById('tika-pada-detail-breakdown').classList.add('hidden');
    return;
  }

  document.getElementById('tika-pada-detail-breakdown').classList.remove('hidden');

  padas.forEach(function(pada, index) {
    var btn = document.createElement('button');
    btn.id = 'tika-pada-tab-' + index;
    btn.className = 'w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ' +
      (index === 0
        ? 'bg-saffron-500/20 border-saffron-500 text-maroon-900 dark:text-saffron-200 font-bold'
        : 'bg-white dark:bg-slate-800 border-amber-200 dark:border-slate-700 text-slate-700 dark:text-slate-300');
    btn.onclick = function() { selectTikaPada(index); };

    btn.innerHTML = 
      '<div class="flex items-center gap-2 min-w-0">' +
        '<span class="w-6 h-6 rounded-full bg-saffron-500 text-maroon-950 font-bold text-xs flex items-center justify-center shrink-0">' + (index + 1) + '</span>' +
        '<span class="text-sm font-bold truncate">' + pada.name + '</span>' +
      '</div>' +
      '<span class="text-xs text-slate-500 truncate max-w-[45%] hidden sm:inline">' + (pada.desc || '') + '</span>';
    container.appendChild(btn);
  });
}

// ============================================================
// SELECT PADA - පදයේ අර්ථය (padaArtha) ද පෙන්වයි
// ============================================================
function selectTikaPada(padaIndex) {
  currentPadaIndex = padaIndex;
  var tika = tikaFullData[currentTikaIndex];
  if (!tika) return;

  var pada = tika.padas[padaIndex];
  if (!pada) return;

  // පද tabs යාවත්කාලීන කරන්න
  tika.padas.forEach(function(_, idx) {
    var b = document.getElementById('tika-pada-tab-' + idx);
    if (b) {
      if (idx === padaIndex) {
        b.className = 'w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between bg-saffron-500/20 border-saffron-500 text-maroon-900 dark:text-saffron-200 font-bold';
      } else {
        b.className = 'w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between bg-white dark:bg-slate-800 border-amber-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
      }
    }
  });

  // පදයේ නම සහ කෙටි විස්තරය
  var nameEl = document.getElementById('tika-pada-name');
  if (nameEl) nameEl.innerText = pada.name;

  var descEl = document.getElementById('tika-pada-desc');
  if (descEl) descEl.innerText = pada.desc || '';

  // ============================================================
  // පදයේ අර්ථය (padaArtha) පෙන්වීම
  // ============================================================
  var padaArthaSection = document.getElementById('tika-pada-artha-section');
  var padaArthaText = document.getElementById('tika-pada-artha-text');
  if (padaArthaSection && padaArthaText) {
    if (pada.padaArtha && String(pada.padaArtha).trim() !== '') {
      // Markdown බෝල්ඩ් (**text**) HTML බවට පරිවර්තනය කරන්න
      padaArthaText.innerHTML = formatPadaArtha(pada.padaArtha);
      padaArthaSection.classList.remove('hidden');
    } else {
      padaArthaSection.classList.add('hidden');
    }
  }

  // ═══ NEW: විස්තරාත්මක විවරණය (arthaVistara) render කරන්න ═══
  renderArthaVistara(pada);

  // ============================================================
  // ස්වරූපාර්ථය පෙන්වීම
  // ============================================================
  var svarthaText = document.getElementById('tika-pada-svartha');
  if (svarthaText) {
    svarthaText.innerText = pada.svartha || 'ස්වරූපාර්ථ විස්තරය ඇතුළත් කර නැත.';
  }

  // Bookmark තත්ත්වය යාවත්කාලීන කරන්න
  updateTikaBookmarkButtonState();

  // Breakdown lists පෙන්වන්න
  renderTikaBreakdownLists(pada);
  switchTikaTab('skandha');

  // ============================================================
  // ත්‍රික මුක්ත ධර්ම පෙන්වීම
  // ============================================================
  var muktaSection = document.getElementById('tika-mukta-section');
  var muktaContent = document.getElementById('tika-mukta-content');
  if (muktaSection && muktaContent) {
    if (pada.mukta && pada.mukta !== 'නැත' && String(pada.mukta).trim() !== '' && String(pada.mukta).trim() !== '-') {
      muktaContent.innerText = pada.mukta;
      muktaSection.classList.remove('hidden');
    } else {
      muktaSection.classList.add('hidden');
    }
  }

  // ============================================================
  // මග්ගාරම්මණ තිකය හඳුනා ගැනීම
  // ============================================================
  if (tika.title && tika.title.indexOf('මග්ගාරම්මණ') > -1 && tika.detailedAnalysis) {
    renderMaggarammanaExtras(tika, pada, padaIndex);
  } else {
    var extras = document.getElementById('maggarammana-extras');
    if (extras) extras.classList.add('hidden');
  }
}

// ════════════════════════════════════════════════════════════
// ═══ NEW: PADA ARTHA FORMAT HELPER ═══
// ════════════════════════════════════════════════════════════
function formatPadaArtha(text) {
  if (!text) return '';
  // **bold** → <strong>
  var formatted = String(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-maroon-900 dark:text-saffron-300">$1</strong>')
    // newlines → <br>
    .replace(/\n/g, '<br>');
  return formatted;
}

// ════════════════════════════════════════════════════════════
// ═══ NEW: ARTHA VISTARA RENDERING ═══
// ════════════════════════════════════════════════════════════

/**
 * විස්තරාත්මක විවරණය (arthaVistara) render කරයි.
 * pada.arthaVistara නොමැති නම් section එක සඟවයි.
 */
function renderArthaVistara(pada) {
  var section = document.getElementById('tika-artha-vistara-section');
  var content = document.getElementById('artha-vistara-content');
  var chevron = document.getElementById('artha-vistara-chevron');

  if (!section || !content) return;

  if (!pada || !pada.arthaVistara) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');

  var av = pada.arthaVistara;
  var html = '';

  // --- නිරුක්ති විශ්ලේෂණය ---
  if (av.nirukthi && av.nirukthi.items && av.nirukthi.items.length > 0) {
    html += renderArthaVistaraBlock(
      'nirukthi',
      'නිරුක්ති විශ්ලේෂණය',
      'fa-book',
      'text-blue-600 dark:text-blue-400',
      av.nirukthi.intro,
      renderNirukthiItems(av.nirukthi.items)
    );
  }

  // --- අභිධෙය්‍යාර්ථ විස්තරය ---
  if (av.abhidheya && av.abhidheya.items && av.abhidheya.items.length > 0) {
    html += renderArthaVistaraBlock(
      'abhidheya',
      'අභිධෙය්‍යාර්ථ විස්තරය',
      'fa-magnifying-glass-chart',
      'text-purple-600 dark:text-purple-400',
      av.abhidheya.intro,
      renderAbhidheyaItems(av.abhidheya.items)
    );
  }

  // --- සංග්‍රහ විස්තරය ---
  if (av.sangraha && av.sangraha.items && av.sangraha.items.length > 0) {
    html += renderArthaVistaraBlock(
      'sangraha',
      'සංග්‍රහ විස්තරය',
      'fa-layer-group',
      'text-amber-600 dark:text-amber-400',
      av.sangraha.intro,
      renderSangrahaItems(av.sangraha.items)
    );
  }

  // --- විශේෂ සටහන් ---
  if (av.vishesha && av.vishesha.items && av.vishesha.items.length > 0) {
    html += renderArthaVistaraBlock(
      'vishesha',
      'විශේෂ සටහන්',
      'fa-circle-info',
      'text-saffron-600 dark:text-saffron-400',
      av.vishesha.intro,
      renderVisheshaItems(av.vishesha.items)
    );
  }

  if (html === '') {
    section.classList.add('hidden');
    return;
  }

  content.innerHTML = html;

  // Default open state යාවත්කාලීන කරන්න
  Object.keys(arthaVistaraOpenState).forEach(function(key) {
    var body = document.getElementById('av-body-' + key);
    var chev = document.getElementById('av-chevron-' + key);
    if (!body) return;
    if (arthaVistaraOpenState[key]) {
      body.classList.remove('hidden');
      if (chev) chev.classList.add('rotate-180');
    } else {
      body.classList.add('hidden');
      if (chev) chev.classList.remove('rotate-180');
    }
  });

  // Chevron එක reset කරන්න (main section)
  if (chevron) chevron.classList.remove('rotate-180');
}

/**
 * එක් විවරණ කොටසක් (accordion block) HTML ලෙස ජනනය කරයි.
 */
function renderArthaVistaraBlock(key, title, icon, iconColor, intro, bodyHtml) {
  var isOpen = arthaVistaraOpenState[key] ? '' : 'hidden';
  var chevRotate = arthaVistaraOpenState[key] ? 'rotate-180' : '';

  return '' +
    '<div class="border border-amber-200 dark:border-slate-700 rounded-xl overflow-hidden bg-amber-50/50 dark:bg-slate-900/50">' +
      '<button onclick="toggleArthaVistaraBlock(\'' + key + '\')" ' +
              'class="w-full flex items-center justify-between gap-2 p-3 text-left hover:bg-amber-100/60 dark:hover:bg-slate-800 transition-colors">' +
        '<span class="flex items-center gap-2 min-w-0">' +
          '<i class="fa-solid ' + icon + ' ' + iconColor + ' text-sm shrink-0"></i>' +
          '<span class="font-bold text-sm text-maroon-900 dark:text-saffron-200 truncate">' + title + '</span>' +
        '</span>' +
        '<i id="av-chevron-' + key + '" class="fa-solid fa-chevron-down text-saffron-600 text-xs transition-transform ' + chevRotate + '"></i>' +
      '</button>' +
      '<div id="av-body-' + key + '" class="' + isOpen + ' p-3 pt-0 space-y-3">' +
        (intro ? '<p class="text-xs text-slate-600 dark:text-slate-400 italic mt-1 text-justify">' + intro + '</p>' : '') +
        bodyHtml +
      '</div>' +
    '</div>';
}

/**
 * නිරුක්ති අයිතම render කරයි.
 */
function renderNirukthiItems(items) {
  var html = '<div class="space-y-3">';
  items.forEach(function(item) {
    html += '' +
      '<div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3 space-y-2">' +
        '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200 flex items-center gap-1.5">' +
          '<i class="fa-solid fa-tag text-saffron-600 text-xs"></i> ' + item.name +
        '</div>' +
        (item.pali ? 
          '<div class="text-xs text-amber-800 dark:text-amber-300 italic bg-amber-50 dark:bg-slate-900 p-2 rounded border border-amber-100 dark:border-slate-700">' +
            '<i class="fa-solid fa-language text-saffron-500"></i> ' + item.pali +
          '</div>' : '') +
        (item.artha ? 
          '<p class="text-xs text-slate-700 dark:text-slate-300">' +
            '<strong class="text-maroon-900 dark:text-saffron-300">අර්ථය:</strong> ' + item.artha +
          '</p>' : '') +
        (item.vistara ? 
          '<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-justify">' + item.vistara + '</p>' : '') +
      '</div>';
  });
  html += '</div>';
  return html;
}

/**
 * අභිධෙය්‍යාර්ථ අයිතම render කරයි.
 */
function renderAbhidheyaItems(items) {
  var html = '<div class="space-y-2">';
  items.forEach(function(item) {
    html += '' +
      '<div class="breakdown-item">' +
        '<span class="num"><i class="fa-solid fa-cube text-saffron-600 text-xs"></i></span>' +
        '<span class="name">' + item.name +
          (item.count ? ' <span class="text-xs text-saffron-600 font-bold">(' + item.count + ')</span>' : '') +
        '</span>' +
        '<span class="value">' + item.vistara + '</span>' +
      '</div>';
  });
  html += '</div>';
  return html;
}

/**
 * සංග්‍රහ අයිතම render කරයි.
 */
function renderSangrahaItems(items) {
  var html = '<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">';
  items.forEach(function(item) {
    html += '' +
      '<div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3">' +
        '<div class="flex items-center justify-between mb-1">' +
          '<span class="font-bold text-xs text-maroon-900 dark:text-saffron-200">' + item.name + '</span>' +
          '<span class="bg-saffron-500 text-maroon-950 font-bold px-2 py-0.5 rounded-full text-[10px]">' + item.count + '</span>' +
        '</div>' +
        '<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-justify">' + item.vistara + '</p>' +
      '</div>';
  });
  html += '</div>';
  return html;
}

/**
 * විශේෂ සටහන් render කරයි.
 */
function renderVisheshaItems(items) {
  var html = '<div class="space-y-2">';
  items.forEach(function(item, idx) {
    html += '' +
      '<div class="bg-gradient-to-br from-amber-50 to-amber-100/60 dark:from-slate-900 dark:to-slate-800 border border-amber-300 dark:border-slate-700 rounded-lg p-3">' +
        '<div class="flex items-start gap-2 mb-1.5">' +
          '<span class="w-5 h-5 rounded-full bg-saffron-500 text-maroon-950 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">' + (idx + 1) + '</span>' +
          '<div class="font-bold text-xs text-maroon-900 dark:text-saffron-200">' + item.title + '</div>' +
        '</div>' +
        '<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed ml-7 text-justify">' + item.content + '</p>' +
      '</div>';
  });
  html += '</div>';
  return html;
}

/**
 * එක් විවරණ කොටසක් toggle කරයි (accordion).
 */
function toggleArthaVistaraBlock(key) {
  arthaVistaraOpenState[key] = !arthaVistaraOpenState[key];
  var body = document.getElementById('av-body-' + key);
  var chev = document.getElementById('av-chevron-' + key);
  if (!body) return;
  if (arthaVistaraOpenState[key]) {
    body.classList.remove('hidden');
    if (chev) chev.classList.add('rotate-180');
  } else {
    body.classList.add('hidden');
    if (chev) chev.classList.remove('rotate-180');
  }
}

/**
 * මුළු විස්තරාත්මක විවරණ කොටසම toggle කරයි.
 */
function toggleArthaVistaraSection() {
  var content = document.getElementById('artha-vistara-content');
  var chevron = document.getElementById('artha-vistara-chevron');
  if (!content) return;
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    if (chevron) chevron.classList.add('rotate-180');
  } else {
    content.classList.add('hidden');
    if (chevron) chevron.classList.remove('rotate-180');
  }
}
// ============================================================
// BREAKDOWN LISTS — පිරවූ ගණන / මුළු ගණන (නියත)
// ============================================================
function renderTikaBreakdownLists(pada) {
  // ─────────────────────────────────────────────
  // ස්කන්ධ — පිරවූ / 5 (නියත)
  // ─────────────────────────────────────────────
  var sList = document.getElementById('tika-skandha-list');
  if (sList) {
    sList.innerHTML = '';
    var sFilled = 0;
    (pada.skandha || []).forEach(function(s) {
      if (s.value && s.value !== 'නැත' && s.value !== '-' && s.value !== '×') {
        sFilled++;
      }
      var div = document.createElement('div');
      div.className = 'breakdown-item';
      div.innerHTML = '<span class="num">' + s.num + '</span><span class="name">' + s.name + '</span><span class="value">' + s.value + '</span>';
      sList.appendChild(div);
    });
    var scEl = document.getElementById('tika-skandha-count');
    if (scEl) scEl.innerText = sFilled + ' / 5';   // ← නියත 5
  }

  // ─────────────────────────────────────────────
  // ආයතන — පිරවූ / 12 (නියත)
  // ─────────────────────────────────────────────
  var aList = document.getElementById('tika-ayatana-list');
  if (aList) {
    aList.innerHTML = '';
    var aFilled = 0;
    (pada.ayatana || []).forEach(function(a) {
      if (a.value && a.value !== 'නැත' && a.value !== '-' && a.value !== '×') {
        aFilled++;
      }
      var div = document.createElement('div');
      div.className = 'breakdown-item';
      div.innerHTML = '<span class="num">' + a.num + '</span><span class="name">' + a.name + '</span><span class="value">' + a.value + '</span>';
      aList.appendChild(div);
    });
    var acEl = document.getElementById('tika-ayatana-count');
    if (acEl) acEl.innerText = aFilled + ' / 12';   // ← නියත 12
  }

  // ─────────────────────────────────────────────
  // ධාතු — පිරවූ / 18 (නියත)
  // ─────────────────────────────────────────────
  var dList = document.getElementById('tika-dhatu-list');
  if (dList) {
    dList.innerHTML = '';
    var dFilled = 0;
    (pada.dhatu || []).forEach(function(d) {
      if (d.value && d.value !== 'නැත' && d.value !== '-' && d.value !== '×') {
        dFilled++;
      }
      var div = document.createElement('div');
      div.className = 'breakdown-item';
      div.innerHTML = '<span class="num">' + d.num + '</span><span class="name">' + d.name + '</span><span class="value">' + d.value + '</span>';
      dList.appendChild(div);
    });
    var dcEl = document.getElementById('tika-dhatu-count');
    if (dcEl) dcEl.innerText = dFilled + ' / 18';   // ← නියත 18
  }

  // ─────────────────────────────────────────────
  // සත්‍ය — පිරවූ / 4 (නියත)
  // ─────────────────────────────────────────────
  var satList = document.getElementById('tika-sathya-list');
  if (satList) {
    satList.innerHTML = '';
    var satFilled = 0;
    (pada.sathya || []).forEach(function(sat) {
      if (sat.value && sat.value !== 'නැත' && sat.value !== '-' && sat.value !== '×' && sat.value !== 'සතය විනිර්මුක්ත') {
        satFilled++;
      }
      var div = document.createElement('div');
      div.className = 'breakdown-item';
      div.innerHTML = '<span class="num">' + sat.num + '</span><span class="name">' + sat.name + '</span><span class="value">' + sat.value + '</span>';
      satList.appendChild(div);
    });
    var satcEl = document.getElementById('tika-sathya-count');
    if (satcEl) satcEl.innerText = satFilled + ' / 4';   // ← නියත 4
  }
}

// ============================================================
// TAB SWITCHING
// ============================================================
function switchTikaTab(tabName) {
  activeTikaTab = tabName;
  ['skandha', 'ayatana', 'dhatu', 'sathya'].forEach(function(t) {
    var btn = document.getElementById('tika-tab-btn-' + t);
    var panel = document.getElementById('tika-panel-' + t);
    if (!btn || !panel) return;

    if (t === tabName) {
      btn.className = 'tab-btn flex-1 min-w-[110px] px-3 py-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 border-saffron-600 text-saffron-700 dark:text-saffron-400 bg-saffron-500/10';
      panel.classList.remove('hidden');
    } else {
      btn.className = 'tab-btn flex-1 min-w-[110px] px-3 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 border-transparent text-amber-800 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700';
      panel.classList.add('hidden');
    }
  });
}

// ============================================================
// BREADCRUMB
// ============================================================
function updateBreadcrumbTika(view) {
  var sep = document.getElementById('bc-sep-tika');
  var span = document.getElementById('bc-tika');
  if (!sep || !span) return;

  if (view === 'detail' && tikaFullData[currentTikaIndex]) {
    sep.classList.remove('hidden');
    span.classList.remove('hidden');
    span.innerText = tikaFullData[currentTikaIndex].title;
  } else if (view === 'bookmarks') {
    sep.classList.remove('hidden');
    span.classList.remove('hidden');
    span.innerText = 'සුරැකි මාතිකා';
  } else {
    sep.classList.add('hidden');
    span.classList.add('hidden');
  }
}

// ============================================================
// BOOKMARKS
// ============================================================
function toggleTikaBookmark() {
  var id = 'tika_' + currentTikaIndex + '_' + currentPadaIndex;
  var tika = tikaFullData[currentTikaIndex];
  if (!tika) return;
  var pada = tika.padas[currentPadaIndex];
  if (!pada) return;

  var existingIdx = tikaBookmarks.findIndex(function(b) { return b.id === id; });
  if (existingIdx > -1) {
    tikaBookmarks.splice(existingIdx, 1);
  } else {
    tikaBookmarks.push({
      id: id,
      tikaIndex: currentTikaIndex,
      padaIndex: currentPadaIndex,
      tikaTitle: tika.title,
      padaName: pada.name
    });
  }

  localStorage.setItem('tika_bookmarks', JSON.stringify(tikaBookmarks));
  updateTikaBookmarkBadge();
  updateTikaBookmarkButtonState();
}

function updateTikaBookmarkButtonState() {
  var id = 'tika_' + currentTikaIndex + '_' + currentPadaIndex;
  var icon = document.getElementById('tika-bookmark-icon');
  if (!icon) return;
  var isFav = tikaBookmarks.some(function(b) { return b.id === id; });
  icon.className = isFav ? 'fa-solid fa-bookmark text-saffron-500' : 'fa-regular fa-bookmark';
}

function updateTikaBookmarkBadge() {
  var badge = document.getElementById('tika-fav-badge');
  if (!badge) return;
  if (tikaBookmarks.length > 0) {
    badge.classList.remove('hidden');
    badge.innerText = tikaBookmarks.length;
  } else {
    badge.classList.add('hidden');
  }
}

function showTikaBookmarksView() {
  showTikaView('tika-view-bookmarks');
  updateBreadcrumbTika('bookmarks');
  renderTikaBookmarks();
}

function renderTikaBookmarks() {
  var container = document.getElementById('tika-bookmarks-container');
  if (!container) return;
  container.innerHTML = '';

  if (tikaBookmarks.length === 0) {
    container.innerHTML = 
      '<div class="text-center py-12 text-slate-500 text-sm">' +
        '<i class="fa-regular fa-bookmark text-4xl mb-3 opacity-30"></i><br>' +
        'සුරැකි මාතිකා පද කිසිවක් නොමැත.' +
      '</div>';
    return;
  }

  tikaBookmarks.forEach(function(b) {
    var card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all flex items-center justify-between gap-2';
    card.onclick = function(e) {
      if (e.target.closest('button')) return;
      currentTikaIndex = b.tikaIndex;
      showTikaView('tika-view-pada-detail');
      openTikaDetail(b.tikaIndex);
      setTimeout(function() { selectTikaPada(b.padaIndex); }, 100);
    };

    card.innerHTML = 
      '<div class="flex-1 min-w-0">' +
        '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-saffron-500/20 text-saffron-700 dark:text-saffron-300 mb-1 inline-block">' + b.tikaTitle + '</span>' +
        '<h4 class="font-bold text-sm text-maroon-900 dark:text-saffron-200 truncate">' + b.padaName + '</h4>' +
      '</div>' +
      '<button onclick="event.stopPropagation(); removeTikaBookmark(\'' + b.id + '\')" class="text-slate-400 hover:text-red-500 p-2 transition-colors shrink-0">' +
        '<i class="fa-solid fa-trash-can text-sm"></i>' +
      '</button>';
    container.appendChild(card);
  });
}

function removeTikaBookmark(id) {
  tikaBookmarks = tikaBookmarks.filter(function(b) { return b.id !== id; });
  localStorage.setItem('tika_bookmarks', JSON.stringify(tikaBookmarks));
  updateTikaBookmarkBadge();
  renderTikaBookmarks();
}

// ============================================================
// SEARCH
// ============================================================
function handleTikaSearch(query) {
  var clearBtn = document.getElementById('tika-search-clear');
  if (!query || query.trim() === '') {
    if (clearBtn) clearBtn.classList.add('hidden');
    renderTikaList();
    return;
  }
  if (clearBtn) clearBtn.classList.remove('hidden');

  var q = query.toLowerCase().trim();
  var container = document.getElementById('tika-list-container');
  if (!container) return;
  container.innerHTML = '';

  var results = [];
  tikaFullData.forEach(function(tika, tIdx) {
    var tikaMatch = tika.title.toLowerCase().indexOf(q) > -1;
    if (tikaMatch) {
      results.push({ tikaIndex: tIdx, padaIndex: 0, title: tika.title, subtitle: 'තිකය', matchType: 'තිකය' });
    }
    tika.padas.forEach(function(pada, pIdx) {
      var nameMatch = pada.name.toLowerCase().indexOf(q) > -1;
      var descMatch = pada.desc && pada.desc.toLowerCase().indexOf(q) > -1;
      var svarthaMatch = pada.svartha && pada.svartha.toLowerCase().indexOf(q) > -1;
      var padaArthaMatch = pada.padaArtha && pada.padaArtha.toLowerCase().indexOf(q) > -1;

      if (nameMatch || descMatch || svarthaMatch || padaArthaMatch) {
        if (!results.some(function(r) { return r.tikaIndex === tIdx && r.padaIndex === pIdx; })) {
          var matchType = nameMatch ? 'පදය' : (descMatch ? 'විස්තරය' : (padaArthaMatch ? 'පදයේ අර්ථය' : 'ස්වරූපාර්ථය'));
          results.push({ 
            tikaIndex: tIdx, 
            padaIndex: pIdx, 
            title: tika.title, 
            subtitle: pada.name,
            matchType: matchType
          });
        }
      }
    });
  });

  if (results.length === 0) {
    container.innerHTML = '<div class="text-center py-8 text-slate-500 text-sm">ගැලපෙන ප්‍රතිඵල හමු නොවීය.</div>';
    return;
  }

  results.forEach(function(r) {
    var card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all';
    card.onclick = function() {
      openTikaDetail(r.tikaIndex);
      setTimeout(function() { selectTikaPada(r.padaIndex); }, 100);
    };
    card.innerHTML = 
      '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-saffron-500/20 text-saffron-700 dark:text-saffron-300 mb-1 inline-block">' + r.title + ' (' + r.matchType + ')</span>' +
      '<h4 class="font-bold text-sm text-maroon-900 dark:text-saffron-200">' + r.subtitle + '</h4>';
    container.appendChild(card);
  });
}

function clearTikaSearch() {
  var input = document.getElementById('tika-search');
  if (input) input.value = '';
  var clearBtn = document.getElementById('tika-search-clear');
  if (clearBtn) clearBtn.classList.add('hidden');
  renderTikaList();
}

// ============================================================
// මග්ගාරම්මණ තිකයට විශේෂිත දත්ත පෙන්වීම
// ============================================================
function renderMaggarammanaExtras(item, pada, padaIndex) {
  var container = document.getElementById('maggarammana-extras');
  if (!container) return;

  container.classList.remove('hidden');

  renderNirukthiAnalysis(item.nirukthiAnalysis);
  renderDetailedAnalysis(item.detailedAnalysis, padaIndex);
  renderArthaVikalpa(item.detailedAnalysis, padaIndex);
  renderPaccayaAnalysis(item.paccayaAnalysis);
  renderMaggaNaKarana(item.maggaArammanaNaKarana);
  renderRelatedTikas(item.relatedTikas);
  renderSpecialNotes(item.specialNotes);
}

function renderNirukthiAnalysis(data) {
  var section = document.getElementById('mg-nirukthi-section');
  var intro = document.getElementById('mg-nirukthi-intro');
  var list = document.getElementById('mg-nirukthi-list');
  if (!section || !intro || !list) return;

  if (!data || !data.items || data.items.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  intro.innerText = data.introduction || '';
  list.innerHTML = '';

  data.items.forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3 space-y-1.5';
    div.innerHTML = 
      '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200">' +
        '<i class="fa-solid fa-bookmark text-saffron-600 text-xs"></i> ' + item.name +
      '</div>' +
      '<div class="text-xs text-amber-800 dark:text-amber-300 italic bg-white dark:bg-slate-800 p-2 rounded border border-amber-100 dark:border-slate-700">' +
        '<i class="fa-solid fa-language"></i> ' + item.pali +
      '</div>' +
      '<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">' + item.description + '</p>' +
      (item.vyakarana ? '<p class="text-xs text-slate-500 dark:text-slate-400"><strong>ව්‍යාකරණය:</strong> ' + item.vyakarana + '</p>' : '');
    list.appendChild(div);
  });
}

function renderDetailedAnalysis(data, padaIndex) {
  var section = document.getElementById('mg-detailed-section');
  var intro = document.getElementById('mg-detailed-intro');
  var list = document.getElementById('mg-detailed-list');
  if (!section || !intro || !list) return;

  if (!data || !data.sections || data.sections.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  intro.innerText = data.introduction || '';
  list.innerHTML = '';

  var sectionData = data.sections[padaIndex];
  if (!sectionData) {
    data.sections.forEach(function(sec) {
      list.appendChild(createDetailedSection(sec));
    });
    return;
  }

  list.appendChild(createDetailedSection(sectionData));
}

function createDetailedSection(sec) {
  var div = document.createElement('div');
  div.className = 'bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-4 space-y-3';

  var html = 
    '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200 border-b border-amber-200 dark:border-slate-700 pb-2">' +
      '<i class="fa-solid fa-cube text-saffron-600"></i> ' + sec.title +
      (sec.subtitle ? ' <span class="text-xs text-saffron-600 font-medium ml-1">(' + sec.subtitle + ')</span>' : '') +
    '</div>';

  if (sec.nirukthi) {
    html += '<div class="text-xs text-amber-800 dark:text-amber-300 italic bg-white dark:bg-slate-800 p-2 rounded border border-amber-100 dark:border-slate-700">' +
              '<i class="fa-solid fa-quote-left text-saffron-500"></i> ' + sec.nirukthi +
            '</div>';
  }

  if (sec.cittaBreakdown && sec.cittaBreakdown.length > 0) {
    html += '<div class="space-y-2"><div class="text-xs font-bold text-maroon-900 dark:text-saffron-300 uppercase">සිත් විස්තරය:</div>';
    sec.cittaBreakdown.forEach(function(c) {
      html += '<div class="breakdown-item">' +
                '<span class="num"><i class="fa-solid fa-brain text-blue-500 text-xs"></i></span>' +
                '<span class="name">' + c.name + ' <span class="text-xs text-saffron-600">(' + c.count + ')</span></span>' +
                '<span class="value">' + c.description + '</span>' +
              '</div>';
    });
    html += '</div>';
  }

  if (sec.cetasikaBreakdown) {
    html += '<div class="bg-white dark:bg-slate-800 border border-saffron-500/30 rounded-lg p-2">' +
              '<div class="text-xs font-bold text-maroon-900 dark:text-saffron-300 mb-1"><i class="fa-solid fa-heart text-red-500"></i> චෛතසික විස්තරය:</div>' +
              '<p class="text-xs text-slate-700 dark:text-slate-300">' + sec.cetasikaBreakdown + '</p>' +
            '</div>';
  }

  if (sec.puggalaBreakdown && sec.puggalaBreakdown.length > 0) {
    html += '<div class="space-y-2"><div class="text-xs font-bold text-maroon-900 dark:text-saffron-300 uppercase">පුද්ගල විස්තරය:</div>';
    sec.puggalaBreakdown.forEach(function(p) {
      html += '<div class="breakdown-item">' +
                '<span class="num"><i class="fa-solid fa-user text-green-600 text-xs"></i></span>' +
                '<span class="name">' + p.name + '</span>' +
                '<span class="value">' + p.description + '</span>' +
              '</div>';
    });
    html += '</div>';
  }

  if (sec.puggalaNotes) {
    html += '<div class="bg-amber-100 dark:bg-slate-800 border-l-4 border-saffron-500 p-3 rounded">' +
              '<div class="text-xs font-bold text-maroon-900 dark:text-saffron-300 mb-1"><i class="fa-solid fa-lightbulb"></i> විශේෂ සටහන:</div>' +
              '<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">' + sec.puggalaNotes + '</p>' +
            '</div>';
  }

  if (sec.adhipatiDhamma && sec.adhipatiDhamma.length > 0) {
    html += '<div class="space-y-2"><div class="text-xs font-bold text-maroon-900 dark:text-saffron-300 uppercase">අධිපති ධර්ම සතර:</div>';
    sec.adhipatiDhamma.forEach(function(a) {
      html += '<div class="breakdown-item">' +
                '<span class="num"><i class="fa-solid fa-crown text-yellow-500 text-xs"></i></span>' +
                '<span class="name">' + a.name + '</span>' +
                '<span class="value">' + a.description + '</span>' +
              '</div>';
    });
    html += '</div>';
  }

  if (sec.adhipatiNotes) {
    html += '<div class="bg-amber-100 dark:bg-slate-800 border-l-4 border-saffron-500 p-3 rounded">' +
              '<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">' + sec.adhipatiNotes + '</p>' +
            '</div>';
  }

  div.innerHTML = html;
  return div;
}

function renderArthaVikalpa(detailedAnalysis, padaIndex) {
  var section = document.getElementById('mg-artavikalpa-section');
  var list = document.getElementById('mg-artavikalpa-list');
  if (!section || !list) return;

  if (!detailedAnalysis || !detailedAnalysis.sections) {
    section.classList.add('hidden');
    return;
  }

  var sectionData = detailedAnalysis.sections[padaIndex];
  if (!sectionData || !sectionData.artaVikalpa || sectionData.artaVikalpa.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  list.innerHTML = '';

  sectionData.artaVikalpa.forEach(function(v, idx) {
    var div = document.createElement('div');
    div.className = 'bg-gradient-to-br from-amber-50 to-amber-100/60 dark:from-slate-900 dark:to-slate-800 border border-amber-300 dark:border-slate-700 rounded-xl p-4 space-y-2';
    div.innerHTML = 
      '<div class="flex items-center gap-2 mb-2">' +
        '<span class="w-7 h-7 rounded-full bg-saffron-500 text-maroon-950 font-bold text-xs flex items-center justify-center shrink-0">' + (idx+1) + '</span>' +
        '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200">' + v.name + '</div>' +
      '</div>' +
      '<div class="text-xs text-amber-800 dark:text-amber-300 italic bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-amber-100 dark:border-slate-700">' +
        '<i class="fa-solid fa-language text-saffron-500"></i> ' + v.pali +
      '</div>' +
      '<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">' +
        '<strong class="text-maroon-900 dark:text-saffron-300">අර්ථය:</strong> ' + v.description +
      '</p>' +
      '<div class="bg-saffron-500/10 border-l-4 border-saffron-500 p-3 rounded">' +
        '<div class="text-xs font-bold text-maroon-900 dark:text-saffron-300 mb-1"><i class="fa-solid fa-check-circle text-green-600"></i> ප්‍රතිඵලය:</div>' +
        '<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">' + v.result + '</p>' +
      '</div>';
    list.appendChild(div);
  });
}

function renderPaccayaAnalysis(data) {
  var section = document.getElementById('mg-paccaya-section');
  var intro = document.getElementById('mg-paccaya-intro');
  var list = document.getElementById('mg-paccaya-list');
  if (!section || !intro || !list) return;

  if (!data || !data.items || data.items.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  intro.innerText = data.introduction || '';
  list.innerHTML = '';

  data.items.forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'breakdown-item';
    div.innerHTML = 
      '<span class="num"><i class="fa-solid fa-link text-saffron-600 text-xs"></i></span>' +
      '<span class="name">' + item.name + '</span>' +
      '<span class="value">' + item.description + '</span>';
    list.appendChild(div);
  });
}

function renderMaggaNaKarana(data) {
  var section = document.getElementById('mg-maggaNaKarana-section');
  var desc = document.getElementById('mg-maggaNaKarana-desc');
  var list = document.getElementById('mg-maggaNaKarana-list');
  var summary = document.getElementById('mg-maggaNaKarana-summary');
  if (!section || !desc || !list || !summary) return;

  if (!data || !data.items || data.items.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  desc.innerText = data.description || '';
  summary.innerText = data.summary || '';
  list.innerHTML = '';

  data.items.forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'breakdown-item';
    div.innerHTML = 
      '<span class="num">' + item.count + '</span>' +
      '<span class="name">' + item.name + '</span>' +
      '<span class="value">' + item.description + '</span>';
    list.appendChild(div);
  });
}

function renderRelatedTikas(data) {
  var section = document.getElementById('mg-related-section');
  var list = document.getElementById('mg-related-list');
  if (!section || !list) return;

  if (!data || data.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  list.innerHTML = '';

  data.forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3';
    div.innerHTML = 
      '<div class="flex items-center gap-2 mb-1.5">' +
        '<span class="w-7 h-7 rounded-full bg-saffron-500/20 text-saffron-600 font-bold text-xs flex items-center justify-center shrink-0">' + item.number + '</span>' +
        '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200">' + item.name + '</div>' +
      '</div>' +
      '<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed ml-9">' + item.relation + '</p>';
    list.appendChild(div);
  });
}

function renderSpecialNotes(data) {
  var section = document.getElementById('mg-specialnotes-section');
  var list = document.getElementById('mg-specialnotes-list');
  if (!section || !list) return;

  if (!data || data.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  list.innerHTML = '';

  data.forEach(function(item, idx) {
    var div = document.createElement('div');
    div.className = 'bg-gradient-to-br from-amber-50 to-amber-100/60 dark:from-slate-900 dark:to-slate-800 border border-amber-300 dark:border-slate-700 rounded-xl p-4';
    div.innerHTML = 
      '<div class="flex items-start gap-2 mb-2">' +
        '<span class="w-6 h-6 rounded-full bg-saffron-500 text-maroon-950 font-bold text-xs flex items-center justify-center shrink-0">' + (idx+1) + '</span>' +
        '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200">' + item.title + '</div>' +
      '</div>' +
      '<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed ml-8">' + item.content + '</p>';
    list.appendChild(div);
  });
}

// ============================================================
// THEME TOGGLE
// ============================================================
function toggleDarkMode() {
  var html = document.documentElement;
  var icon = document.getElementById('theme-toggle-icon');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('tika_theme', 'light');
    if (icon) icon.className = 'fa-solid fa-moon text-lg';
  } else {
    html.classList.add('dark');
    localStorage.setItem('tika_theme', 'dark');
    if (icon) icon.className = 'fa-solid fa-sun text-lg';
  }
}

// Theme initialize
if (localStorage.getItem('tika_theme') === 'dark' ||
    (!localStorage.getItem('tika_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  var themeIcon = document.getElementById('theme-toggle-icon');
  if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-lg';
}

// ============================================================
// INIT
// ============================================================
function initTikaApp() {
  console.log('[tika-app] initTikaApp called');
  
  // Fallback පළමුව ක්‍රියාත්මක කරන්න
  if (typeof tikaFullData !== 'undefined' && tikaFullData.length < 22) {
    console.warn('[tika-app] තික ගොනු ' + tikaFullData.length + ' ක් පමණක් load වී ඇත. Fallback භාවිතා කරමින් තික 22ම පූරණය කරමින්...');
    
    if (typeof fillMissingTikas === 'function') {
      fillMissingTikas();
    } else {
      console.error('[tika-app] fillMissingTikas() function එක නොමැත!');
    }
  }
  
  renderTikaList();
  updateTikaBookmarkBadge();
  
  console.log('[tika-app] tikaFullData.length:', (typeof tikaFullData !== 'undefined' ? tikaFullData.length : 0));
}

// DOMContentLoaded event එකේදී යෙදුම initialize කරන්න
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTikaApp);
} else {
  initTikaApp();
}
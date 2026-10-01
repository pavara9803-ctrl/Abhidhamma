// ============================================================
// දුක මාතිකා App Logic (යාවත්කාලීන)
// ============================================================

var dukaGochhakaData = [
  gochhaka01Hetu,
  gochhaka02Cullantara,
  gochhaka03Asava,
  gochhaka04Samyojana,
  gochhaka05Gantha,
  gochhaka06Ogha,
  gochhaka07Yoga,
  gochhaka08Nivarana,
  gochhaka09Paramasa,
  gochhaka10Mahantara,
  gochhaka11Upadana,
  gochhaka12Kilesa,
  gochhaka13Pitthi
];

var dukaState = {
  currentGochhaka: null,
  currentDukaPair: null,
  currentPada: null,
  currentPadaIndex: 0,
  activeTab: 'skandha',
  bookmarks: JSON.parse(localStorage.getItem('duka_bookmarks') || '[]')
};

// ═══ NEW: අර්ථ විස්තර accordion තත්ත්වය ═══
var dukaArthaVistaraOpenState = {
  nirukthi: true,
  abhidheya: false,
  sangraha: false,
  vishesha: false
};

// ============================================================
// දත්ත ව්‍යුහය ලබා ගැනීමේ helper
// ============================================================
function getGochhakaPadas(gochhaka) {
  if (!gochhaka) return [];
  if (gochhaka.padas && Array.isArray(gochhaka.padas)) return gochhaka.padas;
  if (gochhaka.dukas && Array.isArray(gochhaka.dukas)) {
    var allPadas = [];
    gochhaka.dukas.forEach(function(duka) {
      if (duka && duka.padas && Array.isArray(duka.padas)) {
        duka.padas.forEach(function(pada) { allPadas.push(pada); });
      }
    });
    return allPadas;
  }
  return [];
}

function getGochhakaDukas(gochhaka) {
  if (!gochhaka) return [];
  if (gochhaka.dukas && Array.isArray(gochhaka.dukas) && gochhaka.dukas.length > 0) {
    return gochhaka.dukas;
  }
  if (gochhaka.padas && Array.isArray(gochhaka.padas) && gochhaka.padas.length > 0) {
    var dukas = [];
    var dukaNumber = 1;
    for (var i = 0; i < gochhaka.padas.length; i += 2) {
      var pada1 = gochhaka.padas[i];
      var pada2 = gochhaka.padas[i + 1] || null;
      dukas.push({
        number: dukaNumber,
        name: 'දුක මාතිකා ' + dukaNumber,
        pali: pada1.name + (pada2 ? ' - ' + pada2.name : ''),
        padas: pada2 ? [pada1, pada2] : [pada1]
      });
      dukaNumber++;
    }
    return dukas;
  }
  return [];
}

// ═══ NEW: මිශ්‍රක දුක ලබා ගැනීම ═══
function getGochhakaMishrakaDukas(gochhaka) {
  if (!gochhaka || !gochhaka.mishrakaDukas) return [];
  return gochhaka.mishrakaDukas;
}

// ============================================================
// INIT
// ============================================================
function initDukaApp() {
  console.log('[Duka App] Initializing...');
  console.log('[Duka App] Total gochhakas:', dukaGochhakaData.length);

  renderGochhakaList();
  updateDukaBookmarkBadge();
}

// ============================================================
// දර්ශන මාරු කිරීමේ helper
// ============================================================
function showDukaView(viewId) {
  ['duka-view-list', 'duka-view-duka-list', 'duka-view-pada-pair', 'duka-view-pada-detail', 'duka-view-bookmarks'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      if (id === viewId) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });
}

// ============================================================
// 1. ගොච්ඡක ලැයිස්තුව render කිරීම
// ============================================================
function renderGochhakaList() {
  var container = document.getElementById('gochhaka-list');
  if (!container) return;

  container.innerHTML = '';

  dukaGochhakaData.forEach(function(gochhaka) {
    if (!gochhaka) return;

    var dukas = getGochhakaDukas(gochhaka);
    var mishraka = getGochhakaMishrakaDukas(gochhaka);
    var totalDukas = dukas.length + mishraka.length;

    var card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all fade-in';
    card.onclick = function() { openGochhaka(gochhaka.id); };

    var dukasHtml = '';
    if (dukas.length > 0) {
      dukasHtml = dukas.slice(0, 3).map(function(d) {
        return '<span class="inline-block bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 text-amber-900 dark:text-saffron-300 text-[10px] px-2 py-0.5 rounded mr-1 mb-1">' + (d.name || '') + '</span>';
      }).join('');
      if (totalDukas > 3) {
        dukasHtml += '<span class="inline-block text-amber-600 text-[10px] px-2 py-0.5">+' + (totalDukas - 3) + ' more</span>';
      }
    }

    card.innerHTML =
      '<div class="flex items-center justify-between mb-2">' +
        '<div class="flex items-center gap-2">' +
          '<span class="w-8 h-8 rounded-full bg-saffron-500 text-maroon-950 font-bold text-sm flex items-center justify-center">' + gochhaka.id + '</span>' +
          '<h3 class="font-bold text-base text-maroon-900 dark:text-saffron-200">' + gochhaka.title + '</h3>' +
        '</div>' +
        '<span class="text-xs bg-saffron-500/20 text-saffron-600 font-bold px-2 py-1 rounded-full">දුක ' + totalDukas + '</span>' +
      '</div>' +
      '<div class="flex flex-wrap mt-2">' + dukasHtml + '</div>' +
      '<div class="text-right mt-2"><i class="fa-solid fa-chevron-right text-slate-400"></i></div>';

    container.appendChild(card);
  });
}

// ============================================================
// 2. ගොච්ඡකයක් click → දුක ලැයිස්තුව
// ============================================================
function openGochhaka(gochhakaId) {
  var gochhaka = dukaGochhakaData.find(function(g) { return g.id === gochhakaId; });
  if (!gochhaka) return;

  dukaState.currentGochhaka = gochhaka;

  showDukaView('duka-view-duka-list');

  var dukas = getGochhakaDukas(gochhaka);
  var mishraka = getGochhakaMishrakaDukas(gochhaka);

  document.getElementById('duka-list-title').innerText = gochhaka.title;
  document.getElementById('duka-list-subtitle').innerText = 'මෙම ගොච්ඡකයේ දුක මාතිකා ' + dukas.length + ' ක් ඇත' + (mishraka.length > 0 ? ' (මිශ්‍රක දුක ' + mishraka.length + ' සමඟ)' : '');

  renderDukaList(gochhaka);
  renderGochhakaNotes(gochhaka);
  renderMishrakaDukas(gochhaka);

  if (typeof updateBreadcrumbDuka === 'function') updateBreadcrumbDuka('duka-list');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══ NEW: ගොච්ඡක සටහන් render කිරීම ═══
function renderGochhakaNotes(gochhaka) {
  var container = document.getElementById('duka-list-notes');
  if (!container) return;

  if (!gochhaka.notes || gochhaka.notes.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = '<h3 class="text-sm font-bold text-maroon-900 dark:text-saffron-200 mb-2"><i class="fa-solid fa-circle-info text-saffron-600"></i> ගොච්ඡක සටහන්</h3>';

  gochhaka.notes.forEach(function(note) {
    var div = document.createElement('div');
    div.className = 'bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3 mb-2';
    div.innerHTML =
      '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200 mb-1">' + note.title + '</div>' +
      '<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed text-justify">' + note.content + '</p>';
    container.appendChild(div);
  });
}

// ═══ NEW: මිශ්‍රක දුක render කිරීම ═══
function renderMishrakaDukas(gochhaka) {
  var container = document.getElementById('duka-mishraka-container');
  if (!container) return;

  var mishraka = getGochhakaMishrakaDukas(gochhaka);

  if (mishraka.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = '<h3 class="text-sm font-bold text-purple-900 dark:text-purple-200 mb-2"><i class="fa-solid fa-code-branch text-purple-600"></i> මිශ්‍රක දුක (' + mishraka.length + ')</h3>';

  mishraka.forEach(function(m, idx) {
    var card = document.createElement('div');
    card.className = 'bg-purple-50 dark:bg-slate-900 border border-purple-200 dark:border-slate-700 rounded-xl p-4 mb-2';
    card.innerHTML =
      '<div class="flex items-start gap-2 mb-2">' +
        '<span class="w-7 h-7 rounded-full bg-purple-500 text-white font-bold text-xs flex items-center justify-center shrink-0">' + (idx + 1) + '</span>' +
        '<div class="flex-1 min-w-0">' +
          '<h4 class="font-bold text-sm text-purple-900 dark:text-purple-200">' + m.name + '</h4>' +
          '<p class="text-[10px] text-purple-700 dark:text-purple-400 italic mt-1">' + m.pali + '</p>' +
        '</div>' +
      '</div>' +
      '<p class="text-xs text-slate-700 dark:text-slate-300 mb-2 text-justify">' + m.desc + '</p>' +
      '<div class="bg-white dark:bg-slate-800 border-l-4 border-purple-500 p-2 rounded">' +
        '<p class="text-[10px] text-slate-600 dark:text-slate-400 text-justify">' + m.note + '</p>' +
      '</div>';
    container.appendChild(card);
  });
}

// ============================================================
// දුක ලැයිස්තුව render කිරීම
// ============================================================
function renderDukaList(gochhaka) {
  var container = document.getElementById('duka-list-container');
  if (!container) return;

  container.innerHTML = '';

  var dukas = getGochhakaDukas(gochhaka);

  dukas.forEach(function(duka, index) {
    if (!duka) return;

    var dukaNumber = duka.number || (index + 1);
    var dukaName = duka.name || ('දුක මාතිකා ' + dukaNumber);
    var dukaPali = duka.pali || '';
    var padas = duka.padas || [];

    var pada1 = padas[0] || null;
    var pada2 = padas[1] || null;

    var card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all fade-in';

    (function(padaIdx1, padaIdx2, dukaNum) {
      card.onclick = function() {
        var allPadas = getGochhakaPadas(gochhaka);
        var idx1 = allPadas.indexOf(pada1);
        var idx2 = pada2 ? allPadas.indexOf(pada2) : -1;
        openDukaPair(dukaNum, idx1, idx2, dukaName, dukaPali);
      };
    })(0, 1, dukaNumber);

    card.innerHTML =
      '<div class="flex items-center justify-between mb-3">' +
        '<div class="flex items-center gap-2 flex-1 min-w-0">' +
          '<span class="w-9 h-9 rounded-full bg-saffron-500 text-maroon-950 font-bold text-sm flex items-center justify-center shrink-0">' + dukaNumber + '</span>' +
          '<div class="flex-1 min-w-0">' +
            '<h3 class="font-bold text-sm text-maroon-900 dark:text-saffron-200">' + dukaName + '</h3>' +
            (dukaPali ? '<p class="text-[10px] text-amber-700 dark:text-saffron-400 truncate">' + dukaPali + '</p>' : '') +
          '</div>' +
        '</div>' +
        '<i class="fa-solid fa-chevron-right text-slate-400 shrink-0"></i>' +
      '</div>' +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">' +
        (pada1 ?
          '<div class="bg-gradient-to-br from-saffron-500/10 to-saffron-500/5 border border-saffron-500/30 rounded-lg p-3">' +
            '<div class="text-[10px] font-bold text-saffron-600 dark:text-saffron-400 uppercase mb-1">පදය 1</div>' +
            '<div class="text-sm font-bold text-maroon-900 dark:text-saffron-200 mb-1">' + pada1.name + '</div>' +
            '<div class="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">' + (pada1.desc || '') + '</div>' +
          '</div>' : '') +
        (pada2 ?
          '<div class="bg-gradient-to-br from-saffron-500/10 to-saffron-500/5 border border-saffron-500/30 rounded-lg p-3">' +
            '<div class="text-[10px] font-bold text-saffron-600 dark:text-saffron-400 uppercase mb-1">පදය 2</div>' +
            '<div class="text-sm font-bold text-maroon-900 dark:text-saffron-200 mb-1">' + pada2.name + '</div>' +
            '<div class="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">' + (pada2.desc || '') + '</div>' +
          '</div>' : '') +
      '</div>' +
      '<div class="text-center mt-3 text-[10px] text-slate-400"><i class="fa-solid fa-hand-pointer"></i> පද දෙක බැලීමට click කරන්න</div>';

    container.appendChild(card);
  });
}

// ============================================================
// 3. දුකයක් click → පද දෙක
// ============================================================
function openDukaPair(dukaNumber, padaIndex1, padaIndex2, dukaName, dukaPali) {
  var gochhaka = dukaState.currentGochhaka;
  if (!gochhaka) return;

  var allPadas = getGochhakaPadas(gochhaka);
  var pada1 = allPadas[padaIndex1];
  var pada2 = (padaIndex2 >= 0 && padaIndex2 < allPadas.length) ? allPadas[padaIndex2] : null;

  dukaState.currentDukaPair = {
    number: dukaNumber,
    name: dukaName || ('දුක මාතිකා ' + dukaNumber),
    pali: dukaPali || '',
    pada1: pada1,
    pada2: pada2,
    padaIndex1: padaIndex1,
    padaIndex2: padaIndex2
  };

  showDukaView('duka-view-pada-pair');

  document.getElementById('duka-pair-title').innerText = dukaState.currentDukaPair.name;
  document.getElementById('duka-pair-subtitle').innerText = dukaState.currentDukaPair.pali || (gochhaka.title + ' → දුක මාතිකා ' + dukaNumber);

  renderDukaPair(pada1, pada2);

  if (typeof updateBreadcrumbDuka === 'function') updateBreadcrumbDuka('pada-pair');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDukaPair(pada1, pada2) {
  var container = document.getElementById('duka-pair-container');
  if (!container) return;
  container.innerHTML = '';

  if (pada1) container.appendChild(createPadaPairCard(pada1, 1, dukaState.currentDukaPair.padaIndex1));
  if (pada2) container.appendChild(createPadaPairCard(pada2, 2, dukaState.currentDukaPair.padaIndex2));
}

function createPadaPairCard(pada, number, padaIndex) {
  var card = document.createElement('div');
  card.className = 'bg-gradient-to-br from-saffron-500/10 to-amber-100/30 dark:from-slate-800 dark:to-slate-800/50 border-2 border-saffron-500/40 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all fade-in';
  card.onclick = function() { openPadaDetail(padaIndex); };

  card.innerHTML =
    '<div class="flex items-center justify-between mb-3">' +
      '<div class="flex items-center gap-2">' +
        '<span class="w-9 h-9 rounded-full bg-saffron-500 text-maroon-950 font-bold text-sm flex items-center justify-center shrink-0">' + number + '</span>' +
        '<h3 class="font-bold text-base text-maroon-900 dark:text-saffron-200">' + pada.name + '</h3>' +
      '</div>' +
      '<i class="fa-solid fa-chevron-right text-saffron-500"></i>' +
    '</div>' +
    '<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">' + (pada.desc || '') + '</p>' +
    '<div class="text-[10px] text-saffron-600 dark:text-saffron-400 font-bold"><i class="fa-solid fa-hand-pointer"></i> ස්වරූපාර්ථ + ස්කන්ධ/ආයතන/ධාතු/සත්‍ය බැලීමට click කරන්න</div>';

  return card;
}

// ============================================================
// 4. පදයක් click → ස්වරූපාර්ථ + බෙදීම්
// ============================================================
function openPadaDetail(padaIndex) {
  var gochhaka = dukaState.currentGochhaka;
  if (!gochhaka) return;

  var padas = getGochhakaPadas(gochhaka);
  var pada = padas[padaIndex];
  if (!pada) return;

  dukaState.currentPada = pada;
  dukaState.currentPadaIndex = padaIndex;

  showDukaView('duka-view-pada-detail');

  document.getElementById('duka-pada-name').innerText = pada.name;
  document.getElementById('duka-pada-desc').innerText = pada.desc || '';

  // ═══ NEW: padaArtha පෙන්වීම ═══
  var padaArthaSection = document.getElementById('duka-pada-artha-section');
  var padaArthaText = document.getElementById('duka-pada-artha-text');
  if (padaArthaSection && padaArthaText) {
    if (pada.padaArtha && String(pada.padaArtha).trim() !== '') {
      padaArthaText.innerHTML = formatDukaPadaArtha(pada.padaArtha);
      padaArthaSection.classList.remove('hidden');
    } else {
      padaArthaSection.classList.add('hidden');
    }
  }

  // ═══ NEW: arthaVistara render කිරීම ═══
  renderDukaArthaVistara(pada);

  // ස්වරූපාර්ථය
  document.getElementById('duka-pada-svartha').innerText = pada.svartha || 'ස්වරූපාර්ථය ඇතුළත් කර නැත.';

  // දුක මුක්ත ධර්ම
  renderDukaMukta(pada);

  updateDukaBookmarkButton();
  renderDukaBreakdowns(pada);
  switchDukaTab('skandha');

  if (typeof updateBreadcrumbDuka === 'function') updateBreadcrumbDuka('pada-detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══ NEW: padaArtha format කිරීම ═══
function formatDukaPadaArtha(text) {
  if (!text) return '';
  return String(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-maroon-900 dark:text-saffron-300">$1</strong>')
    .replace(/\n/g, '<br>');
}

// ═══ NEW: arthaVistara render කිරීම ═══
function renderDukaArthaVistara(pada) {
  var section = document.getElementById('duka-artha-vistara-section');
  var content = document.getElementById('duka-artha-vistara-content');

  if (!section || !content) return;

  if (!pada || !pada.arthaVistara) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');

  var av = pada.arthaVistara;
  var html = '';

  // නිරුක්ති විශ්ලේෂණය
  if (av.nirukthi && av.nirukthi.items && av.nirukthi.items.length > 0) {
    html += renderDukaArthaVistaraBlock('nirukthi', 'නිරුක්ති විශ්ලේෂණය', 'fa-book', 'text-blue-600 dark:text-blue-400', av.nirukthi.intro, renderDukaNirukthiItems(av.nirukthi.items));
  }

  // අභිධෙය්‍යාර්ථ විස්තරය
  if (av.abhidheya && av.abhidheya.items && av.abhidheya.items.length > 0) {
    html += renderDukaArthaVistaraBlock('abhidheya', 'අභිධෙය්‍යාර්ථ විස්තරය', 'fa-magnifying-glass-chart', 'text-purple-600 dark:text-purple-400', av.abhidheya.intro, renderDukaAbhidheyaItems(av.abhidheya.items));
  }

  // සංග්‍රහ විස්තරය
  if (av.sangraha && av.sangraha.items && av.sangraha.items.length > 0) {
    html += renderDukaArthaVistaraBlock('sangraha', 'සංග්‍රහ විස්තරය', 'fa-layer-group', 'text-amber-600 dark:text-amber-400', av.sangraha.intro, renderDukaSangrahaItems(av.sangraha.items));
  }

  // විශේෂ සටහන්
  if (av.vishesha && av.vishesha.items && av.vishesha.items.length > 0) {
    html += renderDukaArthaVistaraBlock('vishesha', 'විශේෂ සටහන්', 'fa-circle-info', 'text-saffron-600 dark:text-saffron-400', av.vishesha.intro, renderDukaVisheshaItems(av.vishesha.items));
  }

  if (html === '') {
    section.classList.add('hidden');
    return;
  }

  content.innerHTML = html;

  // Default open state යාවත්කාලීන කරන්න
  Object.keys(dukaArthaVistaraOpenState).forEach(function(key) {
    var body = document.getElementById('duka-av-body-' + key);
    var chev = document.getElementById('duka-av-chevron-' + key);
    if (!body) return;
    if (dukaArthaVistaraOpenState[key]) {
      body.classList.remove('hidden');
      if (chev) chev.classList.add('rotate-180');
    } else {
      body.classList.add('hidden');
      if (chev) chev.classList.remove('rotate-180');
    }
  });
}

function renderDukaArthaVistaraBlock(key, title, icon, iconColor, intro, bodyHtml) {
  var isOpen = dukaArthaVistaraOpenState[key] ? '' : 'hidden';
  var chevRotate = dukaArthaVistaraOpenState[key] ? 'rotate-180' : '';

  return '' +
    '<div class="border border-amber-200 dark:border-slate-700 rounded-xl overflow-hidden bg-amber-50/50 dark:bg-slate-900/50">' +
      '<button onclick="toggleDukaArthaVistaraBlock(\'' + key + '\')" ' +
              'class="w-full flex items-center justify-between gap-2 p-3 text-left hover:bg-amber-100/60 dark:hover:bg-slate-800 transition-colors">' +
        '<span class="flex items-center gap-2 min-w-0">' +
          '<i class="fa-solid ' + icon + ' ' + iconColor + ' text-sm shrink-0"></i>' +
          '<span class="font-bold text-sm text-maroon-900 dark:text-saffron-200 truncate">' + title + '</span>' +
        '</span>' +
        '<i id="duka-av-chevron-' + key + '" class="fa-solid fa-chevron-down text-saffron-600 text-xs transition-transform ' + chevRotate + '"></i>' +
      '</button>' +
      '<div id="duka-av-body-' + key + '" class="' + isOpen + ' p-3 pt-0 space-y-3">' +
        (intro ? '<p class="text-xs text-slate-600 dark:text-slate-400 italic mt-1 text-justify">' + intro + '</p>' : '') +
        bodyHtml +
      '</div>' +
    '</div>';
}

function renderDukaNirukthiItems(items) {
  var html = '<div class="space-y-3">';
  items.forEach(function(item) {
    html += '' +
      '<div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3 space-y-2">' +
        '<div class="font-bold text-sm text-maroon-900 dark:text-saffron-200 flex items-center gap-1.5">' +
          '<i class="fa-solid fa-tag text-saffron-600 text-xs"></i> ' + item.name +
        '</div>' +
        (item.pali ? '<div class="text-xs text-amber-800 dark:text-amber-300 italic bg-amber-50 dark:bg-slate-900 p-2 rounded border border-amber-100 dark:border-slate-700"><i class="fa-solid fa-language text-saffron-500"></i> ' + item.pali + '</div>' : '') +
        (item.artha ? '<p class="text-xs text-slate-700 dark:text-slate-300"><strong class="text-maroon-900 dark:text-saffron-300">අර්ථය:</strong> ' + item.artha + '</p>' : '') +
        (item.vistara ? '<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-justify">' + item.vistara + '</p>' : '') +
      '</div>';
  });
  html += '</div>';
  return html;
}

function renderDukaAbhidheyaItems(items) {
  var html = '<div class="space-y-2">';
  items.forEach(function(item) {
    html += '' +
      '<div class="breakdown-item">' +
        '<span class="num"><i class="fa-solid fa-cube text-saffron-600 text-xs"></i></span>' +
        '<span class="name">' + item.name + (item.count ? ' <span class="text-xs text-saffron-600 font-bold">(' + item.count + ')</span>' : '') + '</span>' +
        '<span class="value">' + item.vistara + '</span>' +
      '</div>';
  });
  html += '</div>';
  return html;
}

function renderDukaSangrahaItems(items) {
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

function renderDukaVisheshaItems(items) {
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

function toggleDukaArthaVistaraBlock(key) {
  dukaArthaVistaraOpenState[key] = !dukaArthaVistaraOpenState[key];
  var body = document.getElementById('duka-av-body-' + key);
  var chev = document.getElementById('duka-av-chevron-' + key);
  if (!body) return;
  if (dukaArthaVistaraOpenState[key]) {
    body.classList.remove('hidden');
    if (chev) chev.classList.add('rotate-180');
  } else {
    body.classList.add('hidden');
    if (chev) chev.classList.remove('rotate-180');
  }
}

// ═══ NEW: දුක මුක්ත ධර්ම render කිරීම ═══
function renderDukaMukta(pada) {
  var section = document.getElementById('duka-mukta-section');
  var content = document.getElementById('duka-mukta-content');

  if (!section || !content) return;

  if (!pada.mukta) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  content.innerText = pada.mukta;
}

// ============================================================
// BREAKDOWN LISTS - පිරවූ / මුළු
// ============================================================
function renderDukaBreakdowns(pada) {
  renderBreakdown('duka-skandha-list', pada.skandha, 'duka-skandha-count', 5);
  renderBreakdown('duka-ayatana-list', pada.ayatana, 'duka-ayatana-count', 12);
  renderBreakdown('duka-dhatu-list', pada.dhatu, 'duka-dhatu-count', 18);
  renderBreakdown('duka-sathya-list', pada.sathya, 'duka-sathya-count', 4);
}

function renderBreakdown(listId, items, countId, totalCount) {
  var list = document.getElementById(listId);
  if (!list) return;
  list.innerHTML = '';

  if (!items || items.length === 0) {
    list.innerHTML = '<div class="text-center py-4 text-slate-400 text-xs">දත්ත නොමැත</div>';
    if (countId) {
      var countEl = document.getElementById(countId);
      if (countEl) countEl.innerText = '0 / ' + (totalCount || 0);
    }
    return;
  }

  var filledCount = 0;
  items.forEach(function(item) {
    if (item.value && item.value !== 'නැත' && item.value !== '-' && item.value !== '×') {
      filledCount++;
    }
    var div = document.createElement('div');
    div.className = 'breakdown-item';
    div.innerHTML = '<span class="num">' + item.num + '.</span><span class="name">' + item.name + '</span><span class="value">' + item.value + '</span>';
    list.appendChild(div);
  });

  if (countId) {
    var countEl = document.getElementById(countId);
    if (countEl) countEl.innerText = filledCount + ' / ' + (totalCount || items.length);
  }
}

function switchDukaTab(tabName) {
  dukaState.activeTab = tabName;
  ['skandha', 'ayatana', 'dhatu', 'sathya'].forEach(function(t) {
    var btn = document.getElementById('duka-tab-btn-' + t);
    var panel = document.getElementById('duka-panel-' + t);
    if (t === tabName) {
      if (btn) btn.className = 'tab-btn flex-1 min-w-[110px] px-3 py-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border-b-2 border-saffron-600 text-saffron-700 dark:text-saffron-400 bg-saffron-500/10';
      if (panel) panel.classList.remove('hidden');
    } else {
      if (btn) btn.className = 'tab-btn flex-1 min-w-[110px] px-3 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 border-transparent text-amber-800 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700';
      if (panel) panel.classList.add('hidden');
    }
  });
}

function backToGochhakaList() {
  dukaState.currentGochhaka = null;
  dukaState.currentDukaPair = null;
  dukaState.currentPada = null;
  showDukaView('duka-view-list');
  if (typeof updateBreadcrumbDuka === 'function') updateBreadcrumbDuka('list');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToDukaList() {
  if (!dukaState.currentGochhaka) { backToGochhakaList(); return; }
  dukaState.currentDukaPair = null;
  dukaState.currentPada = null;
  showDukaView('duka-view-duka-list');
  if (typeof updateBreadcrumbDuka === 'function') updateBreadcrumbDuka('duka-list');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToPadaPair() {
  if (!dukaState.currentDukaPair) { backToDukaList(); return; }
  dukaState.currentPada = null;
  showDukaView('duka-view-pada-pair');
  if (typeof updateBreadcrumbDuka === 'function') updateBreadcrumbDuka('pada-pair');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// BOOKMARKS
// ============================================================
function toggleDukaBookmark() {
  if (!dukaState.currentGochhaka || !dukaState.currentPada) return;
  var id = 'duka_' + dukaState.currentGochhaka.id + '_' + dukaState.currentPadaIndex;
  var existingIdx = dukaState.bookmarks.findIndex(function(b) { return b.id === id; });

  if (existingIdx > -1) {
    dukaState.bookmarks.splice(existingIdx, 1);
  } else {
    dukaState.bookmarks.push({
      id: id,
      gochhakaId: dukaState.currentGochhaka.id,
      gochhakaTitle: dukaState.currentGochhaka.title,
      padaIndex: dukaState.currentPadaIndex,
      padaName: dukaState.currentPada.name
    });
  }

  localStorage.setItem('duka_bookmarks', JSON.stringify(dukaState.bookmarks));
  updateDukaBookmarkBadge();
  updateDukaBookmarkButton();
}

function updateDukaBookmarkButton() {
  if (!dukaState.currentGochhaka || !dukaState.currentPada) return;
  var id = 'duka_' + dukaState.currentGochhaka.id + '_' + dukaState.currentPadaIndex;
  var icon = document.getElementById('duka-bookmark-icon');
  if (!icon) return;
  var isFav = dukaState.bookmarks.some(function(b) { return b.id === id; });
  icon.className = isFav ? 'fa-solid fa-bookmark text-saffron-500' : 'fa-regular fa-bookmark';
}

function updateDukaBookmarkBadge() {
  var badge = document.getElementById('duka-fav-badge');
  if (!badge) return;
  if (dukaState.bookmarks.length > 0) {
    badge.classList.remove('hidden');
    badge.innerText = dukaState.bookmarks.length;
  } else {
    badge.classList.add('hidden');
  }
}

// ============================================================
// OPEN DUKA MATIKA (බැනරය ක්ලික් කිරීම)
// ============================================================
function openDukaMatika() {
  var section = document.getElementById('gochhaka-section');
  if (!section) return;
  section.classList.remove('hidden');
  renderGochhakaList();
  setTimeout(function() {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ============================================================
// SEARCH
// ============================================================
function searchDukaMatika(query) {
  if (!query || query.trim() === '') return [];
  var q = query.toLowerCase().trim();
  var results = [];

  dukaGochhakaData.forEach(function(gochhaka) {
    if (!gochhaka) return;

    if (gochhaka.title.toLowerCase().indexOf(q) > -1) {
      results.push({ type: 'gochhaka', gochhakaId: gochhaka.id, gochhakaTitle: gochhaka.title, matchText: gochhaka.title, matchType: 'ගොච්ඡකය' });
    }

    var allPadas = getGochhakaPadas(gochhaka);
    allPadas.forEach(function(pada, padaIdx) {
      if (!pada || !pada.name) return;

      var nameMatch = pada.name.toLowerCase().indexOf(q) > -1;
      var descMatch = pada.desc && pada.desc.toLowerCase().indexOf(q) > -1;
      var svarthaMatch = pada.svartha && pada.svartha.toLowerCase().indexOf(q) > -1;
      var padaArthaMatch = pada.padaArtha && pada.padaArtha.toLowerCase().indexOf(q) > -1;

      if (nameMatch || descMatch || svarthaMatch || padaArthaMatch) {
        var matchType = nameMatch ? 'පදය' : (descMatch ? 'විස්තරය' : (padaArthaMatch ? 'පදයේ අර්ථය' : 'ස්වරූපාර්ථය'));
        results.push({
          type: 'pada',
          gochhakaId: gochhaka.id,
          gochhakaTitle: gochhaka.title,
          padaIndex: padaIdx,
          padaName: pada.name,
          padaDesc: pada.desc || '',
          matchText: pada.name,
          matchType: matchType
        });
      }
    });
  });

  return results;
}

function renderDukaSearchResults(results) {
  var container = document.getElementById('gochhaka-list');
  if (!container) return;

  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<div class="text-center py-8 text-slate-500 text-sm"><i class="fa-solid fa-magnifying-glass text-2xl mb-2 opacity-30"></i><br>ගැලපෙන ප්‍රතිඵල හමු නොවීය.</div>';
    return;
  }

  var summary = document.createElement('div');
  summary.className = 'text-xs text-amber-800 dark:text-saffron-400 bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3 mb-3';
  summary.innerHTML = '<i class="fa-solid fa-circle-info"></i> <strong>' + results.length + '</strong> ප්‍රතිඵල හමු විය';
  container.appendChild(summary);

  results.forEach(function(result) {
    var card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all fade-in';

    if (result.type === 'pada') {
      card.onclick = function() {
        dukaState.currentGochhaka = dukaGochhakaData.find(function(g) { return g.id === result.gochhakaId; });
        showDukaView('duka-view-pada-detail');
        openPadaDetail(result.padaIndex);
      };

      card.innerHTML =
        '<div class="flex items-start gap-3">' +
          '<div class="w-9 h-9 rounded-full bg-saffron-500 text-maroon-950 font-bold text-xs flex items-center justify-center shrink-0"><i class="fa-solid fa-book"></i></div>' +
          '<div class="flex-1 min-w-0">' +
            '<div class="flex items-center gap-2 mb-1 flex-wrap">' +
              '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-saffron-500/20 text-saffron-700 dark:text-saffron-300">' + result.matchType + '</span>' +
              '<span class="text-[10px] text-slate-500">' + result.gochhakaTitle + '</span>' +
            '</div>' +
            '<h4 class="font-bold text-sm text-maroon-900 dark:text-saffron-200 mb-1">' + result.padaName + '</h4>' +
            (result.padaDesc ? '<p class="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">' + result.padaDesc + '</p>' : '') +
          '</div>' +
          '<i class="fa-solid fa-chevron-right text-slate-400 shrink-0"></i>' +
        '</div>';

    } else {
      card.onclick = function() { openGochhaka(result.gochhakaId); };

      card.innerHTML =
        '<div class="flex items-start gap-3">' +
          '<div class="w-9 h-9 rounded-full bg-maroon-700 text-saffron-200 font-bold text-xs flex items-center justify-center shrink-0">' + result.gochhakaId + '</div>' +
          '<div class="flex-1 min-w-0">' +
            '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-maroon-500/20 text-maroon-700 dark:text-maroon-300 mb-1 inline-block">ගොච්ඡකය</span>' +
            '<h4 class="font-bold text-sm text-maroon-900 dark:text-saffron-200">' + result.matchText + '</h4>' +
          '</div>' +
          '<i class="fa-solid fa-chevron-right text-slate-400 shrink-0"></i>' +
        '</div>';
    }

    container.appendChild(card);
  });
}

function performDukaSearch(query) {
  var results = searchDukaMatika(query);
  renderDukaSearchResults(results);
}

function handleDukaSearch(query) {
  var clearBtn = document.getElementById('duka-search-clear');

  if (!query || query.trim() === '') {
    if (clearBtn) clearBtn.classList.add('hidden');
    renderGochhakaList();
    return;
  }

  if (clearBtn) clearBtn.classList.remove('hidden');

  if (typeof performDukaSearch === 'function') {
    performDukaSearch(query);
  } else {
    var results = searchDukaMatika(query);
    renderDukaSearchResults(results);
  }
}

function clearDukaSearch() {
  var searchInput = document.getElementById('duka-search');
  if (searchInput) searchInput.value = '';
  var clearBtn = document.getElementById('duka-search-clear');
  if (clearBtn) clearBtn.classList.add('hidden');
  renderGochhakaList();
}

// ============================================================
// BOOKMARKS VIEW
// ============================================================
function showDukaBookmarksView() {
  showDukaView('duka-view-bookmarks');
  if (typeof updateBreadcrumbDuka === 'function') updateBreadcrumbDuka('bookmarks');
  renderDukaBookmarks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDukaBookmarks() {
  var container = document.getElementById('duka-bookmarks-container');
  if (!container) return;
  container.innerHTML = '';

  if (dukaState.bookmarks.length === 0) {
    container.innerHTML = '<div class="text-center py-12 text-slate-500 text-sm"><i class="fa-regular fa-bookmark text-4xl mb-3 opacity-30"></i><br>සුරැකි මාතිකා පද කිසිවක් නොමැත.</div>';
    return;
  }

  dukaState.bookmarks.forEach(function(b) {
    var gochhaka = dukaGochhakaData.find(function(g) { return g.id === b.gochhakaId; });
    if (!gochhaka) return;

    var card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition-all flex items-center justify-between gap-2';

    card.onclick = function(e) {
      if (e.target.closest('button')) return;
      dukaState.currentGochhaka = gochhaka;
      showDukaView('duka-view-pada-detail');
      openPadaDetail(b.padaIndex);
    };

    card.innerHTML =
      '<div class="flex-1 min-w-0">' +
        '<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-saffron-500/20 text-saffron-700 dark:text-saffron-300 mb-1 inline-block">' + gochhaka.title + '</span>' +
        '<h4 class="font-bold text-sm text-maroon-900 dark:text-saffron-200 truncate">' + b.padaName + '</h4>' +
      '</div>' +
      '<button onclick="event.stopPropagation(); removeDukaBookmark(\'' + b.id + '\')" class="text-slate-400 hover:text-red-500 p-2 transition-colors shrink-0"><i class="fa-solid fa-trash-can text-sm"></i></button>';
    container.appendChild(card);
  });
}

function removeDukaBookmark(id) {
  dukaState.bookmarks = dukaState.bookmarks.filter(function(b) { return b.id !== id; });
  localStorage.setItem('duka_bookmarks', JSON.stringify(dukaState.bookmarks));
  updateDukaBookmarkBadge();
  renderDukaBookmarks();
}

// ============================================================
// BREADCRUMB UPDATE
// ============================================================
function updateBreadcrumbDuka(view) {
  var sep = document.getElementById('bc-sep-gochhaka');
  var gochhakaSpan = document.getElementById('bc-gochhaka');
  if (!sep || !gochhakaSpan) return;

  var text = '';

  if (view === 'duka-list' && dukaState.currentGochhaka) {
    text = dukaState.currentGochhaka.title;
  } else if (view === 'pada-pair' && dukaState.currentDukaPair) {
    text = dukaState.currentDukaPair.name || dukaState.currentGochhaka.title;
  } else if (view === 'pada-detail' && dukaState.currentPada) {
    text = dukaState.currentGochhaka.title + ' → ' + dukaState.currentPada.name;
  } else if (view === 'bookmarks') {
    text = 'සුරැකි මාතිකා';
  }

  if (text) {
    sep.classList.remove('hidden');
    gochhakaSpan.classList.remove('hidden');
    gochhakaSpan.innerText = text;
  } else {
    sep.classList.add('hidden');
    gochhakaSpan.classList.add('hidden');
  }
}

// ============================================================
// THEME TOGGLE
// ============================================================
function toggleDarkMode() {
  var html = document.documentElement;
  var icon = document.getElementById('theme-toggle-icon');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('duka_theme', 'light');
    if (icon) icon.className = 'fa-solid fa-moon text-lg';
  } else {
    html.classList.add('dark');
    localStorage.setItem('duka_theme', 'dark');
    if (icon) icon.className = 'fa-solid fa-sun text-lg';
  }
}

if (localStorage.getItem('duka_theme') === 'dark' ||
    (!localStorage.getItem('duka_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  var themeIcon = document.getElementById('theme-toggle-icon');
  if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-lg';
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('[Duka App] DOMContentLoaded fired');
  initDukaApp();
});
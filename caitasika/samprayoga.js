// ============================================================
// samprayoga.js
// සම්ප්‍රයෝග නය 16 හා සංග්‍රහනය 33 + පාඩම් 7-13
// samprayoga.html සහ caitasika.html දෙකටම ගැලපේ
// ============================================================

// ============================================================
// 1. DARK MODE TOGGLE
// ============================================================
function toggleDarkMode() {
  var html = document.documentElement;
  var icon = document.getElementById('theme-toggle-icon');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('samprayoga_theme', 'light');
    localStorage.setItem('abhidhamma_theme', 'light');
    if (icon) icon.className = 'fa-solid fa-moon text-lg';
  } else {
    html.classList.add('dark');
    localStorage.setItem('samprayoga_theme', 'dark');
    localStorage.setItem('abhidhamma_theme', 'dark');
    if (icon) icon.className = 'fa-solid fa-sun text-lg';
  }
}

(function initTheme() {
  var savedTheme = localStorage.getItem('samprayoga_theme') || localStorage.getItem('abhidhamma_theme');
  if (savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    var icon = document.getElementById('theme-toggle-icon');
    if (icon) icon.className = 'fa-solid fa-sun text-lg';
  }
})();

// ============================================================
// 2. TAB SWITCHING - samprayoga.html සඳහා
// ============================================================
var samprayogaTabs = ['samprayoga', 'sangrahana', 'sangraha-5', 'athara',
                      'pakirnaka', 'akusala-cetasika', 'sobhana-cetasika',
                      'citta-sangaha', 'mahaggata-lokuttara'];

function switchTab(tabName) {
  samprayogaTabs.forEach(function(t) {
    var btn = document.getElementById('tab-btn-' + t);
    var content = document.getElementById('tab-content-' + t);
    
    if (!btn || !content) return;
    
    if (t === tabName) {
      btn.className = 'tab-btn flex-1 min-w-[130px] px-3 py-3 text-xs font-bold whitespace-nowrap transition-colors border-b-2 border-saffron-600 text-saffron-700 dark:text-saffron-400 bg-saffron-500/10';
      content.classList.remove('hidden');
      content.classList.add('fade-in');
    } else {
      btn.className = 'tab-btn flex-1 min-w-[130px] px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 border-transparent text-amber-800 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700';
      content.classList.add('hidden');
      content.classList.remove('fade-in');
    }
  });
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// 3. TAB SWITCHING - caitasika.html සඳහා (Alias)
// ============================================================
function switchCaitasikaTab(tabName) {
  var caitasikaTabs = ['intro', 'sabbacitta', 'pakirnaka', 'akusala', 'sobhana', 'samprayoga'];
  
  caitasikaTabs.forEach(function(t) {
    var btn = document.getElementById('ctab-btn-' + t);
    var content = document.getElementById('ctab-content-' + t);
    
    if (!btn || !content) return;
    
    if (t === tabName) {
      btn.className = 'ctab-btn flex-1 min-w-[120px] px-3 py-3 text-xs font-bold whitespace-nowrap transition-colors border-b-2 border-saffron-600 text-saffron-700 dark:text-saffron-400 bg-saffron-500/10';
      content.classList.remove('hidden');
      content.classList.add('fade-in');
    } else {
      btn.className = 'ctab-btn flex-1 min-w-[120px] px-3 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 border-transparent text-amber-800 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700';
      content.classList.add('hidden');
      content.classList.remove('fade-in');
    }
  });
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// 4. ACCORDION TOGGLE
// ============================================================
function toggleAccordion(id) {
  var content = document.getElementById('accordion-' + id);
  var icon = document.getElementById('accordion-icon-' + id);
  
  if (!content || !icon) return;
  
  if (content.classList.contains('open')) {
    content.classList.remove('open');
    icon.style.transform = 'rotate(0deg)';
  } else {
    content.classList.add('open');
    icon.style.transform = 'rotate(180deg)';
  }
}

// ============================================================
// 5. SCROLL TO TOP
// ============================================================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// 6. DATA: සම්ප්‍රයෝග නය 16
// ============================================================
var samprayogaData = [
  { num: 1, name: 'සම්මිස්සිත සම්පයෝග', count: 89,
    desc: 'සියලු ධර්ම සම්මිස්සිත ව යොදන විට එක් එක් සිතට අයත් ධර්ම ගණන. සම්පූර්ණ සිත් 89ක් සම්මිස්සිත ව යොදයි.' },
  { num: 2, name: 'සම්පයුත්ත සම්පයෝග', count: 55,
    desc: 'අඤ්ඤසමාන චෛතසික 13 මගින් සම්පූර්ණ සිත් 121 ටම යොදන විට එකතුව (121 − 66 = 55).' },
  { num: 3, name: 'සංසට්ඨ සම්පයෝග', count: 66,
    desc: 'අඤ්ඤසමාන චෛතසික 13 + අධිපති ධර්ම 2 මගින් සම්පූර්ණ සිත් 121 ටම යොදන විට එකතුව (121 − 55 = 66).' },
  { num: 4, name: 'සම්පයෝග (පඤ්චද්වාරාවජ්ජන)', count: 78,
    desc: 'පඤ්චද්වාරාවජ්ජන, සම්පටිච්ඡන, සන්තීරණ යන චිත්ත 3ක් හැර සෙසු සියලු සිත් 89 ටම යොදන විට එකතුව (89 − 11 = 78).' },
  { num: 5, name: 'සම්පයුත්ත සම්පයෝග (පඤ්චම)', count: 73,
    desc: 'අඤ්ඤසමාන චෛතසික 13 මගින් සම්පූර්ණ සිත් 89 ටම යොදන විට එකතුව (89 − 16 = 73).' },
  { num: 6, name: 'සංසට්ඨ සම්පයෝග (ඡට්ඨම)', count: 51,
    desc: 'මහග්ගත 2, අප්පමඤ්ඤාණ හා කාමාවචර 2, වුට්ඨාන 2 යන සිත් 6 ට හැර සෙසු සිත් 70 ට යොදන විට එකතුව (121 − 70 = 51).' },
  { num: 7, name: 'සංසට්ඨ සම්පයෝග (සත්තම)', count: 69,
    desc: 'අඤ්ඤසමාන 13 හා මහග්ගත 2 යන සිත් 2ක් හැර සෙසු සියලු සිත් 69 ට යොදන විට එකතුව (89 − 20 = 69).' },
  { num: 8, name: 'සම්මිස්සිත සම්පයෝග (අට්ඨම)', count: 12,
    desc: 'මහග්ගත, අප්පමඤ්ඤා, අරූපාවචර, ලෝකෝත්තර යන සිත් එකට එකතු වීම. සම්පූර්ණ ධර්ම 12ක් එකට සම්මිස්සිත ව යොදයි.' },
  { num: 9, name: 'ලෝකෝත්තර සම්පයෝග', count: 8,
    desc: 'ලෝකෝත්තර සිත් 8 ට අයත් අට්ඨංගික මාර්ග ධර්ම යෙදීම. සම්මා දිට්ඨි, සම්මා සංකප්ප, සම්මා වාචා, සම්මා කම්මන්ත, සම්මා ආජීව, සම්මා වායාම, සම්මා සති, සම්මා සමාධි යන මාර්ග අංග 8යි.' },
  { num: 10, name: 'මග්ග සම්පයෝග', count: 2,
    desc: 'දුක්ඛ පටිපදා ධීර සම්බෝධි සම්පයෝග, දුක්ඛ පටිපදා ඛිප්ප සම්බෝධි සම්පයෝග යන දෙක.' },
  { num: 11, name: 'සංඛාර සම්පයෝග', count: 5,
    desc: 'අට්ඨංගික මාර්ග ධර්ම 8 ට අයත් සිත් 5කි. මාර්ග අංග 5ක් සමඟ යොදන ධර්ම ගණනයි.' },
  { num: 12, name: 'විමොක්ඛ සම්පයෝග', count: 1,
    desc: 'විමොක්ඛ ධර්ම එකකි. අරහත්වයට පත්වන අවස්ථාවේ ඇති වන විශේෂ ධර්මයයි.' },
  { num: 13, name: 'චිත්ත සම්පයෝග', count: 59,
    desc: 'මහග්ගත සිත් හා අරූපාවචර සිත් සමඟ යොදන සිත් 59කි. ලෝකෝත්තර සිත් 40 හා අරූපාවචර සිත් 12 ඇතුළත් වේ.' },
  { num: 14, name: 'චෛතසික සම්පයෝග', count: 16,
    desc: 'අකුසල සිත් 12 කට අයත් අකුසල සාධාරණ 4 සහ අකුසල අසාධාරණ චෛතසික 12 - මුළු චෛතසික 16කි.' },
  { num: 15, name: 'පටිච්ච සමුප්පාද සම්පයෝග', count: 28,
    desc: 'අවිද්‍යා - සංඛාර - විඤ්ඤාණ - නාමරූප - සළායතන - ඵස්ස - වේදනා - තණ්හා - උපාදාන - භව - ජාති - ජරාමරණ යන පටිච්චසමුප්පාද අංග 12 සමඟ යොදන ධර්ම 28කි.' },
  { num: 16, name: 'සත්‍ය සම්පයෝග', count: 47,
    desc: 'දුක්ඛ සත්‍යය - සමුදය සත්‍යය - නිරෝධ සත්‍යය - මාර්ග සත්‍යය යන චතුරාර්ය සත්‍ය ධර්ම 4 සමඟ යොදන ධර්ම 47කි.' }
];

// ============================================================
// 7. DATA: සංග්‍රහය 5 කොටස්
// ============================================================
var sangraha5Data = [
  { num: 1, name: 'නියතයෝගී', count: 41,
    desc: 'යොදන සිත සමඟ නියතව උපදින ධර්ම 41කි.' },
  { num: 2, name: 'අනියතයෝගී', count: 11,
    desc: 'යොදන සිත සමඟ විටෙක උපදින විටෙක නූපදින ධර්ම 11කි. (උද්ධච්ච, මච්ඡරිය, කුක්කුච්ච, සම්මා වාචා, සම්මා කම්මන්ත, සම්මා ආජීව, කරුණා, මුදිතා, මාන, ථීන, මිද්ධ)' },
  { num: 3, name: 'සහයෝගී', count: 2,
    desc: 'ථීන, මිද්ධ - යන චෛතසික දෙක සමඟ යෝගී වශයෙන් එකට උපදින ධර්ම 2කි.' },
  { num: 4, name: 'නානායෝගී', count: 9,
    desc: 'උද්ධච්ච, මච්ඡරිය, කුක්කුච්ච, සම්මා වාචා, සම්මා කම්මන්ත, සම්මා ආජීව, කරුණා, මුදිතා, මාන - යන ධර්ම 9 වෙන වෙනම යෝගී වශයෙන් උපදින ධර්ම 9කි.' },
  { num: 5, name: 'සංග්‍රහණය', count: 33,
    desc: 'සංග්‍රහණය 33 - එක් එක් සිතට වෙන වෙනම යෙදෙන ධර්ම ගණනය කිරීමේ ක්‍රමය.' }
];

// ============================================================
// 8. DATA: ලෝකෝත්තර සිත් 40
// ============================================================
var lokkuttaraData = [
  { num: 'I', name: '1 වන ධ්‍යානය සිත් 8', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + විරති 3 + පඤ්ඤා = 33', vitakka: 1, vicara: 1, piti: 1, total: 36 },
  { num: 'II', name: '2 වන ධ්‍යානය සිත් 8', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + විරති 3 + පඤ්ඤා = 33', vitakka: 0, vicara: 1, piti: 1, total: 35 },
  { num: 'III', name: '3 වන ධ්‍යානය සිත් 8', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + විරති 3 + පඤ්ඤා = 33', vitakka: 0, vicara: 0, piti: 1, total: 34 },
  { num: 'IV', name: '4 වන ධ්‍යානය සිත් 8', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + විරති 3 + පඤ්ඤා = 33', vitakka: 0, vicara: 0, piti: 0, total: 33 },
  { num: 'V', name: '5 වන ධ්‍යානය සිත් 8', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + විරති 3 + පඤ්ඤා = 33', vitakka: 0, vicara: 0, piti: 0, total: 33 }
];

// ============================================================
// 9. DATA: මහග්ගත සිත් 27
// ============================================================
var mahaggataData = [
  { num: 'I', name: '1 වන ධ්‍යානය සිත් 3', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + පඤ්ඤා = 30', vitakka: 1, vicara: 1, piti: 1, appamanna: 2, total: 35 },
  { num: 'II', name: '2 වන ධ්‍යානය සිත් 3', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + පඤ්ඤා = 30', vitakka: 0, vicara: 1, piti: 1, appamanna: 2, total: 34 },
  { num: 'III', name: '3 වන ධ්‍යානය සිත් 3', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + පඤ්ඤා = 30', vitakka: 0, vicara: 0, piti: 1, appamanna: 3, total: 33 },
  { num: 'IV', name: '4 වන ධ්‍යානය සිත් 3', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + පඤ්ඤා = 30', vitakka: 0, vicara: 0, piti: 0, appamanna: 2, total: 32 },
  { num: 'V', name: '5 වන ධ්‍යානය සිත් 15', yojana: 'විතක්ක, විචාර, ප්‍රීති හැර සෙසු අඤ්ඤසමාන 10 + සොභනසාධාරණ 19 + පඤ්ඤා = 30', vitakka: 0, vicara: 0, piti: 0, appamanna: 0, total: 30 }
];

// ============================================================
// 10. DATA: කාමසෝහන 24
// ============================================================
var kamasohanaData = [
  { num: 'I', name: 'මහාකුසල් 8 හි සංග්‍රහනය 4', sub: '1-2 වන සිත් 2 (සොමන. කාණසම්.)', max: 38, count: 38 },
  { num: 'II', name: 'මහාකුසල් 8 හි සංග්‍රහනය 4', sub: '3-4 වන සිත් 2 (සොමන. කාණසම්.)', max: 38, count: 37 },
  { num: 'III', name: 'මහාකුසල් 8 හි සංග්‍රහනය 4', sub: '5-6 වන සිත් 2 (උප. කාණසම්.)', max: 38, count: 37 },
  { num: 'IV', name: 'මහාකුසල් 8 හි සංග්‍රහනය 4', sub: '7-8 වන සිත් 2 (උප. කාණසම්.)', max: 38, count: 36 },
  { num: 'V', name: 'මහාක්‍රියා 8 හි සංග්‍රහනය 4', sub: '1-2 වන සිත් 2 (සොමන. කාණසම්.)', max: 35, count: 35 },
  { num: 'VI', name: 'මහාක්‍රියා 8 හි සංග්‍රහනය 4', sub: '3-4 වන සිත් 2 (සොමන. කාණසම්.)', max: 35, count: 34 },
  { num: 'VII', name: 'මහාක්‍රියා 8 හි සංග්‍රහනය 4', sub: '5-6 වන සිත් 2 (උප. කාණසම්.)', max: 35, count: 34 },
  { num: 'VIII', name: 'මහාක්‍රියා 8 හි සංග්‍රහනය 4', sub: '7-8 වන සිත් 2 (උප. කාණසම්.)', max: 35, count: 33 },
  { num: 'IX', name: 'මහාවිපාක 8 හි සංග්‍රහනය 4', sub: '1-2 වන සිත් 2 (සොමන. කාණසම්.)', max: 33, count: 33 },
  { num: 'X', name: 'මහාවිපාක 8 හි සංග්‍රහනය 4', sub: '3-4 වන සිත් 2 (සොමන. කාණසම්.)', max: 33, count: 32 },
  { num: 'XI', name: 'මහාවිපාක 8 හි සංග්‍රහනය 4', sub: '5-6 වන සිත් 2 (උප. කාණසම්.)', max: 33, count: 32 },
  { num: 'XII', name: 'මහාවිපාක 8 හි සංග්‍රහනය 4', sub: '7-8 වන සිත් 2 (උප. කාණසම්.)', max: 33, count: 31 }
];

// ============================================================
// 11. DATA: අකුසල 12
// ============================================================
var akusalaData = [
  { num: 'I', name: 'මුල් අසංඛාරික සිත් 2', count: 19 },
  { num: 'II', name: 'දුතිය අසංඛාරික සිත් 2', count: 18 },
  { num: 'III', name: 'පස්වන අසංඛාරික සිත', count: 20 },
  { num: 'IV', name: 'මුල් සසංඛාරික සිත් 2', count: 21 },
  { num: 'V', name: 'දුතිය සසංඛාරික සිත් 2', count: 20 },
  { num: 'VI', name: 'පස්වන සසංඛාරික සිත', count: 22 },
  { num: 'VII', name: 'මෝහසිත් 2', count: 15 }
];

// ============================================================
// 12. DATA: අහේතුක 18
// ============================================================
var ahetuka18Data = [
  { num: 'I', name: 'පඤ්චවිඤ්ඤාණ සිත් 10', count: 7 },
  { num: 'II', name: 'මනෝධාතු 3 හා අහේතුක ප්‍රතිසන්ධි 2 (සිත් 5)', count: 10 },
  { num: 'III', name: 'සොමනස්ස සන්තීරණය + වොත්ථපන (සිත් 2)', count: 11 },
  { num: 'IV', name: 'හසිතුප්පාදය', count: 12 }
];

// ============================================================
// 13. DATA: අහේතුක 18 විස්තර
// ============================================================
var ahetuka18Detail = [
  { num: 1, name: 'පඤ්චද්වාරාවජ්ජන සිත්', kam: 7, vitakka: 0, virati: 0, piti: 0, chanda: 0, total: 7 },
  { num: 2, name: 'සම්පටිච්ඡන 2 + උපෙක්ඛා සන්තීරණ 2 + සම්පටිච්ඡන සන්තීරණ 1 (සිත් 5)', kam: 7, vitakka: 3, virati: 0, piti: 0, chanda: 0, total: 10 },
  { num: 3, name: 'සොමනස්ස සන්තීරණ', kam: 7, vitakka: 3, virati: 0, piti: 1, chanda: 0, total: 11 },
  { num: 4, name: 'මනෝධාතු සම්පටිච්ඡන', kam: 7, vitakka: 3, virati: 0, piti: 0, chanda: 1, total: 11 },
  { num: 5, name: 'හසිතුප්පාදය', kam: 7, vitakka: 3, virati: 0, piti: 1, chanda: 1, total: 12 }
];

// ============================================================
// 14. DATA: කුසල සිත් 8
// ============================================================
var kusala8Data = [
  { num: '1 වන සිත', name: 'සොමනස් සහගත ඤාණ සම්පයුත්ත අසංඛාරික', piti: 1, sukha: 1, nanakk: 0, total: 19 },
  { num: '2 වන සිත', name: 'සොමනස් සහගත ඤාණ සම්පයුත්ත සසංඛාරික', piti: 1, sukha: 1, nanakk: 0, total: 21 },
  { num: '3 වන සිත', name: 'සොමනස් සහගත ඤාණ විප්පයුත්ත අසංඛාරික', piti: 1, sukha: 0, nanakk: 1, total: 19 },
  { num: '4 වන සිත', name: 'සොමනස් සහගත ඤාණ විප්පයුත්ත සසංඛාරික', piti: 1, sukha: 0, nanakk: 1, total: 21 },
  { num: '5 වන සිත', name: 'උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත අසංඛාරික', piti: 0, sukha: 1, nanakk: 0, total: 18 },
  { num: '6 වන සිත', name: 'උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත සසංඛාරික', piti: 0, sukha: 1, nanakk: 0, total: 20 },
  { num: '7 වන සිත', name: 'උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත අසංඛාරික', piti: 0, sukha: 0, nanakk: 1, total: 18 },
  { num: '8 වන සිත', name: 'උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත සසංඛාරික', piti: 0, sukha: 0, nanakk: 1, total: 20 }
];

// ============================================================
// 15. DATA: අකුසල සිත් 2
// ============================================================
var akusala2Data = [
  { num: '1 වන සිත', name: 'සොමනස් සහගත දිට්ඨිගත සම්පයුත්ත අසංඛාරික', ditthi: 0, total: 20,
    desc: 'සොමනස් සහගත වූ නිසා පීති යෙදේ. දිට්ඨිගත 20 + අසංඛාරික 18 + ලෝභ චෛතසික 8 + සොමනස් ශ්‍රද්ධාදී ධර්ම.' },
  { num: '2 වන සිත', name: 'සොමනස් සහගත දිට්ඨිගත විප්පයුත්ත සසංඛාරික', ditthi: 2, total: 22,
    desc: 'සොමනස් සහගත වූ නිසා පීති යෙදේ. දිට්ඨිගත 22 + සසංඛාරික 18 + ලෝභ චෛතසික 8 + සොමනස් ශ්‍රද්ධාදී ධර්ම.' }
];

// ============================================================
// 16. DATA: අබ්‍යාකත සිත් 2
// ============================================================
var abyakata2Data = [
  { num: '1 වන සිත', name: 'අබ්‍යාකත සිත් (උපෙක්ඛා සහගත)', piti: 0, sukha: 1, total: 15 },
  { num: '2 වන සිත', name: 'අබ්‍යාකත සිත් (සොමනස් සහගත)', piti: 1, sukha: 0, total: 15 }
];

// ============================================================
// 17. DATA: අකුසල සිත්වල සංග්‍රහනය 7
// ============================================================
var akusalaSangraha7Data = [
  { num: 1, name: 'ලෝභ සහගත සිත් 2', count: 19 },
  { num: 2, name: 'ලෝභ සහගත සිත් 2', count: 20 },
  { num: 3, name: 'දෝස සහගත සිත් 2', count: 21 },
  { num: 4, name: 'දෝස සහගත සිත් 2', count: 20 },
  { num: 5, name: 'මෝහ සහගත සිත් 2', count: 20 },
  { num: 6, name: 'මෝහ සහගත සිත් 2', count: 22 },
  { num: 7, name: 'මෝහ සිත් 2', count: 15 }
];

// ============================================================
// 18. DATA: ප්‍රකීර්ණක චෛතසික 6
// ============================================================
var pakirnakaData = [
  { name: 'විතක්ක', yedena: 55, noyedena: 66,
    desc: 'ද්විපඤ්චවිඤ්ඤාණ සිත් 10 හැර ඉතිරි කාමාවචර සිත් 44, ප්‍රථම ධ්‍යාන සිත් 11 - මුළු සිත් 55ක් සමඟ යෙදේ.' },
  { name: 'විචාර', yedena: 66, noyedena: 55,
    desc: 'විතක්ක යෙදෙන සිත් 55 සහ ද්විතිය ධ්‍යානික සිත් 11 - මුළු සිත් 66ක් සමඟ යෙදේ. ඉතිරි සිත් 55 සමඟ නොයෙදේ.' },
  { name: 'අධිමොක්ඛ', yedena: 77, noyedena: 44,
    desc: 'ද්විපඤ්චවිඤ්ඤාණ සහ විචිකිච්ඡා සහගත සිත යන සිත් 11 හැර ඉතිරි සිත් 77 සමඟ යෙදේ.' },
  { name: 'විරිය', yedena: 73, noyedena: 48,
    desc: 'උපෙක්ඛා සහගත සිත් 55, ද්විපඤ්චවිඤ්ඤාණ 10, ද්වේෂ්මූල 2, කායවිඤ්ඤාණ 2 - මුළු සිත් 73 සමඟ යෙදේ.' },
  { name: 'පීති', yedena: 51, noyedena: 70,
    desc: 'දෝමනස්ස සහගත සිත් 2, උපෙක්ඛා සහගත සිත් 55, කායවිඤ්ඤාණ 2, චතුර්ථ ධ්‍යාන සිත් 11 - මුළු සිත් 51 සමඟ යෙදේ.' },
  { name: 'ඡන්ද', yedena: 69, noyedena: 52,
    desc: 'අහේතුක සිත් 18 සහ මෝහමූල සිත් 2 හැර ඉතිරි සිත් 69 සමඟ යෙදේ.' }
];

// ============================================================
// 19. DATA: අකුසල චෛතසික 14
// ============================================================
var akusalaCetasikaData = [
  { name: 'මෝහ', yedena: 'සියලු අකුසල සිත් 12',
    desc: 'අකුසල සාධාරණ - සියලු අකුසල සිත් සමඟ යෙදේ.' },
  { name: 'අහිරික', yedena: 'සියලු අකුසල සිත් 12',
    desc: 'අකුසල සාධාරණ - පව් කිරීමට ලැජ්ජා නොවීම.' },
  { name: 'අනොත්තප්ප', yedena: 'සියලු අකුසල සිත් 12',
    desc: 'අකුසල සාධාරණ - පව් කිරීමට බිය නොවීම.' },
  { name: 'උද්ධච්ච', yedena: 'සියලු අකුසල සිත් 12',
    desc: 'අකුසල සාධාරණ - සිතේ නොසන්සුන් බව.' },
  { name: 'ලෝභ', yedena: 'ලෝභ මූල සිත් 8',
    desc: 'අකුසල අසාධාරණ - ලෝභ මූල සිත් 8 සමඟ යෙදේ.' },
  { name: 'දිට්ඨි', yedena: 'දිට්ඨි සම්පයුත්ත සිත් 4',
    desc: 'අකුසල අසාධාරණ - වැරදි දෘෂ්ටි සහගත සිත් 4 සමඟ යෙදේ.' },
  { name: 'මාන', yedena: 'දිට්ඨි විප්පයුත්ත සිත් 4',
    desc: 'අකුසල අසාධාරණ - උඩඟු බව. සමහර අවස්ථාවල යෙදේ.' },
  { name: 'දෝස', yedena: 'දෝස මූල සිත් 2',
    desc: 'අකුසල අසාධාරණ - දෝස මූල සිත් 2 සමඟ යෙදේ.' },
  { name: 'ඊර්ෂ්‍යා', yedena: 'දෝස මූල සිත් 2',
    desc: 'අකුසල අසාධාරණ - සමහර අවස්ථාවල පමණක් යෙදේ.' },
  { name: 'මච්ඡරිය', yedena: 'දෝස මූල සිත් 2',
    desc: 'අකුසල අසාධාරණ - සමහර අවස්ථාවල පමණක් යෙදේ.' },
  { name: 'කුක්කුච්ච', yedena: 'දෝස මූල සිත් 2',
    desc: 'අකුසල අසාධාරණ - ක්‍රියාව ගැන පසුතැවීම.' },
  { name: 'ථීන', yedena: 'සසංඛාරික සිත් 5',
    desc: 'අකුසල අසාධාරණ - සිතේ මැළි බව. සමහර අවස්ථාවල යෙදේ.' },
  { name: 'මිද්ධ', yedena: 'සසංඛාරික සිත් 5',
    desc: 'අකුසල අසාධාරණ - සිතේ නිදිමත බව. සමහර අවස්ථාවල යෙදේ.' },
  { name: 'විචිකිච්ඡා', yedena: 'මෝහ මූල සිත් 2 (එකක් පමණක්)',
    desc: 'අකුසල අසාධාරණ - සැක කිරීම. විචිකිච්ඡා සහගත සිත සමඟ පමණක් යෙදේ.' }
];

// ============================================================
// 20. DATA: සොභන චෛතසික
// ============================================================
var sobhanaCetasikaData = [
  { name: 'සොභන සාධාරණ 19', yedena: 'සියලු සොභන සිත් 59',
    desc: 'සද්ධා, සති, හිරි, ඔත්තප්ප, අලෝභ, අදෝස, අමෝහ, උපෙක්ඛා, පස්සද්ධි, ලහුතා, මුදුතා, කම්මඤ්ඤතා, පාගුඤ්ඤතා, උජුකතා, අඤ්ඤසමාන 13 - මුළු 19යි.' },
  { name: 'විරති 3', yedena: 'සිත් 16',
    desc: 'සම්මා වාචා, සම්මා කම්මන්ත, සම්මා ආජීව - ලෝකෝත්තර සිත් 8 සහ කාමාවචර කුසල සිත් 8 සමඟ යෙදේ.' },
  { name: 'අප්පමඤ්ඤා 2 (කරුණා, මුදිතා)', yedena: 'සිත් 28',
    desc: 'ප්‍රථම - ද්විතීය - තාතීය - චතුර්ථ ධ්‍යාන රූපාවචර සිත් 12, කාමාවචර කුසල් 8, සහේතුක කාමාවචර ක්‍රියා 8 - මුළු සිත් 28 සමඟ යෙදේ.' },
  { name: 'පඤ්ඤා', yedena: 'සිත් 47',
    desc: 'ඤාණ සම්පයුත්ත සිත් 47 සමඟ යෙදේ. ඤාණ විප්පයුත්ත සිත් සමඟ නොයෙදේ.' }
];

// ============================================================
// 21. DATA: අකුසල සිත් 12 චෛතසික ගණන්
// ============================================================
var akusalaCittaData = [
  { num: 1, name: 'ලෝභ මූල පළමු සිත - සොමනස් සහගත දිට්ඨිගත සම්පයුත්ත අසංඛාරික', count: 19 },
  { num: 2, name: 'ලෝභ මූල දෙවන සිත - සොමනස් සහගත දිට්ඨිගත සම්පයුත්ත සසංඛාරික', count: 21 },
  { num: 3, name: 'ලෝභ මූල තුන් වන සිත - සොමනස් සහගත දිට්ඨිගත විප්පයුත්ත අසංඛාරික', count: 20 },
  { num: 4, name: 'ලෝභ මූල සතර වන සිත - සොමනස් සහගත දිට්ඨිගත විප්පයුත්ත සසංඛාරික', count: 21 },
  { num: 5, name: 'ලෝභ මූල පස් වන සිත - උපෙක්ඛා සහගත දිට්ඨිගත සම්පයුත්ත අසංඛාරික', count: 18 },
  { num: 6, name: 'ලෝභ මූල සවන සිත - උපෙක්ඛා සහගත දිට්ඨිගත සම්පයුත්ත සසංඛාරික', count: 20 },
  { num: 7, name: 'ලෝභ මූල සත්වන සිත - උපෙක්ඛා සහගත දිට්ඨිගත විප්පයුත්ත අසංඛාරික', count: 18 },
  { num: 8, name: 'ලෝභ මූල අට වන සිත - උපෙක්ඛා සහගත දිට්ඨිගත විප්පයුත්ත සසංඛාරික', count: 20 },
  { num: 9, name: 'දෝස මූල පළමු සිත - සොමනස් සහගත පටිඝ සම්පයුත්ත අසංඛාරික', count: 20 },
  { num: 10, name: 'දෝස මූල දෙවන සිත - සොමනස් සහගත පටිඝ සම්පයුත්ත සසංඛාරික', count: 22 },
  { num: 11, name: 'මෝහ මූල පළමු සිත - උපෙක්ඛා සහගත විචිකිච්ඡා සම්පයුත්ත', count: 15 },
  { num: 12, name: 'මෝහ මූල දෙවන සිත - උපෙක්ඛා සහගත උද්ධච්ච සම්පයුත්ත', count: 15 }
];

// ============================================================
// 22. DATA: අහේතුක සිත් 18 චෛතසික ගණන්
// ============================================================
var ahetukaCittaData = [
  { num: 1, name: 'පඤ්චද්වාරාවජ්ජන සිත (උපෙක්ඛා සහගත)', count: 11 },
  { num: 2, name: 'පඤ්චද්වාරාවජ්ජන සිත (උපෙක්ඛා සහගත)', count: 11 },
  { num: 3, name: 'කායවිඤ්ඤාණ සිත (සුඛ සහගත)', count: 8 },
  { num: 4, name: 'කායවිඤ්ඤාණ සිත (දුක්ඛ සහගත)', count: 8 },
  { num: 5, name: 'චක්ඛුවිඤ්ඤාණ', count: 7 },
  { num: 6, name: 'සොතවිඤ්ඤාණ', count: 7 },
  { num: 7, name: 'ඝානවිඤ්ඤාණ', count: 7 },
  { num: 8, name: 'ජිව්හාවිඤ්ඤාණ', count: 7 },
  { num: 9, name: 'සම්පටිච්ඡන සිත්', count: 10 },
  { num: 10, name: 'සම්පටිච්ඡන සිත්', count: 10 },
  { num: 11, name: 'මනෝධාතු සම්පටිච්ඡන', count: 11 },
  { num: 12, name: 'උපෙක්ඛා සන්තීරණ', count: 10 },
  { num: 13, name: 'සොමනස් සන්තීරණ', count: 11 },
  { num: 14, name: 'මනෝධාතු අරූපාවචර විපාක', count: 10 },
  { num: 15, name: 'මනෝධාතු අරූපාවචර විපාක', count: 10 },
  { num: 16, name: 'මනෝවිඤ්ඤාණ අරූපාවචර විපාක', count: 10 },
  { num: 17, name: 'මනෝවිඤ්ඤාණ අරූපාවචර විපාක', count: 10 },
  { num: 18, name: 'හසිතුප්පාද', count: 12 }
];

// ============================================================
// 23. DATA: කාමසෝහන සිත් 24 චෛතසික ගණන්
// ============================================================
var kamasohanaCittaData = [
  { num: 1, name: 'මහාකුසල් පළමු සිත - සොමනස් සහගත ඤාණ සම්පයුත්ත අසංඛාරික', count: 38 },
  { num: 2, name: 'මහාකුසල් දෙවන සිත - සොමනස් සහගත ඤාණ සම්පයුත්ත සසංඛාරික', count: 37 },
  { num: 3, name: 'මහාකුසල් තුන් වන සිත - සොමනස් සහගත ඤාණ විප්පයුත්ත අසංඛාරික', count: 37 },
  { num: 4, name: 'මහාකුසල් සතර වන සිත - සොමනස් සහගත ඤාණ විප්පයුත්ත සසංඛාරික', count: 36 },
  { num: 5, name: 'මහාකුසල් පස් වන සිත - උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත අසංඛාරික', count: 37 },
  { num: 6, name: 'මහාකුසල් සවන සිත - උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත සසංඛාරික', count: 36 },
  { num: 7, name: 'මහාකුසල් සත්වන සිත - උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත අසංඛාරික', count: 36 },
  { num: 8, name: 'මහාකුසල් අට වන සිත - උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත සසංඛාරික', count: 35 },
  { num: 9, name: 'මහාක්‍රියා පළමු සිත - සොමනස් සහගත ඤාණ සම්පයුත්ත අසංඛාරික', count: 35 },
  { num: 10, name: 'මහාක්‍රියා දෙවන සිත - සොමනස් සහගත ඤාණ සම්පයුත්ත සසංඛාරික', count: 34 },
  { num: 11, name: 'මහාක්‍රියා තුන් වන සිත - සොමනස් සහගත ඤාණ විප්පයුත්ත අසංඛාරික', count: 34 },
  { num: 12, name: 'මහාක්‍රියා සතර වන සිත - සොමනස් සහගත ඤාණ විප්පයුත්ත සසංඛාරික', count: 33 },
  { num: 13, name: 'මහාක්‍රියා පස් වන සිත - උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත අසංඛාරික', count: 34 },
  { num: 14, name: 'මහාක්‍රියා සවන සිත - උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත සසංඛාරික', count: 33 },
  { num: 15, name: 'මහාක්‍රියා සත්වන සිත - උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත අසංඛාරික', count: 33 },
  { num: 16, name: 'මහාක්‍රියා අට වන සිත - උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත සසංඛාරික', count: 32 },
  { num: 17, name: 'මහාවිපාක පළමු සිත - සොමනස් සහගත ඤාණ සම්පයුත්ත අසංඛාරික', count: 33 },
  { num: 18, name: 'මහාවිපාක දෙවන සිත - සොමනස් සහගත ඤාණ සම්පයුත්ත සසංඛාරික', count: 32 },
  { num: 19, name: 'මහාවිපාක තුන් වන සිත - සොමනස් සහගත ඤාණ විප්පයුත්ත අසංඛාරික', count: 32 },
  { num: 20, name: 'මහාවිපාක සතර වන සිත - සොමනස් සහගත ඤාණ විප්පයුත්ත සසංඛාරික', count: 31 },
  { num: 21, name: 'මහාවිපාක පස් වන සිත - උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත අසංඛාරික', count: 32 },
  { num: 22, name: 'මහාවිපාක සවන සිත - උපෙක්ඛා සහගත ඤාණ සම්පයුත්ත සසංඛාරික', count: 31 },
  { num: 23, name: 'මහාවිපාක සත්වන සිත - උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත අසංඛාරික', count: 31 },
  { num: 24, name: 'මහාවිපාක අට වන සිත - උපෙක්ඛා සහගත ඤාණ විප්පයුත්ත සසංඛාරික', count: 30 }
];

// ============================================================
// 24. DATA: රූපාවචර සහ අරූපාවචර
// ============================================================
var rupavacaraData = [
  { name: 'ප්‍රථම ධ්‍යාන සිත් 3', vitakka: 1, vicara: 1, piti: 1, appamanna: 0, virati: 0, total: 35 },
  { name: 'ද්විතීය ධ්‍යාන සිත් 3', vitakka: 0, vicara: 1, piti: 1, appamanna: 0, virati: 0, total: 34 },
  { name: 'තාතීය ධ්‍යාන සිත් 3', vitakka: 0, vicara: 0, piti: 1, appamanna: 0, virati: 0, total: 33 },
  { name: 'චතුර්ථ ධ්‍යාන සිත් 3', vitakka: 0, vicara: 0, piti: 0, appamanna: 0, virati: 0, total: 32 },
  { name: 'පඤ්චම ධ්‍යාන සිත් 15', vitakka: 0, vicara: 0, piti: 0, appamanna: 0, virati: 0, total: 30 },
  { name: 'අරූපාවචර සිත් 12', vitakka: 0, vicara: 0, piti: 0, appamanna: 0, virati: 0, total: 30 }
];

// ============================================================
// 25. DATA: ලෝකෝත්තර
// ============================================================
var lokuttaraDetailData = [
  { name: 'ලෝකෝත්තර ප්‍රථම ධ්‍යාන සිත් 8', vitakka: 1, vicara: 1, piti: 1, total: 36 },
  { name: 'ලෝකෝත්තර ද්විතීය ධ්‍යාන සිත් 8', vitakka: 0, vicara: 1, piti: 1, total: 35 },
  { name: 'ලෝකෝත්තර තාතීය ධ්‍යාන සිත් 8', vitakka: 0, vicara: 0, piti: 1, total: 34 },
  { name: 'ලෝකෝත්තර චතුර්ථ ධ්‍යාන සිත් 8', vitakka: 0, vicara: 0, piti: 0, total: 33 },
  { name: 'ලෝකෝත්තර පඤ්චම ධ්‍යාන සිත් 8', vitakka: 0, vicara: 0, piti: 0, total: 33 }
];

// ============================================================
// 26. RENDER FUNCTIONS - samprayoga.html සඳහා
// ============================================================

function renderSamprayogaTable() {
  var tbody = document.getElementById('samprayoga-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  samprayogaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      '<td style="font-weight:600;">' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>' +
      '<td style="font-size:0.75rem;line-height:1.6;">' + item.desc + '</td>';
    tbody.appendChild(tr);
  });
}

function renderLokkuttaraTable() {
  var tbody = document.getElementById('lokkuttara-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  lokkuttaraData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td><span class="font-bold text-saffron-700 dark:text-saffron-300">' + item.num + '.</span> ' + item.name + '</td>' +
      '<td style="font-size:0.7rem;line-height:1.5;">' + item.yojana + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vitakka + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vicara + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.piti + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>';
    tbody.appendChild(tr);
  });
}

function renderMahaggataTable() {
  var tbody = document.getElementById('mahaggata-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  mahaggataData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td><span class="font-bold text-saffron-700 dark:text-saffron-300">' + item.num + '.</span> ' + item.name + '</td>' +
      '<td style="font-size:0.7rem;line-height:1.5;">' + item.yojana + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vitakka + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vicara + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.piti + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.appamanna + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>';
    tbody.appendChild(tr);
  });
}

function renderKamasohanaTable() {
  var tbody = document.getElementById('kamasohana-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  var currentGroup = '';
  kamasohanaData.forEach(function(item) {
    var tr = document.createElement('tr');
    var nameCell = '';
    if (item.name !== currentGroup) {
      nameCell = '<td rowspan="4" style="font-weight:700;background:rgba(251,191,36,0.08);vertical-align:middle;color:#92400e;font-size:0.75rem;">' + item.name + '</td>';
      currentGroup = item.name;
    }
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      nameCell +
      '<td style="font-size:0.75rem;">' + item.sub + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAkusalaTable() {
  var tbody = document.getElementById('akusala-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  akusalaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td><span class="font-bold text-saffron-700 dark:text-saffron-300">' + item.num + '.</span> ' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAhetukaTable() {
  var tbody = document.getElementById('ahetuka-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  ahetuka18Data.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td><span class="font-bold text-saffron-700 dark:text-saffron-300">' + item.num + '.</span> ' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>';
    tbody.appendChild(tr);
  });
}

function renderSangraha5Table() {
  var tbody = document.getElementById('sangraha5-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  sangraha5Data.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      '<td style="font-weight:700;">' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>' +
      '<td style="font-size:0.75rem;line-height:1.6;">' + item.desc + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAhetuka18Detail() {
  var tbody = document.getElementById('ahetuka18-detail-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  ahetuka18Detail.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      '<td style="font-size:0.75rem;">' + item.name + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.kam + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.vitakka + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.virati + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.piti + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.chanda + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>';
    tbody.appendChild(tr);
  });
}

function renderKusala8Table() {
  var tbody = document.getElementById('kusala8-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  kusala8Data.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:700;font-size:0.75rem;">' + item.num + '</td>' +
      '<td style="font-size:0.75rem;">' + item.name + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.piti + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.sukha + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.nanakk + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAkusala2Table() {
  var tbody = document.getElementById('akusala2-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  akusala2Data.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:700;font-size:0.75rem;">' + item.num + '</td>' +
      '<td style="font-size:0.75rem;">' + item.name + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.ditthi + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>' +
      '<td style="font-size:0.7rem;line-height:1.5;color:#666;">' + item.desc + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAbyakata2Table() {
  var tbody = document.getElementById('abyakata2-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  abyakata2Data.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:700;font-size:0.75rem;">' + item.num + '</td>' +
      '<td style="font-size:0.75rem;">' + item.name + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.piti + '</td>' +
      '<td style="text-align:center;font-weight:600;">' + item.sukha + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAkusalaSangraha7Table() {
  var tbody = document.getElementById('akusala-sangraha7-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  akusalaSangraha7Data.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      '<td style="font-weight:600;">' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>';
    tbody.appendChild(tr);
  });
}

// ============================================================
// 27. RENDER FUNCTIONS - පාඩම් 7-13 සඳහා
// ============================================================

function renderPakirnakaTable() {
  var tbody = document.getElementById('pakirnaka-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  pakirnakaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:700;">' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.yedena + '</td>' +
      '<td style="text-align:center;font-weight:600;color:#ef4444;">' + item.noyedena + '</td>' +
      '<td style="font-size:0.75rem;line-height:1.5;">' + item.desc + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAkusalaCetasikaTable() {
  var tbody = document.getElementById('akusala-cetasika-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  akusalaCetasikaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:700;">' + item.name + '</td>' +
      '<td style="font-size:0.75rem;">' + item.yedena + '</td>' +
      '<td style="font-size:0.75rem;line-height:1.5;">' + item.desc + '</td>';
    tbody.appendChild(tr);
  });
}

function renderSobhanaCetasikaTable() {
  var tbody = document.getElementById('sobhana-cetasika-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  sobhanaCetasikaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:700;">' + item.name + '</td>' +
      '<td style="font-size:0.75rem;text-align:center;">' + item.yedena + '</td>' +
      '<td style="font-size:0.75rem;line-height:1.5;">' + item.desc + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAkusalaCittaTable() {
  var tbody = document.getElementById('akusala-citta-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  akusalaCittaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      '<td style="font-size:0.75rem;">' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>';
    tbody.appendChild(tr);
  });
}

function renderAhetukaCittaTable() {
  var tbody = document.getElementById('ahetuka-citta-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  ahetukaCittaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      '<td style="font-size:0.75rem;">' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>';
    tbody.appendChild(tr);
  });
}

function renderKamasohanaCittaTable() {
  var tbody = document.getElementById('kamasohana-citta-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  kamasohanaCittaData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="num-col">' + item.num + '</td>' +
      '<td style="font-size:0.75rem;">' + item.name + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>';
    tbody.appendChild(tr);
  });
}

function renderRupavacaraTable() {
  var tbody = document.getElementById('rupavacara-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  rupavacaraData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:600;font-size:0.75rem;">' + item.name + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vitakka + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vicara + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.piti + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.appamanna + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.virati + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>';
    tbody.appendChild(tr);
  });
}

function renderLokuttaraDetailTable() {
  var tbody = document.getElementById('lokuttara-detail-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  lokuttaraDetailData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:600;font-size:0.75rem;">' + item.name + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vitakka + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.vicara + '</td>' +
      '<td style="text-align:center;font-weight:700;">' + item.piti + '</td>' +
      '<td class="count-col highlight">' + item.total + '</td>';
    tbody.appendChild(tr);
  });
}

function renderQuickSamprayogaTable() {
  var tbody = document.getElementById('quick-samprayoga-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  var quickData = [
    { rashi: 'සර්වචිත්ත සාධාරණ', count: 7, desc: 'සියලු සිත් 89/121 සමඟ යෙදේ' },
    { rashi: 'ප්‍රකීර්ණක', count: 6, desc: 'කුසලාකුසල ලෞකික ලෝකෝත්තර සිත් සමඟ සුදුසු පරිදි යෙදේ' },
    { rashi: 'අකුසල සාධාරණ', count: 4, desc: 'සියලු අකුසල සිත් 12 සමඟ යෙදේ' },
    { rashi: 'අකුසල අසාධාරණ', count: 10, desc: 'අදාළ අකුසල සිත් සමඟ පමණක් යෙදේ' },
    { rashi: 'සොභන සාධාරණ', count: 19, desc: 'සියලු සොභන සිත් 59 සමඟ යෙදේ' },
    { rashi: 'විරති', count: 3, desc: 'සිත් 16 සමඟ යෙදේ' },
    { rashi: 'අප්පමඤ්ඤා', count: 2, desc: 'සිත් 28 සමඟ යෙදේ' },
    { rashi: 'පඤ්ඤා', count: 1, desc: 'සිත් 47 සමඟ යෙදේ' }
  ];
  quickData.forEach(function(item) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td style="font-weight:700;">' + item.rashi + '</td>' +
      '<td class="count-col highlight">' + item.count + '</td>' +
      '<td style="font-size:0.75rem;line-height:1.5;">' + item.desc + '</td>';
    tbody.appendChild(tr);
  });
}

// ============================================================
// 28. INITIALIZE APP
// ============================================================
function initSamprayogaApp() {
  console.log('[samprayoga] Initializing...');
  
  // samprayoga.html tables
  renderSamprayogaTable();
  renderLokkuttaraTable();
  renderMahaggataTable();
  renderKamasohanaTable();
  renderAkusalaTable();
  renderAhetukaTable();
  renderSangraha5Table();
  renderAhetuka18Detail();
  renderKusala8Table();
  renderAkusala2Table();
  renderAbyakata2Table();
  renderAkusalaSangraha7Table();
  
  // පාඩම් 7-13 tables
  renderPakirnakaTable();
  renderAkusalaCetasikaTable();
  renderSobhanaCetasikaTable();
  renderAkusalaCittaTable();
  renderAhetukaCittaTable();
  renderKamasohanaCittaTable();
  renderRupavacaraTable();
  renderLokuttaraDetailTable();
  
  // caitasika.html table
  renderQuickSamprayogaTable();
  
  // පළමු accordion එක විවෘත කරන්න
  setTimeout(function() {
    var firstAccordion = document.getElementById('accordion-lokkuttara');
    var firstIcon = document.getElementById('accordion-icon-lokkuttara');
    if (firstAccordion && firstIcon) {
      firstAccordion.classList.add('open');
      firstIcon.style.transform = 'rotate(180deg)';
    }
  }, 300);
  
  console.log('[samprayoga] Initialization complete');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSamprayogaApp);
} else {
  initSamprayogaApp();
}

// ============================================================
// 29. GLOBAL EXPORTS
// ============================================================
window.toggleDarkMode = toggleDarkMode;
window.switchTab = switchTab;
window.switchCaitasikaTab = switchCaitasikaTab;
window.toggleAccordion = toggleAccordion;
window.scrollToTop = scrollToTop;

console.log('[samprayoga.js] Loaded successfully - ready for samprayoga.html and caitasika.html');
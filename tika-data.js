// tika-data.js
// ============================================================
// අභිධර්ම මාතිකා අධ්‍යයන ප්‍රවේශය - තික මාතිකා 22
// Helper functions + tikaFullData array + registerTika()
// ============================================================

// tika-data.js
// ============================================================
// අභිධර්ම මාතිකා අධ්‍යයන ප්‍රවේශය - තික මාතිකා 22
// Helper functions + tikaFullData array + registerTika()
// ============================================================

// ============================================================
// 1. HELPER FUNCTIONS
// ============================================================

function makeSkandha(rupa, vedana, sanna, sankhara, vinnana) {
  return [
    { num: 1, name: 'රූපක්ඛන්ධෝ', value: rupa },
    { num: 2, name: 'වේදනාක්ඛන්ධෝ', value: vedana },
    { num: 3, name: 'සඤ්ඤාක්ඛන්ධෝ', value: sanna },
    { num: 4, name: 'සංඛාරක්ඛන්ධෝ', value: sankhara },
    { num: 5, name: 'විඤ්ඤාණක්ඛන්ධෝ', value: vinnana }
  ];
}

function makeSathya(arr) {
  return arr;
}

function makeAyatana(entries) {
  return entries;
}

function makeDhatu(entries) {
  return entries;
}

// ═══ NEW: විස්තරාත්මක විවරණය සඳහා helper ═══
function makeArthaVistara(nirukthi, abhidheya, sangraha, vishesha) {
  return { nirukthi, abhidheya, sangraha, vishesha };
}

// ============================================================
// 2. TIKA DATA ARRAY (හිස් - registerTika() මගින් populate වේ)
// ============================================================

var tikaFullData = [];

// ============================================================
// 3. REGISTER TIKA FUNCTION
// ============================================================

function registerTika(tikaObject) {
  if (!tikaObject || !tikaObject.title) {
    console.warn('[tika-data.js] registerTika: වලංගු නොවන තිකයක්.');
    return;
  }
  
  var exists = tikaFullData.some(function(t) {
    return t.title === tikaObject.title;
  });
  
  if (exists) {
    console.warn('[tika-data.js] registerTika: "' + tikaObject.title + '" දැනටමත් ලියාපදිංචි කර ඇත.');
    return;
  }
  
  tikaFullData.push(tikaObject);
  console.log('[tika-data.js] ලියාපදිංචි කරන ලදී: ' + tikaObject.title + ' (මුළු: ' + tikaFullData.length + ')');
}

// ============================================================
// 4. FALLBACK MECHANISM
// ============================================================
var tikaPlaceholderTitles = [
  '01. කුසල තිකය',
  '02. වේදනා තිකය',
  '03. විපාක තිකය',
  '04. උපාදින්න තිකය',
  '05. සංකිලිට්ඨ තිකය',
  '06. විතක්ක තිකය',
  '07. පීති තිකය',
  '08. දස්සන තිකය',
  '09. දස්සනහේතු තිකය',
  '10. ආවයගාමි තිකය',
  '11. සේඛ තිකය',
  '12. පරිත්ත තිකය',
  '13. පරිත්තාරම්මණ තිකය',
  '14. හීන තිකය',
  '15. මිච්ඡත්ත තිකය',
  '16. මග්ගාරම්මණ තිකය',
  '17. උප්පන්න තිකය',
  '18. අතීත තිකය',
  '19. අතීතාරම්මණ තිකය',
  '20. අජ්ඣත්ත තිකය',
  '21. අජ්ඣත්තාරම්මණ තිකය',
  '22. සනිදස්සන තිකය'
];

function fillMissingTikas() {
  var loadedTitles = tikaFullData.map(function(t) { return t.title; });
  
  tikaPlaceholderTitles.forEach(function(title) {
    if (loadedTitles.indexOf(title) === -1) {
      tikaFullData.push({
        title: title,
        isPlaceholder: true,
        padas: [
          {
            name: 'දත්ත ලබාගත නොහැක',
            desc: 'මෙම තිකයට අදාළ ගොනුව තවම සාදා නැත.',
            padaArtha: 'මෙම තිකයට අදාළ ගොනුව (tika/' + String(title.substring(0,2)).trim() + '-...) තවම සාදා නැත. කරුණාකර ගොනුව සාදන්න.',
            svartha: 'දත්ත නොමැත.',
            skandha: makeSkandha('දත්ත නොමැත', 'දත්ත නොමැත', 'දත්ත නොමැත', 'දත්ත නොමැත', 'දත්ත නොමැත'),
            ayatana: makeAyatana([{ num: 1, name: 'දත්ත නොමැත', value: '-' }]),
            dhatu: makeDhatu([{ num: 1, name: 'දත්ත නොමැත', value: '-' }]),
            sathya: makeSathya([
              { num: 1, name: 'දුක්ඛ සත්‍යය', value: '-' },
              { num: 2, name: 'සමුදය සත්‍යය', value: '-' },
              { num: 3, name: 'නිරෝධ සත්‍යය', value: '-' },
              { num: 4, name: 'මාර්ග සත්‍යය', value: '-' }
            ]),
            mukta: '-'
          }
        ]
      });
    }
  });
  
  tikaFullData.sort(function(a, b) {
    var numA = parseInt(a.title.match(/^(\d+)/)[1], 10);
    var numB = parseInt(b.title.match(/^(\d+)/)[1], 10);
    return numA - numB;
  });
  
  console.log('[tika-data.js] Fallback සම්පූර්ණයි. මුළු තික: ' + tikaFullData.length);
}
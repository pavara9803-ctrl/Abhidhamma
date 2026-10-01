/**
 * අභිධර්ම රූප විභාගය සහ සමුට්ඨාන නය - Universal Search & Logic
 * 
 * මෙම ගොනුව citta.js ආකාරයටම සකස් කර ඇත.
 * උප බොත්තම් ක්ලික් කල විට අදාළ තොරතුරු එම බොත්තමට යටින්ම පෙන්වයි.
 */

// ============================================================
// 1. මූලික පරමාර්ථ රූප 28 දත්ත එකතුව
// ============================================================
const rupaData = [
  {
    category: "භූත රූප (මහා භූත 4)",
    description: "සියලු රූපයන්ට මූලික ආධාරය වන ප්‍රධාන ධාතු සතරයි.",
    items: [
      { name: "පඨවි ධාතුව", meaning: "තද ගතිය හෝ මොළොක් ගතිය (කර්කශ/මෘදු ලක්ෂණය)", role: "පිහිටීම ලබා දීම" },
      { name: "ආපෝ ධාතුව", meaning: "වැගිරෙන ගතිය හෝ එකතු කර තබාගන්නා ගතිය (බන්ධන ලක්ෂණය)", role: "එකට බැඳ තැබීම" },
      { name: "තේජෝ ධාතුව", meaning: "උණුසුම් හෝ සිසිල් ගතිය (පැසවන/පරිපාක ලක්ෂණය)", role: "පැසවීම හා මුහුකුරුවීම" },
      { name: "වායෝ ධාතුව", meaning: "සෙලවෙන හෝ තල්ලු කරන ගතිය (චලන/විම්භන ලක්ෂණය)", role: "හැසිරවීම හා තල්ලු කිරීම" }
    ]
  },
  {
    category: "ප්‍රසාද රූප (5)",
    description: "අරමුණු ග්‍රහණය කරගත හැකි අභ්‍යන්තර ඉන්ද්‍රිය රූප 5 කි.",
    items: [
      { name: "චක්ඛු ප්‍රසාදය", meaning: "ඇසෙහි ඇති රූප (වර්ණ) ග්‍රහණය කරගන්නා ප්‍රසාද රූපය", role: "දැකීමේ ක්‍රියාව" },
      { name: "සෝත ප්‍රසාදය", meaning: "කනෙහි ඇති ශබ්ද ග්‍රහණය කරගන්නා ප්‍රසාද රූපය", role: "ඇසීමේ ක්‍රියාව" },
      { name: "ඝාන ප්‍රසාදය", meaning: "නාසයේ ඇති ගන්ධය ග්‍රහණය කරගන්නා ප්‍රසාද රූපය", role: "සුවඳ/ගඳ දැනීම" },
      { name: "ජිව්හා ප්‍රසාදය", meaning: "දිවෙහි ඇති රස ග්‍රහණය කරගන්නා ප්‍රසාද රූපය", role: "රස දැනීම" },
      { name: "කාය ප්‍රසාදය", meaning: "ශරීරය පුරා ඇති ස්පර්ශය ග්‍රහණය කරගන්නා ප්‍රසාද රූපය", role: "ස්පර්ශ දැනීම" }
    ]
  },
  {
    category: "ගෝචර රූප / විෂය රූප (4)",
    description: "ප්‍රසාද රූප වලට හසුවන බාහිර අරමුණු (පොට්ඨබ්බය මහාභූත 3 කින් ආවරණය වේ).",
    items: [
      { name: "රූප (වර්ණ)", meaning: "ඇසට පෙනෙන පාට හෙවත් වර්ණය", role: "චක්ඛු ප්‍රසාදයට ගෝචර වීම" },
      { name: "සද්ද (ශබ්දය)", meaning: "කනට ඇසෙන සියලු හඬවල්", role: "සෝත ප්‍රසාදයට ගෝචර වීම" },
      { name: "ගන්ධ (සුවඳ/ගඳ)", meaning: "නාසයට දැනෙන සියලු සුවඳ හා දුර්ගන්ධ", role: "ඝාන ප්‍රසාදයට ගෝචර වීම" },
      { name: "රස (රසය)", meaning: "දිවට දැනෙන ඇඹුල්, තිත්ත, පැණි ආදී රසයන්", role: "ජිව්හා ප්‍රසාදයට ගෝචර වීම" }
    ]
  },
  {
    category: "භාව රූප (2)",
    description: "ස්ත්‍රී සහ පුරුෂ භාවය තීරණය කරන රූප.",
    items: [
      { name: "ඉත්ථින්ද්‍රිය", meaning: "ස්ත්‍රියකගේ හැඩය, ගතිගුණ ආදිය ඇති කරවන රූපය", role: "ස්ත්‍රී බව තීරණය කිරීම" },
      { name: "පුරිසින්ද්‍රිය", meaning: "පුරුෂයෙකුගේ හැඩය, ගතිගුණ ආදිය ඇති කරවන රූපය", role: "පුරුෂ බව තීරණය කිරීම" }
    ]
  },
  {
    category: "හදය රූප (1)",
    description: "මනෝ ධාතු හා මනෝවිඤ්ඤාණ ධාතූන්ට ආධාරක වන රූපය.",
    items: [
      { name: "හදය වත්ථු", meaning: "හෘදය වස්තුව ආශ්‍රිතව සිත පිහිටීමට ආධාර වන රූපය", role: "සිතට වාසස්ථානයක් වීම" }
    ]
  },
  {
    category: "ජීවිත රූප (1)",
    description: "කර්මජ රූපයන් පාලනය කර ආරක්ෂා කරන රූපය.",
    items: [
      { name: "ජීවිතින්ද්‍රිය රූපය", meaning: "කර්මයෙන් උපන් රූපයන්ගේ ජීවය ආරක්ෂා කර තබන ශක්තිය", role: "රූපයන්ගේ ආයුෂ පැවැත්වීම" }
    ]
  },
  {
    category: "ආහාර රූප (1)",
    description: "ශරීරය පෝෂණය කරන ඕජාව.",
    items: [
      { name: "කබලිංකාර ආහාරය (ඕජා)", meaning: "ආහාරයේ ඇති පෝෂණ කොටස හෙවත් ඕජාව", role: "ශරීරයට පෝෂණය හා බලය ලබා දීම" }
    ]
  },
  {
    category: "පරිච්ඡේද රූප (1)",
    description: "රූප කලාප එකිනෙකින් වෙන් කරන අවකාශය.",
    items: [
      { name: "ආකාශ ධාතුව", meaning: "රූප කලාප අතර පවතින හිඩැස හෙවත් අහස", role: "කලාප සීමා කිරීම" }
    ]
  },
  {
    category: "විඤ්ඤත්ති රූප (2)",
    description: "තමන්ගේ අදහස අනුන්ට ප්‍රකාශ කරන ක්‍රියාකාරී රූප.",
    items: [
      { name: "කාය විඤ්ඤත්තිය", meaning: "ශරීර ඉරියව් හා අභිනය මගින් අදහස් ප්‍රකාශ කිරීම", role: "කයින් අදහස් දැක්වීම" },
      { name: "වචී විඤ්ඤත්තිය", meaning: "වචන කථා කිරීමෙන් අදහස් ප්‍රකාශ කිරීම", role: "වචනයෙන් අදහස් දැක්වීම" }
    ]
  },
  {
    category: "විකාර රූප (3)",
    description: "ශරීරයේ පහසු පැවැත්මට හේතුවන විශේෂ ලක්ෂණ.",
    items: [
      { name: "රූපස්ස ලහුතා", meaning: "රූපයේ සැහැල්ලු බව", role: "කයෙහි කඩිසර බව" },
      { name: "රූපස්ස මුදුතා", meaning: "රූපයේ මෘදු මොළොක් බව", role: "කර්මණ්‍ය වීමට පහසු කිරීම" },
      { name: "රූපස්ස කම්මඤ්ඤතා", meaning: "රූපයේ වැඩට සුදුසු නම්‍යශීලී බව", role: "ක්‍රියාවට යෝග්‍ය වීම" }
    ]
  },
  {
    category: "ලක්ඛණ රූප (4)",
    description: "රූපයන්ගේ ඉපදීම, පැවැත්ම, දිරායාම හා විනාශය දක්වන ලක්ෂණ.",
    items: [
      { name: "උපචය", meaning: "රූපයන්ගේ මුල් හටගැනීම හා වර්ධනය", role: "උත්පාදය" },
      { name: "සන්තති", meaning: "රූපයන් නොකඩවා පරම්පරා වශයෙන් පැවතීම", role: "පැවැත්ම" },
      { name: "ජරතා", meaning: "රූපයන්ගේ දිරාපත්වීම හෙවත් මහලුවීම", role: "වයස්ගත වීම" },
      { name: "අනිච්චතා", meaning: "රූපයන්ගේ බිඳී නැතිවීම හෙවත් විනාශය", role: "නිරෝධය" }
    ]
  }
];

// ============================================================
// 2. රූප විභාගය සහ සමුට්ඨාන නය විස්තර දත්ත
// ============================================================
const vibhagaCategories = {
  // --- මූලික වර්ගීකරණය ---
  rupa28: {
    title: "රූප විසි අට (28)",
    desc: "<ul class='space-y-1'>" +
          "<li>• <strong>මහාභූත රූප 4:</strong> පඨවි, ආපෝ, තේජෝ, වායෝ</li>" +
          "<li>• <strong>ප්‍රසාද රූප 5:</strong> චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය</li>" +
          "<li>• <strong>ගෝචර රූප 4 (7):</strong> රූප, සද්ද, ගන්ධ, රස (ඵොට්ඨබ්බය මහාභූත 3 ට අයත් වේ)</li>" +
          "<li>• <strong>භාව රූප 2:</strong> ඉත්ථින්ද්‍රිය, පුරිසින්ද්‍රිය</li>" +
          "<li>• <strong>හදය රූප 1:</strong> හදයවත්ථු</li>" +
          "<li>• <strong>ජීවිත රූප 1:</strong> ජීවිතින්ද්‍රිය</li>" +
          "<li>• <strong>ආහාර රූප 1:</strong> කබළීකාරාහාර (ඕජා)</li>" +
          "<li>• <strong>පරිච්ඡේද රූප 1:</strong> ආකාශ ධාතු</li>" +
          "<li>• <strong>විඤ්ඤත්ති රූප 2:</strong> කායවිඤ්ඤත්ති, වචීවිඤ්ඤත්ති</li>" +
          "<li>• <strong>විකාර රූප 3:</strong> ලහුතා, මුදුතා, කම්මඤ්ඤතා</li>" +
          "<li>• <strong>ලක්ඛණ රූප 4:</strong> උපචය, සන්තති, ජරතා, අනිච්චතා</li>" +
          "</ul>"
  },
  ajjhattika5: {
    title: "අජ්ඣත්තික රූප 5",
    desc: "<p class='mb-2'>අධ්‍යාත්මික හෙවත් තමන්ගේ ඇතුළත පිහිටි ප්‍රසාද රූප 5 කි:</p><ul class='space-y-1'><li>1. චක්ඛු ප්‍රසාදය</li><li>2. සෝත ප්‍රසාදය</li><li>3. ඝාන ප්‍රසාදය</li><li>4. ජිව්හා ප්‍රසාදය</li><li>5. කාය ප්‍රසාදය</li></ul>"
  },
  bahira23: {
    title: "බාහිර රූප 23",
    desc: "<p>ප්‍රසාද රූප 5 හැර සෙසු සියලු රූප 23 ම බාහිර රූප ගණයට අයත් වේ.</p>"
  },
  vatthu6: {
    title: "වත්ථු රූප 6",
    desc: "<p class='mb-2'>සිත් සහ චෛතසිකයන්ට උපකාරී වන වාසස්ථාන රූප 6 කි:</p><ul class='space-y-1'><li>1. චක්ඛුවත්ථු</li><li>2. සෝතවත්ථු</li><li>3. ඝානවත්ථු</li><li>4. ජිව්හාවත්ථු</li><li>5. කායවත්ථු</li><li>6. හදයවත්ථු</li></ul>"
  },
  dvara8: {
    title: "ද්වාර රූප 8",
    desc: "<p class='mb-2'>කර්ම හා සිත් පහළවීමේ දොරටු ලෙස ක්‍රියාකරන රූප 8 කි:</p><ul class='space-y-1'><li>• ප්‍රසාද රූප 5 (පස් දොරටුව)</li><li>• කායවිඤ්ඤත්ති (කාය ද්වාරය)</li><li>• වචීවිඤ්ඤත්ති (වචී ද්වාරය)</li><li>• හදයවත්ථු (මනෝ ද්වාර ආධාරකය)</li></ul>"
  },
  indriya8: {
    title: "ඉන්ද්‍රිය රූප 8",
    desc: "<p class='mb-2'>අදාළ කාර්යයන්හි අධිපතිබව දරන රූප 8 කි:</p><ul class='space-y-1'><li>• ප්‍රසාද රූප 5 (චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය)</li><li>• ඉත්ථින්ද්‍රිය</li><li>• පුරිසින්ද්‍රිය</li><li>• රූප ජීවිතින්ද්‍රිය</li></ul>"
  },
  olarika12: {
    title: "ඔළාරික (ස්ථූල) රූප 12",
    desc: "<p class='mb-2'>ඝට්ටනය වන සුළු රළු/ස්ථූල රූප 12 කි:</p><ul class='space-y-1'><li>• ප්‍රසාද රූප 5</li><li>• ගෝචර රූප 7 (රූප, සද්ද, ගන්ධ, රස, ඵොට්ඨබ්බ වන පඨවි, තේජෝ, වායෝ)</li></ul>"
  },
  sukhuma16: {
    title: "සුඛුම (සියුම්) රූප 16",
    desc: "<p>ඝට්ටනය නොවන සියුම් රූප 16 කි (ආපෝ ධාතුව, හදය, ජීවිත, භාව 2, ඕජා, ආකාශ, විඤ්ඤත්ති 2, විකාර 3, ලක්ඛණ 4).</p>"
  },
  santike12: {
    title: "සන්තිකේ (සමීප) රූප 12",
    desc: "<p>පහසුවෙන් ප්‍රත්‍යක්ෂ වන ස්ථූල ඔළාරික රූප 12 ම සන්තිකේ (සමීප) රූප වේ.</p>"
  },
  dure16: {
    title: "දූරේ (දුරස්ථ) රූප 16",
    desc: "<p>ප්‍රත්‍යක්ෂ කරගැනීමට අපහසු සියුම් සුඛුම රූප 16 ම දූරේ (දුරස්ථ) රූප වේ.</p>"
  },
  gocara4: {
    title: "ගෝචරග්ගාහික රූප 5",
    desc: "<p>බාහිර අරමුණු ග්‍රහණය කරගන්නා ප්‍රසාද රූප පහයි (චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය).</p>"
  },
  avinibbhoga8: {
    title: "අවිනිබ්භෝග රූප 8",
    desc: "<p class='mb-2'>කිසිවිටෙකත් එකිනෙකින් වෙන් කළ නොහැකි, සෑම රූප කලාපයකම එකට පවතින මූලික රූප 8 කි:</p><ul class='space-y-1'><li>• පඨවි, ආපෝ, තේජෝ, වායෝ</li><li>• වණ්ණ (වර්ණ), ගන්ධ, රස, ඕජා (ආහාර)</li></ul>"
  },
  vinibbhoga20: {
    title: "විනිබ්භෝග රූප 20",
    desc: "<p>අවිනිබ්භෝග රූප 8 හැර එකිනෙකින් වෙන්ව පවතින ඉතිරි රූප 20 විනිබ්භෝග රූප වේ.</p>"
  },

  // --- රූප සමුට්ඨාන නය ---
  kammaja20: {
    title: "කර්මජ රූප 20",
    desc: "<p class='mb-2'>අතීත කුසලාකුසල කර්මයන් හේතුවෙන් උපදින රූප 20 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• ප්‍රසාද රූප 5 (චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය)</li>" +
          "<li>• භාව රූප 2 (ඉත්ථින්ද්‍රිය, පුරිසින්ද්‍රිය)</li>" +
          "<li>• හදයවත්ථු 1</li>" +
          "<li>• ජීවිතින්ද්‍රිය 1</li>" +
          "<li>• අවිනිබ්භෝග රූප 8 (පඨවි, ආපෝ, තේජෝ, වායෝ, වණ්ණ, ගන්ධ, රස, ඕජා)</li>" +
          "<li>• පරිච්ඡේද රූප 1 (ආකාශ ධාතුව)</li>" +
          "</ul>"
  },
  cittaja17: {
    title: "චිත්තජ රූප 17",
    desc: "<p class='mb-2'>සිත මුල් කරගෙන උපදින රූප 17 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• අවිනිබ්භෝග රූප 8</li>" +
          "<li>• පරිච්ඡේද රූප 1 (ආකාශ ධාතුව)</li>" +
          "<li>• සද්ද රූපය 1 (කථා කරන ශබ්දය)</li>" +
          "<li>• විඤ්ඤත්ති රූප 2 (කායවිඤ්ඤත්ති, වචීවිඤ්ඤත්ති)</li>" +
          "<li>• විකාර රූප 3 (ලහුතා, මුදුතා, කම්මඤ්ඤතා)</li>" +
          "</ul>"
  },
  utuja15: {
    title: "උතුජ (සෘතුජ) රූප 15",
    desc: "<p class='mb-2'>තේජෝ ධාතුව (උෂ්ණ/ශීත සෘතුව) හේතුවෙන් උපදින රූප 15 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• අවිනිබ්භෝග රූප 8</li>" +
          "<li>• පරිච්ඡේද රූප 1 (ආකාශ ධාතුව)</li>" +
          "<li>• සද්ද රූපය 1 (ගෙරවුම්, සුළං ආදී අචිත්තක ශබ්ද)</li>" +
          "<li>• විකාර රූප 3 (ලහුතා, මුදුතා, කම්මඤ්ඤතා)</li>" +
          "</ul>"
  },
  aharaja14: {
    title: "ආහාරජ රූප 14",
    desc: "<p class='mb-2'>අනුභව කරන ආහාරයේ ඕජාව හේතුවෙන් උපදින රූප 14 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• අවිනිබ්භෝග රූප 8</li>" +
          "<li>• පරිච්ඡේද රූප 1 (ආකාශ ධාතුව)</li>" +
          "<li>• විකාර රූප 3 (ලහුතා, මුදුතා, කම්මඤ්ඤතා)</li>" +
          "</ul>"
  },
  asamutthana4: {
    title: "සමුට්ඨාන රහිත (නොඋපදින) රූප 4",
    desc: "<p class='mb-2'>කිසිදු සමුට්ඨානයකින් නූපදින රූප 4 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• <strong>ලක්ඛණ රූප 4:</strong> උපචය, සන්තති, ජරතා, අනිච්චතා.</li>" +
          "<li>(මෙහි උපචය හා සන්තති උත්පාද ස්වභාවයද, ජරතාව ජරා ස්වභාවයද, අනිච්චතාව බිඳෙන ස්වභාවයද දක්වන බැවින් වෙනම සමුට්ඨානයකින් නොහටගනී).</li>" +
          "</ul>"
  },

  // --- ඒකාන්ත සහ අනේකාන්ත සමුට්ඨාන බෙදීම් ---
  ekantaKammaja9: {
    title: "ඒකාන්ත කර්මජ රූප 9",
    desc: "<p class='mb-2'>කර්මයෙන් පමණක්ම උපදින අනෙක් කිසිදු සමුට්ඨානයකින් නූපදින රූප 9 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• ප්‍රසාද රූප 5 (චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය)</li>" +
          "<li>• භාව රූප 2 (ඉත්ථින්ද්‍රිය, පුරිසින්ද්‍රිය)</li>" +
          "<li>• හදයවත්ථු 1</li>" +
          "<li>• ජීවිතින්ද්‍රිය 1</li>" +
          "</ul>"
  },
  anekantaKammaja11: {
    title: "අනේකාන්ත කර්මජ රූප 11",
    desc: "<p class='mb-2'>කර්මයෙන්ද උපදිමින් අන් සමුට්ඨානයන්ගෙන්ද උපදින රූප 11 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• අවිනිබ්භෝග රූප 8</li>" +
          "<li>• පරිච්ඡේද රූප 1 (ආකාශ ධාතුව)</li>" +
          "<li>• <em>(කර්මජ 20 න් ඒකාන්ත 9 අඩු කළ විට ලැබෙන රූපයි).</em></li>" +
          "</ul>"
  },
  ekantaCittaja2: {
    title: "ඒකාන්ත චිත්තජ රූප 2",
    desc: "<p class='mb-2'>සිතින් පමණක්ම උපදින අන් කිසිදු සමුට්ඨානයකින් නූපදින රූප 2 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>1. කාය විඤ්ඤත්තිය</li>" +
          "<li>2. වචී විඤ්ඤත්තිය</li>" +
          "</ul>"
  },
  anekantaCittaja15: {
    title: "අනේකාන්ත චිත්තජ රූප 15",
    desc: "<p class='mb-2'>සිතින්ද උපදිමින් සෙසු සමුට්ඨානයන්ගෙන්ද උපදින රූප 15 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• අවිනිබ්භෝග රූප 8</li>" +
          "<li>• ආකාශ ධාතුව 1</li>" +
          "<li>• සද්ද රූපය 1</li>" +
          "<li>• විකාර රූප 3 (ලහුතා, මුදුතා, කම්මඤ්ඤතා)</li>" +
          "</ul>"
  },
  ekantaUtuja: {
    title: "ඒකාන්ත උතුජ රූප 0",
    desc: "<p>උතුවෙන් (සෘතුවෙන්) පමණක්ම හටගන්නා විශේෂිත රූප කිසිවක් නැත (ගණන 0 කි). උතුවෙන් උපදින සියලු රූප සෙසු සමුට්ඨානයන්ගෙන්ද හටගනී.</p>"
  },
  anekantaUtuja15: {
    title: "අනේකාන්ත උතුජ රූප 15",
    desc: "<p class='mb-2'>උතුවෙන්ද උපදිමින් අනෙක් සමුට්ඨානයන්ගෙන්ද හටගන්නා රූප 15 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• අවිනිබ්භෝග රූප 8</li>" +
          "<li>• පරිච්ඡේද රූප 1 (ආකාශ ධාතුව)</li>" +
          "<li>• සද්ද රූපය 1</li>" +
          "<li>• විකාර රූප 3 (ලහුතා, මුදුතා, කම්මඤ්ඤතා)</li>" +
          "</ul>"
  },
  ekantaAharaja: {
    title: "ඒකාන්ත ආහාරජ රූප 0",
    desc: "<p>ආහාරයෙන් පමණක්ම හටගන්නා විශේෂිත ඒකාන්ත රූප නොමැත (ගණන 0 කි). ආහාරයෙන් උපදින සියලු රූප සෙසු සමුට්ඨානයන්ගෙන්ද උපදී.</p>"
  },
  anekantaAharaja14: {
    title: "අනේකාන්ත ආහාරජ රූප 14",
    desc: "<p class='mb-2'>ආහාරයෙන්ද හටගනිමින් සෙසු සමුට්ඨානයන්ගෙන්ද උපදින රූප 14 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• අවිනිබ්භෝග රූප 8</li>" +
          "<li>• පරිච්ඡේද රූප 1 (ආකාශ ධාතුව)</li>" +
          "<li>• විකාර රූප 3 (ලහුතා, මුදුතා, කම්මඤ්ඤතා)</li>" +
          "</ul>"
  },
  ekantaAharajaNovana: {
    title: "ඒකාන්ත ආහාරජ නොවන රූප 14",
    desc: "<p class='mb-2'>කිසිසේත්ම ආහාරයෙන් නූපදින රූප 14 කි:</p>" +
          "<ul class='space-y-1'>" +
          "<li>• ප්‍රසාද රූප 5</li>" +
          "<li>• භාව රූප 2</li>" +
          "<li>• හදයවත්ථු 1</li>" +
          "<li>• ජීවිතින්ද්‍රිය 1</li>" +
          "<li>• සද්ද රූපය 1</li>" +
          "<li>• විඤ්ඤත්ති රූප 2</li>" +
          "<li>• <em>(මීට අමතරව සමුට්ඨාන රහිත ලක්ඛණ රූප 4 ද ආහාරයෙන් නූපදී)</em></li>" +
          "</ul>"
  }
};

// ============================================================
// 3. සහායක ශ්‍රිත
// ============================================================
function stripHtml(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

// ============================================================
// 4. UI ටොගල් ක්‍රියාකාරීත්වය
// ============================================================
function toggleMainSection() {
  const subContainer = document.getElementById("subContainer");
  const arrowIcon = document.getElementById("vibhaga-arrow");
  
  if (subContainer) {
    subContainer.classList.toggle("hidden");
    if (arrowIcon) {
      arrowIcon.classList.toggle("rotate-180");
    }
  }
}

// ============================================================
// 5. උප බොත්තම් ක්ලික් කළ විට තොරතුරු පෙන්වීම (බොත්තමට යටින්ම)
// ============================================================
function showInfo(event, key) {
  const data = vibhagaCategories[key];
  if (!data) {
    console.warn('No data found for key:', key);
    return;
  }

  const button = event.currentTarget;
  // බොත්තම අයත් කාණ්ඩය (rupa-group) හඳුනා ගැනීම
  const group = button.closest('.rupa-group');
  
  if (!group) {
    console.warn('Group not found for button:', button);
    return;
  }

  // සියලුම කාණ්ඩවල තොරතුරු සඟවන්න
  document.querySelectorAll('[id^="rupaDisplayGroup"]').forEach(el => el.classList.add("hidden"));

  // අදාළ කාණ්ඩයේ තොරතුරු පෙන්වන්න
  const displayBox = group.querySelector('[id^="rupaDisplayGroup"]');
  if (displayBox) {
    const titleEl = displayBox.querySelector('h3');
    const detailsEl = displayBox.querySelector('div');
    if (titleEl) titleEl.innerText = data.title;
    if (detailsEl) detailsEl.innerHTML = data.desc;
    displayBox.classList.remove("hidden");
  }

  // බොත්තම් සක්‍රීය/අක්‍රීය කිරීම
  const buttons = group.querySelectorAll(".sub-btn-1, .sub-btn-2");
  buttons.forEach(btn => {
    btn.classList.remove("bg-saffron-500", "text-white", "border-saffron-600");
    btn.classList.add("bg-white", "dark:bg-slate-900", "text-amber-950", "dark:text-slate-200");
  });

  if (button) {
    button.classList.add("bg-saffron-500", "text-white", "border-saffron-600");
    button.classList.remove("bg-white", "dark:bg-slate-900", "text-amber-950", "dark:text-slate-200");
  }
}

// ============================================================
// 6. Universal Search & Dynamic Rendering
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("rupa-container");
  const searchInput = document.getElementById("search-input");
  const totalCountEl = document.getElementById("total-count");

  function renderUnifiedSearch(query = "") {
    if (!container) return;
    container.innerHTML = "";
    const cleanQuery = query.trim().toLowerCase();

    // සෙවුම් පදයක් නැති විට සාමාන්‍ය රූප 28 වගු ප්‍රදර්ශනය කිරීම
    if (!cleanQuery) {
      let count = 0;
      rupaData.forEach((section) => {
        count += section.items.length;
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-slate-800 rounded-2xl border border-amber-200/80 dark:border-slate-700 p-5 shadow-sm space-y-3";

        const title = document.createElement("h3");
        title.className = "text-lg font-bold text-maroon-900 dark:text-saffron-200 border-b border-amber-100 dark:border-slate-700 pb-2";
        title.textContent = section.category;

        const desc = document.createElement("p");
        desc.className = "text-xs sm:text-sm text-slate-600 dark:text-slate-400";
        desc.textContent = section.description;

        const tableWrapper = document.createElement("div");
        tableWrapper.className = "overflow-x-auto rounded-xl border border-amber-100 dark:border-slate-700";

        const table = document.createElement("table");
        table.className = "w-full text-left text-xs sm:text-sm";
        table.innerHTML = `
          <thead class="bg-amber-50/70 dark:bg-slate-900/60 text-maroon-950 dark:text-saffron-300 font-bold border-b border-amber-100 dark:border-slate-700">
            <tr>
              <th class="py-3 px-4">රූපයේ නම</th>
              <th class="py-3 px-4">අර්ථය / ලක්ෂණය</th>
              <th class="py-3 px-4">කාර්යය / ප්‍රයෝජනය</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-amber-100/60 dark:divide-slate-700/60">
            ${section.items.map(item => `
              <tr class="hover:bg-amber-50/30 dark:hover:bg-slate-700/30 transition-colors">
                <td class="py-3 px-4 font-bold text-amber-950 dark:text-slate-100 whitespace-nowrap">${item.name}</td>
                <td class="py-3 px-4 text-slate-700 dark:text-slate-300">${item.meaning}</td>
                <td class="py-3 px-4 text-slate-700 dark:text-slate-300">${item.role}</td>
              </tr>
            `).join("")}
          </tbody>
        `;

        tableWrapper.appendChild(table);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(tableWrapper);
        container.appendChild(card);
      });

      if (totalCountEl) totalCountEl.textContent = `ප්‍රදර්ශනය වන රූප ගණන: ${count}`;
      return;
    }

    // සෙවුම් පදයක් ඇති විට
    let matchedRupaCount = 0;
    let matchedVibhagaCount = 0;

    const matchedSections = [];
    rupaData.forEach((section) => {
      const filtered = section.items.filter(item => 
        item.name.toLowerCase().includes(cleanQuery) ||
        item.meaning.toLowerCase().includes(cleanQuery) ||
        item.role.toLowerCase().includes(cleanQuery) ||
        section.category.toLowerCase().includes(cleanQuery)
      );
      if (filtered.length > 0) {
        matchedSections.push({ category: section.category, description: section.description, items: filtered });
        matchedRupaCount += filtered.length;
      }
    });

    const matchedVibhagas = [];
    Object.keys(vibhagaCategories).forEach(key => {
      const item = vibhagaCategories[key];
      const plainDesc = stripHtml(item.desc).toLowerCase();
      if (item.title.toLowerCase().includes(cleanQuery) || plainDesc.includes(cleanQuery)) {
        matchedVibhagas.push(item);
        matchedVibhagaCount++;
      }
    });

    if (totalCountEl) {
      totalCountEl.textContent = `සෙවුම් ප්‍රතිඵල: රූප ${matchedRupaCount} | වර්ගීකරණ ${matchedVibhagaCount}`;
    }

    if (matchedRupaCount === 0 && matchedVibhagaCount === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800 rounded-2xl border border-amber-200 dark:border-slate-700 p-6">
          <i class="fa-solid fa-magnifying-glass text-3xl mb-2 text-amber-300 dark:text-slate-600"></i>
          <p class="text-sm font-medium">"${query}" සඳහා ගැළපෙන රූප හෝ වර්ගීකරණයන් කිසිවක් හමු නොවීය.</p>
        </div>
      `;
      return;
    }

    if (matchedVibhagas.length > 0) {
      const vibhagaHeader = document.createElement("div");
      vibhagaHeader.className = "flex items-center gap-2 text-sm font-bold text-maroon-900 dark:text-saffron-300 pt-2 border-b border-amber-200 dark:border-slate-700 pb-2";
      vibhagaHeader.innerHTML = `<i class="fa-solid fa-layer-group text-saffron-600"></i> රූප විභාග සහ සමුට්ඨාන වර්ගීකරණ ප්‍රතිඵල (${matchedVibhagaCount}):`;
      container.appendChild(vibhagaHeader);

      const vGrid = document.createElement("div");
      vGrid.className = "grid grid-cols-1 md:grid-cols-2 gap-3";

      matchedVibhagas.forEach(vb => {
        const itemBox = document.createElement("div");
        itemBox.className = "bg-white dark:bg-slate-800 rounded-xl p-4 border border-amber-200 dark:border-slate-700 shadow-sm space-y-2";
        itemBox.innerHTML = `
          <h4 class="font-bold text-base text-maroon-900 dark:text-saffron-200 border-b border-amber-100 dark:border-slate-700 pb-1">${vb.title}</h4>
          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${vb.desc}</div>
        `;
        vGrid.appendChild(itemBox);
      });
      container.appendChild(vGrid);
    }

    if (matchedSections.length > 0) {
      const rupaHeader = document.createElement("div");
      rupaHeader.className = "flex items-center gap-2 text-sm font-bold text-maroon-900 dark:text-saffron-300 pt-4 border-b border-amber-200 dark:border-slate-700 pb-2";
      rupaHeader.innerHTML = `<i class="fa-solid fa-table-list text-saffron-600"></i> පරමාර්ථ රූප 28 ප්‍රතිඵල (${matchedRupaCount}):`;
      container.appendChild(rupaHeader);

      matchedSections.forEach((section) => {
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-slate-800 rounded-2xl border border-amber-200/80 dark:border-slate-700 p-5 shadow-sm space-y-3";

        const title = document.createElement("h3");
        title.className = "text-lg font-bold text-maroon-900 dark:text-saffron-200 border-b border-amber-100 dark:border-slate-700 pb-2";
        title.textContent = section.category;

        const tableWrapper = document.createElement("div");
        tableWrapper.className = "overflow-x-auto rounded-xl border border-amber-100 dark:border-slate-700";

        const table = document.createElement("table");
        table.className = "w-full text-left text-xs sm:text-sm";
        table.innerHTML = `
          <thead class="bg-amber-50/70 dark:bg-slate-900/60 text-maroon-950 dark:text-saffron-300 font-bold border-b border-amber-100 dark:border-slate-700">
            <tr>
              <th class="py-3 px-4">රූපයේ නම</th>
              <th class="py-3 px-4">අර්ථය / ලක්ෂණය</th>
              <th class="py-3 px-4">කාර්යය / ප්‍රයෝජනය</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-amber-100/60 dark:divide-slate-700/60">
            ${section.items.map(item => `
              <tr class="hover:bg-amber-50/30 dark:hover:bg-slate-700/30 transition-colors">
                <td class="py-3 px-4 font-bold text-amber-950 dark:text-slate-100 whitespace-nowrap">${item.name}</td>
                <td class="py-3 px-4 text-slate-700 dark:text-slate-300">${item.meaning}</td>
                <td class="py-3 px-4 text-slate-700 dark:text-slate-300">${item.role}</td>
              </tr>
            `).join("")}
          </tbody>
        `;

        tableWrapper.appendChild(table);
        card.appendChild(title);
        card.appendChild(tableWrapper);
        container.appendChild(card);
      });
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderUnifiedSearch(e.target.value);
    });
  }

  renderUnifiedSearch();
});
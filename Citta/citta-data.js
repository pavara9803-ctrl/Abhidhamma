/**
 * අභිධර්ම චිත්ත විභාගය - පූර්ණ විස්තරාත්මක දත්ත
 * citta-data.js
 * 
 * මෙම ගොනුව citta.html සමඟ භාවිතා කිරීමට නිර්මාණය කර ඇත.
 * PDF "චිත්ත පරමාර්ථය" හි සියලු තොරතුරු, නිදසුන් සහ විග්‍රහයන් කිසිවක් අඩු නොකොට ඇතුළත් කර ඇත.
 */

// ============================================================
// 1. සිත් - විස්තරාත්මක විග්‍රහය සඳහා දත්ත (cittaDetailData)
// ============================================================

const cittaDetailData = [
  // ============================================================
  // 1. වාතුර්භූමක සිත් 89/121
  // ============================================================
  {
    title: "1. වාතුර්භූමක සිත් 89",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-emerald-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> වාතුර්භූමක චිත්ත යනු කුමක්ද?
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            කාමාවචර, රූපාවචර, අරූපාවචර, ලෝකෝත්තර යන සිත් සතර කොටස එක් වූ කල 
            <strong>චාතුර්භූමක චිත්ත</strong> යැයි කියනු ලැබේ. 
            එනම්, භූමි සතරක උපදින සිත් ය.
          </p>
        </div>
        
        <div class="overflow-x-auto rounded-xl border border-amber-200 dark:border-slate-700">
          <table class="w-full text-left text-base">
            <thead class="bg-amber-100 dark:bg-slate-900 text-amber-950 dark:text-saffron-300 font-bold">
              <tr>
                <th class="py-3 px-4">භූමිය</th>
                <th class="py-3 px-4 text-center">සිත් ගණන</th>
                <th class="py-3 px-4">විස්තරය</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-amber-100 dark:divide-slate-700">
              <tr class="hover:bg-amber-50/50 dark:hover:bg-slate-700/30">
                <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">කාමාවචර</td>
                <td class="py-3 px-4 text-center font-bold">54</td>
                <td class="py-3 px-4 text-sm">කාම ලෝකයට අයත් සිත්</td>
              </tr>
              <tr class="hover:bg-amber-50/50 dark:hover:bg-slate-700/30">
                <td class="py-3 px-4 font-bold text-green-700 dark:text-green-300">රූපාවචර</td>
                <td class="py-3 px-4 text-center font-bold">15</td>
                <td class="py-3 px-4 text-sm">රූප ධ්‍යාන සිත්</td>
              </tr>
              <tr class="hover:bg-amber-50/50 dark:hover:bg-slate-700/30">
                <td class="py-3 px-4 font-bold text-purple-700 dark:text-purple-300">අරූපාවචර</td>
                <td class="py-3 px-4 text-center font-bold">12</td>
                <td class="py-3 px-4 text-sm">අරූප ධ්‍යාන සිත්</td>
              </tr>
              <tr class="hover:bg-amber-50/50 dark:hover:bg-slate-700/30">
                <td class="py-3 px-4 font-bold text-amber-700 dark:text-amber-300">ලෝකෝත්තර</td>
                <td class="py-3 px-4 text-center font-bold">8 / 40</td>
                <td class="py-3 px-4 text-sm">මාර්ග හා ඵල සිත්</td>
              </tr>
              <tr class="bg-emerald-50 dark:bg-slate-900 font-bold">
                <td class="py-3 px-4">මුළු ගණන</td>
                <td class="py-3 px-4 text-center text-emerald-700 dark:text-emerald-300">89 / 121</td>
                <td class="py-3 px-4 text-sm">සිත් 89 හෝ 121</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>විශේෂ සටහන:</strong> ලෝකෝත්තර සිත් 8 ධ්‍යාන 5 සමඟ ගණන් ගැනීමෙන් සිත් 40 ක් වේ. 
            එවිට මුළු ගණන 89 - 8 + 40 = 121 කි.
          </p>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-purple-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book-open"></i> අභිධර්ම දේශනාවේ ආරම්භය
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            තථාගතයන් වහන්සේ අභිධර්ම දේශනාවේදී: <em>"කුසලා ධම්මා අකුසලා ධම්මා අව්‍යාකතා ධම්මා"</em> 
            යනුවෙන් පළමුව කුසල ධර්ම දේශනා කළ සේක. අභිධර්මය සංග්‍රහ කළ අනුරුද්ධාචාර්යයන් වහන්සේ 
            ආධුනිකයන්ගේ අවබෝධය සඳහා පළමුව අකුසල දක්වන ලදී.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 2. අකුසල් සිත් 12 - ලෝභ මූලික 8 (දීර්ඝ විස්තර)
  // ============================================================
  {
    title: "2. ලෝභ මූලික සිත් 8 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-lg text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-fire"></i> ලෝභ මූලික සිත් 8 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            ලෝභ මූලික සිත් 8 කි. මේවා <strong>වේදනා - දිට්ඨි - සංඛාර</strong> යන අංග තුනින් ආකාර 8 කට බෙදී ගියේ ය.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-800 overflow-hidden">
          <div class="bg-red-100 dark:bg-red-900/40 px-4 py-2 font-bold text-base text-red-800 dark:text-red-200">
            <i class="fa-solid fa-list-ol mr-2"></i> ලෝභ මූලික සිත් 8
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">1</span>
              <span class="text-base">සෝමනස්ස සහගත දිට්ඨිගත සම්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">2</span>
              <span class="text-base">සෝමනස්ස සහගත දිට්ඨිගත සම්පයුත්ත සසංඛාරික සිත</span>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">3</span>
              <span class="text-base">සෝමනස්ස සහගත දිට්ඨිගත විප්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">4</span>
              <span class="text-base">සෝමනස්ස සහගත දිට්ඨිගත විප්පයුත්ත සසංඛාරික සිත</span>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">5</span>
              <span class="text-base">උපේක්ෂා සහගත දිට්ඨිගත සම්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">6</span>
              <span class="text-base">උපේක්ෂා සහගත දිට්ඨිගත සම්පයුත්ත සසංඛාරික සිත</span>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">7</span>
              <span class="text-base">උපේක්ෂා සහගත දිට්ඨිගත විප්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2">
              <span class="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full">8</span>
              <span class="text-base">උපේක්ෂා සහගත දිට්ඨිගත විප්පයුත්ත සසංඛාරික සිත</span>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-red-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-1"></i> පළමු සිත - සෝමනස්ස සහගත දිට්ඨිගත සම්පයුත්ත අසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>සෝමනස්ස සහගත</strong> නම් සන්තෝෂයෙන් යුක්ත බව ය. 
              <strong>දිට්ඨිගත සම්පයුත්ත</strong> නම් කර්ම-ඵල නොඇදහීම් සම්බන්ධ මිථ්‍යාදෘෂ්ටියෙන් යුක්ත බව ය. 
              <strong>අසංඛාරික</strong> නම් තමා විසින් හෝ අනුන් විසින් කරනු ලබන පූර්ව ප්‍රයෝගයක් අනුබල දීමක් නැති වැ 
              ස්වභාවයෙන්ම යුහුසුලු වූ සිතින් කරනු ලබන බව ය.
            </p>
            <div class="bg-white/50 dark:bg-slate-800/50 p-2.5 rounded-lg mt-2">
              <p class="text-sm text-red-700 dark:text-red-300">
                <strong>උදාහරණය:</strong> යමෙකු කාම මිථ්‍යාචාරාදී පාපයක් කරන්නේ සන්තෝෂයෙන් යුක්ත වැ 
                "මෙයින් මට විපාක නොලැබේ" යන මිථ්‍යාදෘෂ්ටියෙන් යුක්ත වැ අනුන් විසින් නොමෙහෙයන ලදු වැ 
                ස්වභාවික ශීඝ්‍ර වූ සිතින් ඒ පාපය කෙරේ ද, ඔහුට මෙම පළමු අකුසල විත්තය ලැබෙන්නේ ය.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-red-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-2"></i> දෙවන සිත - සෝමනස්ස සහගත දිට්ඨිගත සම්පයුත්ත සසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>සසංඛාරික</strong> නම් තමා විසින් හෝ අනුන් විසින් හෝ කරනු ලබන පූර්ව ප්‍රයෝග සහිත බව ය. 
              එනම්, අනුන්ගේ මෙහෙයීමෙන් හෝ තමා ම පසුබැසීමෙන් හෝ කරනු ලබන බව ය.
            </p>
            <div class="bg-white/50 dark:bg-slate-800/50 p-2.5 rounded-lg mt-2">
              <p class="text-sm text-red-700 dark:text-red-300">
                <strong>උදාහරණය:</strong> යමෙකු කාම මිථ්‍යාචාරාදී පාපයක් කරන්නේ සන්තෝෂයෙන් හා 
                "මෙයින් මට විපාක නොලැබේ" යන මිථ්‍යාදෘෂ්ටියෙන් යුක්ත වැ අනුන් විසින් මෙහෙයන ලදු වැ හෝ 
                තමා ම පසුබැස ඒ පාපය කෙරේ ද, ඔහුට මෙම දෙවන අකුසල විත්තය ලැබෙන්නේ ය.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-red-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-3"></i> තුන්වන සිත - සෝමනස්ස සහගත දිට්ඨිගත විප්පයුත්ත අසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>දිට්ඨිගත විප්පයුත්ත</strong> නම් "මෙයින් මට විපාක නොලැබේ" යනාදී මිථ්‍යාදෘෂ්ටියක් නැති බව ය. 
              එනම්, කර්ම-ඵල විශ්වාස කරන බව ය.
            </p>
            <div class="bg-white/50 dark:bg-slate-800/50 p-2.5 rounded-lg mt-2">
              <p class="text-sm text-red-700 dark:text-red-300">
                <strong>උදාහරණය:</strong> යමෙකු කාම මිථ්‍යාචාරාදී පාපයක් කරන්නේ සන්තෝෂයෙන් යුක්ත වැ 
                මිථ්‍යාදෘෂ්ටික නො වැ පූර්ව ප්‍රයෝගයක් නැති වැ ඒ පාපය කෙරේ ද, 
                ඔහුට මෙම තුන්වන අකුසල විත්තය ලැබෙන්නේ ය.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-red-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-4"></i> සතරවන සිත - සෝමනස්ස සහගත දිට්ඨිගත විප්පයුත්ත සසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              යමෙකු කාම මිථ්‍යාචාරාදී පාපයක් කරන්නේ සන්තෝෂයෙන් යුක්ත වැ මිථ්‍යාදෘෂ්ටි නැති වැ 
              අනුන්ගේ නියෝගයෙන් හෝ තමාගේ ම පසුබැසීමෙන් හෝ ඒ පාපය කෙරේ නම් 
              ඔහුට මෙම සතරවන අකුසල විත්තය ලැබෙන්නේ ය.
            </p>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-5"></i> පස්වන සිත - උපේක්ෂා සහගත දිට්ඨිගත සම්පයුත්ත අසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>උපේක්ෂා සහගත</strong> නම් සොම්නසුත් නො වැ දොම්නසුත් නො වැ මධ්‍යස්ථ වේදනාවෙන් යුක්ත බව ය. 
              දිට්ඨිගත සම්පයුත්ත අසංඛාරික ලක්ෂණ පෙර කී සේ ම ය.
            </p>
            <div class="bg-white/50 dark:bg-slate-800/50 p-2.5 rounded-lg mt-2">
              <p class="text-sm text-blue-700 dark:text-blue-300">
                <strong>උදාහරණය:</strong> යමෙකු කාම මිථ්‍යාචාරාදී පාපයක් කරන්නේ උපේක්ෂාවෙන් යුක්ත වැ 
                මිථ්‍යාදෘෂ්ටික වැ ලාමක වැ ඒ පාපය කෙරේ ද, ඔහුට මෙම පස්වන අකුසල විත්තය ලැබෙන්නේ ය.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-6"></i> සවන සිත - උපේක්ෂා සහගත දිට්ඨිගත සම්පයුත්ත සසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              යමෙකු උපේක්ෂාවෙන් යුක්ත වැ මිථ්‍යාදෘෂ්ටික වැ තමා විසින් හෝ අනුන් විසින් මෙහෙයන ලදු වැ 
              කාම මිථ්‍යාචාරාදී පාපයක් කෙරේ ද, ඔහුට මෙම සවන අකුසල විත්තය ලැබෙන්නේ ය.
            </p>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-7"></i> සත්වන සිත - උපේක්ෂා සහගත දිට්ඨිගත විප්පයුත්ත අසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              යමෙකු උපේක්ෂාවෙන් යුක්ත වැ මිථ්‍යාදෘෂ්ටික නො වැ උත්සාහවත් වැ පාප කර්මයන් කෙරේ ද, 
              ඔහුට මෙම සත්වන අකුසල විත්තය ලැබෙන්නේ ය.
            </p>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
            <h4 class="font-bold text-base text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-8"></i> අටවන සිත - උපේක්ෂා සහගත දිට්ඨිගත විප්පයුත්ත සසංඛාරික
            </h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              යමෙකු කාම මිථ්‍යාචාරාදී පාපයක් කරන්නේ උපේක්ෂාවෙන් යුක්ත වැ මිථ්‍යාදෘෂ්ටික නො වැ 
              අනුන් විසින් මෙහෙයන ලදු වැ හෝ තෙමේ ම පසුබැස ඒ පාපය කෙරේ ද, 
              ඔහුට මෙම අටවන අකුසල විත්තය ලැබෙන්නේ ය.
            </p>
          </div>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong> වේදනා - දිට්ඨි - සංඛාර යන අංග තුනින් මේ සිත් අට ආකාරයකට බෙදී ගිය බැව් දත යුතු ය.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 3. දෝස මූලික සිත් 2 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "3. දෝස මූලික සිත් 2 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-bolt"></i> දෝස මූලික සිත් 2 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            දෝස මූලික සිත් 2 කි. මේවා දෝමනස්ස හා පටිඝ යන අංගවලින් යුක්ත වේ.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-800 overflow-hidden">
          <div class="bg-amber-100 dark:bg-amber-900/40 px-4 py-2 font-bold text-base text-amber-800 dark:text-amber-200">
            <i class="fa-solid fa-list-ol mr-2"></i> දෝස මූලික සිත් 2
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
              <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm font-bold px-2.5 py-0.5 rounded-full">9</span>
              <span class="text-base ml-2">දෝමනස්ස සහගත පටිඝ සම්පයුත්ත අසංඛාරික විත්තය</span>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
              <span class="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm font-bold px-2.5 py-0.5 rounded-full">10</span>
              <span class="text-base ml-2">දෝමනස්ස සහගත පටිඝ සම්පයුත්ත සසංඛාරික විත්තය</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-amber-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> ලක්ෂණ විස්තරය
          </h4>
          <ul class="text-base text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>දෝමනස්ස සහගත:</strong> දොම්නසින් හෙවත් මානසික දුක්ඛ වේදනාවෙන් යුක්ත බව ය.</li>
            <li><strong>පටිඝ සම්පයුත්ත:</strong> ද්වේෂයෙන් හෙවත් කෝපයෙන් යුක්ත බව ය. 
              අරමුණෙහි නොඇලී හැපෙන බැවින් ද්වේෂය පටිඝය යි කියනු ලැබේ. 
              දෝමනස්ස අනිෂ්ට අරමුණු අනුභව කිරීම ලක්ෂණ කොට ඇති වේදනාස්කන්ධයට අයත් ධර්මයෙකි. 
              පටිඝය වෛරීභාව ස්වභාව කොට ඇති සංස්කාරස්කන්ධයට අයත් ධර්මයෙකි.</li>
            <li><strong>අසංඛාරික / සසංඛාරික:</strong> පෙර කී සේ ම ය.</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-amber-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-1"></i> පළමු සිත - අසංඛාරික
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            යමෙකු පාණඝාතාදී පාපයක් කරන්නේ දොම්නසින් හා පටිඝයෙන් යුක්ත වැ අනුන්ගේ මෙහෙයීමක් නැති වැ 
            සහජයෙන් ම කෙරේ ද ඔහුට දෝමනස්ස සහගත සම්පයුත්ත අසංඛාරික යන ද්වේෂමූලික පළමුවන සිත ලැබෙන බව දතයුතු ය.
          </p>
          <div class="bg-white/50 dark:bg-slate-800/50 p-2.5 rounded-lg mt-2">
            <p class="text-sm text-amber-700 dark:text-amber-300">
              <strong>උදාහරණය:</strong> කුඩා දරුවෙක් සිනාසෙමින් කුරුල්ලකු මැරුවේ ය. ඔහුට උපන් 
              අකුසල සිත - දෝමනස්ස සහගත පටිඝ සම්පයුත්ත අසංඛාරික සිත යි.
            </p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-amber-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-2"></i> දෙවන සිත - සසංඛාරික
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            යමෙකු දොම්නසින් හා පටිඝයෙන් යුක්ත වැ අනුන්ගේ මෙහෙයීමෙන් හෝ තමාගේ ම පසුබැසීමෙන් හෝ 
            පාණඝාතාදී පාපයක් කෙරේ ද ඔහුට දෝමනස්ස සහගත පටිඝ සම්පයුත්ත සසංඛාරික යන 
            ද්වේෂමූලික දෙවන විත්තය ලැබෙන්නේ ය.
          </p>
          <div class="bg-white/50 dark:bg-slate-800/50 p-2.5 rounded-lg mt-2">
            <p class="text-sm text-amber-700 dark:text-amber-300">
              <strong>උදාහරණය:</strong> ස්වාමියාගේ නියෝගයෙන් සේවකයෙක් කුකුළකු මැරුවේ ය. 
              ඔහුට උපන් අකුසල සිත - දෝමනස්ස සහගත පටිඝ සම්පයුත්ත සසංඛාරික සිත යි.
            </p>
          </div>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>විශේෂ:</strong> දෝස මූලික සිත්වලට සෝමනස්ස හෝ උපේක්ෂා වේදනා නොලැබේ. සැමවිටම දෝමනස්ස වේ.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 4. මෝහ මූලික සිත් 2 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "4. මෝහ මූලික සිත් 2 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-lg text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cloud"></i> මෝහ මූලික සිත් 2 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            මෝහ මූලික සිත් 2 කි. මේවා උපේක්ෂා වේදනාවෙන් යුක්ත වේ.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-800 overflow-hidden">
          <div class="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 font-bold text-base text-blue-800 dark:text-blue-200">
            <i class="fa-solid fa-list-ol mr-2"></i> මෝහ මූලික සිත් 2
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/50">
              <span class="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full">11</span>
              <span class="text-base ml-2">උපේක්ෂා සහගත විචිකිච්ඡා සම්පයුත්ත විත්තය</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/50">
              <span class="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full">12</span>
              <span class="text-base ml-2">උපේක්ෂා සහගත උද්ධච්ච සම්පයුත්ත විත්තය</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> ලක්ෂණ විස්තරය
          </h4>
          <ul class="text-base text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>උපේක්ෂා සහගත:</strong> පෙර කී පරිදි ම ය.</li>
            <li><strong>විචිකිච්ඡා සම්පයුත්ත:</strong> බුද්ධාදී අටතැන උපදනා සැකයෙන් යුත්ත බව ය. 
              එනම්, බුද්ධ, ධර්ම, සංඝ, ශික්ෂා, පූර්වාපර, කර්ම-කර්මඵල, පටිසන්ධි යන අටතැන සැක කිරීම ය.</li>
            <li><strong>උද්ධච්ච සම්පයුත්ත:</strong> චිත්ත වික්ෂේපය හෙවත් චිත්තයාගේ නොසන්සුන්කම ය. 
              එයින් යුත්ත වූයේ උද්ධච්ච සම්පයුත්ත ය. උද්ධච්චය සර්වාකුශල සාධාරණ චෛතසිකයක් වුවද 
              එය මේ විත්තයෙහි ම බලවත් වැ යොදන බැවින් ඒ නමින් මැ ව්‍යවහාර කරන ලදී.</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-1"></i> විචිකිච්ඡා සිත
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            යමෙකු වනාහි උපේක්ෂාවෙන් හා විචිකිච්ඡාවෙන් යුත්ත වූයේ නම් ඔහුට 
            උපේක්ෂා සහගත විචිකිච්ඡා සම්පයුත්ත යන මෝහමූලික අකුශල විත්තය ලැබෙන්නේ ය.
          </p>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-2"></i> උද්ධච්ච සිත
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            මේ සිත් දෙක එකම මෝහ හේතුක බැවින් ද, ස්වභාව චංචල බැවින් ද සොම්නස් දොම්නස් වේදනා භේද නොලබයි, 
            එසේ ම විශේෂ තීක්‍ෂණ බවක් හෝ අතීක්‍ෂණ බවක් හෝ නැති හෙයින් සංඛාර භේදය ද නො ලබයි.
          </p>
        </div>

        <div class="bg-blue-50 dark:bg-slate-900/50 p-4 rounded-lg border border-blue-200 dark:border-slate-700">
          <p class="text-base text-blue-800 dark:text-blue-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>විශේෂ:</strong> මේ සිත් දෙක එකම මෝහ හේතුක බැවින් ද, ස්වභාව චංචල බැවින් ද 
            සොම්නස් දොම්නස් වේදනා භේද නොලබයි, එසේ ම විශේෂ තීක්‍ෂණ බවක් හෝ අතීක්‍ෂණ බවක් හෝ නැති හෙයින් 
            සංඛාර භේදය ද නො ලබයි.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 5. අහේතුක සිත් 18 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "5. අහේතුක සිත් 18 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-lg text-orange-900 dark:text-orange-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-exclamation"></i> අහේතුක සිත් 18 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            වෘක්ෂයක ස්ථීර පැවැත්මට මුල් ආධාර වන්නා සේ කුශලාකුශලාදී විත්තයක ස්ථීර පැවැත්මට 
            හේතු ආධාර වෙති. හේතු නම් අකුශල පක්ෂයෙහි ලෝභ, ද්වේෂ, මෝහ යන අකුශල චෛතසික තුන්දෙන හා 
            කුශල පක්ෂයෙහි අලෝභ, අද්වේෂ, අමෝහ යන කුශල චෛතසික තුන් දෙන ය. 
            මේ සවැදෑරුම් හේතු අතුරෙන් එක හේතුවකුදු යම් සිතක නො යෙදුණේ නම් ඒ සිත අහේතුක විත්තය නම්.
          </p>
        </div>

        <!-- අකුසල විපාක 7 -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-orange-800 overflow-hidden">
          <div class="bg-orange-100 dark:bg-orange-900/40 px-4 py-2 font-bold text-base text-orange-800 dark:text-orange-200">
            <i class="fa-solid fa-list-ol mr-2"></i> a. අකුසල විපාක සිත් 7
          </div>
          <div class="p-4 space-y-3">
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
              <h5 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1">13. උපේක්ෂා සහගත චක්ඛු විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>චක්ඛු</strong> නම් චක්ඛු ප්‍රසාදය හෙවත් පූර්වජාතියෙහි රූප දකිනු කැමැත්ත නිදාන කොට ඇති 
                කර්මයෙන් හටගත් ඇස ය කියනු ලබන මාංශ පිණ්ඩය නිසා පවත්නා පෙනීමේ ශක්තිය යි. 
                ඒ චක්ෂුඃ ප්‍රසාදය රූපය හා ගැටුණු විට ඒ ඇසුරු කොට උපදනා විත්තය චක්ඛු විඤ්ඤාණය යි කියනු ලැබේ.
                ඒ ගැටුණු රූපය ඉදින් අනිෂ්ට වී නම් එවිට එය අකුසල විපාක චක්ඛු විඤ්ඤාණය වෙයි. 
                මෙහි රූපය යි කියනු ලබන වර්ණ මාත්‍රයේ හා චක්ෂුඃ ප්‍රසාදයේ ගැටීම පුලුන් පිඩක් හා 
                පුළුන් පිඩක ගැටීම මෙන් ඉතා දුර්වල ය. එ හෙයින් එහි සොම්නස් හෝ දොම්නස් වේදනා 
                නො ලැබැ උපේක්ෂා වේදනා ම ලැබේ.
              </p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
              <h5 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1">14. උපේක්ෂා සහගත සෝත විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>සෝත</strong> නම් ශ්‍රෝත ප්‍රසාදය හෙවත් පූර්ව ජාතියෙහි ශබ්ද අසනු කැමැත්ත නිදාන කොට ඇති 
                කර්මයෙන් හටගත් කන නිසා පවත්නා ඇසීමේ ශක්තිය යි. එය අනිෂ්ට ශබ්දයක් හා ගැටුණු විට 
                ඒ ඇසුරු කොට උපදනා විත්තය අකුසල විපාක උපේක්ෂා සහගත සෝත විඤ්ඤාණය යි කියනු ලැබේ.
              </p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
              <h5 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1">15. උපේක්ෂා සහගත ඝාන විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>ඝාන</strong> නම් ඝාන ප්‍රසාදය හෙවත් පූර්ව ජාතියෙහි ආඝ්‍රාණය කරනු කැමැත්ත නිදාන කොට ඇති 
                කර්මයෙන් හටගත් නැහැය නිසා පවත්නා ආඝ්‍රාණය කිරීමේ ශක්තිය යි. ඒ ඝාන ප්‍රසාදය අනිෂ්ට 
                ගන්ධයක් හා ගැටුණු විට ඒ ඇසුරු කොට පවත්නා විත්තය අකුසල විපාක උපේක්ෂා සහගත 
                ඝාන විඤ්ඤාණය යි.
              </p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
              <h5 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1">16. උපේක්ෂා සහගත ජිව්හා විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>ජිව්හා</strong> නම් ජිව්හා ප්‍රසාදය හෙවත් පූර්ව ජාතියෙහි රස විඳගැනීමට කැමැත්ත නිදාන කොට 
                ඇති කර්මයෙන් හටගත් දිව නිසා පවත්නා රස විඳගැනීමේ ශක්තිය යි. ඒ ජිව්හා ප්‍රසාදය අනිෂ්ට 
                රසයක් හා ගැටුණු විට එය ඇසුරු කොට උපදනා විත්තය අකුසල විපාක උපේක්ෂා සහගත 
                ජිව්හා විඤ්ඤාණය යි කියනු ලැබේ.
              </p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
              <h5 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1">17. දුක්ඛ සහගත කාය විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>කාය</strong> නම් කාය ප්‍රසාදය හෙවත් පූර්ව ජාතියෙහි ස්පර්ශ විඳගැනීම නිදාන කොට ඇති 
                කර්මයෙන් හටගත් කය නිසා පවත්නා ස්පර්ශ විඳගැනීමේ ශක්තිය යි. ඒ කාය ප්‍රසාදය අනිෂ්ට 
                ස්පෘෂ්ටව්‍යයක් හා ගැටුණු විට අකුසල විපාක දුක්ඛ සහගත කාය විඤ්ඤාණය ලැබේ.
                <br><br>
                එය දුක්ඛ සහගතවීමේ හේතු කිම යත්? ස්ප්‍රෂ්ටව්‍ය නම්; පඨවි, තෙජො වායු යන භූත රූප තුන යි. ඒ භූත රූපාත්මක වූ ස්ප්‍රෂ්ටව්‍යය කාය ප්‍රශාදයේ හැපෙන විට ඒ කාය ප්‍රශාදය ඉක්ම ඒ නිසා පවත්නා භූත රූපයන්හි ද හැපෙයි. එවිට කිණිහිරක් උඩ පුලුන් පෙඳක් තබා කුළකින් පහරන කල්හි කුළ පුලුන් පෙඳ ඉක්ම කිණිහිරෙහි ද හැපෙන්නා සේ හැපීම බලවත් වෙයි. එබැවින් ඉෂ්ටස්ප්‍රෂ්ටව්‍යයක් හැපිණි නම් සුඛ වේදනා උපදී, අනිෂ්ටස්ප්‍රෂ්ටව්‍යයක් හැපිණි නම් දුක්ඛ වේදනා උපදී. මෙය අකුශල විපාක ප්‍රස්තාව හෙයින් දුක්ඛ වේදනා සහගත වූ බව දතයුතු යි.
              </p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
              <h5 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1">18. උපේක්ෂා සහගත සම්පටිච්ඡන විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                චක්ඛු විඤ්ඤාණාදී පඤ්චවිඤ්ඤාණයන් විසින් ගන්නා ලද අනිෂ්ට අරමුණ පිළිගන්නාක් මෙන්න 
                උපදනා සිත අකුසල විපාක උපේක්ෂා සහගත සම්පටිච්ඡන විත්තය යි.
              </p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50">
              <h5 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1">19. උපේක්ෂා සහගත සන්තීරණ විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ඒ අනිෂ්ට අරමුණ ම තීරණය කරන්නාක් මෙන් උපදනා සිත අකුසල විපාක උපේක්ෂා සහගත 
                සන්තීරණ විත්තය යි.
              </p>
            </div>
          </div>
        </div>

        <!-- කුසල අහේතුක විපාක 8 -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800 overflow-hidden">
          <div class="bg-green-100 dark:bg-green-900/40 px-4 py-2 font-bold text-base text-green-800 dark:text-green-200">
            <i class="fa-solid fa-list-ol mr-2"></i> b. කුසල අහේතුක විපාක සිත් 8
          </div>
          <div class="p-4 space-y-3">
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              කාමාවචර කුසලයන්ගේ විපාක සොළොසක් (16) වෙති. එයින් අටක් සහේතුක ය. අටක් අහේතුක ය. 
              අහේතුක සිත් කාණ්ඩය දක්වා නිම කරන සඳහා කුසල සිත් දක්වන්නටත් පළමු ඒ කුසලයන්ගේ 
              දෙවැදෑරුම් විභාගයන් අතුරෙන් අහේතුක විභාග සිත් කොටස මෙහි දැක්වූ බව දතයුතු.
            </p>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">20. උපේක්ෂා සහගත චක්ඛු විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ඉෂ්ට රූපයක් චක්ෂුඃ ප්‍රසාදයේ හැපුණු කල හෙවත් ප්‍රිය රූපයක් ඇසින් දුටු කල 
                කුසල විපාක උපේක්ෂා සහගත චක්ඛු විඤ්ඤාණය ලැබේ.
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">21. උපේක්ෂා සහගත සෝත විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ඉෂ්ට ශබ්දයක් සෝත ප්‍රසාදයේ හැපුණු කල හෙවත් ප්‍රිය හඬක් ඇසුණු කල 
                කුසල විපාක උපේක්ෂා සහගත සෝත විඤ්ඤාණය ලැබේ.
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">22. උපේක්ෂා සහගත ඝාන විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ඉෂ්ට ගන්ධයක් ඝාන ප්‍රසාදයේ හැපුණු කල හෙවත් මිහිරි සුවඳක් නැහැයට දැනුණු කල 
                කුසල විපාක උපේක්ෂා සහගත ඝාන විඤ්ඤාණය ලැබේ.
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">23. උපේක්ෂා සහගත ජිව්හා විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ඉෂ්ට රසයක් ජිව්හා ප්‍රසාදයට හැපුණු කල හෙවත් දිවට ප්‍රිය රසයක් දැනුණු කල 
                කුසල විපාක උපේක්ෂා සහගත ජිව්හා විඤ්ඤාණය ලැබේ.
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">24. සුඛ සහගත කාය විඤ්ඤාණය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ඉෂ්ට ස්ප්‍රෂ්ටව්‍යයක් කාය ප්‍රශාදයේ හැපුණු කල හෙවත් පිය පහසක් ඇඟට දැනුණු කල කුසල විපාක සුඛ සහගත කාය විඤ්ඤාණය ලැබේ. මෙහිදු සුඛ සහගතවීමේ හේතුව යට කී නයින් දතයුතු.
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">25. උපේක්ෂා සහගත සම්පටිච්ඡන විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                පඤ්ච විඤ්ඤාණයන් විසින් ගන්නා ලද ඉෂ්ටාරම්මණය පිළිගන්නාක් මෙන් උපදින සිත 
                කුසල විපාක උපේක්ෂා සහගත සම්පටිච්ඡන විත්තය යි.
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">26. සෝමනස්ස සහගත සන්තීරණ විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                එම අති ඉෂ්ටාරම්මණයක් තීරණය කරන්නාක් මෙන් උපදින සිත 
                කුසල විපාක සෝමනස්ස සහගත සන්තීරණ විත්තය යි.
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
              <h5 class="font-bold text-green-900 dark:text-green-200 text-base mb-1">27. උපේක්ෂා සහගත සන්තීරණ විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                එම ඉෂ්ට මධ්‍යස්ථාරම්මණයක් තීරණය කරන්නාක් මෙන් උපදින සිත 
                කුසල විපාක උපේක්ෂා සහගත සන්තීරණ විත්තය යි කියනු ලැබේ.
              </p>
            </div>
          </div>
        </div>

        <!-- අහේතුක ක්‍රියා 3 -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 overflow-hidden">
          <div class="bg-purple-100 dark:bg-purple-900/40 px-4 py-2 font-bold text-base text-purple-800 dark:text-purple-200">
            <i class="fa-solid fa-list-ol mr-2"></i> c. අහේතුක ක්‍රියා සිත් 3
          </div>
          <div class="p-4 space-y-3">
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              ක්‍රියා සිත් නම් කුසලාකුසලුත් නොවන විපාකත් නොවන විත්තය ය. මොවුහු ද සහේතුක ය, අහේතුක ය යි 
              දෙවැදෑරුම් වෙති. අහේතුක ක්‍රියා සිත් නම් යට කී හේතු වලින් එක හේතුවකුදු නොයෙදෙන විත්තය ය. 
              මොවුහු තුන් දෙනෙකි.
            </p>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-100 dark:border-purple-900/50">
              <h5 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1">28. උපේක්ෂා සහගත පංචද්වාරාවජ්ජන විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                චක්ෂුරාදී ද්වාරවලින් අරමුණු නොලැබැ නිදාගන්නා කලක් මෙන් නිශ්චල වැ පවත්නා සිත 
                භවාංග විත්තය යි කියනු ලැබේ. නොයෙක් දිගට නූල් ඇදගෙන ඒ මැදට වී නිසල වැ 
                සිටිනා මකුළුවකු මෙනි.
                <br><br>
                පංචද්වාරයන් අතුරෙන් යම් ද්වාරයෙක අරමුණක් හැපුණු විට ඒ භවාඞ්ග සන්තතිය සෙලවී සිඳී පස්දොරන අතුරෙන් කවර දොරකින් මේ අරමුණ ආයේ දැ යි බලන්නාක් මෙන් උපදින සිත පඤ්චද්වාරාවජ්ජන චිත්තය යි. මකුළු නූලේ සතකු රැඳුණු කල තමා සෙලවුම් කෑයෙන් කවර නූලකින් ඒ සතා රැඳුණේ දැයි පරීක්‍ෂා කොට බලන මකුළුවා මෙනි. එ ද සොම්නස් හෝ දොම්නස් වන්නට ශක්ති මඳ හෙයින් උපේක්‍ෂා සහගත ම වේ. 
                <br><br>
                මේ උපෙක්ඛා සහගත පඤ්චද්වාරාවජ්ජන චිත්තය පූර්ව කුසලාකුසලයෙක විපාක නොවේ. එසේ ම ඊට මතු විපාක නො ලැබෙන හෙයින් කුශලාකුශල කර්මයක් ද නොවේ. හුදෙක් ක්‍රියා මාත්‍රයෙකැ යි දතයුතු.
              </p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-100 dark:border-purple-900/50">
              <h5 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1">29. උපේක්ෂා සහගත මනෝද්වාරාවජ්ජන විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                මනොද්වාරයෙහි වැටුණු අරමුණ ආවර්ජනය කරන චිත්තය මනොද්වාරාවජ්ජන චිත්තය යි. එ ද උපෙක්ඛා සහගත ම හෙයින් උපෙක්ඛා සහගත මනොද්වාරාවජ්ජන චිත්තය යි කියනු ලැබේ. මනොද්වාරය නම් ආවර්ජනයට නැමුණු භවාඞ්ග චිත්තය යි. මෙය ම පංචද්වාරික චිත්ත වීථින්හි දී “වොත්‍ථපන චිත්තය”යි කියනු ලැබේ. මෙ ද කර්මයක් හෝ විපාකයක් නො වන ක්‍රියා මාත්‍රයෙකි.
              </p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-100 dark:border-purple-900/50">
              <h5 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1">30. සෝමනස්ස සහගත හසිතුප්පාද විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                හසිතුප්පාද නම් සිනා ඉපැදවීම ය. රහතන් වහන්සේට අනෞදාරීකාරම්මණයෙහි (-සුළු අරමුණුවලදී) සිනා උපදවන සිත “සොමනස්ස සහගත හසිතුප්පාද චිත්තය” යි. මේ ද, ක්‍රියාවෙක, කර්ම හෝ විපාක නොවේ. මේ අටළොස් චිත්තයන්ගේ විශේෂ විභාග මතු පැහැදිලි වන බව දතයුතු යි.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300 mb-2">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong>
          </p>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            “පාපාහෙතූක මුත්තානි සොභනානීති වුච්චරෙ,<br>
            එකූනසට්ඨිචිත්තානි අථෙකනවුතිපි වා."
          </p>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
            අකුසල සිත් 12 හා මේ අහේතුක සිත් 18 හැර මතු කියනු ලබන සිත් 59 හෝ 
            91 සෝභන සිත් නම් වේ.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 6. කාමාවචර කුසල සිත් 8 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "6. කාමාවචර කුසල සිත් 8 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
          <h4 class="font-bold text-lg text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-seedling"></i> කාමාවචර කුසල සිත් 8 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            කාමාවචර කුසල සිත් 8 කි. මේවා සෝමනස්ස, ඤාණ, සංඛාර යන අංග තුනෙන් ආකාර 8 කට බෙදේ.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800 overflow-hidden">
          <div class="bg-green-100 dark:bg-green-900/40 px-4 py-2 font-bold text-base text-green-800 dark:text-green-200">
            <i class="fa-solid fa-list-ol mr-2"></i> කාමාවචර කුසල සිත් 8
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">1</span>
              <span class="text-base">සෝමනස්ස සහගත ඤාණසම්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">2</span>
              <span class="text-base">සෝමනස්ස සහගත ඤාණසම්පයුත්ත සසංඛාරික සිත</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">3</span>
              <span class="text-base">සෝමනස්ස සහගත ඤාණවිප්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">4</span>
              <span class="text-base">සෝමනස්ස සහගත ඤාණවිප්පයුත්ත සසංඛාරික සිත</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">5</span>
              <span class="text-base">උපේක්ෂා සහගත ඤාණසම්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">6</span>
              <span class="text-base">උපේක්ෂා සහගත ඤාණසම්පයුත්ත සසංඛාරික සිත</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">7</span>
              <span class="text-base">උපේක්ෂා සහගත ඤාණවිප්පයුත්ත අසංඛාරික සිත</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">8</span>
              <span class="text-base">උපේක්ෂා සහගත ඤාණවිප්පයුත්ත සසංඛාරික සිත</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-green-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> ලක්ෂණ විස්තරය
          </h4>
          <ul class="text-base text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>සෝමනස්ස සහගත:</strong> සුඛ වේදනාවෙන් - සොම්නසින් - සතුටින් යුක්ත බව ය. බලවත් ශ්‍රද්ධාව හා දර්ශන සම්පත්, ප්‍රත්‍යය සම්පත්, 
              ප්‍රතිග්‍රාහක සම්පත්, ප්‍රදේශ සම්පත්, කාල සම්පත් ලැබීම යනාදී කරුණු සෝමනස්ස සහගත වීමේ හේතු ය.</li>
            <li><strong>ඤාණ සම්පයුත්ත:</strong> යථා ස්වභාවය දැන්මෙන් හෙවත් දානාදී කුසලයන්ගෙන් ඉෂ්ටවිපාක ලැබෙන්නේ ය යනාදිය දැන්මෙන් යුක්ත බව ය. ප්‍රඥාව ලැබීමට හේතු කර්මය, බඹලොව ඉපද සිටීම ය, ඉඳුරන් බිහිකිරීම ය, ක්ලේශයන්ගෙන් දුරුව සිටීම ය යන මොව්හු ඥානසම්ප්‍රයුක්ත වීමේ හේතු වෙති. 
              විප්පයුත්ත නම් ඥානය නොයෙදෙන බව ය. ඥාන සම්පයුත්ත වීමට හේතු නොලැබීම ඥාන විප්පයුත්ත වීමට හේතු ය.</li>
            <li><strong>අසංඛාරික:</strong> අසංඛාර නම් පූර්වප්‍රයෝග රහිත බව ය. හෙවත් අනුන්ගේ නියෝගය නිසාත් නො වැ තමාගේ ම පසුබැසීමෙනුත් නො වැ ස්වභාව තීක්‍ෂණ (=ඉබේ ම තියුණු) වූ සිතින් යුක්ත බව ය. ආවාස සප්පාය, සෘතු සප්පාය, භෝජන සප්පාය ලැබීම, දන්දී පුරුදු බව යනාදිය අසංඛාර වීමේ හේතු යි.</li>
          </ul>
        </div>

        <div class="bg-green-50 dark:bg-slate-900/50 p-4 rounded-lg border border-green-200 dark:border-slate-700">
          <p class="text-base text-green-800 dark:text-green-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong> මේ සිත් 8 කුසල් සිත් වන අතර ඒවා විපාක හා ක්‍රියා සිත් ලෙසට 
            ද පවතී. කාමාවචර කුසල සිත්වලට ප්‍රතිසන්ධි විපාක, ප්‍රවෘත්ති විපාක ලෙස ද 
            විපාක සිත් 8 ක් ලැබේ.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 7. රූපාවචර කුසල සිත් 5 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "7. රූපාවචර කුසල සිත් 5 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
          <h4 class="font-bold text-lg text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-om"></i> රූපාවචර කුසල සිත් 5 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            රූපාවචර කුසල සිත් 5 කි. මේවා ධ්‍යාන අංග මගින් එකිනෙකට වෙනස් වේ.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800 overflow-hidden">
          <div class="bg-green-100 dark:bg-green-900/40 px-4 py-2 font-bold text-base text-green-800 dark:text-green-200">
            <i class="fa-solid fa-list-ol mr-2"></i> රූපාවචර කුසල සිත් 5
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">1</span>
              <span class="text-base"><strong>විතක්ක, විචාර, පීති, සුඛ, ඒකග්ගතා</strong> සහිත ප්‍රථම ධ්‍යාන කුසල විත්තය</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">2</span>
              <span class="text-base"><strong>විචාර, පීති, සුඛ, ඒකග්ගතා</strong> සහිත දුතිය ධ්‍යාන කුසල විත්තය</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">3</span>
              <span class="text-base"><strong>පීති, සුඛ, ඒකග්ගතා</strong> සහිත තෘතීය ධ්‍යාන කුසල විත්තය</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">4</span>
              <span class="text-base"><strong>සුඛ, ඒකග්ගතා</strong> සහිත චතුර්ථ ධ්‍යාන කුසල විත්තය</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2">
              <span class="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full">5</span>
              <span class="text-base"><strong>උපේක්ෂා, ඒකග්ගතා</strong> සහිත පඤ්චම ධ්‍යාන කුසල විත්තය</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-green-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book-open"></i> ධ්‍යාන යනු කුමක්ද?
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            චෛතසිකයින්ගෙන් වෙන් වැ සිතක් නො පවත්නා බව යට කියන ලදී. 
            රූපාවචර විත්තයන්හි යෙදෙන එස්ස වේදනා ආදී පංතිස් (35) චෛතසිකයන් අතුරෙහි 
            පසක් පමණක් මෙහි විශේෂ කොට දක්වන ලද්දේ ය. ඔවුන් ම ධ්‍යාන නම් වන බැවිනි.
            <br><br>
            ආරම්මණ උපනිජ්ඣානය කරන්නේ (අරමුණ බලන්නේ) හෝ විරුද්ධ ක්ලේශයන් 
            ඣාපනය කරන්නේ (දවන්නේ) ධ්‍යාන ය යි කියනු ලැබේ. ආරම්මණ උපනිජ්ඣානය 
            (අරමුණ බැලීම) ධ්‍යානයාගේ එක කෘත්‍යයෙකි. ඒ එසේ මැ යි.
            <br><br>
            <strong>විතර්කය</strong> තෙම අරමුණට සිත නගන්නේ ය.<br>
            <strong>විචාරය</strong> සිත අරමුණෙහි හසුරුවන්නේ ය.<br>
            <strong>පීතිය</strong> අරමුණෙන් සිත පිනවන්නේ ය.<br>
            <strong>සුඛය</strong> සිතට ආරම්මණ රසය අනුභව කරවන්නේ ය.<br>
            <strong>ඒකග්ගතාව</strong> නොයෙක් අරමුණුවල සිත විසිර යා නො දී එක අරමුණෙක යොදා තබන්නේ ය.
          </p>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-green-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> නීවරණ දුරු කිරීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            විරුද්ධ ක්ලේශ දවාලීම ද ධ්‍යානයාගේ එක් කෘත්‍යයෙකි. ඒ එසේ මැ යි.
          </p>
          <ul class="text-base text-slate-700 dark:text-slate-300 space-y-1 mt-2">
            <li>• <strong>විතර්කය</strong> ථීනමිද්ධ නීවරණය දවාලන්නේ ය.</li>
            <li>• <strong>විචාරය</strong> විචිකිච්ඡා නීවරණය දවාලන්නේ ය.</li>
            <li>• <strong>පීතිය</strong> ව්‍යාපාද නීවරණය දවාලන්නේ ය.</li>
            <li>• <strong>සුඛය</strong> උද්ධච්ච කුක්කුච්ච නීවරණය දවාලන්නේ ය.</li>
            <li>• <strong>ඒකග්ගතාව</strong> කාමච්ඡන්ද නීවරණය දවාලන්නේ ය.</li>
          </ul>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong> මේ පංචාංගයෙන් යුක්ත වූ ධ්‍යාන කුශල විත්තය 
            පඨමජ්ඣාන කුසල විත්තය යි කියනු ලැබේ.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 8. අරූපාවචර කුසල සිත් 4 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "8. අරූපාවචර කුසල සිත් 4 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-lg text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-om"></i> අරූපාවචර කුසල සිත් 4 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            රූප ධර්මයන් කෙරෙහි කලකිරී, රූප විරාග භාවනාව වඩා අරූප ධ්‍යාන උපදවා ගැනීමෙන් පහළ වන කුසල් සිත් <strong>අරූපාවචර කුසල් සිත්</strong> නම් වේ. මේවා ධ්‍යාන අංග වශයෙන් වෙනස් නොවන අතර, අරමුණු කරන <strong>ආරම්මණ (අරමුණ)</strong> අනුව සිත් 4ක් ලෙස ප්‍රභේද වේ.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 overflow-hidden">
          <div class="bg-purple-100 dark:bg-purple-900/40 px-4 py-2 font-bold text-base text-purple-800 dark:text-purple-200">
            <i class="fa-solid fa-list-ol mr-2"></i> අරූපාවචර කුසල සිත් 4
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/50 flex items-start gap-2">
              <span class="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full">1</span>
              <span class="text-base">අනන්ත වූ ආකාශය අරමුණු කොට උපදනා <strong>ආකාසානඤ්චායතන කුසල සිත</strong></span>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/50 flex items-start gap-2">
              <span class="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full">2</span>
              <span class="text-base">ප්‍රථම අරූප විඤ්ඤාණය අරමුණු කොට උපදනා <strong>විඤ්ඤාණඤ්චායතන කුසල සිත</strong></span>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/50 flex items-start gap-2">
              <span class="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full">3</span>
              <span class="text-base">පළමු විඤ්ඤාණයේ කිසිවක් නැති බව (නත්ථිභාවය) අරමුණු කොට උපදනා <strong>ආකිඤ්චඤ්ඤායතන කුසල සිත</strong></span>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/50 flex items-start gap-2">
              <span class="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full">4</span>
              <span class="text-base">ඖදාරික සංඥා නැති, ඉතා සියුම් සංඥා සහිත වූ <strong>නෙවසඤ්ඤානාසඤ්ඤායතන කුසල සිත</strong></span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-purple-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book-open"></i> අරූප ධ්‍යාන අංග සහ විශේෂ ලක්ෂණ
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            රූපාවචර ධ්‍යාන මෙන් අරූපාවචර සිත් ධ්‍යාන අංග වෙනස් වීමෙන් බෙදී නොයයි. මේ සියලු අරූප ධ්‍යාන සිත්හි යෙදෙන්නේ රූපාවචර පස්වන ධ්‍යානයට අයත් <strong>උපේක්ෂා</strong> සහ <strong>ඒකග්ගතා</strong> යන ධ්‍යාන අංග 2 පමණි. 
            <br><br>
            එබැවින් ධ්‍යාන අංග විභාගයේදී මේවා රූපාවචර පඤ්චම ධ්‍යානයට ම ඇතුළත් වේ. වෙනස පවතින්නේ ඒවා විසින් ගනු ලබන අරමුණුවල සියුම් බව (ආරම්මණ භේදය) මත පමණි.
          </p>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-purple-200 dark:border-slate-700">
          <h4 class="font-bold text-base text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> සිත් සතරේ ආරම්මණ (අරමුණු) විග්‍රහය
          </h4>
          <ul class="text-base text-slate-700 dark:text-slate-300 space-y-2 mt-2">
            <li>• <strong>ආකාසානඤ්චායතනය:</strong> කසිණ රූපය ඉවත් කොට අනන්ත වූ හිස් ආකාශය අරමුණු කරයි.</li>
            <li>• <strong>විඤ්ඤාණඤ්චායතනය:</strong> පෙර ආකාශය අරමුණු කළ ප්‍රථම අරූප විඤ්ඤාණය අනන්තය යි සලකා අරමුණු කරයි.</li>
            <li>• <strong>ආකිඤ්චඤ්ඤායතනය:</strong> ප්‍රථම අරූප විඤ්ඤාණයේ කිසිවක් නැති බව (අභාවය/හිස් බව) අරමුණු කරයි.</li>
            <li>• <strong>නෙවසඤ්ඤානාසඤ්ඤායතනය:</strong> ආකිඤ්චඤ්ඤායතන සිත අරමුණු කරමින්, සංඥාව නොපවත්නා තරම් අතිශය සියුම් වූ තත්ත්වයකට පත්වේ.</li>
          </ul>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong> උපේක්ෂා, ඒකග්ගතා යන අංග දෙකින් යුක්ත වන අරූපාවචර කුසල් සිත්, ආරම්මණ භේදය අනුව සිව් වැදෑරුම් වන අතර සියුම් බවින් එකකට වඩා එකක් උසස් වේ.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 9. ලෝකෝත්තර මාර්ග සිත් 4 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "9. ලෝකෝත්තර මාර්ග සිත් 4 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-road"></i> ලෝකෝත්තර මාර්ග සිත් 4 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            ලෝකෝත්තර කුසල සිත් 4 කි. මේවා මාර්ග විත්ත නම් වේ. මාර්ග විත්ත නම් කෙලෙස් මරණ සිත් ය.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-800 overflow-hidden">
          <div class="bg-amber-100 dark:bg-amber-900/40 px-4 py-2 font-bold text-base text-amber-800 dark:text-amber-200">
            <i class="fa-solid fa-list-ol mr-2"></i> ලෝකෝත්තර මාර්ග සිත් 4
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
              <h5 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1">1. සෝතාපත්ති මග්ග විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>සෝත</strong> නම් දිය වතුර හෙවත් ජල ප්‍රවාහය යි. නිර්වාණ නමැති මහා සාගරය කරා 
                පමුණුවන හෙයින් ආර්ය අෂ්ටාංගික මාර්ගය මෙහි සෝත ය යි කියනු ලැබේ. 
                ඒ සෝත සංඛ්‍යාත ආර්ය අෂ්ටාංගික මාර්ගයට පළමු වර පැමිණීම සෝතාපත්ති නමි. 
                ඒ සෝතාපත්ති වශයෙන් ලබන ලද මාර්ග විත්තය සෝතාපත්ති මාර්ග විත්තය යි.
                <br><br>
                මේ මාර්ග විත්තය ලබන්නේ අඳකාර ගෘහයෙක තුබූ දීප්තිමත් ස්වර්ණ භාජනයක් 
                විදුලි එළියෙන් දක්නා සේ නිර්වාණය දකින්නේ ය. ඒ දැක්ම හා සමග ම ඔහුගේ 
                විත්ත සන්තානයෙහි පැවැති සක්කායදිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන 
                සංයෝජන තුන සම්පූර්ණයෙන් විනාශ වන්නේ ය. එසේ ම සෙසු සියලු අකුශලයන්ගේ 
                අපායාගමි ශක්තියද විනාශ වන්නේ ය.
                <br><br>
                හෙනපහරින් අතුපතර කඩා ගිය වෘක්ෂයෙක් කලක් පවතින්නට අභව්‍ය සේ ඉදින් හෙතෙම 
                ඒ ජන්මයෙහි රහත් නුවූයේ නම් සත්වන ජන්මයෙහි හෝ එයින් මොබ ජන්මයක හෝ 
                රහත් වන්නේ ය. එයින් දෙවන ජන්මයෙහි රහත් වී නම් එකබීජි ය යි ද, සත්වන ජන්මයෙහි 
                රහත් වී නම් සත්තක්ඛත්තු පරම ය යි ද මෙදැතුරේ රහත් වී නම් කෝලංකෝල ය යි ද කියනු ලැබේ.
              </p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
              <h5 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1">2. සකදාගාමි මග්ග විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>'සකිං ආගාමි - සකදාගාමි'</strong> වරක් හැරී එන්නේ සකදාගාමි නම් වේ. 
                ඔහුගේ මාර්ග විත්තය සකදාගාමි මාර්ග විත්තය යි. මේ මාර්ග විත්තය ලැබූ පුද්ගලයා 
                අඳකාරයෙහි තුබූ ස්වර්ණ භාජනය පහන් එළියෙන් දුටුවා සේ නිර්වාණය දකින්නේ ය. 
                ඒ හා සමගම ඔහුගේ විත්ත සන්තානයෙහි පැවැති කාමරාග, ව්‍යාපාද යන සංයෝජන දෙක 
                තුනී වන්නේ ය.
                <br><br>
                <strong>සකෘදාගාමි පුද්ගලයා පස් ආකාරයකට බෙදේ:</strong>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                  <li>මෙබඳි සකෘදාගාමි මාර්ගය ලබා මෙබඳි ම රහත්වැ පිරිනිවන්නා ය.</li>
                  <li>මෙබඳි සකෘදාගාමි මාර්ගය ලබා මිය අන්‍ය භවයක ඉපිද එබඳි රහත් වැ පිරිනිවන්නා ය.</li>
                  <li>අන්‍ය භවයක දී සකෘදාගාමි මාර්ගය ලබා එබඳි ම රහත්වැ පිරිනිවන්නා ය.</li>
                  <li>අන්‍ය භවයක දී සකෘදාගාමි මාර්ගය ලබා එයින් මිය මෙබඳි ඉපිද රහත් වැ පිරිනිවන්නා ය.</li>
                  <li>මෙබඳි දී සකෘදාගාමි මාර්ගය ලබා අන්‍ය භවයක ඉපිද එයින් මිය නැවත මෙබඳි ඉපිද 
                    රහත්වැ පිරිනිවන්නා ය යි සකෘදාගාමි පුද්ගලයා පස් ආකාරයකට බෙදේ.</li>
                </ol>
              </p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
              <h5 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1">3. අනාගාමි මග්ග විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>'න ආගාමි - අනාගාමි'</strong> ප්‍රතිසන්ධි වශයෙන් නැවත මේ කාමලෝකයට 
                නො එන්නේ අනාගාමි නම් වේ. ඔහුගේ මාර්ග විත්තය අනාගාමි මාර්ග විත්තය යි. 
                චන්ද්‍රාලෝකයෙන් පෙර කී ස්වර්ණ භාජනය දුටුවා සේ හෙතෙම නිර්වාණය දකින්නේ ය. 
                ඒ හා සමගම ඔහුගේ විත්ත සන්තානයෙහි පැවැති කාමරාග, ව්‍යාපාද යන තුනීවූ 
                සංයෝජන දෙක මූලෝච්ඡින්න වන්නේ ය. හෙතෙම ඉදින් මේ ජන්මයෙහිදී ම රහත් නුවූයේ නම් 
                ශුද්ධාවාස බ්‍රහ්මලෝකයෙක ඉපිද එහිදී රහත්වන්නේ ය. නැවත කිසිලෙසක 
                උත්පත්ති වශයෙන් මේ ලෝකයට නො එන්නේ ය.
              </p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/50">
              <h5 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1">4. අරහත් මග්ග විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                අග්‍රදක්ෂිණාර්හ හෙයින් පූජාවන් ලබන්නට අර්හ (සුදුසු වූයේ හෝ සංසාර චක්‍රයෙහි 
                කෙලෙස් අර කැපූ හෙයින් හෝ රහසින් වත් පව් නොකරන හෙයින් හෝ) අර්හත් නම් වේ. 
                ඔහුගේ මාර්ග විත්තය අර්හත් මාර්ග විත්තය යි. මේ විත්තය ලැබූයේ මධ්‍යාහ්න 
                සූර්යාලෝකයෙන් පෙර කී ස්වර්ණ භාජනය දුටුවා සේ නිර්වාණය දකින්නේ ය. 
                ඒ හා සමග ම උන්වහන්සේගේ විත්ත සන්තානයෙහි පැවැති සෙසු සියලු ක්ලේශයෝ 
                විනාශයට යන්නාහ. උන්වහන්සේ මරණයෙන් පසු පුනර්භවයෙක නො ඉපිද 
                නිරුපධිශේෂ නිර්වාණධාතු බවට පැමිණෙන සේක.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong> ලෝකෝත්තර මාර්ග සිත් 4 කි. ධ්‍යාන 5 සමඟ ගණන් ගැනීමෙන් 20 ක් වේ.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 10. ලෝකෝත්තර ඵල සිත් 4 - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "10. ලෝකෝත්තර ඵල සිත් 4 - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-lg text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-trophy"></i> ලෝකෝත්තර ඵල සිත් 4 හැඳින්වීම
          </h4>
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            සෝතාපත්ති ආදි නාමයන්ගේ අර්ථ යට කී පරිදි ම ය. ඵල නම් විපාක ය. 
            සෝතාපත්ති මාර්ග විත්තය ලැබූ පුද්ගලයාට එයට අනතුරුවැ ම උපදින විත්තය 
            සෝතාපත්ති ඵල විත්තය යි.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-rose-200 dark:border-rose-800 overflow-hidden">
          <div class="bg-rose-100 dark:bg-rose-900/40 px-4 py-2 font-bold text-base text-rose-800 dark:text-rose-200">
            <i class="fa-solid fa-list-ol mr-2"></i> ලෝකෝත්තර ඵල සිත් 4
          </div>
          <div class="p-3 space-y-2">
            <div class="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50">
              <h5 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1">1. සෝතාපත්ති ඵල විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                සෝතාපත්ති මාර්ග විත්තය ලැබූ පුද්ගලයාට එයට අනතුරුවැ ම උපදින විත්තය 
                සෝතාපත්ති ඵල විත්තය යි. මාර්ග විත්ත කුසල් ය. ඵල විත්ත එහි විපාක ය යි දතයුතු. 
                කාමාවචරාදි කුශලයන්ගේ විපාක ඒ ජන්මයෙහි හෝ ජන්මාන්තරයෙක හෝ පමාද වැ 
                ලැබෙන්නේ ය. මේ ලෝකෝත්තර කුශලයන්ගේ විපාක වනාහි එවිට ම ලැබෙන්නේ ය. 
                <strong>"අකාලිකෝ"</strong> යි එහෙයින් වදාළේ ය.
              </p>
            </div>
            <div class="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50">
              <h5 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1">2. සකදාගාමි ඵල විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                සකෘදාගාමි මාර්ග විත්තයට අනතුරු වැ ලැබෙන විත්තය සකදාගාමි ඵල විත්තය යි. 
                මෙහිදු මාර්ග විත්තය කුසල් ය. ඵල විත්තය විපාක ය.
              </p>
            </div>
            <div class="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50">
              <h5 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1">3. අනාගාමි ඵල විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                අනාගාමි මාර්ග විත්තයට අනතුරු වැ ලැබෙන විත්තය අනාගාමි ඵල විත්තය යි. 
                මෙහිදු මාර්ග විත්තය කුසල් ය. ඵල විත්තය විපාක ය.
              </p>
            </div>
            <div class="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50">
              <h5 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1">4. අරහත් ඵල විත්තය</h5>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                අර්හත් මාර්ගයට අනතුරු වැ ලැබෙන විත්තය අර්හත් ඵල විත්තය යි. 
                මෙහිදු මාර්ග සිත් කුසල් ය. ඵල සිත් විපාකය යි දතයුතු. 
                මේ ලෝකෝත්තර කුසල් සිත් එක් වරක විනා දෙවරක කිසිවිටෙක නූපදනා බැවින් 
                ලෝකෝත්තර ක්‍රියා නම් සිත් වර්ගයක් නැත්තේ ය.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-rose-50 dark:bg-slate-900/50 p-4 rounded-lg border border-rose-200 dark:border-slate-700">
          <p class="text-base text-rose-800 dark:text-rose-300">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong> ලෝකෝත්තර විපාක සිත් 4 කි. ධ්‍යාන 5 සමඟ ගණන් ගැනීමෙන් 20 ක් වේ.
          </p>
        </div>
      </div>
    `
  },

  // ============================================================
  // 11. සංග්‍රහ ගාථා - දීර්ඝ විස්තර
  // ============================================================
  {
    title: "11. සංග්‍රහ ගාථා - දීර්ඝ විස්තරය",
    desc: `
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-amber-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book"></i> ගාථා 1: අකුසල සිත්
          </h4>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "අට්ඨධා ලොභමූලානි, දොසමූලානි ච ද්විධා,<br>
            මොහමූලානි ච ද්වෙති, ද්වාදසාකුසලා සියුං."
          </p>
          <p class="text-sm text-amber-700 dark:text-amber-300 mt-2">
            ලෝභ මූලික සිත් 8, දෝස මූලික සිත් 2, මෝහ මූලික සිත් 2 වශයෙන් අකුසල් සිත් 12 කි.
          </p>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-blue-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book"></i> ගාථා 2: අහේතුක සිත්
          </h4>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "සත්තාකුසලපාකානි - පුඤ්ඤපාකානි අට්ඨධා,<br>
            ක්‍රියා චිත්තානි තීණීති - අට්ඨාරස අහේතුකා"
          </p>
          <p class="text-sm text-blue-700 dark:text-blue-300 mt-2">
            අකුසල විපාක සිත් 7, කුසල අහේතුක විපාක සිත් 8, අහේතුක ක්‍රියා සිත් 3 වශයෙන් 
            අහේතුක සිත් 18 කි.
          </p>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-green-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book"></i> ගාථා 3: කාමාවචර සිත්
          </h4>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "වෙදනාඤාණසඞ්ඛාරභෙදෙන චතුවීසති,<br>
            සහෙතුකාමාවචරපුඤ්ඤපාකක්රියා මතා"
          </p>
            
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
            "කාමෙ තෙවීස පාකානි, පුඤ්ඤාපුඤ්ඤානි වීසති,<br>
            එකාදස ක්රියා චෙති, චතුපඤ්ඤාස සබ්බථා"
          </p>

          <p class="text-sm text-green-700 dark:text-green-300 mt-2">
            කාමාවචර කුසල් ය, සහේතුක කාමාවචර විපාක ය, සහේතුක කාමාවචර ක්‍රියා ය යන මේ චිත්තයෝ වේදනා ඤාණ සංඛාර භේදයෙන් සූවිසි වැදෑරුම් වෙත්.
            කුසල් සිත් අටෙක, අකුසල් සිත් දෙළොසෙක, විපාක සිත් තෙවිස්සෙ (23) ක, ක්‍රියා සිත් එකොළොසෙකැ යි කාමාවචර සිත් මුළුල්ල 54 ක් ය.
          </p>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-purple-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book"></i> ගාථා 4: රූපාවචර සිත්
          </h4>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "පඤ්චධා ඣාන භේදේන - රූපාවචර මානසං,<br>
            පුඤ්ඤපාක ක්‍රියා භේදා - පඤ්චදස විධං භවේ"
          </p>
          <p class="text-sm text-purple-700 dark:text-purple-300 mt-2">
            රූපාවචර සිත් ධ්‍යාන 5 වශයෙන් ද, කුසල්-විපාක-ක්‍රියා වශයෙන් ද බෙදා 15 කි.
          </p>
        </div>

        <div class="bg-gradient-to-r from-rose-50 to-red-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-rose-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book"></i> ගාථා 5: අරූපාවචර සිත්
          </h4>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "ආලම්බනප්පභේදේන - චතුධාරූප්පමානසං,<br>
            පුඤ්ඤපාක ක්‍රියා භේදා - පුනද්වාදසධා ඨිතං"
          </p>
          <p class="text-sm text-rose-700 dark:text-rose-300 mt-2">
            අරූපාවචර සිත් අරමුණු 4 වශයෙන් ද, කුසල්-විපාක-ක්‍රියා වශයෙන් ද බෙදා 12 කි.
          </p>
        </div>

        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-indigo-200 dark:border-slate-700">
          <h4 class="font-bold text-lg text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-book"></i> ගාථා 6: ලෝකෝත්තර සිත්
          </h4>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "චතුමග්ගප්පභෙදෙන, චතුධා කුසලං තථා,<br>
            පාකං තස්ස ඵලත්තාති, අට්ඨධානුත්තරං මතං"
          </p>
          <p class="text-sm text-indigo-700 dark:text-indigo-300 mt-2">
            ලෝකෝත්තර සිත් සතර මාර්ග භේදයෙන් චතුර්විධ ය. විපාක වනාහි ඔහුගේ ම ඵල බැවින් 
            භේද චතුර්විධ ය. මෙසේ ලෝකෝත්තර සිත් ද අෂ්ටවිධ ය.
          </p>
        </div>

        <div class="bg-amber-50 dark:bg-slate-900/50 p-4 rounded-lg border border-amber-200 dark:border-slate-700">
          <p class="text-base text-amber-800 dark:text-saffron-300 mb-2">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            <strong>සාරාංශය:</strong>
          </p>
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "චතුපඤ්ඤාසධා කාමෙ, රූපෙ පන්නරසීරයෙ,<br>
            චිත්තානි ද්වාදසාරුප්පෙ, අට්ඨධානුත්තරෙ තථා,"
          </p> 
            
          <p class="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
            "ඉත්ථමෙකූනනවුතිපභෙදං පන මානසං,<br>
            එකවීසසතං වාථ, විභජන්ති විචක්ඛණා."
          </p> 
          
          <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
            කාමාවචර සිත් 54 ක, රූපාවචර සිත් 15 ක, අරූපාවචර සිත් 12 ක, ලෝකෝත්තර සිත් 8 කැ යි භූමිභේද වශයෙන් සිත් 89 දතයුතු.
            උක්ත ප්‍රකාරයෙන් කාමාවචරාදි චාතුර්භූමික සිත් සියල්ල 89 ක් වන්නේ ය. වැළි එය 121 ආකාරයට ද බෙදනු ලැබේ.
          </p>
        </div>
      </div>
    `
  }
];

// ============================================================
// 2. සිත් 121 දත්ත (citta.js සමඟ භාවිතයට)
// ============================================================

const citta121Data = {
  citta121Summary: {
    title: "සිත් 121 සාරාංශය",
    desc: "<div class='bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-emerald-200 dark:border-slate-700'>" +
          "<p class='mb-2 text-base'>සිත් 89 ක් සහ සිත් 121 ක් අතර වෙනස පහත පරිදි වේ:</p>" +
          "<ul class='space-y-1 text-base'>" +
          "<li>• <strong>සිත් 89:</strong> ලෝකෝත්තර සිත් 8 ක් ලෙස ගණන් ගැනීම.</li>" +
          "<li>• <strong>සිත් 121:</strong> ලෝකෝත්තර සිත් 8 ම ධ්‍යාන 5 ක් සමඟ ගණන් ගැනීමෙන් 40 ක් වේ.</li>" +
          "<li>• එනම්, 89 - 8 + 40 = 121.</li>" +
          "</ul>" +
          "</div>" +
          "<hr class='my-3 border-amber-200 dark:border-slate-700'>" +
          "<p class='mb-2 text-base'><strong>සිත් 121 බෙදීම:</strong></p>" +
          "<div class='grid grid-cols-2 gap-2'>" +
          "<div class='bg-blue-50 dark:bg-blue-900/30 p-2.5 rounded-lg text-center'><span class='font-bold text-base text-blue-800 dark:text-blue-200'>කාමාවචර 54</span></div>" +
          "<div class='bg-green-50 dark:bg-green-900/30 p-2.5 rounded-lg text-center'><span class='font-bold text-base text-green-800 dark:text-green-200'>රූපාවචර 15</span></div>" +
          "<div class='bg-purple-50 dark:bg-purple-900/30 p-2.5 rounded-lg text-center'><span class='font-bold text-base text-purple-800 dark:text-purple-200'>අරූපාවචර 12</span></div>" +
          "<div class='bg-amber-50 dark:bg-amber-900/30 p-2.5 rounded-lg text-center'><span class='font-bold text-base text-amber-800 dark:text-amber-200'>ලෝකෝත්තර 40</span></div>" +
          "</div>"
  },

  akusala12Full: {
    title: "A1 - අකුසල් සිත් 12",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>ලෝභ, දෝස, මෝහ යන අකුසල මූලයන් මත පදනම්ව උපදින සිත් 12 කි.</p>" +
          "<div class='mb-4 bg-red-50/50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 overflow-hidden'>" +
          "<div class='bg-red-100 dark:bg-red-900/40 px-4 py-2 font-bold text-base text-red-800 dark:text-red-200 flex items-center gap-2'><i class='fa-solid fa-fire'></i> a. ලෝභ මූලික සිත් 8</div>" +
          "<div class='p-3 space-y-2'><div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const ditthi = (i === 1 || i === 2 || i === 5 || i === 6) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 1) ? 'අසංඛාරික' : 'සසංඛාරික';
            return `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-red-100 dark:border-red-900/50 flex items-start gap-2'><span class='bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i}</span><span class='text-base'>${feelings} සහගත දිට්ඨිගත ${ditthi} ${sankhara} සිත</span></div>`;
          }).join('') +
          "</div></div></div>" +
          "<div class='mb-4 bg-amber-50/50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 overflow-hidden'>" +
          "<div class='bg-amber-100 dark:bg-amber-900/40 px-4 py-2 font-bold text-base text-amber-800 dark:text-amber-200 flex items-center gap-2'><i class='fa-solid fa-bolt'></i> b. දෝස මූලික සිත් 2</div>" +
          "<div class='p-3 space-y-2'><div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/50 flex items-start gap-2'><span class='bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>9</span><span class='text-base'>දෝමනස්ස සහගත පටිඝ සම්පයුත්ත අසංඛාරික සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/50 flex items-start gap-2'><span class='bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>10</span><span class='text-base'>දෝමනස්ස සහගත පටිඝ සම්පයුත්ත සසංඛාරික සිත</span></div>" +
          "</div></div></div>" +
          "<div class='bg-blue-50/50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 overflow-hidden'>" +
          "<div class='bg-blue-100 dark:bg-blue-900/40 px-4 py-2 font-bold text-base text-blue-800 dark:text-blue-200 flex items-center gap-2'><i class='fa-solid fa-cloud'></i> c. මෝහ මූලික සිත් 2</div>" +
          "<div class='p-3 space-y-2'><div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/50 flex items-start gap-2'><span class='bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>11</span><span class='text-base'>උපේක්ෂා සහගත විචිකිච්ඡා සම්පයුත්ත සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/50 flex items-start gap-2'><span class='bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>12</span><span class='text-base'>උපේක්ෂා සහගත උද්ධච්ච සම්පයුත්ත සිත</span></div>" +
          "</div></div></div>"
  },

  ahetuka18Full: {
    title: "A2 - අහේතුක සිත් 18",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>හේතු රහිතව උපදින සිත් 18 කි.</p>" +
          "<div class='mb-4 bg-orange-50/50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800 overflow-hidden'>" +
          "<div class='bg-orange-100 dark:bg-orange-900/40 px-4 py-2 font-bold text-base text-orange-800 dark:text-orange-200 flex items-center gap-2'><i class='fa-solid fa-circle-exclamation'></i> a. අකුසල විපාක සිත් 7</div>" +
          "<div class='p-3 space-y-2'><div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>13</span><span class='text-base'>උපේක්ෂා සහගත චක්ඛු විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>14</span><span class='text-base'>උපේක්ෂා සහගත සෝත විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>15</span><span class='text-base'>උපේක්ෂා සහගත ඝාන විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>16</span><span class='text-base'>උපේක්ෂා සහගත ජිව්හා විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>17</span><span class='text-base'>දුක්ඛ සහගත කාය විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>18</span><span class='text-base'>උපේක්ෂා සහගත සම්පටිච්ඡන සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>19</span><span class='text-base'>උපේක්ෂා සහගත සන්තීරණ සිත</span></div>" +
          "</div></div></div>" +
          "<div class='mb-4 bg-green-50/50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 overflow-hidden'>" +
          "<div class='bg-green-100 dark:bg-green-900/40 px-4 py-2 font-bold text-base text-green-800 dark:text-green-200 flex items-center gap-2'><i class='fa-solid fa-check-circle'></i> b. කුසල අහේතුක විපාක සිත් 8</div>" +
          "<div class='p-3 space-y-2'><div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>20</span><span class='text-base'>උපේක්ෂා සහගත චක්ඛු විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>21</span><span class='text-base'>උපේක්ෂා සහගත සෝත විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>22</span><span class='text-base'>උපේක්ෂා සහගත ඝාන විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>23</span><span class='text-base'>උපේක්ෂා සහගත ජිව්හා විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>24</span><span class='text-base'>සුඛ සහගත කාය විඤ්ඤාණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>25</span><span class='text-base'>උපේක්ෂා සහගත සම්පටිච්ඡන සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>26</span><span class='text-base'>සෝමනස්ස සහගත සන්තීරණ සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>27</span><span class='text-base'>උපේක්ෂා සහගත සන්තීරණ සිත</span></div>" +
          "</div></div></div>" +
          "<div class='bg-purple-50/50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800 overflow-hidden'>" +
          "<div class='bg-purple-100 dark:bg-purple-900/40 px-4 py-2 font-bold text-base text-purple-800 dark:text-purple-200 flex items-center gap-2'><i class='fa-solid fa-person-running'></i> c. අහේතුක ක්‍රියා සිත් 3</div>" +
          "<div class='p-3 space-y-2'><div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/50 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>28</span><span class='text-base'>උපේක්ෂා සහගත පංචද්වාරාවජ්ජන සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/50 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>29</span><span class='text-base'>උපේක්ෂා සහගත මනෝද්වාරාවජ්ජන සිත</span></div>" +
          "<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-purple-100 dark:border-purple-900/50 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>30</span><span class='text-base'>සෝමනස්ස සහගත හසිතුප්පාද සිත</span></div>" +
          "</div></div></div>"
  },

  kamaKusala24Full: {
    title: "A3 - කාම සෝභන සිත් 24",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>කාම සෝභන සිත් 24 කි. (කුසල් 8, විපාක 8, ක්‍රියා 8)</p>" +
          "<div class='grid grid-cols-1 md:grid-cols-3 gap-3'>" +
          "<div class='bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800 p-3'>" +
          "<div class='font-bold text-base text-green-800 dark:text-green-200 mb-2 flex items-center gap-2'><i class='fa-solid fa-seedling'></i> a. කුසල් සිත් 8</div>" +
          "<ul class='space-y-1.5 text-base'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const nana = (i % 2 === 1) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 0) ? 'සසංඛාරික' : 'අසංඛාරික';
            return `<li class='flex items-start gap-2'><span class='text-green-600 font-bold'>${i}.</span> ${feelings} සහගත ඤාණ${nana} ${sankhara} සිත</li>`;
          }).join('') +
          "</ul></div>" +
          "<div class='bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-3'>" +
          "<div class='font-bold text-base text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2'><i class='fa-solid fa-rotate-right'></i> b. විපාක සිත් 8</div>" +
          "<ul class='space-y-1.5 text-base'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const nana = (i % 2 === 1) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 0) ? 'සසංඛාරික' : 'අසංඛාරික';
            return `<li class='flex items-start gap-2'><span class='text-blue-600 font-bold'>${i}.</span> ${feelings} සහගත ඤාණ${nana} ${sankhara} සිත</li>`;
          }).join('') +
          "</ul></div>" +
          "<div class='bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 p-3'>" +
          "<div class='font-bold text-base text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2'><i class='fa-solid fa-hand'></i> c. ක්‍රියා සිත් 8</div>" +
          "<ul class='space-y-1.5 text-base'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const nana = (i % 2 === 1) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 0) ? 'සසංඛාරික' : 'අසංඛාරික';
            return `<li class='flex items-start gap-2'><span class='text-purple-600 font-bold'>${i}.</span> ${feelings} සහගත ඤාණ${nana} ${sankhara} සිත</li>`;
          }).join('') +
          "</ul></div></div>"
  },

  rupa15Full: {
    title: "B - රූපාවචර සිත් 15",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>රූපාවචර සිත් 15 කි. කුසල් 5, විපාක 5, ක්‍රියා 5 වශයෙනි.</p>" +
          "<div class='grid grid-cols-1 md:grid-cols-3 gap-3'>" +
          "<div class='bg-green-50 dark:bg-green-900/20 p-3 rounded-xl border border-green-200 dark:border-green-800'><strong class='text-green-800 dark:text-green-200 block mb-2'>B1. කුසල් සිත් 5</strong><ul class='space-y-1 text-sm'>" +
          ['ප්‍රථම ධ්‍යාන', 'දුතිය ධ්‍යාන', 'තෘතීය ධ්‍යාන', 'චතුර්ථ ධ්‍යාන', 'පඤ්චම ධ්‍යාන'].map((n, i) => `<li>${i+1}. ${n} කුසල් සිත</li>`).join('') +
          "</ul></div>" +
          "<div class='bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border border-blue-200 dark:border-blue-800'><strong class='text-blue-800 dark:text-blue-200 block mb-2'>B2. විපාක සිත් 5</strong><ul class='space-y-1 text-sm'>" +
          ['ප්‍රථම ධ්‍යාන', 'දුතිය ධ්‍යාන', 'තෘතීය ධ්‍යාන', 'චතුර්ථ ධ්‍යාන', 'පඤ්චම ධ්‍යාන'].map((n, i) => `<li>${i+1}. ${n} විපාක සිත</li>`).join('') +
          "</ul></div>" +
          "<div class='bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl border border-purple-200 dark:border-purple-800'><strong class='text-purple-800 dark:text-purple-200 block mb-2'>B3. ක්‍රියා සිත් 5</strong><ul class='space-y-1 text-sm'>" +
          ['ප්‍රථම ධ්‍යාන', 'දුතිය ධ්‍යාන', 'තෘතීය ධ්‍යාන', 'චතුර්ථ ධ්‍යාන', 'පඤ්චම ධ්‍යාන'].map((n, i) => `<li>${i+1}. ${n} ක්‍රියා සිත</li>`).join('') +
          "</ul></div></div>"
  },

  rupaKusala5Full: {
    title: "B1 - රූපාවචර කුසල් සිත් 5",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>රූපාවචර කුසල් සිත් 5 කි.</p>" +
          "<div class='grid grid-cols-1 gap-2'>" +
          "<div class='bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>1</span><span class='text-base'><strong>විතක්ක, විචාර, පීති, සුඛ, ඒකග්ගතා</strong> සහිත ප්‍රථම ධ්‍යාන කුසල් සිත</span></div>" +
          "<div class='bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>2</span><span class='text-base'><strong>විචාර, පීති, සුඛ, ඒකග්ගතා</strong> සහිත දුතිය ධ්‍යාන කුසල් සිත</span></div>" +
          "<div class='bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>3</span><span class='text-base'><strong>පීති, සුඛ, ඒකග්ගතා</strong> සහිත තෘතීය ධ්‍යාන කුසල් සිත</span></div>" +
          "<div class='bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>4</span><span class='text-base'><strong>සුඛ, ඒකග්ගතා</strong> සහිත චතුර්ථ ධ්‍යාන කුසල් සිත</span></div>" +
          "<div class='bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>5</span><span class='text-base'><strong>උපේක්ෂා, ඒකග්ගතා</strong> සහිත පඤ්චම ධ්‍යාන කුසල් සිත</span></div>" +
          "</div>"
  },

  rupaVipaka5Full: {
    title: "B2 - රූපාවචර විපාක සිත් 5",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>රූපාවචර විපාක සිත් 5 කි.</p>" +
          "<div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => 
            `<div class='bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-2'><span class='bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i+1}</span><span class='text-base'>${n} විපාක සිත</span></div>`
          ).join('') +
          "</div>"
  },

  rupaKriya5Full: {
    title: "B3 - රූපාවචර ක්‍රියා සිත් 5",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>රූපාවචර ක්‍රියා සිත් 5 කි. මේවා රහතන් වහන්සේට පමණක් උපදින සිත් වේ.</p>" +
          "<div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => 
            `<div class='bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i+1}</span><span class='text-base'>${n} ක්‍රියා සිත</span></div>`
          ).join('') +
          "</div>"
  },

  arupa12Full: {
    title: "C - අරූපාවචර සිත් 12",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>අරූපාවචර සිත් 12 කි. කුසල් 4, විපාක 4, ක්‍රියා 4 වශයෙනි.</p>" +
          "<div class='grid grid-cols-1 md:grid-cols-3 gap-3'>" +
          "<div class='bg-green-50 dark:bg-green-900/20 p-3 rounded-xl border border-green-200 dark:border-green-800'><strong class='text-green-800 dark:text-green-200 block mb-2'>C1. කුසල් සිත් 4</strong><ul class='space-y-1 text-sm'>" +
          ['ආකාසානඤ්චායතන', 'විඤ්ඤාණඤ්චායතන', 'ආකිඤ්චඤ්ඤායතන', 'නේවසඤ්ඤානාසඤ්ඤායතන'].map((n, i) => `<li>${i+1}. ${n} කුසල්</li>`).join('') +
          "</ul></div>" +
          "<div class='bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border border-blue-200 dark:border-blue-800'><strong class='text-blue-800 dark:text-blue-200 block mb-2'>C2. විපාක සිත් 4</strong><ul class='space-y-1 text-sm'>" +
          ['ආකාසානඤ්චායතන', 'විඤ්ඤාණඤ්චායතන', 'ආකිඤ්චඤ්ඤායතන', 'නේවසඤ්ඤානාසඤ්ඤායතන'].map((n, i) => `<li>${i+1}. ${n} විපාක</li>`).join('') +
          "</ul></div>" +
          "<div class='bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl border border-purple-200 dark:border-purple-800'><strong class='text-purple-800 dark:text-purple-200 block mb-2'>C3. ක්‍රියා සිත් 4</strong><ul class='space-y-1 text-sm'>" +
          ['ආකාසානඤ්චායතන', 'විඤ්ඤාණඤ්චායතන', 'ආකිඤ්චඤ්ඤායතන', 'නේවසඤ්ඤානාසඤ්ඤායතන'].map((n, i) => `<li>${i+1}. ${n} ක්‍රියා</li>`).join('') +
          "</ul></div></div>"
  },

  arupaKusala4Full: {
    title: "C1 - අරූපාවචර කුසල් සිත් 4",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>අරූපාවචර කුසල් සිත් 4 කි.</p>" +
          "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          ['ආකාසානඤ්චායතන', 'විඤ්ඤාණඤ්චායතන', 'ආකිඤ්චඤ්ඤායතන', 'නේවසඤ්ඤානාසඤ්ඤායතන'].map((n, i) => 
            `<div class='bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i+1}</span><span class='text-base'>${n} කුසල් සිත</span></div>`
          ).join('') +
          "</div>"
  },

  arupaVipaka4Full: {
    title: "C2 - අරූපාවචර විපාක සිත් 4",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>අරූපාවචර විපාක සිත් 4 කි.</p>" +
          "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          ['ආකාසානඤ්චායතන', 'විඤ්ඤාණඤ්චායතන', 'ආකිඤ්චඤ්ඤායතන', 'නේවසඤ්ඤානාසඤ්ඤායතන'].map((n, i) => 
            `<div class='bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-2'><span class='bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i+1}</span><span class='text-base'>${n} විපාක සිත</span></div>`
          ).join('') +
          "</div>"
  },

  arupaKriya4Full: {
    title: "C3 - අරූපාවචර ක්‍රියා සිත් 4",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>අරූපාවචර ක්‍රියා සිත් 4 කි. මේවා රහතන් වහන්සේට පමණක් උපදින සිත් වේ.</p>" +
          "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          ['ආකාසානඤ්චායතන', 'විඤ්ඤාණඤ්චායතන', 'ආකිඤ්චඤ්ඤායතන', 'නේවසඤ්ඤානාසඤ්ඤායතන'].map((n, i) => 
            `<div class='bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-200 dark:border-purple-800 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i+1}</span><span class='text-base'>${n} ක්‍රියා සිත</span></div>`
          ).join('') +
          "</div>"
  },

  lokuttara40Full: {
    title: "D - ලෝකෝත්තර සිත් 40",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>ලෝකෝත්තර සිත් 40 කි. මාර්ග සිත් 20 ක් සහ ඵල සිත් 20 ක් වශයෙනි.</p>" +
          "<div class='grid grid-cols-1 md:grid-cols-2 gap-3'>" +
          "<div class='bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800'><strong class='text-amber-800 dark:text-amber-200 block mb-2'>D1. මාර්ග සිත් 20</strong><p class='text-sm'>සෝතාපත්ති, සකදාගාමි, අනාගාමි, අරහත් යන මාර්ග 4 ධ්‍යාන 5 බැගින් ගුණනය වීමෙන් 20 කි.</p></div>" +
          "<div class='bg-rose-50 dark:bg-rose-900/20 p-3 rounded-xl border border-rose-200 dark:border-rose-800'><strong class='text-rose-800 dark:text-rose-200 block mb-2'>D2. ඵල සිත් 20</strong><p class='text-sm'>සෝතාපත්ති, සකදාගාමි, අනාගාමි, අරහත් යන ඵල 4 ධ්‍යාන 5 බැගින් ගුණනය වීමෙන් 20 කි.</p></div>" +
          "</div>"
  },

  lokuttaraMagga20Full: {
    title: "D1 - ලෝකෝත්තර මාර්ග සිත් 20",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>ලෝකෝත්තර මාර්ග සිත් 20 කි. (ලෝකෝත්තර සිත් 8 ම ධ්‍යාන 5 සමඟ = 40)</p>" +
          "<div class='mb-4 bg-amber-50/50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 overflow-hidden'>" +
          "<div class='bg-amber-100 dark:bg-amber-900/40 px-4 py-2 font-bold text-base text-amber-800 dark:text-amber-200 flex items-center gap-2'><i class='fa-solid fa-road'></i> සෝතාපත්ති මග්ග සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/50'><span class='text-base'>${i+1}. සෝතාපත්ති මග්ග සිත - ${n}</span></div>`).join('') +
          "</div></div></div>" +
          "<div class='mb-4 bg-amber-50/50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 overflow-hidden'>" +
          "<div class='bg-amber-100 dark:bg-amber-900/40 px-4 py-2 font-bold text-base text-amber-800 dark:text-amber-200 flex items-center gap-2'><i class='fa-solid fa-road'></i> සකදාගාමි මග්ග සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/50'><span class='text-base'>${i+6}. සකදාගාමි මග්ග සිත - ${n}</span></div>`).join('') +
          "</div></div></div>" +
          "<div class='mb-4 bg-amber-50/50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 overflow-hidden'>" +
          "<div class='bg-amber-100 dark:bg-amber-900/40 px-4 py-2 font-bold text-base text-amber-800 dark:text-amber-200 flex items-center gap-2'><i class='fa-solid fa-road'></i> අනාගාමි මග්ග සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/50'><span class='text-base'>${i+11}. අනාගාමි මග්ග සිත - ${n}</span></div>`).join('') +
          "</div></div></div>" +
          "<div class='mb-4 bg-amber-50/50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 overflow-hidden'>" +
          "<div class='bg-amber-100 dark:bg-amber-900/40 px-4 py-2 font-bold text-base text-amber-800 dark:text-amber-200 flex items-center gap-2'><i class='fa-solid fa-road'></i> අරහත් මග්ග සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/50'><span class='text-base'>${i+16}. අරහත් මග්ග සිත - ${n}</span></div>`).join('') +
          "</div></div></div>"
  },

  lokuttaraPhala20Full: {
    title: "D2 - ලෝකෝත්තර ඵල සිත් 20",
    desc: "<p class='mb-3 text-base text-slate-600 dark:text-slate-400'>ලෝකෝත්තර ඵල සිත් 20 කි.</p>" +
          "<div class='mb-4 bg-rose-50/50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-800 overflow-hidden'>" +
          "<div class='bg-rose-100 dark:bg-rose-900/40 px-4 py-2 font-bold text-base text-rose-800 dark:text-rose-200 flex items-center gap-2'><i class='fa-solid fa-trophy'></i> සෝතාපත්ති ඵල සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/50'><span class='text-base'>${i+1}. සෝතාපත්ති ඵල සිත - ${n}</span></div>`).join('') +
          "</div></div></div>" +
          "<div class='mb-4 bg-rose-50/50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-800 overflow-hidden'>" +
          "<div class='bg-rose-100 dark:bg-rose-900/40 px-4 py-2 font-bold text-base text-rose-800 dark:text-rose-200 flex items-center gap-2'><i class='fa-solid fa-trophy'></i> සකදාගාමි ඵල සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/50'><span class='text-base'>${i+6}. සකදාගාමි ඵල සිත - ${n}</span></div>`).join('') +
          "</div></div></div>" +
          "<div class='mb-4 bg-rose-50/50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-800 overflow-hidden'>" +
          "<div class='bg-rose-100 dark:bg-rose-900/40 px-4 py-2 font-bold text-base text-rose-800 dark:text-rose-200 flex items-center gap-2'><i class='fa-solid fa-trophy'></i> අනාගාමි ඵල සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/50'><span class='text-base'>${i+11}. අනාගාමි ඵල සිත - ${n}</span></div>`).join('') +
          "</div></div></div>" +
          "<div class='mb-4 bg-rose-50/50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-800 overflow-hidden'>" +
          "<div class='bg-rose-100 dark:bg-rose-900/40 px-4 py-2 font-bold text-base text-rose-800 dark:text-rose-200 flex items-center gap-2'><i class='fa-solid fa-trophy'></i> අරහත් ඵල සිත් 5</div>" +
          "<div class='p-3'><div class='grid grid-cols-1 gap-2'>" +
          [
            'විතක්ක විචාර පීති සුඛ ඒකග්ගතා සහිත ප්‍රථම ධ්‍යාන',
            'විචාර පීති සුඛ ඒකග්ගතා සහිත දුතිය ධ්‍යාන',
            'පීති සුඛ ඒකග්ගතා සහිත තෘතීය ධ්‍යාන',
            'සුඛ ඒකග්ගතා සහිත චතුර්ථ ධ්‍යාන',
            'උපේක්ෂා ඒකග්ගතා සහිත පඤ්චම ධ්‍යාන'
          ].map((n, i) => `<div class='bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/50'><span class='text-base'>${i+16}. අරහත් ඵල සිත - ${n}</span></div>`).join('') +
          "</div></div></div>"
  },

  lobha8Full: {
    title: "a. ලෝභ මූලික සිත් 8 (A1)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const ditthi = (i === 1 || i === 2 || i === 5 || i === 6) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 1) ? 'අසංඛාරික' : 'සසංඛාරික';
            return `<div class='bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-200 dark:border-red-800 flex items-start gap-2'><span class='bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i}</span><span class='text-base'>${feelings} සහගත දිට්ඨිගත ${ditthi} ${sankhara} සිත</span></div>`;
          }).join('') +
          "</div>"
  },
  
  dosa2Full: {
    title: "b. දෝස මූලික සිත් 2 (A1)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-amber-50 dark:bg-amber-900/20 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800 flex items-start gap-2'><span class='bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>9</span><span class='text-base'>දෝමනස්ස සහගත පටිඝ සම්පයුත්ත අසංඛාරික සිත</span></div>" +
          "<div class='bg-amber-50 dark:bg-amber-900/20 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800 flex items-start gap-2'><span class='bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>10</span><span class='text-base'>දෝමනස්ස සහගත පටිඝ සම්පයුත්ත සසංඛාරික සිත</span></div>" +
          "</div>"
  },
  
  moha2Full: {
    title: "c. මෝහ මූලික සිත් 2 (A1)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-2'><span class='bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>11</span><span class='text-base'>උපේක්ෂා සහගත විචිකිච්ඡා සම්පයුත්ත සිත</span></div>" +
          "<div class='bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-2'><span class='bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>12</span><span class='text-base'>උපේක්ෂා සහගත උද්ධච්ච සම්පයුත්ත සිත</span></div>" +
          "</div>"
  },
  
  akusalaVipaka7Full: {
    title: "a. අකුසල විපාක සිත් 7 (A2)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          [13,14,15,16,17,18,19].map(i => {
            const feeling = (i === 17) ? 'දුක්ඛ' : 'උපේක්ෂා';
            const door = i === 13 ? 'චක්ඛු' : i === 14 ? 'සෝත' : i === 15 ? 'ඝාන' : i === 16 ? 'ජිව්හා' : i === 17 ? 'කාය' : i === 18 ? 'සම්පටිච්ඡන' : 'සන්තීරණ';
            const suffix = (door === 'සම්පටිච්ඡන' || door === 'සන්තීරණ') ? '' : ' විඤ්ඤාණ';
            return `<div class='bg-orange-50 dark:bg-orange-900/20 p-2.5 rounded-lg border border-orange-200 dark:border-orange-800 flex items-start gap-2'><span class='bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i}</span><span class='text-base'>${feeling} සහගත ${door}${suffix} සිත</span></div>`;
          }).join('') +
          "</div>"
  },
  
  kusalaAhetuka8Full: {
    title: "b. කුසල අහේතුක විපාක සිත් 8 (A2)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          [20,21,22,23,24,25,26,27].map(i => {
            const feeling = (i === 24) ? 'සුඛ' : (i === 26) ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const door = i === 20 ? 'චක්ඛු' : i === 21 ? 'සෝත' : i === 22 ? 'ඝාන' : i === 23 ? 'ජිව්හා' : i === 24 ? 'කාය' : i === 25 ? 'සම්පටිච්ඡන' : 'සන්තීරණ';
            const suffix = (door === 'සම්පටිච්ඡන' || door === 'සන්තීරණ') ? '' : ' විඤ්ඤාණ';
            return `<div class='bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i}</span><span class='text-base'>${feeling} සහගත ${door}${suffix} සිත</span></div>`;
          }).join('') +
          "</div>"
  },
  
  ahetukaKriya3Full: {
    title: "c. අහේතුක ක්‍රියා සිත් 3 (A2)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          "<div class='bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-200 dark:border-purple-800 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>28</span><span class='text-base'>උපේක්ෂා සහගත පංචද්වාරාවජ්ජන සිත</span></div>" +
          "<div class='bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-200 dark:border-purple-800 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>29</span><span class='text-base'>උපේක්ෂා සහගත මනෝද්වාරාවජ්ජන සිත</span></div>" +
          "<div class='bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-200 dark:border-purple-800 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>30</span><span class='text-base'>සෝමනස්ස සහගත හසිතුප්පාද සිත</span></div>" +
          "</div>"
  },
  
  kamaKusala8Full: {
    title: "a. කාම සෝභන කුසල් සිත් 8 (A3)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const nana = (i % 2 === 1) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 0) ? 'සසංඛාරික' : 'අසංඛාරික';
            return `<div class='bg-green-50 dark:bg-green-900/20 p-2.5 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-2'><span class='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i}</span><span class='text-base'>${feelings} සහගත ඤාණ${nana} ${sankhara} සිත</span></div>`;
          }).join('') +
          "</div>"
  },
  
  kamaVipaka8Full: {
    title: "b. කාම සෝභන විපාක සිත් 8 (A3)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const nana = (i % 2 === 1) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 0) ? 'සසංඛාරික' : 'අසංඛාරික';
            return `<div class='bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-2'><span class='bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i}</span><span class='text-base'>${feelings} සහගත ඤාණ${nana} ${sankhara} සිත</span></div>`;
          }).join('') +
          "</div>"
  },
  
  kamaKriya8Full: {
    title: "c. කාම සෝභන ක්‍රියා සිත් 8 (A3)",
    desc: "<div class='grid grid-cols-1 sm:grid-cols-2 gap-2'>" +
          [1,2,3,4,5,6,7,8].map(i => {
            const feelings = i <= 4 ? 'සෝමනස්ස' : 'උපේක්ෂා';
            const nana = (i % 2 === 1) ? 'සම්පයුත්ත' : 'විප්පයුත්ත';
            const sankhara = (i % 2 === 0) ? 'සසංඛාරික' : 'අසංඛාරික';
            return `<div class='bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg border border-purple-200 dark:border-purple-800 flex items-start gap-2'><span class='bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm font-bold px-2.5 py-0.5 rounded-full'>${i}</span><span class='text-base'>${feelings} සහගත ඤාණ${nana} ${sankhara} සිත</span></div>`;
          }).join('') +
          "</div>"
  }
};

// ============================================================
// 3. චිත්ත විභාගයට අදාළ මූලික දත්ත (cittaData)
// ============================================================

const cittaData = [
  {
    category: "සිත් 89 (මූලික විභාගය)",
    description: "බුදුරජාණන් වහන්සේ විසින් දේශනා කරන ලද සියලුම සිත් 89 ක් පහත පරිදි වර්ගීකරණය කළ හැක.",
    items: [
      { name: "කාමාවචර සිත්", role: "54" },
      { name: "රූපාවචර සිත්", role: "15" },
      { name: "අරූපාවචර සිත්", role: "12" },
      { name: "ලෝකෝත්තර සිත්", role: "8" }
    ]
  },
  {
    category: "A. කාමාවචර සිත් 54",
    description: "කාම ලෝකයට අයත් සිත් 54 කි. (අකුසල් 12, අහේතුක 18, කාම සෝභන 24)",
    items: [
      { name: "A1. අකුසල් සිත්", role: "12" },
      { name: "A2. අහේතුක සිත්", role: "18" },
      { name: "A3. කාම සෝභන සිත්", role: "24" }
    ]
  },
  {
    category: "A1. අකුසල් සිත් 12",
    description: "ලෝභ, දෝස, මෝහ යන අකුසල මූලයන් මත පදනම්ව උපදින සිත් 12 කි.",
    items: [
      { name: "a. ලෝභ මූලික සිත්", role: "8" },
      { name: "b. දෝස මූලික සිත්", role: "2" },
      { name: "c. මෝහ මූලික සිත්", role: "2" }
    ]
  },
  {
    category: "A2. අහේතුක සිත් 18",
    description: "හේතු රහිතව උපදින සිත් 18 කි.",
    items: [
      { name: "a. අකුසල විපාක සිත්", role: "7" },
      { name: "b. කුසල අහේතුක විපාක සිත්", role: "8" },
      { name: "c. අහේතුක ක්‍රියා සිත්", role: "3" }
    ]
  },
  {
    category: "A3. කාම සෝභන සිත් 24",
    description: "කාම සෝභන සිත් 24 කි.",
    items: [
      { name: "a. කුසල් සිත්", role: "8" },
      { name: "b. විපාක සිත්", role: "8" },
      { name: "c. ක්‍රියා සිත්", role: "8" }
    ]
  },
  {
    category: "B. රූපාවචර සිත් 15",
    description: "රූපාවචර ධ්‍යාන සිත් 15 කි.",
    items: [
      { name: "B1. කුසල් සිත්", role: "5" },
      { name: "B2. විපාක සිත්", role: "5" },
      { name: "B3. ක්‍රියා සිත්", role: "5" }
    ]
  },
  {
    category: "B1. රූපාවචර කුසල් සිත් 5",
    description: "රූපාවචර කුසල් සිත් 5 කි. (ප්‍රථම, දුතිය, තෘතීය, චතුර්ථ, පඤ්චම ධ්‍යාන)",
    items: [
      { name: "ප්‍රථම ධ්‍යානය", role: "විතක්ක, විචාර, පීති, සුඛ, ඒකග්ගතා" },
      { name: "දුතිය ධ්‍යානය", role: "විචාර, පීති, සුඛ, ඒකග්ගතා" },
      { name: "තෘතීය ධ්‍යානය", role: "පීති, සුඛ, ඒකග්ගතා" },
      { name: "චතුර්ථ ධ්‍යානය", role: "සුඛ, ඒකග්ගතා" },
      { name: "පඤ්චම ධ්‍යානය", role: "උපේක්ෂා, ඒකග්ගතා" }
    ]
  },
  {
    category: "B2. රූපාවචර විපාක සිත් 5",
    description: "රූපාවචර විපාක සිත් 5 කි. (ප්‍රථම, දුතිය, තෘතීය, චතුර්ථ, පඤ්චම ධ්‍යාන)",
    items: [
      { name: "ප්‍රථම ධ්‍යානය", role: "විතක්ක, විචාර, පීති, සුඛ, ඒකග්ගතා" },
      { name: "දුතිය ධ්‍යානය", role: "විචාර, පීති, සුඛ, ඒකග්ගතා" },
      { name: "තෘතීය ධ්‍යානය", role: "පීති, සුඛ, ඒකග්ගතා" },
      { name: "චතුර්ථ ධ්‍යානය", role: "සුඛ, ඒකග්ගතා" },
      { name: "පඤ්චම ධ්‍යානය", role: "උපේක්ෂා, ඒකග්ගතා" }
    ]
  },
  {
    category: "B3. රූපාවචර ක්‍රියා සිත් 5",
    description: "රූපාවචර ක්‍රියා සිත් 5 කි. (රහතන් වහන්සේට පමණක්)",
    items: [
      { name: "ප්‍රථම ධ්‍යානය", role: "විතක්ක, විචාර, පීති, සුඛ, ඒකග්ගතා" },
      { name: "දුතිය ධ්‍යානය", role: "විචාර, පීති, සුඛ, ඒකග්ගතා" },
      { name: "තෘතීය ධ්‍යානය", role: "පීති, සුඛ, ඒකග්ගතා" },
      { name: "චතුර්ථ ධ්‍යානය", role: "සුඛ, ඒකග්ගතා" },
      { name: "පඤ්චම ධ්‍යානය", role: "උපේක්ෂා, ඒකග්ගතා" }
    ]
  },
  {
    category: "C. අරූපාවචර සිත් 12",
    description: "අරූපාවචර ධ්‍යාන සිත් 12 කි.",
    items: [
      { name: "C1. කුසල් සිත්", role: "4" },
      { name: "C2. විපාක සිත්", role: "4" },
      { name: "C3. ක්‍රියා සිත්", role: "4" }
    ]
  },
  {
    category: "C1. අරූපාවචර කුසල් සිත් 4",
    description: "අරූපාවචර කුසල් සිත් 4 කි.",
    items: [
      { name: "ආකාසානඤ්චායතන කුසල් සිත", role: "1" },
      { name: "විඤ්ඤාණඤ්චායතන කුසල් සිත", role: "1" },
      { name: "ආකිඤ්චඤ්ඤායතන කුසල් සිත", role: "1" },
      { name: "නේවසඤ්ඤානාසඤ්ඤායතන කුසල් සිත", role: "1" }
    ]
  },
  {
    category: "C2. අරූපාවචර විපාක සිත් 4",
    description: "අරූපාවචර විපාක සිත් 4 කි.",
    items: [
      { name: "ආකාසානඤ්චායතන විපාක සිත", role: "1" },
      { name: "විඤ්ඤාණඤ්චායතන විපාක සිත", role: "1" },
      { name: "ආකිඤ්චඤ්ඤායතන විපාක සිත", role: "1" },
      { name: "නේවසඤ්ඤානාසඤ්ඤායතන විපාක සිත", role: "1" }
    ]
  },
  {
    category: "C3. අරූපාවචර ක්‍රියා සිත් 4",
    description: "අරූපාවචර ක්‍රියා සිත් 4 කි. (රහතන් වහන්සේට පමණක්)",
    items: [
      { name: "ආකාසානඤ්චායතන ක්‍රියා සිත", role: "1" },
      { name: "විඤ්ඤාණඤ්චායතන ක්‍රියා සිත", role: "1" },
      { name: "ආකිඤ්චඤ්ඤායතන ක්‍රියා සිත", role: "1" },
      { name: "නේවසඤ්ඤානාසඤ්ඤායතන ක්‍රියා සිත", role: "1" }
    ]
  },
  {
    category: "D. ලෝකෝත්තර සිත් 8/40",
    description: "ලෝකෝත්තර සිත් 8 කි. ධ්‍යාන 5 සමඟ ගණන් ගැනීමෙන් 40 ක් වේ.",
    items: [
      { name: "D1. කුසල් (මාර්ග) සිත්", role: "4 / 20" },
      { name: "D2. විපාක (ඵල) සිත්", role: "4 / 20" }
    ]
  },
  {
    category: "D1. ලෝකෝත්තර මාර්ග සිත් 4/20",
    description: "ලෝකෝත්තර මාර්ග සිත් 4 කි. ධ්‍යාන 5 සමඟ ගණන් ගැනීමෙන් 20 ක් වේ.",
    items: [
      { name: "සෝතාපත්ති මග්ග සිත්", role: "1 / 5" },
      { name: "සකදාගාමි මග්ග සිත්", role: "1 / 5" },
      { name: "අනාගාමි මග්ග සිත්", role: "1 / 5" },
      { name: "අරහත් මග්ග සිත්", role: "1 / 5" }
    ]
  },
  {
    category: "D2. ලෝකෝත්තර ඵල සිත් 4/20",
    description: "ලෝකෝත්තර ඵල සිත් 4 කි. ධ්‍යාන 5 සමඟ ගණන් ගැනීමෙන් 20 ක් වේ.",
    items: [
      { name: "සෝතාපත්ති ඵල සිත්", role: "1 / 5" },
      { name: "සකදාගාමි ඵල සිත්", role: "1 / 5" },
      { name: "අනාගාමි ඵල සිත්", role: "1 / 5" },
      { name: "අරහත් ඵල සිත්", role: "1 / 5" }
    ]
  },
  {
    category: "සංග්‍රහ ගාථා - සිත් 89 සාරාංශය",
    description: "සිත් 89 හි සමස්ත සාරාංශය ගාථා මගින්.",
    items: [
      { name: "අකුසල සිත්", role: "12" },
      { name: "කුසල සිත්", role: "21" },
      { name: "විපාක සිත්", role: "36" },
      { name: "ක්‍රියා සිත්", role: "20" },
      { name: "මුළු ගණන", role: "89" }
    ]
  },
  {
    category: "සංග්‍රහ ගාථා - සිත් 121 සාරාංශය",
    description: "සිත් 121 හි සමස්ත සාරාංශය.",
    items: [
      { name: "අකුසල සිත්", role: "12" },
      { name: "කුසල සිත්", role: "37" },
      { name: "විපාක සිත්", role: "52" },
      { name: "ක්‍රියා සිත්", role: "20" },
      { name: "මුළු ගණන", role: "121" }
    ]
  }
];

// ============================================================
// 4. සහායක ශ්‍රිත
// ============================================================

function stripHtml(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

// ============================================================
// 5. අපනයනය (Export)
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cittaDetailData,
    citta121Data,
    cittaData,
    stripHtml
  };
}
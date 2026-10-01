// ============================================================
// rupa-deta.js
// රූප - සවිස්තරාත්මක තොරතුරු
// අභිධර්ම රූප විභාගය - පාඩම් 1-12
// ============================================================

// ============================================================
// 1. රූප සමුද්දේශය - මූලික දත්ත
// ============================================================
var rupaDetaData = {
  
  // ============================================================
  // පාඩම 1: රූප සමුද්දේශය
  // ============================================================
  padama1: {
    title: "1. රූප සමුද්දේශය",
    subtitle: "රූපයේ අර්ථය සහ මූලික වර්ගීකරණය",
    icon: "fa-solid fa-circle-info",
    color: "saffron",
    content: `
      <div class="space-y-4">
        
        <!-- රූප අර්ථය -->
        <div class="bg-amber-50 dark:bg-slate-900 border-l-4 border-saffron-500 rounded-lg p-4">
          <h4 class="font-bold text-maroon-900 dark:text-saffron-200 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-quote-left text-saffron-600"></i> රූප යනු කුමක්ද?
          </h4>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
            ශීත උෂ්ණාදි විරුද්ධ ප්‍රත්‍යය ඇති කල්හි විකාරයට පැමිණෙන දේ රූප නම් වේ.
          </p>
          <div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3 text-xs italic text-amber-800 dark:text-amber-300">
            "රුප්පතිති හෙව රූපං විකාර පවත්තෙය සති - රූපරූපං තථා රූප පරියාපන්නෙතා පරං"
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">
            <strong>රූපරූප</strong> නම් නිෂ්පන්න රූප ය. <strong>අරූපරූප</strong> නම් අනිෂ්පන්න රූප යි.
          </p>
        </div>

        <!-- රූප දැක්වීමේ ආකාර 5 -->
        <div>
          <h4 class="font-bold text-maroon-900 dark:text-saffron-200 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list-ol text-saffron-600"></i> රූප දැක්වීමේ ආකාර 5
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="font-bold text-sm text-saffron-700 dark:text-saffron-300 mb-1">1. සමුද්දෙස</div>
              <p class="text-xs text-slate-600 dark:text-slate-400">සංක්ෂේපයෙන් දැක්වීම හෙවත් නාම මාත්‍ර වශයෙන් දැක්වීම</p>
            </div>
            <div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="font-bold text-sm text-saffron-700 dark:text-saffron-300 mb-1">2. විභාග</div>
              <p class="text-xs text-slate-600 dark:text-slate-400">සමුද්දිෂ්ට රූප බෙදා දැක්වීම</p>
            </div>
            <div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="font-bold text-sm text-saffron-700 dark:text-saffron-300 mb-1">3. සමුට්ඨාන</div>
              <p class="text-xs text-slate-600 dark:text-slate-400">රූප උපදවන ප්‍රත්‍යය-හේතු දැක්වීම</p>
            </div>
            <div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="font-bold text-sm text-saffron-700 dark:text-saffron-300 mb-1">4. කලාප</div>
              <p class="text-xs text-slate-600 dark:text-slate-400">එකට බැඳී පවත්නා රූප සමූහ දැක්වීම</p>
            </div>
            <div class="bg-white dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg p-3 sm:col-span-2">
              <div class="font-bold text-sm text-saffron-700 dark:text-saffron-300 mb-1">5. ප්‍රවෘත්ති ක්‍රම</div>
              <p class="text-xs text-slate-600 dark:text-slate-400">රූප පැවතෙන පිළිවෙල දැක්වීම</p>
            </div>
          </div>
        </div>

        <!-- රූප සංග්‍රහය -->
        <div class="bg-gradient-to-br from-amber-50 to-saffron-50 dark:from-slate-800 dark:to-slate-900 border border-amber-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-saffron-200 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-calculator text-saffron-600"></i> රූප සංග්‍රහය
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="text-2xl font-bold text-saffron-700 dark:text-saffron-300">4</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">මහා භූත රූප</div>
            </div>
            <div class="bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="text-2xl font-bold text-saffron-700 dark:text-saffron-300">24</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">උපාදාය රූප</div>
            </div>
            <div class="bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="text-2xl font-bold text-saffron-700 dark:text-saffron-300">28</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">රූප මුළුල්ල</div>
            </div>
            <div class="bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-lg p-3">
              <div class="text-2xl font-bold text-saffron-700 dark:text-saffron-300">11</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">සංග්‍රහ ආකාර</div>
            </div>
          </div>
        </div>

        <!-- රූප 28 වර්ගීකරණය -->
        <div>
          <h4 class="font-bold text-maroon-900 dark:text-saffron-200 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-shapes text-saffron-600"></i> රූප 28 වර්ගීකරණය
          </h4>
          <div class="space-y-2 text-sm">
            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-3">
              <strong class="text-red-800 dark:text-red-300">1. මහා භූත රූප 4:</strong>
              <span class="text-slate-700 dark:text-slate-300">පඨවි, ආපෝ, තේජෝ, වායෝ ධාතු</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-3">
              <strong class="text-blue-800 dark:text-blue-300">2. ප්‍රසාද රූප 5:</strong>
              <span class="text-slate-700 dark:text-slate-300">චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-3">
              <strong class="text-green-800 dark:text-green-300">3. ගෝචර රූප 4:</strong>
              <span class="text-slate-700 dark:text-slate-300">රූප, ශබ්ද, ගන්ධ, රස (ඵොට්ඨබ්බ යනු මහා භූත 3 යි)</span>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-lg p-3">
              <strong class="text-purple-800 dark:text-purple-300">4. භාව රූප 2:</strong>
              <span class="text-slate-700 dark:text-slate-300">ස්ත්‍රී භාව, පුරුෂ භාව</span>
            </div>
            <div class="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 rounded-lg p-3">
              <strong class="text-pink-800 dark:text-pink-300">5. හදය රූප 1:</strong>
              <span class="text-slate-700 dark:text-slate-300">හදය වස්තුව</span>
            </div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-lg p-3">
              <strong class="text-indigo-800 dark:text-indigo-300">6. ජීවිත රූප 1:</strong>
              <span class="text-slate-700 dark:text-slate-300">ජීවිතින්ද්‍රිය</span>
            </div>
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg p-3">
              <strong class="text-yellow-800 dark:text-yellow-300">7. ආහාර රූප 1:</strong>
              <span class="text-slate-700 dark:text-slate-300">කබලිකාර ආහාරය</span>
            </div>
            <div class="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 rounded-lg p-3">
              <strong class="text-cyan-800 dark:text-cyan-300">8. පරිච්ඡේද රූප 1:</strong>
              <span class="text-slate-700 dark:text-slate-300">ආකාශ ධාතුව</span>
            </div>
            <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-3">
              <strong class="text-teal-800 dark:text-teal-300">9. විඤ්ඤත්ති රූප 2:</strong>
              <span class="text-slate-700 dark:text-slate-300">කාය විඤ්ඤත්ති, වචී විඤ්ඤත්ති</span>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-lg p-3">
              <strong class="text-orange-800 dark:text-orange-300">10. විකාර රූප 3:</strong>
              <span class="text-slate-700 dark:text-slate-300">ලහුතා, මුදුතා, කම්මඤ්ඤතා</span>
            </div>
            <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 rounded-lg p-3">
              <strong class="text-rose-800 dark:text-rose-300">11. ලක්ෂණ රූප 4:</strong>
              <span class="text-slate-700 dark:text-slate-300">උපචය, සන්තති, ජරතා, අනිච්චතා</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 2: රූප සමුද්දේශය (සතර මහා භූත)
  // ============================================================
  padama2: {
    title: "2. රූප සමුද්දේශය (සතර මහා භූත)",
    subtitle: "පඨවි, ආපෝ, තේජෝ, වායෝ ධාතු සවිස්තරාත්මකව",
    icon: "fa-solid fa-cube",
    color: "amber",
    content: `
      <div class="space-y-4">
        
        <!-- සතර මහා භූත හැඳින්වීම -->
        <div class="bg-gradient-to-br from-amber-50 to-saffron-50 dark:from-slate-800 dark:to-slate-900 border border-amber-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-saffron-200 mb-2">
            <i class="fa-solid fa-star text-saffron-600"></i> සතර මහා භූත රූප
          </h4>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            මහා භූත රූප සතරක් වන අතර, ඒවා සියලු රූපයන්ට මූලික ආධාරය වේ. මහා භූත යන නාමය පහත කරුණු 5 නිසා ලැබේ:
          </p>
          <ul class="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <li>• <strong>මහන්ත පාතුභාව</strong> - මහත් වැ පහළ වන බැවින්</li>
            <li>• <strong>මහාභූත සාමානය</strong> - මහා භූත බඳු වූ බැවින්</li>
            <li>• <strong>මහාපරිහාර</strong> - මහත් ප්‍රත්‍යයෙන් පරිහරණය කරන බැවින්</li>
            <li>• <strong>මහා විකාර</strong> - මහත් විකාර ඇති බැවින්</li>
            <li>• <strong>මහන්ත භූත</strong> - මහත් වූ ව්‍යායාමයෙන් පරිග්‍රහණය කරන බැවින්</li>
          </ul>
        </div>

        <!-- පඨවි ධාතුව -->
        <div class="bg-white dark:bg-slate-800 border-2 border-orange-300 dark:border-orange-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-mountain"></i> 1. පඨවි ධාතුව
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-orange-700 dark:text-orange-300">පඨවි නම්:</strong> කවර දෙයක හෝ පවත්නා කැකැලු බව හෙවත් තද ගතියයි.
            </p>
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-orange-700 dark:text-orange-300">ධාතු නම්:</strong> සත්ත්ව ජීව නොවූ මූල ස්වභාවයයි.
            </p>
            
            <div class="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-orange-800 dark:text-orange-300 mb-2">පඨවි ශබ්දයෙන් අර්ථ 4ක්:</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-orange-700 dark:text-orange-400">සම්භාර පඨවි:</strong> ගස් වැල් ආදියට ආධාර වූ මහපොළොව
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-orange-700 dark:text-orange-400">ආරම්මණ පඨවි:</strong> පඨවි කසිණ නිමිත්ත
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-orange-700 dark:text-orange-400">සම්මති පඨවි:</strong> පඨවි දේවතාව
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-orange-700 dark:text-orange-400">ලක්ඛණ පඨවි:</strong> තද ගතිය - පඨවි ධාතුව
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-orange-700 dark:text-orange-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">කර්කශ බව (තද ගතිය)</div>
              </div>
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-orange-700 dark:text-orange-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">සහජාත රූප පිහිටවීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ආපෝ ධාතුව -->
        <div class="bg-white dark:bg-slate-800 border-2 border-blue-300 dark:border-blue-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-droplet"></i> 2. ආපෝ ධාතුව
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-blue-700 dark:text-blue-300">ආපෝ නම්:</strong> කවර දෙයක හෝ පවත්නා දුව ස්වභාවය හෙවත් වැගිරෙන ගතියයි.
            </p>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-blue-800 dark:text-blue-300 mb-2">ආපෝ ශබ්දයෙන් අර්ථ 4ක්:</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-blue-700 dark:text-blue-400">සම්භාර ආප:</strong> ගංගා සමුද්‍රාදියේ ජලය
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-blue-700 dark:text-blue-400">ආරම්මණ ආප:</strong> ආපෝ කසිණ නිමිත්ත
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-blue-700 dark:text-blue-400">සම්මති ආප:</strong> ආපෝ දේවතාව
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-blue-700 dark:text-blue-400">ලක්ඛණ ආප:</strong> වැගිරෙන ගතිය - ආපෝ ධාතුව
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-blue-700 dark:text-blue-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ද්‍රව බව (වැගිරෙන ගතිය)</div>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-blue-700 dark:text-blue-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප එකට බැඳ තැබීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- තේජෝ ධාතුව -->
        <div class="bg-white dark:bg-slate-800 border-2 border-red-300 dark:border-red-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-fire"></i> 3. තේජෝ ධාතුව
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-red-700 dark:text-red-300">තේජෝ නම්:</strong> කවර දෙයක හෝ පවත්නා උණුසුම් ස්වභාවය හෙවත් දිලීසෙන ස්වභාවයයි.
            </p>
            
            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-red-800 dark:text-red-300 mb-2">තේජෝ ශබ්දයෙන් අර්ථ 4ක්:</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-red-700 dark:text-red-400">සම්භාර තේජෝ:</strong> ගිනි ජාලාව
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-red-700 dark:text-red-400">ආරම්මණ තේජෝ:</strong> තේජෝ කසිණ නිමිත්ත
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-red-700 dark:text-red-400">සම්මති තේජෝ:</strong> තේජෝ දේවතාව
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-red-700 dark:text-red-400">ලක්ඛණ තේජෝ:</strong> උණුසුම් ගතිය - තේජෝ ධාතුව
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-red-700 dark:text-red-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">උෂ්ණ බව (උණුසුම් ගතිය)</div>
              </div>
              <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-red-700 dark:text-red-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප පරිපාකය (පැසවීම)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- වායෝ ධාතුව -->
        <div class="bg-white dark:bg-slate-800 border-2 border-green-300 dark:border-green-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-wind"></i> 4. වායෝ ධාතුව
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-green-700 dark:text-green-300">වායෝ නම්:</strong> කවර දෙයක හෝ පවත්නා සැලෙන ස්වභාවය හෙවත් විස්ථම්භන ගතියයි.
            </p>
            
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-green-800 dark:text-green-300 mb-2">වායෝ ශබ්දයෙන් අර්ථ 4ක්:</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-green-700 dark:text-green-400">සම්භාර වායෝ:</strong> සුළං
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-green-700 dark:text-green-400">ආරම්මණ වායෝ:</strong> වායෝ කසිණ නිමිත්ත
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-green-700 dark:text-green-400">සම්මති වායෝ:</strong> වායෝ දේවතාව
                </div>
                <div class="bg-white dark:bg-slate-900 rounded p-2">
                  <strong class="text-green-700 dark:text-green-400">ලක්ඛණ වායෝ:</strong> සැලෙන ගතිය - වායෝ ධාතුව
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-green-700 dark:text-green-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">විධම්බන බව (සැලෙන ගතිය)</div>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-green-700 dark:text-green-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප තල්ලු කිරීම</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 3: රූප සමුද්දේශය (සුවිසි උපාදාය රූප - ප්‍රසාද රූප)
  // ============================================================
  padama3: {
    title: "3. රූප සමුද්දේශය (ප්‍රසාද රූප)",
    subtitle: "චක්ඛු, සෝත, ඝාන, ජිව්හා, කාය ප්‍රසාද රූප",
    icon: "fa-solid fa-eye",
    color: "blue",
    content: `
      <div class="space-y-4">
        
        <!-- ප්‍රසාද රූප හැඳින්වීම -->
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 border border-blue-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-blue-200 mb-2">
            <i class="fa-solid fa-star text-blue-600"></i> ප්‍රසාද රූප 5
          </h4>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            කර්මයෙන් ජනිත හුදු භූත රූපයන්ගේ ප්‍රසාද ගතිය හෙවත් මෘදු බව ප්‍රසාද රූප නම් වේ.
          </p>
        </div>

        <!-- ප්‍රසාද ශබ්දයේ අර්ථ -->
        <div class="bg-amber-50 dark:bg-slate-900 border-l-4 border-amber-500 rounded-lg p-4">
          <h5 class="font-bold text-sm text-amber-800 dark:text-amber-300 mb-2">ප්‍රසාද ශබ්දයේ අර්ථ දෙකක්:</h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="bg-white dark:bg-slate-800 rounded p-2">
              <strong class="text-amber-700 dark:text-amber-400">ප්‍රසන්න ලක්ෂණය:</strong> පැහැදිලි බව
            </div>
            <div class="bg-white dark:bg-slate-800 rounded p-2">
              <strong class="text-amber-700 dark:text-amber-400">මෘදු ලක්ෂණය:</strong> මෘදු මොළොක් බව
            </div>
          </div>
        </div>

        <!-- චක්ඛු ප්‍රසාදය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-indigo-300 dark:border-indigo-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-eye"></i> 1. චක්ඛු ප්‍රසාදය
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-indigo-700 dark:text-indigo-300">සම්භාර චක්ඛු:</strong> ඇස්ලොහි රිහිටියට යට ඇස්ලො ඇටින් ද මතු බොම ඇටින් ද දොරෙන්නේ අක්ෂිතුටයන් ද ඇතුළු මහා භූතයන් ද පිටත අක්ෂි රූපයන් ද පරිච්ඡින්න වූ මංශ පිණ්ඩයයි.
            </p>
            
            <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-indigo-800 dark:text-indigo-300 mb-2">චක්ඛු ප්‍රසාදයේ විශේෂ ලක්ෂණ:</h5>
              <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <li>• ඇතැම් තැනක ලක්ඛණ චක්ඛු යන නමින් හඳුන්වයි</li>
                <li>• සම්භාර සුසාලියෙන් (සතර මහා භූතයන්ගෙන්) බැලූ කල්හි සතර මහා භූත වර්ණ ගන්ධ රස ඕජා සමඟ සඤ්ඤාණ ජීවිත භාව කාය ප්‍රසාද චක්ඛු ප්‍රසාද යන තුදුස් සම්භාරයෙක් ඇත්තේ ය</li>
              </ul>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-indigo-700 dark:text-indigo-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප හැපීමට සුදුසු භූත ප්‍රසාදය</div>
              </div>
              <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-indigo-700 dark:text-indigo-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප දැකීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- සෝත ප්‍රසාදය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-teal-300 dark:border-teal-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-ear-listen"></i> 2. සෝත ප්‍රසාදය
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-teal-700 dark:text-teal-300">සම්භාර සෝත:</strong> කන් වළලු ඇතුළෙහි ඇඟිලි මුදුවක් බඳු තුනී තඹවන් රෝමයෙකි. එය ඇසුරු කොට පඨවි ආදි ධාතුන් විසින් උපදවන ලද සෘතු ආදීන් විසින් උපස්තම්භන කරන ලද ආයුෂයෙන් පාලනය කරනු ලබන වර්ණාදීන් පරිවෘත ශ්‍රෝත්‍ර ප්‍රසාද රූපය පිහිටියේ ය.
            </p>
            
            <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-teal-800 dark:text-teal-300 mb-2">විශේෂ ලක්ෂණ:</h5>
              <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <li>• ශබ්ද ග්‍රහණයට සුදුසු භූත ප්‍රසාදය</li>
                <li>• ශබ්දය දැනගැනීමට උපකාරී වේ</li>
              </ul>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-teal-700 dark:text-teal-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ශබ්ද හැපීමට සුදුසු භූත ප්‍රසාදය</div>
              </div>
              <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-teal-700 dark:text-teal-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ශබ්ද ඇසීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ඝාන ප්‍රසාදය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-pink-300 dark:border-pink-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-nose"></i> 3. ඝාන ප්‍රසාදය
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-pink-700 dark:text-pink-300">සම්භාර ඝාන:</strong> නාසිකා විලය ඇතුළෙහි එක්කුරෙයක් සටහන් ඇති තැනෙකි. එය ඇසුරු කොට පඨවි ආදීන් විසින් උපදවන ලද ආයුෂයෙන් පාලිත වර්ණාදීන් පරිවෘත ඝාන ප්‍රසාද රූපය පිහිටියේ ය.
            </p>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-pink-700 dark:text-pink-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ගන්ධ හැපීමට සුදුසු භූත ප්‍රසාදය</div>
              </div>
              <div class="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-pink-700 dark:text-pink-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ගන්ධ දැනීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ජිව්හා ප්‍රසාදය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-orange-300 dark:border-orange-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-tongue"></i> 4. ජිව්හා ප්‍රසාදය
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-orange-700 dark:text-orange-300">සම්භාර ජිව්හා:</strong> දිව මැදෙහි උපුල් පෙති අගක් බඳු සටහනෙකි. එය ඇසුරු කොට පඨවි ආදීන් විසින් උපදවන ලද ආයුෂයෙන් පාලිත වර්ණාදීන් පරිවෘත ජිව්හා ප්‍රසාද රූපය පිහිටියේ ය.
            </p>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-orange-700 dark:text-orange-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රස හැපීමට සුදුසු භූත ප්‍රසාදය</div>
              </div>
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-orange-700 dark:text-orange-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රස විඳීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- කාය ප්‍රසාදය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-green-300 dark:border-green-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-hand"></i> 5. කාය ප්‍රසාදය
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-green-700 dark:text-green-300">සම්භාර කාය:</strong> ශරීරය පුරා පැතිරී පවත්නා අවිනිබ්භෝග රූප අටෙහි ප්‍රතිබද්ධ වැ තුබූ විසිරී සියලු සම්භාර කායෙහි පැතිරී ඇත්තේ ය. එහි පඨවි ආදීන් විසින් උපදවන ලද ආයුෂයෙන් පාලිත වර්ණාදීන් පරිවෘත ජීවිත ප්‍රසාද රූපය පිහිටියේ ය.
            </p>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-green-700 dark:text-green-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ස්පර්ශ හැපීමට සුදුසු භූත ප්‍රසාදය</div>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-green-700 dark:text-green-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ස්පර්ශ දැනීම</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 4: රූප සමුද්දේශය (විෂය රූප 4)
  // ============================================================
  padama4: {
    title: "4. රූප සමුද්දේශය (විෂය රූප)",
    subtitle: "රූප, ශබ්ද, ගන්ධ, රස යන විෂය රූප 4",
    icon: "fa-solid fa-palette",
    color: "purple",
    content: `
      <div class="space-y-4">
        
        <!-- විෂය රූප හැඳින්වීම -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 border border-purple-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-purple-200 mb-2">
            <i class="fa-solid fa-star text-purple-600"></i> විෂය රූප 4
          </h4>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            චක්ඛුරාදීන්ට විෂය වන්නේ - ගෝචර වන්නේ විෂය රූප ය. ගෝචර රූප යනු ද මොවුන්ට නමෙකි.
          </p>
        </div>

        <!-- රූප (වර්ණ) -->
        <div class="bg-white dark:bg-slate-800 border-2 border-red-300 dark:border-red-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-palette"></i> 1. රූප (වර්ණ)
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-red-700 dark:text-red-300">රූප නම්:</strong> සතර මහා භූතයන් නිසා පවත්නා චක්ෂුර්විඥානයට ගෝචර වන හෙවත් ඇසින් දැකිය යුතු වර්ණය හෝ පැහැයයි.
            </p>

            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-red-800 dark:text-red-300 mb-2">වර්ණ වර්ග:</h5>
              <div class="flex flex-wrap gap-1 text-xs">
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">නීල (නිල්)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">පීත (කහ)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">ලෝහිත (රතු)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">ඕදාත (සුදු)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">කාළ (කළු)</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-red-700 dark:text-red-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">චක්ඛුපටිහනනය (ඇසේ වැදගැන්ම)</div>
              </div>
              <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-red-700 dark:text-red-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ඇසින් දැකීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ශබ්ද -->
        <div class="bg-white dark:bg-slate-800 border-2 border-blue-300 dark:border-blue-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-volume-high"></i> 2. ශබ්ද
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-blue-700 dark:text-blue-300">ශබ්ද නම්:</strong> සතර මහා භූතයන් නිසා ශ්‍රෝත්‍ර විඥානයට ගෝචර වන හෙවත් කනින් ඇසිය යුතු හඬයි.
            </p>

            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-blue-800 dark:text-blue-300 mb-2">ශබ්ද වර්ග 3:</h5>
              <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <li>• <strong>සංඝොසජ:</strong> කවිප්පු, දවුල් වැනි හස්ත තල ආදියෙන් නැගෙන ශබ්ද</li>
                <li>• <strong>විභාගජ:</strong> උණ බට ආදිය පැළීමෙන් නැගෙන ශබ්ද</li>
                <li>• <strong>ශබ්දජ:</strong> පූර්ව ශබ්දය නිසා උපදින උත්තර ශබ්ද</li>
              </ul>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-blue-800 dark:text-blue-300 mb-2">ශබ්ද ආත්මක වර්ග 2:</h5>
              <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <li>• <strong>ධිවනාත්මක:</strong> අහස් හිගුරුම් ආදිය</li>
                <li>• <strong>වර්ණාත්මක:</strong> භාෂා ශබ්ද (කථා කිරීම)</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ගන්ධ -->
        <div class="bg-white dark:bg-slate-800 border-2 border-green-300 dark:border-green-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-leaf"></i> 3. ගන්ධ
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-green-700 dark:text-green-300">ගන්ධ නම්:</strong> සතර මහා භූතයන් නිසා පවත්නා ඝාන විඥානයට ගෝචර වන හෙවත් නාසයෙන් ආඝ්‍රාණය කළ යුතු ගඳ සුවඳයි.
            </p>

            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-green-800 dark:text-green-300 mb-2">ගන්ධ වර්ග:</h5>
              <div class="grid grid-cols-2 gap-1 text-xs">
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">මූල ගන්ධ</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">සාර ගන්ධ</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">තච ගන්ධ</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">පත්ත ගන්ධ</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">පුප්ඵ ගන්ධ</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">එල ගන්ධ</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">සුගන්ධ (සුවඳ)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">දුග්ගන්ධ (දුගඳ)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- රස -->
        <div class="bg-white dark:bg-slate-800 border-2 border-orange-300 dark:border-orange-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-utensils"></i> 4. රස
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong class="text-orange-700 dark:text-orange-300">රස නම්:</strong> සතර මහා භූතයන් නිසා පවත්නා ජිව්හා විඥානයෙන් ආස්වාදනය කළ යුතු හෙවත් දිවින් විඳිය යුතු මධුරාදියයි.
            </p>

            <div class="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-orange-800 dark:text-orange-300 mb-2">රස වර්ග 6:</h5>
              <div class="flex flex-wrap gap-1 text-xs">
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">මධුර (මිහිරි)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">අම්ල (ඇඹුල්)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">ලවණ (ලුණු)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">කටුක (කහට)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">කසාය (හොදි)</span>
                <span class="bg-white dark:bg-slate-900 px-2 py-1 rounded">තික්ත (තිත්ත)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 5: භාව, හදය, ජීවිත, ආහාර රූප
  // ============================================================
  padama5: {
    title: "5. භාව, හදය, ජීවිත, ආහාර රූප",
    subtitle: "භාව රූප 2, හදය රූප 1, ජීවිත රූප 1, ආහාර රූප 1",
    icon: "fa-solid fa-heart",
    color: "rose",
    content: `
      <div class="space-y-4">
        
        <!-- භාව රූප -->
        <div class="bg-white dark:bg-slate-800 border-2 border-pink-300 dark:border-pink-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-venus-mars"></i> භාව රූප 2
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              මෝ ගැහැණිය මෝ පිරිමිය යන ශබ්ද බුද්ධි යම් රූපයක් කරණ කොට ගෙනැ වේ නම් ඒ රූප භාව රූප ය යි කියනු ලැබේ.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 rounded-lg p-3">
                <h5 class="font-bold text-xs text-pink-800 dark:text-pink-300 mb-2">ස්ත්‍රී භාව රූපය</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  අවිසදාකාරයෙන් පිහිටි ස්ත්‍රීකෘත්‍ය ප්‍රකෘතිය යම් ධර්මයක අනුභාවයෙන් ඒ එසේ පිහිටියේ ද ඒ ස්ත්‍රී භාව රූපය ය.
                </p>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-3">
                <h5 class="font-bold text-xs text-blue-800 dark:text-blue-300 mb-2">පුරුෂ භාව රූපය</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  විසදාකාරයෙන් පිහිටි පුරුෂකෘත්‍ය ප්‍රකෘතිය යම් ධර්මයක අනුභාවයෙන් ඒ එසේ පිහිටියේ ද ඒ පුරුෂ භාව රූපය ය.
                </p>
              </div>
            </div>

            <div class="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-3 text-xs">
              <strong class="text-pink-800 dark:text-pink-300">විශේෂ කරුණු:</strong>
              <ul class="mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                <li>• මේ භාව රූප කර්මජ ය</li>
                <li>• ප්‍රතිසන්ධියෙහි ම පිහිටන්නේ ය</li>
                <li>• උභතොබ්‍යඤ්ජනකයන්ට භාව රූප දෙකම පිහිටන සේ පෙනුණත් ඇත්තේ ප්‍රධාන වශයෙන් එකක් ම ය</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- හදය රූපය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-red-300 dark:border-red-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-heart"></i> හදය රූපය 1
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              සත්ත්වයේ යම් රූපයක් කරණ කොට ගෙනැ අර්ථ හෝ අනර්ථ හදත් ද පුරත් ද එය හදය යි කියනු ලැබේ. චිත්ත චෛතසික එහි වසන බැවින් එයට වත්ථු ය යි ද කියනු ලැබේ.
            </p>

            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-red-800 dark:text-red-300 mb-2">විශේෂ කරුණු:</h5>
              <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <li>• මනෝධාතු මනෝවිඥානධාතූන්ට නිශ්‍රය වූ ස්ථානය යි</li>
                <li>• හදය කොෂාන්තරයෙහි අඩ පතක් පමණ සෙල ඇසුරු කොට පවත්නේ ය යි ආචාර්යවරයෝ දැක්වූහ</li>
                <li>• මනෝධාතු මනෝවිඥානධාතූන්ට නිශ්‍රයස්ථානය හදය - පපුව නොවැ මොළය යි ඇතැම්හු කියති</li>
                <li>• එසේ හදය (පපුව) ම බව අටුවාහි ස්ථීර සේ දක්වත්</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ජීවිත රූපය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-green-300 dark:border-green-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-leaf"></i> ජීවිත රූපය 1
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              යම් රූපයක් කරණ කොට ගෙනැ සහජාත ධර්ම ජීවත් වේ ද එය ජීවිත රූපය යි කියනු ලැබේ. එම එහි ලා අධිපති භාවය කරන හෙයින් ඉන්ද්‍රිය වේ.
            </p>

            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-green-800 dark:text-green-300 mb-2">ලක්ෂණ:</h5>
              <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <li>• සහජාත රූප පාලනය කිරීම</li>
                <li>• කර්මජ රූපයෙකි</li>
                <li>• බීජයෙන් නිපන් උපුල් ආදිය බීජය නැති වැ ගිය කල්හි දු උදකානුපාලිත වැ බොහෝ කල් පවතී ද එමෙන් කර්මයෙන් නිපන් රූප කර්මය නැති වත් ජීවිතින්ද්‍රියානුපාලිත වැ වර්ෂ සිය දහස් ගණන් සන්තති වශයෙන් පවතී</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ආහාර රූපය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-bowl-food"></i> ආහාර රූපය 1
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              කබලිකාරාහාර, ඵස්සාහාර, මනොසඤ්චෙතනාහාර, විඥානාහාර යි ආහාර වර්ග 4කි. එයින් කබලිකාරාහාරය ආහාර රූප ය. සෙසු තුන නාම ධර්මයෝ ය.
            </p>

            <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-lg p-3">
              <h5 class="font-bold text-xs text-amber-800 dark:text-amber-300 mb-2">විශේෂ කරුණු:</h5>
              <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <li>• ඕජාව ම ප්‍රධාන වශයෙන් ආහාර රූප නම් වේ</li>
                <li>• වස්තු පරිශ්‍රය දුරු කරන්නේ ය</li>
                <li>• ඕජාව රූප පාලනය කරන්නේ ය</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 6: පරිච්ඡේද, විඤ්ඤත්ති, විකාර, ලක්ෂණ රූප
  // ============================================================
  padama6: {
    title: "6. පරිච්ඡේද, විඤ්ඤත්ති, විකාර, ලක්ෂණ රූප",
    subtitle: "අනිෂ්පන්න රූප දශය - රූප දශය",
    icon: "fa-solid fa-layer-group",
    color: "cyan",
    content: `
      <div class="space-y-4">
        
        <!-- පරිච්ඡේද රූපය -->
        <div class="bg-white dark:bg-slate-800 border-2 border-blue-300 dark:border-blue-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-expand"></i> පරිච්ඡේද රූපය 1
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              පරිච්ඡේද රූප නම් ආකාශ ධාතු ය. යම් රූපයක් කරණ කොට ගෙනැ රූප කලාප හෝ ද්‍රව්‍ය සම්භාර හෝ වෙන් වෙන් වැ ප්‍රකාශ වේ ද ඒ රූපය ආකාශ ය.
            </p>

            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-blue-700 dark:text-blue-400 font-bold">ලක්ෂණය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප පරිච්ඡේදය</div>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-blue-700 dark:text-blue-400 font-bold">කෘත්‍යය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">කලාප සීමා කිරීම</div>
              </div>
            </div>
          </div>
        </div>

        <!-- විඤ්ඤත්ති රූප -->
        <div class="bg-white dark:bg-slate-800 border-2 border-purple-300 dark:border-purple-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-comment"></i> විඤ්ඤත්ති රූප 2
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              යම් රූපයකින් සත්ත්වයෝ තම අදහස් මෙරමා හට දක්වත් ද තුමූ හෝ මෙරමාගේ අදහස් දැනගනිත් ද එය විඤ්ඤත්ති රූප ය යි.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-lg p-3">
                <h5 class="font-bold text-xs text-purple-800 dark:text-purple-300 mb-1">කාය විඤ්ඤත්තිය</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  ශරීර ඉරියව් හා අභිනය මගින් අදහස් ප්‍රකාශ කිරීම
                </p>
              </div>
              <div class="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 rounded-lg p-3">
                <h5 class="font-bold text-xs text-violet-800 dark:text-violet-300 mb-1">වචී විඤ්ඤත්තිය</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  වචන කථා කිරීමෙන් අදහස් ප්‍රකාශ කිරීම
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- විකාර රූප -->
        <div class="bg-white dark:bg-slate-800 border-2 border-emerald-300 dark:border-emerald-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-person-running"></i> විකාර රූප 3 (විඤ්ඤත්ති දෙක සමඟ 5)
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              විශේෂ වූ කාර්යය - හෙවත් ආකාරය විකාර නම් වේ. ඒ වනාහි රූප පිළිබඳ වූ ලහුතා මුදුතා කම්මඤ්ඤතා යි ත්‍රිවිධ වේ.
            </p>

            <div class="space-y-2">
              <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-lg p-2">
                <strong class="text-xs text-emerald-800 dark:text-emerald-300">රූපස්ස ලහුතා:</strong>
                <span class="text-xs text-slate-700 dark:text-slate-300"> රූපයන්ගේ සැහැල්ලු බව</span>
              </div>
              <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-2">
                <strong class="text-xs text-teal-800 dark:text-teal-300">රූපස්ස මුදුතා:</strong>
                <span class="text-xs text-slate-700 dark:text-slate-300"> රූපයන්ගේ මෘදු බව</span>
              </div>
              <div class="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 rounded-lg p-2">
                <strong class="text-xs text-cyan-800 dark:text-cyan-300">රූපස්ස කම්මඤ්ඤතා:</strong>
                <span class="text-xs text-slate-700 dark:text-slate-300"> රූපයන්ගේ කර්මණ්‍ය බව</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ලක්ෂණ රූප -->
        <div class="bg-white dark:bg-slate-800 border-2 border-rose-300 dark:border-rose-800 rounded-xl overflow-hidden">
          <div class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-3">
            <h4 class="font-bold text-base flex items-center gap-2">
              <i class="fa-solid fa-clock"></i> ලක්ෂණ රූප 4
            </h4>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              උත්පාදාදි ලක්ෂණයෙන් යුක්ත රූප ලක්ෂණ රූප යි. ඒ වනාහි උපචය සන්තති ජරතා අනිච්චතා යි චතුර්විධ වේ.
            </p>

            <div class="grid grid-cols-2 gap-2">
              <div class="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-rose-700 dark:text-rose-400 font-bold">උපචය</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">ප්‍රථම උපදින රූප</div>
              </div>
              <div class="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-pink-700 dark:text-pink-400 font-bold">සන්තති</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප පරම්පරාව පැවතීම</div>
              </div>
              <div class="bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-fuchsia-700 dark:text-fuchsia-400 font-bold">ජරතා</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප දිරාපත්වීම</div>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2 text-center">
                <div class="text-[10px] text-purple-700 dark:text-purple-400 font-bold">අනිච්චතා</div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mt-1">රූප විනාශය</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 7: රූප විභාගය
  // ============================================================
  padama7: {
    title: "7. රූප විභාගය",
    subtitle: "රූප එකවිධ සහ ද්විවිධ වර්ගීකරණය",
    icon: "fa-solid fa-sitemap",
    color: "indigo",
    content: `
      <div class="space-y-4">
        
        <!-- එකවිධ රූප 8 -->
        <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-indigo-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-indigo-200 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-equals text-indigo-600"></i> එකවිධ රූප 8
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">සියලු රූප පහත අර්ථ 8න් එකවිධ වේ:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">1. අහේතුක:</strong> හේතු රහිත බව
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">2. සප්පච්චය:</strong> ප්‍රත්‍යය සහිත බව
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">3. සාසව:</strong> ආශ්‍රව සහිත බව
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">4. සංඛත:</strong> ප්‍රත්‍යයන් නිපදවන ලද
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">5. ලෝකිය:</strong> ලෝකයට අයත්
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">6. කාමාවචර:</strong> කාමයෙහි හැසිරෙන
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">7. අනාරම්මණ:</strong> අරමුණු නොගන්නා
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-indigo-200 dark:border-slate-700">
              <strong class="text-indigo-700 dark:text-indigo-300">8. අප්පහාතබ්බ:</strong> ප්‍රහාණය නොකළ යුතු
            </div>
          </div>
        </div>

        <!-- ද්විවිධ රූප 10 -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 border border-purple-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-purple-200 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list text-purple-600"></i> ද්විවිධ රූප 10
          </h4>
          <div class="space-y-2 text-xs">
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">1. අජ්ඣත්තික / බාහිර:</strong>
              <span class="text-slate-700 dark:text-slate-300"> අජ්ඣත්තික රූප 5 (ප්‍රසාද) - සෙසු සියල්ල බාහිර</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">2. වත්ථු / අවත්ථු:</strong>
              <span class="text-slate-700 dark:text-slate-300"> වත්ථු 6 (ප්‍රසාද 5 + හදය) - සෙසු 22 අවත්ථු</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">3. ද්වාර / අද්වාර:</strong>
              <span class="text-slate-700 dark:text-slate-300"> ද්වාර 7 (ප්‍රසාද 5 + විඤ්ඤත්ති 2) - සෙසු 21 අද්වාර</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">4. ඉන්ද්‍රිය / අනින්ද්‍රිය:</strong>
              <span class="text-slate-700 dark:text-slate-300"> ඉන්ද්‍රිය 8 (ප්‍රසාද 5 + භාව 2 + ජීවිත) - සෙසු 20 අනින්ද්‍රිය</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">5. ඔළාරික / සුඛුම:</strong>
              <span class="text-slate-700 dark:text-slate-300"> ඔළාරික 12, සුඛුම 16</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">6. සන්තිකේ / දූරේ:</strong>
              <span class="text-slate-700 dark:text-slate-300"> සන්තිකේ 12, දූරේ 16</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">7. සප්පටිඝ / අප්පටිඝ:</strong>
              <span class="text-slate-700 dark:text-slate-300"> සප්පටිඝ 12, අප්පටිඝ 16</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">8. උපාදින්න / අනුපාදින්න:</strong>
              <span class="text-slate-700 dark:text-slate-300"> උපාදින්න - කර්මජ රූප, අනුපාදින්න - සෙසු</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">9. සනිදස්සන / අනිදස්සන:</strong>
              <span class="text-slate-700 dark:text-slate-300"> සනිදස්සන - රූපායතනය, අනිදස්සන - සෙසු 27</span>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 border border-purple-200 dark:border-slate-700">
              <strong class="text-purple-700 dark:text-purple-300">10. ගෝචරග්ගාහික / අගෝචරග්ගාහික:</strong>
              <span class="text-slate-700 dark:text-slate-300"> ගෝචරග්ගාහික 5 (ප්‍රසාද), අගෝචරග්ගාහික 23</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 8: රූප සමුට්ඨාන
  // ============================================================
  padama8: {
    title: "8. රූප සමුට්ඨාන",
    subtitle: "කර්මජ, චිත්තජ, උතුජ, ආහාරජ රූප උපදවන ආකාරය",
    icon: "fa-solid fa-code-branch",
    color: "amber",
    content: `
      <div class="space-y-4">
        
        <!-- සමුට්ඨාන 4 හැඳින්වීම -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 border border-amber-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-amber-200 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-cog text-amber-600"></i> රූප සමුට්ඨාන 4
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-3 text-center">
              <div class="text-2xl font-bold text-red-700 dark:text-red-300">1</div>
              <div class="text-xs font-bold text-red-800 dark:text-red-400 mt-1">කර්මජ</div>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-3 text-center">
              <div class="text-2xl font-bold text-blue-700 dark:text-blue-300">2</div>
              <div class="text-xs font-bold text-blue-800 dark:text-blue-400 mt-1">චිත්තජ</div>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-3 text-center">
              <div class="text-2xl font-bold text-green-700 dark:text-green-300">3</div>
              <div class="text-xs font-bold text-green-800 dark:text-green-400 mt-1">උතුජ</div>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-lg p-3 text-center">
              <div class="text-2xl font-bold text-purple-700 dark:text-purple-300">4</div>
              <div class="text-xs font-bold text-purple-800 dark:text-purple-400 mt-1">ආහාරජ</div>
            </div>
          </div>
        </div>

        <!-- කර්මජ රූප 20 -->
        <div class="bg-white dark:bg-slate-800 border border-red-300 dark:border-red-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-fire text-red-600"></i> කර්මජ රූප 20
          </h5>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">අතීත කුසලාකුසල කර්මයන් හේතුවෙන් උපදින රූප 20 කි.</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs">
            <span class="bg-red-50 dark:bg-red-900/20 rounded px-2 py-1">ප්‍රසාද 5</span>
            <span class="bg-red-50 dark:bg-red-900/20 rounded px-2 py-1">භාව 2</span>
            <span class="bg-red-50 dark:bg-red-900/20 rounded px-2 py-1">හදය 1</span>
            <span class="bg-red-50 dark:bg-red-900/20 rounded px-2 py-1">ජීවිත 1</span>
            <span class="bg-red-50 dark:bg-red-900/20 rounded px-2 py-1 col-span-2">අවිනිබ්භෝග 8</span>
            <span class="bg-red-50 dark:bg-red-900/20 rounded px-2 py-1">ආකාශ 1</span>
          </div>
        </div>

        <!-- චිත්තජ රූප 17 -->
        <div class="bg-white dark:bg-slate-800 border border-blue-300 dark:border-blue-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-brain text-blue-600"></i> චිත්තජ රූප 17
          </h5>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">සිත මුල් කරගෙන උපදින රූප 17 කි.</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs">
            <span class="bg-blue-50 dark:bg-blue-900/20 rounded px-2 py-1 col-span-2">අවිනිබ්භෝග 8</span>
            <span class="bg-blue-50 dark:bg-blue-900/20 rounded px-2 py-1">ආකාශ 1</span>
            <span class="bg-blue-50 dark:bg-blue-900/20 rounded px-2 py-1">ශබ්දය 1</span>
            <span class="bg-blue-50 dark:bg-blue-900/20 rounded px-2 py-1">විඤ්ඤත්ති 2</span>
            <span class="bg-blue-50 dark:bg-blue-900/20 rounded px-2 py-1">විකාර 3</span>
          </div>
        </div>

        <!-- උතුජ රූප 15 -->
        <div class="bg-white dark:bg-slate-800 border border-green-300 dark:border-green-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-thermometer-half text-green-600"></i> උතුජ රූප 15
          </h5>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">තේජෝ ධාතුව (උෂ්ණ/ශීත සෘතුව) හේතුවෙන් උපදින රූප 15 කි.</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs">
            <span class="bg-green-50 dark:bg-green-900/20 rounded px-2 py-1 col-span-2">අවිනිබ්භෝග 8</span>
            <span class="bg-green-50 dark:bg-green-900/20 rounded px-2 py-1">ආකාශ 1</span>
            <span class="bg-green-50 dark:bg-green-900/20 rounded px-2 py-1">ශබ්දය 1</span>
            <span class="bg-green-50 dark:bg-green-900/20 rounded px-2 py-1">විකාර 3</span>
          </div>
        </div>

        <!-- ආහාරජ රූප 14 -->
        <div class="bg-white dark:bg-slate-800 border border-purple-300 dark:border-purple-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-utensils text-purple-600"></i> ආහාරජ රූප 14
          </h5>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">අනුභව කරන ආහාරයේ ඕජාව හේතුවෙන් උපදින රූප 14 කි.</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs">
            <span class="bg-purple-50 dark:bg-purple-900/20 rounded px-2 py-1 col-span-2">අවිනිබ්භෝග 8</span>
            <span class="bg-purple-50 dark:bg-purple-900/20 rounded px-2 py-1">ආකාශ 1</span>
            <span class="bg-purple-50 dark:bg-purple-900/20 rounded px-2 py-1">විකාර 3</span>
          </div>
        </div>

        <!-- සමුට්ඨාන රහිත රූප 4 -->
        <div class="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-4">
          <h5 class="font-bold text-sm text-slate-800 dark:text-slate-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-ban text-slate-600"></i> සමුට්ඨාන රහිත රූප 4
          </h5>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 text-center border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-600 dark:text-slate-400 font-bold">උපචය</div>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 text-center border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-600 dark:text-slate-400 font-bold">සන්තති</div>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 text-center border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-600 dark:text-slate-400 font-bold">ජරතා</div>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg p-2 text-center border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] text-slate-600 dark:text-slate-400 font-bold">අනිච්චතා</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 9: රූප කලාප
  // ============================================================
  padama9: {
    title: "9. රූප කලාප",
    subtitle: "රූප සමූහ 21 - කර්මජ, චිත්තජ, උතුජ, ආහාරජ කලාප",
    icon: "fa-solid fa-cubes",
    color: "teal",
    content: `
      <div class="space-y-4">
        
        <!-- කලාප හැඳින්වීම -->
        <div class="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 border border-teal-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-teal-200 mb-2">
            <i class="fa-solid fa-cubes text-teal-600"></i> රූප කලාප 21
          </h4>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            රූප කලාප නම් එක් වැ උපදින-එක් වැ නිරුද්ධ වන-එක ම නිශ්‍රය ඇති එක් වැ ම පවතින රූප සමූහයෝ ය.
          </p>
        </div>

        <!-- කලාප බෙදීම -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          <!-- කර්මජ කලාප 9 -->
          <div class="bg-white dark:bg-slate-800 border-l-4 border-red-500 rounded-lg p-3">
            <h5 class="font-bold text-sm text-red-800 dark:text-red-300 mb-2">කර්මජ කලාප 9</h5>
            <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
              <li>1. චක්ඛු දසක</li>
              <li>2. සෝත දසක</li>
              <li>3. ඝාන දසක</li>
              <li>4. ජිව්හා දසක</li>
              <li>5. කාය දසක</li>
              <li>6. වත්ථු දසක</li>
              <li>7. භාව දසක (ස්ත්‍රී හෝ පුරුෂ)</li>
              <li>8. ජීවිත නවක</li>
              <li>9. ජීවිත දසකය</li>
            </ul>
          </div>

          <!-- චිත්තජ කලාප 6 -->
          <div class="bg-white dark:bg-slate-800 border-l-4 border-blue-500 rounded-lg p-3">
            <h5 class="font-bold text-sm text-blue-800 dark:text-blue-300 mb-2">චිත්තජ කලාප 6</h5>
            <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
              <li>1. සුද්ධට්ඨක (අවිනිබ්භෝග 8)</li>
              <li>2. කාය විඤ්ඤත්ති නවක</li>
              <li>3. වචී විඤ්ඤත්ති දසක</li>
              <li>4. ලහුතාදි ද්වාදසක</li>
              <li>5. කාය විඤ්ඤත්ති ලහුතාදි ද්වාදසක</li>
              <li>6. වචී විඤ්ඤත්ති සද්ද ලහුතාදි තෙරසක</li>
            </ul>
          </div>

          <!-- උතුජ කලාප 4 -->
          <div class="bg-white dark:bg-slate-800 border-l-4 border-green-500 rounded-lg p-3">
            <h5 class="font-bold text-sm text-green-800 dark:text-green-300 mb-2">උතුජ කලාප 4</h5>
            <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
              <li>1. සුද්ධට්ඨක</li>
              <li>2. සද්ද නවක</li>
              <li>3. ලහුතාදි ද්වාදසක</li>
              <li>4. සද්ද ලහුතාදි ද්වාදසක</li>
            </ul>
          </div>

          <!-- ආහාරජ කලාප 2 -->
          <div class="bg-white dark:bg-slate-800 border-l-4 border-purple-500 rounded-lg p-3">
            <h5 class="font-bold text-sm text-purple-800 dark:text-purple-300 mb-2">ආහාරජ කලාප 2</h5>
            <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
              <li>1. සුද්ධට්ඨක</li>
              <li>2. ලහුතාදි ද්වාදසක</li>
            </ul>
          </div>
        </div>

        <!-- විශේෂ කරුණු -->
        <div class="bg-amber-50 dark:bg-slate-900 border-l-4 border-amber-500 rounded-lg p-3">
          <h5 class="font-bold text-xs text-amber-800 dark:text-amber-300 mb-2">විශේෂ කරුණු:</h5>
          <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>• ආකාශ ධාතුව කලාපයන්ගේ පරිච්ඡේද මාත්‍ර බැවින් කිසි රූප කලාපයක අභිගතවයට නොපැමිණේ</li>
            <li>• උපචයාදී ලක්ෂණ රූප ද රූපයන්ගේ උත්පාදාදී ලක්ෂණ මාත්‍ර බැවින් විඤ්ඤත්ති මෙන් රූප කලාප පිළිබඳ අභිග නොවේ</li>
            <li>• සුද්ධට්ඨක සද්ද නවක යන උතුසමුට්ඨාන කලාප දෙක බාහිරයෙහි ද ලැබේ</li>
            <li>• සෙසු සියල්ල අධ්‍යාත්මයෙහි ය</li>
          </ul>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 10: රූප ප්‍රවෘත්ති ක්‍රම (කාම ලෝකය)
  // ============================================================
  padama10: {
    title: "10. රූප ප්‍රවෘත්ති ක්‍රම (කාම ලෝකය)",
    subtitle: "කාම ලෝකයෙහි රූප පැවතෙන ආකාරය",
    icon: "fa-solid fa-globe",
    color: "blue",
    content: `
      <div class="space-y-4">
        
        <!-- ලෝක බෙදීම -->
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 border border-blue-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-blue-200 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-globe text-blue-600"></i> ලෝක බෙදීම
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div class="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-3 text-center">
              <div class="font-bold text-sm text-blue-800 dark:text-blue-300">කාම ලෝකය</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">සතර අපාය, මනුෂ්‍ය ලෝකය, දෙවි ලෝකය (11 කාම භූමි)</div>
            </div>
            <div class="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-3 text-center">
              <div class="font-bold text-sm text-blue-800 dark:text-blue-300">රූප ලෝකය</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">බ්‍රහ්ම ලෝක 16 (16 රූප භූමි)</div>
            </div>
            <div class="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-3 text-center">
              <div class="font-bold text-sm text-blue-800 dark:text-blue-300">අරූප ලෝකය</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">රූප නැත (4 අරූප භූමි)</div>
            </div>
          </div>
        </div>

        <!-- යෝනි 4 -->
        <div class="bg-white dark:bg-slate-800 border border-purple-300 dark:border-purple-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-egg text-purple-600"></i> යෝනි 4 (සත්ත්වයන් ඇතිවන ක්‍රම)
          </h5>
          <div class="space-y-2 text-xs">
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2">
              <strong class="text-purple-800 dark:text-purple-300">1. අණ්ඩජ යෝනිය:</strong>
              <span class="text-slate-700 dark:text-slate-300"> බිජුවටින් උපදින්නෝ - පක්ෂි, සර්පාදීහු</span>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2">
              <strong class="text-purple-800 dark:text-purple-300">2. ජලාබුජ යෝනිය:</strong>
              <span class="text-slate-700 dark:text-slate-300"> වස්ති කෝෂයෙන් උපදින්නෝ - මනුෂ්‍යාදීහු</span>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2">
              <strong class="text-purple-800 dark:text-purple-300">3. සංසේදජ යෝනිය:</strong>
              <span class="text-slate-700 dark:text-slate-300"> කුණු මස්, කුණු මී, ගම්දාර ගවරවල උපදින්නෝ - මැසි, මදුරු ආදීහු</span>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2">
              <strong class="text-purple-800 dark:text-purple-300">4. ඕපපාතික යෝනිය:</strong>
              <span class="text-slate-700 dark:text-slate-300"> හටගත් ලෙසම පහළ වන්නෝ - දෙවියෝ, නිරයේ උපදින්නෝ</span>
            </div>
          </div>
        </div>

        <!-- ප්‍රතිසන්ධි ක්‍රමය -->
        <div class="bg-white dark:bg-slate-800 border border-green-300 dark:border-green-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-baby text-green-600"></i> ප්‍රතිසන්ධි ක්‍රමය (සංසේදජ/ඕපපාතික)
          </h5>
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>සංසේදජයන්ට හා ඕපපාතිකයන්ට ප්‍රතිසන්ධියෙහි උත්කෘෂ්ට වශයෙන් සප්ත දසකයක් ලැබේ:</p>
            <ul class="space-y-1 ml-4">
              <li>• චක්ඛු දසක</li>
              <li>• සෝත දසක</li>
              <li>• ඝාන දසක</li>
              <li>• ජිව්හා දසක</li>
              <li>• කාය දසක</li>
              <li>• භාව දසක</li>
              <li>• වත්ථු දසක</li>
            </ul>
            <p class="mt-2 text-xs italic text-slate-500 dark:text-slate-400">
              මමක වශයෙන් චක්ඛු, සෝත, ඝාන, භාව දසක ඇතැම් විට නොලැබේ.
            </p>
          </div>
        </div>

        <!-- අණ්ඩජ ජලාබුජ ප්‍රතිසන්ධිය -->
        <div class="bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-seedling text-amber-600"></i> අණ්ඩජ ජලාබුජ ප්‍රතිසන්ධිය
          </h5>
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>මව් කුසෙහි පිළිසිඳ ගැනීමේ දී දසක 3ක් ලැබේ:</p>
            <ul class="space-y-1 ml-4">
              <li>• කාය දසක</li>
              <li>• භාව දසක</li>
              <li>• වත්ථු දසක</li>
            </ul>
            <p class="mt-2">ප්‍රවෘත්ති කාලයෙහි මවුන්ට ක්‍රමයෙන් චක්ඛු දසකාදිය ලැබේ.</p>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 11: රූප ප්‍රවෘත්ති ක්‍රම (රූප ලෝකය)
  // ============================================================
  padama11: {
    title: "11. රූප ප්‍රවෘත්ති ක්‍රම (රූප ලෝකය)",
    subtitle: "රූප ලෝකයෙහි රූප පැවතෙන ආකාරය",
    icon: "fa-solid fa-star",
    color: "purple",
    content: `
      <div class="space-y-4">
        
        <!-- රූප ලෝකයේ විශේෂත්වය -->
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-purple-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-purple-200 mb-2">
            <i class="fa-solid fa-star text-purple-600"></i> රූප ලෝකයේ විශේෂත්වය
          </h4>
          <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>• සාණ දසක, ජිව්හා දසක, කාය දසක, භාව දසක නොලැබේ</li>
            <li>• ආහාරජ කලාප නොලැබේ (වළඳන ආහාර නැති බැවින්)</li>
            <li>• ගන්ධ රස ඕජා කැලම නැතැයි ඇතැම් ආචාර්යවරයෙක් කියති</li>
            <li>• එවිට ලැබෙන්නේ දසක නොවැ සප්තක ය</li>
          </ul>
        </div>

        <!-- රූපී බ්‍රහ්මයන්ගේ ප්‍රතිසන්ධිය -->
        <div class="bg-white dark:bg-slate-800 border border-indigo-300 dark:border-indigo-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-buddhist text-indigo-600"></i> රූපී බ්‍රහ්මයන්ගේ ප්‍රතිසන්ධිය
          </h5>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2">
              <strong class="text-indigo-800 dark:text-indigo-300">චක්ඛු දසක</strong>
            </div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2">
              <strong class="text-indigo-800 dark:text-indigo-300">සෝත දසක</strong>
            </div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2">
              <strong class="text-indigo-800 dark:text-indigo-300">වත්ථු දසක</strong>
            </div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2">
              <strong class="text-indigo-800 dark:text-indigo-300">ජීවිත නවකය</strong>
            </div>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-3">
            ප්‍රවෘත්ති කාලයෙහි විත්ත සමුට්ඨාන කලාපයේ ද ලැබේ.
          </p>
        </div>

        <!-- අසඤ්ඤසත්තයන් -->
        <div class="bg-white dark:bg-slate-800 border border-rose-300 dark:border-rose-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-user-slash text-rose-600"></i> අසඤ්ඤසත්තයන්
          </h5>
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>අසඤ්ඤසත්තයන්ට පහත රූප නොලැබේ:</p>
            <ul class="space-y-1 ml-4">
              <li>• චක්ඛු දසක</li>
              <li>• සෝත දසක</li>
              <li>• වත්ථු දසක</li>
              <li>• සියලු විත්තර රූප</li>
            </ul>
            <p class="mt-2"><strong>ප්‍රතිසන්ධියෙහි:</strong> ජීවිත නවකය පමණක්</p>
            <p><strong>ප්‍රවෘත්තියෙහි:</strong> ශබ්ද වර්ජිත උතු සමුට්ඨාන රූප පවතී</p>
          </div>
        </div>
      </div>
    `
  },

  // ============================================================
  // පාඩම 12: නිර්වාණය
  // ============================================================
  padama12: {
    title: "12. නිර්වාණය",
    subtitle: "අසංඛත ධාතුව - චතුර්විධ පරමාර්ථයන්ගෙන් එකක්",
    icon: "fa-solid fa-circle-notch",
    color: "emerald",
    content: `
      <div class="space-y-4">
        
        <!-- නිර්වාණය හැඳින්වීම -->
        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 border border-emerald-300 dark:border-slate-700 rounded-xl p-4">
          <h4 class="font-bold text-maroon-900 dark:text-emerald-200 mb-2">
            <i class="fa-solid fa-circle-notch text-emerald-600"></i> නිර්වාණය
          </h4>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            චතුර්විධ පරමාර්ථ ධර්මයන්ගෙන් එකක් වන නිර්වාණය අසංඛත ධාතුව යි. එය රූප නොවේ, චිත්ත නොවේ, චෛතසික නොවේ. එය ලෝකෝත්තර ධර්මයකි.
          </p>
        </div>

        <!-- නිර්වාණයේ ලක්ෂණ -->
        <div class="bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list-ul text-emerald-600"></i> නිර්වාණයේ ලක්ෂණ
          </h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2">
              <strong class="text-emerald-800 dark:text-emerald-300">අජාත:</strong>
              <span class="text-slate-700 dark:text-slate-300"> නූපන්</span>
            </div>
            <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-2">
              <strong class="text-teal-800 dark:text-teal-300">අභූත:</strong>
              <span class="text-slate-700 dark:text-slate-300"> නොවූ</span>
            </div>
            <div class="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-2">
              <strong class="text-cyan-800 dark:text-cyan-300">අකත:</strong>
              <span class="text-slate-700 dark:text-slate-300"> නොකළ</span>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-2">
              <strong class="text-green-800 dark:text-green-300">අසංඛත:</strong>
              <span class="text-slate-700 dark:text-slate-300"> ප්‍රත්‍යයන් නොනිපදවූ</span>
            </div>
            <div class="bg-lime-50 dark:bg-lime-900/20 rounded-lg p-2">
              <strong class="text-lime-800 dark:text-lime-300">අමත:</strong>
              <span class="text-slate-700 dark:text-slate-300"> මරණයක් නැති</span>
            </div>
            <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2">
              <strong class="text-yellow-800 dark:text-yellow-300">නිරෝධ:</strong>
              <span class="text-slate-700 dark:text-slate-300"> දුක් නිරුද්ධ වීම</span>
            </div>
          </div>
        </div>

        <!-- නිර්වාණයේ වර්ග -->
        <div class="bg-white dark:bg-slate-800 border border-teal-300 dark:border-teal-800 rounded-xl p-4">
          <h5 class="font-bold text-sm text-teal-800 dark:text-teal-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-shapes text-teal-600"></i> නිර්වාණ වර්ග 2
          </h5>
          <div class="space-y-2 text-xs">
            <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3">
              <strong class="text-teal-800 dark:text-teal-300">1. සඋපාදිසේස නිර්වාණය:</strong>
              <span class="text-slate-700 dark:text-slate-300"> උපාදි (පංචස්කන්ධ) ඇතිව ලබන නිර්වාණය - රහත් වූ නමුත් ජීවත් වන අවස්ථාව</span>
            </div>
            <div class="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-3">
              <strong class="text-cyan-800 dark:text-cyan-300">2. අනුපාදිසේස නිර්වාණය:</strong>
              <span class="text-slate-700 dark:text-slate-300"> උපාදි නැතිව ලබන නිර්වාණය - රහතන් වහන්සේ පිරිනිවන් පෑ පසු</span>
            </div>
          </div>
        </div>

        <!-- විශේෂ කරුණු -->
        <div class="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-slate-900 dark:to-slate-800 border-l-4 border-emerald-500 rounded-lg p-4">
          <h5 class="font-bold text-xs text-emerald-800 dark:text-emerald-300 mb-2">විශේෂ කරුණු:</h5>
          <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>• නිර්වාණය එකකි - එය එකම එක පරමාර්ථ ධර්මයයි</li>
            <li>• එය අරමුණක් ලෙස ගත හැකි ධර්මයකි</li>
            <li>• ලෝකෝත්තර මාර්ග සහ ඵල සිත් වලට අරමුණ වේ</li>
            <li>• අමත ධාතුව - මරණයක් නැති ධාතුව</li>
          </ul>
        </div>
      </div>
    `
  }
};

// ============================================================
// 2. INITIALIZE FUNCTION
// ============================================================
var rupaDetaInitialized = false;

function initRupaDeta() {
  // දැනටමත් init වී ඇත්නම් නැවත render නොකරන්න
  if (rupaDetaInitialized) {
    console.log('[rupa-deta.js] Already initialized');
    return;
  }
  
  var container = document.getElementById('rupa-deta-content');
  if (!container) {
    console.warn('[rupa-deta.js] Container #rupa-deta-content not found');
    return;
  }
  
  console.log('[rupa-deta.js] Initializing...');
  
  // කොන්ටේනරය පිරිසිදු කරන්න
  container.innerHTML = '';
  
  // සියලු පාඩම් render කරන්න
  renderRupaDetaContent();
  
  rupaDetaInitialized = true;
  console.log('[rupa-deta.js] Initialization complete - 12 පාඩම්');
}

// ============================================================
// 3. RENDER FUNCTION
// ============================================================
function renderRupaDetaContent() {
  var container = document.getElementById('rupa-deta-content');
  if (!container) return;
  
  container.innerHTML = '';
  
  // පාඩම් සියල්ල array එකකට ගන්න
  var padamaKeys = Object.keys(rupaDetaData);
  
  padamaKeys.forEach(function(key, index) {
    var padama = rupaDetaData[key];
    
    // පාඩම් කාඩ්පත සාදන්න
    var padamaCard = document.createElement('div');
    padamaCard.className = 'bg-white dark:bg-slate-800 rounded-2xl border border-emerald-200 dark:border-slate-700 shadow-sm overflow-hidden mb-4';
    
    // Header
    var colorClass = getColorClass(padama.color);
    
    padamaCard.innerHTML = 
      '<button type="button" onclick="toggleRupaDetaPadama(' + index + ')" ' +
              'class="w-full flex items-center justify-between gap-3 p-4 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors text-left">' +
        '<div class="flex items-center gap-3 flex-1 min-w-0">' +
          '<div class="w-10 h-10 rounded-xl ' + colorClass.bg + ' flex items-center justify-center text-white shrink-0">' +
            '<i class="' + padama.icon + '"></i>' +
          '</div>' +
          '<div class="flex-1 min-w-0">' +
            '<h4 class="font-bold text-sm sm:text-base text-maroon-900 dark:text-saffron-200 truncate">' + padama.title + '</h4>' +
            '<p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">' + padama.subtitle + '</p>' +
          '</div>' +
        '</div>' +
        '<i id="rupa-deta-padama-arrow-' + index + '" class="fa-solid fa-chevron-down text-emerald-600 dark:text-emerald-400 transition-transform"></i>' +
      '</button>' +
      '<div id="rupa-deta-padama-content-' + index + '" class="hidden p-4 bg-emerald-50/40 dark:bg-slate-900/40 border-t border-emerald-100 dark:border-slate-700">' +
        padama.content +
      '</div>';
    
    container.appendChild(padamaCard);
  });
}

// ============================================================
// 4. PADAMA TOGGLE FUNCTION
// ============================================================
function toggleRupaDetaPadama(index) {
  var content = document.getElementById('rupa-deta-padama-content-' + index);
  var arrow = document.getElementById('rupa-deta-padama-arrow-' + index);
  
  if (content && arrow) {
    content.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  }
}

// ============================================================
// 5. HELPER FUNCTION - Color Class
// ============================================================
function getColorClass(color) {
  var colors = {
    'saffron': { bg: 'bg-gradient-to-br from-saffron-500 to-amber-600' },
    'amber': { bg: 'bg-gradient-to-br from-amber-500 to-orange-600' },
    'blue': { bg: 'bg-gradient-to-br from-blue-500 to-indigo-600' },
    'purple': { bg: 'bg-gradient-to-br from-purple-500 to-violet-600' },
    'rose': { bg: 'bg-gradient-to-br from-rose-500 to-pink-600' },
    'cyan': { bg: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
    'indigo': { bg: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
    'teal': { bg: 'bg-gradient-to-br from-teal-500 to-cyan-600' },
    'emerald': { bg: 'bg-gradient-to-br from-emerald-500 to-teal-600' }
  };
  return colors[color] || colors['saffron'];
}

// ============================================================
// 6. GLOBAL EXPORTS
// ============================================================
window.initRupaDeta = initRupaDeta;
window.toggleRupaDetaPadama = toggleRupaDetaPadama;
window.renderRupaDetaContent = renderRupaDetaContent;

console.log('[rupa-deta.js] Loaded successfully - 12 පාඩම් ready');
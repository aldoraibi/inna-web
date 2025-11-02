/* إنَّ وأخواتها — إعداد وتطوير: الأستاذ يحيى بن محمد الدريبي */
/* نسخة كاملة بـ ٦٠ جملة + إصلاحات:
   1) الجملة تظهر مباشرة.
   2) يختار المبتدأ → لونه أحمر.
   3) يختار الخبر → لونه أزرق.
   4) يختار الأداة الناسخة → تظهر في الجملة باللون الأخضر.
   5) إذا اختار (ليت) أو (لعل) يظهر: اسم ليت / خبر ليت أو اسم لعل / خبر لعل.
   6) خيارات الاسم والخبر = الكلمة المختارة فقط بثلاث حركات ( ُ ، َ ، ِ ) بدون كلمات (رفع/نصب/جر).
   7) يبقى التلوين في الجملة حتى بعد تغيير الحركة (نعمل تطبيع للكلمة عشان ما يروح اللون).
*/

/* =============== الجمل (٦٠ جملة) =============== */
const ITEMS = [
  { mub:{m:"الوطنُ",a:"الوطنَ",j:"الوطنِ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"الطالبُ المجتهدُ",a:"الطالبَ المجتهدَ",j:"الطالبِ المجتهدِ"}, khb:{m:"متفوّقٌ",a:"متفوّقًا",j:"متفوّقٍ"} },
  { mub:{m:"المدينةُ الكبيرةُ",a:"المدينةَ الكبيرةَ",j:"المدينةِ الكبيرةِ"}, khb:{m:"هادئةٌ وجميلةٌ",a:"هادئةً وجميلةً",j:"هادئةٍ وجميلةٍ"} },
  { mub:{m:"الطالبُ",a:"الطالبَ",j:"الطالبِ"}, khb:{m:"مجدٌ",a:"مجدًا",j:"مجدٍ"} },
  { mub:{m:"المعلِّمُ الصبورُ",a:"المعلِّمَ الصبورَ",j:"المعلِّمِ الصبورِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"المدرسةُ النظيفةُ",a:"المدرسةَ النظيفةَ",j:"المدرسةِ النظيفةِ"}, khb:{m:"منظمةٌ ومرتبةٌ",a:"منظمةً ومرتبةً",j:"منظمةٍ ومرتبةٍ"} },
  { mub:{m:"المعلِّمُ",a:"المعلِّمَ",j:"المعلِّمِ"}, khb:{m:"قدوةٌ",a:"قدوةً",j:"قدوةٍ"} },
  { mub:{m:"الفتاةُ الذكيةُ",a:"الفتاةَ الذكيةَ",j:"الفتاةِ الذكيةِ"}, khb:{m:"ناجحةٌ",a:"ناجحةً",j:"ناجحةٍ"} },
  { mub:{m:"السماءُ الزرقاءُ",a:"السماءَ الزرقاءَ",j:"السماءِ الزرقاءِ"}, khb:{m:"صافيةٌ ومشرقةٌ",a:"صافيةً ومشرقةً",j:"صافيةٍ ومشرقةٍ"} },
  { mub:{m:"المدرسةُ",a:"المدرسةَ",j:"المدرسةِ"}, khb:{m:"نظيفةٌ",a:"نظيفةً",j:"نظيفةٍ"} },
  { mub:{m:"الولدُ النشيطُ",a:"الولدَ النشيطَ",j:"الولدِ النشيطِ"}, khb:{m:"مبدعٌ",a:"مبدعًا",j:"مبدعٍ"} },
  { mub:{m:"الحديقةُ الواسعةُ",a:"الحديقةَ الواسعةَ",j:"الحديقةِ الواسعةِ"}, khb:{m:"مليئةٌ بالزهورِ",a:"مليئةً بالزهورِ",j:"مليئةٍ بالزهورِ"} },
  { mub:{m:"الوقتُ",a:"الوقتَ",j:"الوقتِ"}, khb:{m:"ثمینٌ",a:"ثمینًا",j:"ثمینٍ"} },
  { mub:{m:"الحديقةُ الكبيرةُ",a:"الحديقةَ الكبيرةَ",j:"الحديقةِ الكبيرةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"الطالبُ المجتهدُ",a:"الطالبَ المجتهدَ",j:"الطالبِ المجتهدِ"}, khb:{m:"محبوبٌ في صفِّهِ",a:"محبوبًا في صفِّهِ",j:"محبوبٍ في صفِّهِ"} },
  { mub:{m:"الصدقُ",a:"الصدقَ",j:"الصدقِ"}, khb:{m:"فضيلةٌ",a:"فضيلةً",j:"فضيلةٍ"} },
  { mub:{m:"المملكةُ العربيةُ",a:"المملكةَ العربيةَ",j:"المملكةِ العربيةِ"}, khb:{m:"عظيمةٌ",a:"عظيمةً",j:"عظيمةٍ"} },
  { mub:{m:"المعلمةُ الفاضلةُ",a:"المعلمةَ الفاضلةَ",j:"المعلمةِ الفاضلةِ"}, khb:{m:"قدوةٌ لطالباتِها",a:"قدوةً لطالباتِها",j:"قدوةٍ لطالباتِها"} },
  { mub:{m:"العلمُ",a:"العلمَ",j:"العلمِ"}, khb:{m:"نورٌ",a:"نورًا",j:"نورٍ"} },
  { mub:{m:"السماءُ الزرقاءُ",a:"السماءَ الزرقاءَ",j:"السماءِ الزرقاءِ"}, khb:{m:"رائعةٌ",a:"رائعةً",j:"رائعةٍ"} },
  { mub:{m:"المعلِّمُ المخلصُ",a:"المعلِّمَ المخلصَ",j:"المعلِّمِ المخلصِ"}, khb:{m:"محبوبٌ بين طلابِهِ",a:"محبوبًا بين طلابِهِ",j:"محبوبٍ بين طلابِهِ"} },
  { mub:{m:"الأمانةُ",a:"الأمانةَ",j:"الأمانةِ"}, khb:{m:"خلقٌ",a:"خلقًا",j:"خلقٍ"} },
  { mub:{m:"الطالبُ المؤدبُ",a:"الطالبَ المؤدبَ",j:"الطالبِ المؤدبِ"}, khb:{m:"محترمٌ",a:"محترمًا",j:"محترمٍ"} },
  { mub:{m:"المملكةُ العربيةُ السعوديةُ",a:"المملكةَ العربيةَ السعوديةَ",j:"المملكةِ العربيةِ السعوديةِ"}, khb:{m:"شامخةٌ بالعطاءِ",a:"شامخةً بالعطاءِ",j:"شامخةٍ بالعطاءِ"} },
  { mub:{m:"السماءُ",a:"السماءَ",j:"السماءِ"}, khb:{m:"صافيةٌ",a:"صافيةً",j:"صافيةٍ"} },
  { mub:{m:"المعلِّمُ الخبيرُ",a:"المعلِّمَ الخبيرَ",j:"المعلِّمِ الخبيرِ"}, khb:{m:"ناجحٌ",a:"ناجحًا",j:"ناجحٍ"} },
  { mub:{m:"البحرُ الهادئُ",a:"البحرَ الهادئَ",j:"البحرِ الهادئِ"}, khb:{m:"جميلٌ في المساءِ",a:"جميلًا في المساءِ",j:"جميلٍ في المساءِ"} },
  { mub:{m:"الكتابُ",a:"الكتابَ",j:"الكتابِ"}, khb:{m:"مفيدٌ",a:"مفيدًا",j:"مفيدٍ"} },
  { mub:{m:"البيتُ الجميلُ",a:"البيتَ الجميلَ",j:"البيتِ الجميلِ"}, khb:{m:"واسعٌ",a:"واسعًا",j:"واسعٍ"} },
  { mub:{m:"القمرُ المنيرُ",a:"القمرَ المنيرَ",j:"القمرِ المنيرِ"}, khb:{m:"يضيءُ سماءَ الليلِ",a:"يضيءَ سماءَ الليلِ",j:"يضيءِ سماءَ الليلِ"} },
  { mub:{m:"البيتُ",a:"البيتَ",j:"البيتِ"}, khb:{m:"واسعٌ",a:"واسعًا",j:"واسعٍ"} },
  { mub:{m:"الحديقةُ النظيفةُ",a:"الحديقةَ النظيفةَ",j:"الحديقةِ النظيفةِ"}, khb:{m:"منظمةٌ",a:"منظمةً",j:"منظمةٍ"} },
  { mub:{m:"الطفلُ اللطيفُ",a:"الطفلَ اللطيفَ",j:"الطفلِ اللطيفِ"}, khb:{m:"يبتسمُ للجميعِ",a:"يبتسمَ للجميعِ",j:"يبتسمِ للجميعِ"} },
  { mub:{m:"الزهرةُ",a:"الزهرةَ",j:"الزهرةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"الطفلُ الصغيرُ",a:"الطفلَ الصغيرَ",j:"الطفلِ الصغيرِ"}, khb:{m:"لطيفٌ",a:"لطيفًا",j:"لطيفٍ"} },
  { mub:{m:"الطالبُ المؤدبُ",a:"الطالبَ المؤدبَ",j:"الطالبِ المؤدبِ"}, khb:{m:"يحترمُ معلمَهُ",a:"يحترمَ معلمَهُ",j:"يحترمِ معلمَهُ"} },
  { mub:{m:"الجيشُ",a:"الجيشَ",j:"الجيشِ"}, khb:{m:"قويٌّ",a:"قويًّا",j:"قويٍّ"} },
  { mub:{m:"الوردةُ الحمراءُ",a:"الوردةَ الحمراءَ",j:"الوردةِ الحمراءِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"الحديقةُ المزهرةُ",a:"الحديقةَ المزهرةَ",j:"الحديقةِ المزهرةِ"}, khb:{m:"تبعثُ السرورَ",a:"تبعثَ السرورَ",j:"تبعثِ السرورَ"} },
  { mub:{m:"المطرُ",a:"المطرَ",j:"المطرِ"}, khb:{m:"نافعٌ",a:"نافعًا",j:"نافعٍ"} },
  { mub:{m:"المدرسةُ النموذجيةُ",a:"المدرسةَ النموذجيةَ",j:"المدرسةِ النموذجيةِ"}, khb:{m:"مرتبةٌ",a:"مرتبةً",j:"مرتبةٍ"} },
  { mub:{m:"الوردةُ البيضاءُ",a:"الوردةَ البيضاءَ",j:"الوردةِ البيضاءِ"}, khb:{m:"تفوحُ بالعطرِ",a:"تفوحَ بالعطرِ",j:"تفوحِ بالعطرِ"} },
  { mub:{m:"البحرُ",a:"البحرَ",j:"البحرِ"}, khb:{m:"عميقٌ",a:"عميقًا",j:"عميقٍ"} },
  { mub:{m:"المملكةُ الغاليةُ",a:"المملكةَ الغاليةَ",j:"المملكةِ الغاليةِ"}, khb:{m:"آمنةٌ",a:"آمنةً",j:"آمنةٍ"} },
  { mub:{m:"الوطنُ الغاليُّ",a:"الوطنَ الغاليَ",j:"الوطنِ الغاليِ"}, khb:{m:"مزدهرٌ بالعقولِ",a:"مزدهرًا بالعقولِ",j:"مزدهرٍ بالعقولِ"} },
  { mub:{m:"التمرُ",a:"التمرَ",j:"التمرِ"}, khb:{m:"لذيذٌ",a:"لذيذًا",j:"لذيذٍ"} },
  { mub:{m:"الموظفُ النشيطُ",a:"الموظفَ النشيطَ",j:"الموظفِ النشيطِ"}, khb:{m:"متميزٌ",a:"متميزًا",j:"متميزٍ"} },
  { mub:{m:"الطالبةُ المبدعةُ",a:"الطالبةَ المبدعةَ",j:"الطالبةِ المبدعةِ"}, khb:{m:"تنالُ الجائزةَ",a:"تنالَ الجائزةَ",j:"تنالِ الجائزةِ"} },
  { mub:{m:"الشمسُ",a:"الشمسَ",j:"الشمسِ"}, khb:{m:"مشرقةٌ",a:"مشرقةً",j:"مشرقةٍ"} },
  { mub:{m:"العلمُ النافعُ",a:"العلمَ النافعَ",j:"العلمِ النافعِ"}, khb:{m:"سلاحٌ",a:"سلاحًا",j:"سلاحٍ"} },
  { mub:{m:"المعلمُ الصبورُ",a:"المعلمَ الصبورَ",j:"المعلمِ الصبورِ"}, khb:{m:"يزرعُ الأملَ",a:"يزرعَ الأملَ",j:"يزرعِ الأملَ"} },
  { mub:{m:"القمرُ",a:"القمرَ",j:"القمرِ"}, khb:{m:"منيرٌ",a:"منيرًا",j:"منيرٍ"} },
  { mub:{m:"الطالبُ المثابرُ",a:"الطالبَ المثابرَ",j:"الطالبِ المثابرِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"الفتاةُ المجتهدةُ",a:"الفتاةَ المجتهدةَ",j:"الفتاةِ المجتهدةِ"}, khb:{m:"تحققُ النجاحَ",a:"تحققَ النجاحَ",j:"تحققِ النجاحَ"} },
  { mub:{m:"الهواءُ",a:"الهواءَ",j:"الهواءِ"}, khb:{m:"نقيٌّ",a:"نقيًّا",j:"نقيٍّ"} },
  { mub:{m:"الفجرُ الصادقُ",a:"الفجرَ الصادقَ",j:"الفجرِ الصادقِ"}, khb:{m:"مشرقٌ",a:"مشرقًا",j:"مشرقٍ"} },
  { mub:{m:"المدينةُ الهادئةُ",a:"المدينةَ الهادئةَ",j:"المدينةِ الهادئةِ"}, khb:{m:"نظيفةٌ وجميلةٌ",a:"نظيفةً وجميلةً",j:"نظيفةٍ وجميلةٍ"} },
  { mub:{m:"الوردةُ",a:"الوردةَ",j:"الوردةِ"}, khb:{m:"عطرةٌ",a:"عطرةً",j:"عطرةٍ"} },
  { mub:{m:"الطريقُ الطويلُ",a:"الطريقَ الطويلَ",j:"الطريقِ الطويلِ"}, khb:{m:"ممهدٌ",a:"ممهدًا",j:"ممهدٍ"} },
  { mub:{m:"الطالبُ النشيطُ",a:"الطالبَ النشيطَ",j:"الطالبِ النشيطِ"}, khb:{m:"يشاركُ أصدقاءَهُ",a:"يشاركَ أصدقاءَهُ",j:"يشاركِ أصدقاءَهُ"} }
];

/* =============== الحالة العامة =============== */
const state = {
  idx: 0,
  phase: "pickM",   // pickM → pickK → verb → cases
  mCase: "m",
  kCase: "m",
  verb: null,
  mSelected: false,
  kSelected: false,
  mWord: "",
  kWord: ""
};

/* =============== عناصر DOM =============== */
const $ = s => document.querySelector(s);
const live   = $("#live");
const mubSec = $("#mubSection");
const khabSec= $("#khabSection");
const feedback = $("#feedback");
const checkBtn = $("#checkBtn");
const nextBtn  = $("#nextBtn");

/* =============== دوال مساعدة =============== */
function current(){ return ITEMS[state.idx]; }

/* نطبع التشكيل الأخير من الكلمة حتى نقدر نضيف حركاتنا بدون تكرار */
function stripLastHaraka(w){
  if(!w) return "";
  // نحذف حركة واحدة في آخر الكلمة إن وُجدت
  return w.replace(/[ًٌٍَُِّْ]$/u, "");
}
/* نطبع الكلمة بدون حركة أخيرة للمقارنة (حتى ما يضيع التلوين) */
function normalizeWord(w){
  if(!w) return "";
  return w.replace(/[ًٌٍَُِّْ]$/u, "");
}
/* نقسم النص لكلمات */
function wordsOf(t){
  return t.trim().split(/\s+/);
}

/* =============== عرض الجملة الأساسية =============== */
function renderLive(){
  const { mub: M, khb: K } = current();
  const mText = M[state.mCase];
  const kText = K[state.kCase];

  const mHtml = wordsOf(mText).map(w=>{
    const sel = state.mSelected && normalizeWord(state.mWord) === normalizeWord(w);
    return `<span class="token ${sel ? 'sel-m' : ''}" data-part="m">${w}</span>`;
  }).join(" ");

  const kHtml = wordsOf(kText).map(w=>{
    const sel = state.kSelected && normalizeWord(state.kWord) === normalizeWord(w);
    return `<span class="token ${sel ? 'sel-k' : ''}" data-part="k">${w}</span>`;
  }).join(" ");

  const vHtml = state.verb ? `<span class="verb">${state.verb}</span> ` : "";

  live.innerHTML = `${vHtml}${mHtml} ${kHtml}`;

  bindClicks();

  // التحقق ممنوع إلا بعد الحالات
  if (checkBtn) checkBtn.disabled = state.phase !== "cases";
  if (nextBtn)  nextBtn.disabled  = true;
}

/* =============== ربط النقر على الكلمات =============== */
function bindClicks(){
  live.querySelectorAll(".token").forEach(tok=>{
    tok.onclick = ()=>{
      const part = tok.dataset.part;
      if(state.phase === "pickM" && part === "m"){
        state.mSelected = true;
        state.mWord = tok.textContent;
        state.phase = "pickK";
        renderLive();
        renderUI();
      }else if(state.phase === "pickK" && part === "k"){
        state.kSelected = true;
        state.kWord = tok.textContent;
        state.phase = "verb";
        renderLive();
        renderUI();
      }
    };
  });
}

/* =============== واجهة المراحل =============== */
function renderUI(){
  const hint = t => {
    feedback.className = "feedback ok";
    feedback.textContent = t;
  };

  if(state.phase === "pickM"){
    mubSec.innerHTML  = "<h3>حدد المبتدأ (تصبح الكلمة حمراء)</h3>";
    khabSec.innerHTML = "";
    renderChips(false);
    feedback.className = "feedback hidden";
    feedback.textContent = "";
  }else if(state.phase === "pickK"){
    hint("الآن اختر الخبر (تصبح الكلمة زرقاء).");
    renderChips(false);
  }else if(state.phase === "verb"){
    hint("اختر الأداة الناسخة.");
    renderChips(true);
  }else if(state.phase === "cases"){
    hint("اختر صورة الكلمة بالحركات.");
    renderChips(true);
    renderForms();
  }
}

/* =============== الأزرار الناسخة =============== */
function renderChips(show){
  const chips = document.querySelector(".chips");
  if(!chips) return;
  chips.style.display = show ? "block" : "none";

  if(show){
    chips.querySelectorAll(".chip").forEach(btn=>{
      btn.classList.toggle("active", btn.dataset.verb === state.verb);
      btn.onclick = ()=>{
        // تفعيل زر واحد
        chips.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
        btn.classList.add("active");
        state.verb = btn.dataset.verb;   // إنَّ / ليت / لعل / كأن
        state.phase = "cases";
        renderLive();
        renderUI();
      };
    });
  }
}

/* =============== عرض اسم الحرف الناسخ وخبره =============== */
function renderForms(){
  // خريطة لتصحيح العنوان
  const verbTitles = {
    "إنَّ": "إنَّ",
    "إن": "إنَّ",
    "ليت": "ليت",
    "لعل": "لعلَّ",
    "كأن": "كأنَّ",
    "كأنَّ": "كأنَّ"
  };

  const v = verbTitles[state.verb] || "إنَّ";
  const nameLabel = `اسم ${v}`;
  const khabLabel = `خبر ${v}`;

  // نأخذ الكلمة التي اختارها الطالب فقط ثم نركب عليها الحركات
  const baseM = stripLastHaraka(state.mWord || "—");
  const baseK = stripLastHaraka(state.kWord || "—");

  mubSec.innerHTML = `
    <h3>${nameLabel}</h3>
    <div class="forms" id="mForms">
      <button class="form" data-case="m">${baseM}ُ</button>
      <button class="form" data-case="a">${baseM}َ</button>
      <button class="form" data-case="j">${baseM}ِ</button>
    </div>
  `;

  khabSec.innerHTML = `
    <h3>${khabLabel}</h3>
    <div class="forms" id="kForms">
      <button class="form" data-case="m">${baseK}ُ</button>
      <button class="form" data-case="a">${baseK}َ</button>
      <button class="form" data-case="j">${baseK}ِ</button>
    </div>
  `;

  // ربط أزرار الاسم
  document.querySelectorAll("#mForms .form").forEach(btn=>{
    btn.onclick = ()=>{
      state.mCase = btn.dataset.case;   // m / a / j
      renderLive();                     // عشان تتغير الكلمة في الجملة
      renderForms();                    // وعشان تبقى الأزرار محدثة
    };
  });

  // ربط أزرار الخبر
  document.querySelectorAll("#kForms .form").forEach(btn=>{
    btn.onclick = ()=>{
      state.kCase = btn.dataset.case;
      renderLive();
      renderForms();
    };
  });
}

/* =============== التحقق (نفس منطقك السابق) =============== */
function check(){
  if(state.phase !== "cases"){
    feedback.className = "feedback bad";
    feedback.textContent = "أكمل الخطوات: مبتدأ → خبر → أداة → الحركات.";
    return;
  }
  const ok = state.mCase === "a" && state.kCase === "m";
  feedback.className = ok ? "feedback ok" : "feedback bad";
  feedback.textContent = ok
    ? "أحسنت! اسم إن منصوب وخبرها مرفوع."
    : "جرّب أن تجعل الاسم بالفتحة والخبر بالضمة.";
  if(nextBtn) nextBtn.disabled = !ok;
}

/* =============== الجملة التالية =============== */
function next(){
  state.idx = (state.idx + 1) % ITEMS.length;
  state.phase = "pickM";
  state.mCase = "m";
  state.kCase = "m";
  state.verb  = null;
  state.mSelected = false;
  state.kSelected = false;
  state.mWord = "";
  state.kWord = "";
  feedback.textContent = "";
  feedback.className   = "feedback hidden";
  // إزالة تفعيل الحروف الناسخة
  document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
  renderLive();
  renderUI();
}

/* =============== ربط الأزرار العامة =============== */
if(checkBtn) checkBtn.onclick = check;
if(nextBtn)  nextBtn.onclick  = next;

/* =============== تشغيل أول جملة =============== */
renderLive();
renderUI();

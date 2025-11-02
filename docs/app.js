/* إنَّ وأخواتها — إعداد وتطوير: الأستاذ يحيى بن محمد الدريبي */

/* الجمل (٦٠ جملة) */
const ITEMS = [
  { mub:{m:"الوطنُ",a:"الوطنَ",j:"الوطنِ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"الطالبُ المجتهدُ",a:"الطالبَ المجتهدَ",j:"الطالبِ المجتهدِ"}, khb:{m:"متفوّقٌ",a:"متفوّقًا",j:"متفوّقٍ"} },
  { mub:{m:"المدينةُ الكبيرةُ",a:"المدينةَ الكبيرةَ",j:"المدينةِ الكبيرةِ"}, khb:{m:"هادئةٌ وجميلةٌ",a:"هادئةً وجميلةً",j:"هادئةٍ وجميلةٍ"} },
  { mub:{m:"المعلمُ",a:"المعلمَ",j:"المعلمِ"}, khb:{m:"قدوةٌ",a:"قدوةً",j:"قدوةٍ"} },
  { mub:{m:"المدرسةُ النظيفةُ",a:"المدرسةَ النظيفةَ",j:"المدرسةِ النظيفةِ"}, khb:{m:"مرتبةٌ",a:"مرتبةً",j:"مرتبةٍ"} },
  { mub:{m:"العلمُ",a:"العلمَ",j:"العلمِ"}, khb:{m:"نورٌ",a:"نورًا",j:"نورٍ"} },
  { mub:{m:"المملكةُ العربيةُ",a:"المملكةَ العربيةَ",j:"المملكةِ العربيةِ"}, khb:{m:"عظيمةٌ",a:"عظيمةً",j:"عظيمةٍ"} },
  { mub:{m:"الوقتُ",a:"الوقتَ",j:"الوقتِ"}, khb:{m:"ثمينٌ",a:"ثمينًا",j:"ثمينٍ"} },
  { mub:{m:"الطالبُ",a:"الطالبَ",j:"الطالبِ"}, khb:{m:"مبدعٌ",a:"مبدعًا",j:"مبدعٍ"} },
  { mub:{m:"الزهرةُ",a:"الزهرةَ",j:"الزهرةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"القمرُ",a:"القمرَ",j:"القمرِ"}, khb:{m:"منيرٌ",a:"منيرًا",j:"منيرٍ"} },
  { mub:{m:"الشمسُ",a:"الشمسَ",j:"الشمسِ"}, khb:{m:"مشرقةٌ",a:"مشرقةً",j:"مشرقةٍ"} },
  { mub:{m:"السماءُ",a:"السماءَ",j:"السماءِ"}, khb:{m:"صافيةٌ",a:"صافيةً",j:"صافيةٍ"} },
  { mub:{m:"المعلمُ الفاضلُ",a:"المعلمَ الفاضلَ",j:"المعلمِ الفاضلِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"الفتاةُ الذكيةُ",a:"الفتاةَ الذكيةَ",j:"الفتاةِ الذكيةِ"}, khb:{m:"ناجحةٌ",a:"ناجحةً",j:"ناجحةٍ"} },
  { mub:{m:"المملكةُ الغاليةُ",a:"المملكةَ الغاليةَ",j:"المملكةِ الغاليةِ"}, khb:{m:"آمنةٌ",a:"آمنةً",j:"آمنةٍ"} },
  { mub:{m:"الطالبُ النشيطُ",a:"الطالبَ النشيطَ",j:"الطالبِ النشيطِ"}, khb:{m:"يشاركُ أصدقاءَهُ",a:"يشاركَ أصدقاءَهُ",j:"يشاركِ أصدقاءَهُ"} },
  { mub:{m:"القائدُ",a:"القائدَ",j:"القائدِ"}, khb:{m:"شجاعٌ",a:"شجاعًا",j:"شجاعٍ"} },
  { mub:{m:"التمرُ",a:"التمرَ",j:"التمرِ"}, khb:{m:"لذيذٌ",a:"لذيذًا",j:"لذيذٍ"} },
  { mub:{m:"الطفلُ الصغيرُ",a:"الطفلَ الصغيرَ",j:"الطفلِ الصغيرِ"}, khb:{m:"لطيفٌ",a:"لطيفًا",j:"لطيفٍ"} },
  { mub:{m:"الفجرُ",a:"الفجرَ",j:"الفجرِ"}, khb:{m:"مشرقٌ",a:"مشرقًا",j:"مشرقٍ"} },
  { mub:{m:"البحرُ",a:"البحرَ",j:"البحرِ"}, khb:{m:"هادئٌ",a:"هادئًا",j:"هادئٍ"} },
  { mub:{m:"المعلمُ الصبورُ",a:"المعلمَ الصبورَ",j:"المعلمِ الصبورِ"}, khb:{m:"قدوةٌ",a:"قدوةً",j:"قدوةٍ"} },
  { mub:{m:"الحديقةُ",a:"الحديقةَ",j:"الحديقةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"الموظفُ النشيطُ",a:"الموظفَ النشيطَ",j:"الموظفِ النشيطِ"}, khb:{m:"متميزٌ",a:"متميزًا",j:"متميزٍ"} },
  { mub:{m:"العلمُ النافعُ",a:"العلمَ النافعَ",j:"العلمِ النافعِ"}, khb:{m:"سلاحٌ",a:"سلاحًا",j:"سلاحٍ"} },
  { mub:{m:"الطفلُ",a:"الطفلَ",j:"الطفلِ"}, khb:{m:"بريءٌ",a:"بريئًا",j:"بريءٍ"} },
  { mub:{m:"المعلمُ المخلصُ",a:"المعلمَ المخلصَ",j:"المعلمِ المخلصِ"}, khb:{m:"محترمٌ",a:"محترمًا",j:"محترمٍ"} },
  { mub:{m:"الوطنُ الغاليُّ",a:"الوطنَ الغاليَ",j:"الوطنِ الغاليِ"}, khb:{m:"مزدهرٌ بالعقولِ",a:"مزدهرًا بالعقولِ",j:"مزدهرٍ بالعقولِ"} },
  { mub:{m:"الحديقةُ الواسعةُ",a:"الحديقةَ الواسعةَ",j:"الحديقةِ الواسعةِ"}, khb:{m:"خضراءُ",a:"خضراءَ",j:"خضراءِ"} },
  { mub:{m:"القمرُ المنيرُ",a:"القمرَ المنيرَ",j:"القمرِ المنيرِ"}, khb:{m:"يضيءُ السماءَ",a:"يضيءَ السماءَ",j:"يضيءِ السماءِ"} },
  { mub:{m:"المملكةُ العربيةُ السعوديةُ",a:"المملكةَ العربيةَ السعوديةَ",j:"المملكةِ العربيةِ السعوديةِ"}, khb:{m:"شامخةٌ بالعطاءِ",a:"شامخةً بالعطاءِ",j:"شامخةٍ بالعطاءِ"} },
  { mub:{m:"المعلمُ",a:"المعلمَ",j:"المعلمِ"}, khb:{m:"ناجحٌ",a:"ناجحًا",j:"ناجحٍ"} },
  { mub:{m:"الشجرةُ",a:"الشجرةَ",j:"الشجرةِ"}, khb:{m:"خضراءُ",a:"خضراءَ",j:"خضراءِ"} },
  { mub:{m:"الطالبُ المؤدبُ",a:"الطالبَ المؤدبَ",j:"الطالبِ المؤدبِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"البيتُ الجميلُ",a:"البيتَ الجميلَ",j:"البيتِ الجميلِ"}, khb:{m:"واسعٌ",a:"واسعًا",j:"واسعٍ"} },
  { mub:{m:"الوطنُ",a:"الوطنَ",j:"الوطنِ"}, khb:{m:"مزدهرٌ",a:"مزدهرًا",j:"مزدهرٍ"} }
];

/* ⚙️ الحالة */
const state={idx:0,verb:null,phase:"pickVerb",mCase:"m",kCase:"m",mSel:false,kSel:false,mWord:"",kWord:""};

const $=s=>document.querySelector(s);
const live=$("#live"),feedback=$("#feedback"),checkBtn=$("#checkBtn"),nextBtn=$("#nextBtn");

/* عرض الجملة */
function renderLive(){
  const {mub,khb}=ITEMS[state.idx];
  const m=mub[state.mCase];
  const k=khb[state.kCase];
  const verb=state.verb?`<span class="verb">${state.verb}</span>`:"";
  const mHTML=m.split(" ").map(w=>`<span class="word ${state.mSel&&state.mWord===w?'blue':''}" data-part="m">${w}</span>`).join(" ");
  const kHTML=k.split(" ").map(w=>`<span class="word ${state.kSel&&state.kWord===w?'red':''}" data-part="k">${w}</span>`).join(" ");
  live.innerHTML=`${verb} ${mHTML} ${kHTML}`;
  bindClicks();
}

/* اختيار المبتدأ والخبر */
function bindClicks(){
  live.querySelectorAll(".word").forEach(w=>{
    w.onclick=()=>{
      if(state.phase==="pickM" && w.dataset.part==="m"){state.mSel=true;state.mWord=w.textContent;state.phase="pickK";feedback.textContent="اختر الخبر.";renderLive();}
      else if(state.phase==="pickK" && w.dataset.part==="k"){state.kSel=true;state.kWord=w.textContent;state.phase="cases";feedback.textContent="اختر الحركات المناسبة.";renderForms();}
    };
  });
}

/* اختيار الأداة الناسخة */
function chooseVerb(v){
  state.verb=v;
  state.phase="pickM";
  feedback.textContent="اختر المبتدأ.";
  renderLive();
}

/* عرض الأزرار الخاصة بالأدوات */
function renderUI(){
  if(state.phase==="pickVerb"){
    live.innerHTML="";
    feedback.textContent="اختر الأداة الناسخة:";
    $("#mubSection").innerHTML=`
      <button class='form' onclick="chooseVerb('إِنَّ')">إِنَّ</button>
      <button class='form' onclick="chooseVerb('كَأَنَّ')">كَأَنَّ</button>
      <button class='form' onclick="chooseVerb('لَيْتَ')">لَيْتَ</button>
      <button class='form' onclick="chooseVerb('لَعَلَّ')">لَعَلَّ</button>`;
  }
}

/* عرض الحركات */
function renderForms(){
  const {mub,khb}=ITEMS[state.idx];
  $("#mubSection").innerHTML=`<h3>اسم ${state.verb}</h3>
    <button class='form' onclick="setCase('m')">${mub.m}</button>
    <button class='form' onclick="setCase('a')">${mub.a}</button>
    <button class='form' onclick="setCase('j')">${mub.j}</button>`;
  $("#khabSection").innerHTML=`<h3>خبر ${state.verb}</h3>
    <button class='form' onclick="setKCase('m')">${khb.m}</button>
    <button class='form' onclick="setKCase('a')">${khb.a}</button>
    <button class='form' onclick="setKCase('j')">${khb.j}</button>`;
}

/* ضبط الحالات */
function setCase(c){state.mCase=c;renderLive();}
function setKCase(c){state.kCase=c;renderLive();checkBtn.disabled=false;}

/* تحقق */
function check(){
  const ok=state.mCase==="a"&&state.kCase==="m";
  feedback.textContent=ok?"✅ أحسنت! الاسم منصوب والخبر مرفوع.":"❌ حاول مرة أخرى.";
  nextBtn.disabled=!ok;
}

/* التالي */
function next(){
  state.idx=(state.idx+1)%ITEMS.length;
  Object.assign(state,{verb:null,phase:"pickVerb",mSel:false,kSel:false,mCase:"m",kCase:"m"});
  feedback.textContent="اختر الأداة الناسخة.";
  checkBtn.disabled=true;nextBtn.disabled=true;
  renderUI();
}

/* التشغيل */
checkBtn.onclick=check;
nextBtn.onclick=next;
renderUI();

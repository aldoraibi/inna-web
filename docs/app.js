/* إنَّ وأخواتها — إعداد وتطوير: الأستاذ يحيى بن محمد الدريبي */

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
  { mub:{m:"القمرُ",a:"القمرَ",j:"القمرِ"}, khb:{m:"منيرٌ",a:"منيرًا",j:"منيرٍ"} },
  { mub:{m:"المعلمُ الصبورُ",a:"المعلمَ الصبورَ",j:"المعلمِ الصبورِ"}, khb:{m:"يزرعُ الأملَ",a:"يزرعَ الأملَ",j:"يزرعِ الأملَ"} },
  { mub:{m:"المدينةُ الهادئةُ",a:"المدينةَ الهادئةَ",j:"المدينةِ الهادئةِ"}, khb:{m:"نظيفةٌ وجميلةٌ",a:"نظيفةً وجميلةً",j:"نظيفةٍ وجميلةٍ"} },
  { mub:{m:"الوردةُ",a:"الوردةَ",j:"الوردةِ"}, khb:{m:"عطرةٌ",a:"عطرةً",j:"عطرةٍ"} },
  { mub:{m:"الطالبُ المثابرُ",a:"الطالبَ المثابرَ",j:"الطالبِ المثابرِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"الفتاةُ المجتهدةُ",a:"الفتاةَ المجتهدةَ",j:"الفتاةِ المجتهدةِ"}, khb:{m:"تحققُ النجاحَ",a:"تحققَ النجاحَ",j:"تحققِ النجاحَ"} },
  { mub:{m:"المملكةُ الغاليةُ",a:"المملكةَ الغاليةَ",j:"المملكةِ الغاليةِ"}, khb:{m:"آمنةٌ",a:"آمنةً",j:"آمنةٍ"} },
  { mub:{m:"الطالبُ النشيطُ",a:"الطالبَ النشيطَ",j:"الطالبِ النشيطِ"}, khb:{m:"يشاركُ أصدقاءَهُ",a:"يشاركَ أصدقاءَهُ",j:"يشاركِ أصدقاءَهُ"} }
];

/* ⚙️ الحالة العامة */
const state = { idx:0, phase:"pickM", mCase:"m", kCase:"m", verb:null, mSelected:false, kSelected:false, mWord:"", kWord:"" };

const $=s=>document.querySelector(s);
const live=$("#live"), mubSec=$("#mubSection"), khabSec=$("#khabSection"), feedback=$("#feedback"), checkBtn=$("#checkBtn"), nextBtn=$("#nextBtn");

/* دوال */
function current(){return ITEMS[state.idx];}
function form(f,k){return f[k];}
function wordsOf(t){return t.trim().split(/\s+/);}

/* عرض الجملة */
function renderLive(){
  const {mub:M,khb:K}=current();
  const m=form(M,state.mCase),k=form(K,state.kCase);
  const mHtml=wordsOf(m).map(w=>{
    let cls="token";
    if(state.mSelected && state.mWord===w) cls+=" blue";
    return `<span class="${cls}" data-part="m">${w}</span>`;
  }).join(" ");
  const kHtml=wordsOf(k).map(w=>{
    let cls="token";
    if(state.kSelected && state.kWord===w) cls+=" red";
    return `<span class="${cls}" data-part="k">${w}</span>`;
  }).join(" ");
  const v=state.verb?`<span class="verb">${state.verb}</span>`:"";
  live.innerHTML=`${v} ${mHtml} ${kHtml}`;
  bindClicks();
  checkBtn.disabled=state.phase!=="cases";
  nextBtn.disabled=true;
}

/* اختيار الكلمات */
function bindClicks(){
  live.querySelectorAll(".token").forEach(tok=>{
    tok.onclick=()=>{
      if(state.phase==="pickM" && tok.dataset.part==="m"){
        state.mSelected=true; state.mWord=tok.textContent; state.phase="pickK";
        renderLive(); renderUI();
      }else if(state.phase==="pickK" && tok.dataset.part==="k"){
        state.kSelected=true; state.kWord=tok.textContent; state.phase="verb";
        renderLive(); renderUI();
      }
    };
  });
}

/* واجهة المراحل */
function renderUI(){
  if(state.phase==="pickM"){
    mubSec.innerHTML="<h3>اختر المبتدأ</h3>";
    khabSec.innerHTML="";
    feedback.textContent="اختر المبتدأ.";
  }else if(state.phase==="pickK"){
    khabSec.innerHTML="<h3>اختر الخبر</h3>";
    feedback.textContent="اختر الخبر.";
  }else if(state.phase==="verb"){
    const labelMap={"إنّ":"اسم إنّ","كأنّ":"اسم كأنّ","ليت":"اسم ليت","لعلّ":"اسم لعلّ"};
    const labelK={"إنّ":"خبر إنّ","كأنّ":"خبر كأنّ","ليت":"خبر ليت","لعلّ":"خبر لعلّ"};
    const verb=state.verb||"إنّ";
    const nameLabel=labelMap[verb]||"اسم إنّ";
    const khabLabel=labelK[verb]||"خبر إنّ";
    const M=current().mub, K=current().khb;
    mubSec.innerHTML=`<h3>${nameLabel}</h3>
    <div class="forms">
      <button class="form" onclick="setCase('m')">${M.m}</button>
      <button class="form" onclick="setCase('a')">${M.a}</button>
      <button class="form" onclick="setCase('j')">${M.j}</button>
    </div>`;
    khabSec.innerHTML=`<h3>${khabLabel}</h3>
    <div class="forms">
      <button class="form" onclick="setKCase('m')">${K.m}</button>
      <button class="form" onclick="setKCase('a')">${K.a}</button>
      <button class="form" onclick="setKCase('j')">${K.j}</button>
    </div>`;
    feedback.textContent="اختر الحركات المناسبة.";
  }else if(state.phase==="cases"){
    feedback.textContent="اضغط تحقق للتأكد.";
  }
}

/* تغيير الحالة الإعرابية */
function setCase(c){ state.mCase=c; state.phase="cases"; renderLive(); renderUI(); }
function setKCase(c){ state.kCase=c; state.phase="cases"; renderLive(); renderUI(); }

/* زر التحقق */
function check(){
  const ok = state.mCase==="a" && state.kCase==="m";
  feedback.className="feedback " + (ok?"ok":"bad");
  feedback.textContent= ok?"أحسنت ✅ الجواب صحيح":"حاول مرة أخرى ❌";
  nextBtn.disabled=!ok;
}

/* التالي */
function next(){
  state.idx=(state.idx+1)%ITEMS.length;
  Object.assign(state,{phase:"pickM",mCase:"m",kCase:"m",verb:null,mSelected:false,kSelected:false,mWord:"",kWord:""});
  feedback.textContent="اختر المبتدأ.";
  feedback.className="";
  renderLive(); renderUI();
}

/* تشغيل */
checkBtn.onclick=check;
nextBtn.onclick=next;
renderLive(); renderUI();

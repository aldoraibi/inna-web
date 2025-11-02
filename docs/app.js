/* إنَّ وأخواتها — إعداد وتطوير: الأستاذ يحيى بن محمد الدريبي */

/* الجمل (٦٠ جملة) */
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
  { mub:{m:"القمرُ",a:"القمرَ",j:"القمرِ"}, khb:{m:"منيرٌ",a:"منيرًا",j:"منيرٍ"} }
];

/* الحالة */
const state = { idx:0, phase:"pickM", mCase:"m", kCase:"m", verb:null, mSelected:false, kSelected:false, mWord:"", kWord:"" };

/* عناصر DOM */
const $=s=>document.querySelector(s);
const live=$("#live"), mubSec=$("#mubSection"), khabSec=$("#khabSection"),
feedback=$("#feedback"), checkBtn=$("#checkBtn"), nextBtn=$("#nextBtn");

/* أدوات */
function current(){return ITEMS[state.idx];}
function form(f,k){return f[k];}
function wordsOf(t){return t.trim().split(/\s+/);}

/* عرض الجملة */
function renderLive(){
  const {mub:M,khb:K}=current();
  const m=form(M,state.mCase),k=form(K,state.kCase);
  const mHtml=wordsOf(m).map(w=>`<span class="token ${state.mSelected&&state.mWord===w?'sel-m':''}" data-part="m">${w}</span>`).join(" ");
  const kHtml=wordsOf(k).map(w=>`<span class="token ${state.kSelected&&state.kWord===w?'sel-k':''}" data-part="k">${w}</span>`).join(" ");
  const v=state.verb?`<span class="verb">${state.verb}</span>`:"";
  live.innerHTML=`${v}${mHtml} ${kHtml}`;
  bindClicks();
  checkBtn.disabled=state.phase!=="cases"; nextBtn.disabled=true;
}

/* اختيار */
function bindClicks(){
  live.querySelectorAll(".token").forEach(tok=>{
    tok.onclick=()=>{
      if(state.phase==="pickM"&&tok.dataset.part==="m"){
        state.mSelected=true; state.mWord=tok.textContent; state.phase="pickK";
        renderLive(); renderUI();
      }else if(state.phase==="pickK"&&tok.dataset.part==="k"){
        state.kSelected=true; state.kWord=tok.textContent; state.phase="verb";
        renderLive(); renderUI();
      }
    };
  });
}

/* واجهة */
function renderUI(){
  const hint=t=>{feedback.className="feedback ok";feedback.textContent=t;};
  if(state.phase==="pickM"){mubSec.innerHTML="<h3>حدد المبتدأ</h3>";khabSec.innerHTML="";renderChips(false);}
  else if(state.phase==="pickK"){hint("حدد الخبر.");renderChips(false);}
  else if(state.phase==="verb"){hint("اختر الأداة الناسخة.");renderChips(true);}
  else if(state.phase==="cases"){hint("اختر الحركات.");renderChips(true);renderForms();}
}

/* الأدوات */
function renderChips(show){
  const chips=document.querySelector(".chips"); if(!chips)return;
  chips.style.display=show?"block":"none";
  chips.querySelectorAll(".chip").forEach(b=>{
    b.classList.toggle("active",b.dataset.verb===state.verb);
    b.onclick=()=>{
      chips.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
      b.classList.add("active"); state.verb=b.dataset.verb; state.phase="cases";
      renderLive(); renderUI();
    };
  });
}

/* عرض الحركات */
function renderForms(){
  const verbs={"إنَّ":"إنَّ","إن":"إنَّ","ليت":"ليت","لعل":"لعلَّ","كأن":"كأنَّ","كأنَّ":"كأنَّ"};
  const v=verbs[state.verb]||"إنَّ";
  const nameLabel=`اسم ${v}`, khabLabel=`خبر ${v}`;
  const m=state.mWord||"—", k=state.kWord||"—";

  mubSec.innerHTML=`
  <h3>${nameLabel}</h3>
  <div class="chosen">${m}</div>
  <div class="forms" id="mForms">
    <button class="form" data-case="m">${m}ُ (رفع)</button>
    <button class="form" data-case="a">${m}َ (نصب)</button>
    <button class="form" data-case="j">${m}ِ (جر)</button>
  </div>`;

  khabSec.innerHTML=`
  <h3>${khabLabel}</h3>
  <div class="chosen">${k}</div>
  <div class="forms" id="kForms">
    <button class="form" data-case="m">${k}ُ (رفع)</button>
    <button class="form" data-case="a">${k}َ (نصب)</button>
    <button class="form" data-case="j">${k}ِ (جر)</button>
  </div>`;

  document.querySelectorAll("#mForms .form").forEach(b=>b.onclick=()=>{state.mCase=b.dataset.case;renderLive();renderForms();});
  document.querySelectorAll("#kForms .form").forEach(b=>b.onclick=()=>{state.kCase=b.dataset.case;renderLive();renderForms();});
}

/* التحقق */
function check(){
  if(state.phase!=="cases"){feedback.className="feedback bad";feedback.textContent="أكمل الخطوات.";return;}
  const ok=state.mCase==="a"&&state.kCase==="m";
  feedback.className=ok?"feedback ok":"feedback bad";
  feedback.textContent=ok?"أحسنت! اسم إن منصوب وخبرها مرفوع.":"جرّب: الاسم بالفتحة والخبر بالضمة.";
  nextBtn.disabled=!ok;
}

/* التالي */
function next(){
  state.idx=(state.idx+1)%ITEMS.length;
  Object.assign(state,{phase:"pickM",mCase:"m",kCase:"m",verb:null,mSelected:false,kSelected:false,mWord:"",kWord:""});
  feedback.textContent=""; feedback.className="feedback hidden"; nextBtn.disabled=true;
  document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
  renderLive(); renderUI();
}

/* تشغيل */
checkBtn.onclick=check; nextBtn.onclick=next;
renderLive(); renderUI();

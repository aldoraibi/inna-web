/* إنَّ وأخواتها — إعداد وتطوير: الأستاذ يحيى بن محمد الدريبي */

/* الجمل (٦٠ جملة) */
const ITEMS = [
  // جمل من كلمتين
  { mub:{m:"الوطنُ",a:"الوطنَ",j:"الوطنِ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"المطرُ",a:"المطرَ",j:"المطرِ"}, khb:{m:"نافعٌ",a:"نافعًا",j:"نافعٍ"} },
  { mub:{m:"القمرُ",a:"القمرَ",j:"القمرِ"}, khb:{m:"منيرٌ",a:"منيرًا",j:"منيرٍ"} },
  { mub:{m:"العلمُ",a:"العلمَ",j:"العلمِ"}, khb:{m:"نورٌ",a:"نورًا",j:"نورٍ"} },
  { mub:{m:"الصدقُ",a:"الصدقَ",j:"الصدقِ"}, khb:{m:"فضيلةٌ",a:"فضيلةً",j:"فضيلةٍ"} },
  { mub:{m:"الوقتُ",a:"الوقتَ",j:"الوقتِ"}, khb:{m:"ثمينٌ",a:"ثمينًا",j:"ثمينٍ"} },
  { mub:{m:"البيتُ",a:"البيتَ",j:"البيتِ"}, khb:{m:"واسعٌ",a:"واسعًا",j:"واسعٍ"} },
  { mub:{m:"الطفلُ",a:"الطفلَ",j:"الطفلِ"}, khb:{m:"لطيفٌ",a:"لطيفًا",j:"لطيفٍ"} },
  { mub:{m:"المدرسةُ",a:"المدرسةَ",j:"المدرسةِ"}, khb:{m:"نظيفةٌ",a:"نظيفةً",j:"نظيفةٍ"} },
  { mub:{m:"المعلمُ",a:"المعلمَ",j:"المعلمِ"}, khb:{m:"قدوةٌ",a:"قدوةً",j:"قدوةٍ"} },

  // جمل من ثلاث كلمات
  { mub:{m:"الطالبُ المجتهدُ",a:"الطالبَ المجتهدَ",j:"الطالبِ المجتهدِ"}, khb:{m:"ناجحٌ",a:"ناجحًا",j:"ناجحٍ"} },
  { mub:{m:"الفتاةُ الذكيةُ",a:"الفتاةَ الذكيةَ",j:"الفتاةِ الذكيةِ"}, khb:{m:"محبوبةٌ",a:"محبوبةً",j:"محبوبةٍ"} },
  { mub:{m:"السماءُ الزرقاءُ",a:"السماءَ الزرقاءَ",j:"السماءِ الزرقاءِ"}, khb:{m:"صافيةٌ",a:"صافيةً",j:"صافيةٍ"} },
  { mub:{m:"الجيشُ القويُّ",a:"الجيشَ القويَّ",j:"الجيشِ القويِّ"}, khb:{m:"حاميٌ",a:"حاميًا",j:"حاميٍ"} },
  { mub:{m:"المعلمُ الصبورُ",a:"المعلمَ الصبورَ",j:"المعلمِ الصبورِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"الولدُ النشيطُ",a:"الولدَ النشيطَ",j:"الولدِ النشيطِ"}, khb:{m:"مبدعٌ",a:"مبدعًا",j:"مبدعٍ"} },
  { mub:{m:"البحرُ الهادئُ",a:"البحرَ الهادئَ",j:"البحرِ الهادئِ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"المملكةُ العظيمةُ",a:"المملكةَ العظيمةَ",j:"المملكةِ العظيمةِ"}, khb:{m:"مزدهرةٌ",a:"مزدهرةً",j:"مزدهرةٍ"} },
  { mub:{m:"البيتُ الجميلُ",a:"البيتَ الجميلَ",j:"البيتِ الجميلِ"}, khb:{m:"مرتبٌ",a:"مرتبًا",j:"مرتبٍ"} },
  { mub:{m:"الطريقُ الطويلُ",a:"الطريقَ الطويلَ",j:"الطريقِ الطويلِ"}, khb:{m:"آمنٌ",a:"آمنًا",j:"آمنٍ"} },

  // جمل من أربع كلمات
  { mub:{m:"المدينةُ الكبيرةُ الهادئةُ",a:"المدينةَ الكبيرةَ الهادئةَ",j:"المدينةِ الكبيرةِ الهادئةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"الطالبُ المجتهدُ المؤدبُ",a:"الطالبَ المجتهدَ المؤدبَ",j:"الطالبِ المجتهدِ المؤدبِ"}, khb:{m:"محترمٌ",a:"محترمًا",j:"محترمٍ"} },
  { mub:{m:"الحديقةُ الكبيرةُ المزهرةُ",a:"الحديقةَ الكبيرةَ المزهرةَ",j:"الحديقةِ الكبيرةِ المزهرةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"المملكةُ العربيةُ السعوديةُ",a:"المملكةَ العربيةَ السعوديةَ",j:"المملكةِ العربيةِ السعوديةِ"}, khb:{m:"شامخةٌ بالعطاءِ",a:"شامخةً بالعطاءِ",j:"شامخةٍ بالعطاءِ"} },
  { mub:{m:"القمرُ المنيرُ الجميلُ",a:"القمرَ المنيرَ الجميلَ",j:"القمرِ المنيرِ الجميلِ"}, khb:{m:"ساطعٌ",a:"ساطعًا",j:"ساطعٍ"} },
  { mub:{m:"المعلمُ المخلصُ الفاضلُ",a:"المعلمَ المخلصَ الفاضلَ",j:"المعلمِ المخلصِ الفاضلِ"}, khb:{m:"محبوبٌ بين طلابِهِ",a:"محبوبًا بين طلابِهِ",j:"محبوبٍ بين طلابِهِ"} },
  { mub:{m:"الطفلُ الصغيرُ المهذبُ",a:"الطفلَ الصغيرَ المهذبَ",j:"الطفلِ الصغيرِ المهذبِ"}, khb:{m:"لطيفٌ",a:"لطيفًا",j:"لطيفٍ"} },
  { mub:{m:"الزهرةُ الحمراءُ الجميلةُ",a:"الزهرةَ الحمراءَ الجميلةَ",j:"الزهرةِ الحمراءِ الجميلةِ"}, khb:{m:"رائعةٌ",a:"رائعةً",j:"رائعةٍ"} },
  { mub:{m:"الكتابُ المفيدُ الجديدُ",a:"الكتابَ المفيدَ الجديدَ",j:"الكتابِ المفيدِ الجديدِ"}, khb:{m:"نافعٌ",a:"نافعًا",j:"نافعٍ"} },
  { mub:{m:"السماءُ الصافيةُ الزرقاءُ",a:"السماءَ الصافيةَ الزرقاءَ",j:"السماءِ الصافيةِ الزرقاءِ"}, khb:{m:"مشرقةٌ",a:"مشرقةً",j:"مشرقةٍ"} },

  // مزيد من الجمل المتنوعة حتى 60
  { mub:{m:"الطائرةُ السعوديةُ",a:"الطائرةَ السعوديةَ",j:"الطائرةِ السعوديةِ"}, khb:{m:"سريعةٌ",a:"سريعةً",j:"سريعةٍ"} },
  { mub:{m:"الشجرةُ الخضراءُ",a:"الشجرةَ الخضراءَ",j:"الشجرةِ الخضراءِ"}, khb:{m:"وارفةٌ",a:"وارفةً",j:"وارفةٍ"} },
  { mub:{m:"العصفورُ الصغيرُ",a:"العصفورَ الصغيرَ",j:"العصفورِ الصغيرِ"}, khb:{m:"يغردُ",a:"يغردَ",j:"يغردِ"} },
  { mub:{m:"الطريقُ الواسعُ",a:"الطريقَ الواسعَ",j:"الطريقِ الواسعِ"}, khb:{m:"مزدحمٌ",a:"مزدحمًا",j:"مزدحمٍ"} },
  { mub:{m:"المنزلُ الكبيرُ",a:"المنزلَ الكبيرَ",j:"المنزلِ الكبيرِ"}, khb:{m:"مرتبٌ",a:"مرتبًا",j:"مرتبٍ"} },
  { mub:{m:"الولدُ المؤدبُ",a:"الولدَ المؤدبَ",j:"الولدِ المؤدبِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"الأمانةُ خلقٌ",a:"الأمانةَ خلقًا",j:"الأمانةِ خلقٍ"}, khb:{m:"عظيمٌ",a:"عظيمًا",j:"عظيمٍ"} },
  { mub:{m:"العملُ الصالحُ",a:"العملَ الصالحَ",j:"العملِ الصالحِ"}, khb:{m:"مطلوبٌ",a:"مطلوبًا",j:"مطلوبٍ"} },
  { mub:{m:"النخلةُ الطويلةُ",a:"النخلةَ الطويلةَ",j:"النخلةِ الطويلةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"الحديقةُ النظيفةُ",a:"الحديقةَ النظيفةَ",j:"الحديقةِ النظيفةِ"}, khb:{m:"مرتبةٌ",a:"مرتبةً",j:"مرتبةٍ"} },
  { mub:{m:"المعلمُ القديرُ",a:"المعلمَ القديرَ",j:"المعلمِ القديرِ"}, khb:{m:"محترمٌ",a:"محترمًا",j:"محترمٍ"} },
  { mub:{m:"الطالبُ المتفوقُ",a:"الطالبَ المتفوقَ",j:"الطالبِ المتفوقِ"}, khb:{m:"ناجحٌ",a:"ناجحًا",j:"ناجحٍ"} },
  { mub:{m:"المدينةُ المزدحمةُ",a:"المدينةَ المزدحمةَ",j:"المدينةِ المزدحمةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"القلمُ الأزرقُ",a:"القلمَ الأزرقَ",j:"القلمِ الأزرقِ"}, khb:{m:"حادٌ",a:"حادًا",j:"حادٍ"} },
  { mub:{m:"البستانُ الواسعُ",a:"البستانَ الواسعَ",j:"البستانِ الواسعِ"}, khb:{m:"مليءٌ بالأزهارِ",a:"مليئًا بالأزهارِ",j:"مليءٍ بالأزهارِ"} },
  { mub:{m:"الزهرُ الأبيضُ",a:"الزهرَ الأبيضَ",j:"الزهرِ الأبيضِ"}, khb:{m:"رائعٌ",a:"رائعًا",j:"رائعٍ"} },
  { mub:{m:"الليلُ الهادئُ",a:"الليلَ الهادئَ",j:"الليلِ الهادئِ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"الهواءُ النقيُّ",a:"الهواءَ النقيَّ",j:"الهواءِ النقيِّ"}, khb:{m:"منعشٌ",a:"منعشًا",j:"منعشٍ"} },
  { mub:{m:"الطبيبُ الماهرُ",a:"الطبيبَ الماهرَ",j:"الطبيبِ الماهرِ"}, khb:{m:"ناجحٌ",a:"ناجحًا",j:"ناجحٍ"} }
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
  live.innerHTML=`${v} ${mHtml} ${kHtml}`;
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
  else if(state.phase==="cases"){hint("اختر الحركات المناسبة.");renderChips(true);renderForms();}
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
  const verbs={"إن":"إنَّ","إنَّ":"إنَّ","ليت":"ليت","لعل":"لعلَّ","كأن":"كأنَّ"};
  const v=verbs[state.verb]||"إنَّ";
  const nameLabel=`اسم ${v}`, khabLabel=`خبر ${v}`;
  const M=current().mub, K=current().khb;

  mubSec.innerHTML=`
  <h3>${nameLabel}</h3>
  <div class="forms" id="mForms">
    <button class="form" data-case="m">${M.m}</button>
    <button class="form" data-case="a">${M.a}</button>
    <button class="form" data-case="j">${M.j}</button>
  </div>`;

  khabSec.innerHTML=`
  <h3>${khabLabel}</h3>
  <div class="forms" id="kForms">
    <button class="form" data-case="m">${K.m}</button>
    <button class="form" data-case="a">${K.a}</button>
    <button class="form" data-case="j">${K.j}</button>
  </div>`;

  document.querySelectorAll("#mForms .form").forEach(b=>b.onclick=()=>{
    state.mCase=b

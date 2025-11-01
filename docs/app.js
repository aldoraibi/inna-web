/* InnaWaAkhawatuha Web — تفاعل تسلسلي (يجب اختيار المبتدأ ثم الخبر أولاً) */

const ITEMS = [
  { mub:{m:"الوَلَدُ",a:"الوَلَدَ",j:"الوَلَدِ"}, khb:{m:"ذكيٌّ",a:"ذكيًّا",j:"ذكيٍّ"} },
  { mub:{m:"الطالبةُ",a:"الطالبةَ",j:"الطالبةِ"}, khb:{m:"ناجحةٌ",a:"ناجحةً",j:"ناجحةٍ"} },
  { mub:{m:"الوطنُ",a:"الوطنَ",j:"الوطنِ"}, khb:{m:"عزيزٌ",a:"عزيزًا",j:"عزيزٍ"} },
  { mub:{m:"الجوُّ",a:"الجوَّ",j:"الجوِّ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"المعلِّمُ",a:"المعلِّمَ",j:"المعلِّمِ"}, khb:{m:"قدوةٌ",a:"قدوةً",j:"قدوةٍ"} }
];

const state = {
  idx: 0, verb: null, twoStep: true,
  mCase: null, kCase: null,
  mPick: null, kPick: null,
  mPicked:false, kPicked:false,
  success:false
};

const $ = s => document.querySelector(s);
const liveEl = $("#live");
const mubSec = $("#mubSection");
const khabSec = $("#khabSection");
const feedback = $("#feedback");
const checkBtn = $("#checkBtn");
const nextBtn = $("#nextBtn");
const twoStep = $("#twoStep");
const chipsContainer = document.querySelector(".chips");
chipsContainer.style.display = "none"; // مخفية بالبداية

function splitTokens(text){ return text.trim().split(/\s+/); }
function current(){ return ITEMS[state.idx]; }

function conj(v){ return v; }
function form(forms,c){ return forms[c ?? "m"]; }

function tokenForm(forms, idx){
  const mT = splitTokens(forms.m), aT = splitTokens(forms.a), jT = splitTokens(forms.j);
  const i = Math.min(idx ?? 0, Math.max(mT.length,1)-1);
  return { m: mT[i] ?? forms.m, a: aT[i] ?? forms.a, j: jT[i] ?? forms.j };
}

function renderLive(){
  const M = current().mub, K = current().khb;
  const mText = form(M, state.mCase ?? "m");
  const kText = form(K, state.kCase ?? "m");
  const mTokens = splitTokens(mText), kTokens = splitTokens(kText);

  const parts = [];
  if(state.verb){
    parts.push(`<span class="verb">${state.verb}</span>`);
  }

  mTokens.forEach((tok,i)=>{
    const sel = state.mPick===i ? " token sel-m" : " token";
    parts.push(`<span class="${sel}" data-m="${i}">${tok}</span>`);
  });
  kTokens.forEach((tok,i)=>{
    const sel = state.kPick===i ? " token sel-k" : " token";
    parts.push(`<span class="${sel}" data-k="${i}">${tok}</span>`);
  });
  liveEl.innerHTML = parts.join(" ");

  // التفاعل مع المبتدأ والخبر
  liveEl.querySelectorAll("[data-m]").forEach(el=> el.onclick = ()=>{
    state.mPick=+el.dataset.m;
    state.mPicked=true;
    refresh();
  });
  liveEl.querySelectorAll("[data-k]").forEach(el=> el.onclick = ()=>{
    state.kPick=+el.dataset.k;
    state.kPicked=true;
    refresh();
  });

  // ✅ لا تظهر الحروف الناسخة إلا بعد اختيار المبتدأ والخبر
  chipsContainer.style.display = (state.mPicked && state.kPicked) ? "block" : "none";

  checkBtn.disabled = !isAnswerComplete();
  nextBtn.disabled  = !state.success;
}

function selectedMTokenForms(){
  const idx = state.mPick ?? 0; return tokenForm(current().mub, idx);
}
function selectedKTokenForms(){
  const idx = state.kPick ?? 0; return tokenForm(current().khb, idx);
}

function renderForms(){
  mubSec.innerHTML = ""; khabSec.innerHTML = "";

  if(!state.mPicked || !state.kPicked){
    mubSec.innerHTML = `<div class="helper">اختر أولاً المبتدأ ثم الخبر من الجملة أعلاه.</div>`;
    return;
  }

  if(!state.verb){
    mubSec.innerHTML = `<div class="helper">الآن اختر أحد الحروف الناسخة.</div>`;
    return;
  }

  mubSec.innerHTML = renderFormsBlock("اختر صيغة اسم إنَّ الصحيحة", selectedMTokenForms(), "mCase");
  khabSec.innerHTML = renderFormsBlock("اختر صيغة خبر إنَّ الصحيحة", selectedKTokenForms(), "kCase");

  mubSec.querySelectorAll("[data-case]").forEach(btn=> btn.onclick=()=>{ state.mCase=btn.dataset.case; refresh(); });
  khabSec.querySelectorAll("[data-case]").forEach(btn=> btn.onclick=()=>{ state.kCase=btn.dataset.case; refresh(); });
}

function renderFormsBlock(title, forms, bindKey){
  const sel = (bindKey==="mCase"?state.mCase:state.kCase);
  const chip = (label,code)=>`<button class="form-chip ${sel===code?'sel':''}" data-case="${code}">${label}</button>`;
  return `
    <h3>${title}</h3>
    <div class="forms">
      ${chip(forms.m,"m")}
      ${chip(forms.a,"a")}
      ${chip(forms.j,"j")}
    </div>
  `;
}

function isAnswerComplete(){
  return state.mPicked && state.kPicked && state.verb && state.mCase && state.kCase;
}

function check(){
  if(!isAnswerComplete()) return;
  const okM = state.mCase==="a";
  const okK = state.kCase==="m";

  if(okM && okK){
    feedback.className = "feedback ok";
    feedback.innerHTML = `أحسنت ✅ بعد (${state.verb}): <span style="color:red">اسمها منصوب</span> و<span style="color:blue">خبرها مرفوع</span>.`;
    state.success = true;
  }else{
    feedback.className = "feedback bad";
    feedback.textContent = "تذكّر: اسم إن منصوب، وخبرها مرفوع.";
    state.success = false;
  }
  checkBtn.disabled = !isAnswerComplete();
  nextBtn.disabled  = !state.success;
}

function next(){
  if(!state.success) return;
  state.idx = (state.idx+1) % ITEMS.length;
  Object.assign(state, {
    verb:null, mCase:null, kCase:null,
    mPick:null, kPick:null,
    mPicked:false, kPicked:false,
    success:false
  });
  refresh(true);
}

// أزرار الحروف الناسخة
document.querySelectorAll(".chip[data-verb]").forEach(b=>{
  b.onclick = ()=>{
    if(!state.mPicked || !state.kPicked) return; // لا يُسمح قبل اختيار المبتدأ والخبر
    document.querySelectorAll(".chip[data-verb]").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    state.verb = b.dataset.verb;
    refresh();
  };
});

twoStep.onchange = ()=>{ state.twoStep = twoStep.checked; refresh(); };
checkBtn.onclick = check;
nextBtn.onclick = next;

function refresh(resetFeedback){
  renderLive();
  renderForms();
  if(resetFeedback){ feedback.className="feedback hidden"; feedback.textContent=""; }
}

refresh(true);

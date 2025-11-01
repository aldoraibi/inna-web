/* InnaWaAkhawatuha Web (مطابق لنسخة كان وأخواتها بعد التعديل النحوي) */
const ITEMS = [
  { mub:{m:"الوَلَدُ",a:"الوَلَدَ",j:"الوَلَدِ"}, khb:{m:"ذكيٌّ",a:"ذكيًّا",j:"ذكيٍّ"} },
  { mub:{m:"الطالبةُ",a:"الطالبةَ",j:"الطالبةِ"}, khb:{m:"ناجحةٌ",a:"ناجحةً",j:"ناجحةٍ"} },
  { mub:{m:"الوطنُ",a:"الوطنَ",j:"الوطنِ"}, khb:{m:"عزيزٌ",a:"عزيزًا",j:"عزيزٍ"} },
  { mub:{m:"الجوُّ",a:"الجوَّ",j:"الجوِّ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"المعلِّمُ",a:"المعلِّمَ",j:"المعلِّمِ"}, khb:{m:"قدوةٌ",a:"قدوةً",j:"قدوةٍ"} },
  { mub:{m:"الطالبُ النشيطُ",a:"الطالبَ النشيطَ",j:"الطالبِ النشيطِ"}, khb:{m:"متفوّقٌ",a:"متفوّقًا",j:"متفوّقٍ"} },
  { mub:{m:"الطالبةُ المجتهدةُ",a:"الطالبةَ المجتهدةَ",j:"الطالبةِ المجتهدةِ"}, khb:{m:"ناجحةٌ",a:"ناجحةً",j:"ناجحةٍ"} },
  { mub:{m:"الحديقةُ الجميلةُ",a:"الحديقةَ الجميلةَ",j:"الحديقةِ الجميلةِ"}, khb:{m:"نظيفةٌ",a:"نظيفةً",j:"نظيفةٍ"} },
  { mub:{m:"القمرُ البديعُ",a:"القمرَ البديعَ",j:"القمرِ البديعِ"}, khb:{m:"مضيءٌ",a:"مضيئًا",j:"مضيءٍ"} }
];

const state = {
  idx: 0, verb: null, twoStep: true,
  mCase: null, kCase: null, mPick: null, kPick: null, success:false
};

const $ = s => document.querySelector(s);
const liveEl = $("#live");
const mubSec = $("#mubSection");
const khabSec = $("#khabSection");
const feedback = $("#feedback");
const checkBtn = $("#checkBtn");
const nextBtn = $("#nextBtn");
const twoStep = $("#twoStep");

function splitTokens(text){ return text.trim().split(/\s+/); }
function current(){ return ITEMS[state.idx]; }

function isFeminine(word){
  const w = word.normalize("NFKD").replace(/\p{M}/gu,"");
  return w.includes("ة") || w.endsWith("ات");
}

function conj(v,f){
  switch(v){
    case "إنَّ": return "إنَّ";
    case "أنَّ": return "أنَّ";
    case "كأنَّ": return "كأنَّ";
    case "لكنَّ": return "لكنَّ";
    case "ليتَ": return "ليتَ";
    case "لعلَّ": return "لعلَّ";
    default: return "";
  }
}

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

  liveEl.querySelectorAll("[data-m]").forEach(el=> el.onclick = ()=>{ state.mPick=+el.dataset.m; refresh(); });
  liveEl.querySelectorAll("[data-k]").forEach(el=> el.onclick = ()=>{ state.kPick=+el.dataset.k; refresh(); });

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
  const mTokens = splitTokens(form(current().mub, state.mCase ?? "m"));
  const kTokens = splitTokens(form(current().khb, state.kCase ?? "m"));
  const needMPick = mTokens.length>1, needKPick = kTokens.length>1;

  if(state.twoStep){
    if(needMPick && state.mPick==null){
      mubSec.innerHTML = `<div class="helper">اختر المبتدأ أولاً بالضغط على الكلمة الصحيحة في الجملة أعلاه.</div>`;
    }else{
      mubSec.innerHTML = renderFormsBlock("اختر صيغة اسم إنَّ الصحيحة", selectedMTokenForms(), "mCase");
      if(needKPick && state.kPick==null){
        khabSec.innerHTML = `<div class="helper">اختر الخبر بالضغط على الكلمة الصحيحة في الجملة.</div>`;
      }else{
        khabSec.innerHTML = renderFormsBlock("اختر صيغة خبر إنَّ الصحيحة", selectedKTokenForms(), "kCase");
      }
    }
  }else{
    mubSec.innerHTML = renderFormsBlock("اختر صيغة اسم إنَّ الصحيحة", selectedMTokenForms(), "mCase");
    khabSec.innerHTML = renderFormsBlock("اختر صيغة خبر إنَّ الصحيحة", selectedKTokenForms(), "kCase");
  }

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
  return state.verb && state.mCase && state.kCase;
}

function check(){
  if(!isAnswerComplete()) return;
  const okM = state.mCase==="a"; // اسم إن منصوب
  const okK = state.kCase==="m"; // خبر إن مرفوع

  if(okM && okK){
    feedback.className = "feedback ok";
    feedback.innerHTML = `أحسنت! ✅ بعد (${state.verb}): <span style="color:red">اسمها منصوب</span> و<span style="color:blue">خبرها مرفوع</span>.`;
    state.success = true;
  }else{
    feedback.className = "feedback bad";
    feedback.textContent = "تحقق من القاعدة: اسم إن منصوب، وخبرها مرفوع.";
    state.success = false;
  }
  checkBtn.disabled = !isAnswerComplete();
  nextBtn.disabled  = !state.success;
}

function next(){
  if(!state.success) return;
  state.idx = (state.idx+1) % ITEMS.length;
  state.verb = null;
  state.mCase = null;
  state.kCase = null;
  state.mPick = null;
  state.kPick = null;
  state.success = false;
  refresh(true);
}

document.querySelectorAll(".chip[data-verb]").forEach(b=>{
  b.onclick = ()=>{
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

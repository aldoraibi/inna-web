/* إنَّ وأخواتها — تدرّج: اختيار المبتدأ/الخبر → الأداة → صيغ الإعراب */
const VERBS = ["إنَّ","ليتَ","لعلَّ","كأنَّ"]; // نطاق التمرين المطلوب

// الحالة العامة
const S = {
  i: 0,                   // فهرس السؤال
  verb: null,             // الأداة المختارة
  mCase: null, kCase: null, // m=مرفوع a=منصوب j=مجرور
  mPick: null, kPick: null, // فهارس الكلمات (لو كان المركب أكثر من كلمة)
  ok: false
};

// عناصر DOM
const liveEl   = document.getElementById("live");
const mubForms = document.getElementById("mubForms");
const khabForms= document.getElementById("khabForms");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const nextBtn  = document.getElementById("nextBtn");
const stepHint = document.getElementById("stepHint");
const qnum     = document.getElementById("qnum");
const qtotal   = document.getElementById("qtotal");

// عدّاد زوار بسيط (محلي)
(function(){
  try{
    const KEY='inna_step_visitors_v1';
    let n = localStorage.getItem(KEY);
    if(!n){ n = String(Math.floor(Math.random()*100)+1); localStorage.setItem(KEY, n); }
    document.getElementById('visitors').textContent = n;
  }catch(e){ document.getElementById('visitors').textContent = '—'; }
})();

// أدوات مساعدة
const $ = s=>document.querySelector(s);
const ITEMS = (typeof INNA_NOMINALS!=="undefined") ? INNA_NOMINALS.slice() : [];
shuffle(ITEMS);
qtotal.textContent = ITEMS.length || 0;

function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a; }
function splitTokens(t){ return t.trim().split(/\s+/); }
function cur(){ return ITEMS[S.i]; }
function form(forms, code){ return forms[code ?? "m"]; }

// إذا تعددت الكلمات في المبتدأ/الخبر نحتاج اختيار أي كلمة نلوّنها ونبني عليها صيغ العرض
function tokenForm(forms, idx){
  const mT = splitTokens(forms.m), aT = splitTokens(forms.a), jT = splitTokens(forms.j);
  const i  = Math.min(idx ?? 0, Math.max(mT.length,1)-1);
  return { m: mT[i] ?? forms.m, a: aT[i] ?? forms.a, j: jT[i] ?? forms.j };
}

function renderLive(){
  const M = cur().mub, K = cur().khb;
  const mBase = form(M, S.mCase ?? "m");
  const kBase = form(K, S.kCase ?? "m");
  const mTokens = splitTokens(mBase), kTokens = splitTokens(kBase);

  const parts = [];
  // الأداة (بعد الاختيار)
  if(S.verb){ parts.push(`<span class="token" style="border:1px dashed #ddd">${S.verb}</span>`); }

  mTokens.forEach((tok,i)=>{
    const sel = (S.mPick===i) ? "token sel-m" : "token";
    parts.push(`<span class="${sel}" data-m="${i}">${tok}</span>`);
  });
  kTokens.forEach((tok,i)=>{
    const sel = (S.kPick===i) ? "token sel-k" : "token";
    parts.push(`<span class="${sel}" data-k="${i}">${tok}</span>`);
  });
  liveEl.innerHTML = parts.join(" ");

  // التفاعلات
  liveEl.querySelectorAll("[data-m]").forEach(el=> el.onclick=()=>{ S.mPick=+el.dataset.m; refresh(false); });
  liveEl.querySelectorAll("[data-k]").forEach(el=> el.onclick=()=>{ S.kPick=+el.dataset.k; refresh(false); });
}

function renderVerbChips(){
  const box = document.getElementById("verbChips");
  box.querySelectorAll(".chip").forEach(ch=>{
    if(ch.dataset.verb===S.verb) ch.classList.add("active"); else ch.classList.remove("active");
    ch.onclick = ()=>{ S.verb = ch.dataset.verb; refresh(false); };
  });
}

function renderForms(){
  const needMPick = splitTokens(form(cur().mub, S.mCase ?? "m")).length>1 && (S.mPick==null);
  const needKPick = splitTokens(form(cur().khb, S.kCase ?? "m")).length>1 && (S.kPick==null);

  // اسم إنَّ — يجب أن يكون "منصوب" (a)
  mubForms.innerHTML = needMPick ? `<div class="helper">اختر المبتدأ من الجملة أولًا بالضغط على الكلمة الصحيحة أعلاه.</div>`
    : renderBlock("mCase", tokenForm(cur().mub, S.mPick), S.mCase);

  // خبر إنَّ — يجب أن يكون "مرفوع" (m)
  khabForms.innerHTML = needKPick ? `<div class="helper">اختر الخبر من الجملة أولًا بالضغط على الكلمة الصحيحة أعلاه.</div>`
    : renderBlock("kCase", tokenForm(cur().khb, S.kPick), S.kCase);

  // أربط الأزرار
  mubForms.querySelectorAll("[data-case]").forEach(b=> b.onclick=()=>{ S.mCase = b.dataset.case; refresh(false); });
  khabForms.querySelectorAll("[data-case]").forEach(b=> b.onclick=()=>{ S.kCase = b.dataset.case; refresh(false); });
}

function renderBlock(bindKey, tf, selected){
  const lab = { m:"مرفوع", a:"منصوب", j:"مجرور" };
  const chip = (txt,code)=>`<button class="form-chip ${selected===code?'sel':''}" data-case="${code}">${txt}</button>`;
  return `
    <div class="chips">
      ${chip(tf.m+" — "+lab.m,"m")}
      ${chip(tf.a+" — "+lab.a,"a")}
      ${chip(tf.j+" — "+lab.j,"j")}
    </div>
    <div class="helper">اختر الحالة الإعرابية الصحيحة.</div>
  `;
}

function readyToCheck(){
  const havePicks = (S.mPick!=null) && (S.kPick!=null);
  const haveVerb  = !!S.verb;
  const haveForms = !!S.mCase && !!S.kCase;
  return havePicks && haveVerb && haveForms;
}

function check(){
  if(!readyToCheck()) return;

  // شروط الصحة:
  // اسم إنَّ = منصوب (a) ، خبر إنَّ = مرفوع (m) ، والاختيار كان أول كلمة في كل مركّب
  const mOK = (S.mCase==="a");
  const kOK = (S.kCase==="m");

  const mNeedPick = splitTokens(form(cur().mub, S.mCase ?? "m")).length>1;
  const kNeedPick = splitTokens(form(cur().khb, S.kCase ?? "m")).length>1;
  const mPickOK = !mNeedPick || S.mPick===0;
  const kPickOK = !kNeedPick || S.kPick===0;

  const allOK = mOK && kOK && mPickOK && kPickOK;

  if(allOK){
    S.ok = true;
    feedback.className="feedback ok";
    feedback.style.display='block';
    feedback.textContent = "أحسنت! مع إنَّ وأخواتها: اسمها منصوب وخبرها مرفوع.";

    // أعِد بناء الجملة مُلوَّنة
    const M = tokenForm(cur().mub, 0); // نُبرز أول كلمة من المركب
    const K = tokenForm(cur().khb, 0);
    const red  = `<span class="name-red">${M.a}</span>`; // اسم إن منصوب
    const blue = `<span class="khabar-blue">${K.m}</span>`; // خبر إن مرفوع
    liveEl.innerHTML = `${S.verb?`<span class="token" style="border:1px dashed #ddd">${S.verb}</span>`:""} ${red} ${blue}`;

    nextBtn.disabled=false;
  }else{
    S.ok = false;
    const tips=[];
    if(!mOK) tips.push("اسم إنَّ يجب أن يكون منصوبًا");
    if(!kOK) tips.push("خبر إنَّ يجب أن يكون مرفوعًا");
    if(!mPickOK) tips.push("المبتدأ هو أوّل كلمة في التركيب الاسمي");
    if(!kPickOK) tips.push("الخبر هو أوّل كلمة في التركيب الخبري");
    feedback.className="feedback bad";
    feedback.style.display='block';
    feedback.textContent = "تحقق مرة أخرى: " + tips.join("، ") + ".";
    nextBtn.disabled=true;
  }
}

function next(){
  if(!S.ok) return;
  S.i = (S.i+1) % ITEMS.length;
  S.verb=null; S.mCase=null; S.kCase=null;
  S.mPick=null; S.kPick=null; S.ok=false;
  refresh(true);
}

function refresh(resetFb){
  if(!ITEMS.length){
    liveEl.textContent = "لا توجد أسئلة في البنك.";
    return;
  }
  qnum.textContent = S.i+1;
  renderLive();
  renderVerbChips();
  renderForms();

  const stage = (!S.mPick||!S.kPick) ? "① عيِّن المبتدأ والخبر"
              : (!S.verb) ? "② اختر الأداة الناسخة"
              : (!S.mCase||!S.kCase) ? "③ اختر صيغة اسم إنَّ والخبر"
              : "جاهز للتحقق";
  stepHint.textContent = stage;

  if(resetFb){ feedback.style.display='none'; }
}

document.getElementById("checkBtn").onclick = check;
document.getElementById("nextBtn").onclick  = next;

// تشغيل
refresh(true);

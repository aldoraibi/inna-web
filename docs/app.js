// عداد زوار حقيقي بسيط
const counterKey = "inna-visitors";
let count = localStorage.getItem(counterKey) || 0;
count++;
localStorage.setItem(counterKey, count);
document.getElementById("count").textContent = count;

const $ = s => document.querySelector(s);
const liveEl = $("#live");
const feedback = $("#feedback");
const checkBtn = $("#checkBtn");
const nextBtn = $("#nextBtn");

let idx = 0, verb = null, mPick=null, kPick=null, mCase=null, kCase=null, success=false;

function render() {
  const q = ITEMS[idx];
  let parts = [];

  q.mub.split(" ").forEach((tok,i)=>{
    const sel = mPick===i?"token sel-m":"token";
    parts.push(`<span class="${sel}" data-m="${i}">${tok}</span>`);
  });
  q.khb.split(" ").forEach((tok,i)=>{
    const sel = kPick===i?"token sel-k":"token";
    parts.push(`<span class="${sel}" data-k="${i}">${tok}</span>`);
  });
  liveEl.innerHTML = parts.join(" ");
  liveEl.querySelectorAll("[data-m]").forEach(el=>el.onclick=()=>{mPick=+el.dataset.m;render();});
  liveEl.querySelectorAll("[data-k]").forEach(el=>el.onclick=()=>{kPick=+el.dataset.k;render();});
}

function check(){
  if(mPick==null||kPick==null||!verb||!mCase||!kCase)return;
  const ok = mCase==="a" && kCase==="n";
  feedback.className="feedback "+(ok?"ok":"bad");
  feedback.innerHTML = ok ? "أحسنت! ✅ اسم "+verb+" <span style='color:red'>"+ITEMS[idx].mub+"</span> وخبرها <span style='color:blue'>"+ITEMS[idx].khb+"</span>" : "تحقق من إجابتك.";
  success=ok;
  if(ok) setTimeout(next,2000);
}

function next(){
  idx=(idx+1)%ITEMS.length;
  verb=null;mPick=kPick=mCase=kCase=null;success=false;
  feedback.textContent="";
  render();
}

document.querySelectorAll(".chip[data-verb]").forEach(b=>{
  b.onclick=()=>{document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");verb=b.dataset.verb;};
});
checkBtn.onclick=check;
nextBtn.onclick=next;

render();

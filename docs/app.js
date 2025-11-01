// عداد الزوار المحلي
const key = "inna-visitors";
let count = localStorage.getItem(key) || 0;
count++;
localStorage.setItem(key, count);
document.getElementById("count").textContent = count;

const sentenceEl = document.getElementById("sentence");
const choicesEl = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const verbs = document.querySelectorAll(".verb");
const checkBtn = document.getElementById("check");
const nextBtn = document.getElementById("next");

let current = 0;
let chosenVerb = null;
let correctChoice = null;
let selectedChoice = null;

function renderSentence() {
  const s = SENTENCES[current].base;
  sentenceEl.innerHTML = s;
  feedback.textContent = "";
  choicesEl.innerHTML = "";
  verbs.forEach(v => v.classList.remove("active"));
  chosenVerb = null;
  selectedChoice = null;
}

verbs.forEach(v => {
  v.addEventListener("click", () => {
    verbs.forEach(btn => btn.classList.remove("active"));
    v.classList.add("active");
    chosenVerb = v.textContent;
    buildChoices();
  });
});

function buildChoices() {
  const s = SENTENCES[current].base.split(" ");
  const mub = s[0].replace("ُ", "َ");
  const khb = s[1];
  const correct = `${chosenVerb} ${mub} ${khb}`;
  const wrong1 = `${chosenVerb} ${s[0]} ${khb}`;
  const wrong2 = `${chosenVerb} ${mub} ${khb.replace("ٌ", "ًا")}`;
  const arr = [correct, wrong1, wrong2].sort(() => Math.random() - 0.5);
  correctChoice = correct;
  choicesEl.innerHTML = "";
  arr.forEach(c => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = c;
    b.onclick = () => {
      document.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
      b.classList.add("selected");
      selectedChoice = c;
    };
    choicesEl.appendChild(b);
  });
}

checkBtn.onclick = () => {
  if (!selectedChoice) return;
  document.querySelectorAll(".choice").forEach(x => x.disabled = true);
  if (selectedChoice === correctChoice) {
    feedback.innerHTML = `أحسنت! ✅ <span style="color:red">اسم ${chosenVerb}</span> منصوب و<span style="color:blue">خبرها مرفوع</span>`;
  } else {
    feedback.innerHTML = "تحقق من إجابتك ❌";
  }
};

nextBtn.onclick = () => {
  current = (current + 1) % SENTENCES.length;
  renderSentence();
};

renderSentence();

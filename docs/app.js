// ==================== عداد الزوار الحقيقي ====================
const counterUrl = "https://api.countapi.xyz/hit/inna-web/visitors";

async function updateVisitorCount() {
  try {
    const response = await fetch(counterUrl);
    const data = await response.json();
    document.getElementById("visitor-count").textContent = data.value;
  } catch {
    document.getElementById("visitor-count").textContent = "—";
  }
}
updateVisitorCount();

// ==================== المتغيرات العامة ====================
let currentQuestionIndex = 0;
let score = 0;
let currentQuestion = {};
let selectedSubject = "";
let selectedPredicate = "";
let selectedParticle = "";
let selectedInnaName = "";
let selectedInnaPredicate = "";

// ==================== عناصر الصفحة ====================
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const checkBtn = document.getElementById("checkBtn");
const qnum = document.getElementById("qnum");
const qtotal = document.getElementById("qtotal");
const sentenceBox = document.getElementById("sentence");
const mubForms = document.getElementById("mubForms");
const khabForms = document.getElementById("khabForms");

// ==================== بدء التشغيل ====================
window.addEventListener("DOMContentLoaded", startApp);

function startApp() {
  if (!Array.isArray(bank100Inna) || bank100Inna.length === 0) {
    sentenceBox.textContent = "⚠️ لا توجد جمل متاحة في البنك.";
    return;
  }
  qtotal.textContent = bank100Inna.length;
  loadQuestion();
}

// ==================== تحميل السؤال ====================
function loadQuestion() {
  currentQuestion = bank100Inna[currentQuestionIndex];
  qnum.textContent = currentQuestionIndex + 1;
  feedback.style.display = "none";
  nextBtn.disabled = true;
  checkBtn.disabled = false;

  sentenceBox.textContent = currentQuestion.sentence;

  renderVerbChoices();
  mubForms.innerHTML = "";
  khabForms.innerHTML = "";
  selectedSubject = selectedPredicate = selectedParticle = "";
  selectedInnaName = selectedInnaPredicate = "";
}

// ==================== عرض الأداة الناسخة ====================
function renderVerbChoices() {
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.remove("active");
    chip.onclick = () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      selectedParticle = chip.dataset.verb;
      renderInnaForms();
    };
  });
}

// ==================== عرض صيغ اسم وخبر إن ====================
function renderInnaForms() {
  const nameChoices = currentQuestion.innaNameChoices || [];
  const predChoices = currentQuestion.innaPredicateChoices || [];

  mubForms.innerHTML = nameChoices.map(
    c => `<div class="form-chip" data-val="${c}">${c}</div>`
  ).join("");

  khabForms.innerHTML = predChoices.map(
    c => `<div class="form-chip" data-val="${c}">${c}</div>`
  ).join("");

  document.querySelectorAll("#mubForms .form-chip").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#mubForms .form-chip").forEach(b => b.classList.remove("sel"));
      btn.classList.add("sel");
      selectedInnaName = btn.dataset.val;
    };
  });

  document.querySelectorAll("#khabForms .form-chip").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#khabForms .form-chip").forEach(b => b.classList.remove("sel"));
      btn.classList.add("sel");
      selectedInnaPredicate = btn.dataset.val;
    };
  });
}

// ==================== التحقق من الإجابة ====================
checkBtn.addEventListener("click", () => {
  if (!selectedParticle || !selectedInnaName || !selectedInnaPredicate) {
    feedback.style.display = "block";
    feedback.className = "feedback bad";
    feedback.textContent = "يرجى اختيار جميع العناصر قبل التحقق.";
    return;
  }

  const correct =
    selectedParticle === currentQuestion.correctParticle &&
    selectedInnaName === currentQuestion.correctInnaName &&
    selectedInnaPredicate === currentQuestion.correctInnaPredicate;

  feedback.style.display = "block";
  if (correct) {
    feedback.className = "feedback ok";
    feedback.innerHTML = `
      <p>أحسنت ✅</p>
      <p><span class="name-red">${currentQuestion.correctInnaName}</span>
      <span class="khabar-blue">${currentQuestion.correctInnaPredicate}</span></p>`;
    score++;
  } else {
    feedback.className = "feedback bad";
    feedback.textContent = "❌ إجابة غير صحيحة، حاول مرة أخرى.";
  }

  nextBtn.disabled = false;
  checkBtn.disabled = true;
});

// ==================== السؤال التالي ====================
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < bank100Inna.length) {
    loadQuestion();
  } else {
    endGame();
  }
});

// ==================== نهاية اللعبة ====================
function endGame() {
  sentenceBox.textContent = `🏁 انتهى التدريب! نتيجتك ${score} من ${bank100Inna.length}.`;
  feedback.style.display = "none";
  nextBtn.disabled = true;
  checkBtn.disabled = true;
}

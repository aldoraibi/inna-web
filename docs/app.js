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
let currentStep = 1;
let currentQuestion = {};
let selectedSubject = "";
let selectedPredicate = "";
let selectedParticle = "";
let selectedInnaName = "";
let selectedInnaPredicate = "";

const startBtn = document.getElementById("start-btn");
const questionArea = document.getElementById("question-area");
const intro = document.getElementById("intro");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultArea = document.getElementById("result-area");
const scoreDisplay = document.getElementById("score");

// ==================== البدء ====================
startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);

function startGame() {
  score = 0;
  currentQuestionIndex = 0;
  intro.classList.add("hidden");
  questionArea.classList.remove("hidden");
  resultArea.classList.add("hidden");
  showQuestion();
}

// ==================== عرض السؤال ====================
function showQuestion() {
  feedback.classList.add("hidden");
  nextBtn.classList.add("hidden");
  currentStep = 1;

  currentQuestion = bank100Inna[currentQuestionIndex];
  document.getElementById("sentence").textContent = currentQuestion.sentence;

  showStep1();
}

// =========== الخطوة 1: المبتدأ ===========
function showStep1() {
  showStep("step1");
  renderChoices("choices-subject", currentQuestion.subjectChoices, (choice) => {
    selectedSubject = choice;
    showStep2();
  });
}

// =========== الخطوة 2: الخبر ===========
function showStep2() {
  showStep("step2");
  renderChoices("choices-predicate", currentQuestion.predicateChoices, (choice) => {
    selectedPredicate = choice;
    showStep3();
  });
}

// =========== الخطوة 3: الحرف الناسخ ===========
function showStep3() {
  showStep("step3");
  renderChoices("choices-particle", currentQuestion.particleChoices, (choice) => {
    selectedParticle = choice;
    showStep4();
  });
}

// =========== الخطوة 4: اسم إنَّ ===========
function showStep4() {
  showStep("step4");
  renderChoices("choices-inna-name", currentQuestion.innaNameChoices, (choice) => {
    selectedInnaName = choice;
    showStep5();
  });
}

// =========== الخطوة 5: خبر إنَّ ===========
function showStep5() {
  showStep("step5");
  renderChoices("choices-inna-predicate", currentQuestion.innaPredicateChoices, (choice) => {
    selectedInnaPredicate = choice;
    checkAnswer();
  });
}

// ==================== عرض الخطوة المحددة ====================
function showStep(stepId) {
  document.querySelectorAll(".step").forEach(s => s.classList.add("hidden"));
  document.getElementById(stepId).classList.remove("hidden");
}

// ==================== عرض الخيارات ====================
function renderChoices(containerId, choices, callback) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.textContent = choice;
    btn.addEventListener("click", () => {
      container.querySelectorAll(".choice").forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
      callback(choice);
    });
    container.appendChild(btn);
  });
}

// ==================== التحقق من الإجابة ====================
function checkAnswer() {
  const correct =
    selectedSubject === currentQuestion.correctSubject &&
    selectedPredicate === currentQuestion.correctPredicate &&
    selectedParticle === currentQuestion.correctParticle &&
    selectedInnaName === currentQuestion.correctInnaName &&
    selectedInnaPredicate === currentQuestion.correctInnaPredicate;

  feedback.classList.remove("hidden");
  if (correct) {
    feedback.innerHTML = `
      <p style="color:green;font-weight:bold;">ممتاز! ✅</p>
      <p><span style="color:red;">${currentQuestion.correctInnaName}</span> 
      <span style="color:blue;">${currentQuestion.correctInnaPredicate}</span></p>`;
    score++;
  } else {
    feedback.innerHTML = `<p style="color:red;font-weight:bold;">إجابة غير صحيحة ❌</p>`;
  }

  nextBtn.classList.remove("hidden");
}

// ==================== السؤال التالي ====================
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < bank100Inna.length) {
    showQuestion();
  } else {
    endGame();
  }
}

// ==================== نهاية الجولة ====================
function endGame() {
  questionArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
  scoreDisplay.textContent = `نتيجتك: ${score} من ${bank100Inna.length}`;
}

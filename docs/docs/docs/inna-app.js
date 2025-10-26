let current = 0;
let score = 0;

function loadQuestion(){
  const q = innaData[current];
  document.getElementById("question").textContent = q.question;
  const cDiv = document.getElementById("choices");
  cDiv.innerHTML = "";
  q.options.forEach(opt=>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = ()=>checkAnswer(opt);
    cDiv.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
}

function checkAnswer(ans){
  const fb = document.getElementById("feedback");
  if(ans === innaData[current].correct){
    fb.textContent = "إجابة صحيحة! 🌟";
    fb.className = "feedback correct";
    score++;
  }else{
    fb.textContent = "إجابة خاطئة ❌";
    fb.className = "feedback wrong";
  }
  document.querySelectorAll("#choices button").forEach(b=>b.disabled=true);
}

document.getElementById("next").onclick = ()=>{
  current++;
  if(current >= innaData.length){
    document.getElementById("question").textContent = "انتهى التدريب! مجموعك: "+score+" / "+innaData.length;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("next").disabled = true;
    return;
  }
  loadQuestion();
};

loadQuestion();

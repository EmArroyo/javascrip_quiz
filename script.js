function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question-card-1").style.display = "inline-block";
  document.getElementById("question-card-2").style.display = "none";
  document.getElementById("question-card-3").style.display = "none";
  document.getElementById("question-card-4").style.display = "none";
  document.getElementById("question-card-5").style.display = "none";
  document.getElementById("results-card").style.display = "none";
}

function resultsCalc() {
  const rb1 = document.querySelectorAll('input[name="question1"]');
  console.log(rb1);
  let q1Value;
  for (const rb of rb1) {
    if (rb.checked) {
      q1Value = rb.value;
      break;
    }
  }

  const rb2 = document.querySelectorAll('input[name="question2"]');
  console.log(rb2);
  let q2Value;
  for (const rb of rb2) {
    if (rb.checked) {
      q2Value = rb.value;
      break;
    }
  }

  const rb3 = document.querySelectorAll('input[name="question3"]');
  console.log(rb3);
  let q3Value;
  for (const rb of rb3) {
    if (rb.checked) {
      q3Value = rb.value;
      break;
    }
  }

  const rb4 = document.querySelectorAll('input[name="question4"]');
  console.log(rb4);
  let q4Value;
  for (const rb of rb4) {
    if (rb.checked) {
      q4Value = rb.value;
      break;
    }
  }

  const rb5 = document.querySelectorAll('input[name="question5"]');
  console.log(rb5);
  let q5Value;
  for (const rb of rb5) {
    if (rb.checked) {
      q5Value = rb.value;
      break;
    }
  }

  console.log(q1Value, q2Value, q3Value, q4Value, q5Value);
  let total =
    Number(q1Value) +
    Number(q2Value) +
    Number(q3Value) +
    Number(q4Value) +
    Number(q5Value);
  document.getElementById("total").innerHTML = total;
}

function nextQuestion1() {
  document.getElementById("question-card-1").style.display = "none";
  document.getElementById("question-card-2").style.display = "inline-block";
  document.getElementById("question-card-3").style.display = "none";
  document.getElementById("question-card-4").style.display = "none";
  document.getElementById("question-card-5").style.display = "none";
  document.getElementById("results-card").style.display = "none";
}

function nextQuestion2() {
  document.getElementById("question-card-2").style.display = "none";
  document.getElementById("question-card-3").style.display = "inline-block";
  document.getElementById("question-card-4").style.display = "none";
  document.getElementById("question-card-5").style.display = "none";
  document.getElementById("results-card").style.display = "none";
}

function nextQuestion3() {
  document.getElementById("question-card-3").style.display = "none";
  document.getElementById("question-card-4").style.display = "inline-block";
  document.getElementById("question-card-5").style.display = "none";
  document.getElementById("results-card").style.display = "none";
}

function nextQuestion4() {
  document.getElementById("question-card-4").style.display = "none";
  document.getElementById("question-card-5").style.display = "inline-block";
  document.getElementById("results-card").style.display = "none";
}

function nextQuestion5() {
  resultsCalc();
  document.getElementById("question-card-5").style.display = "none";
  document.getElementById("results-card").style.display = "inline-block";
}

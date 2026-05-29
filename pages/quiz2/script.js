const quizForm = document.getElementById("quizForm");
const questionBlock = document.getElementById("questionBlock");
const result = document.getElementById("result");

let quizData = [];

async function loadQuiz() {
  const response = await fetch("quiz.json");
  quizData = await response.json();

  renderQuiz();
}

function renderQuiz() {
  let quizHtml = "";

  quizData.forEach((quiz, index) => {
    const inputType = quiz.type === "single" ? "radio" : "checkbox";

    quizHtml += `
      <div class="question">
        <h3>${index + 1}. ${quiz.question}</h3>

        ${quiz.options
          .map(
            (option, i) => `
            <label class="option">
              <input
                type="${inputType}"
                name="question${index}"
                value="${i}"
              />
              ${option}
            </label>
            <br/>
          `,
          )
          .join("")}

        <div id="feedback${index}" class="feedback"></div>
      </div>
      <hr/>
    `;
  });

  questionBlock.innerHTML = quizHtml;
}

function calculateScore() {
  let score = 0;

  quizData.forEach((quiz, index) => {
    const selectedOptions = document.querySelectorAll(
      `input[name="question${index}"]:checked`,
    );

    const selectedAnswers = [...selectedOptions]
      .map((option) => Number(option.value))
      .sort((a, b) => a - b);

    const correctAnswers = [...quiz.correct].sort((a, b) => a - b);

    const feedback = document.getElementById(`feedback${index}`);

    const isCorrect =
      JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers);

    if (isCorrect) {
      score++;

      feedback.innerHTML = `
        <p style="color: green;">
          ✅ Correct Answer
        </p>
      `;
    } else {
      const userSelectedText = selectedAnswers.length
        ? selectedAnswers.map((i) => quiz.options[i]).join(", ")
        : "No Answer";

      const correctText = correctAnswers.map((i) => quiz.options[i]).join(", ");

      feedback.innerHTML = `
        <p style="color: red;">
          Wrong Answer
        </p>

        <p>
          <strong>Your Answer:</strong>
          ${userSelectedText}
        </p>

        <p>
          <strong>Correct Answer:</strong>
          ${correctText}
        </p>
      `;
    }
  });

  return score;
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const score = calculateScore();

  result.innerHTML = `
    <h2>
      Your Score is ${score} out of ${quizData.length}
    </h2>
  `;
})
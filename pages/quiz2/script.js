const quizData = [
  {
    question: "Which is a programming language?",
    type: "single",
    options: ["HTML", "CSS", "JavaScript", "JSON"],
    correct: [2],
  },
  {
    question: "Which are frontend technologies?",
    type: "multi",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correct: [0, 1, 2],
  },
  {
    question: "Which are JavaScript frameworks?",
    type: "multi",
    options: ["React", "Angular", "Vue", "Django"],
    correct: [0, 1, 2],
  },
  {
    question: "Which tag is used for JavaScript?",
    type: "single",
    options: [
      "&lt;script&gt;",
      "&lt;js&gt;",
      "&lt;javascript&gt;",
      "&lt;code&gt;",
    ],
    correct: [0],
  },
];

const quizForm = document.getElementById("quizForm");
const questionBlock = document.getElementById("questionBlock");
const result = document.getElementById("result");

function renderQuiz() {
  let quizHtml = "";

  quizData.forEach((quiz, index) => {
    const inputType = quiz.type === "single" ? "radio" : "checkbox";

    quizHtml += `
      <div>${index + 1}. ${quiz.question}</div>

      ${quiz.options
        .map(
          (option, i) => `
        <label class="option">
          <input type="${inputType}" name="question${index}" value="${i}"/>  
          ${option}
        </label>
        `,
        )
        .join("")}
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

    const isCorrect =
      JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers);

    if (isCorrect) {
      score++;
    }
  });
  return score;
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const score = calculateScore();

  result.innerHTML = `Your Score is ${score} out of ${quizData.length}`;
});

renderQuiz();
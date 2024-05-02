const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JS",
    d: "PHP",
    correct: "a",
  },
  {
    que: "In what year was JS launched?",
    a: "1992",
    b: "1993",
    c: "1994",
    d: "1995",
    correct: "d",
  },
  {
    que: "Which one of the following is a 4-letter word?",
    a: "HTML",
    b: "CSS",
    c: "JS",
    d: "PHP",
    correct: "a",
  },
];

let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;

let quesBox = document.getElementById("question");
let optionInputs = document.querySelectorAll("Input");
// console.log(index, total);
const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = ` ${index + 1 + ")"} ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      console.log("yes");
      answer = input.value;
    } else {
      console.log("No");
    }
  });
  return answer;
};

// Working fine
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

// Working fine
const endQuiz = () => {
  document.querySelector(".box").innerHTML = `
  <div style="text-align:center">
  <h3> Thank you for participating </h3>
  <br>
  <h2> ${right} / ${total} are correct </h2>
  `;
};

loadQuestion();

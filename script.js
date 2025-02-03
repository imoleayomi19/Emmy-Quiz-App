const start_btn = document.querySelector(".start-btn");
const game_rules = document.querySelector(".game-rules");
const exit_btn = document.querySelector(".exit-btn");
const cont_btn = document.querySelector(".cont-btn");
const que_container = document.querySelector(".que-container");
const que_btn = document.querySelector(".answer");
const next_btn = document.querySelector(".next-btn");
const list_option = document.querySelector(".answer");
const timeOut = document.querySelector(".time-out");
const game_result = document.querySelector(".complete");

start_btn.addEventListener("click", () => {
  game_rules.classList.add("activeRules");
});

exit_btn.addEventListener("click", () => {
  game_rules.classList.remove("activeRules");
});

cont_btn.addEventListener("click", () => {
  game_rules.classList.remove("activeRules");
  que_container.classList.add("activeQus");
  showQuestion(0);
  startTimer(10);
});

que_btn.addEventListener("click", () => {
  next_btn.classList.add("activeNext");
});

let que_count = 0;
let counter;
let timeValue = 10;
let userScore = 0;

const next_btn1 = que_container.querySelector(".next-btn");
const result = document.querySelector(".complete");
const restart_game = result.querySelector(".restart");
const quit_game = result.querySelector(".quit");

restart_game.onclick = () => {
  result.classList.remove("activeResult");
  que_container.classList.add("activeQus");
  game_result.classList.remove("activeResult");
  game_rules.classList.remove("activeRules");

  // Reset values
  que_count = 0;
  timeValue = 10;
  userScore = 0;
  showQuestion(que_count);
  clearInterval(counter);
  startTimer(timeValue);
};

quit_game.onclick = () => {
  // game_rules.classList.add("activeRules");
  // que_container.classList.add("activeQus");
  game_result.classList.remove("activeResult");

  window.location.reload();
};
next_btn1.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    showQuestion(que_count);
    clearInterval(counter);
    startTimer(timeValue);
  } else {
    console.log("Questions Completed");
    showResult();
  }
};
function showQuestion(index) {
  const question = document.querySelector(".question");
  let que_tag =
    `<span>` +
    questions[index].numb +
    ". " +
    questions[index].question +
    `</span>`;
  let option_tag =
    `<button class="btn">` +
    questions[index].options[0] +
    `</button>` +
    `<button class="btn">` +
    questions[index].options[1] +
    `</button>` +
    `<button class="btn">` +
    questions[index].options[2] +
    `</button>` +
    `<button class="btn">` +
    questions[index].options[3] +
    `</button>`;
  question.innerHTML = que_tag;
  list_option.innerHTML = option_tag;
  const option = list_option.querySelectorAll(".btn");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  clearInterval(counter);
  let userAns = answer.textContent;
  let allOptions = list_option.children.length;
  let correctAns = questions[que_count].answer;
  if (userAns == correctAns) {
    userScore += 1;
    console.log(userScore);
    answer.classList.add("correct");
    console.log("Correct");
  } else {
    answer.classList.add("incorrect");
    console.log("Answer is wrong");

    for (let i = 0; i < allOptions.length; i++) {
      if (list_option.children[i].textContent == correctAns) {
        list_option.children[i].setAttribute("class", "option correct");
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    list_option.children[i].classList.add("disable");
  }
}

function showResult() {
  game_rules.classList.remove("activeRules");
  que_container.classList.remove("activeQus");
  game_result.classList.add("activeResult");
  const scoreText = game_result.querySelector(".score-text");
  if (userScore > 3) {
    let scoreTag =
      `<span
          >congrats! You only score
          <p>` +
      userScore +
      `</p>
          out of
          <p>` +
      questions.length +
      `</p></span
        >`;
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag =
      `<span
          >nice! You only score
          <p>` +
      userScore +
      `</p>
          out of
          <p>` +
      questions.length +
      `</p></span
        >`;
    scoreText.innerHTML = scoreTag;
  } else userScore > 3;
  {
    let scoreTag =
      `<span
          >sorry! You only score
          <p>` +
      userScore +
      `</p>
          out of
          <p>` +
      questions.length +
      `</p></span
        >`;
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeOut.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeOut.textContent;
      timeOut.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeOut.textContent = "00";
    }
  }
}

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.textContent;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Камень";
  }

  if (randomNumber === 2) {
    computerChoice = "Ножницы";
  }

  if (randomNumber === 3) {
    computerChoice = "Бумага";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Ничья!";
  }

  if (computerChoice === "Камень" && userChoice === "Бумага") {
    result = "Ты выиграл!";
  }

  if (computerChoice === "Камень" && userChoice === "Ножницы") {
    result = "Ты проиграл!";
  }

  if (computerChoice === "Бумага" && userChoice === "Камень") {
    result = "Ты проиграл!";
  }

  if (computerChoice === "Бумага" && userChoice === "Ножницы") {
    result = "Ты выиграл!";
  }

  if (computerChoice === "Ножницы" && userChoice === "Камень") {
    result = "Ты выиграл!";
  }

  if (computerChoice === "Ножницы" && userChoice === "Бумага") {
    result = "Ты проиграл!";
  }
  resultDisplay.innerHTML = result;
}

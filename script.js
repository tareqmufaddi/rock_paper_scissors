

const resultDiv = document.getElementById("resultDiv");
const score = document.getElementById("score");
const final = document.getElementById("finalScore")
const buttons = document.querySelectorAll("#btn");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let array = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * array.length);
  let choice = array[randomIndex];
  return choice;
}

function checkScore() {
  if (humanScore === 5) {
    finalScore.textContent = "You Win this Game!";
    reset()
  } else if (computerScore === 5) {
    finalScore.textContent = "Ouch !! You lost this game!"
    reset()
  }
}

function reset() {
  humanScore = 0
  computerScore = 0
  resultDiv.textContent = ""
  score.textContent = ""
}

function checkScoreReset () {
  if (finalScore.textContent != "") {
    finalScore.textContent = ""
  }
}

function playRound(humanSelection, computerChoice) {
  humanChoice = humanSelection.toLowerCase();
  computerChoice = getComputerChoice().toLowerCase();
      if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissor" && computerChoice === "rock")) {
        resultDiv.textContent = "It's a draw!";
        score.textContent = `Your Score is ${humanScore} and the computer score is ${computerScore}`
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        resultDiv.textContent = "You Lose ! Paper Beats Rock";
        computerScore++;
        score.textContent = `Your Score is ${humanScore} and the computer score is ${computerScore}`
        checkScore()
      } else if (humanChoice === "rock" && computerChoice === "scissor") {
        resultDiv.textContent = "You Win ! Rock beats Scissor";
        humanScore++;
        score.textContent = `Your Score is ${humanScore} and the computer score is ${computerScore}`
        checkScore()
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultDiv.textContent = "You Win ! Paper Beats Rock";
        humanScore++;
        score.textContent = `Your Score is ${humanScore} and the computer score is ${computerScore}`
        checkScore()
      } else if (humanChoice === "paper" && computerChoice === "scissor") {
        resultDiv.textContent = "You Lose ! Scissor Beats Paper";
        computerScore++;
        score.textContent = `Your Score is ${humanScore} and the computer score is ${computerScore}`
        checkScore()
      } else if (humanChoice === "scissor" && computerChoice === "rock") {
        resultDiv.textContent = "You Lose ! Rock Beats Scissor";
        computerScore++;
        score.textContent = `Your Score is ${humanScore} and the computer score is ${computerScore}`
        checkScore()
      } else if (humanChoice === "scissor" && computerChoice === "paper") {
        resultDiv.textContent = "You Win ! Scissor Beats Paper";
        humanScore++;
        score.textContent = `Your Score is ${humanScore} and the computer score is ${computerScore}`
        checkScore()
      } 
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Rock") {
      checkScoreReset ()
      playRound("Rock", getComputerChoice);
    } else if (button.textContent === "Paper") {
      checkScoreReset ()
      playRound("Paper", getComputerChoice);
    } else if (button.textContent === "Scissor") {
      checkScoreReset ()
      playRound("Scissor", getComputerChoice);
    }
  });
})


let humanScore, computerScore = 0 


function getComputerChoice () {
    let array = ["rock", "paper", "scissor"]
    let randomIndex = Math.floor(Math.random() * array.length)
    let choice = array[randomIndex]
    return choice
}

function getHumanChoice () {
    let userInput = prompt("Rock, Paper, or Scissor ?")
    return userInput
}

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase()
    computerChoice = getComputerChoice().toLowerCase()
    if (humanChoice === "rock" && computerChoice === "rock") {
        return console.log("it's a draw")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return console.log("You Lose ! Paper Beats Rock")
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        return console.log("You Win ! Rock beats Scissor")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return console.log("it's a draw")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return console.log("You Win ! Paper Beats Rock")
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        return console.log("You Lose ! Scissor Beats Paper")
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
        return console.log("it's a draw")
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        return console.log("You Lose ! Rock Beats Scissor")
    } else if (humanChoice === "scissor" && computerChoice === "paper")
        return console.log("You Win ! Scissor Beats Paper")
}

console.log(playRound())

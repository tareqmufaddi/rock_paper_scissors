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
        return "it's a draw"
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return "You Lose ! Paper Beats Rock"
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        return "You Win ! Rock beats Scissor"
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "it's a draw"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You Win ! Paper Beats Rock"
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        return "You Lose ! Scissor Beats Paper"
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
        return "it's a draw"
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        return "You Lose ! Rock Beats Scissor"
    } else if (humanChoice === "scissor" && computerChoice === "paper")
        return "You Win ! Scissor Beats Paper"
}

function playGame() {
   
    let humanScore = 0
    let computerScore = 0;
    let win = "Win";
    let lose = "Lose"
    for (let i = 0; i < 5; i++) {
        let result = playRound()
        console.log(result)
        if (result.includes(win)) {
            humanScore++
        } else if (result.includes(lose)) {
            computerScore++ 
        }
        console.log(`Your Score is ${humanScore} and Computer Score is ${computerScore}`)
    }    

    if (humanScore > computerScore) {
        console.log("You win this Round")
    } else if (computerScore > humanScore) {
        console.log("Sorry, You lost this Round!")
    } else {
        console.log("Let's play again, it's a draw !")
    }
}

playGame()
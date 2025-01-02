function getComputerChoice () {
    let choice = Math.random()
    if (choice < 0.33 ) {
        return "rock"
    } else if (choice < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    let userInput = prompt("Rock, Paper, or Scissor ?")
    return userInput
}

let humanScore, computerScore = 0 

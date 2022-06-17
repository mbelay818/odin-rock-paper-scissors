// This function will randomly return Rock, Paper, or Scissors
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// This function will return the winner of each round
function gameRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "Draw";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock ";
        } else {
            return "Draw";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "Draw";
        }
    } else {
        return "Invalid Input";
    }
}

// This is in charge of the game
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Rock, Paper, or Scissors?")
        let computerSelection = computerPlay();
        console.log(gameRound(playerSelection, computerSelection));
    }
}

game();
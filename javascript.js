
let playerSelection = "rock";
let computerSelection = computerPlay();
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

}

// This is in charge of the game
function game() {

}
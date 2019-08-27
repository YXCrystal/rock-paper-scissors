// Player and computer score
let player = 0;
let computer = 0;

// Computer randomly selects rock, paper, or scissors
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.round(Math.random() * 2)];
}

// Win and lose conditions for the player
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'It is a draw!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computer++;
            return 'You lose! Paper beats rock';
        } else {
            player++
            return 'You win! Rock beats scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            player++;
            return 'You win! Paper beats rock';
        } else {
            computer++;
            return 'You lose! Scissors beats paper';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computer++;
            return 'You lose! Rock beats scissors';
        } else {
            player++;
            return 'You win! Scissors beats paper';
        }
    }
}

// Determines winner after 5 rounds
function game() {
    let counter = 1;

    while (counter <= 5) {
        let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
        console.log(playRound(playerChoice, computerPlay()));
        counter ++;
    }

    if (player > computer) {
        console.log('You are the winner!');
    } else {
        console.log('You lose! Try again');
    }

    player = 0;
    computer = 0;

}

game();

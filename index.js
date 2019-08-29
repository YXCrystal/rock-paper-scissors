// Selectors
const scoreMessage = document.querySelector('.score__message');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundSelection = document.querySelector('#round');
const playerSelection = document.querySelector('#player');
const computerSelection = document.querySelector('#computer');
const choice = document.querySelectorAll('.choices__btn');
const resetbtn = document.querySelector('#reset');

// Player and computer score
let player = 0;
let computer = 0;
let round = 0;

// Computer randomly selects rock, paper, or scissors
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.round(Math.random() * 2)];
}

// Win and lose conditions for the player
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return false;
        } else {
            return true;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return true;
        } else {
            return false;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return false;
        } else {
            return true;
        }
    }
}

// Reset the game
function reset() {
    player = 0;
    computer = 0;
    round = 0;
    playerSelection.src = './images/question-mark.png';
    computerSelection.src = './images/question-mark.png';
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    scoreMessage.innerHTML = '&nbsp';
    roundSelection.textContent = 0;
    scoreMessage.classList.remove('winner-title');

}

resetbtn.addEventListener('click', reset);


// Game logic for 5 rounds
function game() {

        choice.forEach(choice => choice.addEventListener('click', (e) => {

            if (round >= 5) {
                if (player > computer) {
                    scoreMessage.textContent = 'Player wins!';
                    scoreMessage.classList.add('winner-title');

                } else if (player < computer) {
                    scoreMessage.textContent = 'Computer wins!';
                    scoreMessage.classList.add('winner-title');
                } else {
                    scoreMessage.textContent = 'No one wins. It is a tie!';
                    scoreMessage.classList.add('winner-title');

                }
            }
            else {
                // Computer choice
            const computerChoice = computerPlay();

            // Player choice
            const playerChoice = e.target.getAttribute('id');

            
            // Change UI image based on player choice
            $(playerSelection).fadeOut(150, function() {
                playerSelection.src = e.target.getAttribute('src');
            });
            $(playerSelection).fadeIn(150);
            
            
            // Change UI image based on computer choice
            const computerImage = `./images/${computerChoice}-right.png`; 
            $(computerSelection).fadeOut(150, function() {
                computerSelection.src = computerImage
            });
            $(computerSelection).fadeIn(150);

            // Change score message
            $(scoreMessage).fadeOut(150, function() {
                round++;
                roundSelection.textContent = round;

                if (playRound(playerChoice, computerChoice)) {

                    if (playerChoice === computerChoice) {
                        scoreMessage.textContent = 'It is a tie!';
                    } else {
                        player++;
                        playerScore.textContent = player;
                        scoreMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
                        
                    }
                } else {
                    computer++;
                    computerScore.textContent = computer;
                    scoreMessage.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                    
                }
            })
            $(scoreMessage).fadeIn(150);
        }  
    }))
}

game();
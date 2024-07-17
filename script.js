const computerDisplay = document.getElementById('computer');
const scoreDisplay = document.getElementById('score');
const choiceDisplay = document.getElementById('choice');
const resultDisplay = document.getElementById('result');
const playerDisplay = document.getElementById('player');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerInput = document.getElementById('player-input');
const resetBtn = document.getElementById('reset-btn');

//array of choices
let list = ["rock", "paper", "scissors"];

//computer random choice
let getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3);
    return list[x];
}

//player choice initialization
let getPlayerChoice;

//player chooses rock
rockButton.addEventListener("click", () => {
    getPlayerChoice = list[0];
    game();
    scoreKeeper();
})

//player chooses paper
paperButton.addEventListener("click", () => {
    getPlayerChoice = list[1];
    game();
    scoreKeeper();
})

//player chooses scissors
scissorsButton.addEventListener("click", () => {
    getPlayerChoice = list[2];
    game();
    scoreKeeper();
})

//initial score
let computerScore = 0;
let playerScore = 0;

//keep score and exit
function scoreKeeper() {
    scoreDisplay.innerText = `Computer: ${computerScore} Player: ${playerScore}`
    if (computerScore == 5)  {
        scoreDisplay.innerText = "Computer wins the series."
        computerScore = 0;
        playerScore = 0;
        playerDisplay.style.display = "none";
        resetBtn.style.display = "block";
} else if (playerScore == 5) {
        scoreDisplay.innerText = "Player wins the series.";
        computerScore = 0;
        playerScore = 0;
        playerDisplay.style.display = "none";
        resetBtn.style.display = "block";
}
    }

//allow page load before game start
if (playerInput) {
    playerInput.addEventListener("click", game);
}

//reset game
if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        resetBtn.style.display = "none";
        playerDisplay.style.display = "block";
        resultDisplay.innerText = "Select your choice to begin the game.";
        choiceDisplay.innerText = "";
        computerDisplay.innerText = "";
        scoreKeeper();
    });
}

//selection comparison
let game = (computerSelection, playerSelection) => {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice;
        computerDisplay.innerText =  `Computer chooses ${computerSelection}`;
        choiceDisplay.innerText = `Player chooses ${playerSelection}`;
    if (computerSelection == playerSelection) {
        resultDisplay.innerText = "It's a tie! Try again.";       
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore++;
        resultDisplay.innerText = "Player Wins!";      
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore++;
        resultDisplay.innerText = "Computer Wins!";        
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore++;
        resultDisplay.innerText = "Computer Wins!";       
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore++;
        resultDisplay.innerText = "Player Wins!";       
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore++;
        resultDisplay.innerText = "Computer Wins!";        
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore++;
        resultDisplay.innerText = "Player Wins!";  
    } else {
        resultDisplay.innerText = "Error occurred. Try again.";
    }
}

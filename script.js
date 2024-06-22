const computerDisplay = document.getElementById('computer');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');
const playerDisplay = document.getElementById('player');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerInput = document.getElementById('player-input');

//array of choices
let list = ["rock", "paper", "scissors"]

//computer random choice
let getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3)
    return list[x]
}

let getPlayerChoice;

rockButton.addEventListener("click", () => {
    getPlayerChoice = list[0];
})

paperButton.addEventListener("click", () => {
    getPlayerChoice = list[1];
})

scissorsButton.addEventListener("click", () => {
    getPlayerChoice = list[2];
})

/*player random choice
let getPlayerChoice = () => {
    let x = Math.floor(Math.random() * 3)
    return list[x]
}*/

//player manual choice
//let getPlayerChoice = () => {
  //  playerPrompt = prompt("rock, paper, or scissors")
    //return playerPrompt
//}

//initial score
let computerScore = 0
let playerScore = 0

//keep score and exit
function scoreKeeper() {
    scoreDisplay.innerText = `Computer: ${computerScore} Player: ${playerScore}`
    if (computerScore == 5)  {
        scoreDisplay.innerText = "Computer wins the series."
        computerScore = 0;
        playerScore = 0;
} else if (playerScore == 5) {
        scoreDisplay.innerText = "Player wins the series.";
        computerScore = 0;
        playerScore = 0;
}
    }
if (playerInput) {
    playerInput.addEventListener("click", game);
}

//selection comparison
let game = (computerSelection, playerSelection) => {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice;
        console.log(`Player chooses ${playerSelection} & Computer chooses ${computerSelection}`)
    if (computerSelection == playerSelection) {
        console.log("It's a tie! Try again.");
        scoreKeeper();
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore++;
        console.log("Player Wins!");
        scoreKeeper();
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore++;
        console.log("Computer Wins!"); 
        scoreKeeper();
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore++;
        console.log("Computer Wins!");
        scoreKeeper();
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore++;
        console.log("Player Wins!");
        scoreKeeper();
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore++;
        console.log("Computer Wins!");
        scoreKeeper(); 
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore++;
        console.log("Player Wins!");
        scoreKeeper(); 
    } else {
        console.log("Error occurred.");
    }
}

//run game * x

//setTimeout(() => {
  //  for (i = 0; i <= 20; i++) {
    //    game();
 //   }
//}, 5000)

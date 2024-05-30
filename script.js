
//array of choices
let list = ["rock", "paper", "scissors"]

//computer random choice
let getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3)
    return list[x]
}

/*player random choice
let getPlayerChoice = () => {
    let x = Math.floor(Math.random() * 3)
    return list[x]
}*/

//player manual choice
let getPlayerChoice = () => {
    playerPrompt = prompt("rock, paper, or scissors")
    return playerPrompt
}

//initial score
let computerScore = 0
let playerScore = 0

//keep score and exit
function scoreKeeper() {
    console.log(`Computer: ${computerScore} Player: ${playerScore}`)
    if (computerScore == 5)  {
        alert("Computer wins the series.");
        computerScore = 0;
        playerScore = 0;
} else if (playerScore == 5) {
        alert("Player wins the series.");
        computerScore = 0;
        playerScore = 0;
}
    }


//selection comparison
let game = (computerSelection, playerSelection) => {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
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

setTimeout(() => {
    for (i = 0; i <= 20; i++) {
        game();
    }
}, 5000)

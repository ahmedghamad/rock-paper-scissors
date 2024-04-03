

/**
 * Constants for Dom elements
 */
const buttons = document.getElementsByClassName("control");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["rock", "paper", "scissors"];


for(let button of buttons){
    button.addEventListener("click", function(){
        let playerChoice =this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}

function playGame(playerChoice){
    playerImage.src = `assets/images/${choices[playerChoice]}.png`
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice)

    computerImage.src = `assets/images/${choices[computerChoice]}.png`
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

/**
 * Checks to see who is the winner
 */

function checkWinner(computerChoice, playerChoice){
    if (computerChoice === playerChoice ) {
        return "Draw"
    }else{
        if (computerChoice === "rock" && playerChoice === "scissors"){
            return "Computer Wins"
        }else if(computerChoice === "paper" && playerChoice === "rock"){
            return "Computer Wins"
        }else if(computerChoice === "scissors" && playerChoice === "paper"){
            return "Computer Wins"
        }else{
            return "Player Wins"
        }
    }
}

/**
 * updates the score
 */
function updateScores(result){
let playerScore = parseInt(document.getElementById("player-score").innerText);
let computerScore = parseInt(document.getElementById("computer-score").innerText);
let messages = document.getElementById("messages");
    if (result === "Computer Wins"){
        messages.innerHTML = "Computer Wins!";
        computerScore += 1;
        document.getElementById("computer-score").innerText = computerScore
    }else if (result === "Player Wins"){
        messages.innerHTML = "Player Wins!";
        playerScore += 1;
        document.getElementById("player-score").innerText = playerScore
        }
    else{
        messages.innerHTML = "Draw !";
    }

}
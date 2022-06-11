// Placeholder Variables
let playerScore = 0;
let computerScore = 0;

// Selectors
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");

//Computer Choice
const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";        
    }
}

//Single Round Play
const playRound = (playerSelection, computerSelection) => {
    console.log(`You selected: ${playerSelection}`);
    console.log(`Computer selected: ${computerSelection}`);
    //Tie
    if (playerSelection === computerSelection) {
        document.getElementById("round-result").innerHTML = "It's a tie!";
        document.getElementById("round-result").style.color = "#0C7CEB";
    } 
    //Rock beats scissors
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            document.getElementById("round-result").innerHTML = "You win! Rock beats Scissors!";
            document.getElementById("round-result").style.color = "#00DFBA";
            document.getElementById("player-score-number").innerHTML = playerScore;
        }
        else {
            computerScore++;
            document.getElementById("round-result").innerHTML = "You lose! Paper beats Rock!";
            document.getElementById("round-result").style.color = "#FE2BF1";
            document.getElementById("computer-score-number").innerHTML = computerScore;
        }
    }
    //Paper beats rock
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            document.getElementById("round-result").innerHTML = "You win! Paper beats Rock!";
            document.getElementById("round-result").style.color = "#00DFBA";
            document.getElementById("player-score-number").innerHTML = playerScore;
        }
        else {
            computerScore++;
            document.getElementById("round-result").innerHTML = "You lose! Scissors beats Paper!";
            document.getElementById("round-result").style.color = "#FE2BF1";
            document.getElementById("computer-score-number").innerHTML = computerScore;
        }
    }
    //Scissors beats paper
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            document.getElementById("round-result").innerHTML = "You win! Scissors beats Paper!";
            document.getElementById("round-result").style.color = "#00DFBA";
            document.getElementById("player-score-number").innerHTML = playerScore;
        }
        else {
            computerScore++;
            document.getElementById("round-result").innerHTML = "You lose! Rock beats Scissors!";
            document.getElementById("round-result").style.color = "#FE2BF1";
            document.getElementById("computer-score-number").innerHTML = computerScore;
        }
    }
}

//Game Logic
const game = (playerSelection) => {
    let player = playerSelection;
    let computer = computerPlay();
    playRound(player, computer);

    if (playerScore === 5) {
        document.getElementById("intro-final-result").innerHTML = "WINNEEEEEEER!! WINNEEEEEEER!!";
        document.getElementById("intro-final-result").style.color = "#00DFBA";
        document.getElementById("intro-final-result").style.fontSize = "30px";
        document.getElementById("round-result").innerHTML = "";
    } else if (computerScore === 5) {
        document.getElementById("intro-final-result").innerHTML = "GAME OVER! YOU LOSE THE GAME!";
        document.getElementById("intro-final-result").style.color = "#FE2BF1";
        document.getElementById("intro-final-result").style.fontSize = "30px";
        document.getElementById("round-result").innerHTML = "";
    }
}

//Event Listeners
rock.addEventListener("click", () => {
    game("rock");
});

paper.addEventListener("click", () => {
    game("paper");
});

scissors.addEventListener("click", () => {
    game("scissors");
});

reset.addEventListener("click", () => {
    location.reload();
});    
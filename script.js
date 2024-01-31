function getComputerChoice (){
    let randomItem = (Math.floor(Math.random() * (3-1+1)));
    let computerChoices = ["Rock", "Paper", "Scissors"]
    return computerChoices[randomItem]
}

function getPlayerChoice() {
    let playerChoice = (prompt("What's your choice: Rock, Paper or Scissors?")).toLocaleLowerCase();
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice
    } else {
        return playerChoice = "Invalid Data, please enter your choice again"
    }
}

function playRound(ComputerChoice, PlayerChoice) {
    let lowerComputerChoise = ComputerChoice.toLocaleLowerCase();
    if (PlayerChoice == lowerComputerChoise) {
        return alert(`It's a draw, computer choise was ${ComputerChoice}`)
    } else if (((PlayerChoice == "rock")&& (ComputerChoice =="Scissors"))) {
        return alert("You won. Rock beats Scissors")
    } else if ((PlayerChoice == "paper") && (ComputerChoice =="Rock")) {
        return alert("You won. Paper beats Rock")
    } else if ((PlayerChoice =="scissors")&&(ComputerChoice=="Paper")){
        return alert("You won. Scissors beats Paper")
    } else if (PlayerChoice == "Invalid Data, please enter your choice again"){
        alert("try again, enter valid data");
        playRound(getComputerChoice(), getPlayerChoice());
    } else if ((PlayerChoice =="rock")&&(ComputerChoice=="Paper")) {
        return alert("You lose. Paper beats Rock")
    } else if ((PlayerChoice =="paper")&&(ComputerChoice=="Scissors")) {
        return alert("You lose. Scissors beats Paper")
    } else if ((PlayerChoice =="scissors")&&(ComputerChoice=="Rock")) {
        return alert("You lose. Rock beats Scissors")
    } else {
        alert(`You lose, computer choise was ${ComputerChoice}`)
    }
}

playRound(getComputerChoice(), getPlayerChoice());




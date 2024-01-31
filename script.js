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
    } else if (((PlayerChoice == "rock")&& (ComputerChoice =="Scissors")) || ((PlayerChoice == "paper") && (ComputerChoice =="Rock")) || ((PlayerChoice =="scissors")&&(ComputerChoice=="Paper"))){
        return alert(`You win this round, computer choise was ${ComputerChoice}`)
    } else if (PlayerChoice == "Invalid Data, please enter your choice again"){
        alert("try again, enter valid data");
        playRound(getComputerChoice(), getPlayerChoice());
    } else {
        alert(`You lose, computer choise was ${ComputerChoice}`)
    }
}

playRound(getComputerChoice(), getPlayerChoice());




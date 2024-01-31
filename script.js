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
    let Draw = 0;
    let Won = 0;
    let Lose = 0;
    let lowerComputerChoise = ComputerChoice.toLocaleLowerCase();
    if (PlayerChoice == lowerComputerChoise) {
        alert(`It's a draw, computer choise was ${ComputerChoice}`)
        ++Draw;
        return console.log(`Draw: ${Draw}`)
    } else if (((PlayerChoice == "rock")&& (ComputerChoice =="Scissors"))) {
        alert(`You won. Rock beats Scissors`)
        ++Won;
        return console.log(`Won: ${Won}`)
    } else if ((PlayerChoice == "paper") && (ComputerChoice =="Rock")) {
        alert(`You won. Paper beats Rock`)
        ++Won;
        return console.log(`Won: ${Won}`)
    } else if ((PlayerChoice =="scissors")&&(ComputerChoice=="Paper")){
        alert("You won. Scissors beats Paper")
        ++Won;
        return console.log(`Won: ${Won}`)
    } else if (PlayerChoice == "Invalid Data, please enter your choice again"){
        alert("try again, you have entered invalid data");
        playRound(getComputerChoice(), getPlayerChoice());
    } else if ((PlayerChoice =="rock")&&(ComputerChoice=="Paper")) {
        alert(`You lose. Paper beats Rock`)
        ++Lose;
        return console.log(`Lose: ${Lose}`)
    } else if ((PlayerChoice =="paper")&&(ComputerChoice=="Scissors")) {
        alert("You lose. Scissors beats Paper")
        ++Lose;
        return console.log(`Lose: ${Lose}`)
    } else if ((PlayerChoice =="scissors")&&(ComputerChoice=="Rock")) {
        alert("You lose. Rock beats Scissors")
        ++Lose;
        return console.log(`Lose: ${Lose}`)
    } 
}


function playRounds(n) {
    for (let i = 0; i < n; i++) {
        playRound(getComputerChoice(), getPlayerChoice());
    }
}

playRounds(5);



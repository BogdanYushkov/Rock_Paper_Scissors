const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");


function getComputerChoice (){
    let randomItem = (Math.floor(Math.random() * (3-1+1)));
    let computerChoices = ["Rock", "Paper", "Scissors"]
    return computerChoices[randomItem]
}

// function getPlayerChoice() {
//     let playerChoice = (prompt("What's your choice: Rock, Paper or Scissors?")).toLocaleLowerCase();
//     if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
//         return playerChoice
//     } else {
//         return playerChoice = "Invalid Data, please enter your choice again"
//     }
// }


rock.addEventListener("click", () => {
    playRounds(1, "rock")
})

paper.addEventListener("click", () => {
    playRounds(1, "paper")
})

scissors.addEventListener("click", () => {
    playRounds(1, "scissors")
})

const roundScore = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(roundScore);
const wins = document.querySelector("#Wins");
const losses = document.querySelector("#Losses");
const draw = document.querySelector("#Draw");
let Won = 0;
let Draw = 0;
let Losses = 0;




function playRound(ComputerChoice, PlayerChoice) {
  
    let lowerComputerChoise = ComputerChoice.toLocaleLowerCase();
    
    
    
    
    if (PlayerChoice == lowerComputerChoise) {
        
        ++Draw;
        roundScore.textContent = `It's a draw, computer choise was ${ComputerChoice}`;
        draw.textContent = Draw;
        return console.log(`Draw: ${Draw}`)
    } else if (((PlayerChoice == "rock")&& (ComputerChoice =="Scissors"))) {
        ++Won;
        roundScore.textContent = "You won. Rock beats Scissors";
        wins.textContent = Won;
        return console.log(`Won: ${Won}`)
    } else if ((PlayerChoice == "paper") && (ComputerChoice =="Rock")) {
        ++Won;
        roundScore.textContent = "You won. Paper beats Rock";
        wins.textContent = Won;
        return console.log(`Won: ${Won}`)
    } else if ((PlayerChoice =="scissors")&&(ComputerChoice=="Paper")){
        ++Won;
        roundScore.textContent = "You won. Scissors beats Paper";
        wins.textContent = Won;
        return console.log(`Won: ${Won}`)
    } else if (PlayerChoice == "Invalid Data, please enter your choice again"){
        alert("try again, you have entered invalid data");
        playRound(getComputerChoice(), getPlayerChoice());
    } else if ((PlayerChoice =="rock")&&(ComputerChoice=="Paper")) {
        ++Losses;
        roundScore.textContent = "You Lose. Paper beats Rock";
        losses.textContent = Losses;
        return console.log(`Losses: ${Losses}`)
    } else if ((PlayerChoice =="paper")&&(ComputerChoice=="Scissors")) {
        ++Losses;
        roundScore.textContent = "You Lose. Scissors beats Paper";
        losses.textContent = Losses;
        return console.log(`Losses: ${Losses}`)
    } else if ((PlayerChoice =="scissors")&&(ComputerChoice=="Rock")) {
        ++Losses;
        roundScore.textContent = "You Lose. Rock beats Scissors";
        losses.textContent = Losses;
        return console.log(`Losses: ${Losses}`)
    }
}



function playRounds(n, playerChoice) {
    for (let i = 0; i < n; i++) {
        playRound(getComputerChoice(), playerChoice);
    }
    if (Won == 5) {
        Won = 0;
        Draw = 0;
        Losses = 0;
        losses.textContent = Losses;
        wins.textContent = Won;
        draw.textContent = Draw;
        roundScore.textContent = "You won 5 times. Play again"
    }
}


// playRounds(5);




function getComputerChoice() {
    const compOptions = ["rock", "paper", "scissor"];

    return compOptions[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
   
    // same move
    if(playerSelection===computerSelection){
        return 0;
    }

    // Paper and Rock
    if(playerSelection=="paper" && computerSelection=="rock"){
        return 1;
    } if (playerSelection=="rock" && computerSelection=="paper"){
        return -1;
    }

    // Rock and Scissor
    if(playerSelection=="rock" && computerSelection=="scissor"){
        return 1;
    } if (playerSelection=="scissor" && computerSelection=="rock"){
        return -1;
    }

    // Scissor and Paper
    if(playerSelection=="scissor" && computerSelection=="paper"){
        return 1;
    } if (playerSelection=="paper" && computerSelection=="scissor"){
        return -1;
    }
}

function getResult(playerScore, computerScore) {
    if(playerScore==computerScore){
        console.log("It's a tie!");
    } else if(playerScore > computerScore){
        console.log("You won!");
    } else {
        console.log("You lose! Play again.");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection;
    let playersSelection;
    let result = 0;
    const noOfRounds = 10;

    for(let i = 0; i < noOfRounds; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, paper, scissor?").toLowerCase();
        // playerSelection = "rock";
        result = playRound(playerSelection,computerSelection);
        
        
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1);

        if(result == 0){
            console.log(playerSelection+" ties with "+computerSelection);
        } else if(result == 1){
            console.log(playerSelection+" beats "+computerSelection);
            playerScore++;
        } else if (result == -1){
            console.log(playerSelection+" is beaten by "+computerSelection);
            computerScore++;
        }
        console.log("Move: "+(i+1)+" of "+noOfRounds+". Player: "+playerScore+" , Computer: "+computerScore);
        if(i==(noOfRounds-1)) {
            getResult(playerScore, computerScore);
        }
    }
}

game();



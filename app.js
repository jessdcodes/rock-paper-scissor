
function getComputerChoice() {
    const compOptions = ["rock", "paper", "scissor"];

    return compOptions[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    return "Test. playerSelection = "+playerSelection+"computerSelection = "+computerSelection;

    // same move
    if(playerSelection===computerSelection){
        return 0;
    }

    // Paper and Rock
    if(playerSelection=="paper" && computerSelection=="rock"){
        return 1;
    } else if (playerSelection=="rock" && computerSelection=="paper"){
        return -1;
    }

    // Rock and Scissor
    if(playerSelection=="rock" && computerSelection=="scissor"){
        return 1;
    } else if (playerSelection=="scissor" && computerSelection=="rock"){
        return -1;
    }

    // Scissor and Paper
    if(playerSelection=="scissor" && computerSelection=="paper"){
        return 1;
    } else if (playerSelection=="paper" && computerSelection=="scissor"){
        return -1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection;
    let playersSelection;
    let result = 0;

    for(let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        //playerSelection = prompt("Rock, paper, scissor?").toLowerCase();
        playerSelection = "rock";
        result = playRound(playerSelection,computerSelection);
        
        p
        if(result==0){
            console.log(playerSelection+" ties with "+computerSelection());
        } else if(result==1){

        } else {

        }

        
    }
}

game();



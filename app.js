
function getComputerChoice() {
    const compOptions = ["rock", "paper", "scissors"];

    return compOptions[Math.floor(Math.random()*3)];
}

function playRound(e) {
  console.log(this);
   const computerSelection = getComputerChoice();
   const playerSelection = this.getAttribute("id").toLowerCase();
   console.log("computerSelection = "+computerSelection+" playerSelection = "+playerSelection);
   let result = 0;
    // same move
    if(playerSelection===computerSelection){
        result = 0;
    }

    // Paper and Rock
    if(playerSelection=="paper" && computerSelection=="rock"){
        result = 1;
    } if (playerSelection=="rock" && computerSelection=="paper"){
        result = -1;
    }

    // Rock and Scissor
    if(playerSelection=="rock" && computerSelection=="scissors"){
        result = 1;
    } if (playerSelection=="scissors" && computerSelection=="rock"){
        result = -1;
    }

    // Scissor and Paper
    if(playerSelection=="scissors" && computerSelection=="paper"){
        result = 1;
    } if (playerSelection=="paper" && computerSelection=="scissors"){
        result = -1;
    }

    displaySelection(playerSelection, computerSelection);
    displayRoundResult(result, playerSelection, computerSelection);
}

function displayRoundResult(result, playerSelection, computerSelection){
    const roundDisplay = document.querySelector("#roundResult");
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1);
    
    if(result == 0){
        roundDisplay.innerText = playerSelection+" ties with "+computerSelection;
        console.log(playerSelection+" ties with "+computerSelection);
    } else if(result == 1){
        roundDisplay.innerText = playerSelection+" beats "+computerSelection;
        console.log(playerSelection+" beats "+computerSelection);
        playerScore++;
    } else if (result == -1){
        roundDisplay.innerText = playerSelection+" is beaten by "+computerSelection;
        console.log(playerSelection+" is beaten by "+computerSelection);
        computerScore++;
    }

    console.log("before display -  playerScore="+playerScore+", computerScore="+computerScore);
    displayScore();

    if(playerScore==5 || computerScore==5){
        getResult(playerScore, computerScore);
        reset();   
    }
    
}

function displayScore(){
    const playerScoreDisplay = document.querySelector("#player-score");
    const computerScoreDisplay = document.querySelector("#computer-score");
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;   
  
}

function getResult(playerScore, computerScore) {
    if(playerScore > computerScore){
        setTimeout(function() {
            alert("Game Over. You win!");
        },10);
       
    } else {
        setTimeout(function() {
            alert("Game Over. You lost!");
        },10);
    }
    console.log("inside getResult!");
}

function displaySelection(playerSelection, computerSelection){
    // const playerImg = document.createElement('img'); 
    // const computerImg = document.createElement('img');   

    const playerImg = document.querySelector('#player-img'); 
    const computerImg = document.querySelector('#computer-img'); 
    
    const playerImgSrc = "images/"+playerSelection+".png";
    const computerImgSrc = "images/"+computerSelection+".png";

    playerImg.setAttribute('src', playerImgSrc);
    computerImg.setAttribute('src', computerImgSrc);
}

function reset() {
    const playerImg = document.querySelector('#player-img'); 
    const computerImg = document.querySelector('#computer-img'); 
    const roundDisplay = document.querySelector("#roundResult");

    setTimeout(function() {
        playerScore = 0;
        computerScore = 0;     
        displayScore();

        playerImg.setAttribute('src', "");
        computerImg.setAttribute('src', "");

        roundDisplay.innerText = 'First to 5 wins!';
    },10);
}

function game() {  

    const gameBtns = document.querySelectorAll(".game-btn");
    
    gameBtns.forEach(gameBtn => gameBtn.addEventListener('click',playRound));
}

let playerScore = 0;
let computerScore = 0;
game();




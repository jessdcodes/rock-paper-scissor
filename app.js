
function getComputerChoice() {
    const compOptions = ["Rock", "Paper", "Scissor"];

    return compOptions[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());
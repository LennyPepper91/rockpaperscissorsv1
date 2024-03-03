
let userChoice;




function getRandomChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    let choice;

    if (randomNumber === 1) {
        choice = "rock";
    } else if (randomNumber === 2) {
        choice = "paper";
    } else if (randomNumber === 3) {
        choice = "scissors";
    }

    return choice;
}


function game() { 
   // const userChoice = prompt("Please choose rock, paper, or scissors").toLowerCase();
    
    const computerChoice = getRandomChoice();

   
    if (userChoice === computerChoice) {
        const resultElement = document.getElementById("results");
        resultElement.textContent = `It's a draw. You chose ${userChoice} and the computer chose ${computerChoice}`;
        console.log(`It's a draw. You chose ${userChoice} and the computer chose ${computerChoice}`);
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        const resultElement = document.getElementById("results");
        resultElement.textContent = `You win this round. You chose ${userChoice} and the computer chose ${computerChoice}`;
        console.log(`Congrats! You win this round! You chose ${userChoice} and the computer chose ${computerChoice}`);
    } else {
        const resultElement = document.getElementById("results");
        resultElement.textContent = `Sorry, you lost this round. You chose ${userChoice} and the computer chose ${computerChoice}`;
        console.log(`Sorry. The computer wins this round! You chose ${userChoice} and the computer chose ${computerChoice}`);
    }

}




/*  for (let i = 0; i < 5; i++) {
    console.log(`Game ${i + 1}:`);

    
    game();
}  */



document.getElementById("rock_btn").addEventListener("click", () => {
    userChoice = "rock";
    game();
    
});

document.getElementById("paper_btn").addEventListener("click", () => {
    userChoice = "paper";
    game();
    
});

document.getElementById("scissors_btn").addEventListener("click", () => {
    userChoice = "scissors";
    game();
    
});





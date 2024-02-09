const images = Array.from(document.querySelectorAll('.card-image'));
const options = ["rock", "paper", "scissors"];
let scoreplayer = 0;
let scorepisiu = 0;

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Egalitate";
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Jucator";
    } else {
        return "Calculator";
    }
}

function checkWins() {
    document.querySelector(".scor-eu").textContent = `Pariorul: ${scoreplayer}`;
    document.querySelector(".scor-calculator").textContent =  `AI: ${scorepisiu}`;
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);

    if (result == "Egalitate") {
        document.querySelector('.message').textContent = `Tsaa, din pacate este egalitate`;
    } else if (result == "Jucator") {
        document.querySelector('.message').textContent = `Felicitari se pare ca ai castigat! Ai ales "${playerSelection}" ceea ce bate "${computerSelection}" ale calculatorului`;
        scoreplayer++;
    } else {
        document.querySelector('.message').textContent = `Felicitarile mele ai fost batut de un calculator. Calculatorul a ales "${computerSelection}" si te-a distrus pentru ca ai ales "${playerSelection}"`;
        scorepisiu++;
    }

    checkWins();
    
    if (scoreplayer >= 5 || scorepisiu >= 5) {
        endGame();
    }
}

function getPlayerChoice() {
    images.forEach((image) =>
        image.addEventListener('click', () => {
            if (scoreplayer >= 5 || scorepisiu >= 5) {
                return;
            }
            const playerSelection = image.dataset.image;
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        })
    );
}

function game() {
    getPlayerChoice();
}

function endGame() {
    let resultMessage = "";
    if (scoreplayer > scorepisiu) {
        resultMessage = "Ai castigat marea finala, alege urmatoarea miscare pentru a incepe un joc nou";
    } else if (scoreplayer < scorepisiu) {
        resultMessage = "Ai pierdut marea finala, alege urmatoarea miscare pentru a incepe un joc nou";
    } else {
        resultMessage = "Este egalitate, alege urmatoarea miscare pentru a incepe un joc nou";
    }

    // Display the result message in the .message element
    

    setTimeout(() => {
        document.querySelector('.message').textContent = resultMessage;
        scoreplayer = 0;
        scorepisiu = 0;
    }, 2000);
    // Add any additional logic or reset functionality here

    // Reset UI
    checkWins();
}

// Uncomment the line below to enable the player's choice functionality.
 game();

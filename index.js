console.log("Esti gata sa iti iei bataie?")

const options = ["rock" , "paper", "scissors"];

function getComputerChoice (){
const choice = options[Math.floor(Math.random() * options.length )]
return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Egalitate"
    }
    else if 
    ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper"))
    {
return "Winnerwinnerchickendinner";
    }
    else
    {
return "Aipierdutgenerale";
    }
}


function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);
if (result == "Egalitate"){
return "Este egaliate";
}
else if (result == "Winnerwinnerchickendinner"){
    return `Felicitari ai castigat! ${playerSelection} bate ${computerSelection}`;
}
else{
    return `Felicitarile mele ai fost batut de un calculator ${computerSelection} bate ${playerSelection}`;
}

}

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Astazi jucam piatra foarfeca sau hartie (in engelza)");
        if (choice == null){
            continue;
        }
        const choiceinlower = choice.toLowerCase(); 
        if (options.includes(choiceinlower)){
            validatedInput = true;
            return choiceinlower;

        }
    }

}

function game(){
    let scoreplayer = 0;
    let scorepisiu = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------------------RUNDA NOUA--------------------")
        if(checkWinner(playerSelection, computerSelection)=="Winnerwinnerchickendinner")
        scoreplayer++;
    else if (checkWinner(playerSelection, computerSelection)=="Aipierdutgenerale")
    scorepisiu++
    }
    console.log("Ai ajuns la finalul jocului")
    if (scoreplayer > scorepisiu){
        console.log("Ai castigat marea finala")
    }
    else if(scoreplayer < scorepisiu) {
    console.log("Ai pierdut marea finala")
    }
    else{
        console.log("Este egalitate")
    }
}

game()
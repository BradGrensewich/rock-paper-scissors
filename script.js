function game() {
    let pcScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        let winner = determineVictor(result);
        if(winner === "User") {
            userScore++;
        }
        if(winner === "PC") {
            pcScore++;
        }
        console.log(result);
    }
    if(userScore > pcScore) {
        console.log("GAME OVER: You win!");
    } else if (userScore < pcScore) {
        console.log("GAME OVER: You lose!");
    } else {
        console.log("GAME OVER: Tie game.");
    }
}

function determineVictor(result) {
        
    if(result.substring(0,5) === "You w") {        
        return "User";
    }
    if(result.substring(0,5) === "You l") {
        return "PC";
    } else {
        return "Tie";
    }
}

function playRound() {
    let pcSelection = computerPlay();
    let userSelection = userPlay();

    switch (userSelection) {
        case "rock":
            if(pcSelection === "Rock") {
                return("Tie. Rocks");
            } 
            if(pcSelection === "Paper") {
                return("You lose! Paper beats rock.");
            }
            if(pcSelection === "Scissors") {
                return("You win! Rock beats scissors.");
            }
            break;
        case "paper":
            if(pcSelection === "Rock") {
                return("You win! Paper beats rock.");
            } 
            if(pcSelection === "Paper") {
               return("Tie. Paper");
            }
            if(pcSelection === "Scissors") {
                return("You lose! Scissors beats rock.");
            }
            break;
        case "scissors":
            if(pcSelection === "Rock") {
                return("You lose! Rock beats scissors.");
            } 
            if(pcSelection === "Paper") {
                return("You win! Scissors beats paper.");
            }
            if(pcSelection === "Scissors") {
                return("Tie. Scissors");
            }
            break;
        default:
            return("You must enter one of rock/paper/scissors");                   
    }
    
}

function userPlay() {
    let input = prompt("Enter your selection: ");
    return input.toLowerCase();
}

function computerPlay() {
    let option = Math.floor(Math.random() * 3 + 1);
    switch(option) {
        case 1:
            return "Rock";              
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            console.log("error");
            return "Unexpected value";
    }
}
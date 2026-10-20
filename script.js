//Step 1: Function to randomly return Rock, Paper, or Scissors for the computer
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// console.log(computerPlay()); // Test the function by logging the computer's choice

//Step 2: Function to get and clean the player's choice
function playerPlay() {
    let userinput = prompt("Type Rock, Paper, or Scissors:");
    if (userinput === null) {
        return null; // User canceled the prompt
    }
    let cleanedInput = userinput.trim().toLowerCase();
    switch (cleanedInput) { // Use switch statement to handle different cases instead of thed efault if-else structure
        case 'rock':
            return 'Rock';
        case 'paper':
            return 'Paper';
        case 'scissors':
            return 'Scissors';
        default:
            alert("Invalid input. Please type Rock, Paper, or Scissors.");
            return "Invalid"; // Return a special value to indicate invalid input
    }
}

// console.log(playerPlay()); // Test the function by logging the player's choice

//Step 3: Function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return "Cancelled"; // Handle case where player cancels the prompt
    }

    if (playerSelection ==="Invalid") {
        return "Invalid"; // Handle case where player input is gibberish
    }
    
    if (playerSelection === computerSelection) {
        return `It's a tie! Both chose ${playerSelection}`;
    }
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return`You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//Step 4: Function to run the full game loop up to 3 wins
function game() {
    let playerScore = 0;
    let computerScore = 0;

    //UX requirement: Explain the and game rules before starting
    // alert("ATTENTION PLAYER: This game uses your browser's Console to display scores and results!\n\nPlease open your Developer Tools Console (F12 or Right Click -> Inspect -> Console) to follow the gamebefore clicking OK.");
    console.log("Welcome to Rock, Paper, Scissors vs. the Evil AI! First to 3 wins takes the match.");
    while (playerScore < 3 && computerScore <3) {
        
        let playerChoice = playerPlay();

        //Handle user clicking Cancel on prompt
        if (playerChoice === null) {
            console.log("Game cancelled by player");
            alert("Game cancelled.");
            break; //To exit the loop safely   
        }

        //Handle invalid input (e.g. typing gibberish)
        if (playerChoice === "Invalid") {
            continue;// ask again without changing score
        }

        let computerChoice = computerPlay();
        let roundResult = playRound(playerChoice, computerChoice);

        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(roundResult);

        //Update scores based on who won the round
        if (roundResult.includes("You Win!")){
            playerScore++;
        } else if (roundResult.includes("You Lose!")) {
            computerScore++;
        }

        console.log(`Score -> You: ${playerScore} | Computer: ${computerScore}`);
        console.log("-----------------------------------------");
        alert(`${roundResult}\n\nCurrent Score -> You: ${playerScore} | Computer: ${computerScore}`);
    }

    //Announce final winner once someone hits 3 wins
    if (playerScore === 3) {
        console.log("Congratulations! You won the entire match!");
        alert("Congratulations! You won the entire match!");
    } else if (computerScore === 3) {
        console.log("Game Over! The computer won the match.");
    }

    //Ask the user if they want to play again using confirm()
    let playAgain = confirm("Would you like to play another game?");
    if (playAgain) {
        game(); //Restarts the game loop
    } else {
        console.log("Thanks for playing!");
    }
}


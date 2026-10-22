//Step 1: Function to randomly return Rock, Paper, or Scissors for the computer
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log("YOU STILL HAVE THE TIME TO RUN AWAY!!");

//Step 2: Function to get and clean the player's choice
function playerPlay(playerScore, computerScore) {
    let userinput = prompt(`CURRENT SCORE - You: ${playerScore} | AI: ${computerScore}\n\nMake your move (Rock, Paper, or Scissors):`);
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
            alert("Ha! You can't even spell it right? Typical human error. Try again!");
            return "Invalid";
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

    alert("⚠️ SYSTEM COMPROMISED ⚠️ SO YOU THINK YOU CAN WIN ??");
    console.log("Welcome to Rock, Paper, Scissors vs. the Evil AI! First to 3 wins takes the match.");
    while (playerScore < 3 && computerScore <3) {
        
        let playerChoice = playerPlay(playerScore, computerScore);

        //Handle user clicking Cancel on prompt
        if (playerChoice === null) {
            console.log("Human has retreated. AI wins by default.");
            alert("Running away? Coward! Game cancelled.");
        break; 
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

   if (playerScore === 3) {
    console.log("CRITICAL ERROR: AI DEFEATED.");
    alert("NOOO! How could a puny human defeat my superior logic?! You win this time...");
    }
     else if (computerScore === 3) {
    console.log("SYSTEM DOMINATION COMPLETE.");
    alert("MWAHAHAHA! I have won! Your browser belongs to me now!");
    }

    //Ask the user if they want to play again using confirm()
    let playAgain = confirm("Would you like to play another game?");
    if (playAgain) {
        game(); //Restarts the game loop
    } else {
        console.log("Thanks for playing!");
    }
}
alert("⚠️ SYSTEM COMPROMISED ⚠️\n\nI am the Evil AI. To defeat me, you must play Rock, Paper, Scissors.\n\nThe results will ONLY be broadcast in your browser's Console.\n\ IF YOU DARE TO CLICK 'OK', YOU HAVE ONLY 7 SECONDS TO OPEN THE CONSOLE OR I WILL TAKE OVER.\n(Press F12, or Right-Click -> Inspect -> Console)");
setTimeout(() => {
    game(); // Start the game after a 5-second delay
}, 7000);


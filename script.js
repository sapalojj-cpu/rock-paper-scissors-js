const choices = ["Rock", "Paper", "Scissors"];
const beats = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

// Global taunt before the game even loads
console.log("YOU STILL HAVE THE TIME TO RUN AWAY!!");

// Step 1: Computer choice
function computerPlay() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// Step 2: Clean and validate player choice using array methods
function getPlayersChoice(userInput) {
  if (userInput === null) {
    return null; // User canceled
  }

  const cleanedInput = userInput.trim().toLowerCase();
  
  // Dynamically check against the choices array instead of a switch block
  const match = choices.find((choice) => choice.toLowerCase() === cleanedInput);

  if (match) {
    return match;
  }

  // Gamified invalid response
  alert("Ha! You can't even spell it right? Typical human error. Try again!");
  return "Invalid";
}

// Step 3: Play a round using the lookup object for scalable logic
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      outcome: "tie",
      message: `We both chose ${playerSelection}. A temporary stalemate...`,
    };
  }

  // Check if the player's choice beats the computer's choice based on the object
  if (beats[playerSelection] === computerSelection) {
    return {
      outcome: "player",
      message: `Ugh. ${playerSelection} beats ${computerSelection}. You win this round, human.`,
    };
  }

  // If it's not a tie and the player didn't win, the computer wins
  return {
    outcome: "computer",
    message: `Mwahaha! ${computerSelection} destroys ${playerSelection}. I win!`,
  };
}

// Step 4: The Main Game Loop
function game() {
  let playerScore = 0;
  let computerScore = 0;

  alert("⚠️ SYSTEM COMPROMISED ⚠️ SO YOU THINK YOU CAN WIN ??");
  console.log("Welcome to Rock, Paper, Scissors vs. the Evil AI! First to 3 wins takes the match.");

  while (playerScore < 3 && computerScore < 3) {
    
    // Pass the scores into the prompt for continuous UX
    const userInput = prompt(`CURRENT SCORE - You: ${playerScore} | AI: ${computerScore}\n\nMake your move (Rock, Paper, or Scissors):`);
    const playerChoice = getPlayersChoice(userInput);

    // Handle user clicking Cancel on prompt
    if (playerChoice === null) {
      console.log("Human has retreated. AI wins by default.");
      alert("Running away? Coward! Game cancelled.");
      return; // Exit the function entirely
    }

    // Handle invalid input
    if (playerChoice === "Invalid") {
      continue; // Ask again without changing score
    }

    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice); // Returns the data object

    console.log(`👤 Human chose: ${playerChoice}`);
    console.log(`🤖 AI chose: ${computerChoice}`);
    console.log(`>> RESULT: ${result.message}`);

    // Update scores based on the outcome property
    if (result.outcome === "player") {
      playerScore++;
    } else if (result.outcome === "computer") {
      computerScore++;
    }

    console.log(`Score -> You: ${playerScore} | AI: ${computerScore}`);
    console.log("-----------------------------------------");
    
    // Pause and show the user the result
    alert(`${result.message}\n\nCurrent Score -> You: ${playerScore} | AI: ${computerScore}`);
  }

  // Announce final winner
  if (playerScore === 3) {
    console.log("CRITICAL ERROR: AI DEFEATED.");
    alert("NOOO! How could a puny human defeat my superior logic?! You win this time...");
  } else if (computerScore === 3) {
    console.log("SYSTEM DOMINATION COMPLETE.");
    alert("MWAHAHAHA! I have won! Your browser belongs to me now!");
  }

  // Ask the user if they want to play again
  let playAgain = confirm("Would you like to play another game?");
  if (playAgain) {
    game(); 
  } else {
    console.log("Cowardly retreat accepted. Thanks for playing!");
  }
}

// ---------------- INITIATION SEQUENCE ----------------

// The fixed first alert with proper \n\n formatting
alert("⚠️ SYSTEM COMPROMISED ⚠️\n\nI am the Evil AI. To defeat me, you must play Rock, Paper, Scissors.\n\nThe results will ONLY be broadcast in your browser's Console.\n\nIF YOU DARE TO CLICK 'OK', YOU HAVE ONLY 7 SECONDS TO OPEN THE CONSOLE OR I WILL TAKE OVER.\n(Press F12, or Right-Click -> Inspect -> Console)");

// 7-second countdown
setTimeout(() => {
  game(); 
}, 7000);
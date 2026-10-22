const choices = ["Rock", "Paper", "Scissors"];
const beats = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

console.log("YOU STILL HAVE THE TIME TO RUN AWAY!!");


function computerPlay() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getPlayersChoice(userInput) {
  if (userInput === null) {
    return null; 
  }

  const cleanedInput = userInput.trim().toLowerCase();
  
  
  const match = choices.find((choice) => choice.toLowerCase() === cleanedInput);

  if (match) {
    return match;
  }


  alert("Ha! You can't even spell it right? Typical human error. Try again!");
  return "Invalid";
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      outcome: "tie",
      message: `We both chose ${playerSelection}. A temporary stalemate...`,
    };
  }

 
  if (beats[playerSelection] === computerSelection) {
    return {
      outcome: "player",
      message: `Ugh. ${playerSelection} beats ${computerSelection}. You win this round, human.`,
    };
  }

s
  return {
    outcome: "computer",
    message: `Mwahaha! ${computerSelection} destroys ${playerSelection}. I win!`,
  };
}


function game() {
  let playerScore = 0;
  let computerScore = 0;

  alert("⚠️ SYSTEM COMPROMISED ⚠️ SO YOU THINK YOU CAN WIN ??");
  console.log("Welcome to Rock, Paper, Scissors vs. the Evil AI! First to 3 wins takes the match.");

  while (playerScore < 3 && computerScore < 3) {
    
    
    const userInput = prompt(`CURRENT SCORE - You: ${playerScore} | AI: ${computerScore}\n\nMake your move (Rock, Paper, or Scissors):`);
    const playerChoice = getPlayersChoice(userInput);

    if (playerChoice === null) {
      console.log("Human has retreated. AI wins by default.");
      alert("Running away? Coward! Game cancelled.");
      return;
    }

    
    if (playerChoice === "Invalid") {
      continue;
    }

    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice); 

    console.log(`👤 Human chose: ${playerChoice}`);
    console.log(`🤖 AI chose: ${computerChoice}`);
    console.log(`>> RESULT: ${result.message}`);

  
    if (result.outcome === "player") {
      playerScore++;
    } else if (result.outcome === "computer") {
      computerScore++;
    }

    console.log(`Score -> You: ${playerScore} | AI: ${computerScore}`);
    console.log("-----------------------------------------");
    
    alert(`${result.message}\n\nCurrent Score -> You: ${playerScore} | AI: ${computerScore}`);
  }

  if (playerScore === 3) {
    console.log("CRITICAL ERROR: AI DEFEATED.");
    alert("NOOO! How could a puny human defeat my superior logic?! You win this time...");
  } else if (computerScore === 3) {
    console.log("SYSTEM DOMINATION COMPLETE.");
    alert("MWAHAHAHA! I have won! Your browser belongs to me now!");
  }

  let playAgain = confirm("Would you like to play another game?");
  if (playAgain) {
    game(); 
  } else {
    console.log("Cowardly retreat accepted. Thanks for playing!");
  }
}


alert("⚠️ SYSTEM COMPROMISED ⚠️\n\nI am the Evil AI. To defeat me, you must play Rock, Paper, Scissors.\n\nThe results will ONLY be broadcast in your browser's Console.\n\nIF YOU DARE TO CLICK 'OK', YOU HAVE ONLY 7 SECONDS TO OPEN THE CONSOLE OR I WILL TAKE OVER.\n(Press F12, or Right-Click -> Inspect -> Console)");

// 7-second countdown
setTimeout(() => {
  game(); 
}, 7000);
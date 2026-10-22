const choices = ["Rock", "Paper", "Scissors"];
const beats = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

function computerPlay() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// Instead of long if/else statement I used the find() method
function getPlayersChoice(userInput) {
  if (userInput === null) {
    return null;
  }

  const cleanedInput = userInput.trim().toLowerCase();

  const match = choices.find((choice) => choice.toLowerCase() === cleanedInput);

  if (match) {
    return match;
  }

  alert("Invalid choice! Please try typing Rock, Paper, or Scissors.");
  return "Invalid";
}

// Used a "look up" object version to make the code scalable
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      outcome: "tie",
      message: `You both chose ${playerSelection}. It's a tie, replay!`,
    };
  }

  if (beats[playerSelection] === computerSelection) {
    return {
      outcome: "player",
      message: `You chose ${playerSelection}, the computer chose ${computerSelection}. You win this round!`,
    };
  }

  return {
    outcome: "computer",
    message: `You chose ${playerSelection}, the computer chose ${computerSelection}. The computer wins this round!`,
  };
}

// Game function
function game() {
  let playerScore = 0;
  let computerScore = 0;

  alert(
    "Muuuahahaha! I have taken over this page, mortal! Only a flawless game of Rock, Paper, Scissors can stop me.\n\n" +
      "WHERE TO LOOK: Every round's result appears in the browser console, so you'll need it open to see who's winning.\n" +
      "To open it: press F12 (or right-click the page, choose Inspect, then click the Console tab).\n\n" +
      "HOW TO PLAY: Type Rock, Paper or Scissors when asked (capitals and spaces don't matter). First to win 3 rounds wins. Ties and invalid entries don't count.\n\n" +
      "Click Cancel at any time to quit. Click OK when the console is open, and let the battle begin!",
  );

  while (playerScore < 3 && computerScore < 3) {
    const userInput = prompt(
      `You: ${playerScore} | Computer: ${computerScore}\nRock, Paper or Scissors?`,
    );
    const playerChoice = getPlayersChoice(userInput);

    if (playerChoice === null) {
      console.log("Game cancelled. Come back when you're ready!");
      return;
    }

    if (playerChoice === "Invalid") {
      continue;
    }

    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    console.log(result.message);

    if (result.outcome === "player") {
      playerScore++;
    } else if (result.outcome === "computer") {
      computerScore++;
    }
  }

  if (playerScore === 3) {
    console.log(`You win ${playerScore} to ${computerScore}!`);
  } else {
    console.log(`The computer wins ${computerScore} to ${playerScore}!`);
  }
}

game();

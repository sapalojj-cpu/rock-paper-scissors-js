//Step 1: Function to randomly return Rock, Paper, or Scissors for the computer
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(computerPlay()); // Test the function by logging the computer's choice

//Step 2: Function to get and clean the player's choice
function playerPlay() {
    let userinput = prompt("Type Rock, Paper, or Scissors:");
    if (userinput === null) {
        return null; // User canceled the prompt
    }
    let cleanedInput = userinput.trim().toLowerCase();
    if (cleanedInput === "rock") {
        return "Rock";
    } else if (cleanedInput === "paper") {
        return "Paper";
    } else if (cleanedInput === "scissors") {
        return "Scissors";
    } else {
        alert("Invalid choice! Please try typing Rock, Paper, or Scissors.");
        return "Invalid"; // Return a specific value for invalid input
    }
}

console.log(playerPlay()); // Test the function by logging the player's choice
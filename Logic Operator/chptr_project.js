
  /* ==================LOGIC OPERATOR PROJECT==========================

 1) ===>> Evaluating a Number Game 
 
Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user. */

  let userNumber = prompt("Enter a number: ");
  userNumber = parseInt(userNumber);
  if (userNumber > 7) {
    console.log("Your Number is greataer than 7");
  } else if (userNumber == 7) {
    console.log("You Enter 7");
  } else if (userNumber < 7) {
    console.log("Your number is less than 7");
  } else {
    console.log("Please enter a valid number...");
  }


  // ========================================================================= //


  /*
 2) ===>> Friend Checker Game 
Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements. You can add a default response that you don't know the person if it's an unknown name. Output the result into the console. 
*/

  let userName = prompt("Enter a name: ");

  switch (userName.toLowerCase()) {
    case "ali":
    case "zia":
    case "qasim":
      console.log("Welcome, friend! You are recognized.");
      break;
    default:
      console.log("Sorry, I don't know you. Are you sure we've met?");
  }


  // =========================================================================== //

  /*
 3) ===>> Rock Paper Scissors Game 
 This is a game between a player and the computer, where both will make a random selection of either Rock, Paper, or Scissors (alternatively, you could create a version using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. You can use JavaScript to create your own version of this game, applying the logic with an if statement. Since this project is a little more difficult, here are some suggested steps: 
 1. Create an array that contains the variables Rock, Paper, and Scissors. 
 2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items. 
 3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array. 
 4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie. 
 5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors. 
 6. Add a new output message that shows the player selection versus the computer selection and the result of the game.
 */

  let items = ["Rock", "Paper", "Scissors"];

  const getRandomNumber = () => Math.floor(Math.random() * 3);
  const playerSelection = getRandomNumber();
  const computerSelection = getRandomNumber();

  // Output the selections
  console.log("Player selected: " + items[playerSelection]);
  console.log("Computer selected: " + items[computerSelection]);

  if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
  } else if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 1)
  ) {
    resultMessage = "You win!";
  } else {
    resultMessage = "Computer wins!";
  }

  // Step 6: Output the player and computer selections along with the result
  console.log("Player selected: " + items[playerSelection]);
  console.log("Computer selected: " + items[computerSelection]);
  console.log("Result: " + resultMessage);


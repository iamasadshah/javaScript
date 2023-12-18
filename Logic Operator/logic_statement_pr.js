// ==================ELSE IF STATEMENTS ==================== //
/* Question #1
1. Create a variable with a Boolean value. 
2. Output the value of the variable to the console. 
3. Check whether the variable is true and if so, 
   output a message to the console, using the following syntax: 
   if(myVariable)
   { 
       //action 
    } 
4. Add another if statement with an ! in front of the variable to 
   check whether the condition is not true, and create a message that 
   will be printed to the console in that instance. You should have two 
   if statements, one with an ! and the other without. You could also 
   use an if and an else statement instead—experiment! 
5. Change the variable to the opposite to see how the result changes.
*/

let myVariable = true;
console.log(myVariable)

if(myVariable = true){
    console.log("The Variable is true")
}if(myVariable != true){
    console.log("The Variable is not true")
}

let myVariable2 = false;
console.log(myVariable2)

if(myVariable2 = false){
    console.log("The Variable is false")
}if(myVariable2 != false){
    console.log("The Variable is true")
}

// ======================================================================= //


/*
Question #2
1. Create a prompt to ask the user's age 
2. Convert the response from the prompt to a number 
3. Declare a message variable that you will use to 
   hold the console message for the user 
4. If the input age is equal to or greater than 21, 
   set the message variable to confirm entry to a venue 
   and the ability to purchase alcohol. 
5. If the input age is equal to or greater than 19, 
   set the message variable to confirm entry to the venue 
   but deny the purchase of alcohol. 
6. Provide a default else statement to set the message 
   variable to deny entry if none are true 
7. Output the response message variable to the console
*/

let age = prompt("How old are you?");
let userAge = parseInt(age);
if(age >= 21){
    console.log("You are able to enter to a venue")
}else if(age >= 19){
    console.log("You are not able to purchase alcohol")
}else{
    console.log("Please enter a valid age!")
}

// ========================================================= //

// =================TURNARY OPERATOR============== //
/*
QUESTION #3
1. Create a Boolean value for an ID variable 
2. Using a ternary operator, create a message 
   variable that will check whether their ID is 
   valid and either allow a person into a venue or not 
3. Output the response to the console
*/

let isIDValid = true;
let message = isIDValid ? "Welcome! You can enter the venue." : "Sorry, your ID is not valid. Access denied.";
console.log(message)

// ======================================================== //

             // =========SWITCH STATEMENT========= //

/* QUESTION #4
In this exercise, we'll create a Magic 8-Ball random answer generator:

1. Start by setting a variable that gets a random value assigned to it. 
   The value is assigned by generating a random number 0-5, 
   for 6 possible results. You can increase this number as 
   you add more results. 
2. Create a prompt that can get a string value input from a 
   user that you can repeat back in the final output. 
3. Create 6 responses using the switch statement,
   each assigned to a different value from the random number generator.   
4. Create a variable to hold the end response, which should be a 
   sentence printed for the user. You can assign different string 
   values for each case, assigning new values depending on the 
   results from the random value. 
   5. Output the user's original question, plus the randomly 
   selected case response, to the console after the user enters their question.
 */


// 1. Set a variable with a random value (0-5 for 6 possible results)
let randomValue = Math.floor(Math.random() * 6);

// 2. Create a prompt to get a string value input from the user
let userQuestion = prompt("Ask me a question:");

// 3. Create 6 responses using a switch statement
let response;
switch (randomValue) {
  case 0:
    response = "Yes, definitely!";
    break;
  case 1:
    response = "No, not at all.";
    break;
  case 2:
    response = "I'm not sure, try again later.";
    break;
  case 3:
    response = "Possibly, but it's uncertain.";
    break;
  case 4:
    response = "Ask a friend for advice.";
    break;
  case 5:
    response = "The outlook is good!";
    break;
  default:
    response = "Sorry, I didn't catch that.";
}

// 4. Create a variable to hold the end response
let finalResponse = `You asked: "${userQuestion}"\n My answer: ${response}`;

// 5. Output the user's original question and the randomly selected case response to the console
console.log(finalResponse);


// ========================================================= //

/*QUESTION #5

1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10 
2. Convert the prompt response to a number data type 
3. Create a variable to use for the output message containing the value "My Selection: " 
4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected 
5. Use the switch break to add combined results for prizes 
6. Output the message back to the user by concatenating your prize variable strings and the output message string 
*/

let prize = prompt("select a number from 0 to 10")
prize = parseInt(prize);
console.log("My Selection:", prize)

var outputMessage = "My Selection: ";

switch (prize) {
   case 0:
       outputMessage += "You win a vacation!";
       break;
   case 1:
      outputMessage += "SORRY! You've got nothing;
       break;
   case 2:
       outputMessage += "Congratulations! You get a gift card.";
       break;
   case 3:
      outputMessage += "You win headphones";
       break;
   case 4:
       outputMessage += "You've won a movie ticket!";
       break;
   case 5:
      outputMessage += "You win Laptop";
       break;
   case 6:
       outputMessage += "Hooray! You receive a discount coupon.";
       break;
   case 7:
      outputMessage += "Wow! You get a Phone";
       break;
   case 8:
       outputMessage += "You win a book!";
       break;
   case 9:
      outputMessage += "Try Next time";
       break;
   case 10:
       outputMessage += "Wow! You get a gaming console.";
       break;
   default:
       outputMessage += "Sorry, no prize for that selection.";
}

 console.log(outputMessage)

// ===================================================================== //


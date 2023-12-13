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

/*
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

let randomvalue = Math.random();
randomvalue = randomvalue * 5;

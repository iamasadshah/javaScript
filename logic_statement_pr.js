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

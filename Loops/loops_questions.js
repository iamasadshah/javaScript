
  /* QUESTION #1
1. Create a variable to be used as the max value for the number guessing game. 
2. Generate a random number for the solution using Math.random() and Math.floor(). You will also need to add 1 so that the value is returned as 1-[whatever the set max value is]. You can log this value to the console for development to see the value as you create the game, then when the game is complete you can comment out this console output.
3. Create a variable that will be used for tracking whether the answer is correct or not and set it to a default Boolean value of false. We can update it to be true if the user guess is a match.  
4. Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5, and convert the response into a number in order to match the data type of the random number. 
5. Inside the while loop, check using a condition to see if the prompt value is equal to the solution number. Apply logic such that if the number is correct, you set the status to true and break out of the loop. 
   Provide the player with some feedback as to whether the guess was high or low, and initiate another prompt until the user guesses correctly. In this way we use the loop to keep asking until the solution is correct, and at that point we can stop the iteration of the block of code.
*/

let maxValue = 5;
let randomNumber = Math.floor(Math.random() * maxValue + 1);

let checkAnswer = false;

while(!checkAnswer){
    let userNumber = prompt("Enter a number between 1 and 5");
    userNumber = parseInt(userNumber);
   
    // console.log("Your Guess is correct")
    break;
    if(userNumber === randomNumber){
        checkAnswer = true;
        console.log("You Guess the correct Number")
    }else if(userNumber > randomNumber){
        console.log("Too High! Try Again..")
    }else{
        console.log("Too Low! try Again")
    }
}


  /*QUESTION 2
In this exercise, we will create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit. 
1. Set the starting counter to 0 
2. Create a variable, step, to increase your counter by 
3. Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop 
4. Continue to loop until the counter is equal to 100 or more than 100
*/

  let counter = 0;
  let step = 5;
  do {
    console.log("Counter: ", counter);
    counter += step;
  } while (counter < 100);

/* QUESTION 3
1. Setup a blank array, myWork. 
2. Using a for loop, create a list of 10 objects, each of which is a numbered lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false status for every other item to indicate whether the class will be running this year. For example: name: 'Lesson 1', status: true 
3. You can specify the status by using a ternary operator that checks whether the modulo of the given lesson value is equal to zero and by setting up a Boolean value to alternate the values each iteration. 
4. Create a lesson using a temporary object variable, containing the name (lesson with the numeric value) and predefined status (which we set up in the previous step). 
5. Push the objects to the myWork array. 
6. Output the array to the console.
 
 */

 let myWork =[];
 for(let list = 0; list < 10; list++){
   let status = list % 2 === 0 ? false : true;
   let lesson = {
     name : "Lesson " + list,
     status : status
   };
   myWork.push(lesson);
 }
console.log(myWork)
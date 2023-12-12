/* Question # 1
1. Create a new myCar object for a car. Add some properties, including, 
   but not limited to, make and model, and values for a typical 
   car or your car. Feel free to use booleans, strings, or numbers.
2. Create a variable that can hold the string value color. 
   This variable containing a string value color can now be 
   used to reference the property name within myCar. Then, 
   use the variable within the square bracket notation to 
   assign a new value to the color property in myCar. 
3. Use that same variable and assign a new property 
   string value to it, such as forSale. Use the bracket 
   notation once again to assign a new value to the 
   forSale property to indicate whether the car is 
   available for purchase. 
4. Output make and model into the console. 
5. Output the value of forSale into the console.
*/
 
let myCar = {
    make: "Toyota",        
    model: "Camry",        
    year: 2022,             
    color: "Silver",       
    isAutomatic: true,      
    mileage: 15000,         
    owners: ["Shah"]
}

let Color = myCar.color
myCar["color"] = "Black"
let forSaleVariable = "forSale"
myCar[forSaleVariable] = true
console.log("Make : ", myCar.make, "and  Model: ",myCar.model)

console.log("For Sales :", myCar[forSaleVariable])





/*QUESTION #2
1. Create an object named people that contains an empty array that is called friends. 
2. Create three variables, each containing an object, that contain one of your friend's 
   first names, last names, and an ID value. 
3. Add the three friends to the friend array. 
4. Output it to the console.
*/

people = {
   friends : []
}

let friend1 = {
   firstName : "Ahmad",
   lastName : "Shah",
   id : "76",
}
let friend2 = {
   firstName : "Ali",
   lastName : "Khan",
   id : "66",
}
let friend3 = {
   firstName : "Syed",
   lastName : "Asad",
   id : "86",
}

people.friends.push(friend1, friend2, friend3)
console.log(people)


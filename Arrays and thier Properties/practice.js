/* QUESTION # 1
 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples." 
2. Check your list length in the console. 
3. Update "Bread" to "Bananas." 
4. Output your entire list to the console */

shoppingList = ["Milk", "Bread", "Apples"]
console.log(shoppingList.length)
shoppingList[1] = "Bananas"
console.log(shoppingList)

/*================================================ */




/*QUESTION #2
1. Create an empty array to use as a shopping list. 
2. Add Milk, Bread, and Apples to your list. 
3. Update "Bread" with Bananas and Eggs. 
4. Remove the last item from the array and output it into the console. 
5. Sort the list alphabetically. 
6. Find and output the index value of Milk. 
7. After Bananas, add Carrots and Lettuce. 
8. Create a new list containing Juice and Pop. 
9. Combine both lists, adding the new list twice to the end of the first list. 
10. Get the last index value of Pop and output it to the console. 
11. Your final list should look like this: */

let shoppingList2 = []
shoppingList2.push("Milk", "Bread", "Apples")
shoppingList2.splice(1, 1, "Bananas", "Eggs")
shoppingList2.pop()
console.log(shoppingList2)
shoppingList2.sort();
let indexValue = shoppingList2.indexOf("Milk")
console.log(shoppingList2)
shoppingList2.splice(1, 0, "Carrots", "Lettuce")
console.log(shoppingList2)

let newList = ["Juice", "Pop"]
let concatenatedArray = shoppingList2.concat(newList, newList)
console.log(concatenatedArray)

/* ===================================================== */



/*QUESTION #3
1. Create an array containing three values: 1, 2, and 3. 
2. Nest the original array into a new array three times. 
3. Output the value 2 from one of the arrays into the console. */

let myNumbers = [1, 2, 3]
let newNumbers = [myNumbers, myNumbers, myNumbers]
console.log(newNumbers[2][1])

/* ====================================================== */



/*
   ==============CHAPTER PROJECT===============

 ===>>> Manipulating an Array 
Take the following array: 
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']]; 
Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), 
and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"] 
You can take the following steps, or adopt your own approach: 
• Remove the first item and the last item. 
• Add FIRST to the start of the array. 
• Assign hello World to the fourth item value. 
• Assign MIDDLE to the third index value. 
• Add LAST to the last position in the array. 
• Output it to the console. 
*/


const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.shift()
theList.pop()
theList.unshift("FIRST")
theList.splice(3, 4, "Hello World")
theList.splice(2, 1, "MIDDLE")
theList.splice(4, 0, "LAST")
console.log(theList)


 /*===>> Company product catalog 
In this project, you will implement a data structure for a product catalog and create queries to retrieve data. 
1. Create an array to hold an inventory of store items. 
2. Create three items, each having the properties of name, model, cost, and quantity. 
3. Add all three objects to the main array using an array method, and then log the inventory array to the console. 
4. Access the quantity element of your third item, and log it to the console. 
   Experiment by adding and accessing more elements within your data structure.
*/

let storeItems = []

let glasses = {
   name : "Sun Glasses",
   model : "- ",
   cost : "$50",
   quantity : 12,
}

let earPhones = {
   name : "G9 Earphones",
   model : "G9 120h ",
   cost : "$70",
   quantity : 16,
}

let phones = {
   name : "Iphone",
   model : "X",
   cost : "$550",
   quantity : 22,
}

storeItems.push(glasses, earPhones, phones)
console.log(storeItems)

console.log(storeItems[2].quantity)
 //OR
console.log(phones.quantity)

// Adding more elements to the array
let laptops = {
   name : "HP",
   model : "PP18L",
   cost : "$150",
   quantity : 1,
}

storeItems.push(laptops)
console.log(storeItems)

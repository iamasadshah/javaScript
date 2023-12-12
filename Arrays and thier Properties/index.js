// Creating and Array
colors = ["black", "orange", "pink", "green", "red", "red"]
booleans = [true, false]
empty = []

// Checking Data Type
console.log(typeof colors[3])


// Accessing elements
console.log(colors[1]);
console.log(colors[4]);
console.log(colors[-1]); //This will show undefined


// OverWriting elements
colors[0] = "blue";
console.log(colors);

// Length Property
console.log("Length of the color array ", colors.length);
console.log("Length of the booleans array ", booleans.length);
console.log("Length of the enmpt array ", empty.length);


// Adding and Replacing Elements
colors.push("yellow"); //This will add yellow at the end of the color array
colors.splice(1, 0, "white"); //This will add white at index 1 without deleting any element
colors.splice(2, 1, "brown"); //This will add white at index 2 by deleting 1 element (pink)
console.log(colors);


// Deleting Elements
colors.pop(); // this method delete the last element of the array
colors.shift(); // this method delete the first element of the array
colors.splice(1, 3); //this method delete 3 elements from index 1 (1 is index and 3 is number of elements to delete)
delete colors[0]; // this will delete the value of 0 index and make it undefined
console.log(colors)


// Finding Elements
let findIndex = colors.indexOf("red")
console.log(findIndex)
let lastIndex = colors.lastIndexOf("red")
console.log(lastIndex)


// Sorting Elements
marks = [50, 30, 70, 10, 40, 60, 80]
marks.sort();
console.log(marks)

//Reversing
marks.reverse();
console.log(marks)


// Multidimensional arrays
let newMarks = [[30, 40, 50], [60, 70, 80], [90, 100]]
let findValue = newMarks[1][1]; // first value is the array's index and second value is Marks index
console.log(findValue)




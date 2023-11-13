/* Methods of Promises
*/

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Congrats! Your first promise has been fulfilled")
        resolve(true)
    }, 6000);
})


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Hurry! 2nd promise has been fullfilled.")
        reject(new Error("Promise rejected"))
    }, 4000);
})

/* Promise.all => Wait for all the promises to resolve and return the array of their outputs/result */
let promise_all = Promise.all([p1, p2])


/* allSettled wait for all the promises to settled and return their result as an array of objects with status and value*/
let promise_all = Promise.allSettled([p1, p2])
console.log(promise_all);


/*Promise.race => Waits for the first value to be settled and the result becomes the outcomes 
mean it shows only show the first promise*/
let promise_all = Promise.race([p1, p2])


/* Promise.any => Wait for the resolve promise. its only show us the resolve promise. if there is now resolve 
then it will throw an error */

let promise_all = Promise.any([p1, p2])
console.log(promise_all);


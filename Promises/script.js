/* ====> PROMISES:
 A promise is a "Promise of code execution". The code either execute
or fails in both the cases the user will be notified. */

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is in pending stat e");
  setTimeout(() => {
    console.log("Promise has been rejected");
    reject(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("Promise has been resolved");
    resolve(true);
  }, 5000);
});


// Error Handling
p1.catch((error) => {
  console.log("An error occured");
});



/* Promise Chain */

let p3 = new Promise((resolve, reject) => {
  console.log("This is Promise Chain");
  setTimeout(() => {
    console.log("resolve after 5 seconds");
    resolve(true);
  }, 5000);
});

p3.then((value) => {
  console.log(value);
  let p4 = new Promise((resolve, reject) => {
    console.log("This is new promise inside promise");
    setTimeout(() => {
      reject("Promise is rejected");
    }, 3000);
  });
  return p4;
}).then((value) => {
  console.log("we are done");
});

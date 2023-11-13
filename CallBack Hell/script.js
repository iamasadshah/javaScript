// ===> SYNCHRONOUS PROGRMING:
// Which run step by step without any wait or interval

let a = prompt("What is your name?");
let b = prompt("What is your favourite Sport");
let c = prompt("Who is your favourite Player?");

console.log(
  a,
  " Nice Name! ",
  "Let's Play ",
  b,
  "With Your favourite player",
  c
);


// ===> ASYNCHRONOUS PROGRMMING:
// Asynchronous action are the action that we initiate now and finish later. For example setTimeout
console.log("Start");
setTimeout(function () {
  alert("I will print after 5 seconds");
}, 5000);
console.log("End");




// ===> Call Back Function
// A Function passed into another function as an argument which is then invoked inside 
// the outer function to complete and action

function loadScript(src, callback){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("script loaded! \n \nHere is the script", src);
        callback();
    }
    script.onerror = function(){
        console.log("Error Onloading with ", src);
        callback(new Error ("Src Got Some Error, Please Check it out"))
    }
    document.body.appendChild(script)
}

function inform(){
        alert("Script Loaded Successfully")
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js", inform)


// =======> CallBack Hell Or Pyramid of Doom

//  When We have callback inside callback is called CallBack Hell Or Pyramid of Doom.
// We Have to Avoid This Because the code gets difficult to manage.

 For Example 
 loadScript(()){
    loadScript(){
        loadScript(){
            loadScript(){
                loadScript(){
                    loadScript()
                }
            }
        }
    }
 }
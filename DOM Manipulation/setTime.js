// This folowing code will disply the alert after the 5 seconds of page reload.
setTimeout(function() {
    alert("I will display after 5 seconds because of setTimeout")
}, 5000)

// This folowing code will disply after every 5 seconds..
setInterval(function(){
    alert("I will disply after every 5 seonds because of timeInterval")
}, 5000)


let a = prompt("Do you Want to run the setTimeout?")
if ("yes" == a){
    setTimeout(function() {
        alert("This is Diplayed Because you type yes")
    }, 5000)
}else{
    alert("setTimeout Stopped")
}

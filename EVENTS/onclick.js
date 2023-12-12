let a = document.getElementById("btn1")
a.onclick = () => {
    a.innerHTML = "Lets Start"
    // a.style.margin = "10px"
    // a.style.padding = "10px"
    a.style.fontSize = "50px"
    a.style.fontFamily = "cursive"
    a.style.fontWeight = "bolder"
    a.style.borderStyle.backgroundColor = "black"
}



let b = document.getElementById("btn2")
b.onclick = () => {
    let e = prompt("Are You Okey?")
    if (e = "yes"){
        alert("Say ALHAMDULILLAH")
    }
}



let c = document.getElementById("btn3")
c.onclick = () => {
    c.style.backgroundColor = "red"
    c.style.fontSize = "50px"
    c.innerHTML = "Not Submitted"
    c.style.borderRadius = "10px"
}


let d = document.getElementById("btn4")
d.onclick = () => {
    d.style.fontSize = "50px"
    d.innerHTML = "Submitted"
    d.style.backgroundColor = "Green"
    d.style.borderRadius = "10px"
    d.style.translateY = "-1"

const emailField = document.getElementById("email")

emailField.value = "djhemath@gmail.com" 

const passwordField = document.getElementById("pass") 

passwordField.type = "text" 

passwordField.type = "date" 


const arr = document.getElementsByName("login") 
const loginButton = arr[0] 
loginButton.style.backgroundColor = "#F2A900" 
loginButton.style.color = "#222222" 
loginButton.style.border = "1px dashed #222222" 
loginButton.style.boxShadow = "0 0 10px #000" 


function sayMyName() {
  console.log("Hey stupid");
}
setInterval(sayMyName, 3000)


let _width = 100;

function animate() {
  loginButton.style.width = _width + 'px';
  _width += 20;
}

setInterval(animate, 500);



// 'Create account' button
document.getElementById("u_0_0_WD").style.display = 'none' 
document.getElementById("u_0_0_WD").style.display = 'unset' 


// DOM - Add elements
const myButton = document.createElement("button");
document.body.appendChild(myButton) 


// DOM - remove elements
document.getElementById("mybtn").remove()


// Util functions
alert("Hey there!!") 

prompt("Hey, tell me your stupid name?") 


// Remove everything from the UI
document.body.remove() 
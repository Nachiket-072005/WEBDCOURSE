//Que.1 -> Create a new input and button element on the page using JavaScript only. Set the text of button to "click me!".

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me!";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Que.2 -> Add following attributes to the element : 
//         - Change placeholder value of input to "username"
//         - Change the id of button of "btn"

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

//Que.3 -> Access the btn using the querySelector and button id. Change the button background-color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");

//Que.4 -> Create an h1 element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

//Method - 1
let H1 = document.createElement("h1");
H1.innerText = "DOM Practice";

document.querySelector("body").append(H1);
H1.setAttribute("id", "heading");

let head = document.querySelector("#heading");
head.classList.add("h1");

//Method - 2
let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";

document.querySelector("body").append(heading);

//Que.5 -> Create a p tag on the page and set its text to "Apna College Delta Practice", Where Delta is bold.

let para = document.createElement("p");
// para.innerText = "Apna College Delta Practice";
para.innerHTML= "<p>Apna College <b>Delta</b> Practice</p>";

document.querySelector("body").append(para);
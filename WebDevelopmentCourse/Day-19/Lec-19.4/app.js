/*Que.1 -> Try out following events in EventListener on your own.
            - mouseout
            - keypress
            - scroll
            - load */

let btn = document.querySelector("button");

btn.addEventListener("mouseout", function(events) {
    events.preventDefault();

    console.log("Your pointer is out of the button.");
})

let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

user.addEventListener("keypress", function(events) {
    events.preventDefault();

    console.log("Your key is press.");
})

const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.innerHTML = "Scroll event fired!";

  setTimeout(() => {
    output.innerHTML = "Waiting on scroll events...";
  }, 1000);
});

const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});


//Que.2 -> Create a button on the page using JavaScript. Add an event listener to the button that changes the button's color to green when it is clicked.

let button  = document.createElement("button");
button.innerText = "Click me!";

document.querySelector("body").append(button);

button.addEventListener("click", function(event) {
    event.preventDefault();

    button.style.color = "green";
})


/*Que.3 -> Create an input element on the page with placeholder "enter your name" and an h2 hading on the page inside HTML.
The purpose of this input element is to enter a user's name so it should only input letter from a-z, A-Z and space (all other character should not be detected.)
Whenevr input user inputs their name.*/

let input = document.querySelector("#name");

input.addEventListener("input", function(event) {
  event.preventDefault();
  console.log(input.value);
})
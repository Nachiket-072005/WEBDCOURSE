// Question - 1:

let input = document.createElement("input");

let btn = document.createElement("button");
btn.innerText = "Click me";

let body = document.querySelector("body");

body.append(input);
body.append(btn);

// Question - 2:

btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Question - 3:

btn.classList.add("prop");

// Question - 4:

let h1 = document.createElement("h1");

h1.innerText = "DOM Practice";
body.append(h1);
h1.classList.add("purple");

// Question - 5:

let p = document.createElement("p");

p.innerHTML = "Apna College <b>Delta</b> Practice";

body.append(p);

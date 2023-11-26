let input = document.createElement("input");

let btn = document.createElement("button");
btn.innerText = "Click me";

let body = document.querySelector("body");

body.append(input);
body.append(btn);

btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

btn.classList.add("prop");

let h1 = document.createElement("h1");

h1.innerText = "DOM Practice";
body.append(h1);
h1.classList.add("purple");

let p = document.createElement("p");

p.innerHTML = "Apna College <b>Delta</b> Practice";

body.append(p);


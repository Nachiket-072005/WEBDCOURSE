let p = document.createElement("p");

p.innerText = "Hey, I'm red!";

p.classList.add("red");

let container = document.querySelector(".container");

container.append(p);

let h3 = document.createElement("h3");

h3.innerText = "I'm a blue h3!";

h3.classList.add("blue");

container.append(h3);

let div = document.createElement("div");

div.classList.add("prop");

container.append(div);

let h1 = document.createElement("h1");

h1.innerText = "I'm in a div";

div.append(h1);

let para = document.createElement("p");

para.innerText = "ME TOO!";

div.append(para);

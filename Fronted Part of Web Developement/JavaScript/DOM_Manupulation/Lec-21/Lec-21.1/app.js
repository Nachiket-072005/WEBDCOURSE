let smallImages = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImages.length; i++) {
    console.dir(smallImages[i].src);
}

console.dir(document.querySelector("p"));
console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelector("h1"));
console.dir(document.querySelectorAll("p"));


let para = document.querySelector("p");
//innerText => This will show screen text.

console.dir(para.innerText);
//innerHTML => This will show with all HTML tags.

console.dir(para.innerHTML);
//textContent => This will show that text written in html document.

console.dir(para.textContent);

//Manipulating Attribute

let img = document.querySelector("#mainImg");

console.dir(img);
//getAttribute & setAttribute
console.log(img.getAttribute("id"));
console.log(img.setAttribute("id", "spiderImg"));
console.log(img.getAttribute("id"));
console.log(img.setAttribute("id", "mainImg"));
console.log(img.getAttribute("id"));

//Manipulating Attribute with style

let heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "yellow";

let links = document.querySelectorAll(".box a");

for(let link of links) {
    link.style.color = "purple";
}

//classList Property

//contains => That means it gives us values true or false if class exist then give true otherwise false.
console.log(heading.classList.contains("heading"));
//toggle => That means it also gives us values true or false if class exist then remove that class otherwise add these which you have already declare in the property.
console.log(heading.classList.toggle("heading"));
console.log(heading.classList.toggle("heading"));
//add => That means it adds class on that particular element.
console.log(heading.classList.add("underline"));
//remove => That means it removes class on that particular element.
console.log(heading.classList.remove("underline"));

//Navigation on Page

let box = document.querySelector(".box");

console.log(box);

console.log(box.childElementCount);
console.log(box.children);

let h4 = document.querySelector("h4");
console.log(h4);

console.log(h4.parentElement);
console.log(h4.previousElementSibling);
console.log(h4.nextElementSibling);

//Adding Element on Page

let body = document.querySelector("body");

let newPara = document.createElement('p');

newPara.innerHTML = "This is new <b>paragraph.</b>";

console.dir(newPara);

body.appendChild(newPara);

box.append(newPara);

let btn = document.createElement("button");

btn.innerText = "Click me!";

console.dir(btn);

box.append(btn);

newPara.prepend(btn);
newPara.append(" do not hit the click me button.");
newPara.prepend(" Please read all the details carefully ");

let btn2 = document.createElement("button");
btn2.innerText = "newButton";
let p = document.querySelector("p");
p.insertAdjacentElement("beforebegin", btn2);
p.insertAdjacentElement("afterbegin", btn2);
p.insertAdjacentElement("beforeend", btn2);
p.insertAdjacentElement("afterend", btn2);

let btns = document.querySelectorAll("button");

for(btn of btns) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function() {
    //     console.log("You're entered in the button.");
    // }
    console.dir(btn);

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function() {
        console.log("You're clicked 2 times me!");
    })
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Nachiket Prajapati Here...");
}

// this in event listener

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "yellow";
    this.style.color = "red";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);

let input = document.querySelector("input");

input.addEventListener("keydown", function(event) {
    console.log("Code = ", event.code);
    if(event.code == "keyU") {
        console.log("ArrowUp");
    } else if(event.code == "keyD") {
        console.log("ArrowDown");
    } else if(event.code == "keyL") {
        console.log("ArrowLeft");
    } else {
        console.log("ArrowRight");
    }
});

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.dir(form);

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});


let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

user.addEventListener("change", function(event) {
    event.preventDefault();
    console.log(this.value);
    console.log("Your input was changed.");
});

pass.addEventListener("input", function(event) {
    console.log(this.value);
    console.log("Your input was changed.");
});


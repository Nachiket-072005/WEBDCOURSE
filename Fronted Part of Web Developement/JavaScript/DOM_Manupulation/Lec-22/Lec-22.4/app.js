let btn = document.createElement("button");
btn.innerText = "Submit";
let body = document.querySelector("body");

body.append(btn);

btn.addEventListener("click", changeColor);

function changeColor() {
    this.style.color = "green";
}

let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input", function(event) {
    event.preventDefault();
    console.log(this.value);
    h2.innerText = this.value;
});

// input.addEventListener("beforeinput", e => 
// /^[A-Za-z ]+$/.test(e.data) || h2.innerText , "this.value" || e.preventDefault());

let input = document.querySelector("input");

// input.addEventListener("keydown", function(event) {
//     console.log(event.key);
//     console.log(event.code);
//     console.log("Key is pressed.");
// })

input.addEventListener("keydown", function (event) {
  console.log("code = ", event.code);
  if (event.code == "ArrowUp") {
    console.log("Charater moves forwards.");
  } else if (event.code == "ArrowDown") {
    console.log("Character moves backwards.");
  } else if (event.code == "ArrowLeft") {
    console.log("Charater moves left.");
  } else if (event.code == "ArrowRight") {
    console.log("Character moves right.");
  }
});

//Key -> Up(U), Down(D), Right(R), Left(L)

input.addEventListener("keydown", function (event) {
  console.log("code = ", event.code);
  if (event.code == "KeyU") {
    console.log("Charater moves Up.");
  } else if (event.code == "KeyD") {
    console.log("Character moves down.");
  } else if (event.code == "KeyL") {
    console.log("Charater moves left.");
  } else if (event.code == "KeyR") {
    console.log("Character moves right.");
  }
});
// input.addEventListener("keyup", function() {
//     console.log("Key is released.");
// })
// input.addEventListener("keydown", function() {
//     console.log("Key is pressed.");
// })

let btns = document.querySelectorAll("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

// btn.onclick = function() {
//     console.log("You like this photo...");
// }

for (btn of btns) {
  // btn.onclick = sayHello;
  // btn.onmouseenter = function() {
  //     console.log("You enter in button.");
  // }

  // btn.addEventListener("click", sayHello);
  // btn.addEventListener("click", saySen);
  btn.addEventListener("dblclick", function () {
    console.log("You clicked me twice times.");
  });
}

btn.addEventListener("click", function (event) {
  console.log(event);
  console.log("You clicked me.");
});

function sayHello() {
  alert("Hello user!");
}

function saySen() {
  alert("I hope you're doing well.");
}

function changeColor() {
  console.dir(this.innerText);
  this.style.color = "blue";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);

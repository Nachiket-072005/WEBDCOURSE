//Arithmetic Operators
let a = 10;
let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//Unary Operators 

console.log(a++); //10
console.log(++a); //12
console.log(--b); //4
console.log(b--); //4

let color = "yellow";

//Traffic light signal
if(color === "red"){
    console.log("Please stop your vehicle!");
}
if(color === "yellow"){
    console.log("Please slow down your vehicle!");
}
if(color === "green"){
    console.log("You can go now.");
}


// Grade Marks 

let Marks = "20";

//Using if-else statement
if(Marks >= "80"){
    console.log("A+ Grade");
}
else if(Marks >= "70"){
    console.log("A Grade");
}
else if(Marks >= "60"){
    console.log("B Grade");
}
else if(Marks >=40){
    console.log("C Grade");
}
else if(Marks >=33){
    console.log("D Grade");
}
else {
    console.log("Sorry..! You're fail in the Exam.");
}
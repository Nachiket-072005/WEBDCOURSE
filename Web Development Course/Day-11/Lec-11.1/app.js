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

// Practice Questions
let psize = "XL";

if(psize === "XL"){
    console.log("Price is Rs.250.");
}
else if(psize === "L"){
    console.log("Price is Rs.200.");
}
else if(psize === "M"){
    console.log("Price is Rs.100.");
}
else {
    console.log("Price is Rs.50.");
}

//Nested if-else 
let marks = 32;

if(marks >=33){
    console.log("Pass");
    if(marks >= 80){
        console.log("Grade : O");
    }
    else {
        console.log("Grade : A");
    }
}
else {
    console.log("Better luck next time!");
}

//Practice Questions
let str = "snake";

if(str[0] === "a" && str.length >= 5){
    console.log("Good String!");
}
else{
    console.log("It's not good string!");
}

//Que2 
let num = 12;

if((num%3 === 0) && (num+1 == 15) || (num-1 == 11)){
    console.log("Safe");
}
else {
    console.log("Unsafe");
}

//Switch Statement
let colour = "blue";

switch(colour){
    case "red": console.log("Stop");
    break;
    case "yellow": console.log("Slow down");
    break;
    case "green": console.log("Go");
    break;
    default: console.log("Light is broken.");
}

//Practice Questions
let day = 1;

switch(day){
    case 1 : console.log("Monday");
    break;
    case 2 : console.log("Tuesday");
    break;
    case 3 : console.log("Wednesday");
    break;
    case 4 : console.log("Thursday");
    break;
    case 5 : console.log("Friday");
    break;
    case 6 : console.log("Saturday");
    break;
    case 7 : console.log("sunday");
    break;
    default : console.log("You're input invalid");
}

// alert("Something went wrong!");

// console.log("This is a simple text.");
// console.error("This is an error.");
// console.warn("This is a warning.");

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
let msg = console.log("Welcome bro" + " " + firstName +  lastName + "!");
alert(msg);
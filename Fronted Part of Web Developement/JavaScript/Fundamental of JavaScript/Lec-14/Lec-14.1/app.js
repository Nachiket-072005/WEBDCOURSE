// Lecture Codes

console.log("Hello Jii...!!");
console.log("How is your day ?");
console.log("This is Nachiket Prajapati here...!!");

// Template Literals

let pencilPrice = 10;
let erasorPrice = 5;

console.log(`The total price is = ${pencilPrice + erasorPrice} rupees.`);

let a = 10;
let b = 5;

//Arithmetic Operators

console.log("Sum of a & b is : ", a + b);
console.log("Subtraction of a & b : ", a - b);
console.log("Multiplication of a & b : ", a * b);
console.log("Division of a & b : ", a / b);
console.log("Remainders of a & b is : ", a % b);

//Unary Operators

console.log(a++); //10
console.log(++a); //12
console.log(a--); //12
console.log(--a); //10

//If Statement
//Now, Create a prompt :-
// Practice Question - Traffic Light System
let color = "red";

if (color == "red") {
  console.log("Stop! Light color is red.");
} else if (color == "yellow") {
  console.log("You can slow down your speed. Light color is yellow.");
} else if (color == "green") {
  console.log("You can go. Light color is green.");
} else {
  console.log("Traffic light is broken.");
}

// else-if Statement - Practice Question
console.log("You can select any of these type of size : 1.XL, 2.L, 3.M, 4.S");
let size = "S";

if (size == "XL") {
  console.log("Price is Rs.250.");
} else if (size == "L") {
  console.log("Price is Rs.200.");
} else if (size == "M") {
  console.log("Price is Rs.100.");
} else {
  console.log("Price is Rs.50");
}

//Nested if-else

let marks = 80;

if (marks >= 33) {
  console.log("Congratulations, Pass!!");
  if (marks >= 80) {
    console.log("Grade : O");
  } else {
    console.log("Grade : A");
  }
} else {
  console.log("Sorry, Better luck next time!!");
}

// Practice Questions

let str = "Aim";

if ((str[0] == "a" || str[0] == "A") && str.length > 3) {
  console.log(`${str} is a good string.`);
} else {
  console.log(`${str} is not a good string.`);
}

let num = 12;

if ( (num % 3 == 0) && ( (num + 1 == 15) || (num - 1 == 11) )) {
  console.log("Safe Zone.");
} else {
  console.log("Unsafe zone.");
}

//Switch Statement

let _color = "red";

switch (_color) {
  case "red":
    console.log("STOP!!");
    break;
  case "yellow":
    console.log("SLOW DOWN!!");
    break;
  case "green":
    console.log("GO!!");
    break;
  default:
    console.log("Light is broken!!");
}

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wedenesday");
    break;
  case 4:
    console.log("Thurday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Sorry! Wrong Input.");
}

//Alert & Prompt

// alert("Something went wrong!!");
// console.log("Hey!!");
// console.error("Why this kind of error throw?");
// console.warn("Why this kind of warning show?");


// let firstName = prompt("Enter your first name : ");
// let lastName = prompt("Enter your last name : ");
// console.log(`Welcome to ${firstName + " " + lastName}`);
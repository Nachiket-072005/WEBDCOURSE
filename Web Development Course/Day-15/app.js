//Print Hello Using function.
function printHello() {
    console.log("Hello!");
}
printHello();
printHello();
printHello();

//Sum of 2 num.
function sum(a, b) {
    console.log(a+b);
}

sum(1, 2);

//Print whatever table using simply by add n value.
function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}

printTable(4);

//Calculate three num of Average. 
function calcAvg(a, b, c) {
    console.log((a+b+c)/3);
}

calcAvg(4, 4, 4);

//Print Infomation about person.
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Nachiket", 19);
printInfo("Rudra", );

//Print Poem using fuction 
function printPoem() {
    console.log("Twinkle Twinkle little star,");
    console.log("How I wonder what you are...");
}

printPoem();

//Dice roll using fuction 

function diceRoll() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();

//Add three num using function.
function add(a, b) {
    console.log("Hello!");
    console.log("Hello!");
    return a+b;
    console.log("Hello!");
    console.log("Hello!");
}

console.log(add(add(1, 2), 3));

//Are you adult or not?

function isAdult(age) {
    if(age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}

console.log(isAdult(19));

//Return the sum of numbers from 1 to n.

function getSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) {
        sum = sum + i; //sum += i;
    }

    return sum;
}

console.log(getSum(2));

//Concatination function on arrays 

let str = ["Hello! ", "How ", "are ", "you ", "?"];

function concat(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        result += str[i];
    }
    return result;
}

console.log(concat(str));

//Scope 
//1.Function Scope

// let sum = 50; //Global Scope anywhere can use 

function calSum(a, b) {
    sum = a+b;          //Function Scope
    console.log(sum);
}

calSum(1, 2);
console.log(sum);

//2.Block Scope

let age = 23;
if(age >= 18) {
    let str = "Adult"; //Block Scope
    console.log(str);
}

console.log(str);

//3.Lexical Scope

function outerFunc() {
    let x = 5;
    let y = 4;
    function innerFuc() {
        console.log(x+y);  //Lexical Scope
    }
    innerFuc();
}

// outerFunc();

function outerFunc() {
    function innerFuc() { //Function Scope
        console.log(x);
        console.log(y);  //With the help of "Hoisting". 
    }
    let x = 5;
    let y = 4;
    innerFuc();
}

outerFunc();

//Practice Que

let greet = "Hello!";         //Global Scope

function changeGreet() {     
    let greet = "Namaste!";     //Function Scope
    console.log(greet);

    function innerGreet() {   
        console.log(greet);   //Lexical Scope
    }
    innerGreet();
}

console.log(greet);
changeGreet();

//Function Expression

let string = "Nachiket";

let addSum = function(a, b) {
    return a+b;
}

addSum(1, 2);

let hello = function() {
    console.log("Hello!");
}

//Higher Order Function 

function multipleGreet(func, count) {  //Higher Order Function
    for(let i=1; i<=count; i++) {
        func();
    }
}
let greeting = function() {
    console.log("Hello!");
}

multipleGreet(greeting, 10);


function oddOrEvenfactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0))
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("Wrong request!");
    }
}
let request = "odd";

// const calculator = {
//     num : 50,

//     add : function(a, b) {
//         return a+b;
//     },
//     sub : function(a, b) {
//         return a-b;
//     },
//     multi : function(a, b) {
//         return a*b;
//     }
// }
const calculator = {
    num : 50,

    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    },
    multi(a, b) {
        return a*b;
    }
}

console.log(calculator.add(1,2));
console.log(calculator.sub(1,2));
console.log(calculator.multi(1,2));
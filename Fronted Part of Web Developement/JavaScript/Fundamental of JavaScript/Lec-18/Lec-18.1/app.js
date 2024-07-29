//to say hello
function hello() {
  console.log("Hello!");
}

//to say our name
function printName() {
  console.log("Nachiket Prajapati");
}

//to print 1 to 5
function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

//to print isAdult or not
function isAdult() {
  let age = 18;
  if (age >= 18) {
    console.log("You are adult.");
  } else {
    console.log("You aren't adult.");
  }
}

hello();
printName();
print1to5();
isAdult();

//Practice Que

function printPoem() {
  console.log("Twinkle Twinkle, little star,");
  console.log("How I wonder, what you are.");
}

printPoem();

function diceRoll() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}

diceRoll();

function calcAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

calcAvg(1, 2, 3);

function mulTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}

mulTable(16);

//Functions with arguments

function prinName(name) {
  console.log(name);
}

prinName("Nachiket");

function sum(a, b) {
  console.log(a + b);
}
sum(1, 3);
sum(4, 5);

//return keyword

// Practice Question

function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(10));

let str = ["hi", "hello", "bye", "!"];

function concat(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

console.log(concat(str));

//Scope

// let sum = 54; //Global Scope

function calcSum(a, b) {
  let sum = a + b; //Function Scope
  console.log(sum);
}

calcSum(1, 2);
// console.log(sum);

for (let i = 1; i <= 5; i++) {
  console.log(i); //Block Scope
}

// console.log(i);

function outerFunc() {
  let x = 5;
  let y = 6;

  function innerFunc() {
    let a = 10;
    console.log(x); //Lexical Scope
    console.log(y); //Lexical Scope
  }
  innerFunc();
  // console.log(a);
}

let greet = "hello";

function changeGreet() {
  let greet = "namaste";
  console.log(greet);

  function innerGreet() {
    console.log(greet);
  }
}

console.log(greet); // hello
changeGreet();  // namaste

//Function Expressions

let hello_ = function () {
  console.log("Hello!");
};
hello_();

let sum_ = function (a, b) {
  return a + b;
};

console.log(sum_(1, 2));

//Higher Order Functions

function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let _greet = function () {
  console.log("Hello!");
};

multipleGreet(_greet, 2);

//Higher Order Function Returns

function oddEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong request!");
  }
}

//Methods

// const calculator = {
//     add : function(a, b) {
//         return a+b;
//     },
//     sub : function(a, b) {
//         return a-b;
//     },
//     mul : function(a, b) {
//         return a*b;
//     }
// };

//Shorthand of above objects

const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};

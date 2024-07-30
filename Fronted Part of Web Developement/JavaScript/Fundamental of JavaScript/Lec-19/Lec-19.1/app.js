//this keyword in JS

const student = {
  name: "Nachiket",
  age: 18,
  eng: 85,
  math: 94,
  phy: 91,
  getAvg() {
    console.log(this);
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  },
};

console.log(student.getAvg());

function getAvg() {
  console.log(this);
}

console.log(getAvg());

//try & catch

console.log("Hey!");
console.log("Good Morning...");
try {
  console.log(a);
} catch (err) {
  console.log("This was an error : ", err);
  console.log("Variable doesn't defined.");
}
console.log("How are you?");
console.log(
  "If you have query then ask me I can definitely help you throught your journey."
);

//Arrow Function

// let sum = (a, b) => {
//     return a+b;
// };

let sayHello = () => {
  console.log("Hello!");
};

// let cube = n => {
//     return n*n*n;
// };

// let pow = (a, b) => {
//     return a**b;
// };

//Compact Version of Arrow Function with implicit return

let sum = (a, b) => a + b;

let cube = (n) => n * n * n;

let pow = (a, b) => a ** b;

let mul = (a, b) => a * b;

//setTimeOut Function

console.log("Hi there!");

setTimeout(() => {
  console.log("Apna College");
}, 4000);

console.log("Welcome to");

//setInterval Function

let id = setInterval(() => {
  console.log("Hello!");
}, 2000);

console.log(id);
clearInterval(id); //To Stop from setInterval

//this with arrow function

const _student = {
  name: "Nachiket",
  age: 18,
  marks: 94,
  prop: this, //Global Scope
  getName: function () {
    console.log(this); //Calling Objects -> Function Scope
    return this.name;
  },
  getMarks: () => {
    console.log(this); //Parent's Scope -> Lexical Scope
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //Student Object -> Parent's Scope
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //Window Object -> Calling Objects
    }, 2000);
  },
};

//Practice Question

let sq = (n) => n ** 2;

let id_ = setInterval(() => {
  console.log("Hello");
}, 2000);

setTimeout(() => {
  clearInterval(id_);
}, 10000);

//this Keyword

const student = {
    name : "Nachiket",
    age : 19,
    eng : 94,
    math : 98,
    phy : 95,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name}'s got average marks = ${avg}`);
    }
};

function getAvg() {
    console.log(this);
    // let avg = (this.eng + this.math + this.phy)/3;
    // console.log(`${this.name}'s got average marks = ${avg}`);
}

//Try and Catch Concept

console.log("Hello");
console.log("Everyone...");

// let a = 5;
try {
    console.log(a);
} catch(err) {
    console.log("Caught an error...a is not defined.");
    console.log(err);
}

console.log("What");
console.log("you");
console.log("doing");
console.log("now ?");

//Miscellaneous Topic

//Arrow Function

const sum = (a, b) => {
    console.log(a+b);
};

const cube = n => {
    return n*n*n;
};

const pow = (a, b) => {
    return a ** b;
};

//Implicit Function

const mul = (a, b) => (a * b);

//Set Timeout Function

console.log("Hi there!");

setTimeout( () => {
    console.log("Nachiket's Dunia");
}, 4000)

console.log("Welcome to");

//Set Interval Function 

let id = setInterval( () => {
    console.log("Hello World...!!");
}, 2000)

console.log(id);

let id2 = setInterval( () => {
    console.log("Hello Dunia...!!");
}, 2000)

console.log(id2);

//this with arrow function

const students = {
    name : "Nachiket",
    marks : 95,
    prop : this,            //Global Scope
    getName : function () {
        console.log(this);  
        return this.name;
    },
    getMarks : () => {
        console.log(this);   //Parent's Scope -> Window
        return this.marks;
    },
    getInfo1 : function () {
        setTimeout ( () => {
            console.log(this);  //Students
        }, 2000);
    },
    getInfo2 : function () {
        setTimeout ( function () {
            console.log(this);  //Window
        }, 2000);
    }
};

//Practice Questions

const square = (n) => (n * n);
console.log(square(11));


let id3 = setInterval( () => {
    console.log("Hello World!");
}, 2000);

setTimeout( () => {
    clearInterval(id3);
}, 10000);
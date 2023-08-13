//Que.1 -> Write an array function named arrayAverage that accepts an array of number and returns the average of those number.

let arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr) {
        total += number;
    }
  return total/arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

//Que.2 -> Write an arrow function named isEven() that takes a single number as argument and return if it is even or not.
let num = 4;

let isEven = (num) => num % 2 == 0;
console.log(isEven(num));

//By Own :-
// let isEven = (n) => {
//     if(n%2 == 0) {
//         return "Even No.";
//     } else {
//         return "Odd No.";
//     }
// };

// console.log(isEven(2));

//Que.3 -> What is the output of the following code?

const object = {
    message : "Hello, World!",

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

/* Ans. : After a delay of 1 sec, undefined is logged to the console.

While the setTimout() function uses the object.logMessage as a callback, still, it invokes object.logMessage as a regular function, rather than a method.

And during a regular function invocation this equals the global object, which is a window in case of the browser environment.

That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.
*/

//Que.4 -> What is the output of the following code?

let length = 4;

function callback() {
    console.log(this.length);
}

const obj = {
    length : 5,
    method(callback) {
        callback();
    },
};

console.log(obj.method(callback, 1, 2));

/* Ans. : 'Hello, World!' is logged to the console.

obj.getMessage() is a method invocation, that's why this inside method equals object.

There's also a veriale declaration const message = 'Hello, World!' inside the method.
The variable dosen't influence the value of this.message. 
*/


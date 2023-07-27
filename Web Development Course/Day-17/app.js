let arr = [1, 2, 3, 4, 5];

//First Method
let print = function(el) {
    console.log(el);
};

arr.forEach(print);

//Second Method

arr.forEach( function(el) {
    console.log(el);
});

//Third Method
arr.forEach( (el) => {
    console.log(el);
});


let array = [{
    name: "Nachiket",
    marks: 95
}, 
{
    name: "Karan",
    marks: 94
}, 
{
    name: "Het",
    marks: 98
}];

array.forEach( (students) => {
    console.log(students.marks)
});

let CGPA = array.map( (el) => {
    return el.marks/10;
});

//Map Function
let num = [1, 2, 3, 4];

let double = num.map( (el) => {
    return el * el;
});

//Filter Function

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = nums.filter( (el) => {
    return el % 2 == 0;         //Even -> true, Odd -> false
});

//Every Function

let newArr = [1, 3, 5];

let ev = newArr.every( (el) => {
    return el % 2 != 0;
});

//Some Function

let reArr = [1, 3, 5];

let t = reArr.some( (el) => {
    return el % 2 == 0;
});

//Reduce Function
let no = [1, 2, 3, 4];

let finalVal = no.reduce( (res, el) => {
    console.log(res);   
    return (res + el)});
console.log(finalVal);

//Maximum in array

let tArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = tArr.reduce( (max, el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});

// for(let i=0; i<tArr.length; i++) {
//     if(max < tArr[i]) {
//         max = tArr[i];
//     }
// }

console.log(max);

//Practice Questions 1
let number = [10, 20, 30, 40, 5];

let ans = number.reduce( (el) => el % 10 == 0);
console.log(ans);

//Practice Questions 2

function getMin(number) {
    let min = number.reduce( (min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}

// console.log(min);

console.log(getMin(number));

//Default Parameter

function sum(a, b = 2) {
    return a + b;
}

console.log(sum(2));

//Spread 

let newArr1 = [1, 2, 3, 4, 5, 0, 9, 5, 6, 0, -1, -3];

let minimum = Math.min(...newArr1);
console.log(minimum);

let maximum = Math.max(...newArr1);
console.log(maximum);

console.log(newArr1);
console.log(...newArr1);

let str = "apnacollege";

console.log(str); 
console.log(...str);  //Individual elements print out 

//With array literals

let arr2 = [1, 2, 3, 4, 5];

let newArr2 = [...arr2];

console.log(newArr2);

let chars = [..."hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even1 = [2, 4, 6, 8, 10];

let numbers = [...even1, ...odd];
console.log(numbers);

//With objects literals

const data = {
    email: "ironman@gmail.com",
    password: "abcd"
};

const dataCopy = {...data, id: 123};
console.log(dataCopy);

let obj = {...chars};
console.log(obj);

//Rest
function sum(...args) {
    //arguments
    for(let i=0; i<args.length; i++) {
        console.log("You gave us :", args[i]);
    }
}

console.log(sum(1, 2, 3, 4));

function min() {
    console.log(arguments);
    console.log(arguments.length);
}

function sum(...args) {
    return args.reduce( (sum, el) => sum + el);
}

function min(msg, ...args) {
    console.log(msg);
    return args.reduce( (min, el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    });
}

//Destructuring 

let names = ["tony", "bruce", "denial", "stark", "steve"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...others] = names;

//Destructuring with objects

const student = {
    name: "Karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "eng", "science", "math"],
    username: "karan@13",
    password: "abcd",
    city: "Pune",
};

// let username = student.username;
// let password = student.password;

let {username: user, password: secret, city: place = "Mumbai"} = student;


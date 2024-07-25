//String Methods 

//1.trim method

let str = "  Hello  ";
let newStr = str.trim();
console.log(newStr);

//Strings are immutable that means it will create a new strings.
//2.toLowerCase & toUpperCase

console.log(newStr.toLowerCase());
console.log(newStr.toUpperCase());

//3.indexOf
let msg = "ILoveCoding";

console.log(msg.indexOf("Love"));
console.log(msg.indexOf("o"));
console.log(msg.indexOf("j"));

//4.Method of chaining 

//This is first concept & Why we use Method Chaining?
// let newMsg = str.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg)

console.log(str.trim().toUpperCase());

//5.slice Method
//slice(start, end) --> Here, End is Non-Inclusive.
console.log(msg.slice(1, 5));
console.log(msg.slice(5));
//slice(-num) = slice(length - num)
console.log(msg.slice(-2)); //11-2 ==> 9
console.log(msg.slice(0, 5)); 

//6.replace & repeat Methods

console.log(msg.replace("Love", "Do"));
console.log(msg.replace("o", "u"));
console.log(msg.repeat(3));

let _msg = "Mango";
console.log(_msg.repeat(4));

//Practice Questions -> Part-1

let $msg = "  help!";

console.log($msg.trim().toUpperCase());

let name = "ApnaCollege";

console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));

console.log(name.slice(4).replace("l", "t"));

//Array Data Structure
let arr = ["nachiket", "rudra", "aman", "bob"]; // Strings array
let marks = [90, 89, 65, 45]; // Numbers array
let info = ["Nachiket", 85, 22.98]; // Mixed array

let newArr = []; // Empty array

console.log(arr[2]);
console.log(arr[1][1]);

console.log(arr.length);

//Arrays are mutable that means it will not create new array.
//Array methods --> 1.push = add at the end, 2.pop = delete at the end, 3.unshift = add at the start, 4.shift = delete at the start

arr.push("tony");
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("tony");
console.log(arr);

arr.shift();
console.log(arr);

//Practice Questions 

let months = ["january", "july", "march", "august"];

months.shift();
// console.log(months);
months.shift();
// console.log(months);
months.unshift("june");
// console.log(months);
months.unshift("july");
console.log(months);

//indexOf & includes methods

let primary = ["red", "yellow", "blue"];

console.log(primary.indexOf("red"));
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("green"));
console.log(primary.includes("green"));
console.log(primary.includes("blue"));
console.log(primary.includes("red"));

//concatenation & reverse methods

let secondary = ["orange", "pink", "white"];

console.log(primary.concat(secondary));
console.log(secondary.concat(primary));

console.log(primary.reverse());
console.log(secondary.reverse());

let allColors = primary.concat(secondary);

console.log(allColors);

//slice method

console.log(allColors.slice(4));
console.log(allColors.slice(-2));
console.log(allColors.slice(0, 5));

//splice method

console.log(allColors.splice(4));
console.log(allColors);
console.log(allColors.splice(0, 1));
console.log(allColors);
console.log(allColors.splice(2, 2, "black"));
console.log(allColors);

//sort method

let chars = ['d', 'e', 's', 'r', 'a'];

console.log(chars.sort());

//Practice Questions


let _months = ["january", "july", "march", "august"];

months.splice(0, 2, "july", "june");
console.log(months);

let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

console.log(lang.reverse());
console.log(lang.indexOf("javascript"));

//Array references

let _arr =  ['a', 'b'];

let arrCopy = _arr;

console.log(arrCopy);

arrCopy.push('c');

console.log(_arr);

console.log(_arr == arrCopy);

//Operations are followed by constant array.
const arr_ = [1, 2, 3];

console.log(arr_.push(4));
console.log(arr_.pop());

//Nested array 

let array = [ [2, 4], [3, 6], [4, 8] ];

console.log(array[0][0]); // arrName[row][col]
console.log(array[1]);
console.log(array[2][0]);

//Practice Questions

let game = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X'] ];

console.log(game);
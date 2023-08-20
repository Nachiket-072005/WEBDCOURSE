let msg = "help!";

let name = "ApnaCollege";

let arrays = ["Nachiket", "Rudra", "Aman"];

let nums = [2, 4, 6, 8];


let cars = ["audi", "bmw", "mercedez", "xuv"];

let start = ["january", "july", "march", "august"];

let primary = ["red", "yellow", "blue"];
let secondary = ["green", "violet", "pink"];

let ttt = [ ['X', null, '0'], [null, 'X', null], ['0', null, 'X'], ];

// Que.1,2

let arr = [7, 9, 0, -2];
let n = 3;

console.log(arr.slice(0,n));
console.log(arr.slice(arr.length-n));

//Que.3

let str1 = prompt("Enter String: ");

if(str1.length == 0){
    console.log("Blank");
}
else{
    console.log("Not blank");
}

//Que.3

let string = "Hello";

if(str == ""){
    console.log("Blank");
}
else{
    console.log("Not blank");
}

//Que.4

let str = "nAcHiKet PrAjApaTi"
let index = 4;

if(str[index] == str[index].toLowerCase()){
    console.log("Character is lower case.");
}
else {
    console.log("Character is upper case.");
}

//Que.5

//Write a JavaScript program to strip leading and trailing spaces from a string.

let str2 = prompt("Please enter string: ");

console.log(`Original String = ${str2}`);
console.log(`String without spaces = ${ str2.trim() }`);

//Que.6

let arr2 = ["hello", "a", 5, 60, 12];
let item = "";

if(arr2.indexOf(item) != -1){
    console.log("Element exist in an array.");
}
else{
    console.log("Element doesn't exist in an array.");
}
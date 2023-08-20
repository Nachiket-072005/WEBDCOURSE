// Assignment Quenstions

//1st Que.
let num = 50;

if(num % 10 === 0){
    console.log("Good!");
}
else {
    console.log("Bad!");
}

//2nd Que.


// let sent1 = prompt("Enter Your Name:"); 
// let sent2 = prompt("Enter Your age:");
// alert(`${sent1} is ${sent2} years old.`);

//3rd Que.

let number = 2;

switch(number){
    case 1: console.log("January, February, March");
    break;
    case 2: console.log("April, May, June");
    break;
    case 3: console.log("July, August, September");
    break;
    case 4: console.log("October, November, December");
    break;
    default: console.log("Wrong input.");
    break;
}

//4th Que.

let str = "Appartus";

if((str[0] === 'A' || str[0] === 'a') && (str.length > 5)){
    console.log("Golden String.");
}
else{
    console.log("String is not golden.");
}

//5th Que.

let a = 1;
let b = 7;
let c = 6;

if(a>b){
    if(a>c){
        console.log(`${a} is max.`);
    }
    else{
        console.log(`${c} is max.`);
    }
}
else if(b>c){
    console.log(`${b} is max.`);
}
else {
    console.log(`${c} is max.`);
}

//6th Que.

let num1 = 32;
let num2 = 47852;

if((num1%10) == (num2%10)){
    console.log("numbers have the same last digit which is", num1%10);
}
else {
    console.log("numbers don't have the same last digit.");
}

let num = 20;

if(num % 10 == 0){
    console.log("Good");
}
else {
    console.log("Bad");
}

let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
let sentence = `${name} is ${age} years old.`;
alert(sentence);

let quarter = 1;

switch(quarter) {
    case 1 : 
        console.log("January,February,March");
        break;
    case 2 : 
        console.log("April,May,June");
        break;
    case 3 : 
        console.log("July,August,September");
        break;
    case 4 : 
        console.log("October,November,December");
        break;
    default : 
        console.log("Wrong Input");
}

let str = "Apple";

if((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
    console.log("Golden String");
}
else {
    console.log("Not a Golden String.");
}

let a = 8;
let b = 6;
let c = 5;

if(a > b) {
    if(a > c) {
        console.log("a is largest.");
    }
    else {
        console.log("c is largest.");
    }
}
else {
    if(b > c) {
        console.log("b is largest.");
    }
    else {
        console.log("c is largest.");
    }   
}

let num_1 = 32;
let num_2 = 47852;

if((num_1%10) == (num_2%10)) {
    console.log("Same last digit.", num_1%10);
}
else {
    console.log("Not same last digit.");
}
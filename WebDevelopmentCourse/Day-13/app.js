for(let i=1; i<=10; i++) {
    console.log(i);
}


for(let i=1; i<=15; i += 2){
   console.log(i);
}

console.log("Backwords");

for(let j=15; j>=1; j = j-2){
    console.log(j);
}

for(let i=2; i<=10; i = i+2) {
    console.log(i);
}


for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

for(let i=5; i<=50; i=i+5){
    console.log(i);
}

let n = prompt("Enter your number: ");
n = parseInt(n);

for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

for(let i=1; i<=3; i++){
    console.log(`Outer loop ${i} : `)
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}


let j = 1;

while(j<=5) {
    console.log(j);
    j++;
}

let i = 1; 

while(i<=5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}

console.log("We used break at 3.");

let fruits = ["mango", "banana", "litchi", "apple", "orange"];

for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

for(let i=fruits.length-1; i>=0; i--) {
    console.log(i, fruits[i]);
}

let heroes = 
[
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

for(let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

let students = [
    ["Rudra", 95], ["Nachiket", 98], ["Aman", 97]
];

for(let i=0; i<students.length; i++) {
    console.log(`Info of student #${i+1}`);
        for(let j=0; j<students[i].length; j++) {
            console.log(`j=${i}, ${students[i][j]}`);
        }
    }

let fruit = ["mango", "banana", "litchi", "apple", "orange"];

 for(fruit of fruits) {
    console.log(fruit);
 }
// Applying on string :-
let str = "CodeHelp";

for(char of str) {
    console.log(char);
}

let heroe    = 
[
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

for(list of heroes) {
    for(name of list) {
        console.log(name);
    }
}
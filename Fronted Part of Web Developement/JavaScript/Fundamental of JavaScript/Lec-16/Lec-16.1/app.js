//for loops in JS

//Odd Numbers from 1 to 15
console.log("Odd Numbers from 1 to 15");
for(let i=1; i<=15; i += 2) {
    console.log(i);
}

//Even Numbers from 2 to 10
console.log("Even Numbers from 2 to 10");
for(let i=2; i<=10; i += 2) {
    console.log(i);
}


// let n = prompt("Enter your table number : ");
// n = parseInt(n);

// for(let i=n; i<=(n*10); i += n) {
//     console.log(i);
// }

//Nested loops

for(let i=1; i<=3; i++) {
    console.log(`outer loop : ${i}`);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}

//while loop

let i = 1;

while(i<=5) {
    console.log(i);
    i++;
}

//break keyword

let k = 1;

while(k<=5) {
    if(k == 3) {
        break;
    }
    console.log(k);
    k++;
}

//loops with array
let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

//Nested loops with array
let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

for(let i=0; i<heroes.length; i++) {
    console.log(`${i}, ${heroes[i]}, ${heroes[i].length}`);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j = ${j}, ${heroes[i][j]}`);
    }
}

//for-of-loop --> element of collections

for(fruit of fruits) {
    console.log(fruit);
}

for(char of "apnacollege"){
    console.log(char);
}

//Nested for of loop

for(list of heroes) {
    console.log(list);
    for(hero of list) {
        console.log(hero);
    }
}
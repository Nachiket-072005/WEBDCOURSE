for(let i=1; i<=10; i++) {
    console.log(i);
}

let i;

for(i=1; i<=15; i += 2){
   console.log(i);
}

console.log("Backwords");

for(let j=15; j>=1; j = j-2){
    console.log(j);
}

for(let i=2; i<=10; i=i+2) {
    console.log(i);
}

// let i;

// for(i=1; i<=10; i++){
//     console.log(`5 * ${i} = ${5 * i}`);
// }

for(let i=5; i<=50; i=i+5){
    console.log(i);
}

let n = prompt("Enter your number: ");
n = parseInt(n);

for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}
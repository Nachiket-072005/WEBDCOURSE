let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

console.log(arr.length);

for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1);
    }
}

// let number = 287152;
// let count = 0;

// let copy = number;

// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count); 

let number = 287152;
let sum = 0;

let copy = number;

while(copy > 0) {
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}

console.log(sum);

let n = 5;
let fact = 1;

for(let i=1; i<=n; i++) {
    fact *= i;
}

console.log(`Factorial of ${n} is ${fact}`);

let array = [2, 5, 10, 15, 4, 1, 6];
let largest = 0;

for(let i=0; i<array.length; i++) {
    if(largest < array[i]) {
        largest = array[i];
    }
}
console.log(largest);

//Practice Que.1

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

//Practice Que.2

let nums = 287152;
let count = 0;

let copy = nums;

while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//Practice Que.3

let copyNums = nums;
let sum = 0, digit;

while(copyNums > 0) {
    digit = copyNums%10;
    sum += digit;
    copyNums = Math.floor(copyNums/10);
}
console.log(sum);

//Practice Que.4

let _num = 5;
let fact = 1;

for(let i=1; i<=_num; i++) {
    fact *= i;
}
console.log(fact);

//Practice Que.5

let array = [2, 5, 10, 15, 3, 45];
let largest = 0;

for(let i=0; i<array.length; i++) {
    if(largest < array[i]) {
        largest = array[i];
    }
}
console.log(largest);
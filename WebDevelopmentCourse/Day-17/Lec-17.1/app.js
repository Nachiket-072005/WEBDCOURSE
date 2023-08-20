//Que.1 -> Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [1, 2, 3, 4, 5];

const square = nums.map( (num) => num * num);
console.log(square);

let sum = square.reduce( (acc, curr) => acc + curr);
let avg = sum / nums.length;
console.log(avg);


//Que.2 -> Create a new array using the map function whose each element is equal to the original element plus 5.

let numbers = [2, 4, 6, 8, -2, -4];

console.log(numbers.map( (number) => number + 5));

//Que.3 ->  Create a new array whose elements are in uppercase of words present in the original array.

let strings = ["adam", "donald", "bob", "catlyn", "eve"];

console.log(strings.map( (string) => string.toUpperCase()));

//Que.4 -> Write a function called doubleandReturnargs which accepts an array and a veriable number of arguments. The function should return new array with the original array values and all of the additional arguments doubled.

const doubleandReturnargs = (arr, ...args) => [
    ...arr,
    ...args.map( (v) => v * 2)
];

console.log(doubleandReturnargs([1, 2, 3], 4, 4));
console.log(doubleandReturnargs([2], 10, 2));

//Que.5 -> Write a function called merge objects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a : 1, b : 2}, {c : 3, d : 4}));
//1

let arr = [1, 2, 3, 4, 5, 6];

let sum = arr.reduce((sum, el) => {
  sum + el;
});
console.log(sum);

let square = arr.map((el) => {
  el * el;
});
console.log(square);

let avg = sum / arr.length;
console.log(avg);

//2

let newArr = arr.map((el) => {
  el + 5;
});

console.log(newArr);

//3
let _arr = ["tony", "steve", "peter", "stark"];

let _newArr = _arr.map((el) => {
  el.toUpperCase();
});

console.log(_newArr);

//4
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

console.log(doubleAndReturnArgs(arr, 4, 4));
console.log(doubleAndReturnArgs([2], 10, 8));

//5

// let obj1 = {
//     name: "Nachiket",
//     age: 18,
//     marks: 94.5,
//     city: "Hydrabad"
// };

// let obj2 = {
//     name: "Rudra",
//     age: 10,
//     marks: 98.5,
//     city: "Pune"
// };

// const mergeObject = (obj1, obj2) => (
//      {...obj1, ...obj2}
// );

// console.log(mergeObject(obj1, obj2));

const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });
let ans = mergeObject({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(ans);
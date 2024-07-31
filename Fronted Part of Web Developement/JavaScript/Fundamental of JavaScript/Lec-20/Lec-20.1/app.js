//Array Methods

//forEach

let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
  console.log(el);
});

// let print = function(el) {
//     console.log(el);
// }

// arr.forEach(print);

let array = [
  {
    name: "Nachiket",
    marks: 94.4,
  },
  {
    name: "Karan",
    marks: 97,
  },
  {
    name: "Rudra",
    marks: 89.5,
  },
];

array.forEach((el) => {
  console.log(el.marks);
});

//map function

let _arr = [1, 2, 3, 4];

let sq = _arr.map((el) => {
  return el * el;
});

console.log(sq);

let CGPA = array.map((el) => {
  return el.marks / 10;
});

console.log(CGPA);

//filter function

let nums = [1, 2, 3, 4, 5, 6, 7, 12, 23, 25];

let even = nums.filter((el) => {
  return el % 2 == 0;
});

let odd = nums.filter((el) => {
  return el % 2 != 0;
});

console.log(odd);
console.log(even);

//Every & Some function

let num = [1, 3, 5, 7, 9];

//every function is as AND Gate
let _odd = num.every((el) => {
  return el % 2 != 0;
});

console.log(_odd);
//some function is as OR Gate

let _even = num.some((el) => {
  return el % 2 == 0;
});

console.log(_even);

//reduce method

let finalValue = nums.reduce((res, el) => {
  return res + el;
});

console.log(finalValue);

//Maximum in array

let _array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55];

// let max = -1;

// for(let i=0; i<_array.length; i++) {
//     if(max < _array[i]) {
//         max = _array[i];
//     }
// }

// console.log(max);

let max = _array.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

console.log(max);

//Practice Questions

let mul = _array.every((el) => {
  el % 10 == 0;
});

console.log(mul);

function getMin(_array) {
  let min = _array.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });

  return min;
}

console.log(getMin(_array));

//Default Parameter

function getSum(a, b = 2) {
  return a + b;
}

console.log(getSum(1));

//Spread

let $arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(...$arr);

let str = "apnacollege";

console.log(...str);
console.log("apnacollege");

//Spread Array(literals)

let $even = [2, 4, 6, 8, 10];
let $odd = [1, 3, 5, 7, 9];

console.log(...$even, ...$odd);

console.log(..."hello");

//Spread Object literals

let data = {
  email: "ironman@gmail.com",
  password: "abcd",
};

let dataCopy = { ...data, id: 123 };

console.log(dataCopy);

let newArr = { ...$arr };

console.log(newArr);

//rest concept

function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}

console.log(sum(1, 2, 3, 4, 5));

function min(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(min("min number is : ", -1, 2, -4, 0));

function _max(msg, ...args) {
  console.log(msg);
  return args.reduce((max, el) => {
    if (max > el) {
      return max;
    } else {
      return el;
    }
  });
}

console.log(_max("max number is : ", 1, 34, 5, 76));

//Destructuring Concept

let names = ["tony", "bruce", "peter", "steve", "stark"];

// let winner = names[0];
// let runnerup = names[1];

// console.log(winner, runnerup);

// Destructiong Arrays + Rest

let [winner, runnerup, ...others] = names;

console.log(winner, runnerup, others); //using rest concept to take an multiple arguments and returned into one arguments as an array

//Destructuring Objects

const student = {
  name: "karan",
  age: 14,
  class: 9,
  subject: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcd",
  // city: "Pune"
};

// let user = student.username;
// let pass = student.password;

// key should be same as object key and we can also give default value

let { username: user, password: pass, city: place = "Mumbai" } = student;

console.log(user, pass, place);

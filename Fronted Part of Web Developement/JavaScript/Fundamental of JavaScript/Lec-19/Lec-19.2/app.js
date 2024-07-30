// Question - 1:

let array = [1, 2, 3, 4, 5];

let arrayAverage = (array) => {
  let sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  console.log(sumArray);
  let avg = sumArray / array.length;
  return avg;
};

console.log(arrayAverage(array));

// Question - 2:

let n = 5;

let isEven = (n) => {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEven(n));

// Question - 3:
const object = {
  massage: "Hello, World",

  logMessage() {
    console.log(this.massage);
  },
};

setTimeout(object.logMessage, 1000);

// Question - 4:

let length = 4;

function callback() {
  console.log(this.length);
}

const obj = {
  length: 5,
  method(callback) {
    callback();
  },
};

obj.method(callback, 1, 2);

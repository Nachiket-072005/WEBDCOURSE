//async Function

async function greet() {
  // throw "Weak Connections.";
  return "Hello!";
}

greet()
  .then((result) => {
    console.log("Promise was resolved.");
    console.log("Result was : ", result);
  })
  .catch((error) => {
    console.log("Promise was rejected.");
    console.log("Error was : ", error);
  });

//In Arrow Function async keyword

let num = async () => {
  return 5;
};

console.log(num());

//await keyword

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

demo();

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("Promise rejected.");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  });
}

async function wait() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("caught an error");
    console.log(err);
  }

  let a = 1089;
  console.log(a);
  console.log("New number is : ", a + 10);
}

wait();

let jsonRes =
  '{"fact":"Unlike other cats, lions have a tuft of hair at the end of their tails.","length":71}';

//To convert JSON data into JavaScript Objects
let validRes = JSON.parse(jsonRes);
console.log(validRes.length);

let student = {
  name: "Nachiket",
  marks: 94.4,
  city: "Kalol",
  branch: "Computer Engineering",
};

//To convert JavaScript Objects into JSON data.
let rightJson = JSON.stringify(student);

console.log(rightJson);

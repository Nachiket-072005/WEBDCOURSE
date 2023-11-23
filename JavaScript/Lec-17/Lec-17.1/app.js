//Object literals

const student = {
    name: "Nachiket Prajapati",
    age: 18,
    marks: 94.4,
    city: "Kalol"
};

const post = {
    username: "@nachiketprajapati",
    content: "This is my #firstpost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@webdevcourse"]
};

console.log(post);
console.log(student);
console.log(post.username);
console.log(post["username"]);

const obj = {
    //This obj key is automatically convert into strings.
    1: 'a',
    2: 'b',
    null: 'c',
    undefined: 'd',
    true: 'e'
};

console.log(obj);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[true]);
console.log(obj.null);
console.log(obj.undefined);

//Nested Objects

// const classInfo = {
//     aman: {
//         grade: 'A+',
//         city: "Delhi"
//     },
//     nachiket: {
//         grade: "A",
//         city: "Pune"
//     },
//     karan: {
//         grade: "O",
//         city: "Mumbai"
//     }
// };

//Array of objects

const classInfo = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "nachiket",
        grade: "A",
        city: "Pune"
    },
    {
        name: "karan",
        grade: "O",
        city: "Mumbai"
    }
];

console.log(classInfo);

//Math Objects
// Math.abs();
//Properties of Math Objects{
//     Math.PI;
//     Math.E;
// }
// Math.floor(); //nearest smallest integer number
Math.random();
// Math.ceil; // nearest largest integer number
//Random Numbers

let num = Math.floor(Math.random() * 100) + 1;
let nums = Math.floor(Math.random() * 5) + 20;
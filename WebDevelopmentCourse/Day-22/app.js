// async function greet() {
//     // throw "404 page not found";
//     return "Hello!";
// }

// greet()
// .then( (result) => {
//     console.log("Promise was resolved.");
//     console.log("result was : ", result);
// })
// .catch( (err) => {
//     console.log("Promise was rejected.");
//     console.log("error was : ", err);
// })

// let demo = async () => {
//     return 5;
// }

// console.log(demo());

function getNum() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
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

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {

            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("Promises rejected.");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}.`);
            resolve("color changed.");
        }, delay);
    });
}

async function change() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("blue", 1000);
    } catch(err) {
        console.log("error caught.");
        console.log(err);
    }
    
    let a = 5;
    console.log(a);
    console.log("new num = ", a + 3);
}
function hello() {
    console.log("inside hello func");
    console.log("hello");
}

function demo() {
    console.log("calling hello func");
    hello();
}

console.log("calling demo func");
demo();
console.log("done, bye!");

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

setTimeout( () => {
    console.log("Apna College");
}, 2000);

console.log("Hello");

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout( () => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            h1.style.color = color;
            resolve("color changed.");
        }, delay);
    });
}

changeColor("red", 1000)
.then( () => {
    console.log("red color was completed.");
    return changeColor("green", 1000);
})
.then ( () => {
    console.log("green color was completed.");
    return changeColor("orange", 1000);
})
.then ( () => {
    console.log("orange color was completed.");
    return changeColor("blue", 1000);
})
.then( () => {
    console.log("blue color was completed.");
    // return changeColor("yellow", 1000);
})

// Callback nesting - > Callback hell

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });


function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}


    // console.log(savetoDb("Apna College", 
    // () => {
    //     console.log("Your data was saved.");
    //     savetoDb("Hello world", 
    //     () => {
    //         console.log("success2 : data2 was saved.");
    //         savetoDb("Hello Ji", 
    //         () => {
    //             console.log("success : data3 was saved.");
    //         }, 
    //         () => {
    //             console.log("failure : data3 wasn't saved.");
    //         })
    //     },
    //     () => {
    //         console.log("failure2 : data2 wasn't saved.");
    //     })
    // }, 
    // () => {
    //     console.log("Weak connections. Sorry, Your data wasn't save.");
    // }));

    function savetoDb(data) {
        return new Promise( (resolve, reject) => {
            let internetSpeed = Math.floor(Math.random() * 10) + 1;
            if(internetSpeed > 4) {
                resolve("success : Your data was saved.");
            } else {
                reject("failure : Weak connection.");
            }
        });
    }

   let request = savetoDb("Apna College"); //request = Promises Object

   request.then( (result) => {
    console.log("data1 was saved. Promises was resolved.");
    // console.log(request);
    console.log("result of Promises : ", result);
    return savetoDb("Hello World"); 
   })
   .then( (result) => {
    console.log("data2 was saved.");
    console.log("result of Promises : ", result);
    return savetoDb("Hello Ji");
   })
   .then( (result) => {
    console.log("data3 was saved.");
    console.log("result of Promises : ", result);
   })
   .catch( (error) => {
    console.log("Promises was rejected.");
    console.log("error of Promises : ",error);
   })
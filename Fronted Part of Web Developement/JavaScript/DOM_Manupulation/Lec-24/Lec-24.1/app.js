//Call Stack in JS

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

// three();

//Callback hell => Callback nesting

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextChangeColor) {
//     setTimeout( () => {
//         h1.style.color = color;
//         if(nextChangeColor) nextChangeColor();
//     }, delay);
// }

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000).then( () => {
    console.log("red color was completed.");
    return changeColor("orange", 1000);
})
.then( () => {
    console.log("orange color was completed.");
    return changeColor("green", 1000);
})
.then( () => {
    console.log("green color was completed.");
    return changeColor("blue", 1000);
})
.then( () => {
    console.log("blue color was completed.");
})

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("yellow", 1000);
//             });
//         });
//     });
// });

//Setting up for promises

function saveToDb(data, success, failure) {
  let internateSpeed = Math.floor(Math.random() * 10) + 1;

  if (internateSpeed > 4) {
    success();
  } else {
    failure();
  }
}
//Callback hell
saveToDb(
  "apna college",
  () => {
    console.log("Success1 : Your data was saved.");
    saveToDb(
      "Nachiket Prajapati",
      () => {
        console.log("Success2 : Your data was saved.");
        saveToDb(
          "Rudra Prajapati",
          () => {
            console.log("Success3 : Your data was saved.");
          },
          () => {
            console.log("Failure3 : Your data wasn't saved.");
          }
        );
      },
      () => {
        console.log("Failure2 : Weak Connection! Your data wasn't saved.");
      }
    );
  },
  () => {
    console.log("Failure1 : Weak Connection! Your data wasn't saved.");
  }
);

//Refectoring with promises

function saveToDb(data) {
  return new Promise( (resolve, reject) => {
      let internateSpeed = Math.floor(Math.random() * 10) + 1;
      
      if(internateSpeed > 4) {
        resolve("Success : data was saved.");
      } else {
        reject("Failure : data wasn't saved.");
      }
  });  
}

// console.log(saveToDb("apna college"));

// then() & catch() method

// let request = saveToDb("Hello World");

// request.then( () => {
//     console.log("Promise was resolve.");
//     console.log(request);
// })
// .catch( () => {
//     console.log("Promise was rejected.");
//     console.log(request);
// });

//compact version of above

saveToDb("Hello World")
.then( (result) => {
    console.log("result :", result);
    console.log("Promise1 was resolve.");
    return saveToDb("Apna College");
})
.then( (result) => {
    console.log("result :", result);
    console.log("Promise2 was resolve.");
    return saveToDb("Nachiket Prajapati");
})
.then( (result) => {
    console.log("result :", result);
    console.log("Promise3 was resolve.");
})
.catch( (error) => {
    console.log("error : ", error);
    console.log("Promise was rejected.");   
});
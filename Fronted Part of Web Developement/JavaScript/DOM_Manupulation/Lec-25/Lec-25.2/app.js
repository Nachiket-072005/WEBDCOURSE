// https://www.boredapi.com/api/activity
// https://catfact.ninja/fact
// https://dog.ceo/api/breeds/image/random
// https://docs.potterdb.com/apis/rest
// https://github.com/Hipo/university-domains-list-api
// https://icanhazdadjoke.com/api

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data1) => {
//     console.log("data1 : ", data1.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 : ", data2.fact);
// })
// .catch((err) => {
//     console.log(err);
// });

async function getFacts() {
    try {
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);
    
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e) {
        console.log("Error - ", e);
    }
}

getFacts();
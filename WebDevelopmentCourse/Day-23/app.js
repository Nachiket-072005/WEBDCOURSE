let btn = document.querySelector("button");
let btn1 = document.querySelector("#img");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
}); 

btn1.addEventListener("click", async () => {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#res");
    img.setAttribute("src", link);
});


let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";


async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e) {
        console.log("error - ", e);
        return "No fact found";
    }
}
async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e) {
        console.log("error - ", e);
        return "No image found";
    }
}

const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { header : { Accept : "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(err) {
        console.log(err);   
    }
}
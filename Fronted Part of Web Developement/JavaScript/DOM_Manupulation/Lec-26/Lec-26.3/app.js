let url = "https://icanhazdadjoke.com/api";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let res = await getJoke();
    console.log(res);
});

async function getJoke() {
    try{
        const config = { headers: { Accept: "application/json" }};
        let res = await axios.get(url, config);
        console.log(res);
    } catch(e) {
        console.log("Error - ", e);
        return "NO IMAGE FOUND!!";
    }
}
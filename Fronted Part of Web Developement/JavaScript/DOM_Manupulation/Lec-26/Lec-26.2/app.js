let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let res = await getImage();
    console.log(res);

    let img = document.querySelector("#res");
    img.setAttribute("src", res);
})

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    } catch(e) {
        console.log("Error - ", e);
        return "NO IMAGE FOUND!!";
    }
}
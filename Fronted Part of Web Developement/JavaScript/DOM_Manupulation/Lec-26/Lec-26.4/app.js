let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let res = await getName(country);
    console.log(res);
    show(res);
});

function show(res) {
    let ul = document.querySelector("#lists");
    ul.innerText = "";
    for(col of res) {
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}

async function getName(country) {
    try{
        // const config = { headers: { Accept: "application/json" }};
        let res = await axios.get(url+country);
        return res.data;    
    } catch(e) {
        console.log("Error - ", e);
        return [];
    }
}
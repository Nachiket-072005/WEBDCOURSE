let jsonRes = '{"fact":"Cats should not be fed tuna exclusively, as it lacks taurine, an essential nutrient required for good feline health.  Make sure you have the proper Pet supplies to keep your cat happy and healthy.","length":196}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name : "Nachiket",
    marks : 95
};

let jsonSen = JSON.stringify(student);
console.log(jsonSen);


let url = "https://catfact.ninja/fact";

fetch(url)
.then( (response) => {
    // console.log(response);
    return response.json();
})
.then( (data1) => {
    console.log("data1 = ",data1.fact);
    return fetch(url);
})
.then( (response) => {
    return response.json();
})
.then( (data2) => {
    console.log("data2 = ",data2.fact);
})
.catch( (err) => {
    console.log("ERROR - ", err);
})

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e) {
        console.log("error - ", e);
    }

    console.log("Bye!");
}
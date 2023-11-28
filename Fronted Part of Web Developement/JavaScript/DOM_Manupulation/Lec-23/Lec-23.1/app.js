let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicked.");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked.");
});

for(let list of lists) {
    list.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("list was clicked.");
    });
}
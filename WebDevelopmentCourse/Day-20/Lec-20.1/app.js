let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
   let item = document.createElement("li");
   item.innerText = inp.value;

   let delBtn = document.createElement("button");
   delBtn.innerText = "delete";
   delBtn.classList.add("delbtn");
   
   item.appendChild(delBtn);
   ul.appendChild(item);
   inp.value = "";
});

ul.addEventListener("click", function(event) {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted.");
});

let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  // create list item
  let item = document.createElement("li");
  item.innerText = input.value + " ";

  // add delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);

  ul.appendChild(item);
  input.value = "";
});

// Not a good way to delete items:

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

// Good way to delete items:
//Event Deligation: (Event Deligation is a way to add event listener to parent element and then check the target element)

ul.addEventListener("click", function (event) {
  //nodeName is a property of event.target which gives the name of the element
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted item");
  }
});

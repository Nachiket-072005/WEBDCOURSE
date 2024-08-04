let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("input", function (event) {
  event.preventDefault();
  console.log(this.value);
  p.innerText = this.value;
});

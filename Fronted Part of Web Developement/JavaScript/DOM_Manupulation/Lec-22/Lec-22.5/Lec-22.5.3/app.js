let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form Submitted.");

  let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");
  // console.dir(user);
  console.log(user.value);
  // console.dir(pass);
  console.log(pass.value);

  alert(`Hi ${user.value}, Your password is set to ${pass.value} `);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form Submitted.");
  console.dir(form);

  let user = this.elements[0];
  let pass = this.elements[1];
  // console.dir(user);
  console.log(user.value);
  // console.dir(pass);
  console.log(pass.value);

  alert(`Hi ${user.value}, Your password is set to ${pass.value} `);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.dir(form);
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
  console.log("Change changed.");
  console.log("Final val = ", this.value);
});
user.addEventListener("input", function () {
  console.log("Input changed.");
  console.log("Final val = ", this.value);
});

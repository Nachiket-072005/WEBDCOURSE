// Function Closure
function outerFunc() {
  let name = "Nachiket";

  function innerFunc() {
    console.log(name);
  }

  return innerFunc;
}

let inner = outerFunc();
inner();

import "./App.css";

function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  function handleMouseOver() {
    alert("Mouse Over on paragraph");
  }
  function handleInputChange(e) {
    console.log("Input Value has been changed!", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Your form has been submitted!");
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <p onMouseOver={handleMouseOver}>Mouse Over Method</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default App;

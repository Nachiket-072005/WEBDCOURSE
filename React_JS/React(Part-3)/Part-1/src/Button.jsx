function handleClick(event) {
  console.log("Button clicked!");
  console.log(event);
}

function handleMouseOver() {
  console.log("Bye!");
}

function handleDblClick() {
  console.log("You've double clicked me!");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi facilis
        quas consequatur est nesciunt unde nemo nobis eaque vitae velit delectus
        necessitatibus ab, deserunt consectetur eligendi assumenda possimus
        dolor? Quam?
      </p>
      <button onDoubleClick={handleDblClick}>Double click me!</button>
    </div>
  );
}

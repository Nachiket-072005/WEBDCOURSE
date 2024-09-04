import "./App.css";
import Title from "./Title.jsx";
import ProductLists from "./ProductLists.jsx";
import Message from "./Message.jsx";

function App() {
  return (
    <>
      <Message userName="Nachiket" color="red" />
      <ProductLists />
    </>
  );
}

export default App;

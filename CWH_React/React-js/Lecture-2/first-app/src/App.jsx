import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import Card from "./components/card"; // Import the Card component

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Card-1" content="Card-1 Desc"/>
        <Card title="Card-2" content="Card-2 Desc"/>
        <Card title="Card-3" content="Card-3 Desc"/>
        <Card title="Card-4" content="Card-4 Desc"/>
      </div>
      <Footer />
    </>
  );
}

export default App;

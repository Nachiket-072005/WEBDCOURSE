import Product from "./Product.jsx";

function ProductLists() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f1f1f1",
    }
  return (
    <div style={styles}>
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2}/>
        <Product title="Petronics Toad 23" idx={3}/>
    </div>
  );
}

export default ProductLists;

import Product from "./Product.jsx";

function ProductLists() {
  // let features = ["Hi-Tech", "Durable", "Fast"];
  // let options = {
  //   a: "First",
  //   b: "Second",
  //   c: "Third",
  // };
  return (
    <>
      <Product
        title="Phone"
        price={25000}
        // features={features}
        // features2={options.a}
      />
      <Product title="Laptop" price={40000} />
      <Product title="Pen" price={10} />
    </>
  );
}

export default ProductLists;

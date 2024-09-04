import "./Product.css";

function Product({ title, price, features, features2 }) {
  let styles = {backgroundColor: price > 30000 ? "yellow" : ""};  
  // 1st Method to render the Product component based on the price of the product using ternary operator
  return (
    <div className="Product" style={styles}>
      <h1>{title}</h1>
      <h5>Price: {price}</h5>
      {price > 30000 && <p>Discount: 5%</p>}
      {/* <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}
      {/* <p>{features2}</p> */}
    </div>
  );

  // 2nd Method to render the Product component based on the price of the product using if-else statement
  // if (price > 30000) {
  //   return (
  //     <div className="Product">
  //       <h1>{title}</h1>
  //       <h5>Price: {price}</h5>
  //       <p>Discount: 5%</p>
  //       {/* <p>
  //         {features.map((feature) => (
  //           <li>{feature}</li>
  //         ))}
  //       </p> */}
  //       {/* <p>{features2}</p> */}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="Product">
  //       <h1>{title}</h1>
  //       <h5>Price: {price}</h5>
  //       {/* <p>
  //         {features.map((feature) => (
  //           <li>{feature}</li>
  //         ))}
  //       </p> */}
  //       {/* <p>{features2}</p> */}
  //     </div>
  //   );
  // }
}

export default Product;

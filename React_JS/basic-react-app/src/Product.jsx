import "./Product.css";

function Product({ title, price, features, features2 }) {
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h5>Price: {price}</h5>
      <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
      <p>{features2}</p>
    </div>
  );
}

export default Product;

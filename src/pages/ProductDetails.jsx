import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div className="card-Details">
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Product ID: {product.id}</p>
      <Link className="back-link" to="/products">
        Back to Products
      </Link>
    </div>
  );
}
export default ProductDetails;

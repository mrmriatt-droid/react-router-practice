
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function ProductCard({ name, price, id, onDelete, category }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <h2>{name}</h2>

      <p className="product-price">${price}</p>

      <p className="cat">{category}</p>

      <div className="product-actions">
        <Link to={`/products/${id}`}>
          View Details
        </Link>

        <button onClick={() => addToCart({ id, name, price })}>
          Add to Cart
        </button>

        <Link to={`/edit-product/${id}`}>
          Edit
        </Link>

        <button onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

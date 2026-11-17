import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductsContext);

  const product = products.find((item) => item.id === Number(id));

  const [name, setName] = useState(product?.name ?? "");
  const [price, setPrice] = useState(product?.price ?? "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !price || Number(price) <= 0) {
      alert("Please enter a valid name and price");
      return;
    }

    setProducts((prevProduct) =>
      prevProduct.map((item) =>
        item.id === Number(id)
          ? { ...item, name: name.trim(), price: Number(price) }
          : item,
      ),
    );

    navigate("/products");
  }

  if (!product) {
    return <p>Product not found</p>;
  }

return (
  <div className="edit-product-page">
    <div className="edit-product-card">
      <h1>Edit Product</h1>
      <p>Update your product details</p>

      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Product Price</label>
        <input
          type="number"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className="edit-actions">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
);
}
export default EditProduct;

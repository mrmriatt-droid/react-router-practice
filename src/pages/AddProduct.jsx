import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const {products, setProducts} = useContext(ProductsContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !price || Number(price) <= 0) {
      alert("Please enter a valid name and price");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  }

  return (
  <div className="edit-product-page">
    <div className="edit-product-card">
      <h1>Add New Product</h1>
      <p>Enter the details of your new product</p>

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
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  </div>
);
}
export default AddProduct;

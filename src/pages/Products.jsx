
import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../context/ProductsContext";

function Products() {
  const { products, setProducts } = useContext(ProductsContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function deleteProduct(id) {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      <div className="products-controls">
        <input
          className="input"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="selcat"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Computers">Computers</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;

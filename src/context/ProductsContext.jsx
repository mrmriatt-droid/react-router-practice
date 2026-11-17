import { createContext, useState, useEffect } from "react";
import initialProducts from "../data/products";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;

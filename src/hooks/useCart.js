import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function useCart() {
  const { cart, setCart } = useContext(CartContext);

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeProduct(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function updateQuantity(id, amount) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )

        .filter((item) => item.quantity > 0),
    );
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  return {
    cart,
    addToCart,
    removeProduct,
    updateQuantity,
    total,
  };
}
export default useCart;

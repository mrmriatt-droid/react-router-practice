
import useCart from "../hooks/useCart";

function Cart() {
  const { cart, removeProduct, updateQuantity, total } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <h3>{product.name}</h3>

                <div className="cart-info">
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>

                  <p>
                    <strong>Subtotal:</strong> $
                    {product.price * product.quantity}
                  </p>
                </div>

                <div className="cart-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    -
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${total}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

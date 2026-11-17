import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
function Navbar() {
  const { cart } = useCart();
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/products">Products</Link>
      {" | "}
      <Link to="/dashboard">Dashboard</Link>
      {" | "}
      <Link to="/cart">Cart ({cart.length})</Link>
      {" | "}
      <Link to="/add-product">Add Product</Link>
      {" | "}
      <Link to="/users">Users</Link>
    </nav>
  );
}
export default Navbar;

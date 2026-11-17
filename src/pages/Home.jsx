
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Our Website!</h1>
        <p>
          Manage your products, explore users and organize
          your shopping cart in one place.
        </p>
        <Link to="/products" className="hero-btn">
          Explore Products
        </Link>
      </section>

      <section className="home-sections">
        <h2>Explore Our Website</h2>

        <div className="home-grid">
          <Link to="/products" className="home-card">
            <h3>Products</h3>
            <p>Browse and manage products</p>
          </Link>

          <Link to="/users" className="home-card">
            <h3>Users</h3>
            <p>Explore user information</p>
          </Link>

          <Link to="/cart" className="home-card">
            <h3>Shopping Cart</h3>
            <p>Manage your cart items</p>
          </Link>

          <Link to="/dashboard" className="home-card">
            <h3>Dashboard</h3>
            <p>Manage your account</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import MainLayout from "./layouts/MainLayout";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import Cart from "./pages/Cart";
import "./App.css";
import AddProduct from "./pages/AddProduct";
import ProductsProvider from "./context/ProductsContext";
import EditProduct from "./pages/EditProduct";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter basename="/react-router-practice">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              <Route path="*" element={<NotFound />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
}
export default App;

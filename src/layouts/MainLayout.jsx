import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>

      <footer>
        <p>My Website © 2026</p>
      </footer>
    </div>
  );
}
export default MainLayout;

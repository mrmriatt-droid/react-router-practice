
import { Outlet, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-page">
      

      <nav className="dashboard-nav">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

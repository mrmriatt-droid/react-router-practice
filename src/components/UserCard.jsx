import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <Link to={`/users/${user.id}`}>
        <h3>{user.name}</h3>
      </Link>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.phone}</p>
      <p>{user.company.name}</p>
    </div>
  );
}
export default UserCard;


import { useParams, Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import useFetch from "../hooks/useFetch";

function UserDetails() {
  const { id } = useParams();

  const {
    data: user,
    loading,
    error,
    refetch,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (loading) {
    return <p className="details-message">Loading user...</p>;
  }

  if (error) {
    return (
      <div className="details-message">
        <p>{error}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  if (!user || !user.id) {
    return <p className="details-message">User not found.</p>;
  }

  const latitude = Number(user.address.geo.lat);
  const longitude = Number(user.address.geo.lng);

  return (
    <div className="user-details-page">

      <div className="details-header">
        <h1>{user.name}</h1>
        <p>User Profile</p>
      </div>

      <div className="details-grid">

        {/* Personal Information */}
        <section className="details-section">
          <h2>Personal Information</h2>

          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </section>

        {/* Address */}
        <section className="details-section">
          <h2>Address</h2>

          <p><strong>Street:</strong> {user.address.street}</p>
          <p><strong>Suite:</strong> {user.address.suite}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
        </section>

        {/* Company */}
        <section className="details-section">
          <h2>Company Details</h2>

          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>Business:</strong> {user.company.bs}</p>
        </section>

      </div>

      {/* Location */}
      <section className="location-section">
        <h2>Location</h2>

        <div className="coordinates">
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>

        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          className="user-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[latitude, longitude]}>
            <Popup>{user.name}</Popup>
          </Marker>
        </MapContainer>

        <a
          className="google-maps-link"
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </section>

      <Link to="/users" className="back-link">
        Back to Users
      </Link>

    </div>
  );
}

export default UserDetails;

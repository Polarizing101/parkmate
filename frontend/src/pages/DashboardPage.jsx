import ParkingMap from "../components/ParkingMap";
import AddParkingSpotForm from "../components/AddParkingSpotForm";
import NearbySearch from "../components/NearbySearch";
import ParkingStats from "../components/ParkingStats";
import "../styles/dashboard.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">

      <h1>🚗 ParkMate Dashboard</h1>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>

      <p>
        Find available parking spots near you.
      </p>

      <ParkingStats />

      <AddParkingSpotForm />

      <br />

      <NearbySearch />

      <br />

      <ParkingMap />

    </div>
  );
}

export default DashboardPage;

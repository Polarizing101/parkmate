import ParkingMap from "../components/ParkingMap";
import AddParkingSpotForm from "../components/AddParkingSpotForm";
import NearbySearch from "../components/NearbySearch";

function DashboardPage() {

  return (
    <div className="dashboard-container">

      <h1>🚗 ParkMate Dashboard</h1>

      <p>
        Find available parking spots near you.
      </p>

      <AddParkingSpotForm />

      <br />

      <NearbySearch />

      <br />

      <ParkingMap />

    </div>
  );
}

export default DashboardPage;

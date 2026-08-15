import ParkingMap from "../components/ParkingMap";
import AddParkingSpotForm from "../components/AddParkingSpotForm";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h1>🚗 ParkMate Dashboard</h1>

      <p>Find available parking spots near you.</p>

      <AddParkingSpotForm />

      <ParkingMap />
    </div>
  );
}

export default DashboardPage;

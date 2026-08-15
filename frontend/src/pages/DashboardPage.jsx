import ParkingMap from "../components/ParkingMap";

function DashboardPage() {

  const token =
    localStorage.getItem("token");

  return (
    <div>

      <h1>ParkMate Dashboard</h1>

      <p>Authentication successful</p>

      <textarea
        rows="8"
        cols="80"
        value={token || ""}
        readOnly
      />

      <br />
      <br />

      <ParkingMap />

    </div>
  );
}

export default DashboardPage;

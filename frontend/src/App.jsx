import { useEffect, useState } from "react";
import { getAllParkingSpots } from "./services/parkingService";
import "./App.css";

function App() {

  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    loadParkingSpots();
  }, []);

  const loadParkingSpots = async () => {
    try {
      const data = await getAllParkingSpots();
      setParkingSpots(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>🚗 ParkMate</h1>

      <p>Smart Parking Finder</p>

      <div className="card">
        <h2>Available Parking Spots</h2>

        {parkingSpots.length === 0 ? (
          <p>No parking spots found.</p>
        ) : (
          <ul>
            {parkingSpots.map((spot) => (
              <li key={spot.id}>
                {spot.street}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

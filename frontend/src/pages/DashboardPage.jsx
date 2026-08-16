import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ParkingMap from "../components/ParkingMap";
import AddParkingSpotForm from "../components/AddParkingSpotForm";
import NearbySearch from "../components/NearbySearch";
import ParkingStats from "../components/ParkingStats";

import {
  getParkingSpots,
  getNearbyParkingSpots,
} from "../services/parkingService";

import "../styles/dashboard.css";

function DashboardPage() {
  const [spots, setSpots] = useState([]);
  const [nearbySpots, setNearbySpots] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  const loadSpots = async () => {
    try {
      const response = await getParkingSpots();
      setSpots(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSpots();
  }, []);

  const findMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setUserLocation([lat, lng]);

        try {
          const response =
            await getNearbyParkingSpots(
              lat,
              lng,
              1
            );

          setNearbySpots(response.data);
        } catch (error) {
          console.error(error);
        }
      },
      (error) => {
        console.error(error);
        alert("Unable to get location");
      }
    );
  };

  return (
    <div className="dashboard-container">
      <Navbar />

      <h1>🚗 ParkMate Dashboard</h1>

      <div className="top-actions">
        <button onClick={findMyLocation}>
          📍 Find Nearby Parking
        </button>
      </div>

      <p>
        Find available parking spots near you.
      </p>

      <ParkingStats spots={spots} />

      <div className="card">
        <AddParkingSpotForm
          reloadSpots={loadSpots}
        />
      </div>

      <div className="card">
        <NearbySearch
          spots={nearbySpots}
          userLocation={userLocation}
        />
      </div>

      <div className="map-wrapper">
        <ParkingMap
          spots={spots}
          userLocation={userLocation}
        />
      </div>
    </div>
  );
}

export default DashboardPage;

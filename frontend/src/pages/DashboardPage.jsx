import { useEffect, useState } from "react";

import ParkingMap from "../components/ParkingMap";
import AddParkingSpotForm from "../components/AddParkingSpotForm";
import NearbySearch from "../components/NearbySearch";
import ParkingStats from "../components/ParkingStats";

import {
  getParkingSpots,
} from "../services/parkingService";

import "../styles/dashboard.css";

function DashboardPage() {
  const [spots, setSpots] =
    useState([]);

  const [userLocation,
    setUserLocation] =
    useState(null);

  const loadSpots = async () => {
    try {
      const response =
        await getParkingSpots();

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
      (position) => {

        setUserLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);

      },
      (error) => {

        console.error(error);

        alert(
          "Unable to get location"
        );
      }
    );
  };

  return (
    <div className="dashboard-container">

      <h1>
        🚗 ParkMate Dashboard
      </h1>

      <button
        onClick={() => {
          localStorage.removeItem(
            "token"
          );

          window.location.href = "/";
        }}
      >
        Logout
      </button>

      <button
        onClick={findMyLocation}
      >
        📍 Find My Location
      </button>

      <p>
        Find available parking spots
        near you.
      </p>

      <ParkingStats />

      <AddParkingSpotForm
        reloadSpots={loadSpots}
      />

      <br />

      <NearbySearch />

      <br />

      <ParkingMap
        spots={spots}
        userLocation={userLocation}
      />

    </div>
  );
}

export default DashboardPage;

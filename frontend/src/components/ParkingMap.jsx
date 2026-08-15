import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";

import { getParkingSpots } from "../services/parkingService";

function ParkingMap() {

  const [spots, setSpots] = useState([]);

  useEffect(() => {

    loadParkingSpots();

  }, []);

  const loadParkingSpots = async () => {

    try {

      const response =
        await getParkingSpots();

      setSpots(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  return (
    <MapContainer
      center={[37.9838, 23.7275]}
      zoom={13}
      style={{
        height: "500px",
        width: "100%"
      }}
    >

      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {spots.map((spot) => (

        <Marker
          key={spot.id}
          position={[
            spot.latitude,
            spot.longitude
          ]}
        >

          <Popup>

            <strong>
              {spot.street}
            </strong>

            <br />

            Status:
            {" "}
            {spot.status}

          </Popup>

        </Marker>

      ))}

    </MapContainer>
  );
}

export default ParkingMap;

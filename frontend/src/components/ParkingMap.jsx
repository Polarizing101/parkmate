import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import MapCenterUpdater from "./MapCenterUpdater";

function ParkingMap({
  spots,
  userLocation,
}) {
  const getStatusColor = (status) => {
    switch (status?.toUpperCase()) {
      case "AVAILABLE":
        return "#22c55e";

      case "OCCUPIED":
        return "#ef4444";

      case "EXPIRED":
        return "#6b7280";

      default:
        return "#000000";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toUpperCase()) {
      case "AVAILABLE":
        return "🟢";

      case "OCCUPIED":
        return "🔴";

      case "EXPIRED":
        return "⚫";

      default:
        return "⚪";
    }
  };

  return (
    <MapContainer
      center={[37.9838, 23.7275]}
      zoom={13}
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <MapCenterUpdater
        center={userLocation}
      />

      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {userLocation && (
        <Marker position={userLocation}>
          <Popup>
            📍 Your Location
          </Popup>
        </Marker>
      )}

      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={[
            spot.latitude,
            spot.longitude,
          ]}
        >
          <Popup>
            <strong>
              {spot.street}
            </strong>

            <br />
            <br />

            <span
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: getStatusColor(
                  spot.status
                ),
              }}
            >
              {getStatusIcon(
                spot.status
              )}{" "}
              {spot.status}
            </span>

            <br />
            <br />

            Latitude:
            {" "}
            {spot.latitude}

            <br />

            Longitude:
            {" "}
            {spot.longitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ParkingMap;

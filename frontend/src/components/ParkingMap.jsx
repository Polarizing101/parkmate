import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import MapCenterUpdater from "./MapCenterUpdater";

function ParkingMap({
  spots,
  userLocation,
}) {

  const createIcon = (color) => {
    return new L.DivIcon({
      className: "",
      html: `
        <div
          style="
            background:${color};
            width:20px;
            height:20px;
            border-radius:50%;
            border:2px solid white;
            box-shadow:0 0 5px rgba(0,0,0,0.5);
          "
        ></div>
      `,
      iconSize: [20, 20],
    });
  };

  const getMarkerIcon = (status) => {
    switch (status) {
      case "AVAILABLE":
        return createIcon("#22c55e");

      case "OCCUPIED":
        return createIcon("#ef4444");

      case "EXPIRED":
        return createIcon("#6b7280");

      default:
        return createIcon("#3b82f6");
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
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
          icon={getMarkerIcon(
            spot.status
          )}
        >
          <Popup>
            <strong>
              {spot.street}
            </strong>

            <br />
            <br />

            {getStatusIcon(
              spot.status
            )}{" "}
            {spot.status}

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

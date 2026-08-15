import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ParkingMap() {
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

    </MapContainer>
  );
}

export default ParkingMap;

import { useMap } from "react-leaflet";
import { useEffect } from "react";

function MapCenterUpdater({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 15);
    }
  }, [center, map]);

  return null;
}

export default MapCenterUpdater;

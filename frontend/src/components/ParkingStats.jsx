import { useEffect, useState } from "react";
import { getParkingSpots } from "../services/parkingService";

function ParkingStats() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    loadStats();

  }, []);

  const loadStats = async () => {

    try {

      const response =
        await getParkingSpots();

      const availableSpots =
        response.data.filter(
          spot =>
            spot.status === "AVAILABLE"
        );

      setCount(
        availableSpots.length
      );

    } catch (error) {

      console.error(error);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#1e293b",
        color: "white",
        borderRadius: "10px",
        marginBottom: "20px"
      }}
    >
      <h2>
        Available Parking Spots
      </h2>

      <h1>{count}</h1>
    </div>
  );
}

export default ParkingStats;

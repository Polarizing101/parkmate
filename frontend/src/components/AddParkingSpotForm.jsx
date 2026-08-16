import { useState } from "react";
import { createParkingSpot } from "../services/parkingService";

function AddParkingSpotForm({
  reloadSpots,
}) {
  const [street, setStreet] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !street.trim() ||
      !latitude ||
      !longitude
    ) {
      alert("All fields are required");
      return;
    }

    try {
      await createParkingSpot({
        street,
        latitude: Number(latitude),
        longitude: Number(longitude),
        status: "AVAILABLE",
      });

      setStreet("");
      setLatitude("");
      setLongitude("");

      await reloadSpots();

      alert("Parking spot added");

    } catch (error) {
      console.error(error);
      alert("Error adding parking spot");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Parking Spot</h3>

      <input
        type="text"
        placeholder="Street"
        value={street}
        onChange={(e) =>
          setStreet(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        step="any"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) =>
          setLatitude(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        step="any"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) =>
          setLongitude(e.target.value)
        }
      />

      <br />
      <br />

      <button type="submit">
        Add Spot
      </button>
    </form>
  );
}

export default AddParkingSpotForm;

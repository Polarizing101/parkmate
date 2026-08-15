import { useState } from "react";
import axios from "axios";

function AddParkingSpotForm() {

  const [street, setStreet] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/parking-spots",
        {
          street,
          latitude: Number(latitude),
          longitude: Number(longitude),
          status: "AVAILABLE"
        }
      );

      alert("Parking spot added");

      window.location.reload();

    } catch (error) {

      console.error(error);

      alert("Error adding spot");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h3>Add Parking Spot</h3>

      <input
        placeholder="Street"
        value={street}
        onChange={(e) =>
          setStreet(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="Latitude"
        value={latitude}
        onChange={(e) =>
          setLatitude(e.target.value)
        }
      />

      <br />
      <br />

      <input
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

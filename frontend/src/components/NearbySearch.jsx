import { useState } from "react";
import axios from "axios";

function NearbySearch() {

  const [latitude, setLatitude] =
    useState("");

  const [longitude, setLongitude] =
    useState("");

  const [radius, setRadius] =
    useState("");

  const [results, setResults] =
    useState([]);

  const searchNearby = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8080/api/parking-spots/nearby",
          {
            params: {
              latitude,
              longitude,
              radius,
            },
          }
        );

      setResults(response.data);

    } catch (error) {

      console.error(error);

      alert("Search failed");
    }
  };

  return (
    <div>

      <h3>Nearby Parking Search</h3>

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

      <input
        placeholder="Radius"
        value={radius}
        onChange={(e) =>
          setRadius(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={searchNearby}>
        Search
      </button>

      <hr />

      {results.map((spot) => (

        <div key={spot.id}>

          <strong>
            {spot.street}
          </strong>

          <p>
            Status: {spot.status}
          </p>

        </div>

      ))}

    </div>
  );
}

export default NearbySearch;

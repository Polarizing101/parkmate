function NearbySearch({
  spots = [],
  userLocation,
}) {
  return (
    <div>
      <h3>
        Nearby Parking Results
      </h3>

      {userLocation && (
        <p>
          📍 User Location:
          {" "}
          {userLocation[0].toFixed(4)},
          {" "}
          {userLocation[1].toFixed(4)}
        </p>
      )}

      {spots.length === 0 ? (
        <p>
          No nearby parking spots found.
        </p>
      ) : (
        spots.map((spot) => (
          <div key={spot.id}>
            <strong>
              {spot.street}
            </strong>

            <br />

            Status:
            {" "}
            {spot.status}

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default NearbySearch;

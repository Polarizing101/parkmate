function ParkingStats({ spots = [] }) {

  const available =
    spots.filter(
      (spot) =>
        spot.status === "AVAILABLE"
    ).length;

  const occupied =
    spots.filter(
      (spot) =>
        spot.status === "OCCUPIED"
    ).length;

  const expired =
    spots.filter(
      (spot) =>
        spot.status === "EXPIRED"
    ).length;

  return (
    <div className="stats-grid">

      <div className="stat-card available">
        🟢
        <br />
        Available
        <br />
        {available}
      </div>

      <div className="stat-card occupied">
        🔴
        <br />
        Occupied
        <br />
        {occupied}
      </div>

      <div className="stat-card expired">
        ⚫
        <br />
        Expired
        <br />
        {expired}
      </div>

    </div>
  );
}

export default ParkingStats;

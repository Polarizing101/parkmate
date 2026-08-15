import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🚗 ParkMate</h1>

      <p>
        Smart Parking Finder για εύρεση διαθέσιμων θέσεων στάθμευσης.
      </p>

      <div className="card">
        <h2>Available Parking Spots</h2>
        <p>Δεν υπάρχουν διαθέσιμες θέσεις ακόμη.</p>
      </div>

      <div className="card">
        <h2>Favorite Locations</h2>
        <p>Δεν υπάρχουν αγαπημένες τοποθεσίες.</p>
      </div>
    </div>
  );
}

export default App;

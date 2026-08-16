import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>🚗 ParkMate</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <ThemeToggle />

        <button
          onClick={() => {
            localStorage.removeItem(
              "token"
            );

            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;

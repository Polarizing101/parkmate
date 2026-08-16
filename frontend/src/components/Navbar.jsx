function Navbar() {
  return (
    <nav className="navbar">

      <h2>
        🚗 ParkMate
      </h2>

      <div>

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

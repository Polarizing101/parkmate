import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] =
    useState(true);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.body.classList.add(
        "light-theme"
      );
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.add(
        "light-theme"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    } else {
      document.body.classList.remove(
        "light-theme"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    }

    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;

import { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "../services/authService";

import "../styles/auth.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const response =
        await login({
          email,
          password,
        });

      localStorage.setItem(
        "token",
        response.data.token
      );

      window.location.href =
        "/dashboard";

    } catch (error) {
      console.error(error);

      alert("Login failed");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>🚗 ParkMate</h1>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        <button
          onClick={handleLogin}
        >
          Login
        </button>

        <br />
        <br />

        <p>
          Don't have an account?
        </p>

        <Link to="/register">
          Register here
        </Link>

      </div>

    </div>
  );
}

export default LoginPage;

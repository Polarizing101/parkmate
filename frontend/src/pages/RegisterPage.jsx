import { useState } from "react";
import { Link } from "react-router-dom";

import { register } from "../services/authService";

import "../styles/auth.css";

function RegisterPage() {

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async () => {

      try {

        await register({
          username,
          email,
          password,
        });

        alert(
          "Registration successful"
        );

        window.location.href = "/";

      } catch (error) {

        console.error(error);

        alert(
          "Registration failed"
        );
      }
    };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>🚗 ParkMate</h1>

        <h2>Register</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button
          onClick={
            handleRegister
          }
        >
          Register
        </button>

        <br />
        <br />

        <p>
          Already have an account?
        </p>

        <Link to="/">
          Back to Login
        </Link>

      </div>

    </div>
  );
}

export default RegisterPage;

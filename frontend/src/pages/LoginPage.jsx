import { useState } from "react";
import { login } from "../services/authService";

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

      alert("Login successful");

      window.location.href =
        "/dashboard";

    } catch (error) {

      console.error(error);

      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>ParkMate Login</h1>

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

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default LoginPage;

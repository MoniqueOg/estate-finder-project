import React, { useState } from "react";
import { createToken } from "./auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Make a POST request to the server to authenticate the user
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        // Store the JWT in local storage and redirect to the dashboard
        localStorage.setItem("token", data.token);
        window.location = "/dashboard";
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

function Dashboard() {
  const [userId, setUserId] = useState(null);

  // When the component mounts, check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userIdFromToken = verifyToken(token);
    setUserId(userIdFromToken);
  }, []);

  function handleLogout() {
    // Remove the JWT from local storage and redirect to the login page
    localStorage.removeItem("token");
    window.location = "/login";
  }

  return (
    <div>
      <h2>Welcome to the dashboard!</h2>
      {userId && <p>You are logged in as user {userId}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export { Login, Dashboard };

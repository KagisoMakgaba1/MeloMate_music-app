// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      setToken(response.data.access_token);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <form className="form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleLogin}>Login</button>
      </form>
    </div>

  );
};

export default Login;

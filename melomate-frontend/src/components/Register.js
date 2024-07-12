import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        username: email,
        password: password,
      })
      .then((response) => {
        console.log("User registered:", response.data);
        navigate("/login"); // Redirect to login page
      })
      .catch((error) => console.error("Error registering:", error));
  };

  return (
    <div>
      <form className="form">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="button" onClick={handleRegister}>
        Sign Up
      </button>
      </form>
    </div>
  );
};

export default Register;

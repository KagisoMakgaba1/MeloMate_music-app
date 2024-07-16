import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="form">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Sign in
        </button>
        <p className="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
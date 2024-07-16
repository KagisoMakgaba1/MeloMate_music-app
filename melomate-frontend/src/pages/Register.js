import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
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
        "http://localhost:5000/register",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  
  return (
    <div className="form">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username *"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password *"
          required
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          <a href="/login">Create</a>
        </button>
        <p className="message">
          Already registered? <a href="/login">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default Register;

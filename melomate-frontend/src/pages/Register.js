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
      <form className="register-form" method="POST">
        <h2>Register</h2>
        <input type="text" placeholder="Full Name *" required />
        <input type="text" placeholder="Username *" required />
        <input type="email" placeholder="Email *" required />
        <input type="password" placeholder="Password *" required />
        <a className="btn btn-primary" href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Create
        </a>
        <p className="message">
          Already registered? <a href="/login">Sign In</a>
        </p>
      </form>
    </div>
  );
};
export default Register;

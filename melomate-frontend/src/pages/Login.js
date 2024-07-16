import React, { useState } from 'react'
import axios from "axios"

const Login = () => {
  const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className='form'>
      <form class="login-form" method="post">
        <h2>Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required/>
        <a class="btn" href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign in
        </a>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  )
}

export default Login;
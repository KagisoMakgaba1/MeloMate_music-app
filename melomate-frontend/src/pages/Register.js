import React from "react";
import "./Register.css";

const Register = () => {
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

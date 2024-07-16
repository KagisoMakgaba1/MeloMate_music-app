import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        MeloMate
      </Link>
      <nav className="nav">
        <Link to="/About">About</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </header>
  );
};

export default Nav;

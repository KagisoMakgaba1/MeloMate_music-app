import React from "react";
//import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
//import Login from "./components/Login";
//import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <LandingPage />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

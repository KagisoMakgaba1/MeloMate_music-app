import React from "react";
//import About from "./About";
import Nav from "./Nav";
import MyHome from "./MyHome";
//import Home from "./Home";
import "../App.css";

const LandingPage = () => {
    return (
        <div className="Landing">
            <Nav />
            <MyHome />
            
        </div>
    );
};

export default LandingPage;
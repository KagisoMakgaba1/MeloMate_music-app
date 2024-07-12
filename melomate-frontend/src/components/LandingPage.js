import React from "react";
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
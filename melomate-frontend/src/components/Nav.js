import React from "react";
import "../App.css";

const Nav = () => {
    return (
      <div className="navigation">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              MeloMate
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About" title="About Melomate">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/work.html" title="Kagiso's work">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/contact.html"
                    title="Contact Kagiso"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Nav;
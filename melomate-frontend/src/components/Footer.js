import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="contact-me justify-content-between mb-5 d-none d-md-flex">
          <div>
            <h4>Work Inquiry</h4>
            <p>Let's work together</p>
          </div>
          <a
            href="/contact.html"
            class="btn button mt-3 mb-5"
            title="Contact Kagiso"
          >
            Contact me
          </a>
        </div>
        <div class="d-flex justify-content-center mb-5">
          <a
            href="mailto:kagisomakgaba99@gmail.com"
            class="email-link mt-3"
            title="Email Kagiso"
          >
            kagisomakgaba99@gmail.com
          </a>
        </div>
        <div class="socials d-flex justify-content-center">
          <a
            href="https://www.github.com/KagisoMakgaba1"
            target="_blank"
            rel="noreferrer"
            title="Github profile"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a
            href="https://www.instagram.com/_kagiso13"
            target="_blank"
            rel="noreferrer"
            title="Instagram profile"
          >
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.twitter.com/kagiso134"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <p class="text-center mt-5">
          👩‍💻 Coded by Kagiso Makgaba, open-sourced on
          <a
            href="https://github.com/KagisoMakgaba1/Portfolio_project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
          and hosted on{" "}
          <a
            href="http:https://effortless-brigadeiros-6068e3.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;

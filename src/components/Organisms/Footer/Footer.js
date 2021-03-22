import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Sara Segel © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href={"https://github.com/ohgravity"}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="social-icon-link"
              href="https://twitter.com/SaraSegel"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/in/sara-s-055ab41a7/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

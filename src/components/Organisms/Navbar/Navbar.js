import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import { Link, Route } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="about"
              className="navbar-logo"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
            >
              Sara Segel
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

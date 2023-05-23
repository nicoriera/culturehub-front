import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
  const [isNavbarBlurred, setIsNavbarBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isOpaque = scrollTop > 0;
      setIsNavbarOpaque(isOpaque);

      const isBlurred = scrollTop > 60;
      setIsNavbarBlurred(isBlurred);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClassName = `navbar ${isNavbarOpaque ? "opaque" : ""} ${
    isNavbarBlurred ? "blur" : ""
  } ${isOpen ? "open" : ""}`;

  return (
    <div className={navbarClassName}>
      <div className="navbar-content">
        <Link to="/">
          <h1>HouseCo</h1>
        </Link>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/articles" onClick={toggleMenu}>
            Articles
          </Link>
          <Link to="/news" onClick={toggleMenu}>
            News
          </Link>
        </div>
        <button
          className={`hamburger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className="hamburger-icon"
            icon={faBars}
            style={{ color: "white" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const { toggleNavbar } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
  const [isNavbarBlurred, setIsNavbarBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsNavbarOpaque(scrollTop > 0);
      setIsNavbarBlurred(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleNavbar();
  };

  const navbarClassName = `navbar ${isNavbarOpaque ? "opaque" : ""} ${
    isNavbarBlurred ? "blur" : ""
  } ${isOpen ? "open" : ""}`;

  return (
    <div className={`navbar ${navbarClassName} scrollable-nav`}>
      <div className="navbar-content">
        <Link to="/">
          <h1>CultureHub</h1>
        </Link>
        <button
          className={`hamburger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className="hamburger-icon"
            icon={isOpen ? faTimes : faBars}
          />
        </button>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link className="link" to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link className="link" to="articles/news" onClick={toggleMenu}>
          News
        </Link>
        <Link className="link" to="/articles/musique" onClick={toggleMenu}>
          Musique
        </Link>
        <Link className="link" to="/articles/cinema" onClick={toggleMenu}>
          Cinema
        </Link>
        <Link className="link" to="/articles/serie" onClick={toggleMenu}>
          Serie
        </Link>
        <Link className="link" to="/articles/hightech" onClick={toggleMenu}>
          High Tech
        </Link>
        <Link className="link" to="/articles/jeuxvideo" onClick={toggleMenu}>
          Jeux Vidéo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

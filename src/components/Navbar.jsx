import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../index.css";
import "./styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <h1>Enemy</h1>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className="nav-links">
          <li>
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#experiences">
              Experiences
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul>
            <li>
              <HashLink smooth to="/#home" onClick={closeMenu}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#experiences" onClick={closeMenu}>
                Experiences
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" onClick={closeMenu}>
                About
              </HashLink>
            </li>
            <li>
              <Link to="/games" onClick={closeMenu}>
                Games
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={closeMenu}>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

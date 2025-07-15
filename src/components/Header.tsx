import { useState } from "react";
import "../styles/header.scss";
import logo from "../assets/images/jsayon-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="JSAYON Logo" />
          </a>
        </div>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;

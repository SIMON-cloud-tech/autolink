import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import LogoImage from '../../../../public/images/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          AutoLink
        </Link>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`menu ${menuOpen ? "menu-items active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/cars" onClick={() => setMenuOpen(false)}>Marketplace</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/works" onClick={() => setMenuOpen(false)}>How It Works</Link>
      </div>
    </nav>
  );
}
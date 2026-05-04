import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>Bhendane Family</h1>

      {/* Burger Icon */}
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/13thsage" onClick={closeMenu}>13th Sage</Link>
        <Link to="/bakery" onClick={closeMenu}>B's Bakery</Link>
        <Link to="/comfy" onClick={closeMenu}>Comfy Food</Link>
      </div>
    </nav>
  );
}

export default Navbar;
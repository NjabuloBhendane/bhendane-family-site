import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Bhendane Family</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/13thsage">13th Sage</Link>
        <Link to="/bakery">B's Bakery</Link>
        <Link to="/comfy">Comfy Food</Link>
      </div>
    </nav>
  );
}

export default Navbar;
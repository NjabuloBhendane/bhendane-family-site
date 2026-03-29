import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BHENDANE</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/13thsage">13th Sage</Link>
        <Link to="/bakery">Bee's Bakery</Link>
        <Link to="/comfy">Comfy Food</Link>
      </div>
    </nav>
  );
}

export default Navbar;
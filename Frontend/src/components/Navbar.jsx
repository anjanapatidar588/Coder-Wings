import { Link } from "react-router-dom";
import { FaHeart, FaThumbsUp, FaShoppingCart } from "react-icons/fa"; // ✅ Import icons
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      {/* Logo */}
      <h2 className="logo">Exclusive</h2>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      {/* Search Input */}
      <input
        type="text"
        placeholder="What are you looking for?"
      />

      {/* Icons */}
      <div className="nav-icons">
        <Link to="/wishlist"><FaHeart title="Wishlist" /></Link>
        <Link to="/cart"><FaShoppingCart title="Cart" /></Link>
      </div>

    </div>
  );
}

export default Navbar;
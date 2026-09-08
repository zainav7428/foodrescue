import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "How It Works",
    "Impact",
    "Contact"
  ];

  return (
    <header className="navbar">

      <div className="logo">
        <span className="logo-icon">🌿</span>
        <span>Food<span>Rescue</span></span>
      </div>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

        {navItems.map((item) => (
          <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
            {item}
          </a>
        ))}

      </nav>

      <div className="nav-buttons">
       <Link to="/login" className="login-btn">
  Login
</Link>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </header>
  );
}

export default Navbar;
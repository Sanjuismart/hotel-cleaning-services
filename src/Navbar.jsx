import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10725/10725239.png"
          alt="Hotel Cleaning Services Logo"
          height={60}
          width={70}
        />
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
  <Link to="/Home" onClick={() => setMenuOpen(false)}>
    Home
  </Link>
</li>

<li>
  <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
    About Us
  </Link>
</li>


        <li className="dropdown">
            <li
    className="dropdown-btn"
    onClick={() => setServiceOpen(!serviceOpen)}
  >
    Services ▾
  </li>
          <ul className={`dropdown-menu ${serviceOpen ? "active" : ""}`}>
            
            <li>
  <Link to="/dropone" onClick={() => setMenuOpen(false)}>
    Room Cleaning & Sanitization
  </Link>
</li>

<li>
  <Link to="/Droptow" onClick={() => setMenuOpen(false)}>
    Carpet & Floor Maintenance
  </Link>
</li>

<li>
  <Link to="/Dropthree" onClick={() => setMenuOpen(false)}>
    Bathroom Deep Cleaning
  </Link>
</li>

          </ul>
        </li>

        <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>
  Contact Us
</Link></li>
        <li><Link to="/VideoGallery" onClick={() => setMenuOpen(false)}>
  Gallery
</Link></li>
        <li><a href="/blog" onClick={() => setMenuOpen(false)}>
  Blog
</a></li>
        <button><Link to="/Contact" onClick={() => setMenuOpen(false)}>
  Enquire Now
</Link></button>
      </ul>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;

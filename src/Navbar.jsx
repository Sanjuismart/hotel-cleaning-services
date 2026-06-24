import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>

        <li className="dropdown">
          <a href="/">Services ▾</a>
          <ul className="dropdown-menu">
            <li><Link to="/dropone">Room Cleaning & Sanitization</Link></li>
            <li><Link to="/Droptow">Carpet & Floor Maintenance</Link></li>
            <li><Link to="/Dropthree">Bathroom Deep Cleaning</Link></li>
          </ul>
        </li>

        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/VideoGallery">Gallery</Link></li>
        <li><a href="/blog">Blog</a></li>
        <button><Link to="/Contact">Enquire Now</Link></button>
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

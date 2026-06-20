import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <h2>HotelClean</h2>
          <p>
            Professional hotel cleaning services dedicated to
            maintaining cleanliness, hygiene, and guest satisfaction.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/Dropone">Room Cleaning</a></li>
            <li><a href="/Droptow">Lobby Cleaning</a></li>
            <li><a href="/Dropthree">Carpet Maintenance</a></li>
            <li><a href="/Contact">Bathroom Sanitization</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <p>📍 Mysore, Karnataka</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ info@hotelclean.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 HotelClean. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
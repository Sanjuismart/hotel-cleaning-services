import React from "react";
import "./HotelCleaning.css";

const HotelCleaning = () => {
  return (
    <section className="hotel-cleaning">
      <div className="cleaning-content">
        <div className=" hab-bg2 pab-1 upDown"></div>
        <div className=" hab-bg3 pab-1 downUp"></div>
        <span className="subtitle">Professional Cleaning</span>
        <h2>Hotel Cleaning Services</h2>

        <p>
          We provide high-quality hotel cleaning services to ensure a clean,
          comfortable, and hygienic environment for your guests. Our trained
          staff focuses on every detail, from guest rooms to common areas.
        </p>

        <ul>
          <li>✓ Room Cleaning & Sanitization</li>
          <li>✓ Lobby & Reception Cleaning</li>
          <li>✓ Carpet & Floor Maintenance</li>
          <li>✓ Bathroom Deep Cleaning</li>
        </ul>

        <button>Book Service</button>
      </div>

      <div className="cleaning-image">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="Hotel Cleaning"
        />
      </div>
    </section>
  );
};

export default HotelCleaning;
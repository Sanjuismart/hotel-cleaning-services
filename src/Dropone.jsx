import React from "react";
import "./AboutUs.css";

const Dropone = () => {
  return (
    <section className="about-us">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          alt="Hotel Cleaning Service"
        />
      </div>

      <div className="about-content">
        <span className="section-tag">ABOUT US</span>

        <h2>Room Cleaning & Sanitization</h2>

        <p>
          We provide professional room cleaning and sanitization services to
          ensure every guest enjoys a clean, comfortable, and healthy stay. Our
          trained housekeeping staff follows strict hygiene standards,
          thoroughly cleaning and disinfecting all surfaces, furniture,
          bathrooms, and high-touch areas.
        </p>

        <p>
          Using high-quality cleaning products and modern sanitization
          techniques, we eliminate dust, germs, and bacteria while maintaining
          a fresh and welcoming environment. From daily housekeeping to deep
          cleaning services, we help hotels maintain exceptional cleanliness and
          enhance guest satisfaction.
        </p>

        <div className="about-features">
          <div className="feature">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="feature">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="feature">
            <h3>100%</h3>
            <p>Quality Service</p>
          </div>
        </div>

        <button className="about-btn">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Dropone;
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>
          We provide innovative solutions to help your business grow and
          succeed in the digital world.
        </p>

        <div className="banner-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
import React from "react";
import "./AboutUs.css";

const Dropthree = () => {
  return (
    <section className="about-us">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1560448075-bb485b067938?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmF0aHJvb20lMjBEZWVwJTIwQ2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
          alt="Hotel Cleaning"
        />
      </div>

      <div className="about-content">
        <span className="section-tag">BATHROOM DEEP CLEANING</span>

        <h2>Bathroom Deep Cleaning</h2>

        <p>
         Our Bathroom Deep Cleaning service ensures that hotel bathrooms remain spotless, hygienic, and welcoming for every guest. We focus on thoroughly cleaning and disinfecting all bathroom surfaces, eliminating germs, bacteria, mold, and unpleasant odors to maintain the highest standards of cleanliness.
        </p>

        <p>
Using professional-grade cleaning products and advanced sanitization techniques, our trained staff pays close attention to every detail, from sinks and mirrors to toilets, showers, and tiles. We help hotels provide a fresh, safe, and comfortable experience that leaves a lasting impression on guests.
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

export default Dropthree;
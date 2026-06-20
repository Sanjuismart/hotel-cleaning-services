import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
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

        <h2>
          Professional Hotel Cleaning Services You Can Trust
        </h2>

        <p>
          We specialize in providing reliable and high-quality hotel cleaning
          services. Our experienced team ensures that every room, lobby,
          hallway, and guest area is maintained to the highest standards of
          cleanliness and hygiene.
        </p>

        <p>
          With years of experience in the hospitality industry, we understand
          the importance of creating a clean, welcoming, and comfortable
          environment for guests. Our goal is to help hotels deliver an
          exceptional guest experience through professional cleaning solutions.
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

export default AboutUs;
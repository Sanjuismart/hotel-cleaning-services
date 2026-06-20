import React from "react";
import "./AboutUs.css";

const Droptow = () => {
  return (
    <section className="about-us">
      <div className="about-image">
        <img
          src="https://plus.unsplash.com/premium_photo-1677234147986-1e9f099e4cb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FycGV0JTIwJTI2JTIwRmxvb3IlMjBNYWludGVuYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Hotel Cleaning"
        />
      </div>

      <div className="about-content">
        <span className="section-tag">CARPET & FLOOR MAINTENANCE</span>

        <h2>Carpet & Floor Maintenance</h2>

        <p>
         Our Carpet & Floor Maintenance services are designed to keep hotel interiors clean, attractive, and well-maintained. We use professional cleaning equipment and industry-approved techniques to remove dirt, stains, dust, and allergens from carpets, rugs, and flooring surfaces.
        </p>

        <p>
        Regular maintenance not only enhances the appearance of your hotel but also extends the lifespan of carpets and floors, creating a safer and more comfortable environment for guests and staff. Our team is trained to handle various flooring materials, including carpet, tile, marble, hardwood, and vinyl flooring.
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

export default Droptow;
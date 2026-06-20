import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-tag">CONTACT US</span>

          <h2>Get In Touch With Us</h2>

          <p>
            We are here to help with all your hotel cleaning and sanitization
            needs. Contact us today for professional cleaning solutions and a
            customized service plan.
          </p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>123 Business Street, Mysore, Karnataka, India</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h4>✉ Email</h4>
            <p>info@hotelcleaning.com</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="tel" placeholder="Phone Number" required />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
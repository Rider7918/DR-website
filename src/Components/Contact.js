import React from "react";
import "../Styles/Contact.css";
import { FaInstagram } from "react-icons/fa";
import "../Styles/BookAppointment.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
      <h3 className="info-title">
          <span>Contact Us</span>
        </h3>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          
          <p className="detail-item">
            <span className="detail-label">Phone:</span> +1 123 456 789
          </p>
          <p className="detail-item">
            <span className="detail-label">Email:</span>{" "}
            <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
          <p className="detail-item">
            <span className="detail-label">Address:</span> 123 Street, City,
            Country
          </p>

          <p className="detail-item">
            <span className="detail-label">Instagram:</span>{" "}
            <a
              href="https://www.instagram.com/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> @yourusername
            </a>
          </p>
        </div>

        <div className="contact-map">
          {/* Replace with your Google Maps embed code or component */}
          <div className="map-container">
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Almeida's%20Clinic,%20Baboy%20Commerce,%20next%20to%20Krishna%20Medical%20Stores,%20Malbhat,%20Madgaon,%20Goa%20403601+(Dr%20Arpita%20Sirsikar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

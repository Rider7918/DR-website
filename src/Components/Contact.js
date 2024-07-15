import React from "react";
import "../Styles/Contact.css";
import { FaInstagram, FaPhone } from "react-icons/fa";
import "../Styles/BookAppointment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillInstagram } from "react-icons/ai";
import {
  faCircle,
  faCircleCheck,
  faHome,
  faIcons,
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="contact-main">
            <p className="ba-checks ba-check-first" style={{textDecoration:"none"}}>
              <FontAwesomeIcon icon={faPhone} style={{ color: "#1E8FFD" }} />{" "}
                9511725382
            </p>
            <p className="ba-checks">
              <FontAwesomeIcon icon={faMailBulk} style={{ color: "#1E8FFD" }} />{" "}
              draprpitasirsikar@gmail.com
            </p>
            <p className="ba-checks">
              <FontAwesomeIcon icon={faLocation} style={{ color: "#1E8FFD" }} />{" "}
              Almeida's Clinic, Baboy Commerce, next to Krishna
              Medical Stores, Malbhat, Madgaon, Goa 403601{" "}
            </p>
            <p className="ba-checks ba-check-last">
             
             <span> <AiFillInstagram color="#1E8FFD" style={{fontSize:"1.7rem"}}/></span> <span>  <a href="https://www.instagram.com/mana.shakti/?igsh=MWM1azhkYm5odHhmNQ%3D%3D" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>mana.shakti
              </a></span>
            </p>
          </div>
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

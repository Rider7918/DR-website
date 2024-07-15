import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";
import drlogo from '../Assets/dr_img1.JPG'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);
  const [typedText, setTypedText] = useState(""); // State to hold typed text
  const textToType = "Dr. Aprita Sirsikar"; // Text to be typed
  const typingSpeed = 100; // Speed in milliseconds per character

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });

    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };

  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <h1 className="text-title">{typedText}</h1>
          
          
          <p className="text-headline">❤️ Your Mental Health Is Our Priority</p>
          <p className="text-descritpion">
            We are dedicated to providing compassionate, comprehensive psychiatric care to help you achieve optimal mental health and well-being. Located in Margoa Goa, our clinic offers a safe, welcoming environment where you can receive personalized treatment tailored to your unique needs.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={drlogo} alt="Doctor" data-aos='fade-left'/>
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;

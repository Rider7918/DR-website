import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import logo from "../Assets/logo2.png";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-section">
  
        <img src={logo} alt="" className="logo" />
        <p>©2024 Mana.Shakti. All rights reserved.</p>

    </div>
  );
}

export default Footer;

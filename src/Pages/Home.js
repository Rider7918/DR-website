import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Doctors from "../Components/Doctors";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Contact/>
    </div>
  );
}

export default Home;

import React from "react";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import drlogo from "../Assets/dr.png";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={drlogo} alt="Doctor Group" className="about-image1" data-aos='fade-right'  />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About </span>
        </h3>
        <p className="about-description">
          Experienced psychiatric doctor with a Diploma in Psychological
          Medicine and over 5 years in psychiatry. Skilled in diagnosing and
          treating various mental health disorders. Proficient in developing
          individualized treatment plans and collaborating with
          multidisciplinary teams. Committed to ongoing professional development
          and promoting mental health awareness and reducing stigma associated
          with mental illness.
        </p>

        <SolutionStep
          title="Consultant Psychiatrist"
          description="DMHP, South Goa District
          Hospital"
        />

        <SolutionStep
          title="Senior Consultant
          Psychiatrist
           "
          description="Tele MANAS, Mentoring
          Institute, Institute of
          Psychiatry and Human
          Behaviour"
        />

        
      </div>
    </div>
  );
}

export default About;

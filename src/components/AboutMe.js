import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import maryam from "../images/MaryamAfshar.jpg";

import "../css/AboutMe.scss";
import "../css/Main.scss";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <FadeIn bottom>
              <h1> About Me </h1>
            </FadeIn>
            <p>
              Hello! My name is Maryam Afshar, and I'm a 3rd year Computer Science
              student at the University of Waterloo 💻
              <br></br>
              <br></br>
              Through hackathons, previous work experience at Konrad Group, RBC and personal
              projects, I have collected valuable experience working in
              front-end and general software development. Design and development have
              given me the opportunity to express myself by creating
              applications that help in user productivity✨ I'm currently
              seeking Winter 2023 internships!
              <br></br>
              <br></br>
              In my free time you can find me reading Colleen Hoover novels, diving,
              filming YouTube videos or swimming :){" "}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={maryam} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

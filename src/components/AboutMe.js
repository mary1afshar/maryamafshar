import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import maryam from "../images/MaryamAfshar_Headshot.jpg"
import "../css/AboutMe.scss"
import "../css/Main.scss"


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
                        Hello! My name is Maryam Afshar, and I'm a 2B Computer Science student at the University of Waterloo💻
                        Through hackathons, previous work experience at RBC and personal projects, I have collected 
                        valuable experience working in front-end and software development.
                        Design and development have given me the opportunity to express myself 
                        by creating applications that help in user productivity✨ 
                        I'm currently seeking for Winter 2023 internships!
                        </p>
                    </div>
                    <div className="image-wrapper">
                        <img src={ maryam } alt="about"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
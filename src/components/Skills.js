import React from "react"
import skillInfo from "../information/skillsInfo.js"
import FadeIn from "react-fade-in/lib/FadeIn";

import "../css/Work.scss"
import "../css/Skills.scss"

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
        <FadeIn bottom cascade>
            <h1>Skills</h1>
          </FadeIn>
          <div className="skills-grid">
            {skillInfo.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
import React from "react";
import photos from "../information/photosInfo.js";
import FadeIn from "react-fade-in/lib/FadeIn";

import "../css/Work.scss";
import "../css/Photos.scss";

const Skills = () => {
  return (
    <div className="section" id="pic">
      <div className="container">
        <div className="pic-container">
          <FadeIn bottom cascade>
            <h1>California Photo Gallery</h1>
          </FadeIn>
          <div className="pic-grid">
            {photos.skills.map((skill, index) => (
              <div className="pic" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

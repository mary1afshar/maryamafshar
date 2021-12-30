import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Card from "./projectsCard";
import info from "../information/projectInfo.js";

import "../css/Project.scss";
import "../css/Main.scss";

const Projects = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="project-container">
          <FadeIn bottom cascade>
            <h1>Projects</h1>
          </FadeIn>
          <div className="project-grid">
            {info.projects.map((project, index) => (
              <div className="project" key={index}>
                <FadeIn bottom cascade>
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imagePic={project.image}
                  urlLink={project.url}
                ></Card>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

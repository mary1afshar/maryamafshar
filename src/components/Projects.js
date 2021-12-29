import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Card from "./projectsCard";
import info from "../information/projectInfo.js"

import "../css/Project.scss"
import "../css/Main.scss"

const Projects = () => {
    return (
        <div className="section" id="project">
            <div className="container">
                <div className="project-wrapper">
                    <FadeIn bottom>
                        <h1>Projects</h1>
                    </FadeIn>

                    <div className="grid">
                        <FadeIn bottom cascade>
                            
                            {info.projects.map((project, index) => (
                                
                                <Card
                                    key={index}
                                    heading={project.title}
                                    paragraph={project.para}
                                    imagePic={project.image}
                                    urlLink={project.url}
                                ></Card>

                            ))}

                        </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Projects

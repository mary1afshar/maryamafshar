import React from "react";
import '../css/NavBar.scss'
import "../css/Main.scss"
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div 
                    role="button"
                    className="name"
                    tabIndex={0}
                    >
                        Maryam Afshar.
                    </div>
                    <div className="links-wrapper">
                        <button><Link to="about" spy={true} smooth={true}>About</Link></button>
                        <button><Link to="project" spy={true} smooth={true}>Projects</Link></button>
                        <button><Link to="work" spy={true} smooth={true}>Work Experience</Link></button>
                        <button><Link to="skills" spy={true} smooth={true}>Skills</Link></button>
                        <button><Link to="contact" spy={true} smooth={true}>Contact</Link></button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NavBar;
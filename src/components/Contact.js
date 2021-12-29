import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import contact from "../information/contactInfo.js"
import "../css/Contact.scss"
import "../css/Main.scss"

const Contact = () => {
    return (
    <div classname="section" id="contact">
        <div className="container">
            <div className="footer-container">
                <FadeIn bottom cascade>
                    <h1>Contact</h1>
                    <h2>Let's get in touch!</h2>
                </FadeIn>
            
                <a className="email-link" href={'mailto:${maryam.afshar@uwaterloo.ca}'} >
                    maryam.afshar@uwaterloo.ca
                </a>
                <div className="social-icons">
                    {contact.social.map((socialLink, index) => (
                        <a
                        key={ index }
                        href={ socialLink.url }
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img src={ socialLink.img } alt="icons"></img>
                        </a>
                    )) }
                </div>
                <span>
                    Made with <icon>❤</icon> by Maryam
                </span>
            </div>
        </div>
    </div>
    )
}

export default Contact
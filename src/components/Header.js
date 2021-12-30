import React from "react";
import FadeIn from "react-fade-in";

import "../css/Header.scss";
import "../css/Main.scss";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <FadeIn bottom>
            <h2>
              Hi, I'm Maryam
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </FadeIn>
          <FadeIn bottom cascade>
            <div className="heading-wrapper">
              <h1>Building, Developing,</h1>
              <h1>Collaborating and</h1>
              <h1>Always Learning</h1>
            </div>
          </FadeIn>

          <FadeIn bottom>
            <p>
              I am a second year Computer Science student at the University of
              Waterloo
            </p>
          </FadeIn>
          <FadeIn bottom>
            <a
              className="primary-btn"
              href="https://www.linkedin.com/in/mary1afshar/"
            >
              <button>Connect with me</button>
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Header;

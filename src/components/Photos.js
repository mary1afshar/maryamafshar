import React from "react";
import photos from "../information/photosInfo.js";
import FadeIn from "react-fade-in/lib/FadeIn";

import "../css/Work.scss";
import "../css/Photos.scss";

const Photos = () => {
  return (
    <div className="section" id="photos">
      <div className="container">
        <div className="pic-container">
          <FadeIn bottom cascade>
            <h1>California Photo Gallery</h1>
          </FadeIn>
          <div className="pic-grid">
            {photos.pics.map((pic, index) => (
              <div className="pic" key={index}>
                <img src={pic.img} alt="css"></img>
                <p>{pic.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;

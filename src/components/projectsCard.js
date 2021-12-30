import React from "react";
import "../css/projectCard.scss"

import github from "../images/github.png"
import { Image } from "@chakra-ui/react"

const Card = ({heading, paragraph, imagePic, urlLink}) => {
    return (
        <div className="card"
        style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.5)),url(" +
              imagePic +
              ")",
          }}
        >
            <div className="content">
                <h1 className="header">{heading}</h1>
                <p className="text">{paragraph}</p>
                <a
                href={urlLink }
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                >
                    github
                </a>
            </div>
        </div>
    )
}

export default Card

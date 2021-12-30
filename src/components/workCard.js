import React from "react";
import "../css/workCard.scss"
import { Stack, Flex } from "@chakra-ui/react"

const WorkCard = ({imagePic, companyName, companyPosition, companyDate, companyLocation, companyDesc, companyLink}) => {
    return (
            <a className="a-link" href={companyLink} >
                <div className="WorkExperienceTextContainer">
                    <Flex direction="row">
                        <img className="WorkExperienceImage" src={imagePic} alt="work experience" />
                        <Stack >
                            <p className="WorkExperienceTitle" >{companyName}</p>
                            <p className="WorkExperiencePosition">{companyPosition}</p>
                            <p className="WorkExperienceDate">{companyDate}</p>
                            <p className="WorkExperienceText">{companyDesc}</p>
                        </Stack>
                    </Flex>
                </div>
            </a>
    )
}

export default WorkCard

/*
<a
                href={companyLink ? companyLink : "#"}
                target="_blank"
                rel="noopener noreferrer">
                    <div 
                <h1 className="header">{companyName}</h1>
                <h2 className="description">{companyPosition}</h2>
                <h3 classname="subdesc"> {companyDate} ~ {companyLocation} </h3>
                <p className="text">{companyDesc}</p>
                </a>
                */
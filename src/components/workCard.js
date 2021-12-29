import React from "react";
import "../css/workCard.scss"
import { GridItem, Text, Stack, Flex, Box } from "@chakra-ui/react"

const WorkCard = ({imagePic, companyName, companyPosition, companyDate, companyLocation, companyDesc, companyLink}) => {
    return (
            <a className="a-link" href={companyLink} >
                <div className="WorkExperienceTextContainer">
                    <Flex direction="row">
                        <img className="WorkExperienceImage" src={imagePic} alt="work experience" />
                        <Stack >
                            <Text className="WorkExperienceTitle" >{companyName}</Text>
                            <Text className="WorkExperiencePosition">{companyPosition}</Text>
                            <Text className="WorkExperienceDate">{companyDate}</Text>
                            <Text className="WorkExperienceText">{companyDesc}</Text>
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
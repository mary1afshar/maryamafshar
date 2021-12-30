import React from "react";
import { Stack, Flex } from "@chakra-ui/react";

import "../css/workCard.scss";

const WorkCard = ({
  imagePic,
  companyName,
  companyPosition,
  companyDate,
  companyDesc,
  companyLink,
}) => {
  return (
    <a className="a-link" href={companyLink}>
      <div className="WorkExperienceTextContainer">
        <Flex direction="row">
          <img
            className="WorkExperienceImage"
            src={imagePic}
            alt="work experience"
          />
          <Stack>
            <p className="WorkExperienceTitle">{companyName}</p>
            <p className="WorkExperiencePosition">{companyPosition}</p>
            <p className="WorkExperienceDate">{companyDate}</p>
            <p className="WorkExperienceText">{companyDesc}</p>
          </Stack>
        </Flex>
      </div>
    </a>
  );
};

export default WorkCard;

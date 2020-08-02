import React from "react";
import styled from "styled-components";

import { OverlineText, Subtitle2, CaptionText, Body2, Subtitle1, Subtitle3 } from "../styles/Typography";

interface IUserExperienceItem {
  date: string;
  company: { link: string, title: string },
  position: string;
  description: string[];
  location: string;
}

interface IProps {
  experience: IUserExperienceItem[];
}

const CvExperience: React.FunctionComponent<IProps> = ({ experience }) => (
  <>
    <OverlineText>Experience</OverlineText>
    <div>
      {experience.map((v, idx) => (
        <ExperienceContainer key={idx}>
          <Subtitle1>{v.date}</Subtitle1>
          <Subtitle2>{v.company.title}</Subtitle2>
          <Subtitle3>{v.position}</Subtitle3>
          {v.description.map((desc, idx) => <Body2 key={idx}>{desc}</Body2>)}
          <CaptionText>{v.location}</CaptionText>
        </ExperienceContainer>
      ))}
    </div>
  </>
)

export default CvExperience;

const ExperienceContainer = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
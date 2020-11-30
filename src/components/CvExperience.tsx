import React from "react";
import styled from "styled-components";

import { OverlineText, Subtitle2, Subtitle1, CaptionText, Body2, Subtitle3, gradientMixin } from "../styles/Typography";

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
          <TitleDateContainer>
            <Subtitle2>{v.company.title}</Subtitle2>
            &nbsp;
            <Subtitle3 color="#a7a7a7">{v.date}</Subtitle3>
          </TitleDateContainer>
          <GradientSubtitle1>{v.position}</GradientSubtitle1>
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

const TitleDateContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const GradientSubtitle1 = styled(Subtitle1)`
  font-weight: 600;
  ${gradientMixin}
`;
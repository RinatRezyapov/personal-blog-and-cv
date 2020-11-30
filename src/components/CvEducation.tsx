import React from "react";
import styled from "styled-components";

import { OverlineText, Subtitle2, CaptionText, Body2, Subtitle1, Subtitle3, gradientMixin } from "../styles/Typography";

interface IUserEducationItem {
  date: string;
  university: string;
  degree: string;
}

interface IProps {
  education: IUserEducationItem[];
}

const CvEduation: React.FunctionComponent<IProps> = ({ education }) => (
  <>
    <OverlineText>Education</OverlineText>
    {education.map((v, idx) => (
      <div key={idx}>
        <CaptionText>{v.date}</CaptionText>
        <Subtitle2>{v.university}</Subtitle2>
        <DegreeText>{v.degree}</DegreeText>
      </div>
    ))}
  </>
)

export default CvEduation;

export const DegreeText = styled(Subtitle1)`
  font-weight: 600;
  font-size: 0.75rem;
  ${gradientMixin}
`;
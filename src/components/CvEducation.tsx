import React from "react";
import styled from "styled-components";

import { OverlineText, Subtitle2, CaptionText, Body2, Subtitle1, Subtitle3 } from "../styles/Typography";

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
        <Subtitle1>{v.date}</Subtitle1>
        <Subtitle2>{v.university}</Subtitle2>
        <Body2>{v.degree}</Body2>
      </div>
    ))}
  </>
)

export default CvEduation;
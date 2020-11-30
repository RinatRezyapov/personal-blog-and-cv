import React from "react";

import { OverlineText, Subtitle1, Body2, CaptionText, gradientMixin } from "../styles/Typography";
import { Spacer } from "../pages/cv";
import styled from "styled-components";

interface IContributionItem {
  date: string;
  project: string;
  description: string;
  link: string;
}

interface IProps {
  contributions: IContributionItem[];
}


const CvCommunityContribution: React.FunctionComponent<IProps> = ({ contributions }) => (
  <>
    <OverlineText>Community contribution</OverlineText>
    {contributions.map((v, idx) => (
      <div key={idx}>
          <ContributionText>{v.project}</ContributionText>
          <Body2>{v.description} <a href={v.link} target="_blank" rel="noopener">link</a></Body2>
        <CaptionText>{v.date}</CaptionText>
        <Spacer mb={0.5} />
      </div>
    ))}

  </>
)

export default CvCommunityContribution;

export const ContributionText = styled(Subtitle1)`
  font-weight: 600;
  ${gradientMixin}
`;
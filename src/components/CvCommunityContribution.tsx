import React from "react";

import { OverlineText, Subtitle2, Body2, CaptionText, gradientMixin } from "../styles/Typography";
import { Spacer } from "../pages/cv";
import styled from "styled-components";

interface IContributionItem {
  date: string;
  project: string;
  description: string;
}

interface IProps {
  contributions: IContributionItem[];
}


const CvCommunityContribution: React.FunctionComponent<IProps> = ({ contributions }) => (
  <>
    <OverlineText>Community contribution</OverlineText>
    {contributions.map((v, idx) => (
      <div key={idx}>
        <CaptionText>{v.date}</CaptionText>
        <ContributionText>{v.project}</ContributionText>
        <Body2>{v.description}</Body2>
        <Spacer mb={0.5} />
      </div>
    ))}

  </>
)

export default CvCommunityContribution;

export const ContributionText = styled(Subtitle2)`
  ${gradientMixin}
`;
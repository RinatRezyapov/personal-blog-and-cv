import React from "react";

import { OverlineText, Subtitle2, Body2, Subtitle1 } from "../styles/Typography";
import { Spacer } from "../pages/cv";

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
    <Spacer mb={1} />
    {contributions.map((v, idx) => (
      <div key={idx}>
        <Subtitle1>{v.date}</Subtitle1>
        <Subtitle2>{v.project}</Subtitle2>
        <Body2>{v.description}</Body2>
        <Spacer mb={0.5} />
      </div>
    ))}

  </>
)

export default CvCommunityContribution;
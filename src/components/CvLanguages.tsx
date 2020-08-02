import React from "react";

import { OverlineText, Subtitle2, CaptionText } from "../styles/Typography";
import { Spacer } from "../pages/cv";

interface IUserLanguageItem {
  language: string;
  proficiency: string;
}

interface IProps {
  languages: IUserLanguageItem[];
}

const CvLanguages: React.FunctionComponent<IProps> = ({ languages }) => (
  <>
    <OverlineText>Languages</OverlineText>
    <Spacer mb={1} />
    {languages.map((v, idx) => (
      <Subtitle2 key={idx}><b>{v.language}</b><CaptionText inline> {v.proficiency}</CaptionText></Subtitle2>
    ))}
  </>
)

export default CvLanguages;
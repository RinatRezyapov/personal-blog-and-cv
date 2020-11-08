import React from "react";

import { OverlineText, Subtitle3, CaptionText } from "../styles/Typography";
import { Spacer } from "../pages/cv";
import styled from "styled-components";

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
      <Container key={idx}>
        <Subtitle3><b>{v.language}</b></Subtitle3>&nbsp;<CaptionText inline> {v.proficiency}</CaptionText>
      </Container>
    ))}
  </>
)

export default CvLanguages;

const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

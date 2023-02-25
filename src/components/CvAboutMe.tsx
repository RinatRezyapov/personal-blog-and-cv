import React from "react";

import mapIcon from '../../content/assets/map.svg'

import { OverlineText, Body1 } from "../styles/Typography";
import { Spacer } from "../pages/cv";
import styled from "styled-components";

interface IProps { 
  data: string;
}

const CvAboutMe: React.FunctionComponent<IProps> = ({ data }) => (
  <>
    <OverlineText>ABOUT ME</OverlineText>
    <AboutMeText>{data}</AboutMeText>
    <Spacer mb={2} />
    <OverlineText>Location</OverlineText>
    <Body1>I live in Dubai, United Arab Emirates</Body1>
    <Spacer mb={1} />
    <LocationMap alt='map' src={mapIcon} />
  </>
)

export default CvAboutMe;

const LocationMap = styled.img`
  width: 200px;
`;

const AboutMeText = styled(Body1)`
  text-align: center;
`;
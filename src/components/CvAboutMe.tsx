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
    <Spacer mb={1} />
    <Body1><i>{data}</i></Body1>
    <Spacer mb={2} />
    <OverlineText>Location</OverlineText>
    <Spacer mb={1} />
    <Body1><i>I live in Ufa, Russian Federation</i></Body1>
    <Spacer mb={1} />
    <LocationMap src={mapIcon} />
  </>
)

export default CvAboutMe;

const LocationMap = styled.img`
  width: 200px;
`;
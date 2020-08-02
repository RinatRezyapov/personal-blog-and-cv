import React from "react";

import mapIcon from '../../content/assets/map.svg'

import { OverlineText, Body1 } from "../styles/Typography";
import { Spacer } from "../pages/cv";

interface IProps { 
  data: string;
}

const CvAboutMe: React.FunctionComponent<IProps> = ({ data }) => (
  <>
    <OverlineText light>ABOUT ME</OverlineText>
    <Spacer mb={1} />
    <Body1 light textAlign='center'><i>{data}</i></Body1>
    <Spacer mb={2} />
    <OverlineText light>Location</OverlineText>
    <Spacer mb={1} />
    <Body1 light><i>I live in Ufa, Russian Federation</i></Body1>
    <Spacer mb={1} />
    <img src={mapIcon} />
  </>
)

export default CvAboutMe;
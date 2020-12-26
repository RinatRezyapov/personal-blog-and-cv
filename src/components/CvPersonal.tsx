import React from "react";
import styled from "styled-components";

import theLordOfTheRingsIcon from '../../content/assets/the-lord-of-the-rings-icon.svg'
import burtonIcon from '../../content/assets/burton-icon.svg'
import theKillersIcon from '../../content/assets/the-killers-icon.svg'

import { OverlineText } from "../styles/Typography";

interface IProps { }

const CvPersonal: React.FunctionComponent<IProps> = () => (
  <>
    <OverlineText>PERSONAL</OverlineText>
    <Container>
      <PersonalBadge src={burtonIcon} title='Snowboarding' iconHeight={25} />
      <PersonalBadge src={theKillersIcon} title='Music' iconHeight={25} />
      <PersonalBadge src={theLordOfTheRingsIcon} title='Books' iconHeight={25} />
    </Container>
  </>
)

export default CvPersonal;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const PersonalBadgeImg = styled.img`
  height: ${({ height }) => height || '25'}px;
  margin-bottom: 0.2rem;
`;

const PersonalBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px 12px;
`;

const PersonalBadge = ({ src, title = '', iconHeight }) => (
  <PersonalBadgeWrapper>
    {title}
    <PersonalBadgeImg alt={title} src={src} height={iconHeight} />
  </PersonalBadgeWrapper>
)


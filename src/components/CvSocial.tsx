import React from "react";

import { OverlineText } from "../styles/Typography";
import { Spacer } from "../pages/cv";
import styled from "styled-components";

interface ISocialItem {
  src: any;
  href: string;
  iconHeight: number;
}

interface IProps {
  data: ISocialItem[];
}

const CvSocial: React.FunctionComponent<IProps> = ({ data }) => (
  <>
    <OverlineText>Social</OverlineText>
    <Container>
      {data.map(v => <Badge src={v.src} iconHeight={v.iconHeight} href={v.href} />)}
    </Container>
  </>
)

export default CvSocial;

const Container = styled.div`
  display: flex;
`;


const BadgeImg = styled.img`
  height: ${({ height }) => height || '25'}px;
  margin-bottom: 0.2rem;
`;

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px 12px;
  a {
    box-shadow: none;
  }
`;

const Badge = ({ src, iconHeight, href }) => (
  <BadgeWrapper>
    <a href={href} target='_blank' rel='noreferrer'><BadgeImg src={src} height={iconHeight} /></a>
  </BadgeWrapper>
)


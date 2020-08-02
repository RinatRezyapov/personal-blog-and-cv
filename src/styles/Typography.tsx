import styled from "styled-components";

export const H2 = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 1.75rem;
  line-height: 1.2;
  margin: 0 0 0.3rem 0;
`;

interface IOverlayTextProps {
  light?: boolean;
}

export const OverlineText = styled.span<IOverlayTextProps>`
  display: block;
  font-family: Montserrat, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 2.66;
  color: ${({ light }) => light ? 'white' : 'grey'};
  margin: 0 0 0.3rem 0;
`;

export const Subtitle1 = styled.h6`
  font-family: Montserrat, sans-serif;
  font-style: inherit;
  line-height: 1.75;
  font-size: 1rem;
  font-weight: 600;
  color: #dd4a68;
  margin: 0 0 0.3rem 0;
`;

interface ISubtitle2Props {
  light?: boolean;
}

export const Subtitle2 = styled.h6<ISubtitle2Props>`
  font-family: Montserrat, sans-serif;
  font-style: inherit;
  font-size: 0.875rem;
  line-height: 1.57;
  font-weight: 600;
  color: ${({ light }) => light ? 'white' : '#282c35'};
  margin: 0 0 0.3rem 0;
`;

export const Subtitle3 = styled.h6`
  font-family: Montserrat, sans-serif;
  font-style: inherit;
  font-size: 0.75rem;
  line-height: 1.35;
  font-weight: 400;
  color: grey;
  margin: 0 0 0.3rem 0;
`;

interface IBodyTextProps {
  light?: boolean;
  textAlign?: string;
}

export const Body1 = styled.span<IBodyTextProps>`
  font-size: .9rem;
  line-height: 1.075rem;
  font-weight: 400;
  color: ${({ light }) => light ? 'white' : '#282c35'};
  text-align: ${({ textAlign }) => textAlign};
  margin: 0 0 0.3rem 0;
`;

export const Body2 = styled.p<IBodyTextProps>`
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${({ light }) => light ? 'white' : '#282c35'};
  text-align: ${({ textAlign }) => textAlign};
  margin: 0 0 0.3rem 0;
`;

interface ICaptionTextProps {
  inline?: boolean;
}

export const CaptionText = styled.span<ICaptionTextProps>`
  display: block;
  font-size: 0.65rem;
  font-weight: 400;
  line-height: 1.66;
  color: grey;
  margin-bottom: 0.3rem;
  display: ${({ inline }) => inline ? 'inline' : 'block'};
`;
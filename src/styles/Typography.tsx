import styled, { css } from "styled-components";

export const H2 = styled.h2<ITypographyProps>`
  color: ${({ color }) => color || 'inherit'};
  font-family: Montserrat, sans-serif;
  font-size: 1.75rem;
  line-height: 1.2;
  margin: 0 0 0.3rem 0;
  background: linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

interface ITypographyProps {
  color?: string;
}

export const OverlineText = styled.span<ITypographyProps>`
  display: block;
  font-family: Montserrat, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 2.66;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;


export const Subtitle1 = styled.h6<ITypographyProps>`
  font-family: Montserrat, sans-serif;
  font-style: inherit;
  line-height: 1.75;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;

export const Subtitle2 = styled.h6<ITypographyProps>`
  font-family: Montserrat, sans-serif;
  font-style: inherit;
  font-size: 0.875rem;
  line-height: 1.57;
  font-weight: 600;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;

export const Subtitle3 = styled.h6<ITypographyProps>`
  font-family: Montserrat, sans-serif;
  font-style: inherit;
  font-size: 0.75rem;
  line-height: 1.35;
  font-weight: 400;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;

export const Body1 = styled.span<ITypographyProps>`
  font-family: Montserrat, sans-serif;
  font-size: .9rem;
  line-height: 1.075rem;
  font-weight: 400;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;

export const Body2 = styled.p<ITypographyProps>`
  font-family: Montserrat, sans-serif;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;

interface ICaptionTextProps {
  inline?: boolean;
}

export const CaptionText = styled.span<ICaptionTextProps>`
  font-family: Montserrat, sans-serif;
  display: block;
  font-size: 0.65rem;
  font-weight: 400;
  line-height: 1.66;
  color: #a7a7a7;
  margin-bottom: 0.3rem;
  display: ${({ inline }) => inline ? 'inline' : 'block'};
`;


export const gradientMixin = css`
  background: linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

//  background: linear-gradient(90deg,#ec6192 4.44%,#ec4c34 21.45%,#ffbd2b 37.21%,#ebde56 54.63%,#57c754 70.8%,#53a1eb 84.07%) 0 100% transparent no-repeat;
import styled, { css } from "styled-components";
import { Link } from "gatsby";
interface ITypographyProps {
  color?: string;
}

export const Title = styled.h2<ITypographyProps>`
  color: ${({ color }) => color || '#7b2da1'};
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 0 0.3rem 0;
`;

export const Subtitle1 = styled.h4<ITypographyProps>`
  font-style: inherit;
  line-height: 1.57;
  font-weight: 900;
  color: ${({ color }) => color || '#7b2da1'};
  margin: 0 0 0.3rem 0;
`;


export const Subtitle2 = styled.h5<ITypographyProps>`
  font-style: inherit;
  font-size: 0.875rem;
  line-height: 1.57;
  font-weight: 600;
  color: ${({ color }) => color || '#7b2da1'};
  margin: 0 0 0.3rem 0;
`;

export const Subtitle3 = styled.h6<ITypographyProps>`
  font-style: inherit;
  font-size: 0.75rem;
  line-height: 1.35;
  font-weight: 400;
  color: ${({ color }) => color || '#7b2da1'};
  margin: 0 0 0.3rem 0;
`;

export const OverlineText = styled.span<ITypographyProps>`
  display: block;
  font-size: 0.75rem;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 2.66;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;

export const Body1 = styled.span<ITypographyProps>`
  font-size: 1rem;
  line-height: 1.075rem;
  font-weight: 400;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;

export const Body2 = styled.p<ITypographyProps>`
  font-size: .9rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${({ color }) => color || 'inherit'};
  margin: 0 0 0.3rem 0;
`;
interface ICaptionTextProps {
  inline?: boolean;
}

export const CaptionText = styled.span<ICaptionTextProps>`
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.66;
  margin-bottom: 0.3rem;
  display: ${({ inline }) => inline ? 'inline' : 'block'};
`;

export const StyledLink = styled(Link)`
  font-size: 1.75rem;
  color: #7b2da1;
  font-weight: 800;
  box-shadow: none;
  text-decoration: none;
`;

export const gradientMixin = css`

`;
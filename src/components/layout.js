import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography"
import { gradientMixin } from "../styles/Typography"

const Layout = ({ title, children }) => {

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <GradientH1>
            {title}
          </GradientH1>
        </Link>
      </Header>
      <main>{children}</main>
      <Footer>
        <div>
          <a href={`https://github.com/RinatRezyapov`} target='_blank' rel='noreferrer'>github</a>
          {' • '}
          <a href={`https://www.linkedin.com/in/rinatrezyapov/`} target='_blank' rel='noreferrer'>linkedin</a>
          {' • '}
          <a href={`https://twitter.com/RinatRezyapov`} target='_blank' rel='noreferrer'>twitter</a>
        </div>
        <div>
          © {new Date().getFullYear()} Built with <a href={`https://www.gatsbyjs.com/`} target='_blank' rel='noreferrer'>Gatsby</a>
        </div>
      </Footer>
    </div>
  )
}

export default Layout;

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Header = styled.header`
  margin-bottom: 2.175rem;
  margin-top: 0;
`;

const GradientH1 = styled.h1`
  ${gradientMixin};
  display: inline;
  font-size: 6rem;
  line-height: 2rem;
`;
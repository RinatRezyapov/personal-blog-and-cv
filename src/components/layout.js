import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography"

const Layout = ({ title, children }) => {

  return (
    <Wrapper>
      <Header>
        <CustomLink to={`/`}>
          {title}
        </CustomLink>
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
    </Wrapper>
  )
}

export default Layout;

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Header = styled.header`
  margin-bottom: 1.175rem;
  margin-top: 0;
`;

const CustomLink = styled(Link)`
  color: #7b2da1;
  text-decoration: none;
  font-size: 4rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  @media (max-width: 1024px) {
    font-size: 3.75rem;
  }
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(30)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  position: relative;
  z-index: 2;
`;
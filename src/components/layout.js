import React from "react"
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography"
import { GradientLink } from "../styles/Typography"

const Layout = ({ location, title, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontSize: '6rem'
        }}
      >
        <GradientLink
          to={`/`}
        >
          {title}
        </GradientLink>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
          marginBottom: rhythm(2),
          ...scale(1.5),
          fontSize: '6rem'
        }}
      >
        <GradientLink
          to={`/`}
        >
          {title}
        </GradientLink>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
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
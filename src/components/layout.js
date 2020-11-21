import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography"

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
          fontSize: '2rem'
        }}
      >
        <GradientTitle
          to={`/`}
        >
          {title}
        </GradientTitle>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <GradientTitle
          to={`/`}
        >
          {title}
        </GradientTitle>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <a href={`https://github.com/RinatRezyapov`} target='_blank'>github</a>
            {' • '}
        <a href={`https://www.linkedin.com/in/rinatrezyapov/`} target='_blank'>linkedin</a>
            {' • '}
        <a href={`https://twitter.com/RinatRezyapov`} target='_blank'>twitter</a>
      </footer>
    </div>
  )
}

export default Layout

const GradientTitle = styled(Link)`
  box-shadow: none;     
  background: linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%);
  backgroundClip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
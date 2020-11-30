import React from "react"
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
          fontSize: '2rem'
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

export default Layout;
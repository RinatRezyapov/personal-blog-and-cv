/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const IMAGE_STYLE = {
  fontFamily: "Montserrat, sans-serif",
  marginBottom: 0,
  borderRadius: `50%`,
  backgroundClip: "content-box,border-box",
  backgroundImage: "linear-gradient(#111,#111),linear-gradient(90deg,#ec6192,#ec4c34,#ffbd2b,#ebde56,#57c754,#53a1eb)",
  padding: "4px",
};

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={IMAGE_STYLE}
      />
      <p>
        Personal blog by
        {' '}
        <a href={`https://twitter.com/${social.twitter}`} target='_blank'>
          <strong>
            {author.name}
          </strong>
        </a>
        <div>
          {author.summary}
          <div>
            <Link to={`/cv`}>CV</Link>
            {' | '}
            <a href={`https://twitter.com/${social.twitter}`} target='_blank'>twitter</a>
            {' | '}
            <a href={`https://github.com/${social.github}`} target='_blank'>github</a>
            {' | '}
            <a href={`https://linkedin.com/in/${social.linkedin}`} target='_blank'>linkedin</a>
          </div>
        </div>

      </p>
    </div>
  )
}

export default Bio

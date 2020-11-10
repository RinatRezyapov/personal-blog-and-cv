/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components";

import { rhythm } from "../utils/typography"

const IMAGE_STYLE = {
  marginBottom: 0,
  borderRadius: `50%`,
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
      <HeadlineSection>
        Personal blog by
        {' '}
        <Link to={`/cv`}>
          <strong >
            {author.name}
          </strong>
        </Link>
        <div>
          {author.summary}
          <div>
            <a href={`https://twitter.com/${social.twitter}`} target='_blank'>Twitter</a>
            {' | '}
            <a href={`https://github.com/${social.github}`} target='_blank'>Github</a>
            {' | '}
            <a href={`https://linkedin.com/in/${social.linkedin}`} target='_blank'>Linkedin</a>
            {' | '}
            <Link to={`/cv`}>CV</Link>
          </div>
        </div>

      </HeadlineSection>
    </div>
  )
}

export default Bio;

const HeadlineSection = styled.p`
  a {
    -webkit-text-fill-color: white;
  }
`;

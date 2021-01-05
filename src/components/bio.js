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

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(4),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          minHeight: 100,
          borderRadius: `100%`,
        }}
        imgStyle={IMAGE_STYLE}
      />
      <HeadlineWrapper>
        <HeadlineSection>
          Personal blog by{' '}
          <Link to={`/cv`}>
            {author.name}
          </Link>
        </HeadlineSection>
        <AboutSection>
          {author.summary}
        </AboutSection>
      </HeadlineWrapper>
    </div>
  )
}


export default Bio;

const HeadlineSection = styled.p`
  a {
    -webkit-text-fill-color: white;
  }
`;

const AboutSection = styled.p`
  color: white;
  font-size: 0.9rem;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
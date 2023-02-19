/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const IMAGE_STYLE = {
  borderRadius: `50%`,
  border: '4px solid #7b2da1'
};

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
    <Wrapper>
      <StaticImage
        alt={author.name}
        imgStyle={IMAGE_STYLE}
        src="../../content/assets/profile-pic.png"
        width={400}
        height={400}
      />
      <HeadlineWrapper>
        <HeadlineSection>
          Personal blog by{' '}
          <Link to={`/cv`}>
            {author.name} {'(CV)'}
          </Link>
        </HeadlineSection>
        <AboutSection>
          {author.summary}
        </AboutSection>
      </HeadlineWrapper>
    </Wrapper>
  )
}


export default Bio;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const HeadlineSection = styled.span`
  a {
    color: #7b2da1;
  }
`;

const AboutSection = styled.p`
  font-size: 0.9rem;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
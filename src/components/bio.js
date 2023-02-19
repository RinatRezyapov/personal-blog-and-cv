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
  border: '4px solid #7b2da1'
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
    <Wrapper>
      <BioImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
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
    </Wrapper>
  )
}


export default Bio;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
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

const BioImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 150px;
  min-height: 150px;
  border-radius: 100%;
`;
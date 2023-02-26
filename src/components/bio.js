import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { rhythm } from "../utils/typography"

const IMAGE_STYLE = {
  marginBottom: 0,
  borderRadius: `100%`,
  border: '2px solid white',
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
      <ImageWrapper>
        <StaticImage
          alt={author.name}
          imgStyle={IMAGE_STYLE}
          src="../../content/assets/profile-pic.png"
          width={400}
          height={400}
        />
      </ImageWrapper>
      <HeadlineWrapper>
        <HeadlineSection>
          Personal blog by{' '}
          <Link to={`/cv`}>
            {author.name} (CV)
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
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

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

const ImageWrapper = styled.div`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 100px;
  min-height: 100px;
  border-radius: 100%;
  overflow: hidden;
`;
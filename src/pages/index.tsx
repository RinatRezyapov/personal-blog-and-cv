import React from "react";
import { PageProps, graphql } from "gatsby";
import styled from "styled-components";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import { StyledLink } from "../styles/Typography";
import { Fab, SvgStyled } from "./cv";
import CvPdf from '../../static/rinat-rezyapov-cv.pdf';
import CVIcon from '../../content/assets/cv-svg.svg'

type Data = {
  site: {
    siteMetadata: {
      title: string
      author: {
        name: string
      }
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.author.name} />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <StyledArticle key={node.fields.slug} >
            <header>
              <TitleWrapper>
                <StyledLink to={node.fields.slug}>
                  {title}
                </StyledLink>
              </TitleWrapper>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </StyledArticle>
        )
      })}
      <Fab
        href={CvPdf}
        download
      >
        <SvgStyled alt='download-cv-pdf' src={CVIcon} />
      </Fab>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

const TitleWrapper = styled.h2`
  margin-bottom: ${rhythm(1 / 4)};
  font-size: 2rem;
`;

const StyledArticle = styled.article`
  margin-bottom: ${rhythm(2)};
`;
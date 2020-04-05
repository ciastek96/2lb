import React, { Component } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import Fluidbox from "../components/Fluidbox/Fluidbox"
import BlogItem from "../components/BlogItem/BlogItem"
import Article from "../components/Article/Article"
import Photo from "../assets/1.jpg"

const StyledWrapper = styled.div`
  display: grid;
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: 0 auto;
  padding: 35px;
  grid-template-columns: 1fr;
  grid-gap: 35px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 35px 15px;
  }
`

class BlogPage extends Component {
  render() {
    const {
      data: {
        allSanityPost: { nodes },
        file,
      },
    } = this.props
    return (
      <Layout>
        {console.log(file)}
        <Fluidbox title="Aktualności">
          <BackgroundImage
            Tag="div"
            fluid={file.childImageSharp.fluid}
            alt="Background"
            className="FluidboxWrapper"
          />
        </Fluidbox>
        <StyledWrapper>
          {nodes.map(item => (
            <Article
              key={item._id}
              title={item.title}
              content={item.content2}
              data={item._createdAt}
              media={item.background.asset.fluid.src}
              slug={item.slug.current}
            />
          ))}
        </StyledWrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allSanityPost(sort: { order: DESC, fields: _createdAt }) {
      nodes {
        _id
        title
        slug {
          current
        }
        content2
        _createdAt(formatString: "DD MMMM YYYY", locale: "PL")
        background {
          asset {
            fluid {
              src
            }
            fixed {
              src
            }
          }
        }
      }
    }
    file(relativePath: { eq: "hero/4b.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BlogPage

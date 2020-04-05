import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { render } from "react-dom"

import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import Fluidbox from "../components/Fluidbox/Fluidbox"
import Lightbox from "../components/Lightbox/Lightbox"
import Video from "../components/Video/Video"
import Button from "../components/Button/Button"
import StyledBlockContent from "../components/StyledBlockContent/StyledBlockContent"

const StyledImageItem = styled.img`
  max-width: 100%;
`

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  display: flex;
  margin: 0 auto;
  padding: 35px;
  flex-direction: column;
  justify-content: center;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 35px 0;
  }
`

const StyledInnerWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.dark2};
  border-radius: 15px;
  margin: 0 auto 45px;
  padding: 45px;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    background: none;
  }

  ${StyledBlockContent} {
    margin-top: 0;
    color: ${({ theme }) => theme.white};
  }

  ${Heading} {
    margin: 35px 0;
    color: ${({ theme }) => theme.primary};
  }
`

const Content = styled.p`
  line-height: 1.8;
  margin: 15px;
  color: ${({ theme }) => theme.grey200};
  text-align: justify;
`

class postTemplate extends Component {
  state = {
    gallery: false,
    images: [],
  }

  componentDidMount() {
    const {
      data: { post },
    } = this.props
    if (post._rawImages) {
      const rawImages = post._rawImages.map(el => ({
        src: el.asset.url,
        width: el.asset.metadata.dimensions.width,
        height: el.asset.metadata.dimensions.height,
      }))
      this.setState({
        gallery: true,
        images: rawImages,
      })
    }
  }
  render() {
    const {
      pageContext: { data },
      data: { post, file },
    } = this.props

    const { gallery, images } = this.state
    return (
      <Layout>
        <Fluidbox title={post.title} date={post._createdAt}>
          <BackgroundImage
            Tag="div"
            fluid={file.childImageSharp.fluid}
            alt="Background"
            className="FluidboxWrapper"
          />
        </Fluidbox>
        <StyledWrapper>
          <StyledInnerWrapper>
            <Video url="https://www.youtube.com/embed/vx0i-iPOlQk" />
            <StyledBlockContent blocks={post._rawContent} />
            {gallery && <Lightbox direction={"column"} images={images} />}
          </StyledInnerWrapper>
        </StyledWrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  query fetchPost($data: String) {
    post: sanityPost(slug: { current: { eq: $data } }) {
      title
      _createdAt(locale: "PL", formatString: "DD MMMM YYYY")
      _rawContent
      _rawImages(resolveReferences: { maxDepth: 2 })
      background {
        asset {
          source {
            url
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

export default postTemplate

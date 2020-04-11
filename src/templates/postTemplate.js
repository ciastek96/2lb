import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo"
import Layout from "../layout/Layout"
import Fluidbox from "../components/Fluidbox/Fluidbox"
import Lightbox from "../components/Lightbox/Lightbox"
import Video from "../components/Video/Video"
import StyledBlockContent from "../components/StyledBlockContent/StyledBlockContent"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md};
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
`

const StyledImg = styled(Img)``

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
        <SEO title={`${post.title} - aktualności`} />
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
            <StyledImg fluid={post.background.asset.fluid} />
            <StyledBlockContent blocks={post._rawContent} />
            {gallery && <Lightbox direction={"column"} images={images} />}
            {post.videos &&
              post.videos.map(item => <Video url={item} key={item} />)}
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
      videos
      _rawImages(resolveReferences: { maxDepth: 2 })
      background {
        asset {
          fluid(maxHeight: 1080) {
            ...GatsbySanityImageFluid
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

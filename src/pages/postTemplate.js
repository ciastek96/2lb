import React, { Component } from "react"
import { Link } from "gatsby"
// import { SRLWrapper } from "simple-react-lightbox"
// import Masonry from "react-masonry-css"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import Fluidbox from "../components/Fluidbox/Fluidbox"
import Video from "../components/Video/Video"
import Button from "../components/Button/Button"
import StyledBlockContent from "../components/StyledBlockContent/StyledBlockContent"

import Lightbox from "../components/Lightbox/Lightbox"

const StyledImageItem = styled.img`
  max-width: 100%;
`

const StyledWrapper = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: 0 auto;
  padding: 35px;
  flex-direction: column;
  justify-content: center;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 10px;
  }
`

const StyledInnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.dark2};
  border-radius: 15px;
  margin: 0 auto 45px;
  padding: 35px;

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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.grey300};
  margin: 5px 0 25px;

  &:hover {
    color: white;
  }
`
const StyledHeading = styled.div`
  display: flex;
  align-items: center;
`

const DateInfo = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.grey300};
  font-weight: 500;
  margin: 0 15px;
`

// const StyledSRLWrapper = styled(SRLWrapper)`
//   margin-bottom: 0;
// `

// const StyledMasonry = styled(Masonry)`
//   display: flex;
//   margin-top: 60px;
//   margin-left: 0;
//   max-width: auto;

//   .my-masonry-grid_column {
//     background-clip: padding-box;

//     img {
//       max-width: 100%;
//       margin: 0;
//     }
//   }
// `

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

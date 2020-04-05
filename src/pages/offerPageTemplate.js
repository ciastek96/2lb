import React, { Component } from "react"
import { render } from "react-dom"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Lightbox from "../components/Lightbox/Lightbox"

import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import Fluidbox from "../components/Fluidbox/Fluidbox"
import AsideMenu from "../components/AsideMenu/AsideMenu"
import StyledBlockContent from "../components/StyledBlockContent/StyledBlockContent"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  padding: 35px;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-gap: 35px;
  justify-content: center;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const StyledInnerWrapper = styled.div`
  background: ${({ theme }) => theme.dark2};
  padding: 45px;
  border-radius: 15px;
  overflow: hidden;
  text-align: justify;
  width: 100%;

  img {
    max-width: 100%;
  }
`
const StyledHeading = styled(Heading)`
  margin: 35px 0;
  color: ${({ theme }) => theme.primary};

  &:first-child {
    margin-top: 0;
  }
`

const StyledLink = styled(Link)`
  margin: 0 35px;
`

class OfferPageTemplate extends Component {
  state = {
    gallery: false,
    images: [],
  }

  componentDidMount() {
    const {
      data: { item },
    } = this.props
    if (item._rawImages) {
      const rawImages = item._rawImages.map(el => ({
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
      data: { item, file },
    } = this.props
    const { gallery, images } = this.state
    return (
      <Layout>
        <Fluidbox title={item.title}>
          <BackgroundImage
            Tag="div"
            fluid={file.childImageSharp.fluid}
            alt="Background"
            className="FluidboxWrapper"
          />
        </Fluidbox>
        <StyledWrapper>
          <AsideMenu />
          <StyledInnerWrapper>
            <StyledBlockContent blocks={item._rawContent} />

            {gallery && <Lightbox images={images} />}
          </StyledInnerWrapper>
        </StyledWrapper>
      </Layout>
    )
  }
}
export const query = graphql`
  query fetchOfferPage($data: String) {
    item: sanityOffer(slug: { current: { eq: $data } }) {
      title
      slug {
        current
      }
      images {
        asset {
          fluid {
            src
          }
          fixed {
            src
          }
        }
      }
      _rawContent
      _rawImages(resolveReferences: { maxDepth: 2 })
      background {
        asset {
          fixed {
            src
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

export default OfferPageTemplate

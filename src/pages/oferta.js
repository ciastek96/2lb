import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import Fluidbox from "../components/Fluidbox/Fluidbox"
import Box from "../components/Box/Box"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 35px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  grid-gap: 35px;
  justify-content: center;
`

const StyledBox = styled(Box)`
  margin: 0;
`

const OfferPage = ({
  data: {
    allSanityOffer: { nodes },
    file,
  },
}) => (
  <Layout>
    <SEO title="Oferta" />
    <Fluidbox title="Oferta">
      <BackgroundImage
        Tag="div"
        fluid={file.childImageSharp.fluid}
        alt="Background"
        className="FluidboxWrapper"
      />
    </Fluidbox>
    <StyledWrapper>
      {nodes
        ? nodes.map(item => (
            <StyledBox
              key={item.slug.current}
              slug={`/oferta/${item.slug.current}`}
              title={item.title}
              bgImg={item.background.asset.fluid.src}
            />
          ))
        : null}
    </StyledWrapper>
  </Layout>
)
export const query = graphql`
  {
    allSanityOffer {
      nodes {
        title
        slug {
          current
        }
        background {
          asset {
            fluid {
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

export default OfferPage

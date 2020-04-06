import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import ContactDataItem from "../ContactDataItem/ContactDataItem"
import Heading from "../Heading/Heading"
import PhoneIcon from "../../assets/ikonate/svg/phone.svg"
import PinIcon from "../../assets/ikonate/svg/location.svg"
import PersonIcon from "../../assets/ikonate/svg/person.svg"
import EmailIcon from "../../assets/ikonate/svg/envelope.svg"
import GalleryGrid from "../GalleryGrid/GalleryGrid"
import Logotype from "../../assets/drogprof2.png"

const StyledWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.dark};
`
const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  justify-content: center;
  margin: 0 auto;
`

const Row = styled.div`
  background-color: ${({ theme }) => theme.dark};
  padding: 30px;
`

const Paragraph = styled.p`
  margin: 25px 0;
  line-height: 1.7;
  text-align: left;
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.fontSize.xs};
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.fontSize.xs};
  transition: color 0.15s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.white};
  }
`

const StyledImg = styled(Img)`
  max-height: 150px;
  width: 100%;
`

const StyledLogo = styled.img`
  display: block;
  margin-top: 5px;
  max-width: 100%;
`

const CopyrightsInfo = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.dark2};
  color: ${({ theme }) => theme.grey300};
  text-align: center;
  padding: 15px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 1.1px;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      sanityPersonalData {
        fullname
        phone
        email
        address
      }
      sanityFooter {
        logo {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
        content
      }
    }
  `)

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <Row>
          <Link to="/">
            <StyledImg fluid={data.sanityFooter.logo.asset.fluid} />
          </Link>
          <Paragraph>{data.sanityFooter.content}</Paragraph>
        </Row>
        <Row>
          <Heading primary>Kontakt</Heading>
          <ContactDataItem
            footer
            icon={PersonIcon}
            content={data.sanityPersonalData.fullname}
          />
          <ContactDataItem
            footer
            icon={PhoneIcon}
            content={data.sanityPersonalData.phone}
          />
          <ContactDataItem
            footer
            primary
            icon={EmailIcon}
            content={data.sanityPersonalData.email}
          />
          <ContactDataItem
            footer
            icon={PinIcon}
            content={data.sanityPersonalData.address}
          />
        </Row>
        <Row>
          <Heading primary>Portfolio</Heading>
          {/* <GalleryGrid /> */}
        </Row>
        <Row>
          <Heading primary>Strony</Heading>
          <StyledList>
            <StyledListItem>
              <StyledLink to="/">O nas</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/oferta">Oferta</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/aktualnosci">Aktualności</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/kontakt">Kontakt</StyledLink>
            </StyledListItem>
          </StyledList>
        </Row>
      </StyledInnerWrapper>
      <CopyrightsInfo>All copyrights reserved</CopyrightsInfo>
    </StyledWrapper>
  )
}

export default Footer

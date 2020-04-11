import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaFacebookF } from "react-icons/fa"

import ContactDataItem from "../ContactDataItem/ContactDataItem"
import Heading from "../Heading/Heading"
import PhoneIcon from "../../assets/ikonate/svg/phone.svg"
import PinIcon from "../../assets/ikonate/svg/location.svg"
import PersonIcon from "../../assets/ikonate/svg/person.svg"
import EmailIcon from "../../assets/ikonate/svg/envelope.svg"

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

  /* @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    &:first-child {
      margin-top: 35px;
    }
    &:last-child {
      margin-bottom: 35px;
    }
  } */

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: flex;
    flex-direction: column;
  }
`

const Row = styled.div`
  background-color: ${({ theme }) => theme.dark};
  margin: 45px;
`

const Paragraph = styled.p`
  margin: 25px 0;
  line-height: 1.7;
  text-align: left;
  color: ${({ theme }) => theme.grey200};
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
  color: ${({ theme }) => theme.grey200};
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

const CopyrightsInfo = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.dark2};
  color: ${({ theme }) => theme.grey300};
  text-align: center;
  padding: 15px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 1.1px;
  border-top: 1px solid rgba(151, 151, 151, 0.5);
`
const StyledFaFacebookF = styled(FaFacebookF)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grey300};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
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
      allSanityOffer {
        nodes {
          title
          slug {
            current
          }
        }
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
          <Heading primary>Oferta</Heading>
          <StyledList>
            {data.allSanityOffer.nodes.map(item => (
              <StyledListItem key={item.slug.current}>
                <StyledLink to={`/oferta/${item.slug.current}`}>
                  {item.title}
                </StyledLink>
              </StyledListItem>
            ))}
          </StyledList>
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
        {/*<Row>
          <Heading primary>Portfolio</Heading>
          <GalleryGrid />
        </Row> */}
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
            <StyledListItem>
              <StyledLink to="/polityka-prywatnosci">
                Polityka prywatności
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <a
                href="https://www.facebook.com/Second-Life-Bruk-254129215498165/"
                target="_blank"
              >
                <StyledFaFacebookF />
              </a>
            </StyledListItem>
          </StyledList>
        </Row>
      </StyledInnerWrapper>
      <CopyrightsInfo>© {new Date().getFullYear()} 2LB</CopyrightsInfo>
    </StyledWrapper>
  )
}

export default Footer

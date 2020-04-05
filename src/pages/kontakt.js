import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../layout/Layout"

import Fluidbox from "../components/Fluidbox/Fluidbox"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactDataItem from "../components/ContactDataItem/ContactDataItem"
import Heading from "../components/Heading/Heading"

import PhoneIcon from "../assets/ikonate/svg/phone.svg"
import PinIcon from "../assets/ikonate/svg/location.svg"
import PersonIcon from "../assets/ikonate/svg/person.svg"
import EmailIcon from "../assets/ikonate/svg/envelope.svg"
import NipIcon from "../assets/ikonate/svg/feed.svg"
import SuitcaseIcon from "../assets/ikonate/svg/suitcase.svg"

const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  padding: 35px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`

const ContactDataWrapper = styled.div`
  margin: 0 auto;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`

const ContactPage = ({ data }) => (
  <Layout>
    <Fluidbox title="Kontakt">
      <BackgroundImage
        Tag="div"
        fluid={data.file.childImageSharp.fluid}
        alt="Background"
        className="FluidboxWrapper"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
    </Fluidbox>
    <StyledInnerWrapper>
      <ContactDataWrapper>
        <ContactDataItem
          icon={SuitcaseIcon}
          title="Nazwa firmy"
          content={data.sanityPersonalData.title}
        />
        <ContactDataItem
          icon={PersonIcon}
          title="Właściciel"
          content={data.sanityPersonalData.fullname}
        />
        <ContactDataItem
          icon={PhoneIcon}
          title="Telefon kontaktowy"
          content={data.sanityPersonalData.phone}
        />
        <ContactDataItem
          icon={EmailIcon}
          title="Adres e-mail"
          content={data.sanityPersonalData.email}
        />
        <ContactDataItem
          icon={PinIcon}
          title="Adres "
          content={data.sanityPersonalData.address}
        />
        <ContactDataItem
          icon={NipIcon}
          title="NIP "
          content={data.sanityPersonalData.NIP}
        />
      </ContactDataWrapper>
      <ContactForm />
    </StyledInnerWrapper>
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "hero/contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityPersonalData {
      title
      fullname
      phone
      email
      address
      NIP
    }
  }
`

export default ContactPage

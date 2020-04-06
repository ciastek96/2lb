import React from "react"
import styled, { css } from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

import { FaFacebookF } from "react-icons/fa"
import { MdExpandMore } from "react-icons/md"

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;

  ${({ mobile }) =>
    mobile &&
    css`
      flex-direction: column;
      font-size: ${({ theme }) => theme.fontSize.m};
      margin: 0;
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      ${StyledLink}, a {
        margin: 25px 0;
      }
    `}
`

const StyledListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
`

const StyledLink = styled(Link)`
  margin: 0 20px;
  padding: 15px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  transition: color 0.15s ease-in-out;
  font-weight: 500;
  position: relative;

  &:hover > li {
    color: ${({ theme }) => theme.primary};
  }

  &:hover ul {
    top: 35px;
    opacity: 1;
    visibility: visible;
  }

  ul {
    position: absolute;
    top: 50px;
    left: -25px;
    background: ${({ theme }) => theme.white};
    border-radius: 15px;
    margin: 0;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;

    li {
      text-align: left;
      list-style: none;
      color: ${({ theme }) => theme.dark2};
    }

    li:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`
const StyledOfferLink = styled(Link)`
  color: ${({ theme }) => theme.dark2};
  text-decoration: none;
  width: 100%;
  display: block;
  padding: 15px 25px;
  transition: all 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.grey100};
    color: ${({ theme }) => theme.primary};
  }
`

const StyledFaFacebookF = styled(FaFacebookF)`
  color: ${({ theme }) => theme.white};
  margin: 15px 20px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const StyledMdExpandMore = styled(MdExpandMore)`
  margin-left: 5px;
`

const Navigation = ({ mobile }) => {
  const query = useStaticQuery(graphql`
    {
      allSanityOffer(sort: { order: ASC, fields: _createdAt }) {
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
    <StyledList mobile={mobile}>
      <StyledLink to="/" activeClassName="active">
        <StyledListItem>O nas</StyledListItem>
      </StyledLink>

      <StyledLink to="/oferta" activeClassName="active" partiallyActive={true}>
        <StyledListItem>
          Oferta
          {!mobile && query.allSanityOffer.nodes.length > 0 ? (
            <>
              <StyledMdExpandMore />
              <ul>
                {query.allSanityOffer.nodes.map(item => (
                  <li key={item.slug.current}>
                    <StyledOfferLink
                      to={`/oferta/${item.slug.current}`}
                      activeClassName="active"
                    >
                      {item.title}
                    </StyledOfferLink>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </StyledListItem>
      </StyledLink>

      <StyledLink
        to="/aktualnosci"
        activeClassName="active"
        partiallyActive={true}
      >
        <StyledListItem>Aktualności</StyledListItem>
      </StyledLink>

      <StyledLink to="/kontakt" activeClassName="active">
        <StyledListItem>Kontakt</StyledListItem>
      </StyledLink>

      <a
        href="https://www.facebook.com/Second-Life-Bruk-254129215498165/"
        target="_blank"
      >
        <StyledFaFacebookF />
      </a>
    </StyledList>
  )
}

export default Navigation

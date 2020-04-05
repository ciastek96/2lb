import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"

import BackIcon from ".././../assets/ikonate/svg/arrow-left.svg"

const StyledWrapper = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.dark2};
  border-radius: 10px;
`
const StyledListItem = styled.li`
  margin: 0;
  padding: 25px 45px;
  list-style: none;
  color: white;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    padding-left: 50px;
  }

  ${({ back }) =>
    back &&
    css`
      padding: 25px 50px;
      background: url(${BackIcon});
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 25px 50%;

      &:hover {
        padding-left: 45px;
        background-position: 20px 50%;
      }
    `}
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &.active > ${StyledListItem} {
    background: ${({ theme }) => theme.primary};
    padding-left: 55px;
  }
`

const AsideMenu = () => {
  const data = useStaticQuery(graphql`
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
  const {
    allSanityOffer: { nodes },
  } = data
  return (
    <StyledWrapper>
      <StyledList>
        <StyledLink to={`/oferta`} activeClassName="active">
          <StyledListItem back>Oferta</StyledListItem>
        </StyledLink>
        {nodes
          ? nodes.map(item => (
              <React.Fragment key={item.slug.current}>
                <StyledLink
                  to={`/oferta/${item.slug.current}`}
                  activeClassName="active"
                >
                  <StyledListItem>{item.title}</StyledListItem>
                </StyledLink>
              </React.Fragment>
            ))
          : null}
      </StyledList>
    </StyledWrapper>
  )
}

export default AsideMenu

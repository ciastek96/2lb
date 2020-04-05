import styled, { css } from "styled-components"
import BackIcon from "../../assets/ikonate/svg/arrow-left.svg"

const Button = styled.button`
  height: 35px;
  width: 125px;
  background: none;
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 25px;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 1.3px;
  font-weight: 400;
  overflow: hidden;
  position: relative;
  transition: all 0.35s ease-in-out;
  z-index: 0;

  &:disabled {
    border: 1px solid ${({ theme }) => theme.grey200};
    background: ${({ theme }) => theme.grey200};
    color: ${({ theme }) => theme.dark};
    cursor: no-drop;
  }

  &::before {
    content: "";
    z-index: -1;
    height: 40px;
    width: 140px;
    position: absolute;
    top: -5px;
    left: 130px;
    transition: all 0.25s ease-in-out;
    background-color: ${({ theme }) => theme.white};
    transform: skew(45deg);
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.dark};
  }

  &:hover::before {
    left: -10px;
  }

  ${({ back }) =>
    back &&
    css`
      background: url(${BackIcon});
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid white;

      &:hover::before {
        left: 130px;
      }
    `}
`

export default Button

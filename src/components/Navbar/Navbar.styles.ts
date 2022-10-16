import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

type ButtonProps = {
  isOpen?: boolean
}

export const NavbarDesign = styled.nav`
  position: fixed;
  margin: 0 auto;
  background-color: #222831;
  height: 60px;
  width: 100%;
  z-index: 100;

  @media (min-width: 768px) {
    a {
      margin: 0 10px;
    }
  }
`

export const LinkItem = styled(NavLink)`
font-size: 30px;
  text-decoration: none;
  color: #eeeeee;
  cursor: pointer;


  &.active {
    color: #F05454;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;

  @media (min-width: 768px) {
    section {
      display: none;
    }
  }

  a, button {
    transition: color 0.15s;
  }

  a:hover, button:hover {
    color: #F05454;
  }
`

export const BurgerIcon = styled.button<ButtonProps>`
  margin-left: 0.5em;
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  color: #eeeeee;
  ${({ isOpen }) => isOpen && css`
    color: #F05454;
  `}
`


export const LogoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
  flex-direction: column;
`

export const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  a {
    padding: 5px;
  }
`

export const LoginButton = styled.button`
color: white;
text-transform: uppercase;
background-color: transparent;
padding: 5px 10px;
border: none;
cursor: pointer;
`
export const CartContainer = styled.div`
  position: relative;

p {
  position: absolute;
  top: -5px;
  right: 10px;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
}
`
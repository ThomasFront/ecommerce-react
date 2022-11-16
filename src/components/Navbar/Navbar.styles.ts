import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

type ButtonProps = {
  isOpen?: boolean
}

export const NavbarDesign = styled.nav`
  position: fixed;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.secondaryColor};
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
  color: ${({theme}) => theme.colors.whiteColor};
  cursor: pointer;

  &.active {
    color: ${({theme}) => theme.colors.primaryColor};
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

  section {
    width: 33%;

    button {
      margin-left: 5px;
    }
  }

  @media (min-width: 768px) {
    section {
      display: none;
    }
  }

  a, button {
    transition: color 0.15s;
  }

  a:hover, button:hover {
    color: ${({theme}) => theme.colors.primaryColor};;
  }
`

export const BurgerIcon = styled.button<ButtonProps>`
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.whiteColor};
  ${({ isOpen }) => isOpen && css`
    color: ${({theme}) => theme.colors.primaryColor};
  `}

  @media (min-width: 370px) {
      font-size: 24px;
    }

    @media (min-width: 580px) {
      font-size: 28px;
    }
`

export const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 33%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px; 
    text-align: center;
    font-weight: bold;

    @media (min-width: 580px){
      font-size: 20px;
    }
  }

  @media (min-width: 768px){
    justify-content: flex-start;
  }
`


export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5px;
  height: 100%;
  width: 33%;
  font-size: 8px;

  a {
    padding: 0 2px;
    font-size: 18px;

    @media (min-width: 370px) {
      font-size: 24px;
    }

    @media (min-width: 580px) {
      font-size: 28px;
      padding: 0 5px;
    }
  }

  
  button {
    font-size: 10px;

    @media (min-width: 370px) {
      font-size: 12px;
    }

    @media (min-width: 580px) {
      font-size: 13px;
    }
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
  right: 0px;
  background-color: ${({theme}) => theme.colors.redColor};;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  pointer-events: none;

  @media (min-width: 768px){
    width: 20px;
    height: 20px;
    font-size: 16px;
    right: 10px;
  }
}
`

export const BlogContainer = styled.div`
  display: none;

  @media (min-width: 768px){
    display: flex;
  }
`

export const BlogLink = styled(Link)`
  
  @media (min-width: 768px){
    padding: 3px 6px !important;
    border-radius: 6px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    font-size: 20px !important;
    background-color: white;
  }
`
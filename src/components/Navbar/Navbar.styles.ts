import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavbarDesign = styled.nav`
  position: fixed;
  margin: 0 auto;
  background-color: #222831;
  height: 60px;
  width: 100%;
  z-index: 100;
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

`

export const BurgerIcon = styled.button`
  margin-left: 0.5em;
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  color: #eeeeee;
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


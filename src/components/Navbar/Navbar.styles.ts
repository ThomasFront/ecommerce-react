import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

type LinkItemProps = {
  isActive?: boolean | null
}

export const NavbarDesign = styled.nav`
  position: fixed;
  margin: 0 auto;
  background-color: white;
  height: 60px;
  width: 100%;
`

export const LinkItem = styled(NavLink)`
padding: 0.5em;
font-size: 30px;
  text-decoration: none;
  color: black;
  cursor: pointer;


  &.active {
    color: #573788;
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
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-right: 2em;
`


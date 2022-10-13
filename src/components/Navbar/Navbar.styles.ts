import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarDesign = styled.nav`
position: fixed;
margin: 0 auto;
  background-color: white;
  height: 60px;
  width: 100%;
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
  margin: 0 auto;
  max-width: 1000px;
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

export const RightSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
margin-right: 2em;
`

export const LinkItem = styled(Link)`
padding: 0.5em;
font-size: 30px;
  text-decoration: none;
  color: black;
  cursor: pointer;

`
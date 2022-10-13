import React from 'react'
import { BurgerIcon, LinkItem, LogoWrapper, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiConverseShoe } from 'react-icons/gi'
import { useLocation } from 'react-router'


export function Navbar() {
  const activeStyle = {
    color: 'blue',
  }

  const location = useLocation()
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          {location.pathname === '/' && <BurgerIcon><GiHamburgerMenu /></BurgerIcon>}
          <LinkItem to="/" style={{ fontSize: '22px', textAlign: 'center', display: 'flex', alignItems: 'center' }}><GiConverseShoe />FUTURE</LinkItem>
          <RightSection>
            <LinkItem to="/profile"><BsFillPersonFill /></LinkItem>
            <LinkItem to="/cart"><FaShoppingCart /></LinkItem>
          </RightSection>
        </Wrapper>
      </NavbarDesign>
    </>
  )
}

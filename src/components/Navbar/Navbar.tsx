import React from 'react'
import { BurgerIcon, LinkItem, LinkWrapper, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Navbar() {
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          <BurgerIcon><GiHamburgerMenu /></BurgerIcon>
          <LinkItem to="/">LOGO</LinkItem>
          <RightSection>
            <LinkItem to="/profile"><BsFillPersonFill /></LinkItem>
            <LinkItem to="/cart"><FaShoppingCart /></LinkItem>
          </RightSection>
        </Wrapper>
      </NavbarDesign>
    </>
  )
}

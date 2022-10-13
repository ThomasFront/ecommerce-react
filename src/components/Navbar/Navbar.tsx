import React from 'react'
import { BurgerIcon, LinkItem, LogoWrapper, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiConverseShoe } from 'react-icons/gi'
  const location = useLocation()
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          <RightSection>
            <LinkItem to="/profile"><BsFillPersonFill /></LinkItem>
            <LinkItem to="/cart"><FaShoppingCart /></LinkItem>
          </RightSection>
        </Wrapper>
      </NavbarDesign>
    </>
  )
}

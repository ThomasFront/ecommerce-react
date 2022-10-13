import { BurgerIcon, LinkItem, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { useLocation } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiConverseShoe } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toggleShow } from '../../store/slices/categoriesSlice'


export function Navbar() {
  const dispatch = useDispatch()
  const location = useLocation()
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          {location.pathname === '/' && <BurgerIcon onClick={() => dispatch(toggleShow())}><GiHamburgerMenu /></BurgerIcon>}
          <LinkItem to="/" style={{ fontSize: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}><GiConverseShoe />FUTURE</LinkItem>
          <RightSection>
            <LinkItem to="/profile"><BsFillPersonFill /></LinkItem>
            <LinkItem to="/cart"><FaShoppingCart /></LinkItem>
          </RightSection>
        </Wrapper>
      </NavbarDesign>
    </>
  )
}

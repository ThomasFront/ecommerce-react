import { BurgerIcon, LinkItem, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { useLocation } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiConverseShoe } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleShow, toogleShowSelector } from '../../store/slices/categoriesSlice'


export function Navbar() {
  const dispatch = useDispatch()
  const location = useLocation()
  const burgerSelector = useSelector(toogleShowSelector)
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          {location.pathname === '/' && <BurgerIcon isOpen={burgerSelector} onClick={() => dispatch(toggleShow())}><GiHamburgerMenu /></BurgerIcon>}
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

import { BurgerIcon, CartContainer, LinkItem, LoginButton, LogoContainer, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiConverseShoe } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cartSelector, toggleShow, toggleShowSelector } from '../../store/slices/categoriesSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logout } from '../../firebase/firebase'


export function Navbar() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const burgerSelector = useSelector(toggleShowSelector)
  const [user, loading, error] = useAuthState(auth);
  const cartAmount = useSelector(cartSelector)
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          <section>
            {location.pathname === '/' && <BurgerIcon isOpen={burgerSelector} onClick={() => dispatch(toggleShow())}><GiHamburgerMenu /></BurgerIcon>}
          </section>
          <LogoContainer>
            <LinkItem to="/"><GiConverseShoe />FUTURE</LinkItem>
          </LogoContainer>
          <RightSection>
            <LoginButton onClick={() => user ? logout() : navigate('/login')}>{user ? 'log out' : 'log in'}</LoginButton>
            {user && <LinkItem to="/profile"><BsFillPersonFill /></LinkItem>}
            <CartContainer>
              <LinkItem to="/cart"><FaShoppingCart /></LinkItem>
              {cartAmount.length > 0 ? <p>{cartAmount.length}</p> : ''}
            </CartContainer>
          </RightSection>
        </Wrapper>
      </NavbarDesign>
    </>
  )
}

import { BlogContainer, BlogLink, BurgerIcon, CartContainer, LinkItem, LoginButton, LogoContainer, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiConverseShoe } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleShow, toggleShowSelector } from '../../store/slices/categoriesSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logout } from '../../firebase/firebase'
import { cartSelector, clearCart } from '../../store/slices/cartSlice'


export function Navbar() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const burgerSelector = useSelector(toggleShowSelector)
  const [user] = useAuthState(auth);
  const cartAmount = useSelector(cartSelector)
  const amountInCart = cartAmount.reduce((curr, acc) => acc.amount + curr, 0)

  const handleLogout = () => {
    logout()
    dispatch(clearCart())
  }
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          <section>
            {location.pathname === '/' &&
              <BurgerIcon isOpen={burgerSelector}
                onClick={() => dispatch(toggleShow())}
              >
                <GiHamburgerMenu />
              </BurgerIcon>
            }
          </section>
          <LogoContainer>
            <LinkItem to="/"><GiConverseShoe />FUTURE</LinkItem>
          </LogoContainer>
          <RightSection>
            <LoginButton
              onClick={() => user ? handleLogout() : navigate('/login')}
            >
              {user ? 'log out' : 'log in'}
            </LoginButton>
            <BlogContainer>
              <BlogLink to='/blog'>Blog</BlogLink>
            </BlogContainer>
            {user && <LinkItem to="/profile"><BsFillPersonFill /></LinkItem>}
            <CartContainer>
              <LinkItem to="/cart"><FaShoppingCart /></LinkItem>
              {amountInCart > 0 && <p>{amountInCart}</p>}
            </CartContainer>
          </RightSection>
        </Wrapper>
      </NavbarDesign>
    </>
  )
}

import { BurgerIcon, LinkItem, LoginButton, NavbarDesign, RightSection, Wrapper } from './Navbar.styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiConverseShoe } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleShow, toggleShowSelector } from '../../store/slices/categoriesSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logout } from '../../firebase/firebase'


export function Navbar() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const burgerSelector = useSelector(toggleShowSelector)
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <NavbarDesign>
        <Wrapper>
          <section>
            {location.pathname === '/' && <BurgerIcon isOpen={burgerSelector} onClick={() => dispatch(toggleShow())}><GiHamburgerMenu /></BurgerIcon>}
          </section>
          <LinkItem to="/" style={{ fontSize: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}><GiConverseShoe />FUTURE</LinkItem>
          <RightSection>
            <LoginButton onClick={() => user ? logout() : navigate('/login')}>{user ? 'log out' : 'log in'}</LoginButton>
            {user && <LinkItem to="/profile"><BsFillPersonFill /></LinkItem>}
            <LinkItem to="/cart"><FaShoppingCart /></LinkItem>
          </RightSection>
        </Wrapper>
      </NavbarDesign>
    </>
  )
}

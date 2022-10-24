import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase/firebase'
import { cartSelector, getCart } from '../../store/slices/cartSlice'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { MainWrapper } from './Layout.styles'

type ChildrenType = {
  children: React.ReactNode
}

function Layout({ children }: ChildrenType) {
  const [user] = useAuthState(auth)
  const cart = useSelector(cartSelector)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    if (user && !cart.length) {
      dispatch(getCart(user.uid))
    }
  }, [user])

  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

export default Layout
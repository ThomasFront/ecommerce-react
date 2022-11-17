import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router'
import { Route, Routes } from 'react-router'
import Blog from '../../pages/Blog/Blog'
import Cart from '../../pages/Cart/Cart'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import Product from '../../pages/Product/Product'
import Profile from '../../pages/Profile/Profile'
import Register from '../../pages/Register/Register'
import SpecificArticle from '../../pages/SpecificArticle/SpecificArticle'

export const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:articleId' element={<SpecificArticle />} />
      </Routes>
    </AnimatePresence>
  )
}
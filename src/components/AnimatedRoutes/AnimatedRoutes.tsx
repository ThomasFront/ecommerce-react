import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useLocation } from 'react-router'
import { Route, Routes } from 'react-router'
import Cart from '../../pages/Cart/Cart'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import Product from '../../pages/Product/Product'
import Profile from '../../pages/Profile/Profile'
import Register from '../../pages/Register/Register'

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
      </Routes>
    </AnimatePresence>
  )
}
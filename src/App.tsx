import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
    </Layout>
  )
}

export default App

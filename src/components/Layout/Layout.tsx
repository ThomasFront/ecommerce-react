import React from 'react'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { MainWrapper } from './Layout.styles'

type ChildrenType = {
  children: React.ReactNode
}

function Layout({ children }: ChildrenType) {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

export default Layout
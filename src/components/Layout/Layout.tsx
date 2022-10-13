import React from 'react'
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
    </>
  )
}

export default Layout
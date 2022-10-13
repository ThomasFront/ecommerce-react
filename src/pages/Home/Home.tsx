import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCategories from '../../components/ProductsCategories/ProductsCategories'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { toogleShowSelector } from '../../store/slices/categoriesSlice'


function Home() {
  const toggleVisible = useSelector(toogleShowSelector)
  return (
    <>
      {toggleVisible && <ProductsCategories />}
      <TextWrapper>homepage</TextWrapper>
    </>
  )
}

export default Home
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCategories from '../../components/ProductsCategories/ProductsCategories'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { toogleShowSelector } from '../../store/slices/categoriesSlice'
import { CategoryText, ShoesContainer } from './Home.styles'
import { shoes, ShoesType } from '../../data/shoesdata'
import ShoeItem from '../../components/ShoeItem/ShoeItem'

export type ShoeType = {
  id: number,
  price: number,
  category: string,
  brand: string,
  shortBrand: string,
  description: string,
  images: Array<string>
}


function Home() {
  const toggleVisible = useSelector(toogleShowSelector)
  return (
    <>
      {toggleVisible && <ProductsCategories />}
      <TextWrapper>
        <CategoryText>All products</CategoryText>
        <ShoesContainer>
          {shoes.map((shoe: ShoeType) => <ShoeItem key={shoe.id} shoe={shoe} />)}
        </ShoesContainer>
      </TextWrapper>
    </>
  )
}

export default Home
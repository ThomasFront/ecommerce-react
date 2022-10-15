import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCategories from '../../components/ProductsCategories/ProductsCategories'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { toggleShowSelector } from '../../store/slices/categoriesSlice'
import { Categories, Category, ShoesContainer } from './Home.styles'
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
  const toggleVisible = useSelector(toggleShowSelector)
  const [activeCategory, setActiveCategory] = useState('')
  return (
    <>
      {toggleVisible && <ProductsCategories />}
      <TextWrapper>
        <Categories>
          <Category onClick={() => setActiveCategory('')} isActive={!activeCategory}>All</Category>
          <Category onClick={() => setActiveCategory('man')} isActive={activeCategory === 'man'}>Men</Category>
          <Category onClick={() => setActiveCategory('woman')} isActive={activeCategory === 'woman'}>Women</Category>
          <Category onClick={() => setActiveCategory('kids')} isActive={activeCategory === 'kids'}>Kids</Category>
        </Categories>
        <ShoesContainer>
          {shoes.filter(({ category }) => !activeCategory || category === activeCategory).map((shoe) => <ShoeItem key={shoe.id} shoe={shoe} />)}
        </ShoesContainer>
      </TextWrapper>
    </>
  )
}

export default Home
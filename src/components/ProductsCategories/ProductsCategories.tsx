import React from 'react'
import { Wrapper } from '../Navbar/Navbar.styles'
import { TextWrap } from '../TextWrapper/TextWrapper.styles'
import { CategoriesList, Category, CategoryBox, CategoryName } from './ProductsCategories.styles'

function ProductsCategories() {
  return (
    <TextWrap>
      <CategoriesList>
        <CategoryBox>
          <CategoryName>Gender:</CategoryName>
          <Category>All</Category>
          <Category>Man</Category>
          <Category>Woman</Category>
        </CategoryBox>
        <CategoryBox>
          <CategoryName>Brand:</CategoryName>
          <Category>All</Category>
          <Category>Adidas</Category>
          <Category>Nike</Category>
          <Category>New Balance</Category>
          <Category>Vans</Category>
        </CategoryBox>
      </CategoriesList>
    </TextWrap>
  )
}

export default ProductsCategories
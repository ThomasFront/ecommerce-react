import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { brandSelector, changeBrand, toggleShow, toggleShowSelector } from '../../store/slices/categoriesSlice'
import { TextWrap } from '../TextWrapper/TextWrapper.styles'
import { CategoriesList, Category, CategoryBox, CategoryContainer, CategoryName } from './ProductsCategories.styles'

function ProductsCategories() {
  const dispatch = useDispatch()
  const brandSelect = useSelector(brandSelector)
  const burger = useSelector(toggleShowSelector)

  const handleCategory = (brand: string) => {
    dispatch(changeBrand(brand))
    dispatch(toggleShow())
  }
  return (
    <CategoriesList showCategories={burger}>
      <TextWrap>
        <CategoryContainer>
          <CategoryBox>
            <CategoryName>Brand:</CategoryName>
            <Category onClick={() => handleCategory('')} isHighlighted={brandSelect === ''}>All</Category>
            <Category onClick={() => handleCategory('Adidas')} isHighlighted={brandSelect === 'Adidas'}>Adidas</Category>
            <Category onClick={() => handleCategory('Nike')} isHighlighted={brandSelect === 'Nike'}>Nike</Category>
            <Category onClick={() => handleCategory('New Balance')} isHighlighted={brandSelect === 'New Balance'}>New Balance</Category>
            <Category onClick={() => handleCategory('Vans')} isHighlighted={brandSelect === 'Vans'}>Vans</Category>
          </CategoryBox>
        </CategoryContainer>
      </TextWrap>
    </CategoriesList>
  )
}

export default ProductsCategories
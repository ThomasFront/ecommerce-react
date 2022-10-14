import { TextWrap } from '../TextWrapper/TextWrapper.styles'
import { CategoriesList, Category, CategoryBox, CategoryContainer, CategoryName } from './ProductsCategories.styles'

function ProductsCategories() {
  return (
    <CategoriesList>
      <TextWrap>
        <CategoryContainer>
          <CategoryBox>
            <CategoryName>Gender:</CategoryName>
            <Category>All</Category>
            <Category>Man</Category>
            <Category>Woman</Category>
            <Category>Kids</Category>
          </CategoryBox>
          <CategoryBox>
            <CategoryName>Brand:</CategoryName>
            <Category>All</Category>
            <Category>Adidas</Category>
            <Category>Nike</Category>
            <Category>New Balance</Category>
            <Category>Vans</Category>
          </CategoryBox>
        </CategoryContainer>
      </TextWrap>
    </CategoriesList>
  )
}

export default ProductsCategories
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { brandSelector, changeBrand, toggleShow, toggleShowSelector } from '../../store/slices/categoriesSlice'
import { brands } from '../../utils'
import { TextWrap } from '../TextWrapper/TextWrapper.styles'
import { BlogText, CategoriesList, Category, CategoryBox, CategoryContainer, CategoryName } from './ProductsCategories.styles'

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
            <BlogText to='/blog'>Check our blog</BlogText>
            <CategoryName>Brand:</CategoryName>
            {brands.map(({ label, value, id }) => (
              <Category
                key={id}
                onClick={() => handleCategory(value)}
                isHighlighted={brandSelect === value}
              >
                {label}
              </Category>
            ))}
          </CategoryBox>
        </CategoryContainer>
      </TextWrap>
    </CategoriesList>
  )
}

export default ProductsCategories
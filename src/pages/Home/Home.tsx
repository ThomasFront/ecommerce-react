import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCategories from '../../components/ProductsCategories/ProductsCategories'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { brandSelector, changeBrand, toggleShowSelector } from '../../store/slices/categoriesSlice'
import { Brand, Brands, BrandTitle, Categories, Category, CategoryTitle, SelectContainer, ShoesContainer } from './Home.styles'
import { shoes, ShoesType } from '../../data/shoesdata'
import ShoeItem from '../../components/ShoeItem/ShoeItem'
import { useDispatch } from 'react-redux'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

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
  const brandSelect = useSelector(brandSelector)
  const dispatch = useDispatch()
  const [activeCategory, setActiveCategory] = useState('')
  const [selectedValue, setSelectedValue] = useState<ProductSortEnum>(0)
  const [allShoes, setAllShoes] = useState<ShoesType | null>(null)
  const [loading, setLoading] = useState(true)

  const getShoes = async () => {
    const docs = await getDocs(collection(db, "products"));
    const data = docs.docs.map(doc => doc.data()) as ShoesType
    setAllShoes(data)
  }

  useEffect(() => {
    getShoes()
  }, [])

  useEffect(() => {
    if(!!allShoes){
    setLoading(false)
    }
  }, [allShoes])

  enum ProductSortEnum {
    mostPopular = 0,
    lowestPrice = 1,
    highestPrice = 2
  }

  const handleSort = (a: ShoeType, b: ShoeType) => {
    switch (selectedValue) {
      case ProductSortEnum.highestPrice:
        return b.price - a.price
      case ProductSortEnum.lowestPrice:
        return a.price - b.price
      default:
        return 0
    }
  }

  return (
    <>
      {toggleVisible && <ProductsCategories />}
      <TextWrapper>
        <CategoryTitle>Category:</CategoryTitle>
        <Categories>
          <Category onClick={() => setActiveCategory('')} isActive={!activeCategory}>All</Category>
          <Category onClick={() => setActiveCategory('woman')} isActive={activeCategory === 'woman'}>Women</Category>
          <Category onClick={() => setActiveCategory('man')} isActive={activeCategory === 'man'}>Men</Category>
          <Category onClick={() => setActiveCategory('kids')} isActive={activeCategory === 'kids'}>Kids</Category>
        </Categories>
        <BrandTitle>Brand:</BrandTitle>
        <Brands>
          <Brand onClick={() => dispatch(changeBrand(''))} isHighlighted={!brandSelect}>All</Brand>
          <Brand onClick={() => dispatch(changeBrand('Adidas'))} isHighlighted={brandSelect === 'Adidas'}>Adidas</Brand>
          <Brand onClick={() => dispatch(changeBrand('Nike'))} isHighlighted={brandSelect === 'Nike'}>Nike</Brand>
          <Brand onClick={() => dispatch(changeBrand('New Balance'))} isHighlighted={brandSelect === 'New Balance'}>New Balance</Brand>
          <Brand onClick={() => dispatch(changeBrand('Vans'))} isHighlighted={brandSelect === 'Vans'}>Vans</Brand>
        </Brands>
        <SelectContainer>
          <CategoryTitle>Sort by:</CategoryTitle>
          <select value={selectedValue} onChange={e => setSelectedValue(parseInt(e.target.value))}>
            <option value={ProductSortEnum.mostPopular}>Most popular</option>
            <option value={ProductSortEnum.lowestPrice}>Lowest price</option>
            <option value={ProductSortEnum.highestPrice}>Highest price</option>
          </select>
        </SelectContainer>
        {loading && 'loading'}
        <ShoesContainer>
          {allShoes?.filter(({ category }) => !activeCategory || category === activeCategory).filter(({ shortBrand }) => shortBrand === brandSelect || !brandSelect).sort((a, b) => handleSort(a, b)).map((shoe) => <ShoeItem key={shoe.id} shoe={shoe} />)}
        </ShoesContainer>
      </TextWrapper>
    </>
  )
}

export default Home
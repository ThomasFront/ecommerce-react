import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCategories from '../../components/ProductsCategories/ProductsCategories'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { brandSelector, changeBrand, toggleShowSelector } from '../../store/slices/categoriesSlice'
import { ArrowIcon, Brand, Brands, BrandTitle, Categories, Category, CategoryTitle, HomePageWrapper, SelectContainer, ShoesContainer } from './Home.styles'
import ShoeItem from '../../components/ShoeItem/ShoeItem'
import { useDispatch } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../firebase/firebase'
import { addDoc, collection, doc, getDocs, query, where } from 'firebase/firestore'
import { MutatingDots } from 'react-loader-spinner'
import { Wave } from '../../components/Wave/Wave'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export type ShoeType = {
  id: number,
  price: number,
  category: string,
  brand: string,
  shortBrand: string,
  description: string,
  images: Array<string>
  size?: number
}

export type ShoesType = Array<{
  id: number,
  price: number,
  category: string,
  brand: string,
  shortBrand: string,
  description: string,
  images: Array<string>
}>


function Home() {
  const toggleVisible = useSelector(toggleShowSelector)
  const brandSelect = useSelector(brandSelector)
  const dispatch = useDispatch()
  const [activeCategory, setActiveCategory] = useState('')
  const [selectedValue, setSelectedValue] = useState('Popular')
  const [user, error] = useAuthState(auth)
  const [allShoes, setAllShoes] = useState<ShoesType | null>(null)
  const [loading, setLoading] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)

  const getAllShoes = async () => {
    const docs = await getDocs(collection(db, "products"))
    const data = docs.docs.map((product) => {
      return product.data()
    })
    setAllShoes(data as ShoesType)
    setLoading(false)
  }

  useEffect(() => {
    getAllShoes()
  }, [])

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSort = (a: ShoeType, b: ShoeType) => {
    switch (selectedValue) {
      case 'Lowest':
        return a.price - b.price
      case 'Highest':
        return b.price - a.price
      default:
        return 0
    }
  }


  return (
    <HomePageWrapper>
      <ProductsCategories />
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
          <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
            <option value="Popular">Most popular</option>
            <option value="Lowest">Lowest price</option>
            <option value="Highest">Highest price</option>
          </select>
        </SelectContainer>
        <ShoesContainer>
          {loading ?
            <MutatingDots
              color='#ef5454'
              secondaryColor='#ef5454'
            />
            :
            <>
              {allShoes
                ?.filter(({ category }: ShoeType) => !activeCategory || category === activeCategory)
                .filter(({ shortBrand }: ShoeType) => shortBrand === brandSelect || !brandSelect)
                .sort((a: ShoeType, b: ShoeType) => handleSort(a, b))
                .map((shoe: ShoeType) => <ShoeItem key={shoe.id} shoe={shoe} />
                )}
            </>
          }
        </ShoesContainer>
      </TextWrapper>
      <ArrowIcon onClick={scrollToTop} showArrowIcon={scrollPosition >= 500}/>
      {!loading && <Wave />}
    </HomePageWrapper>
  )
}

export default Home
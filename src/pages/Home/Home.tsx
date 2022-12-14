import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCategories from '../../components/ProductsCategories/ProductsCategories'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { brandSelector, changeBrand } from '../../store/slices/categoriesSlice'
import { Brand, Brands, BrandTitle, Categories, Category, CategoryTitle, HomePageWrapper, IconWrapper, SelectContainer, ShoesContainer } from './Home.styles'
import ShoeItem from '../../components/ShoeItem/ShoeItem'
import { useDispatch } from 'react-redux'
import { db } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { MutatingDots } from 'react-loader-spinner'
import { Wave } from '../../components/Wave/Wave'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { brands, categories } from '../../utils'

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



function Home() {
  const brandSelect = useSelector(brandSelector)
  const dispatch = useDispatch<any>()
  const [activeCategory, setActiveCategory] = useState('')
  const [selectedValue, setSelectedValue] = useState('Popular')
  const [allShoes, setAllShoes] = useState<Array<ShoeType> | null>(null)
  const [loading, setLoading] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showError, setShowError] = useState(false)

  const getAllShoes = async () => {
    try {
      const docs = await getDocs(collection(db, "products"))
      const data = docs.docs.map((product) => {
        return product.data()
      })
      setAllShoes(data as Array<ShoeType>)
      setLoading(false)
      setShowError(false)
    } catch {
      setShowError(true)
    }
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
    <HomePageWrapper
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
    >
      <ProductsCategories />
      <TextWrapper>
        <CategoryTitle>Category:</CategoryTitle>
        <Categories>
          {categories.map(({ value, label, id }) => (
            <Category
              key={id}
              onClick={() => setActiveCategory(value)}
              isActive={activeCategory === value}
            >
              {label}
            </Category>
          ))}
        </Categories>
        <BrandTitle>Brand:</BrandTitle>
        <Brands>
          {brands.map(({ value, label, id }) => (
            <Brand
              key={id}
              onClick={() => dispatch(changeBrand(value))}
              isHighlighted={brandSelect === value}
            >
              {label}
            </Brand>
          ))}
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
              {showError && <p>The data didn't load correctly...</p>}
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
      <IconWrapper onClick={scrollToTop} showArrowIcon={scrollPosition >= 500}>
        <BsFillArrowUpCircleFill />
      </IconWrapper>
      {!loading && <Wave />}
    </HomePageWrapper>
  )
}

export default Home
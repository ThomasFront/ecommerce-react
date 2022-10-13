import React, { useState } from 'react'
import ProductsCategories from '../../components/ProductsCategories/ProductsCategories'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'


function Home() {
  const [showProductsCategories, setShowProductsCategories] = useState(true)
  return (
    <>
      {showProductsCategories && <ProductsCategories />}
    </>
  )
}

export default Home
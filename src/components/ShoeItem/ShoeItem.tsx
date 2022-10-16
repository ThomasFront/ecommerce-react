import React from 'react'
import { useNavigate } from 'react-router'
import { Desc, Price, ShoeCard, ShoeDescription, ShoeImage } from './ShoeItem.styles'

type ShoeItemType = {
  shoe: {
    id: number,
    price: number,
    category: string,
    brand: string,
    shortBrand: string,
    description: string,
    images: Array<string>
  }
}

function ShoeItem({ shoe }: ShoeItemType) {
  const { id, price, category, brand, shortBrand, description, images } = shoe
  const navigate = useNavigate()
  return (
    <ShoeCard onClick={() => navigate(`/product/${id}`)}>
      <ShoeImage loading='lazy' width={250} height={360} src={images[0]} />
      <ShoeDescription>
        <p>{brand}</p>
        <Desc>{description}</Desc>
        <Price>${price}</Price>
      </ShoeDescription>
    </ShoeCard>
  )
}

export default ShoeItem
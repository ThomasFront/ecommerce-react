import React from 'react'
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
  const {id, price, category, brand, shortBrand, description, images } = shoe
  console.log(images[0])
  return (
    <ShoeCard>
      <ShoeImage src={images[0]}/>
      <ShoeDescription>
        <p>{brand}</p>
        <Desc>{description}</Desc>
        <Price>${price}</Price>
      </ShoeDescription>
    </ShoeCard>
  )
}

export default ShoeItem
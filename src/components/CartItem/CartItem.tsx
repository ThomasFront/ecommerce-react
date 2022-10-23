import React from 'react'
import { useNavigate } from 'react-router'
import { ShoeType } from '../../pages/Home/Home'
import { BrandName, DeleteIcon, Description, Details, ItemContainer, PriceDesktop, PriceDetails } from './CartItem.styles'


type CartItemProps = {
  item: ShoeType
}

export const CartItem = ({ item }: CartItemProps) => {
  const { description, id, price, shortBrand, images } = item
  const navigate = useNavigate()
  return (
    <ItemContainer>
      <Details>
        <img src={images[0]} alt="shoe image" onClick={() => navigate(`/product/${id}`)} />
        <div>
          <BrandName>{shortBrand}</BrandName>
          <Description>{description}</Description>
          <DeleteIcon/>
        </div>
        <PriceDesktop>${price}</PriceDesktop>
        <PriceDetails>
          <p>${price}</p>
        </PriceDetails>
      </Details>
    </ItemContainer>
  )
}

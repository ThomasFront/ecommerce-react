import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { ShoeType } from '../../pages/Home/Home'
import { deleteItemFromCart } from '../../store/slices/cartSlice'
import { BrandName, DeleteIcon, Description, Details, ImgWrapper, ItemContainer, PriceDesktop, PriceDetails, ProductInformation, ShoeSize } from './CartItem.styles'


type CartItemProps = {
  item: ShoeType
}

export const CartItem = ({ item }: CartItemProps) => {
  const { description, id, price, shortBrand, images, size } = item
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <Details>
       <ImgWrapper> <img src={images[0]} alt="shoe image" onClick={() => navigate(`/product/${id}`)} /></ImgWrapper>
        <ProductInformation>
          <BrandName>{shortBrand}</BrandName>
          <Description>{description}</Description>
          <ShoeSize>size: {size}</ShoeSize>
          <DeleteIcon onClick={() => dispatch(deleteItemFromCart(id))} />
        </ProductInformation>
        <PriceDesktop>${price}</PriceDesktop>
        <PriceDetails>
          <p>${price}</p>
        </PriceDetails>
      </Details>
    </ItemContainer>
  )
}

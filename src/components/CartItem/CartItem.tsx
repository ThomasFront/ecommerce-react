import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase/firebase'
import { ShoeType } from '../../pages/Home/Home'
import { cartSelector, deleteFromCart } from '../../store/slices/cartSlice'
import { BrandName, DeleteIcon, Description, Details, ImgWrapper, ItemContainer, PriceDesktop, PriceDetails, ProductInformation, ShoeSize } from './CartItem.styles'


type CartItemProps = {
  item: ShoeType
  index: number
}

export const CartItem = ({ item, index }: CartItemProps) => {
  const { description, id, price, shortBrand, images, size } = item
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const [user] = useAuthState(auth)
  const cart = useSelector(cartSelector)

  return (
    <ItemContainer>
      <Details>
       <ImgWrapper> <img src={images[0]} alt="shoe image" onClick={() => navigate(`/product/${id}`)} /></ImgWrapper>
        <ProductInformation>
          <BrandName>{shortBrand}</BrandName>
          <Description>{description}</Description>
          <DeleteIcon onClick={() => dispatch(deleteFromCart({
            userId: user?.uid as string,
            cart,
            indexToDelete: index
          }))} />
        </ProductInformation>
        <PriceDesktop>${price}</PriceDesktop>
        <PriceDetails>
          <p>${price}</p>
        </PriceDetails>
      </Details>
    </ItemContainer>
  )
}

import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase/firebase'
import { cartSelector } from '../../store/slices/cartSlice'
import { addProductToCart } from '../../utils'
import { CartContainer, CartIcon, Desc, Price, ShoeCard, ShoeDescription, ShoeImage } from './ShoeItem.styles'

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
  const [user, error] = useAuthState(auth);
  const cart = useSelector(cartSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <ShoeCard onClick={() => navigate(`/product/${id}`)}>
      <ShoeImage loading='lazy' width={250} height={360} src={images[0]}/>
      <CartContainer onClick={e => {
        e.stopPropagation()
        if(shoe){
          addProductToCart(shoe, user, dispatch, cart)
        }
      }}>
        <CartIcon/>
      </CartContainer>
      <ShoeDescription>
        <p>{brand}</p>
        <Desc>{description}</Desc>
        <Price>${price}</Price>
      </ShoeDescription>
    </ShoeCard>
  )
}

export default ShoeItem
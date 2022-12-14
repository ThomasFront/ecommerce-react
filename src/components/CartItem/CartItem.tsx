import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase/firebase'
import { cartSelector } from '../../store/slices/cartSlice'
import { deleteProductFromCart } from '../../utils'
import { BrandName, DeleteIcon, Description, Details, ImgWrapper, ItemContainer, PriceDesktop, PriceDetails, ProductInformation } from './CartItem.styles'
import { ShoeTypeWithAmount } from '../../store/slices/cartSlice'

type CartItemProps = {
  item: ShoeTypeWithAmount
  index: number
}

export const CartItem = ({ item }: CartItemProps) => {
  const { description, id, price, shortBrand, images, size, amount } = item
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const [user] = useAuthState(auth)
  const cart = useSelector(cartSelector)

  return (
    <ItemContainer>
      <Details>
        <ImgWrapper>
          <img
            src={images[0]}
            alt="shoe image"
            onClick={() => navigate(`/product/${id}`)}
          />
        </ImgWrapper>
        <ProductInformation>
          <BrandName>{shortBrand}</BrandName>
          <Description>{description}</Description>
          <p>{size} x <span>{amount}</span></p>
          <DeleteIcon
            onClick={() => deleteProductFromCart(user, cart, dispatch, item)} />
        </ProductInformation>
        <PriceDesktop>${(price * amount).toFixed(2)}</PriceDesktop>
        <PriceDetails>
          <p>${(price * amount).toFixed(2)}</p>
        </PriceDetails>
      </Details>
    </ItemContainer>
  )
}

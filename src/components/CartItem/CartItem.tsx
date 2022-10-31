import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase/firebase'
import { ShoeType } from '../../pages/Home/Home'
import { cartSelector } from '../../store/slices/cartSlice'
import { deleteProductFromCart } from '../../utils'
import { BrandName, DeleteIcon, Description, Details, ImgWrapper, ItemContainer, PriceDesktop, PriceDetails, ProductInformation } from './CartItem.styles'


type CartItemProps = {
  item: ShoeType
  index: number
}

export const CartItem = ({ item, index }: CartItemProps) => {
  const { description, id, price, shortBrand, images } = item
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
          <DeleteIcon
            onClick={() => deleteProductFromCart(user, cart, index, dispatch)} />
        </ProductInformation>
        <PriceDesktop>${price}</PriceDesktop>
        <PriceDetails>
          <p>${price}</p>
        </PriceDetails>
      </Details>
    </ItemContainer>
  )
}

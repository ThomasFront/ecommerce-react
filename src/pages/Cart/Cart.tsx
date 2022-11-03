import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { CartItem } from '../../components/CartItem/CartItem'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Wave } from '../../components/Wave/Wave'
import { auth } from '../../firebase/firebase'
import { cartSelector, deleteAllCart } from '../../store/slices/cartSlice'
import { BonusAdded, BonusWrapper, ButtonsContainer, CartHeader, CartItems, CartPageWrapper, CheckoutButton, Container, CostContainer, EmptyCartText, NewPrice, OldPrice, OrderingText, OrderSummary, RedirectingInfo, Total, TotalName, TotalPrice } from './Cart.styles'



function Cart() {
  const cart = useSelector(cartSelector)
  const totalPrice = cart.reduce((prev, curr) => prev + (curr.price * curr.amount), 0).toFixed(2)
  const [showParagraf, setShowParagraf] = useState(false)
  const [addBonus, setAddBonus] = useState(false)
  const [showError, setShowError] = useState(false)
  const [bonusValue, setBonusValue] = useState('ThomasFront')
  const [showBonusCode, setShowBonusCode] = useState(true)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()

  const handleCheckout = () => {
    setShowParagraf(true)
    setTimeout(() => {
      dispatch(deleteAllCart(user?.uid as string))
      navigate('/')
    }, 3000)
  }

  const handleBonusCode = () => {
    if (bonusValue === 'ThomasFront') {
      setAddBonus(true)
      setShowError(false)
      setShowBonusCode(false)
    } else {
      setShowError(true)
    }
  }

  return (
    <CartPageWrapper>
      <TextWrapper>
        <Container
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}>
          {cart.length ?
            <>
              <CartItems>
                <CartHeader>
                  <p>Shopping Cart</p>
                  <p>{cart.length} Items</p>
                </CartHeader>
              </CartItems>
              <OrderSummary>
                {cart.map((item, index) => <CartItem index={index} key={`${item.id}_${index}`} item={item} />)}
              </OrderSummary>
              <Total>
                <CostContainer>
                  <TotalName>Total Cost:</TotalName>
                  <TotalPrice>{addBonus ?
                    <>
                      <OldPrice>${totalPrice}</OldPrice>
                      <NewPrice>${parseInt(totalPrice) * 0.9}</NewPrice>
                    </>
                    :
                    <p>{totalPrice}</p>
                  }
                  </TotalPrice>
                </CostContainer>
                <ButtonsContainer>
                  <div>
                    <button onClick={() => dispatch(deleteAllCart(user?.uid as string))}>Delete all</button>
                    <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
                  </div>
                  {showBonusCode ?
                    <BonusWrapper>
                      <input type="text" value={bonusValue} onChange={e => setBonusValue(e.target.value)} />
                      {showError && <p>The code is invalid or empty</p>}
                      <button type='submit' onClick={handleBonusCode}>Add bonus code</button>
                    </BonusWrapper>
                    :
                    <BonusAdded>10% discount has been added!</BonusAdded>
                  }
                </ButtonsContainer>
                {showParagraf &&
                  <>
                    <OrderingText>Thanks for odering!</OrderingText>
                    <RedirectingInfo>You will soon be redirected to the home page.</RedirectingInfo>
                  </>}
              </Total>
            </>
            :
            <EmptyCartText>Your cart is empty</EmptyCartText>}
        </Container>
      </TextWrapper>
      <Wave />
    </CartPageWrapper>
  )
}

export default Cart
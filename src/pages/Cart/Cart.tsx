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
import { BonusAdded, BonusWrapper, ButtonsContainer, CartHeader, CartItems, CartPageWrapper, CheckoutButton, Container, CostContainer, DeleteAllBtn, EmptyCartText, NewPrice, OldPrice, OrderingText, OrderSummary, RedirectingInfo, Total, TotalName, TotalPrice } from './Cart.styles'



function Cart() {
  const cart = useSelector(cartSelector)
  const totalPrice = cart.reduce((prev, curr) => prev + (curr.price * curr.amount), 0).toFixed(2)
  const [showParagraf, setShowParagraf] = useState(false)
  const [addBonus, setAddBonus] = useState(false)
  const [error, setError] = useState('')
  const [bonusValue, setBonusValue] = useState('')
  const [showBonusCode, setShowBonusCode] = useState(true)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const amountInCart = cart.reduce((curr, acc) => acc.amount + curr ,0)

  const handleCheckout = () => {
    setShowParagraf(true)
    setTimeout(() => {
      dispatch(deleteAllCart(user?.uid as string))
      navigate('/')
    }, 3000)
  }

  const handleBonusCode = () => {
    if (bonusValue === 'Thomas10') {
      setAddBonus(true)
      setShowBonusCode(false)
      setError('')
    } else if (!bonusValue){
      setError('The field cannot be empty')
    } else {
      setError('There is no such discount code')
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
                  <p>{amountInCart} Items</p>
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
                      <NewPrice>${(parseInt(totalPrice) * 0.9).toFixed(2)}</NewPrice>
                    </>
                    :
                    <p>${totalPrice}</p>
                  }
                  </TotalPrice>
                </CostContainer>
                <ButtonsContainer>
                  <div>
                    <DeleteAllBtn onClick={() => dispatch(deleteAllCart(user?.uid as string))}>Delete all</DeleteAllBtn>
                    <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
                  </div>
                  {showBonusCode ?
                    <BonusWrapper>
                      <input 
                      type="text" 
                      placeholder='Code: Thomas10'
                      value={bonusValue} 
                      onChange={e => setBonusValue(e.target.value)} />
                      <p>{error}</p>
                      <button type='submit' onClick={handleBonusCode}>Add discount code</button>
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
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { CartItem } from '../../components/CartItem/CartItem'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Wave } from '../../components/Wave/Wave'
import { cartSelector, clearCart } from '../../store/slices/categoriesSlice'
import { ButtonsContainer, CartHeader, CartItems, CartPageWrapper, CheckoutButton, Container, CostContainer, EmptyCartText, OrderSummary, Total, TotalName, TotalPrice } from './Cart.styles'



function Cart() {
  const cart = useSelector(cartSelector)
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)
  const dispatch = useDispatch()

  return (
    <CartPageWrapper>
      <TextWrapper>
        <Container>
          {cart.length ?
            <>
              <CartItems>
                <CartHeader>
                  <p>Shopping Cart</p>
                  <p>{cart.length} Items</p>
                </CartHeader>
              </CartItems>
              <OrderSummary>
                {cart.map((item) => <CartItem item={item} />)}
              </OrderSummary>
              <Total>
                <CostContainer>
                  <TotalName>Total Cost:</TotalName>
                  <TotalPrice>${totalPrice}</TotalPrice>
                </CostContainer>
                <ButtonsContainer>
                  <button onClick={() => dispatch(clearCart())}>Delete all</button>
                  <CheckoutButton>Checkout</CheckoutButton>
                </ButtonsContainer>
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
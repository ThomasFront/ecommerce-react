import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../../components/CartItem/CartItem'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Wave } from '../../components/Wave/Wave'
import { cartSelector } from '../../store/slices/categoriesSlice'
import { CartHeader, CartItems, CartPageWrapper, Container, EmptyCartText, OrderSummary, Total, TotalName, TotalPrice } from './Cart.styles'



function Cart() {
  const cart = useSelector(cartSelector)
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0)


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
                <TotalName>Total Cost:</TotalName>
                <TotalPrice>${totalPrice}</TotalPrice>
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
import React from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Wave } from '../../components/Wave/Wave'
import { CartPageWrapper } from './Cart.styles'

function Cart() {
  return (
    <CartPageWrapper>
      <TextWrapper>
        Cart
      </TextWrapper>
      <Wave/>
    </CartPageWrapper>
  )
}

export default Cart
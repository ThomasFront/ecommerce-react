import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const addProduct = (cart: InitialTypes['cart'], id: number) => {
  let cartCopy = [...cart]
  const productInCartIndex = cartCopy.findIndex(product => product.id === id)
      if(productInCartIndex >= 0){
        cartCopy[productInCartIndex] = {
          ...cartCopy[productInCartIndex],
          count: cartCopy[productInCartIndex].count + 1
        }
      } else {
        cartCopy = [
          ...cartCopy,
          {
            id,
            count: 1
          }
        ]
      }
      return cartCopy
}

export interface InitialTypes {
  cart: Array<{
    id: number,
    count: number
  }>
}

const initialState: InitialTypes = {
  cart: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.cart = addProduct(state.cart, action.payload)
    },
    removeFromCart: (state, action: PayloadAction<{id: number, deleteAll: boolean}>) => {
      const productInCartIndex = state.cart.findIndex(({id}) => id === action.payload.id)
      if(state.cart[productInCartIndex].count > 1 && !action.payload.deleteAll){
        state.cart[productInCartIndex].count -= 1
      } else {
        state.cart.splice(productInCartIndex, 1)
      }
    },
    clearCart: (state) => {
      state.cart = []
    }
  },
})

export const { addToCart, removeFromCart } = userSlice.actions
export const cartSelector = (state: RootState) => state.user.cart
export default userSlice.reducer
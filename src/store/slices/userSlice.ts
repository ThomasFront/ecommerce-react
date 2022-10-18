import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const handleAddToCart = (cart: InitialTypes['cart'], id: number) => {
  const newCart = [...cart]
  const productInCartIndex = newCart.findIndex((product) => product.id === id)
  if(productInCartIndex === -1){
    newCart.push({
       id,
       count: 1
    })
  } else {
    newCart[productInCartIndex] = {
      ...newCart[productInCartIndex],
      count: newCart[productInCartIndex].count + 1
    }
  }
  return newCart
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
    overwriteCart : (state, action: PayloadAction<InitialTypes['cart']>) => {
      state.cart = action.payload
    }
  },
})

export const { overwriteCart } = userSlice.actions
export const cartSelector = (state: RootState) => state.user.cart
export default userSlice.reducer
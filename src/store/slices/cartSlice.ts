import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type ProductType = {
  id: number,
  price: number,
  shortBrand: string,
  description: string,
  brand: string,
  category: string,
  images: Array<string>
}

export interface InitialTypes {
  cart: Array<ProductType >
}

const initialState: InitialTypes = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductType>) => {
      state.cart.push(action.payload)
    },
    clearCart: (state) => { 
      state.cart = [] 
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    }
  },
})

export const { clearCart, deleteItemFromCart, addItemToCart } = cartSlice.actions
export const cartSelector = (state: RootState) => state.user.cart
export default cartSlice.reducer
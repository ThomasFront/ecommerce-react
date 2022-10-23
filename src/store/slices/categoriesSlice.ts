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
  isShow: boolean
  selectedBrand: string
  cart: Array<ProductType>
  showModal: boolean
}

const initialState: InitialTypes = {
  isShow: false,
  selectedBrand: '',
  cart: [],
  showModal: false
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleShow: (state) => {
      if (state.isShow === false) {
        state.isShow = true
      } else {
        state.isShow = false
      } 
    },
    changeBrand: (state, action: PayloadAction<string>) => {
      state.selectedBrand = action.payload
    },
    addItemToCart: (state, action: PayloadAction<ProductType>) => {
      state.cart.push(action.payload)
    },
    openModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
    clearCart: (state) => { 
      state.cart = [] 
    }
  },
})

export const { toggleShow, changeBrand, addItemToCart, openModal, clearCart } = categoriesSlice.actions
export const toggleShowSelector = (state: RootState) => state.categories.isShow
export const modalSelector = (state: RootState) => state.categories.showModal
export const brandSelector = (state: RootState) => state.categories.selectedBrand
export const cartSelector = (state: RootState) => state.categories.cart
export default categoriesSlice.reducer
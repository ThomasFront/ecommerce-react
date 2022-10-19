import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type ShoesType = Array<{
  id: number,
  price: number,
  category:string,
  brand: string,
  shortBrand: string,
  description: string,
  images: Array<string>
}>


export interface InitialTypes {
  allProducts: ShoesType
  isLoading: boolean
}

const initialState: InitialTypes = {
  allProducts: [],
  isLoading: true
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addAllProducts: (state, action: PayloadAction<ShoesType>) => {
      state.allProducts = action.payload
    },
    handleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})

export const { addAllProducts, handleLoading } = productsSlice.actions
export const productsSelector = (state: RootState) => state.products.allProducts
export const loadingSelector = (state: RootState) => state.products.isLoading
export default productsSlice.reducer
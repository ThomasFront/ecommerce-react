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
}

const initialState: InitialTypes = {
  allProducts: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addAllProducts: (state, action: PayloadAction<ShoesType>) => {
      state.allProducts = action.payload
    }
  },
})

export const { addAllProducts } = productsSlice.actions
export const productsSelector = (state: RootState) => state.products.allProducts
export default productsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


export interface InitialTypes {
  isShow: boolean
  selectedBrand: string
  showModal: boolean
}

const initialState: InitialTypes = {
  isShow: false,
  selectedBrand: '',
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
    openModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
  },
})

export const { toggleShow, changeBrand, openModal } = categoriesSlice.actions
export const toggleShowSelector = (state: RootState) => state.categories.isShow
export const modalSelector = (state: RootState) => state.categories.showModal
export const brandSelector = (state: RootState) => state.categories.selectedBrand
export default categoriesSlice.reducer
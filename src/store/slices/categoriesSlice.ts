import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface InitialTypes {
  isShow: boolean
}

const initialState: InitialTypes = {
  isShow: false,
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
  },
})

export const { toggleShow } = categoriesSlice.actions
export const toogleShowSelector = (state: RootState) => state.categories.isShow
export default categoriesSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type userInfoType = {
  email: string,
  name: string,
  uid: string,
  signUpDate: number
}

export interface InitialTypes {
  userInfo: userInfoType | null
}

const initialState: InitialTypes = {
  userInfo: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<userInfoType | null>) => {
      state.userInfo = action.payload
    }
  },
})

export const { addUserInfo } = userSlice.actions
export const userInfoSelector = (state: RootState) => state.user.userInfo
export default userSlice.reducer
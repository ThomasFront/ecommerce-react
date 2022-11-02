import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { ShoeType } from '../../pages/Home/Home'

type UpdateCartType = {
  userId: string
  cart: Array<ShoeTypeWithAmount>
  product: ShoeType
}

type DeleteFromCartType = {
  userId: string,
  cart: Array<ShoeTypeWithAmount>,
  shoeItem: ShoeTypeWithAmount
}

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({
    userId,
    cart,
    product
  }: UpdateCartType) => {
    const newCart = cart.map(item => ({
      id: item.id,
      size: item.size,
      amount: item.amount
    }))
    const itemToUpdateIndex = newCart.findIndex(item => item.id === product.id && item.size === product.size)
    if(itemToUpdateIndex >= 0){
      newCart[itemToUpdateIndex].amount += 1
    } else {
      newCart.push({
        id: product.id,
        size: product.size,
        amount: 1
      })
    }
    await updateDoc(doc(db, "users", userId), {
      cart: newCart
    })
    return product
  }
)

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (userId: string) => {
    const q = query(collection(db, "users"), where("uid", "==", userId));
    const docs = await getDocs(q);
    const userData = docs.docs[0].data() as {
      cart: Array<{
        id: number,
        size: number,
        amount: number
      }>
    }
    const refs = userData.cart.map(item => doc(db, "products", item.id.toString()))
    const products = await Promise.all(
      refs.map(async (ref, index: number) => {
        const productDoc = await getDoc(ref)
        const data = productDoc.data() as ShoeType
        return ({
          ...data,
          amount: userData.cart[index].amount,
          size: userData.cart[index].size
        }) as ShoeTypeWithAmount
      })
    )
    return products
  }
)

export const deleteFromCart = createAsyncThunk(
  'cart/deleteFromCart',
  async ({
    userId,
    cart,
    shoeItem
  }: DeleteFromCartType) => {
    const newCart = cart.map(item => ({
      id: item.id,
      size: item.size,
      amount: item.amount
    }))
    const itemToDeleteIndex = newCart.findIndex(item => item.id === shoeItem.id && item.size === shoeItem.size)
    if(newCart[itemToDeleteIndex].amount > 1){
      newCart[itemToDeleteIndex].amount -= 1
    } else {
      newCart.splice(itemToDeleteIndex, 1)
    }
    await updateDoc(doc(db, "users", userId), {
      cart: newCart
    })
    return shoeItem
  }
)

export const deleteAllCart = createAsyncThunk(
  'cart/deleteAllCart',
  async (userId: string) => {
    await updateDoc(doc(db, "users", userId), {
      cart: []
    })
  }
)

export type ShoeTypeWithAmount = ShoeType & {amount: number}

export interface InitialTypes {
  cart: Array<ShoeTypeWithAmount>
  loading: {
    replaceRandomNumber: boolean
    updateCart: boolean
    deleteFromCart: boolean
    deleteAllCart: boolean
  }
  errors: {
    replaceRandomNumber: null | string
    updateCart: null | string
    deleteFromCart: null | string
    deleteAllCart: null | string
  }
}

const initialState: InitialTypes = {
  cart: [],
  loading: {
    replaceRandomNumber: false,
    updateCart: false,
    deleteFromCart: false,
    deleteAllCart: false
  },
  errors: {
    replaceRandomNumber: null,
    updateCart: null,
    deleteFromCart: null,
    deleteAllCart: null
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => { 
      state.cart = [] 
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading.updateCart = false
        const itemToUpdateIndex = state.cart.findIndex(item => item.id === action.payload.id && item.size === action.payload.size)
        if(itemToUpdateIndex >= 0){
          state.cart[itemToUpdateIndex].amount += 1
        } else {
          state.cart.push({
            ...action.payload,
            amount: 1
          })
        }
      })
      .addCase(updateCart.pending, (state) => {
        state.errors.updateCart = null
        state.loading.updateCart = true
      })
      .addCase(updateCart.rejected, (state) => {
        state.loading.updateCart = false
        state.errors.updateCart = 'Error'
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading.updateCart = false
        state.cart = action.payload
      })
      .addCase(getCart.pending, (state) => {
        state.errors.updateCart = null
        state.loading.updateCart = true
      })
      .addCase(getCart.rejected, (state) => {
        state.loading.updateCart = false
        state.errors.updateCart = 'Error'
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.loading.deleteFromCart = false
        
        const itemToDeleteIndex = state.cart.findIndex(item => item.id === action.payload.id && item.size === action.payload.size)
        if(state.cart[itemToDeleteIndex].amount > 1){
          state.cart[itemToDeleteIndex].amount -= 1
        } else {
          state.cart.splice(itemToDeleteIndex, 1)
        }
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.errors.deleteFromCart = null
        state.loading.deleteFromCart = true
      })
      .addCase(deleteFromCart.rejected, (state) => {
        state.loading.deleteFromCart = false
        state.errors.deleteFromCart = 'Error'
      })
      .addCase(deleteAllCart.fulfilled, (state, action) => {
        state.loading.deleteAllCart = false
        state.cart = []
      })
      .addCase(deleteAllCart.pending, (state) => {
        state.errors.deleteAllCart = null
        state.loading.deleteAllCart = true
      })
      .addCase(deleteAllCart.rejected, (state) => {
        state.loading.deleteAllCart = false
        state.errors.deleteAllCart = 'Error'
      })
  }
})

export const { clearCart } = cartSlice.actions
export const cartSelector = (state: RootState) => state.cart.cart
export default cartSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { ShoeType } from '../../pages/Home/Home'

export type ProductType = {
  id: number,
  price: number,
  shortBrand: string,
  description: string,
  brand: string,
  category: string,
  images: Array<string>
}

type UpdateCartType = {
  userId: string
  cart: Array<ProductType>
  product: ProductType
}

type DeleteFromCartType = {
  userId: string,
  cart: Array<ProductType>,
  indexToDelete: number
}

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({
    userId,
    cart,
    product
  }: UpdateCartType) => {
    const newIds = [
      ...cart.map(item => item.id),
      product.id
    ]
    await updateDoc(doc(db, "users", userId), {
      cart: newIds
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
      cart: Array<number>
    }
    const refs = userData.cart.map(id => doc(db, "products", id.toString()))
    const products = await Promise.all(
      refs.map(async (ref) => {
        const productDoc = await getDoc(ref)
        return productDoc.data() as ProductType
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
    indexToDelete
  }: DeleteFromCartType) => {
    const newCart = [...cart]
    newCart.splice(indexToDelete, 1)
    const newIds = newCart.map(item => item.id)
    await updateDoc(doc(db, "users", userId), {
      cart: newIds
    })
    return newCart
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

export interface InitialTypes {
  cart: Array<ProductType>
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
        state.cart.push(action.payload)
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
        state.cart = action.payload
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
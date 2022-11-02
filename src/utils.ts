import { User } from "firebase/auth";
import { toast, ToastOptions } from "react-toastify";
import { ShoeType } from "./pages/Home/Home";
import {  deleteFromCart, ShoeTypeWithAmount, updateCart } from "./store/slices/cartSlice";

const toastOptions: ToastOptions = {
  position: "bottom-left",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

export const addProductToCart = async (
  product: ShoeType,
  user: User | null | undefined,
  dispatch: any,
  cart: Array<ShoeTypeWithAmount>,
) => {
  if (!user) {
    toast.error('You must log in to add a product', toastOptions);
  } else {
    dispatch(updateCart({
      userId: user.uid as string,
      cart,
      product
    }))
    toast.success('The product has been added to the cart', toastOptions)
  }
}

export const deleteProductFromCart = async (
  user: User | null | undefined,
  cart: Array<ShoeTypeWithAmount>,
  dispatch: any,
  shoeItem: ShoeTypeWithAmount
) => {
  dispatch(deleteFromCart({
    userId: user?.uid as string,
    cart,
    shoeItem
  }))
  toast.info('The product has been removed from the cart', toastOptions)
}

export const categories = [
  {
    value: '',
    label: 'All',
    id: 1
  },
  {
    value: 'woman',
    label: 'Women',
    id: 2
  },
  {
    value: 'man',
    label: 'Men',
    id: 3
  },
  {
    value: 'kids',
    label: 'Kids',
    id: 4
  },
]

export const brands = [
  {
    value: '',
    label: 'All',
    id: 1
  },
  {
    value: 'Adidas',
    label: 'Adidas',
    id: 2
  },
  {
    value: 'Nike',
    label: 'Nike',
    id: 3
  },
  {
    value: 'New Balance',
    label: 'New Balance',
    id: 4
  },
  {
    value: 'Vans',
    label: 'Vans',
    id: 5
  },
]
import { User } from "firebase/auth";
import { toast, ToastOptions } from "react-toastify";
import { ShoeType } from "./pages/Home/Home";
import { ProductType, updateCart } from "./store/slices/cartSlice";

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
  cart: Array<ProductType>
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

export const categories = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'woman',
    label: 'Women',
  },
  {
    value: 'man',
    label: 'Men',
  },
  {
    value: 'kids',
    label: 'Kids',
  },
]

export const brands = [
  {
    value: '',
    label: 'All'
  },
  {
    value: 'Adidas',
    label: 'Adidas'
  },
  {
    value: 'Nike',
    label: 'Nike'
  },
  {
    value: 'New Balance',
    label: 'New Balance'
  },
  {
    value: 'Vans',
    label: 'Vans'
  },
]
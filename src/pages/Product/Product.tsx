import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { shoes } from '../../data/shoesdata'
import { auth, db } from '../../firebase/firebase'
import { AboutProduct, BigImage, Container, Images, SmallImages, SpaceContainer } from './Product.styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/slices/categoriesSlice'

type ProductType = Array<{
  id: number,
  price: number,
  shortBrand: string,
  description: string,
  brand: string,
  category: string,
  images: Array<string>
}>

function Product() {
  const { productId } = useParams()
  const product = shoes.filter((shoe) => shoe.id === parseInt(productId as string))
  const { brand, category, description, id, images, shortBrand, price } = product[0]
  const [activeImage, setActiveImage] = useState(images[0])
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch()

  const handleImage = (clickedImage: string) => {
    setActiveImage(clickedImage)
  }

  const addProductToCart = async (product: ProductType) => {
    if (!user) {
      toast.error('You must log in to add a product', {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch(addItemToCart(product[0]))
      toast.success('The product has been added to the cart', {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return (
    <TextWrapper>
      <Container>
        <Images>
          <BigImage src={activeImage} alt="default image" />
          <SmallImages>
            <img src={images[0]} alt="default mini image" onClick={() => handleImage(images[0])} />
            <img src={images[1]} alt="example mini image 1" onClick={() => handleImage(images[1])} />
            <img src={images[2]} alt="example mini image 2" onClick={() => handleImage(images[2])} />
            <img src={images[3]} alt="example mini image 3" onClick={() => handleImage(images[3])} />
            <img src={images[4]} alt="example mini image 4" onClick={() => handleImage(images[4])} />
          </SmallImages>
        </Images>
        <AboutProduct>
          <h1>{brand}</h1>
          <h2>{description}</h2>
          <SpaceContainer>
            <h3>${price}</h3>
            <button onClick={() => addProductToCart(product)}>Add to cart</button>
          </SpaceContainer>
        </AboutProduct>
      </Container>
      <ToastContainer />
    </TextWrapper>
  )
}
export default Product
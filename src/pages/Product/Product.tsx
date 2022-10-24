import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { auth, db } from '../../firebase/firebase'
import { AboutProduct, BigImage, Container, Images, ProductPageWrapper, ShoeImage, Sizes, SmallImages, SpaceContainer } from './Product.styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ShoeType } from '../Home/Home'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { MutatingDots } from 'react-loader-spinner'
import { Wave } from '../../components/Wave/Wave'
import { Size } from '../../components/Size/Size'
import { addItemToCart } from '../../store/slices/cartSlice'


function Product() {
  const { productId } = useParams()
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const [product, setProduct] = useState<ShoeType | null>(null)
  const [checkedSize, setCheckedSize] = useState<number>(36)

  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]

  const handleImage = (clickedImage: string) => {
    setActiveImage(clickedImage)
  }

  const getProduct = async () => {
    const q = query(collection(db, "products"), where("id", "==", parseInt(productId as string)));
    const docs = await getDocs(q);
    const tempProduct = docs.docs[0].data() as ShoeType
    setProduct(tempProduct)
    setActiveImage(tempProduct.images[0])
    setLoading(false)
  }

  useEffect(() => {
    getProduct()
  }, [])

  const addProductToCart = async (product: ShoeType) => {
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
      dispatch(addItemToCart(product))
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
    <ProductPageWrapper>
      <TextWrapper>
        <Container>
          <Images>
            {loading ?
              <MutatingDots
                color='#ef5454'
                secondaryColor='#ef5454'
              />
              :
              <>
                {activeImage && <BigImage src={activeImage} alt="default image" />}
                <SmallImages>
                  <ShoeImage
                    src={product?.images[0]}
                    alt="default mini image"
                    onClick={() => handleImage(product?.images[0] as string)}
                    isHighlighted={activeImage === product?.images[0]}
                  />
                  <ShoeImage
                    src={product?.images[1]}
                    alt="example mini image 1"
                    onClick={() => handleImage(product?.images[1] as string)}
                    isHighlighted={activeImage === product?.images[1]}
                  />
                  <ShoeImage
                    src={product?.images[2]}
                    alt="example mini image 2"
                    onClick={() => handleImage(product?.images[2] as string)}
                    isHighlighted={activeImage === product?.images[2]}
                  />
                  <ShoeImage
                    src={product?.images[3]}
                    alt="example mini image 3"
                    onClick={() => handleImage(product?.images[3] as string)}
                    isHighlighted={activeImage === product?.images[3]}
                  />
                  <ShoeImage
                    src={product?.images[4]}
                    alt="example mini image 4"
                    onClick={() => handleImage(product?.images[4] as string)}
                    isHighlighted={activeImage === product?.images[4]}
                  />
                </SmallImages>
              </>
            }
          </Images>
          <AboutProduct>
            <h1>{product?.brand}</h1>
            <h2>{product?.description}</h2>
            <Sizes>
              {sizes.map((size) => <Size key={size} size={size} setCheckedSize={setCheckedSize} checkedSize={checkedSize}/>)}
            </Sizes>
            <SpaceContainer>
              <h3>${product?.price}</h3>
              <button onClick={() => product && addProductToCart({...product, size: checkedSize})}>Add to cart</button>
            </SpaceContainer>
          </AboutProduct>
        </Container>
        <ToastContainer />
      </TextWrapper>
      <Wave />
    </ProductPageWrapper>
  )
}
export default Product
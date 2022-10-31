import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { auth, db } from '../../firebase/firebase'
import { AboutProduct, BigImage, Container, Images, ProductPageWrapper, ShoeImage, Sizes, SmallImages, SpaceContainer } from './Product.styles'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ShoeType } from '../Home/Home'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { MutatingDots } from 'react-loader-spinner'
import { Wave } from '../../components/Wave/Wave'
import { Size } from '../../components/Size/Size'
import { cartSelector } from '../../store/slices/cartSlice'
import { motion } from 'framer-motion'
import { addProductToCart } from '../../utils'


function Product() {
  const { productId } = useParams()
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch<any>()
  const [product, setProduct] = useState<ShoeType | null>(null)
  const [checkedSize, setCheckedSize] = useState<number>(36)
  const cart = useSelector(cartSelector)

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
                {activeImage &&
                  <BigImage
                    src={activeImage}
                    alt="default image"
                    as={motion.img}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />}
                <SmallImages
                  as={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {product?.images.map((image, index) => (
                    <ShoeImage 
                      src={image}
                      alt={index === 0 ? 'default mini image' : `example mini image ${index}`}
                      onClick={() => handleImage(image)}
                      isHighlighted={activeImage === image}
                    />
                  ))}
                </SmallImages>
              </>
            }
          </Images>
          <AboutProduct>
            <h1>{product?.brand}</h1>
            <h2>{product?.description}</h2>
            <Sizes>
              {sizes.map((size) => <Size key={size} size={size} setCheckedSize={setCheckedSize} checkedSize={checkedSize} />)}
            </Sizes>
            <SpaceContainer>
              <h3>${product?.price}</h3>
              <button onClick={() => product && addProductToCart({ ...product, size: checkedSize }, user, dispatch, cart)}>Add to cart</button>
            </SpaceContainer>
          </AboutProduct>
        </Container>
      </TextWrapper>
      <Wave />
    </ProductPageWrapper>
  )
}
export default Product
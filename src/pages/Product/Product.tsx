import React, { useState } from 'react'
import { useParams } from 'react-router'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { shoes } from '../../data/shoesdata'
import { AboutProduct, BigImage, Container, Images, SmallImages, SpaceContainer } from './Product.styles'

function Product() {
  const { productId } = useParams()
  const product = shoes.filter((shoe) => shoe.id === parseInt(productId as string))
  const { brand, category, description, id, images, shortBrand, price } = product[0]
  const [activeImage, setActiveImage] = useState(images[0])

  const handleImage = (clickedImage: string) => {
    setActiveImage(clickedImage)
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
            <button>Add to cart</button>
          </SpaceContainer>
        </AboutProduct>
      </Container>
    </TextWrapper>
  )
}
export default Product
import React from 'react'
import { useParams } from 'react-router'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { shoes } from '../../data/shoesdata'
import { AboutProduct, BigImage, Container, Images, SmallImages, SpaceContainer } from './Product.styles'

function Product() {
  const { productId } = useParams()
  const product = shoes.filter((shoe) => shoe.id === parseInt(productId as string))
  const { brand, category, description, id, images, shortBrand, price } = product[0]
  return (
    <TextWrapper>
      <Container>
        <Images>
          <BigImage src={images[0]} />
          <SmallImages>
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
            <img src={images[2]} alt="" />
            <img src={images[3]} alt="" />
            <img src={images[4]} alt="" />
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
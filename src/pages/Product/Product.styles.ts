import styled, { css } from "styled-components";

type ShoeImageProps = {
  isHighlighted?: boolean
}

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
min-height: 500px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`

export const BigImage = styled.img`
margin-top: 100px;
object-fit: cover;
width: 100%;
max-width: 500px;
height: 100%;
border-radius: 6px;
box-shadow: 0 0 15px ${({theme}) => theme.colors.grayColor};

@media (min-width: 992px) {
    height: 400px;
  }
`

export const SmallImages = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
  height: 20%;
`

export const ShoeImage = styled.img<ShoeImageProps>`
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin: 0 5px;
    border-radius: 6px;
    cursor: pointer;
    ${({isHighlighted}) => isHighlighted && css`
      border: 1px solid black;
    `}

    @media (min-width: 992px) {
      margin-top: 40px;
    width: 90px;
    height: 90px;
  }
`

export const Images = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 50%;

@media (min-width: 992px) {
    width: 60%;
  }
`

export const SpaceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  h3 {
    
  }

  button {
    padding: 15px 30px;
    border-radius: 6px;
    font-weight: bold;
    border: none;
    background-color: ${({theme}) => theme.colors.primaryColor};
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: rgb(245, 59, 59);
    }
  }
`

export const AboutProduct = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 40px auto 90px;
max-width: 500px;
width: 100%;
text-align: left;

@media (min-width: 700px){
  padding-bottom: 50px;
}

@media (min-width: 992px){
  padding-bottom: 0px;
}

h1 {
  text-transform: uppercase;
  font-size: 22px;
  border-bottom: 1px solid black;
}

h2 {
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 18px;
}

@media (min-width: 992px) {
  margin-left: -20px;
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 22px;
  }
}
`

export const ProductPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

export const Sizes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 992px){
    margin-left: 25px;
  }

  @media (min-width: 1050px){
    margin-left: 0;
  }
`
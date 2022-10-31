import styled, { css } from "styled-components";
import { FaShoppingCart } from 'react-icons/fa'

type CartContainerProps = {
  isInCart?: boolean
}

export const ShoeCard = styled.div`
position: relative;
overflow: hidden;
border-radius: 10px;
width: 250px;
margin: 10px;
height: 450px;
background-color: #222831;
box-shadow: 0 0 5px gray;
cursor: pointer;
transition: transform 0.2s;

&:hover {
  transform: translateY(-10px);

}

@media (min-width: 1200px){
  margin: 12px;
}
`

export const ShoeImage = styled.img`
object-fit: cover;
  width: 100%;
  height: 80%;
`

export const ShoeDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 8px;
  color: white;
  
`

export const Price = styled.p`
  color: gold;
`
export const Desc = styled.p`
  font-weight: lighter;
  padding: 4px 0;
  color: #eeeeee;
  font-size: 12px;
`

export const CartContainer = styled.div<CartContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  top: 0;
  right: 10px;
  background-color: #222831;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({isInCart}) => isInCart && css`
    background-color: #F05454;
  `}

  &:hover {
    background-color: gray;
  }
`

export const CartIcon = styled(FaShoppingCart)`
  color: white;
  font-size: 30px;
  pointer-events: none;
`
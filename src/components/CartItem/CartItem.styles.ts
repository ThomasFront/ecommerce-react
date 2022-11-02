import styled from "styled-components";
import { BsTrashFill } from 'react-icons/bs'

export const ItemContainer = styled.div`
  position: relative;
  border-bottom: 1px solid ${({theme}) => theme.colors.grayColor};
`

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
  }

  @media (min-width: 768px){
    flex-direction: row;
  }
`

export const ProductInformation = styled.div`
@media (min-width: 768px){
    width: 33%;
  }
`

export const PriceDetails = styled.div`

p{
  margin: 15px 0;
  font-weight: bold;
  text-align: left;
}

@media (min-width: 768px){
  display: none;
}
`

export const BrandName = styled.p`
  margin-bottom: 10px;

  @media (min-width: 768px){
    font-size: 24px;
  }
`

export const Description = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`

export const PriceDesktop = styled.p`
  display: none;
  font-weight: bold;
  
  @media (min-width: 768px){
    display: block;
    width: 33%;
  }
`

export const DeleteIcon = styled(BsTrashFill)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;

  transition: transform 0.3s, color 0.3s;
  &:hover {
    transform: scale(1.1);
    color: ${({theme}) => theme.colors.grayColor};
  }
  @media (min-width: 768px){
    font-size: 24px;
  }
`

export const ShoeSize = styled.p`
  font-size: 12px;

  @media (max-width: 767px){
    margin-bottom: 20px;
  }
`

export const ImgWrapper = styled.div`
@media (min-width: 768px){
    width: 33%;
  }
`
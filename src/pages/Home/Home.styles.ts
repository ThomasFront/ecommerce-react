import styled, { css } from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

type ButtonProps = {
  isActive?: boolean
  isHighlighted?: boolean
}

type ArrowIconProps = {
  showArrowIcon?: boolean
}

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CategoryTitle = styled.h1`
  text-align: center;
  font-size: 24px;
`

export const BrandTitle = styled.h1`
  display: none;
  text-align: center;
  font-size: 24px;

  @media (min-width: 768px) {
    display: block;
  }
`

export const Brands = styled.div`
display: none;
justify-content: center;
align-items: center;

@media (min-width: 768px) {
  display: flex;
}
`



export const ShoesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const Category = styled.button<ButtonProps>`
  margin: 10px 5px 20px;
  background-color: #222831;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  ${({ isActive }) => isActive && css`
  transform: scale(1.1);
    background-color: #F05454;
  `}

  &:hover {
    transform: scale(1.1);
    background-color: #F05454;
  }

  @media (min-width: 576px){
    padding: 8px 16px;
  }

  @media (min-width: 850px){
    padding: 10px 20px;
  }

  @media (min-width: 1120px){
    padding: 12px 24px;
  }
`

export const Brand = styled.button<ButtonProps>`
  margin: 10px 5px 0;
  background-color: #222831;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  ${({ isHighlighted }) => isHighlighted && css`
  transform: scale(1.1);
    background-color: #F05454;
  `}

  &:hover {
    transform: scale(1.1);
    background-color: #F05454;
  }

  @media (min-width: 576px){
    padding: 8px 16px;
  }

  @media (min-width: 850px){
    padding: 10px 20px;
  }

  @media (min-width: 1120px){
    padding: 12px 24px;
  }
`

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  select {
    margin-top: 10px;
  }
`
export const HomePageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

export const ArrowIcon = styled(BsFillArrowUpCircleFill)<ArrowIconProps>`
    position: fixed;
    bottom: -50px;
    right: 20px;
    font-size: 25px;
    cursor: pointer;
    transition: bottom 0.3s, transform 0.3s;
    ${({showArrowIcon}) => showArrowIcon && css`
      bottom: 20px;
    `}

    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 768px){
    font-size: 40px;
    }

    @media (min-width: 1024px){
    font-size: 45px;
    }
`
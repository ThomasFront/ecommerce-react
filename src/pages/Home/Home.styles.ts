import styled, { css } from "styled-components";

type CategoryProps = {
  isActive?: boolean
}

export const Categories = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const ShoesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const Category = styled.button<CategoryProps>`
  margin: 40px 5px 0;
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
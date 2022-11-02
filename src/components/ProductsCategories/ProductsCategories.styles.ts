import styled, { css } from "styled-components";

type CategoryProps =  {
  isHighlighted?: boolean
}

type CategoriesListProps = {
  showCategories?: boolean
}

export const CategoriesList = styled.aside<CategoriesListProps>`
position: fixed;
margin-top: -20px;
margin-bottom: 15px;
transform: translateX(-105%);
padding: 20px 0;
width: 100%;
background-color: ${({theme}) => theme.colors.secondaryColor};
z-index: 100;
opacity: 0;
transition: transform 0.3s, opacity 0.3s;


${({showCategories}) => showCategories && css`
  transform: translate(0);
  opacity: 1;
`}

@media (min-width: 768px){
  display: none;
}
`

export const CategoryBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const CategoryName = styled.h1`
color: ${({theme}) => theme.colors.primaryColor};
border-bottom: 2px solid ${({theme}) => theme.colors.lightGray};
font-size: 16px;
margin-top: 0.5em;
margin-bottom: 0.5em;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 20px;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const Category = styled.h2<CategoryProps>`
text-align: center;
margin-bottom: 10px;
padding: 0.2em;
font-size: 14px;
color: rgb(201, 201, 199);
cursor: pointer;
transition: transform 0.2s, color 0.2s;

${({ isHighlighted }) => isHighlighted && css`
  color: #F05454;
`}

&:hover {
  transform: scale(1.15);
  color: white;
}

@media (min-width: 576px) {
  font-size: 18px;
}

`
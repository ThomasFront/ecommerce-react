import styled from "styled-components";

export const CategoriesList = styled.aside`
position: fixed;
margin-top: -20px;
margin-bottom: 15px;
padding: 20px 0;
width: 100%;
background-color: #222831;
z-index: 100;
`

export const CategoryBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const CategoryName = styled.h1`
color: #F05454;
border-bottom: 2px solid gray;
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

export const Category = styled.h2`
text-align: center;
width: 100%;
margin-bottom: 0.2em;
padding: 0.2em;
font-size: 14px;
color: rgb(201, 201, 199);
cursor: pointer;
transition: transform 0.2s, color 0.2s;

&:hover {
  transform: scale(1.15);
  color: white;
}

@media (min-width: 576px) {
  font-size: 18px;
}

`
import styled from "styled-components";

export const CategoriesList = styled.aside`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
margin-top: -20px;
height: 93.8vh;
padding-top: 20px;
width: 100px;
  background-color: #222831;

  @media (min-width: 576px){
    width: 200px;
  }
`

export const CategoryBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  background-color: #222831;
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

export const Category = styled.h2`
text-align: center;
width: 100%;
margin-bottom: 0.2em;
padding: 0.2em;
font-size: 14px;
cursor: pointer;

@media (min-width: 576px) {
  font-size: 18px;
}

`
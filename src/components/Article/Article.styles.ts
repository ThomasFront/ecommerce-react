import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1;
  margin: 10px;
  color: #ffffff;
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  border-radius: 6px;
  box-shadow: 0 0 10px ${({theme}) => theme.colors.grayColor};;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 600px){
    width: 40%;
  }
`

export const ImageContainer = styled.div`
height: 150px;

img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
`

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.secondaryColor};
  padding: 10px;
  min-height: 150px;

  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    font-weight: 300;
  }
  @media (min-width: 350px){
    min-height: 60px;
  }

  @media (min-width: 500px){
    min-height: 100px;
  }

  @media (min-width: 600px){
    min-height: 170px;
  }

  @media (min-width: 768px){
    min-height: 150px;
  }

  @media (min-width: 1024px){
    min-height: 120px;
  }
`

export const ShowMoreText = styled(Link)`
  color: ${({theme}) => theme.colors.primaryColor};
  text-decoration: none;
  margin-left: 5px;
  font-weight: bold;
`
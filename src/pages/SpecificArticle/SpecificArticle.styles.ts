import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
`

export const Container = styled.div`
  
  h2 {
    margin: 10px 0 40px;
    font-size: 28px;
    text-align: center;
  }

  p {
    font-size: 20px;
    line-height: 30px;
  }
`

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;

img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 0 10px ${({theme}) => theme.colors.grayColor};
    max-width: 800px;
  }
`

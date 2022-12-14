import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const RegisterText = styled.p`
font-size: 10px;
padding-top: 20px;

  @media (min-width: 576px) {
   font-size: 20px;
  }
`

export const LogInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 350px;
  max-width: 700px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 10px ${({theme}) => theme.colors.grayColor};
  background-color: ${({theme}) => theme.colors.whiteColor};

p {
  color: black;
  margin: 10px 0;
}

  img {
    display: none;

    @media (min-width: 576px){
      display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 75px;
    height: 75px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 576px) {
   height: 450px;
  }

  input {
    padding: 10px 20px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border: 1px solid black;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0 0 10px ${({theme}) => theme.colors.grayColor};

    &:focus {
      outline: transparent;
    }

    @media (min-width: 576px) {
   font-size: 18px;
  }
  }
`

export const LoginButtons = styled.button`
    padding: 4px 8px;
    border-radius: 6px;
    width: 100px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({theme}) => theme.colors.primaryColor};
    color: black;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: rgb(245, 59, 59);
    }

    @media (min-width: 576px) {
      width: 160px;
      padding: 10px 20px;
  }
  `
  export const RegisterButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.colors.primaryColor};
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: red;
    }

    @media (min-width: 576px) {
      font-size: 20px;
    }
  `

  export const ErrorMsg = styled.p`
    color: red;
    text-align: center;
    font-size: 10px;
  
  @media (min-width: 576px) {
    font-size: 12px;
  }
  `

export const LoginPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

export const ContainerTestAccountInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0 2px;
  border-radius: 6px;
  background-color: black;

  p{
    color: white;
    margin: 2px 4px;
    font-size: 10px;
    text-align: center;

    @media (min-width: 576px){
      font-size: 12px;
    }

    @media (min-width: 768px){
      font-size: 15px;
    }
  }
`
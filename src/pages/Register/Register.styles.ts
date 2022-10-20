import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const ErrorMsg = styled.p`
  font-size: 10px;
  border-bottom: 1px solid #F05454;
  color: black;
  
  @media (min-width: 576px) {
    font-size: 12px;
  }
  `

  export const RegisteredText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;

    button {
      margin-top: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    width: 100px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    background-color: #F05454;
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
    }
  `

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 350px;
  max-width: 700px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  background-color: white;

  img {
    display: none;

    @media (min-width: 576px){
    display: block;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    width: 100px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    background-color: #F05454;
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
  }

  input {
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px gray;
    border: 1px solid black;
    color: white;
    font-family: 'Montserrat', sans-serif;

    &:focus {
      outline: transparent;
    }

    @media (min-width: 576px) {
   font-size: 20px;
  }
  }
  
  @media (min-width: 576px) {
      height: 400px;
    }
  `
  export const RegisterPageWrapper = styled.div`
    position: relative;
    min-height: 100vh;
  `
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`

export const ErrorMsg = styled.p`
  color: crimson;
  text-align: center;
  font-size: 8px;
  
  @media (min-width: 576px) {
    font-size: 10px;
  }
  `

  export const RegisteredText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;

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
  padding: 20px;
  max-width: 700px;
  position: relative;
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
    margin: 5px 0;
    padding: 6px 12px;
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
  `
  export const RegisterPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`
export const RegisterText = styled.p`
  margin-bottom: 7px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    padding-top: 20px;
    font-size: 20px;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  font-size: 10px;

  p{
    margin-right: 10px;
  }

  input {
    padding: 2px;
    box-shadow: none;
  }
`
import styled, { css } from "styled-components";

type DeleteModalProps = {
  showModal?: boolean
}

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0 5px;
  padding: 20px;
  max-width: 700px;
  min-width: 250px;
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;

  p{
    text-align: center;

    span {
      font-weight: bold;
    }

    span:nth-child(1) {
      font-size: 16px;

      @media (min-width: 576px){
        font-size: 20px;
      }
    }
    
    @media (min-width: 576px) {
      font-size: 20px;
    }
  }
`

export const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 576px){
        font-size: 20px;
  }

  p:first-child {
    margin: 10px 0;
    font-size: 20px;
  }
`

export const DeleteAccountInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f05454;
    padding: 5px 10px;
    border: none;
    margin-bottom: 5px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: red;
    }

    @media (min-width: 576px){
      padding: 10px 20px;    
    }
  }
`

export const DeleteModal = styled.div<DeleteModalProps>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateX(-105%);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;

  ${({showModal}) => showModal && css`
    transform: translateX(0);
    opacity: 1;
  `}
`

export const ModalWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
min-width: 250px;
height: 300px;
border-radius: 10px;

@media (min-width: 576px){
  justify-content: space-evenly;
  width: 500px;
 }

p{
  text-align: center;

  @media (min-width: 576px){
      font-size: 22px;
    }
}
`

export const ButtonsWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
  margin-top: 40px;

  button{
    padding: 5px 10px;
    margin: 0 40px;
    background-color: #222831;
    color: white;
    border: none;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: gray;
      color: black;
    }

    @media (min-width: 576px){
      font-size: 18px;
      padding: 7px 14px;
    }
  }
`
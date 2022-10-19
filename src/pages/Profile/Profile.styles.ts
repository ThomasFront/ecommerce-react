import styled from "styled-components";

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
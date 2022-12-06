import styled from "styled-components";

export const CartPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

export const Container = styled.div`
  min-height: 80vh;
  margin-bottom: 40px;
`

export const CartItems = styled.div`
  background-color: ${({theme}) => theme.colors.whiteColor};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

export const CartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const OrderSummary = styled.div`
  padding: 20px;
  background-color: #f5f5f6;
`

export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${({theme}) => theme.colors.whiteColor};
  padding: 50px 25px;
`

export const TotalName = styled.p`

  @media (min-width: 768px){
    font-size: 22px;
  }
`

export const TotalPrice = styled.p`
  font-weight: bold;
  font-size: 20px;

  @media (min-width: 768px){
    font-size: 28px;
  }
`

export const EmptyCartText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  height: 80vh;
  font-size: 26px;
`

export const CostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px){
      margin-top: 40px;
    }

  button{
    margin: 0 20px;
    padding: 1px 2px;
    font-size: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      transform: scale(1.05);
    }

    @media (min-width: 320px){
      padding: 2px 4px;
    }

    @media (min-width: 370px){
      font-size: 16px;
      padding: 5px 10px;
    }

    @media (min-width: 768px){
      font-size: 18px;
      padding: 7px 14px;
    }
  }
`

export const CheckoutButton = styled.button`
  background-color: ${({theme}) => theme.colors.primaryColor};
  transition: background-color 0.3s;
  &:hover {
      background-color: rgb(245, 59, 59);
    }
`

export const OrderingText = styled.p`
  margin-top: 20px;
  color: green;
`

export const RedirectingInfo = styled.p`
  text-align: center;
  font-size: 10px;

  @media (min-width: 768px){
    font-size: 12px;
  }
`


export const BonusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p{
    color: crimson;
    font-size: 12px;
    text-align: center;
  }

  input {
    border-radius: 6px;
    border: 1px solid gray;
    padding: 2px 4px;
  }

  button {
    margin: 5px auto 0;
    font-size: 12px;
    background-color: white;
    color: black;
    font-family: 'Montserrat', sans-serif;
  }
`

export const BonusAdded = styled.p`
  margin-top: 20px;
  color: green;
  text-align: center;
`

export const OldPrice = styled.p`
  text-decoration: line-through;
  color: ${({theme}) => theme.colors.grayColor};
  font-size: 14px;
`

export const NewPrice = styled.p`
  color: green;
`

export const DeleteAllBtn = styled.button`
  background-color: ${({theme}) => theme.colors.grayColor};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.lightGrayColor};
  }
`
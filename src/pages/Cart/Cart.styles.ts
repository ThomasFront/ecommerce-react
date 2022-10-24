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
  background-color: #fff;
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
  background-color: #ffffff;
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

  @media (min-width: 768px){
      margin-top: 40px;
    }

  button{
    margin: 0 20px;
    padding: 5px 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      transform: scale(1.05);
    }

    @media (min-width: 768px){
      font-size: 18px;
      padding: 9px 18px;
    }
  }
`

export const CheckoutButton = styled.button`
  background-color: #f05454;
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
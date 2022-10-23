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
  justify-content: space-between;
  align-items: center;
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
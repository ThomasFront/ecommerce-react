import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 50px;
  border-top: 1px solid #dddddd;
  background-color: #f05454;
`

export const TextContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1400px;

  a {
    text-align: center;
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-size: 7px;

    @media(min-width: 576px){
      font-size: 10px;
      margin: 0 16px;
      padding: 5px;
    }
  }
`
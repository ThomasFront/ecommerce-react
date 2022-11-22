import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
  min-height: 100vh;

  p {
    margin: 10px 0;
    padding: 10px;
    text-align: center;
  }
`

export const LinkItem = styled(Link)`
    background-color: ${({theme}) => theme.colors.primaryColor};
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    text-decoration: none;
    color: black;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    
    &:hover {
      background-color: #fe5d5d;
      transform: scale(1.02);
    }
`
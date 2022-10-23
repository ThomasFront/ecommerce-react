import styled, { css } from "styled-components";

type SizeNumberProps = {
  checked?: boolean
}

export const SizeNumber = styled.p<SizeNumberProps>`
  margin: 8px 4px;
  padding: 5px;
  font-weight: bold;
  text-align: center;
  width: 45%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  ${({checked}) => checked && css`
    background-color: gray;
    transform: scale(1.02);
  `}

  &:hover {
    background-color: gray;
    transform: scale(1.02);
  }
`
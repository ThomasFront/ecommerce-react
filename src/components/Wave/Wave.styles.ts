import styled from "styled-components";

export const Waves = styled.img`
display: none;

@media (min-width: 576px){
  z-index: -1;
  position: absolute;
  bottom: 0;
  display: block;
  margin-bottom: -5px;
}
`
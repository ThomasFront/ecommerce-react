import styled from "styled-components";
import { GrArticle } from 'react-icons/gr'
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  min-height: 100vh;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    text-transform: uppercase;
    font-size: 40px;
    color: ${({theme}) => theme.colors.primaryColor};

    @media (min-width: 768px){
      font-size: 50px;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px){
      font-size: 25px;
    }
  }
`

export const ArticleIcon = styled(GrArticle)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  transform: rotate(25deg);
  opacity: 0.2;

  @media (min-width: 375px){
    font-size: 30px;
  }

  @media (min-width: 768px){
    top: 20px;
    right: 20px;
    font-size: 60px;
  }
`

export const ArticlesWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 40px auto;
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 0 5px ${({theme}) => theme.colors.grayColor};

  @media (min-width: 600px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (min-width: 768px){
    padding: 60px;
  }
`
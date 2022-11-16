import React from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { ArticleIcon, ArticlesWrapper, TitleContainer, Wrapper } from './Blog.styles'

function Blog() {
  return (
    <Wrapper>
      <TextWrapper>
        <TitleContainer>
          <h2>Blog</h2>
          <p>Check out our latest articles!</p>
        </TitleContainer>
        <ArticlesWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}>
          <ArticleIcon />
          d
        </ArticlesWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default Blog
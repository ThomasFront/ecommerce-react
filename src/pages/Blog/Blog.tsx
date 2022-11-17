import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { ArticleIcon, ArticlesWrapper, TitleContainer, Wrapper } from './Blog.styles'
import Article from '../../components/Article/Article';
import { ArticlesType } from '../../types/strapi';

function Blog() {
  const [articles, setArticles] = useState<ArticlesType['data']>([])

  const getArticles = async () => {
    const response = await axios.get<ArticlesType>('http://localhost:1337/api/articles?populate=*')
    setArticles(response.data.data)
  }

  useEffect(() => {
    getArticles()
  }, [])

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
          {articles.map(article => <Article article={article.attributes} id={article.id} key={article.id} />)}
        </ArticlesWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default Blog
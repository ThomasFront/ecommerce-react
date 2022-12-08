import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { ArticleIcon, ArticlesWrapper, TitleContainer, Wrapper } from './Blog.styles'
import { ArticlesType } from '../../types/strapi';
import Article from '../../components/Article/Article';
import { MutatingDots } from 'react-loader-spinner';

function Blog() {
  const [articles, setArticles] = useState<ArticlesType['data']>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getArticles = async () => {
    try {
      setLoading(true)
      const response = await axios.get<ArticlesType>(`${import.meta.env.VITE_STRAPI_URL}/api/articles?populate=*`)
      setArticles(response.data.data)
      setLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
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
          animate={{ scale: 1 }}
        >
          {error && <p>Proszę odśwież stronę... Pobieranie danych nie powiodło się.</p>}
          <ArticleIcon />
          {loading ?
            <MutatingDots
              color='#ef5454'
              secondaryColor='#ef5454'
            />
            :
            <>
              {articles.map(article => <Article article={article.attributes} id={article.id} key={article.id} />)}
            </>
          }
        </ArticlesWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default Blog
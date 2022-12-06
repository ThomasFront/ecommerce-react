import axios from 'axios'
import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { useParams } from 'react-router'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { StrapiArticleType } from '../../types/strapi'
import { Container, ImageContainer, LoadingContainer, Wrapper } from './SpecificArticle.styles'

function SpecificArticle() {
  const { articleId } = useParams()
  const [article, setArticle] = useState<StrapiArticleType['data']['attributes'] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const image = article?.Image.data.attributes.url

  const getArticle = async () => {
    try {
      const response = await axios.get<StrapiArticleType>(`${import.meta.env.VITE_STRAPI_URL}/api/articles/${articleId}?populate=*`)
      setArticle(response.data.data.attributes)
      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    getArticle()
  }, [])

  return (
    <Wrapper>
      <TextWrapper>
        {loading ?
          <LoadingContainer>
            {error && 'Pobieranie artykułów się nie powiodło... Spróbuj ponownie później.'}
            <MutatingDots
              color='#ef5454'
              secondaryColor='#ef5454'
            />
          </LoadingContainer>
          :
          <Container>
            <ImageContainer>
              <img src={image} alt={article?.Title} />
            </ImageContainer>
            <h2>{article?.Title}</h2>
            <p>{article?.Description}</p>
          </Container>
        }
      </TextWrapper>
    </Wrapper>
  )
}

export default SpecificArticle
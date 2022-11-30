import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { StrapiArticleType } from '../../types/strapi'
import { Container, ImageContainer, Wrapper } from './SpecificArticle.styles'

function SpecificArticle() {
  const { articleId } = useParams()
  const [article, setArticle] = useState<StrapiArticleType['data']['attributes'] | null>(null)
  const image = article?.Image.data.attributes.url

  const getArticle = async () => {
    const response = await axios.get<StrapiArticleType>(`http://localhost:1337/api/articles/${articleId}?populate=*`)
    setArticle(response.data.data.attributes)
  }

  useEffect(() => {
    getArticle()
  }, [])

  return (
    <Wrapper>
      <TextWrapper>
        <Container>
          <ImageContainer>
            <img src={`http://localhost:1337${image}`} alt={article?.Title} />
          </ImageContainer>
          <h2>{article?.Title}</h2>
          <p>{article?.Description}</p>
        </Container>
      </TextWrapper>
    </Wrapper>
  )
}

export default SpecificArticle
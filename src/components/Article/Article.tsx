import { format } from 'date-fns'
import { useNavigate } from 'react-router'
import { ArticleType, StrapiAttributesType } from '../../types/strapi'
import { Container, ImageContainer, ShowMoreText, Wrapper } from './Article.styles'

type ArticleProps = {
  article: StrapiAttributesType<ArticleType>
  id: number
}

function Article({ article, id }: ArticleProps) {
  const { Title, Description, Image, publishedAt } = article
  const image = Image.data.attributes.url
  const navigate = useNavigate()

  return (
    <Wrapper onClick={() => navigate(`${id}`)}>
      <ImageContainer>
        <img src={image} alt={Title} />
      </ImageContainer>
      <Container>
        <p>{format(new Date(publishedAt), 'dd MMM yyyy')}</p>
        <h2>{Title}</h2>
        <p>{Description.substring(0, 140)}...<ShowMoreText to={`${id}`}>Read more</ShowMoreText></p>
      </Container>
    </Wrapper>
  )
}

export default Article
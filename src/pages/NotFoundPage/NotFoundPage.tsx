import { LinkItem, Wrapper } from './NotFoundPage.styles'
import WarningImage from '../../assets/warning.png'
import { motion } from 'framer-motion'

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <motion.img
        src={WarningImage} alt="Ilustracja przedstawiająca znak ostrzegawczy - taka ścieżka nie istnieje"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <p>Coś poszło nie tak, taka ścieżka nie istnieje...</p>
      <LinkItem to='/'>Wróć do strony głównej</LinkItem>
    </Wrapper>
  )
}

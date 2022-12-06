import { useEffect } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Container, ContainerTestAccountInfo, ErrorMsg, LoginButtons, LoginPageWrapper, LogInWrapper, RegisterButton, RegisterText } from './Login.styles'
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../firebase/firebase';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import profilePhoto from '../../assets/undraw_pic_profile_re_1865.svg'
import { Wave } from '../../components/Wave/Wave';
import { motion } from 'framer-motion';

type Inputs = {
  email: string,
  password: string,
};

function Login() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth);

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    logInWithEmailAndPassword(email, password)
  };

  const schema = yup.object().shape({
    email: yup.string()
      .email('Please enter a valid email schema')
      .required('Please enter your email'),
    password: yup.string()
      .required('Please enter your password')
      .min(3, 'Password must have more than 3 characters'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])


  return (
    <LoginPageWrapper>
      <TextWrapper>
        <Container>
          <LogInWrapper
            as={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder='E-mail Address'
                {...register('email')} />
              <ErrorMsg>{errors.email?.message}</ErrorMsg>
              <input
                type="password"
                placeholder='Password'
                {...register('password')} />
              <ErrorMsg>{errors.password?.message}</ErrorMsg>
              <LoginButtons>Login</LoginButtons>
            </form>
            <p>or</p>
            <LoginButtons onClick={signInWithGoogle}>Login with Google</LoginButtons>
            <RegisterText>Don't have an account? <RegisterButton onClick={() => navigate('/register')}>Register</RegisterButton> now</RegisterText>
            <img src={profilePhoto} alt="profile image" />
            <ContainerTestAccountInfo>
              <p>Testowy użytkownik:</p>
              <p>email: test@example.pl</p>
              <p>hasło: test12</p>
            </ContainerTestAccountInfo>
          </LogInWrapper>
        </Container>
      </TextWrapper>
      <Wave />
    </LoginPageWrapper>
  )
}

export default Login
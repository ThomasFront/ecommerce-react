import React, { useEffect } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Container, ErrorMsg, LoginButtons, LoginPageWrapper, LogInWrapper, RegisterButton, RegisterText } from './Login.styles'
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../firebase/firebase';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import profilePhoto from '../../assets/undraw_pic_profile_re_1865.svg'
import { Wave } from '../../components/Wave/Wave';

type Inputs = {
  email: string,
  password: string,
};

function Login() {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    logInWithEmailAndPassword(email, password)
  };

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
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
          <LogInWrapper>
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
            <img src={profilePhoto} alt="" />
          </LogInWrapper>
        </Container>
      </TextWrapper>
      <Wave />
    </LoginPageWrapper>
  )
}

export default Login
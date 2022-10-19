import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Container, ErrorMsg, RegisteredText, RegisterWrapper } from './Register.styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../../firebase/firebase';
import { useNavigate } from 'react-router';

type Inputs = {
  email: string,
  password: string,
  name: string,
};

function Register() {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);

  const onSubmit: SubmitHandler<Inputs> = ({ email, password, name }) => {
    registerWithEmailAndPassword(name, email, password)
    navigate('/')
  };
  
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(3).max(20),
    name: yup.string().required().min(3),
  })
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  if (user) {
    return <RegisteredText>
      <p>You are already registered</p>
      <button onClick={() => navigate('/')}>Back to shop</button>
      </RegisteredText>
  }

  return (
    <TextWrapper>
      <Container>
        <RegisterWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder='Email'
              {...register('email')} />
            <ErrorMsg>{errors.email?.message}</ErrorMsg>
            <input
              type="password"
              placeholder='Password'
              {...register('password')} />
            <ErrorMsg>{errors.password?.message}</ErrorMsg>
            <input
              type="text"
              placeholder='Name'
              {...register('name')} />
            <ErrorMsg>{errors.name?.message}</ErrorMsg>
            <button>Register</button>
          </form>
        </RegisterWrapper>
      </Container>
    </TextWrapper>
  )
}

export default Register
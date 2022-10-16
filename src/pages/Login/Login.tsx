import React from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Container, LoginButtons, LogInWrapper, RegisterButton, RegisterText } from './Login.styles'

function Login() {

  return (
    <TextWrapper>
      <Container>
        <LogInWrapper>
          <form>
            <input
              type="email"
              placeholder='E-mail Address' />
            <input
              type="password"
              placeholder='Password' />
            <LoginButtons>Login</LoginButtons>
          </form>
          <p>or</p>
          <LoginButtons>Login with Google</LoginButtons>
          <RegisterText>Don't have an account? <RegisterButton>Register</RegisterButton> now</RegisterText>
        </LogInWrapper>
      </Container>
    </TextWrapper>
  )
}

export default Login
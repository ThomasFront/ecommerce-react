import { SubmitHandler, useForm } from 'react-hook-form';
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { CheckboxContainer, Container, ErrorMsg, RegisteredText, RegisterPageWrapper, RegisterText, RegisterWrapper } from './Register.styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../../firebase/firebase';
import { useNavigate } from 'react-router';
import Blob from '../../components/Blob/Blob';
import { Wave } from '../../components/Wave/Wave';
import { motion } from 'framer-motion';

type Inputs = {
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
  checkbox: boolean
};

function Register() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth);

  const onSubmit: SubmitHandler<Inputs> = ({ email, password, name }) => {
    registerWithEmailAndPassword(name, email, password)
    navigate('/')
  };

  const schema = yup.object().shape({
    email: yup.string()
      .email('Please enter a valid email schema')
      .required('Please enter your email'),
    password: yup.string()
      .required('Please enter your password')
      .min(6, 'Password must have more than 6 characters')
      .max(20, 'Password must have less than 20 characters'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
    name: yup.string()
      .required('Please enter your name')
      .min(3, 'Name must have more than 3 character'),
    checkbox: yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
  })
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  if (user) {
    return <RegisteredText>
      <p>You are already registered</p>
      <button onClick={() => navigate('/')}>Back to shop</button>
    </RegisteredText>
  }

  return (
    <RegisterPageWrapper>
      <TextWrapper>
        <Container>
          <RegisterWrapper>
            <RegisterText
              as={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              Register an account
            </RegisterText>
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
                type="password"
                placeholder='Confirm Password'
                {...register('confirmPassword')} />
              <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>
              <input
                type="text"
                placeholder='Name'
                {...register('name')} />
              <ErrorMsg>{errors.name?.message}</ErrorMsg>
              <CheckboxContainer>
                <p>I agree the Terms & Conditions</p>
                <input
                  type="checkbox"
                  {...register('checkbox')}
                />
              </CheckboxContainer>
              <ErrorMsg>{errors.checkbox?.message}</ErrorMsg>
              <button>Register</button>
            </form>
            <Blob />
          </RegisterWrapper>
        </Container>
      </TextWrapper>
      <Wave />
    </RegisterPageWrapper>
  )
}

export default Register
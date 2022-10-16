import React, { useEffect } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { auth } from '../../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router';


function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <TextWrapper>Profile</TextWrapper>
  )
}

export default Profile
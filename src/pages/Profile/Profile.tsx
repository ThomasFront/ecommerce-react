import React, { useEffect } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { auth } from '../../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { userInfoSelector } from '../../store/slices/userSlice';
import { AccountDetails, DeleteAccountInfo, ProfileContainer, ProfileWrapper } from './Profile.styles';
import { GrMail } from 'react-icons/gr'


function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  const userInfo = useSelector(userInfoSelector)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <TextWrapper>
      <ProfileContainer>
        <ProfileWrapper>
          <p>Hello <span>{userInfo?.name}</span>!</p>
          <AccountDetails>
            <GrMail />
            <p><span>{userInfo?.email}</span></p>
          </AccountDetails>
          <DeleteAccountInfo>
            <button>Delete account</button>
          </DeleteAccountInfo>
        </ProfileWrapper>
      </ProfileContainer>
    </TextWrapper>
  )
}

export default Profile
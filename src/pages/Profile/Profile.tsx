import React, { useEffect } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { auth, db, logout } from '../../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { userInfoSelector } from '../../store/slices/userSlice';
import { AccountDetails, ButtonsWrapper, DeleteAccountInfo, DeleteModal, ModalWrapper, ProfileContainer, ProfileWrapper } from './Profile.styles';
import { GrMail } from 'react-icons/gr'
import { BsTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { modalSelector, openModal } from '../../store/slices/categoriesSlice';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { deleteUser, getAuth, User } from 'firebase/auth';


function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  const userInfo = useSelector(userInfoSelector)
  const dispatch = useDispatch()
  const modal = useSelector(modalSelector)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  const handleDeleteAccount = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const docs = await getDocs(q);
    await deleteDoc(doc(db, "users", docs.docs[0].id))
    await deleteUser(user as User)
    dispatch(openModal(false))
    logout()
  }

  return (
    <>
      <TextWrapper>
        <ProfileContainer>
          <ProfileWrapper>
            <p>Hello <span>{userInfo?.name}</span>!</p>
            <AccountDetails>
              <GrMail />
              <p><span>{userInfo?.email}</span></p>
            </AccountDetails>
            <DeleteAccountInfo>
              <button onClick={() => dispatch(openModal(true))}><BsTrashFill />Delete account</button>
            </DeleteAccountInfo>
          </ProfileWrapper>
        </ProfileContainer>
      </TextWrapper>
      
        <DeleteModal showModal={modal}>
          <ModalWrapper>
            <p>Are you sure you want to delete your account?</p>
            <ButtonsWrapper>
              <button onClick={handleDeleteAccount}>Yes</button>
              <button onClick={() => dispatch(openModal(false))}>No</button>
            </ButtonsWrapper>
          </ModalWrapper>
        </DeleteModal>
    </>
  )
}

export default Profile
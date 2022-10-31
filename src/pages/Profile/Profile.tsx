import { useEffect, useState } from 'react'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { auth, db, logout } from '../../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { AccountDetails, ButtonsWrapper, DeleteAccountInfo, DeleteModal, LoadingWrapper, ModalWrapper, ProfileContainer, ProfilePageWrapper, ProfileWrapper } from './Profile.styles';
import { GrMail } from 'react-icons/gr'
import { BsTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { modalSelector, openModal } from '../../store/slices/categoriesSlice';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { deleteUser, getAuth, User } from 'firebase/auth';
import { Wave } from '../../components/Wave/Wave';
import { MutatingDots } from 'react-loader-spinner';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { clearCart } from '../../store/slices/cartSlice';
import { motion } from 'framer-motion';

type UserInformationType = {
  email: string,
  name: string,
  uid: string,
  signUpDate: any
}

function Profile() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const modal = useSelector(modalSelector)
  const [userInformation, setUserInformation] = useState<UserInformationType | null>(null)
  const [loading, setLoading] = useState(true)

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
    dispatch(clearCart())
    navigate('/')
  }

  const handleTimestamp = (timestamp: number) => {
    const diffInYears = differenceInYears(Date.now(), timestamp)
    const diffInMonths = differenceInMonths(Date.now(), timestamp)
    const diffInDays = differenceInDays(Date.now(), timestamp)
    if (diffInYears) {
      return `${diffInYears} ${diffInYears === 1 ? 'year ago' : 'years ago'}`
    }
    if (diffInMonths) {
      return `${diffInMonths} ${diffInMonths === 1 ? 'month ago' : 'months ago'}`
    }
    if (diffInDays) {
      return `${diffInDays} ${diffInDays === 1 ? 'day ago' : 'days ago'}`
    }
    return 'less than 1 day ago'
  }

  const getUser = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const docs = await getDocs(q);
    const userData = docs.docs[0].data() as UserInformationType
    setUserInformation({
      ...userData,
      signUpDate: handleTimestamp(userData.signUpDate)
    })
    setLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ProfilePageWrapper>
      <TextWrapper>
        <ProfileContainer
          as={motion.div}
          initial={{ scale: 0}}
          animate={{ scale:1 }}
        >
          <ProfileWrapper>
            {loading ?
              <LoadingWrapper>
                <MutatingDots
                  color='#ef5454'
                  secondaryColor='#ef5454'
                />
              </LoadingWrapper> :
              <>
                <p>Hello <span>{userInformation?.name}</span>!</p>
                <p>registered: <span>{userInformation?.signUpDate}</span></p>
                <AccountDetails>
                  <GrMail />
                  <p><span>{userInformation?.email}</span></p>
                </AccountDetails>
                <DeleteAccountInfo>
                  <button onClick={() => dispatch(openModal(true))}><BsTrashFill />Delete account</button>
                </DeleteAccountInfo>
              </>
            }
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
      <Wave />
    </ProfilePageWrapper>
  )
}

export default Profile
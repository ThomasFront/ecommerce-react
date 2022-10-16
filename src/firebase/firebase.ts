import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { query, where, collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeUtuFKTgYo7rD7uYNg6QiantwCrwlSDs",
  authDomain: "futureproject-95796.firebaseapp.com",
  projectId: "futureproject-95796",
  storageBucket: "futureproject-95796.appspot.com",
  messagingSenderId: "987228157409",
  appId: "1:987228157409:web:a6ad147c056d1c0700cea0",
  measurementId: "G-L4RJ12W8QP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)

// GOOGLE

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// GOOGLE LOGIN

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

// REGISTER WITH EMAIL AND PASSWORD

export const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

// LOGOUT

export const logout = () => {
  signOut(auth);
};
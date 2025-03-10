import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from "../firebase/firebase.config"

export const authContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const googleProvider=new GoogleAuthProvider();

  const createUser=(email,pass)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,pass);
  }

  const googleLogin=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  const login=(email,pass)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,pass)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

  const logout=()=>{
    setLoading(false);
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      return unsubscribe();
    }
  },[])
  console.log(user);

  const authInfo={
    user,
    setUser,
    loading,
    createUser,
    login,
    logout,
    updateUserProfile,
    googleLogin
  }
  return (
    <authContext.Provider value={authInfo}>{
      children
    }</authContext.Provider>
  );
};

export default AuthProvider;
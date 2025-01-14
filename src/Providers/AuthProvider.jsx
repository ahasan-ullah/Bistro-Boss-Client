import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {app} from "../firebase/firebase.config"

export const authContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const createUser=(email,pass)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,pass);
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
    return signOut();
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

  const authInfo={
    user,
    setUser,
    loading,
    createUser,
    login,
    logout,
    updateUserProfile
  }
  return (
    <authContext.Provider value={authInfo}>{
      children
    }</authContext.Provider>
  );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from "../firebase/firebase.config"
import useAxiosPublic from "../hooks/useAxiosPublic";

export const authContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const axiosPublic=useAxiosPublic();

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
      if(currentUser){
        const userInfo={email: currentUser.email};
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        })
      }
      else{
        localStorage.removeItem('access-token');
      }
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
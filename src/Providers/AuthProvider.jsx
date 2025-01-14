import { createContext, useState } from "react";

const authContext=createContext(null);
const AuthProvider = () => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const authInfo={
    user
  }
  return (
    <authContext.Provider value={authInfo}></authContext.Provider>
  );
};

export default AuthProvider;